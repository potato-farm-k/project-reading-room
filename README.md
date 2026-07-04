# Project Reading Room

`project-reading-room`은 여러 개인 프로젝트와 학습 문서 중 다시 읽을 가치가 있는 Markdown 문서를 선별해 보여주는 개인용 Reading Room입니다. 정적 HTML, CSS, JavaScript로만 구성되어 별도의 build step 없이 GitHub Pages에서 동작합니다.

## 문서 운영 원칙

- 개별 프로젝트 repo는 해당 프로젝트의 공식 원본 문서를 관리합니다.
- `project-reading-room`의 project-specific 문서는 원본을 읽기 좋게 복사한 `reading-copy`입니다.
- `common` 문서는 여러 프로젝트에 공통으로 적용하는 학습 자료이며, 이 저장소가 원본(`source`)일 수 있습니다.
- 모든 문서를 모으기보다 반복해서 읽을 문서만 `library.json`에 등록합니다.

`reading-copy`를 수정해야 할 때는 먼저 원본 repo를 갱신한 뒤 이곳의 사본을 맞추는 것을 원칙으로 합니다.

## 폴더 구조

```text
library/
  common/
    vibe-coding-habit-guide.md
    prompt-library.md
    ai-collaboration-workflow.md
  living-aegis-origin/
    glossary.md
    sound-direction.md
    simulator-checklist.md
  potato-day/
    decision-log.md
    asset-notes.md
```

각 Markdown 파일에는 `title`, `category`, `source_repo`, `source_path`, `copy_type`, `last_reviewed`, `print_friendly`를 기록하는 간단한 YAML frontmatter가 있습니다. 앱은 이를 복잡하게 해석하지 않고 본문 렌더링 전에 숨깁니다.

## 문서 추가하기

1. `library/` 아래 알맞은 category 폴더에 Markdown 파일을 추가합니다.
2. 파일 상단에 기존 문서와 같은 형식의 frontmatter를 작성합니다.
3. `library.json`에 아래 필드로 문서를 등록합니다.

```json
{
  "id": "unique-document-id",
  "title": "Document Title",
  "category": "common",
  "path": "library/common/document.md",
  "type": "source",
  "description": "문서 목록과 검색에 표시할 짧은 설명"
}
```

`type`은 `source` 또는 `reading-copy`만 사용합니다. 모든 경로는 GitHub Pages의 프로젝트 사이트에서도 동작하도록 상대 경로로 작성합니다.

## 로컬에서 확인하기

브라우저의 `fetch()` 보안 정책 때문에 `index.html`을 직접 열지 말고 저장소 루트에서 정적 서버를 실행합니다.

```bash
python3 -m http.server 8000
```

브라우저에서 [http://localhost:8000](http://localhost:8000)을 열어 문서 선택, 검색, category filter와 인쇄 화면을 확인합니다. Markdown 렌더링에는 CDN의 [marked](https://marked.js.org/)를 사용하므로 서식 렌더링에는 인터넷 연결이 필요합니다. CDN을 사용할 수 없으면 앱이 raw Markdown을 대신 표시합니다.

## GitHub Pages에서 사용하기

1. GitHub 저장소의 **Settings → Pages**로 이동합니다.
2. Source를 **Deploy from a branch**로 선택합니다.
3. 배포할 branch와 `/(root)` 폴더를 선택하고 저장합니다.
4. Pages가 안내하는 URL에서 Reading Room을 확인합니다.

## 인쇄 및 PDF 저장

읽을 문서를 선택하고 **인쇄 / PDF** 버튼을 누릅니다. 인쇄 화면에서는 검색, category filter, 문서 목록과 조작 버튼이 숨겨지며 본문 중심의 흑백 친화적 레이아웃이 적용됩니다. 브라우저 인쇄 창의 대상에서 프린터 또는 PDF 저장을 선택합니다.

## MVP에서 제외한 기능

이 scaffold에는 로그인, 문서 편집·업로드, 댓글, 데이터베이스, 권한 관리, 자동 동기화, 서버 기반 PDF 생성, 복잡한 tag system, full-text search index, 즐겨찾기, 최근 본 문서, `localStorage`, syntax highlighting과 build tool을 의도적으로 포함하지 않습니다.
