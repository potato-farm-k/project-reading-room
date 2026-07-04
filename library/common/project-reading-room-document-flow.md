---
title: Project Reading Room Document Flow
category: common
source_repo: project-reading-room
source_path: library/common/project-reading-room-document-flow.md
copy_type: source
last_reviewed: 2026-07-04
print_friendly: true
---

# Project Reading Room Document Flow

이 문서는 `project-reading-room`에 문서를 어떻게 모으고, 선별하고, reading copy로 반영할지 정리한 공통 운영 문서입니다.

`project-reading-room`은 모든 문서를 모으는 문서 창고가 아니라, 여러 프로젝트와 학습 과정에서 만들어진 Markdown 문서 중 **반복해서 읽을 가치가 있는 문서**를 선별해 보여주는 개인용 Markdown Reading Room입니다.

---

## 1. 기본 개념

`project-reading-room`의 핵심 개념은 다음과 같습니다.

```text
.md 파일 = 원본 또는 읽기용 사본
웹 리딩룸 = 반복해서 읽는 공간
브라우저 인쇄 = 출력/PDF 저장
GitHub Pages = 여러 단말기에서 접근하는 독서대
```

이 프로젝트는 문서 작성 도구가 아니라 **문서 읽기 도구**입니다.

따라서 성공 기준은 “문서를 얼마나 많이 모았는가?”가 아니라 다음입니다.

```text
- 다시 읽을 문서가 잘 보이는가?
- 출력하거나 PDF로 저장하기 편한가?
- 여러 프로젝트의 기준 문서를 한곳에서 확인할 수 있는가?
- 문서가 많아져도 부담스럽지 않은가?
```

---

## 2. 원본 문서와 reading copy

가장 중요한 원칙은 다음입니다.

```text
개별 프로젝트 repo
= 공식 문서 원본 관리

project-reading-room
= 자주 읽을 문서를 선별해서 보여주는 reading room

common 문서
= project-reading-room이 원본이어도 됨

project-specific 문서
= 원본은 각 프로젝트 repo, 리딩룸에는 reading copy
```

예시:

```text
living-aegis-origin/docs/GLOSSARY.md
= 원본 문서

project-reading-room/library/living-aegis-origin/glossary.md
= reading copy
```

즉, `project-reading-room`에는 원본을 옮기는 것이 아니라 **읽기용 사본**을 추가합니다.

중요한 운영 원칙은 다음입니다.

```text
수정은 원본 문서에서 한다.
리딩룸은 읽기 좋은 사본을 보여준다.
```

---

## 3. 역할 구분

문서 관리 흐름에서 역할은 다음처럼 나눕니다.

```text
리딩룸 포함 여부 판단
= 개별 프로젝트 PM + 사용자

원본 문서 저장
= 개별 프로젝트 repo / 개별 프로젝트 Codex

reading copy 반영
= Reading Room Codex

project-reading-room의 역할
= 재심사하는 곳이 아니라, 승인된 문서를 읽기 좋게 운영 반영하는 곳
```

역할별 책임은 다음과 같습니다.

| 역할                 | 책임                                             |
| ------------------ | ---------------------------------------------- |
| 사용자                | 최종 방향 판단, 리딩룸 포함 의사 결정                         |
| 개별 프로젝트 PM         | 해당 프로젝트 안에서 중요한 문서 선별                          |
| 개별 프로젝트 Codex      | 원본 문서를 해당 프로젝트 repo에 저장                        |
| Reading Room Codex | reading copy 추가, `library.json` 업데이트, 표시/출력 확인 |

`project-reading-room` 쪽에서 다시 “이 문서를 넣을지 말지” 심사하지 않습니다.
포함 여부 판단은 이미 **개별 프로젝트 PM + 사용자** 단계에서 끝냅니다.

---

## 4. 문서 종류별 기본 흐름

## 4.1 common 문서

common 문서는 특정 프로젝트 하나에 속하지 않고, 여러 프로젝트에 반복해서 쓰이는 문서입니다.

예:

```text
- Vibe Coding Habit Guide
- Prompt Library
- AI Collaboration Workflow
- Codex Request Template
- Git/GitHub Practice Routine
- Project Reading Room Document Flow
```

common 문서는 `project-reading-room` 자체가 원본이 될 수 있습니다.

흐름:

```text
1. 채팅에서 common 문서 작성
2. 사용자 판단으로 리딩룸 포함 결정
3. Reading Room Codex에게 저장 요청
4. library/common/ 아래 source 문서로 추가
5. library.json에 type: "source"로 등록
6. 리딩룸 표시 확인
7. print/PDF 확인
8. commit
```

저장 위치 예시:

```text
project-reading-room/library/common/vibe-coding-habit-guide.md
```

---

## 4.2 채팅에서 만든 project-specific 문서

project-specific 문서는 특정 프로젝트의 공식 판단 기준이나 기록입니다.

예:

```text
- Living Aegis Origin Sound Direction Memo
- Potato’s Day Asset Notes
- 특정 프로젝트 Decision Log
- 특정 프로젝트 Glossary
- 특정 프로젝트 GDD 섹션
```

이 경우 원본은 반드시 해당 프로젝트 repo에 먼저 저장합니다.

흐름:

```text
1. 채팅에서 project-specific 문서 작성
2. 개별 프로젝트 PM + 사용자가 공식 문서화 여부 판단
3. 개별 프로젝트 Codex가 해당 프로젝트 repo에 원본 문서 저장
4. 개별 프로젝트 PM 또는 사용자가 Reading Room Codex에게 문서 반영 리포트 전달
5. Reading Room Codex가 project-reading-room에 reading copy 추가
6. library.json 업데이트
7. 리딩룸 표시 확인
8. print/PDF 확인
9. commit
```

예시:

```text
living-aegis-origin/docs/SOUND_DIRECTION.md
= 원본 문서

project-reading-room/library/living-aegis-origin/sound-direction.md
= reading copy
```

---

## 4.3 기존 프로젝트 repo에 이미 있는 문서

이미 개별 프로젝트 repo에 문서가 있는 경우에는 원본 저장 단계를 다시 하지 않습니다.

흐름:

```text
1. 개별 프로젝트 PM + 사용자가 기존 문서 중 리딩룸 후보를 선별
2. 원본 repo/path와 포함 이유를 정리
3. Reading Room Codex에게 문서 반영 리포트 전달
4. Reading Room Codex가 reading copy 생성 또는 갱신
5. library.json 업데이트
6. 리딩룸 표시 확인
7. print/PDF 확인
8. commit
```

---

## 5. 사용자가 직접 .md 파일을 저장해야 하는가?

기본 운영 방식은 사용자가 직접 `.md` 파일을 다운로드해서 repo에 저장하는 것이 아닙니다.

기본 원칙:

```text
사용자가 직접 .md를 저장하는 방식
= 예외 또는 보조 수단

Codex가 repo에 문서를 추가하고 commit하는 방식
= 기본 흐름
```

사용자의 역할은 파일 저장 담당자가 아니라 **판단과 승인 담당자**입니다.

사용자가 해야 할 일:

```text
1. 이 문서를 저장할 가치가 있는지 판단한다.
2. common 문서인지 project-specific 문서인지 판단한다.
3. 원본 repo가 어디인지 결정한다.
4. Codex에게 문서 본문과 저장 경로를 전달한다.
5. 결과를 검토한다.
```

다운로드한 `.md` 파일은 다음 용도로만 봅니다.

```text
- 백업
- Codex에게 전달할 원문 자료
- 로컬에서 임시로 읽기 위한 파일
```

공식 repo 반영은 Codex에게 맡기는 것을 기본으로 합니다.

---

## 6. 리딩룸에 넣기 좋은 문서

`project-reading-room`에 넣기 좋은 문서는 다음 기준 중 하나 이상을 만족해야 합니다.

```text
- 자주 다시 읽을 문서
- 출력하거나 PDF 저장할 가능성이 있는 문서
- 프로젝트 판단 기준이 담긴 문서
- 용어집
- 체크리스트
- 가이드북
- 방향성 문서
- 여러 번 참고할 설계 기준
- 새 채팅이나 새 Codex 작업에 반복해서 전달할 기준 문서
- 프롬프트 라이브러리
- AI 협업 워크플로우
```

---

## 7. 리딩룸에 넣지 않아도 되는 문서

아래 문서는 보통 리딩룸에 넣지 않습니다.

```text
- 일회성 작업 지시서
- 이미 처리 완료된 오류 로그
- 임시 초안
- 너무 세부적인 구현 결과
- 다시 읽을 가능성이 낮은 긴 대화 요약
- 특정 커밋 하나에만 의미가 있는 문서
- 아직 공식 판단 기준으로 정리되지 않은 아이디어 메모
```

리딩룸의 목적은 수집이 아니라 **반복 독서**입니다.

---

## 8. 문서 상태 분류

개별 프로젝트 PM이 Reading Room 반영 리포트를 만들 때, 문서 상태를 다음처럼 분류합니다.

이 상태값들은 운영 리포트용입니다.
`library.json` 스키마나 앱 기능으로 구현하지 않습니다.

```text
ready
= 원본 문서가 repo에 있고, 바로 reading copy 후보로 보낼 수 있음

needs-source
= 채팅에는 있지만 아직 repo 원본 문서가 없음

needs-cleanup
= 원본은 있지만 리딩룸에 보내기 전에 정리/축약/구조 보완 필요

hold
= 가치가 있을 수 있으나 지금은 보류

exclude
= 리딩룸 후보에서 제외
```

---

## 9. library.json 기준

`library.json`은 리딩룸에 표시할 문서 목록의 기준 파일입니다.

현재 MVP에서는 필드를 단순하게 유지합니다.

```text
id
title
category
path
type
description
```

`type` 값은 다음 두 가지만 사용합니다.

```text
source
reading-copy
```

사용하지 않는 값:

```text
common-guide
checklist
glossary
decision-reference
workflow-guide
prompt-library
```

문서 성격이 필요하면 `description`에 자연어로 설명합니다.
현재 단계에서는 `document_kind` 같은 새 필드를 앱 기능으로 추가하지 않습니다.

예시:

```json
{
  "id": "lao-glossary",
  "title": "Living Aegis Origin Glossary",
  "category": "living-aegis-origin",
  "path": "library/living-aegis-origin/glossary.md",
  "type": "reading-copy",
  "description": "Living Aegis Origin 프로젝트에서 반복해서 확인할 용어집"
}
```

문서 목록 순서는 `library.json`에 작성된 순서를 따릅니다.
별도 자동 정렬 기능은 만들지 않습니다.

---

## 10. reading copy frontmatter 기준

reading copy 상단에는 YAML frontmatter를 사용합니다.

예시:

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

common 문서의 경우 `copy_type`은 `source`로 둘 수 있습니다.

예시:

```md
---
title: Vibe Coding Habit Guide
category: common
source_repo: project-reading-room
source_path: library/common/vibe-coding-habit-guide.md
copy_type: source
last_reviewed: 2026-07-04
print_friendly: true
---
```

frontmatter는 문서 관리용 메모입니다.

기준은 다음입니다.

```text
리딩룸 목록 기준 = library.json
문서 자체 관리 메모 = Markdown frontmatter
```

즉, frontmatter로 routing, filtering, tag system을 만들지 않습니다.

---

## 11. Reading Room 반영 요청 리포트 형식

개별 프로젝트 PM 또는 사용자가 Reading Room Codex에게 넘길 때는 아래 형식을 사용합니다.

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
|---|---|---|---|---|---|---|---|
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

---

## 12. 개별 프로젝트 PM에게 요청할 일

개별 프로젝트 PM에게는 다음을 요청합니다.

```text
1. 자기 프로젝트 repo 안의 문서 후보를 확인한다.
2. 반복해서 읽을 가치가 있는 문서를 선별한다.
3. 문서 상태를 ready / needs-source / needs-cleanup / hold / exclude로 분류한다.
4. 원본 repo에 없는 문서는 먼저 원본 문서화 대상으로 분리한다.
5. Reading Room Codex에게 넘길 반영 리포트 초안을 작성한다.
```

개별 프로젝트 PM은 `project-reading-room`에 직접 파일을 추가하지 않습니다.

---

## 13. 개별 프로젝트 Codex에게 요청할 일

개별 프로젝트 Codex는 project-specific 원본 문서를 해당 프로젝트 repo에 저장합니다.

작업 예시:

```text
- 채팅에서 정리한 문서를 docs/ 아래 Markdown 파일로 생성
- 기존 docs/ 문서 스타일과 맞춤
- 필요한 경우 README.md 또는 docs/INDEX.md에 링크 추가
- git diff 확인
- commit
```

개별 프로젝트 Codex는 `project-reading-room`의 `library.json`을 수정하지 않습니다.

---

## 14. Reading Room Codex에게 요청할 일

Reading Room Codex는 승인된 문서를 reading copy로 반영합니다.

작업 예시:

```text
- library/[category]/ 아래 reading copy 파일 생성 또는 갱신
- YAML frontmatter 작성
- source_repo / source_path 명시
- library.json에 문서 등록
- category, path, type, description 확인
- 리딩룸에서 문서 표시 확인
- print/PDF 출력 확인
- git diff 확인
- commit
```

Reading Room Codex는 원본 프로젝트 repo를 수정하지 않습니다.

---

## 15. 대표 워크플로우 요약

## Case A. 채팅에서 common 문서가 만들어진 경우

```text
채팅 문서 작성
→ 사용자 판단으로 common 문서 승인
→ Reading Room Codex에게 저장 요청
→ library/common/에 source 문서로 추가
→ library.json에 type: "source" 등록
→ 리딩룸 표시/인쇄 확인
→ commit
```

## Case B. 채팅에서 project-specific 문서가 만들어진 경우

```text
채팅 문서 작성
→ 개별 프로젝트 PM + 사용자가 공식 문서로 승인
→ 개별 프로젝트 Codex가 원본 repo에 저장
→ 개별 프로젝트 PM 또는 사용자가 반영 리포트 작성
→ Reading Room Codex가 reading copy 추가
→ library.json 업데이트
→ 리딩룸 표시/인쇄 확인
→ commit
```

## Case C. 기존 프로젝트 repo에 이미 문서가 있는 경우

```text
개별 프로젝트 PM + 사용자가 후보 문서 선별
→ 원본 repo/path와 포함 이유 정리
→ Reading Room Codex에게 반영 리포트 전달
→ Reading Room Codex가 reading copy 추가 또는 갱신
→ library.json 업데이트
→ 리딩룸 표시/인쇄 확인
→ commit
```

---

## 16. 지금 단계에서 자동화하지 않을 것

현재 단계에서는 아래 항목을 자동화하지 않습니다.

```text
- 원본 repo 자동 동기화
- 모든 docs/ 문서 자동 수집
- frontmatter 기반 문서 목록 자동 생성
- 복잡한 tag system
- full-text search index
- 문서 업로드 기능
- PDF 자동 생성
- localStorage 기반 최근 문서/즐겨찾기
```

지금은 수동 선별과 Codex 반영이 더 안전합니다.

---

## 17. 최종 원칙

이 문서 관리 플로우의 최종 원칙은 다음입니다.

```text
자동 수집 X
PM + 사용자 선별 O
묶음 단위 반영 O
project-specific 원본 우선 O
common 문서는 project-reading-room 원본 허용 O
```

더 짧게 정리하면 다음과 같습니다.

```text
common 문서
= Reading Room Codex가 project-reading-room에 source로 저장

project-specific 문서
= 개별 프로젝트 Codex가 원본 repo에 먼저 저장
= 이후 Reading Room Codex가 reading copy로 추가

기존 프로젝트 문서
= 개별 프로젝트 PM + 사용자가 선별한 문서만 reading copy로 추가
```

`project-reading-room`은 문서 창고가 아니라, 반복해서 읽는 독서대입니다.

