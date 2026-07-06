const elements = {
  appTitleButton: document.querySelector("#app-title-button"),
  categoryFilter: document.querySelector("#category-filter"),
  searchInput: document.querySelector("#search-input"),
  documentList: document.querySelector("#document-list"),
  documentCount: document.querySelector("#document-count"),
  currentDocument: document.querySelector("#current-document"),
  printButton: document.querySelector("#print-button"),
  reader: document.querySelector("#reader"),
};

const state = {
  documents: [],
  selectedId: null,
  activeRequest: null,
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showReaderMessage(title, detail = "", type = "Reading room") {
  elements.reader.innerHTML = `
    <div class="reader-state">
      <p class="state-label">${escapeHtml(type)}</p>
      <h2>${escapeHtml(title)}</h2>
      ${detail ? `<p>${escapeHtml(detail)}</p>` : ""}
    </div>
  `;
}

function stripFrontmatter(markdown) {
  return markdown.replace(
    /^\uFEFF?---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/,
    "",
  );
}

async function fetchDocumentContent(document, signal) {
  const markdownResponse = await fetch(document.path, { signal });
  if (markdownResponse.ok) {
    return {
      format: "markdown",
      content: stripFrontmatter(await markdownResponse.text()),
    };
  }

  if (markdownResponse.status !== 404 || !document.path.toLowerCase().endsWith(".md")) {
    throw new Error(`HTTP ${markdownResponse.status}`);
  }

  const htmlPath = document.path.replace(/\.md$/i, ".html");
  const htmlResponse = await fetch(htmlPath, { signal });
  if (!htmlResponse.ok) {
    throw new Error(`HTTP ${markdownResponse.status}; HTML fallback ${htmlResponse.status}`);
  }

  return {
    format: "jekyll-html",
    content: await htmlResponse.text(),
  };
}

function renderJekyllHtml(html) {
  const parsedDocument = new DOMParser().parseFromString(html, "text/html");
  const content = parsedDocument.querySelector(".markdown-body");
  if (!content) {
    throw new Error("Jekyll document body not found");
  }

  const siteHeading = content.firstElementChild;
  if (siteHeading?.matches("h1") && siteHeading.querySelector("a[href]")) {
    siteHeading.remove();
  }

  elements.reader.innerHTML = content.innerHTML;
  enhanceRenderedContent();
}

function enhanceRenderedContent() {
  elements.reader.querySelectorAll("table").forEach((table) => {
    if (table.parentElement?.classList.contains("table-wrapper")) {
      return;
    }

    const wrapper = window.document.createElement("div");
    wrapper.className = "table-wrapper";
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute("aria-label", "스크롤 가능한 표");
    wrapper.tabIndex = 0;
    table.before(wrapper);
    wrapper.appendChild(table);
  });
}

function getFileName(path) {
  return path.split("/").pop();
}

function renderRootIndex() {
  if (state.activeRequest) {
    state.activeRequest.abort();
    state.activeRequest = null;
  }

  state.selectedId = null;
  elements.currentDocument.textContent = "Reading Room 현황";
  renderDocumentList();

  const categories = [
    ...new Set(state.documents.map((document) => document.category)),
  ];

  const sections = categories
    .map((category) => {
      const rows = state.documents
        .filter((document) => document.category === category)
        .map(
          (document) => `
            <tr>
              <td>
                <button
                  class="root-index-link"
                  type="button"
                  data-root-document-id="${escapeHtml(document.id)}"
                >
                  ${escapeHtml(document.title)}
                </button>
              </td>
              <td>${escapeHtml(getFileName(document.path))}</td>
              <td><span class="root-index-type">${escapeHtml(document.type)}</span></td>
              <td class="root-index-path"><code>${escapeHtml(document.path)}</code></td>
              <td>${escapeHtml(document.description)}</td>
            </tr>
          `,
        )
        .join("");

      return `
        <section class="root-index-section">
          <h2>${escapeHtml(category)}</h2>
          <div
            class="table-wrapper"
            role="region"
            aria-label="${escapeHtml(category)} 문서 목록"
            tabindex="0"
          >
            <table class="root-index-table">
              <thead>
                <tr>
                  <th scope="col">표시 제목</th>
                  <th scope="col">파일명</th>
                  <th scope="col">type</th>
                  <th scope="col">path</th>
                  <th scope="col">description</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </section>
      `;
    })
    .join("");

  elements.reader.innerHTML = `
    <div class="root-index">
      <p class="state-label">Root index</p>
      <h1>Reading Room 현황</h1>
      <section class="flow-diagram-section">
        <h2>문서 관리 플로우</h2>
        <figure class="flow-diagram">
          <img
            src="assets/diagrams/project-reading-room-document-flow.png"
            alt="Project Reading Room Document Flow diagram"
          />
          <figcaption>
            Project Reading Room의 문서 유입, 원본 저장, reading copy 반영 흐름
          </figcaption>
        </figure>
      </section>
      <p class="root-index-summary">등록 문서 수: <strong>${state.documents.length}</strong></p>
      ${
        sections ||
        '<p class="root-index-empty">아직 library.json에 등록된 문서가 없습니다.</p>'
      }
    </div>
  `;
  window.document.title = "Reading Room 현황 — Project Reading Room";
}

function populateCategories() {
  const categories = [...new Set(state.documents.map((document) => document.category))];

  const options = categories
    .map(
      (category) =>
        `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`,
    )
    .join("");

  elements.categoryFilter.insertAdjacentHTML("beforeend", options);
}

function getFilteredDocuments() {
  const category = elements.categoryFilter.value;
  const query = elements.searchInput.value.trim().toLocaleLowerCase();

  return state.documents.filter((document) => {
    const matchesCategory = category === "all" || document.category === category;
    const searchableText = [
      document.title,
      document.description,
      document.category,
    ]
      .join(" ")
      .toLocaleLowerCase();

    return matchesCategory && (!query || searchableText.includes(query));
  });
}

function renderDocumentList() {
  const documents = getFilteredDocuments();
  elements.documentCount.textContent = `${documents.length} document${documents.length === 1 ? "" : "s"}`;

  const rootIndexItem = `
    <li>
      <button
        class="document-button${state.selectedId === null ? " is-active" : ""}"
        type="button"
        data-show-root-index
        ${state.selectedId === null ? 'aria-current="page"' : ""}
      >
        <span class="document-title">Reading Room 현황</span>
        <span class="document-meta">Root index</span>
      </button>
    </li>
  `;

  const documentItems = documents
    .map(
      (document) => `
        <li>
          <button
            class="document-button${document.id === state.selectedId ? " is-active" : ""}"
            type="button"
            data-document-id="${escapeHtml(document.id)}"
            ${document.id === state.selectedId ? 'aria-current="true"' : ""}
          >
            <span class="document-title">${escapeHtml(document.title)}</span>
            <span class="document-meta">${escapeHtml(document.category)} · ${escapeHtml(document.type)}</span>
          </button>
        </li>
      `,
    )
    .join("");

  const emptyMessage = documents.length
    ? ""
    : '<li class="list-message">검색 조건에 맞는 문서가 없습니다.</li>';

  elements.documentList.innerHTML = rootIndexItem + documentItems + emptyMessage;
}

async function loadDocument(document) {
  if (state.activeRequest) {
    state.activeRequest.abort();
  }

  const controller = new AbortController();
  state.activeRequest = controller;
  state.selectedId = document.id;
  elements.currentDocument.textContent = document.title;
  renderDocumentList();
  showReaderMessage("문서를 불러오는 중입니다…", document.description, "Loading");

  try {
    const loadedDocument = await fetchDocumentContent(document, controller.signal);
    if (loadedDocument.format === "jekyll-html") {
      renderJekyllHtml(loadedDocument.content);
      window.document.title = `${document.title} — Project Reading Room`;
      return;
    }

    const markdown = loadedDocument.content;
    if (!window.marked || typeof window.marked.parse !== "function") {
      elements.reader.innerHTML = `
        <div class="reader-state">
          <p class="state-label">Renderer unavailable</p>
          <h2>Markdown 렌더러를 불러오지 못했습니다.</h2>
          <p>원문을 대신 표시합니다. 인터넷 연결 후 새로고침하면 서식이 적용됩니다.</p>
        </div>
        <pre class="raw-markdown">${escapeHtml(markdown)}</pre>
      `;
      return;
    }

    elements.reader.innerHTML = window.marked.parse(markdown, {
      gfm: true,
      breaks: false,
    });
    enhanceRenderedContent();
    window.document.title = `${document.title} — Project Reading Room`;
  } catch (error) {
    if (error.name === "AbortError") {
      return;
    }

    showReaderMessage(
      "문서를 불러오지 못했습니다.",
      `${document.title} 파일의 경로와 로컬 서버 상태를 확인해 주세요.`,
      "Load error",
    );
  } finally {
    if (state.activeRequest === controller) {
      state.activeRequest = null;
    }
  }
}

async function loadLibrary() {
  try {
    const response = await fetch("library.json");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const documents = await response.json();
    if (!Array.isArray(documents)) {
      throw new Error("library.json must contain an array");
    }

    state.documents = documents;
    populateCategories();
    renderRootIndex();
  } catch (error) {
    elements.documentList.innerHTML = `
      <li class="list-message">라이브러리 목록을 불러오지 못했습니다.</li>
    `;
    showReaderMessage(
      "라이브러리를 열 수 없습니다.",
      "fetch()가 동작하도록 로컬 서버 또는 GitHub Pages에서 열어 주세요.",
      "Library error",
    );
  }
}

elements.documentList.addEventListener("click", (event) => {
  const rootIndexButton = event.target.closest("[data-show-root-index]");
  if (rootIndexButton) {
    renderRootIndex();
    return;
  }

  const button = event.target.closest("[data-document-id]");
  if (!button) {
    return;
  }

  const document = state.documents.find((item) => item.id === button.dataset.documentId);
  if (document) {
    loadDocument(document);
  }
});

elements.reader.addEventListener("click", (event) => {
  const button = event.target.closest("[data-root-document-id]");
  if (!button) {
    return;
  }

  const document = state.documents.find(
    (item) => item.id === button.dataset.rootDocumentId,
  );
  if (document) {
    loadDocument(document);
  }
});

elements.appTitleButton.addEventListener("click", renderRootIndex);
elements.categoryFilter.addEventListener("change", renderDocumentList);
elements.searchInput.addEventListener("input", renderDocumentList);
elements.printButton.addEventListener("click", () => window.print());

loadLibrary();
