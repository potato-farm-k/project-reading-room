const elements = {
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

function populateCategories() {
  const categories = [...new Set(state.documents.map((document) => document.category))].sort(
    (a, b) => a.localeCompare(b),
  );

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

  if (!documents.length) {
    elements.documentList.innerHTML = `
      <li class="list-message">검색 조건에 맞는 문서가 없습니다.</li>
    `;
    return;
  }

  elements.documentList.innerHTML = documents
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
    const response = await fetch(document.path, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const markdown = stripFrontmatter(await response.text());
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

    elements.reader.innerHTML = window.marked.parse(markdown);
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
    renderDocumentList();

    if (documents.length) {
      await loadDocument(documents[0]);
    } else {
      showReaderMessage("아직 등록된 문서가 없습니다.", "library.json에 문서를 추가해 주세요.");
    }
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
  const button = event.target.closest("[data-document-id]");
  if (!button) {
    return;
  }

  const document = state.documents.find((item) => item.id === button.dataset.documentId);
  if (document) {
    loadDocument(document);
  }
});

elements.categoryFilter.addEventListener("change", renderDocumentList);
elements.searchInput.addEventListener("input", renderDocumentList);
elements.printButton.addEventListener("click", () => window.print());

loadLibrary();
