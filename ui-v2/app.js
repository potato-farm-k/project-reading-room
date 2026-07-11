const elements = {
  homeButton: document.querySelector("#home-button"),
  breadcrumbHome: document.querySelector("#breadcrumb-home"),
  breadcrumbCurrent: document.querySelector("#breadcrumb-current"),
  categoryFilters: document.querySelector("#category-filters"),
  searchInput: document.querySelector("#search-input"),
  documentList: document.querySelector("#document-list"),
  documentCount: document.querySelector("#document-count"),
  printButton: document.querySelector("#print-button"),
  reader: document.querySelector("#reader"),
};

const state = {
  documents: [],
  selectedId: null,
  activeCategory: "all",
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

function stripFrontmatter(markdown) {
  return markdown.replace(
    /^\uFEFF?---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/,
    "",
  );
}

function setReaderState(title, detail = "", label = "Reading room") {
  elements.reader.innerHTML = `
    <div class="reader-state">
      <span class="state-dot" aria-hidden="true"></span>
      <p class="eyebrow">${escapeHtml(label)}</p>
      <h1>${escapeHtml(title)}</h1>
      ${detail ? `<p>${escapeHtml(detail)}</p>` : ""}
    </div>
  `;
}

function getCategories() {
  return [...new Set(state.documents.map((document) => document.category))];
}

function getFilteredDocuments() {
  const query = elements.searchInput.value.trim().toLocaleLowerCase();

  return state.documents.filter((document) => {
    const matchesCategory =
      state.activeCategory === "all" || document.category === state.activeCategory;
    const searchableText = [
      document.title,
      document.description,
      document.category,
      document.type,
      document.path,
    ]
      .join(" ")
      .toLocaleLowerCase();

    return matchesCategory && (!query || searchableText.includes(query));
  });
}

function categoryLabel(category) {
  return category.replaceAll("-", " ");
}

function renderCategoryFilters() {
  const categoryButtons = getCategories()
    .map(
      (category) => `
        <button
          class="filter-chip"
          type="button"
          data-category="${escapeHtml(category)}"
          aria-pressed="false"
        >
          ${escapeHtml(categoryLabel(category))}
        </button>
      `,
    )
    .join("");

  elements.categoryFilters.insertAdjacentHTML("beforeend", categoryButtons);
}

function renderDocumentList() {
  const documents = getFilteredDocuments();
  elements.documentCount.textContent = `${documents.length}개 문서`;

  const rootItem = `
    <li>
      <button
        class="document-button root-button${state.selectedId === null ? " is-active" : ""}"
        type="button"
        data-root-index
        ${state.selectedId === null ? 'aria-current="page"' : ""}
      >
        <span class="document-icon" aria-hidden="true">⌂</span>
        <span class="document-copy">
          <strong>Root Index</strong>
          <small>전체 문서 개요</small>
        </span>
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
            ${document.id === state.selectedId ? 'aria-current="page"' : ""}
          >
            <span class="document-icon" aria-hidden="true"></span>
            <span class="document-copy">
              <strong>${escapeHtml(document.title)}</strong>
              <small>${escapeHtml(categoryLabel(document.category))} · ${escapeHtml(document.type)}</small>
            </span>
          </button>
        </li>
      `,
    )
    .join("");

  const emptyItem = documents.length
    ? ""
    : '<li class="list-message">검색 조건에 맞는 문서가 없습니다.</li>';

  elements.documentList.innerHTML = rootItem + documentItems + emptyItem;
}

function renderRootIndex() {
  state.activeRequest?.abort();
  state.activeRequest = null;
  state.selectedId = null;
  elements.reader.setAttribute("aria-busy", "false");
  elements.breadcrumbCurrent.textContent = "Root Index";
  renderDocumentList();

  const categorySections = getCategories()
    .map((category) => {
      const documents = state.documents.filter((document) => document.category === category);
      const cards = documents
        .map(
          (document) => `
            <button class="index-card" type="button" data-index-document-id="${escapeHtml(document.id)}">
              <span class="card-topline">
                <span class="type-badge">${escapeHtml(document.type)}</span>
                <span class="card-arrow" aria-hidden="true">→</span>
              </span>
              <strong>${escapeHtml(document.title)}</strong>
              <span class="card-description">${escapeHtml(document.description)}</span>
              <code>${escapeHtml(document.path)}</code>
            </button>
          `,
        )
        .join("");

      return `
        <section class="index-section" aria-labelledby="category-${escapeHtml(category)}">
          <div class="index-section-heading">
            <div>
              <p class="eyebrow">Category</p>
              <h2 id="category-${escapeHtml(category)}">${escapeHtml(categoryLabel(category))}</h2>
            </div>
            <span>${documents.length} documents</span>
          </div>
          <div class="index-grid">${cards}</div>
        </section>
      `;
    })
    .join("");

  elements.reader.innerHTML = `
    <div class="root-index">
      <header class="index-hero">
        <p class="eyebrow">Root index · UI v2</p>
        <h1>다시 읽을 지식을<br />한곳에 모읍니다.</h1>
        <p class="hero-description">
          프로젝트의 결정, 설계 기준, 학습 기록을 탐색하고 오래 읽기 위한 개인 지식 아카이브입니다.
        </p>
        <dl class="index-stats">
          <div><dt>Documents</dt><dd>${state.documents.length}</dd></div>
          <div><dt>Categories</dt><dd>${getCategories().length}</dd></div>
          <div><dt>Format</dt><dd>Markdown</dd></div>
        </dl>
      </header>
      ${categorySections || '<p class="empty-index">등록된 문서가 없습니다.</p>'}
    </div>
  `;

  document.title = "Project Reading Room — UI v2";
}

async function fetchDocumentContent(document, signal) {
  const markdownPath = `../${document.path}`;
  const markdownResponse = await fetch(markdownPath, { signal });

  if (markdownResponse.ok) {
    return {
      format: "markdown",
      content: stripFrontmatter(await markdownResponse.text()),
    };
  }

  if (markdownResponse.status !== 404 || !document.path.toLowerCase().endsWith(".md")) {
    throw new Error(`HTTP ${markdownResponse.status}`);
  }

  const htmlPath = `../${document.path.replace(/\.md$/i, ".html")}`;
  const htmlResponse = await fetch(htmlPath, { signal });
  if (!htmlResponse.ok) {
    throw new Error(`HTTP ${markdownResponse.status}; HTML fallback ${htmlResponse.status}`);
  }

  return { format: "jekyll-html", content: await htmlResponse.text() };
}

function isRelativeReference(value) {
  return value && !value.startsWith("#") && !value.startsWith("/") && !/^[a-z][a-z\d+.-]*:/i.test(value);
}

function enhanceRenderedContent(document) {
  elements.reader.querySelectorAll("table").forEach((table) => {
    if (table.parentElement?.classList.contains("table-wrapper")) return;

    const wrapper = window.document.createElement("div");
    wrapper.className = "table-wrapper";
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute("aria-label", "스크롤 가능한 표");
    wrapper.tabIndex = 0;
    table.before(wrapper);
    wrapper.appendChild(table);
  });

  const documentDirectory = document.path.slice(0, document.path.lastIndexOf("/") + 1);
  elements.reader.querySelectorAll("a[href], img[src]").forEach((element) => {
    const attribute = element.matches("a") ? "href" : "src";
    const value = element.getAttribute(attribute);
    if (!isRelativeReference(value)) return;

    element.setAttribute(attribute, new URL(`../${documentDirectory}${value}`, window.location.href).href);
  });
}

function renderDocumentHeader(document) {
  return `
    <header class="document-header">
      <div class="document-labels">
        <span class="type-badge">${escapeHtml(document.type)}</span>
        <span class="category-label">${escapeHtml(categoryLabel(document.category))}</span>
      </div>
      <h1>${escapeHtml(document.title)}</h1>
      <p>${escapeHtml(document.description)}</p>
      <dl class="document-meta">
        <div><dt>Category</dt><dd>${escapeHtml(document.category)}</dd></div>
        <div><dt>Type</dt><dd>${escapeHtml(document.type)}</dd></div>
        <div><dt>Path</dt><dd><code>${escapeHtml(document.path)}</code></dd></div>
      </dl>
    </header>
  `;
}

async function loadDocument(document) {
  state.activeRequest?.abort();
  const controller = new AbortController();
  state.activeRequest = controller;
  state.selectedId = document.id;
  elements.reader.setAttribute("aria-busy", "true");
  elements.breadcrumbCurrent.textContent = document.title;
  renderDocumentList();
  setReaderState("문서를 불러오는 중입니다…", document.description, "Loading");

  try {
    const loadedDocument = await fetchDocumentContent(document, controller.signal);
    let bodyHtml;

    if (loadedDocument.format === "jekyll-html") {
      const parsedDocument = new DOMParser().parseFromString(loadedDocument.content, "text/html");
      const content = parsedDocument.querySelector(".markdown-body");
      if (!content) throw new Error("Jekyll document body not found");
      const siteHeading = content.firstElementChild;
      if (siteHeading?.matches("h1") && siteHeading.querySelector("a[href]")) siteHeading.remove();
      bodyHtml = content.innerHTML;
    } else if (window.marked && typeof window.marked.parse === "function") {
      bodyHtml = window.marked.parse(loadedDocument.content, { gfm: true, breaks: false });
    } else {
      bodyHtml = `
        <div class="renderer-warning">
          <strong>Markdown 렌더러를 불러오지 못했습니다.</strong>
          <span>인터넷 연결 후 새로고침하면 문서 서식이 적용됩니다.</span>
        </div>
        <pre class="raw-markdown">${escapeHtml(loadedDocument.content)}</pre>
      `;
    }

    elements.reader.innerHTML = `
      ${renderDocumentHeader(document)}
      <div class="markdown-body">${bodyHtml}</div>
    `;
    enhanceRenderedContent(document);
    documentTitle(document.title);
  } catch (error) {
    if (error.name === "AbortError") return;
    setReaderState(
      "문서를 불러오지 못했습니다.",
      `${document.title} 파일 경로와 로컬 서버 상태를 확인해 주세요.`,
      "Load error",
    );
  } finally {
    if (state.activeRequest === controller) {
      state.activeRequest = null;
      elements.reader.setAttribute("aria-busy", "false");
    }
  }
}

function documentTitle(title) {
  window.document.title = `${title} — Project Reading Room`;
}

function selectCategory(category) {
  state.activeCategory = category;
  elements.categoryFilters.querySelectorAll("[data-category]").forEach((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderDocumentList();
}

async function loadLibrary() {
  try {
    const response = await fetch("../library.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const documents = await response.json();
    if (!Array.isArray(documents)) throw new Error("library.json must contain an array");

    state.documents = documents;
    renderCategoryFilters();
    renderRootIndex();
  } catch (error) {
    elements.documentList.innerHTML = '<li class="list-message">라이브러리를 불러오지 못했습니다.</li>';
    elements.reader.setAttribute("aria-busy", "false");
    setReaderState(
      "라이브러리를 열 수 없습니다.",
      "fetch()가 동작하도록 로컬 서버 또는 GitHub Pages에서 열어 주세요.",
      "Library error",
    );
  }
}

elements.categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) selectCategory(button.dataset.category);
});

elements.documentList.addEventListener("click", (event) => {
  if (event.target.closest("[data-root-index]")) {
    renderRootIndex();
    return;
  }

  const button = event.target.closest("[data-document-id]");
  if (!button) return;
  const document = state.documents.find((item) => item.id === button.dataset.documentId);
  if (document) loadDocument(document);
});

elements.reader.addEventListener("click", (event) => {
  const button = event.target.closest("[data-index-document-id]");
  if (!button) return;
  const document = state.documents.find((item) => item.id === button.dataset.indexDocumentId);
  if (document) loadDocument(document);
});

elements.homeButton.addEventListener("click", renderRootIndex);
elements.breadcrumbHome.addEventListener("click", renderRootIndex);
elements.searchInput.addEventListener("input", renderDocumentList);
elements.printButton.addEventListener("click", () => window.print());

loadLibrary();
