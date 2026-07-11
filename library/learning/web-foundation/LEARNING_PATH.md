---
title: Web Foundation Learning Path
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/LEARNING_PATH.md
copy_type: source
last_reviewed: 2026-07-08
print_friendly: true
---

# Web Foundation Learning Path

이 문서는 Web Foundation Learning Track의 전체 학습 순서와 진행 상태를 관리합니다.

> 번호와 순서는 향후 학습 과정에서 변경될 수 있습니다.

## 초기 학습 로드맵

| 번호 | 주제 | 학습 질문 | 상태 | 문서 |
| --- | --- | --- | --- | --- |
| WEB-001 | 웹은 어떻게 동작하는가 | Browser의 Request와 Server의 Response가 어떻게 하나의 웹페이지로 이어지는가? | `active` | [WEB-001-How-the-Web-Works.md](./WEB-001-How-the-Web-Works.md) |
| WEB-002 | 브라우저 | 브라우저는 문서와 코드를 어떻게 읽고 실행하며 애플리케이션 플랫폼으로 동작하는가? | `active` | [WEB-002-What-Is-a-Browser.md](./WEB-002-What-Is-a-Browser.md) |
| WEB-003 | HTML | HTML은 Markup으로 웹 문서의 구조와 의미를 어떻게 표현하는가? | `active` | [WEB-003-What-Is-HTML.md](./WEB-003-What-Is-HTML.md) |
| WEB-004 | CSS | 구조와 표현을 왜 분리하며 화면은 어떻게 배치되는가? | `active` | [WEB-004-Why-CSS.md](./WEB-004-Why-CSS.md) |
| WEB-005 | JavaScript | 웹 페이지에 상태와 동작을 더하고 DOM Tree를 어떻게 조작하는가? | `active` | [WEB-005-Why-JavaScript.md](./WEB-005-Why-JavaScript.md) |
| WEB-006 | 브라우저 화면 구성 | 브라우저는 HTML, CSS, JavaScript를 어떻게 해석해 DOM, CSSOM, Render Tree와 화면을 만드는가? | `active` | [WEB-006-How-Browser-Builds-a-Page.md](./WEB-006-How-Browser-Builds-a-Page.md) |
| WEB-007 | HTTP | Client와 Server는 어떤 규칙으로 요청과 응답을 주고받는가? | `active` | [WEB-007-How-HTTP-Works.md](./WEB-007-How-HTTP-Works.md) |
| WEB-008 | REST API | 웹 자원과 작업을 일관된 인터페이스로 어떻게 표현하는가? | `active` | [WEB-008-Why-REST-API.md](./WEB-008-Why-REST-API.md) |
| WEB-009 | CORS | 브라우저는 왜 출처가 다른 요청을 제한하는가? | `active` | [WEB-009-Why-CORS.md](./WEB-009-Why-CORS.md) |
| WEB-010 | Serverless | 서버를 직접 운영하지 않고 코드를 실행한다는 것은 무엇인가? | `planned` | 학습 시 생성 |
| WEB-011 | GitHub Pages Architecture | 정적 파일은 GitHub Pages에서 어떻게 빌드되고 배포되는가? | `planned` | 학습 시 생성 |

상태값은 이 문서에서만 사람이 읽는 진행 표시로 사용합니다.

- `planned`: 학습 범위만 정해진 상태
- `draft`: 첫 초안을 작성한 상태
- `active`: 현재 반복해서 읽고 실습하며 보강하는 상태
- `needs-update`: 프로젝트 경험이나 새로운 이해를 반영해야 하는 상태

## 진행 원칙

- 현재 파일이 있는 Guide는 `WEB-001`, `WEB-002`, `WEB-003`, `WEB-004`, `WEB-005`, `WEB-006`, `WEB-007`, `WEB-008`, `WEB-009`입니다.
- `WEB-010` 이후 문서는 해당 주제를 실제로 학습할 때 만듭니다.
- 모든 문서를 한 번에 만들지 않습니다.
- 학습과 프로젝트 경험이 쌓일 때마다 필요한 문서를 추가하거나 수정합니다.
- 프로젝트에서 먼저 만난 주제가 있다면 순서를 조정할 수 있습니다.
- Guide를 읽은 뒤 실습 결과와 새 질문을 해당 문서에 기록합니다.

## Guide와 Reference의 역할

- **Guide 문서:** 기술이 왜 필요하며 여러 개념이 실제 흐름에서 어떻게 연결되는지 순서대로 학습합니다.
- **Reference 문서:** Header, MIME Type, Status Code처럼 작업 중 빠르게 다시 확인할 항목을 짧게 정리합니다.
- Guide에서 반복해서 등장하는 세부 항목은 [WEB_REFERENCE_INDEX.md](./WEB_REFERENCE_INDEX.md)에 후보로 기록합니다.

## 다음 학습

[WEB-009. Why CORS](./WEB-009-Why-CORS.md)에서 브라우저가 다른 origin의 API 응답을 JavaScript에 전달할지 판단하는 CORS 규칙을 살펴봅니다.
