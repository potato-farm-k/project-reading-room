---
title: WEB-005. Why JavaScript
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-005-Why-JavaScript.md
copy_type: source
last_reviewed: 2026-07-09
print_friendly: true
---

# WEB-005. Why JavaScript

JavaScript는 웹페이지에 동작과 상호작용을 더하는 프로그래밍 언어입니다. HTML이 구조를 만들고 CSS가 표현과 배치를 입힌다면, JavaScript는 브라우저가 만든 DOM Tree를 조작해 사용자의 입력에 반응하고 화면 상태를 바꿉니다.

핵심 질문은 이것입니다.

> JavaScript는 어떻게 정적인 HTML 문서를 상호작용 가능한 웹페이지로 바꾸는가?

## 1. 학습 목표

- JavaScript가 무엇이며 웹에서 어떤 역할을 하는지 설명합니다.
- HTML, CSS, JavaScript의 역할 분리를 이해합니다.
- 정적인 문서와 동적인 웹페이지의 차이를 구분합니다.
- event, state, DOM manipulation이 왜 JavaScript 학습의 핵심인지 이해합니다.
- JavaScript가 HTML 파일 자체가 아니라 브라우저가 만든 DOM Tree를 수정한다는 점을 이해합니다.
- DOM Model과 DOM Tree의 차이를 구분합니다.
- 브라우저가 JavaScript 파일을 읽고 실행하는 기본 흐름을 설명합니다.
- JavaScript가 HTTP/API 요청을 통해 화면을 업데이트할 수 있음을 이해합니다.
- GitHub Pages 프로젝트에서 JavaScript 파일이 어떤 역할을 하는지 연결합니다.

## 2. 왜 JavaScript가 필요한가

HTML은 문서의 구조와 의미를 표현합니다. CSS는 그 구조 위에 색상, 글꼴, 여백, 배치 같은 시각적 표현을 입힙니다. 이 둘만으로도 읽을 수 있는 웹페이지는 만들 수 있습니다.

하지만 웹이 단순 문서에서 서비스와 애플리케이션으로 커지면서 새로운 요구가 생겼습니다.

- 버튼을 누르면 메뉴가 열려야 합니다.
- 사용자가 입력한 값에 따라 화면이 달라져야 합니다.
- 캐릭터가 움직이고 게임 상태가 변해야 합니다.
- 서버/API에서 데이터를 받아 목록을 다시 그려야 합니다.
- 페이지를 새로고침하지 않아도 일부 화면만 업데이트되어야 합니다.

HTML과 CSS는 기본적으로 “무엇을 보여줄지”와 “어떻게 보여줄지”에 강합니다. 반면 “사용자가 무엇을 했을 때 어떤 일이 일어나야 하는지”를 다루려면 프로그램이 필요합니다.

JavaScript는 HTML 파일을 직접 고쳐 쓰는 언어가 아닙니다. 브라우저가 HTML을 읽어 만든 DOM Tree를 조작하고, 그 결과를 화면에 다시 반영하게 만드는 언어입니다. 이 지점에서 웹은 정적인 문서에서 상호작용 가능한 웹앱으로 확장됩니다.

## 3. 핵심 개념

### JavaScript

JavaScript는 브라우저 안에서 실행될 수 있는 프로그래밍 언어입니다. 웹페이지의 상태를 바꾸고, 사용자 입력에 반응하고, DOM Tree 안의 요소를 찾거나 수정하고, 서버/API와 데이터를 주고받을 수 있습니다.

### HTML, CSS, JavaScript의 역할 분리

웹의 기본 역할은 다음처럼 나눌 수 있습니다.

```text
HTML → 구조와 의미
CSS → 표현과 배치
JavaScript → 동작과 상호작용
```

이 역할 분리는 웹 프로젝트를 이해할 때 가장 중요한 기준입니다. HTML에 의미 있는 구조가 있어야 CSS가 스타일을 적용할 수 있고, JavaScript도 그 구조를 찾아 동작을 연결할 수 있습니다.

### 정적인 문서와 동적인 웹페이지

정적인 문서는 사용자가 읽는 동안 내용이 거의 변하지 않습니다. 동적인 웹페이지는 사용자의 행동, 시간, 데이터, 서버 응답에 따라 화면이 바뀝니다.

예를 들어 “버튼을 눌렀더니 화면에 클래스가 추가되고 배경이 바뀐다”는 일은 JavaScript가 상태나 DOM을 수정했기 때문에 가능합니다.

### Event

Event는 사용자의 행동이나 브라우저 안에서 일어난 일을 나타냅니다. 버튼 클릭, 키보드 입력, 마우스 이동, 페이지 로드, 폼 제출 같은 일이 event입니다.

JavaScript는 event를 감지하고, event가 발생했을 때 실행할 코드를 연결합니다.

### State

State는 현재 화면이나 프로그램이 기억하고 있는 값입니다. 메뉴가 열려 있는지, 캐릭터가 어디에 있는지, 사용자가 어떤 항목을 선택했는지, API에서 받은 데이터가 무엇인지가 state가 될 수 있습니다.

JavaScript는 state를 바꾸고, 바뀐 state에 맞게 화면을 다시 보여줍니다.

### DOM Model과 DOM Tree

DOM은 Document Object Model의 줄임말입니다. 여기서 구분해야 할 것이 두 가지 있습니다.

- **DOM Model:** 브라우저가 문서를 객체로 다루기 위해 미리 알고 있는 규칙과 API입니다.
- **DOM Tree:** 브라우저가 실제 HTML 문서를 읽고 생성한 객체 구조입니다.

DOM Model의 규칙은 비교적 정적입니다. 반면 DOM Tree는 어떤 HTML을 읽었는지에 따라 동적으로 만들어집니다. JavaScript가 조작하는 대상은 원본 HTML 파일이 아니라 브라우저 메모리 안에 만들어진 DOM Tree입니다.

```text
HTML
  ↓
HTML Parser
  ↓
DOM Tree 생성
  ↓
JavaScript가 DOM 조작
  ↓
화면 갱신
```

### DOM Manipulation

JavaScript는 DOM Tree에서 요소를 찾고, 텍스트를 바꾸고, 클래스를 추가하거나 제거하고, 새 요소를 만들 수 있습니다. 이처럼 JavaScript로 DOM Tree를 수정하는 일을 DOM manipulation이라고 부릅니다.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  document.body.classList.toggle("is-active");
});
```

이 코드는 브라우저가 만든 DOM Tree 안에서 `button` 요소를 찾고, 버튼 클릭 event가 발생하면 `body`에 `is-active` 클래스를 켜고 끕니다. JavaScript 문법 전체를 외우는 것보다 먼저 보아야 할 점은 “DOM Tree에서 요소를 찾고, event를 듣고, 상태를 바꾸고, 화면을 갱신한다”는 흐름입니다.

### Browser Execution

브라우저는 HTML과 CSS만 읽는 도구가 아닙니다. HTML Parser로 DOM Tree를 만들고, CSS를 적용해 화면을 계산하며, JavaScript 파일도 내려받아 실행하는 Runtime입니다. 브라우저가 제공하는 DOM, event, fetch 같은 기능 덕분에 JavaScript는 웹페이지와 서버/API 사이를 연결할 수 있습니다.

### HTTP/API 요청

JavaScript는 필요한 경우 서버나 API에 HTTP 요청을 보낼 수 있습니다. 예를 들어 날씨 데이터, 랭킹 목록, 사용자 설정 같은 데이터를 받아온 뒤 화면을 업데이트할 수 있습니다.

이 문서에서는 “JavaScript가 요청을 보낼 수 있다”는 연결만 이해합니다. HTTP, REST API, CORS의 자세한 규칙은 WEB-007, WEB-008, WEB-009에서 따로 다룹니다.

## 4. 실제 동작 과정

브라우저 안에서 HTML, CSS, JavaScript가 함께 동작하는 단순화한 흐름은 다음과 같습니다.

1. 브라우저가 HTML 문서를 읽는다.
2. HTML Parser가 문서를 해석해 DOM Tree를 생성한다.
3. CSS가 DOM Tree 위에 시각적 표현과 배치를 적용한다.
4. 브라우저가 JavaScript 파일을 읽고 실행한다.
5. JavaScript가 버튼 클릭, 키보드 입력, 마우스 이동 같은 사용자 이벤트를 감지한다.
6. 이벤트가 발생하면 JavaScript가 상태를 바꾸거나 DOM Tree를 수정한다.
7. 필요한 경우 JavaScript가 서버/API에 HTTP 요청을 보낸다.
8. 응답 데이터를 받아 DOM Tree와 화면을 업데이트한다.
9. 최종적으로 정적인 문서가 상호작용 가능한 웹앱이 된다.

```text
HTML
  ↓
HTML Parser
  ↓
DOM Tree 생성
  ↓
CSS 표현과 배치 적용
  ↓
JavaScript 실행 및 Event 감지
  ↓
State 변경 또는 DOM Tree 수정
  ↓
필요하면 HTTP/API 요청
  ↓
응답 데이터로 DOM Tree와 화면 업데이트
  ↓
상호작용 가능한 웹앱
```

GitHub Pages 프로젝트에서도 이 흐름은 같습니다. `index.html`이 브라우저에 전달되고, 브라우저가 이를 DOM Tree로 만들며, `style.css`가 화면을 정리하고, `app.js` 같은 JavaScript 파일이 문서 목록을 불러오고 클릭에 반응하고 DOM Tree를 바꿔 화면 내용을 갱신합니다.

## 5. 자주 하는 오해

- **JavaScript는 단순히 움직임을 추가하는 언어인가?** 애니메이션도 할 수 있지만 핵심은 event, state, DOM, 데이터 요청을 통해 웹페이지를 프로그램처럼 동작하게 만드는 것입니다.
- **HTML과 CSS만으로 웹앱을 만들 수 없는가?** 읽을 수 있는 화면은 만들 수 있지만, 복잡한 입력 처리와 상태 변화, API 통신은 JavaScript가 담당합니다.
- **JavaScript가 HTML 파일을 수정하는가?** 아닙니다. JavaScript는 원본 HTML 파일을 직접 바꾸지 않고, 브라우저가 HTML을 해석해 만든 DOM Tree를 수정합니다.
- **DOM Model과 DOM Tree는 같은 말인가?** 아닙니다. DOM Model은 브라우저가 문서를 객체로 다루는 규칙이고, DOM Tree는 실제 HTML을 읽어 생성된 객체 구조입니다.
- **JavaScript와 브라우저는 같은 것인가?** JavaScript는 언어이고 브라우저는 그 언어를 실행하는 Runtime 중 하나입니다. Node.js처럼 브라우저 밖에서 JavaScript를 실행하는 환경도 있습니다.
- **JavaScript를 배우려면 문법부터 전부 외워야 하는가?** 처음에는 문법 목록보다 “무엇을 찾고, 어떤 event를 듣고, 어떤 state와 화면을 바꾸는가”를 이해하는 것이 더 중요합니다.
- **CSS와 JavaScript는 서로 대체 관계인가?** 아닙니다. CSS는 표현과 배치에 강하고, JavaScript는 동작과 상태 변화에 강합니다. 좋은 웹페이지는 둘을 섞어 쓰되 역할을 구분합니다.
- **API 요청은 JavaScript만 알면 되는가?** JavaScript는 요청을 보내는 도구가 될 수 있지만, HTTP, REST API, CORS 규칙을 함께 이해해야 안정적으로 다룰 수 있습니다.

## 6. 프로젝트 적용 예시

### Potato's Day

Potato's Day에서 JavaScript는 DOM과 Canvas를 함께 사용할 수 있습니다. 버튼, 메시지, 메뉴처럼 HTML 요소로 만든 UI는 DOM Tree를 조작해 바꾸고, 감자 캐릭터나 장면 애니메이션은 Canvas와 sprite animation으로 처리할 수 있습니다.

### Living Aegis Origin

Living Aegis Origin에서 JavaScript는 Canvas를 그리고, 게임 루프를 돌리고, 입력을 처리하고, 충돌을 계산하고, HUD 상태를 갱신할 수 있습니다. 이 프로젝트에서는 Canvas가 중심이 되고, DOM은 메뉴, 버튼, 경고, 설정 패널 같은 UI를 관리하는 쪽에 더 가깝습니다.

### 공공데이터 기반 서비스

공공데이터 기반 서비스에서 JavaScript는 검색 조건을 읽고, 공공 API에 요청을 보내고, 응답으로 받은 JSON 데이터를 카드나 목록 형태로 다시 그릴 수 있습니다. 이때 HTTP 요청, API 응답 구조, CORS 정책은 이후 문서에서 더 자세히 확인합니다.

## 7. 실습 과제

1. GitHub Pages 기반 프로젝트에서 `index.html`, `style.css`, `app.js` 또는 비슷한 JavaScript 파일이 각각 어떤 역할을 하는지 찾아봅니다.
2. HTML 문서가 브라우저에 들어온 뒤 `HTML → HTML Parser → DOM Tree 생성` 흐름으로 해석된다고 말로 설명해 봅니다.
3. HTML 문서에 버튼 하나가 있을 때 JavaScript가 DOM Tree에서 그 버튼을 어떻게 찾고 event를 연결할지 흐름을 적어봅니다.
4. “메뉴가 열려 있다/닫혀 있다”처럼 화면 상태로 볼 수 있는 값을 3개 적어봅니다.
5. 개발자 도구의 Elements 탭에서 버튼을 클릭했을 때 실제 HTML 파일이 아니라 화면의 DOM Tree에서 클래스나 텍스트가 바뀌는지 관찰합니다.
6. API에서 데이터를 받아 화면을 바꾸는 서비스를 하나 떠올리고, 어떤 데이터가 state가 될 수 있는지 적어봅니다.

## 8. 다음 문서와의 연결

- [WEB-006](./WEB-006-How-Browser-Builds-a-Page.md)에서는 브라우저가 HTML, CSS, JavaScript를 실제 화면으로 구성하는 과정과 DOM이 어떻게 생성되고 변경되는지 살펴봅니다.
- WEB-007에서는 HTML, CSS, JavaScript 파일과 API 데이터가 HTTP 요청과 응답으로 브라우저에 도착하는 규칙을 더 자세히 학습합니다.
- WEB-008에서는 JavaScript가 호출하는 REST API가 자원과 작업을 어떤 방식으로 표현하는지 살펴봅니다.
- WEB-009에서는 브라우저가 다른 출처의 API 요청을 왜 제한하고 CORS가 어떤 기준으로 허용을 판단하는지 다룹니다.
- DOM Model, DOM Tree, HTML Parser, JavaScript 문법, module, async/await, Canvas API는 이후 프로젝트 경험이 쌓일 때 별도 Guide나 Reference로 나눌 수 있습니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-08 | WEB-005 초기 Learning Guide 작성 | event, state, DOM manipulation을 작은 프로젝트에서 어떤 순서로 연습하면 좋은가? |
| 2026-07-09 | v2 개정판 반영: JavaScript가 HTML 파일이 아니라 DOM Tree를 수정한다는 설명과 DOM Model / DOM Tree 구분 추가 | 브라우저 내부에서 HTML Parser, DOM Tree, CSSOM, Render Tree는 어떤 순서로 연결되는가? |
