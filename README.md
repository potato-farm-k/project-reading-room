# Project Reading Room

`project-reading-room`은 여러 개인 프로젝트와 학습 문서 중 다시 읽을 가치가 있는 Markdown 문서를 선별해 보여주는 개인용 Reading Room입니다. 정적 HTML, CSS, JavaScript로만 구성되어 별도의 build step 없이 GitHub Pages에서 동작합니다.

앱을 처음 열면 `library.json`을 기준으로 생성한 **Root Index / 현황** 화면이 표시됩니다. 화면 상단의 Project Reading Room Document Flow 다이어그램에서 문서 유입, 원본 저장과 reading copy 반영 흐름을 빠르게 확인할 수 있습니다. 이 화면에서 category별 문서의 표시 제목, 파일명, type, path와 description을 확인하고 문서 제목을 눌러 바로 열 수 있습니다. 좌측의 **Project Reading Room** 제목이나 문서 목록 최상단의 **현황**을 누르면 언제든 Root Index로 돌아갑니다.

## 문서 운영 원칙

- 개별 프로젝트 repo는 해당 프로젝트의 공식 원본 문서를 관리합니다.
- `project-reading-room`의 project-specific 문서는 원본을 읽기 좋게 복사한 `reading-copy`입니다.
- `common` 문서는 여러 프로젝트에 공통으로 적용하는 학습 자료이며, 이 저장소가 원본(`source`)일 수 있습니다.
- 모든 문서를 모으기보다 반복해서 읽을 문서만 `library.json`에 등록합니다.
- `library.json`이 리딩룸의 문서 목록과 화면 메타데이터를 정하는 기준입니다.
- `library.json`에 작성한 순서가 화면의 문서 표시 순서이며, 읽기 좋은 순서는 이 파일에서 수동으로 관리합니다.

`reading-copy`를 수정해야 할 때는 먼저 원본 repo를 갱신한 뒤 이곳의 사본을 맞추는 것을 원칙으로 합니다.

> 수정은 원본 문서에서 합니다. 리딩룸은 읽기 좋은 사본을 보여줍니다.

## 문서 유입 워크플로우

리딩룸 포함 여부는 개별 프로젝트 PM과 사용자가 함께 판단합니다. `project-reading-room`은 문서를 다시 심사하는 곳이 아니라, 이미 승인된 문서를 읽기 좋게 운영 반영하는 곳입니다.

역할은 다음과 같이 구분합니다.

- **개별 프로젝트 PM + 사용자:** 리딩룸에 포함할 문서를 선별하고 승인합니다.
- **개별 프로젝트 repo / 개별 프로젝트 Codex:** project-specific 원본 문서를 저장하고 수정합니다.
- **Reading Room Codex:** 승인된 문서의 reading copy 생성, YAML frontmatter 작성, `library.json` 업데이트, 리딩룸 표시와 print/PDF 출력을 확인합니다.
- **project-reading-room:** project-specific 문서의 reading copy와 이 저장소가 원본일 수 있는 `common` 문서를 운영합니다.

Reading Room Codex는 원본 repo를 수정하지 않으며, 문서 내용을 대규모로 다시 작성하거나 승인 결정을 되풀이하지 않습니다. 원본 수정이 필요하면 개별 프로젝트에서 먼저 반영한 뒤 reading copy를 다시 가져옵니다.

### 문서 상태 분류

아래 상태값은 개별 프로젝트 PM의 **Reading Room 반영 요청 리포트에서만 사용하는 참고값**입니다. 앱 기능이나 `library.json` 스키마에는 추가하지 않습니다.

| 상태 | 의미 |
| --- | --- |
| `ready` | 원본 문서가 repo에 있고 바로 reading copy 후보로 보낼 수 있음 |
| `needs-source` | 내용은 채팅 등에 있지만 아직 repo 원본 문서가 없음 |
| `needs-cleanup` | 원본은 있지만 리딩룸 반영 전에 정리, 축약 또는 구조 보완이 필요함 |
| `hold` | 반복 참고 가치가 있을 수 있으나 지금은 보류함 |
| `exclude` | 리딩룸 후보에서 제외함 |

### Reading Room 반영 요청 리포트 예시

```md
# Reading Room 반영 요청 리포트

## 프로젝트

프로젝트 이름:
[프로젝트 이름]

원본 repo:
[repo 이름]

project category:
[project-category]

## 리딩룸에 반영할 문서

| 원본 문서 경로 | 추천 reading copy 경로 | display title | category | type | description | 문서 상태 | 비고 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| docs/GLOSSARY.md | library/[project-category]/glossary.md | [문서 표시 제목] | [project-category] | reading-copy | 반복해서 확인할 프로젝트 용어집 | ready | 원본 유지 |

## 반영 기준

- 이 문서는 개별 프로젝트 PM과 사용자가 리딩룸 포함 대상으로 판단했다.
- 원본 문서는 개별 프로젝트 repo에 유지한다.
- project-reading-room에는 reading copy로 추가한다.
- library.json을 함께 업데이트한다.
- reading copy 상단에는 YAML frontmatter로 source metadata를 명시한다.
- 리딩룸 표시와 print/PDF 출력을 확인한다.

## 제외할 작업

- 원본 repo 수정
- 문서 내용 대규모 재작성
- 자동 동기화 구현
- 복잡한 tag system 추가
- 새 기능 추가
```

## 폴더 구조

```text
library/
  common/
    vibe-coding-habit-guide.md
    project-reading-room-document-flow.md
  living-aegis-origin/
    glossary.md
    sound-direction.md
    concept-art-prompt-pack.md
  potato-day/
    README.md
    SPRITE_LAB.md
```

각 Markdown 파일에는 `title`, `category`, `source_repo`, `source_path`, `copy_type`, `last_reviewed`, `print_friendly`를 기록하는 간단한 YAML frontmatter가 있습니다. frontmatter는 문서 자체를 관리하기 위한 메모이며 화면 목록의 기준이 아닙니다. 앱은 이를 해석하지 않고 본문 렌더링 전에 숨깁니다.

## 문서 추가하기

1. `library/` 아래 알맞은 category 폴더에 Markdown 파일을 추가합니다.
2. 파일 상단에 기존 문서와 같은 형식의 frontmatter를 작성합니다.
3. `library.json`에 아래 필드로 문서를 등록합니다.
4. 로컬 정적 서버에서 문서 목록과 본문 표시를 확인합니다.

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

`type`은 `source` 또는 `reading-copy`만 사용합니다. 목록의 위치를 바꾸려면 객체를 `library.json` 안에서 원하는 순서로 옮깁니다. 모든 경로는 GitHub Pages의 프로젝트 사이트에서도 동작하도록 상대 경로로 작성합니다.

문서 상태나 `common-guide`, `checklist`, `glossary`, `decision-reference`, `workflow-guide`, `prompt-library` 같은 문서 성격은 `library.json`의 `type`으로 추가하지 않습니다. 필요하면 반영 요청 리포트의 설명과 비고에서 다룹니다.

Reading copy는 다음 YAML frontmatter 형식을 유지합니다.

```md
---
title: Living Aegis Origin Glossary
category: living-aegis-origin
source_repo: living-aegis-origin
source_path: docs/GLOSSARY.md
copy_type: reading-copy
last_reviewed: 2026-07-04
print_friendly: true
---
```

본문 상단의 blockquote를 source metadata 표준으로 사용하지 않습니다. Frontmatter는 수동 관리 메모이며 화면의 문서 목록과 필터는 `library.json`을 기준으로 합니다.

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

GitHub Pages의 Jekyll 배포는 frontmatter가 있는 Markdown을 `.html`로 변환할 수 있습니다. 앱은 원래 `.md` 경로가 없으면 같은 이름의 `.html` 문서에서 본문을 읽어 표시합니다.

## 인쇄 및 PDF 저장

읽을 문서를 선택하고 **인쇄 / PDF** 버튼을 누릅니다. 인쇄 화면에서는 검색, category filter, 문서 목록과 조작 버튼이 숨겨지며 본문 중심의 흑백 친화적 레이아웃이 적용됩니다. 브라우저 인쇄 창의 대상에서 프린터 또는 PDF 저장을 선택합니다.

## MVP에서 제외한 기능

이 scaffold에는 로그인, 문서 편집·업로드, 댓글, 데이터베이스, 권한 관리, 자동 동기화, 서버 기반 PDF 생성, 복잡한 tag system, full-text search index, 즐겨찾기, 최근 본 문서, `localStorage`, syntax highlighting과 build tool을 의도적으로 포함하지 않습니다.
