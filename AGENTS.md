# Project Reading Room — Document Operation Rules

## 1. Core principle

`project-reading-room` is a personal Markdown Reading Room.

It is not a general document warehouse, CMS, or full document management system.

The core model is:

```text
Markdown files
= source or reading copy documents

library.json
= display/index source of truth for Reading Room UI

Classic UI / UI v2
= general Reading Room interfaces

Learning UI v3
= learning-only flow interface based on Part / Category / Guide mapping
```

Do not change the role of the project unless explicitly requested.

---

## 2. Distinguish project-specific documents and Learning documents

There are two major document flows.

### A. Project-specific documents from other repositories

Examples:

```text
living-aegis-origin
potato-day
other project repositories
```

For these documents:

```text
Original source document
= stays in the original project repository

Reading Room copy
= stored under project-reading-room/library/[project-category]/

copy_type
= reading-copy

library.json type
= reading-copy
```

Rules:

```text
- Do not treat project-specific reading copies as the source of truth.
- Do not move the original document into project-reading-room.
- Do not rewrite the source project document unless the task explicitly says so.
- Do not modify Learning UI v3 mapping for project-specific documents.
- Do not include non-learning project documents in Learning UI v3.
```

Example:

```text
Original:
living-aegis-origin/docs/GLOSSARY.md

Reading copy:
project-reading-room/library/living-aegis-origin/glossary.md
```

The Reading Room copy should include source metadata in frontmatter.

Example:

```md
---
title: Living Aegis Origin Glossary
category: living-aegis-origin
source_repo: living-aegis-origin
source_path: docs/GLOSSARY.md
copy_type: reading-copy
last_reviewed: 2026-07-11
print_friendly: true
---
```

---

### B. Learning documents owned by project-reading-room

Learning documents are source documents owned by `project-reading-room`.

Current main path:

```text
library/learning/web-foundation/
```

For Learning documents:

```text
Original source document
= stored directly in project-reading-room

copy_type
= source

library.json category
= learning

library.json type
= source
```

Rules:

```text
- Learning documents are not reading copies from another project.
- Learning documents are source documents of project-reading-room.
- Use library/learning/ paths, not docs/learning/ paths.
- Update Learning-related index documents when adding or replacing Learning guides.
- Check Learning UI v3 after Learning document changes.
```

Example frontmatter:

```md
---
title: WEB-009. Why CORS
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-009-Why-CORS.md
copy_type: source
last_reviewed: 2026-07-11
print_friendly: true
---
```

---

## 3. library.json rules

`library.json` is the Reading Room display/index source of truth.

Keep the current schema:

```text
id
title
category
path
type
description
```

Do not add these fields unless explicitly approved:

```text
track
part
learning_part
category_group
document_kind
status
tags
source_repo
source_path
```

For Learning documents:

```text
category: learning
type: source
```

For project-specific reading copies:

```text
category: [project-category]
type: reading-copy
```

Do not register UI support files in `library.json`.

Do not register these files as documents:

```text
learning-v3/learning-map.js
learning-v3/app.js
learning-v3/style.css
learning-v3/index.html
ui-v2/*
DESIGN.md files used only for UI development
```

---

## 4. Learning UI v3 rules

Learning UI v3 is a Learning-only interface.

Path:

```text
learning-v3/
```

Purpose:

```text
Classic UI
= general Reading Room document browsing

UI v2
= general Reading Room visual design experiment

Learning UI v3
= learning-only flow interface
```

Learning UI v3 must only show documents with:

```text
category: learning
```

Do not include these in UI v3:

```text
common
living-aegis-origin
potato-day
other project-specific reading copies
```

Learning UI v3 uses a separate map file:

```text
learning-v3/learning-map.js
```

This file defines:

```text
Part
Category
Guide order
Learning flow
```

Do not put Part / Category information into `library.json`.

---

## 5. When editing an existing Learning document

Example:

```text
Original:
WEB-008-Why-REST-API.md

Replacement:
WEB-008-Why-REST-API-v2.md
```

If this is a revision of an existing canonical document:

```text
- Replace the contents of the canonical file.
- Keep the canonical filename.
- Do not add the v2 file as a new document.
- Do not register the v2 file in library.json.
- Keep source_path pointing to the canonical file.
```

Correct final path:

```text
library/learning/web-foundation/WEB-008-Why-REST-API.md
```

Do not register:

```text
library/learning/web-foundation/WEB-008-Why-REST-API-v2.md
```

Usually update only:

```text
- the canonical Markdown document
- README.md if the description needs adjustment
- LEARNING_PATH.md if the status or description needs adjustment
- library.json only if title or description needs adjustment
```

Usually do not update:

```text
- learning-v3/learning-map.js
```

Update `learning-v3/learning-map.js` only if one of these changes:

```text
- document order
- Part assignment
- Category assignment
- UI display title
- Category description
- new Guide added
- Guide removed
```

After editing an existing Learning document, verify:

```text
- Classic UI renders the document.
- Learning UI v3 renders the updated document in the correct Category.
- Individual hash route still works if supported.
- Print/PDF preview is readable.
```

---

## 6. When adding a new Learning Guide

When adding a new Learning guide, update all relevant Learning indexes and UI v3 mapping.

Required files usually include:

```text
- new Markdown document under library/learning/web-foundation/
- library.json
- library/learning/web-foundation/README.md
- library/learning/web-foundation/LEARNING_PATH.md
- learning-v3/learning-map.js
```

Optional:

```text
- library/learning/web-foundation/WEB_REFERENCE_INDEX.md
```

Before adding the document, decide:

```text
- Which Part does it belong to?
- Which Category does it belong to?
- What is its Guide order?
- Should it be shown in UI v3?
```

For new Learning documents:

```text
category: learning
type: source
copy_type: source
```

Do not change `library.json` schema.

---

## 7. When expanding to Part II or later

Adding Part II, Part III, or later is not just a document addition.
It is a Learning structure change.

Before implementation, define:

```text
- Part title
- Part purpose
- Category list
- Guide list
- Guide order
- Whether numbering continues from existing WEB documents
```

Recommended numbering:

```text
WEB-001 ~ WEB-011
= Part I

WEB-012 and later
= Part II and beyond, unless explicitly changed
```

When adding a new Part, update:

```text
- new Markdown guide documents
- library.json
- library/learning/web-foundation/README.md
- library/learning/web-foundation/LEARNING_PATH.md
- learning-v3/learning-map.js
```

Check whether `learning-v3/app.js` already supports multiple Parts.

If it does not, update UI v3 carefully without affecting Classic UI or UI v2.

Do not introduce:

```text
- React
- Vue
- Next.js
- npm
- package.json
- build step
- database
- server routing
```

Use static HTML/CSS/JavaScript compatible with GitHub Pages.

---

## 8. When adding project-specific reading copies

For documents from other projects, do not update Learning UI v3.

Typical required files:

```text
- library/[project-category]/[document].md
- library.json
```

Optional:

```text
- project-specific index document if one already exists
```

Do not update:

```text
- learning-v3/learning-map.js
- Web Foundation LEARNING_PATH.md
- Web Foundation README.md
```

unless the task explicitly says the project-specific document is also part of a Learning track.

Project-specific documents should use:

```text
type: reading-copy
copy_type: reading-copy
```

Learning documents should use:

```text
type: source
copy_type: source
```

---

## 9. UI safety rules

Do not break existing interfaces.

Always preserve:

```text
- Classic UI
- UI v2 if present
- Learning UI v3 if present
```

When modifying UI-related files:

```text
- Classic UI files should only receive minimal link additions unless explicitly requested.
- UI v2 files should not be modified unless the task is about UI v2.
- Learning UI v3 files should not be modified unless the task is about Learning documents or UI v3.
```

Do not remove existing links between UIs.

---

## 10. Verification checklist

For project-specific reading copy work:

```text
- Reading copy exists in correct library/[project-category]/ path.
- frontmatter identifies source_repo and source_path.
- library.json entry exists with type: reading-copy.
- Classic UI shows the document.
- Print/PDF preview is readable.
- Learning UI v3 was not unnecessarily changed.
```

For Learning document revision:

```text
- canonical Markdown document was updated.
- v2 or draft file was not registered as a new document.
- library.json path still points to canonical file.
- README.md / LEARNING_PATH.md were updated only if needed.
- learning-v3/learning-map.js was updated only if Part/Category/order changed.
- Classic UI renders the document.
- Learning UI v3 shows the updated content in the correct Category.
- Print/PDF preview is readable.
```

For new Learning guide:

```text
- new Markdown document exists under library/learning/web-foundation/.
- frontmatter uses category: learning and copy_type: source.
- library.json entry exists with category: learning and type: source.
- README.md and LEARNING_PATH.md are updated.
- learning-v3/learning-map.js includes the new Guide in the correct Part and Category.
- Classic UI shows the document.
- Learning UI v3 shows the Guide in the correct flow.
- Individual Guide route works if supported.
- Print/PDF preview is readable.
```

For new Learning Part:

```text
- Part structure is defined before implementation.
- Categories and Guide order are defined.
- new Guides are added and registered.
- LEARNING_PATH.md reflects the new Part.
- learning-v3/learning-map.js includes the new Part.
- UI v3 Part menu works.
- Category continuous reading works.
- Classic UI remains unchanged.
- UI v2 remains unchanged.
```

---

## 11. Default rule when unsure

If unsure whether a document is a project-specific reading copy or a Learning source document, use this rule:

```text
If the document belongs to another project repository
= project-specific reading copy

If the document teaches general reusable concepts inside library/learning/
= Learning source document
```

If unsure whether `learning-v3/learning-map.js` should be changed, use this rule:

```text
Only change learning-map.js when the Learning flow changes.

Do not change learning-map.js for simple text revisions.
```

# 작업 참고

- 작업 완료 보고에는 추천 커밋 메시지를 복사 가능한 fenced code block으로 표시한다.
- 작업 지시서에 권장 커밋 메시지가 있으면 해당 문구를 우선 사용한다.
- 권장 문구가 없으면 변경 내용을 요약하는 간결한 영어 명령형 메시지를 제안한다.
- 커밋을 직접 완료했더라도 사용한 커밋 메시지를 코드 블록으로 함께 알린다.
- 문서 구조, UI surface, Learning flow, repo-level 운영문서 변경을 완료할 때는 `CHANGELOG.md` 갱신 여부를 확인한다.
- 문서 구조, UI surface 역할, `library.json` 스키마, Learning flow를 바꾸기 전에는 `DECISION_LOG.md`의 Accepted decision을 확인한다.
