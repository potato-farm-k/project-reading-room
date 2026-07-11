const elements = {
  categoryNavigation: document.querySelector("#category-navigation"),
  learningContent: document.querySelector("#learning-content"),
  searchToggle: document.querySelector("#search-toggle"),
  searchPanel: document.querySelector("#search-panel"),
  searchInput: document.querySelector("#search-input"),
  searchClose: document.querySelector("#search-close"),
  searchResults: document.querySelector("#search-results"),
};

const state = {
  libraryDocuments: [],
  learningDocuments: [],
  activeRequest: null,
};

const track = window.learningMap?.[0];
const part = track?.parts?.[0];

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

function allGuideEntries() {
  return (part?.categories || []).flatMap((category) =>
    category.documents.map((entry) => ({ ...entry, category })),
  );
}

function getLibraryDocument(documentId) {
  return state.learningDocuments.find((document) => document.id === documentId);
}

function getCategory(categoryId) {
  return part?.categories.find((category) => category.id === categoryId);
}

function getGuide(slug) {
  return allGuideEntries().find((entry) => entry.slug === slug);
}

function categoryRoute(categoryId) {
  return `#/web-foundation/part-1/${categoryId}`;
}

function guideRoute(slug) {
  return `#/web-foundation/guide/${slug}`;
}

function parseRoute() {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);

  if (parts[0] === "web-foundation" && parts[1] === "guide" && parts[2]) {
    return { type: "guide", slug: parts[2] };
  }

  if (
    parts[0] === "web-foundation" &&
    parts[1] === "part-1" &&
    parts[2]
  ) {
    return { type: "category", categoryId: parts[2] };
  }

  return { type: "category", categoryId: "all" };
}

function renderCategoryNavigation() {
  const links = (part?.categories || [])
    .map(
      (category) => `
        <a class="category-link" data-category-id="${escapeHtml(category.id)}" href="${categoryRoute(category.id)}">
          ${escapeHtml(category.title)}
        </a>
      `,
    )
    .join("");

  elements.categoryNavigation.insertAdjacentHTML("beforeend", links);
}

function setActiveCategory(categoryId) {
  elements.categoryNavigation.querySelectorAll("[data-category-id]").forEach((link) => {
    const isActive = link.dataset.categoryId === categoryId;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function renderError(title, detail) {
  elements.learningContent.innerHTML = `
    <section class="message-state">
      <p class="eyebrow">Learning UI</p>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(detail)}</p>
      <a href="${categoryRoute("all")}">Part I 전체 보기</a>
    </section>
  `;
  elements.learningContent.setAttribute("aria-busy", "false");
}

function renderPartOverview() {
  state.activeRequest?.abort();
  state.activeRequest = null;
  setActiveCategory("all");

  const categoryCards = part.categories
    .map((category, categoryIndex) => {
      const guideLinks = category.documents
        .map((entry) => {
          const libraryDocument = getLibraryDocument(entry.documentId);
          return `
            <li>
              <a href="${guideRoute(entry.slug)}">
                <span>${escapeHtml(entry.slug.toUpperCase())}</span>
                ${escapeHtml(entry.title)}
                ${libraryDocument ? "" : '<small>준비 중</small>'}
              </a>
            </li>
          `;
        })
        .join("");

      return `
        <article class="category-card">
          <a class="category-card-link" href="${categoryRoute(category.id)}">
            <span class="category-number">0${categoryIndex + 1}</span>
            <span class="category-arrow" aria-hidden="true">→</span>
            <h2>${escapeHtml(category.title)}</h2>
            <p>${escapeHtml(category.description)}</p>
          </a>
          <ol>${guideLinks}</ol>
        </article>
      `;
    })
    .join("");

  elements.learningContent.innerHTML = `
    <section class="overview-hero">
      <div class="hero-orb" aria-hidden="true"><span></span><span></span></div>
      <p class="eyebrow">${escapeHtml(track.title)}</p>
      <h1>웹을 외우지 않고,<br />흐름으로 이해합니다.</h1>
      <p class="hero-description">${escapeHtml(track.description)}</p>
      <dl class="track-stats">
        <div><dt>Part</dt><dd>01</dd></div>
        <div><dt>Categories</dt><dd>${part.categories.length}</dd></div>
        <div><dt>Guides</dt><dd>${allGuideEntries().length}</dd></div>
      </dl>
    </section>
    <section class="part-overview" aria-labelledby="part-title">
      <header class="part-heading">
        <div>
          <p class="eyebrow">Learning path</p>
          <h2 id="part-title">${escapeHtml(part.title)}</h2>
        </div>
        <p>${escapeHtml(part.description)}</p>
      </header>
      <div class="category-grid">${categoryCards}</div>
    </section>
  `;
  elements.learningContent.setAttribute("aria-busy", "false");
  window.document.title = "Project Reading Room Learning";
}

async function fetchGuideDocument(entry, signal) {
  const libraryDocument = getLibraryDocument(entry.documentId);
  if (!libraryDocument) {
    throw new Error(`Learning document not found: ${entry.documentId}`);
  }

  const markdownResponse = await fetch(`../${libraryDocument.path}`, { signal });
  if (markdownResponse.ok) {
    return {
      entry,
      libraryDocument,
      format: "markdown",
      content: stripFrontmatter(await markdownResponse.text()),
    };
  }

  if (markdownResponse.status !== 404 || !libraryDocument.path.toLowerCase().endsWith(".md")) {
    throw new Error(`HTTP ${markdownResponse.status}`);
  }

  const htmlResponse = await fetch(
    `../${libraryDocument.path.replace(/\.md$/i, ".html")}`,
    { signal },
  );
  if (!htmlResponse.ok) throw new Error(`HTML fallback ${htmlResponse.status}`);

  return {
    entry,
    libraryDocument,
    format: "jekyll-html",
    content: await htmlResponse.text(),
  };
}

function guideBodyHtml(loadedGuide) {
  let html;
  if (loadedGuide.format === "jekyll-html") {
    const parsedDocument = new DOMParser().parseFromString(loadedGuide.content, "text/html");
    const content = parsedDocument.querySelector(".markdown-body");
    if (!content) throw new Error("Jekyll document body not found");
    html = content.innerHTML;
  } else if (window.marked && typeof window.marked.parse === "function") {
    html = window.marked.parse(loadedGuide.content, { gfm: true, breaks: false });
  } else {
    return `
      <div class="renderer-warning">
        <strong>Markdown 렌더러를 불러오지 못했습니다.</strong>
        <span>인터넷 연결 후 새로고침하면 문서 서식이 적용됩니다.</span>
      </div>
      <pre class="raw-markdown">${escapeHtml(loadedGuide.content)}</pre>
    `;
  }

  const template = window.document.createElement("template");
  template.innerHTML = html;
  template.content.querySelector("h1")?.remove();
  return template.innerHTML;
}

function renderGuideSection(loadedGuide, options = {}) {
  const { entry, libraryDocument } = loadedGuide;
  const category = entry.category || options.category;
  return `
    <article id="guide-${escapeHtml(entry.slug)}" class="guide-section">
      <header class="guide-header">
        <p class="print-only">${escapeHtml(part.title)} · ${escapeHtml(category.title)}</p>
        <div class="guide-heading-row">
          <div>
            <p class="guide-number">${escapeHtml(entry.slug.toUpperCase())}</p>
            <h2>${escapeHtml(entry.title)}</h2>
          </div>
          ${
            options.individual
              ? `<a class="guide-view-link screen-only" href="${categoryRoute(category.id)}">Category 전체 읽기</a>`
              : `<a class="guide-view-link screen-only" href="${guideRoute(entry.slug)}">개별 Guide 보기</a>`
          }
        </div>
        <p>${escapeHtml(libraryDocument.description)}</p>
        <dl class="guide-meta">
          <div><dt>Category</dt><dd>${escapeHtml(category.title)}</dd></div>
          <div><dt>Source</dt><dd><code>${escapeHtml(libraryDocument.path)}</code></dd></div>
        </dl>
      </header>
      <div class="guide-body markdown-body" data-document-path="${escapeHtml(libraryDocument.path)}">
        ${guideBodyHtml(loadedGuide)}
      </div>
    </article>
  `;
}

function isRelativeReference(value) {
  return value && !value.startsWith("#") && !value.startsWith("/") && !/^[a-z][a-z\d+.-]*:/i.test(value);
}

function enhanceGuideContent() {
  elements.learningContent.querySelectorAll("table").forEach((table) => {
    if (table.parentElement?.classList.contains("table-wrapper")) return;
    const wrapper = window.document.createElement("div");
    wrapper.className = "table-wrapper";
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute("aria-label", "스크롤 가능한 표");
    wrapper.tabIndex = 0;
    table.before(wrapper);
    wrapper.appendChild(table);
  });

  elements.learningContent.querySelectorAll(".guide-body").forEach((body) => {
    const documentPath = body.dataset.documentPath;
    const directory = documentPath.slice(0, documentPath.lastIndexOf("/") + 1);

    body.querySelectorAll("a[href], img[src]").forEach((element) => {
      const attribute = element.matches("a") ? "href" : "src";
      const value = element.getAttribute(attribute);
      if (!isRelativeReference(value)) return;

      const resolvedUrl = new URL(`../${directory}${value}`, window.location.href);
      if (element.matches("a")) {
        const matchingDocument = state.learningDocuments.find(
          (document) => new URL(`../${document.path}`, window.location.href).pathname === resolvedUrl.pathname,
        );
        const matchingGuide = matchingDocument
          ? allGuideEntries().find((entry) => entry.documentId === matchingDocument.id)
          : null;
        if (matchingGuide) {
          element.setAttribute("href", guideRoute(matchingGuide.slug));
          return;
        }
      }
      element.setAttribute(attribute, resolvedUrl.href);
    });
  });
}

async function renderCategory(category) {
  state.activeRequest?.abort();
  const controller = new AbortController();
  state.activeRequest = controller;
  setActiveCategory(category.id);
  elements.learningContent.setAttribute("aria-busy", "true");

  const anchorButtons = category.documents
    .map(
      (entry) => `
        <button type="button" data-scroll-guide="${escapeHtml(entry.slug)}">
          <span>${escapeHtml(entry.slug.toUpperCase())}</span>
          ${escapeHtml(entry.title)}
        </button>
      `,
    )
    .join("");

  elements.learningContent.innerHTML = `
    <section class="category-intro">
      <p class="part-context">${escapeHtml(part.title)}</p>
      <p class="eyebrow">Category</p>
      <h1>${escapeHtml(category.title)}</h1>
      <p>${escapeHtml(category.description)}</p>
      <nav class="guide-anchors screen-only" aria-label="Category 내부 Guide">
        ${anchorButtons}
      </nav>
    </section>
    <div class="loading-state compact"><span aria-hidden="true"></span><p>Guide를 이어 붙이고 있습니다.</p></div>
  `;

  try {
    const loadedGuides = await Promise.all(
      category.documents.map((entry) =>
        fetchGuideDocument({ ...entry, category }, controller.signal),
      ),
    );
    if (controller.signal.aborted) return;

    const guideSections = loadedGuides
      .map((loadedGuide) => renderGuideSection(loadedGuide, { category }))
      .join("");
    elements.learningContent.querySelector(".loading-state")?.remove();
    elements.learningContent.insertAdjacentHTML("beforeend", `<div class="guide-flow">${guideSections}</div>`);
    enhanceGuideContent();
    window.document.title = `${category.title} — Project Reading Room Learning`;
  } catch (error) {
    if (error.name === "AbortError") return;
    renderError("Guide를 불러오지 못했습니다.", "문서 경로와 로컬 서버 상태를 확인해 주세요.");
  } finally {
    if (state.activeRequest === controller) {
      state.activeRequest = null;
      elements.learningContent.setAttribute("aria-busy", "false");
    }
  }
}

async function renderIndividualGuide(guide) {
  state.activeRequest?.abort();
  const controller = new AbortController();
  state.activeRequest = controller;
  setActiveCategory(guide.category.id);
  elements.learningContent.setAttribute("aria-busy", "true");
  elements.learningContent.innerHTML = `
    <section class="individual-context screen-only">
      <a href="${categoryRoute(guide.category.id)}">← ${escapeHtml(guide.category.title)} 전체 읽기</a>
      <span>${escapeHtml(part.title)}</span>
    </section>
    <div class="loading-state"><span aria-hidden="true"></span><p>Guide를 불러오는 중입니다.</p></div>
  `;

  try {
    const loadedGuide = await fetchGuideDocument(guide, controller.signal);
    if (controller.signal.aborted) return;
    elements.learningContent.querySelector(".loading-state")?.remove();
    elements.learningContent.insertAdjacentHTML(
      "beforeend",
      `<div class="guide-flow individual">${renderGuideSection(loadedGuide, {
        individual: true,
        category: guide.category,
      })}</div>`,
    );
    enhanceGuideContent();
    window.document.title = `${guide.slug.toUpperCase()} — Project Reading Room Learning`;
  } catch (error) {
    if (error.name === "AbortError") return;
    renderError("Guide를 불러오지 못했습니다.", "문서 경로와 로컬 서버 상태를 확인해 주세요.");
  } finally {
    if (state.activeRequest === controller) {
      state.activeRequest = null;
      elements.learningContent.setAttribute("aria-busy", "false");
    }
  }
}

function renderRoute() {
  if (!track || !part) {
    renderError("Learning map을 읽을 수 없습니다.", "learning-map.js 구성을 확인해 주세요.");
    return;
  }

  const route = parseRoute();
  window.scrollTo({ top: 0, behavior: "auto" });

  if (route.type === "guide") {
    const guide = getGuide(route.slug);
    if (guide) renderIndividualGuide(guide);
    else renderError("Guide를 찾을 수 없습니다.", "주소의 Guide ID를 확인해 주세요.");
    return;
  }

  if (route.categoryId === "all") {
    renderPartOverview();
    return;
  }

  const category = getCategory(route.categoryId);
  if (category) renderCategory(category);
  else renderError("Category를 찾을 수 없습니다.", "상단 메뉴에서 학습 주제를 선택해 주세요.");
}

function renderSearchResults() {
  const query = elements.searchInput.value.trim().toLocaleLowerCase();
  if (!query) {
    elements.searchResults.innerHTML = "<p>Guide 번호, 제목 또는 설명으로 검색할 수 있습니다.</p>";
    return;
  }

  const matches = allGuideEntries().filter((entry) => {
    const libraryDocument = getLibraryDocument(entry.documentId);
    if (!libraryDocument) return false;
    return [entry.slug, entry.title, entry.category.title, libraryDocument.title, libraryDocument.description]
      .join(" ")
      .toLocaleLowerCase()
      .includes(query);
  });

  elements.searchResults.innerHTML = matches.length
    ? matches
        .map(
          (entry) => `
            <a href="${guideRoute(entry.slug)}" data-search-result>
              <span>${escapeHtml(entry.slug.toUpperCase())} · ${escapeHtml(entry.category.title)}</span>
              <strong>${escapeHtml(entry.title)}</strong>
            </a>
          `,
        )
        .join("")
    : "<p>검색 결과가 없습니다.</p>";
}

function toggleSearch(open) {
  elements.searchPanel.hidden = !open;
  elements.searchToggle.setAttribute("aria-expanded", String(open));
  if (open) window.setTimeout(() => elements.searchInput.focus(), 0);
}

async function loadLibrary() {
  try {
    const response = await fetch("../library.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const documents = await response.json();
    if (!Array.isArray(documents)) throw new Error("library.json must contain an array");

    state.libraryDocuments = documents;
    state.learningDocuments = documents.filter((document) => document.category === "learning");
    renderCategoryNavigation();
    renderRoute();
  } catch (error) {
    renderError(
      "Learning Library를 열 수 없습니다.",
      "fetch()가 동작하도록 로컬 서버 또는 GitHub Pages에서 열어 주세요.",
    );
  }
}

elements.learningContent.addEventListener("click", (event) => {
  const button = event.target.closest("[data-scroll-guide]");
  if (!button) return;
  document.querySelector(`#guide-${CSS.escape(button.dataset.scrollGuide)}`)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

elements.searchToggle.addEventListener("click", () => toggleSearch(elements.searchPanel.hidden));
elements.searchClose.addEventListener("click", () => toggleSearch(false));
elements.searchInput.addEventListener("input", renderSearchResults);
elements.searchResults.addEventListener("click", (event) => {
  if (event.target.closest("[data-search-result]")) toggleSearch(false);
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.searchPanel.hidden) toggleSearch(false);
});
window.addEventListener("hashchange", renderRoute);

loadLibrary();
