---
title: WEB-006. How Browser Builds a Page
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-006-How-Browser-Builds-a-Page.md
copy_type: source
last_reviewed: 2026-07-11
print_friendly: true
---

# WEB-006. How Browser Builds a Page

브라우저는 HTML, CSS, JavaScript 파일을 단순히 “그대로 보여주는” 프로그램이 아닙니다. 브라우저가 페이지를 만든다는 말은 받은 파일을 해석하고, 문서를 객체 구조로 만들고, 스타일을 계산하고, 화면에 그릴 대상을 정한 뒤, 위치와 크기를 계산해 실제 픽셀로 표시한다는 뜻입니다.

핵심 질문은 이것입니다.

> 브라우저는 받은 파일들을 어떻게 해석해서 우리가 보는 웹페이지로 만드는가?

## 1. 학습 목표

- 브라우저가 “페이지를 만든다”는 말의 의미를 이해합니다.
- HTML parsing, DOM, CSS parsing, CSSOM의 기본 역할을 설명합니다.
- DOM의 정적인 규칙과 실제 페이지에서 동적으로 생성·변경되는 DOM Tree를 구분합니다.
- DOM과 CSSOM이 Render Tree로 연결되는 흐름을 이해합니다.
- Layout / Reflow, Paint, Composite의 기본 의미를 설명합니다.
- JavaScript가 DOM이나 style을 바꾸면 화면이 다시 갱신되는 이유를 이해합니다.
- GitHub Pages 프로젝트에서 `index.html`, `style.css`, `app.js`가 브라우저 화면 생성 흐름에 어떻게 참여하는지 연결합니다.

## 2. 왜 이 과정을 이해해야 하는가

웹페이지를 만들 때 우리는 보통 파일을 작성합니다.

```text
index.html
style.css
app.js
```

하지만 사용자가 보는 것은 파일 자체가 아닙니다. 사용자가 보는 것은 브라우저가 이 파일들을 해석하고 계산한 결과입니다.

이 과정을 모르면 다음과 같은 질문이 흐릿해집니다.

- HTML 파일을 바꾸지 않았는데 화면 텍스트는 왜 바뀌는가?
- CSS를 조금 바꿨을 뿐인데 왜 배치가 다시 계산되는가?
- JavaScript가 DOM을 수정하면 왜 화면도 함께 바뀌는가?
- Canvas 게임은 왜 일반 DOM 요소와 다르게 “계속 다시 그린다”고 말하는가?

브라우저의 화면 생성 흐름을 이해하면 HTML, CSS, JavaScript가 따로 떨어진 문법이 아니라 하나의 화면을 만드는 협업 과정으로 보입니다.

## 3. 핵심 개념

### HTML Parsing

Parsing은 텍스트를 읽어 의미 있는 구조로 해석하는 일입니다. 브라우저는 HTML 파일을 받으면 위에서 아래로 읽으며 태그, 속성, 텍스트의 관계를 해석합니다.

HTML에 작성된 태그의 계층 구조와 순서는 실제 DOM Tree의 기본 구조를 만듭니다.

```html
<button id="call-gamja">감자 부르기</button>
<p id="message">감자가 기다리고 있어요.</p>
```

이 HTML은 “버튼 하나와 문단 하나가 있다”는 문서 구조를 브라우저에게 알려줍니다.

### DOM

DOM은 Document Object Model의 줄임말입니다. HTML 문서를 브라우저가 JavaScript와 내부 엔진에서 다룰 수 있도록 객체 기반 구조로 표현한 것입니다.

DOM을 이해할 때는 정적인 부분과 동적인 부분을 나누면 좋습니다.

```text
DOM의 정적인 부분
= 브라우저가 문서를 객체 구조로 다루기 위한 규칙과 모델

DOM의 동적인 부분
= 실제 페이지에서 생성되고 바뀌는 DOM Tree
```

DOM의 규칙과 인터페이스는 정적으로 정의되어 있습니다. 예를 들어 브라우저는 element, text node, attribute, parent/child 관계 같은 개념을 알고 있습니다.

하지만 실제 DOM Tree는 HTML 내용에 따라 만들어지고, JavaScript 실행 결과에 따라 바뀔 수 있습니다. 즉 DOM은 HTML 파일 그 자체가 아니고, 항상 고정된 구조도 아닙니다. HTML parsing으로 기본 DOM Tree가 만들어지고, JavaScript가 이후 그 Tree를 추가, 삭제, 수정할 수 있습니다.

### CSS Parsing과 CSSOM

CSS도 브라우저가 읽고 해석해야 합니다. 브라우저는 CSS 파일이나 `<style>` 안의 규칙을 읽어 어떤 selector가 어떤 style 규칙을 가지는지 구조화합니다.

이렇게 만들어진 CSS 규칙의 객체 구조를 CSSOM, 즉 CSS Object Model이라고 부릅니다.

HTML이 DOM Tree로 바뀌듯, CSS도 CSSOM으로 바뀐다고 생각하면 됩니다.

### Render Tree

Render Tree는 실제 화면에 그릴 대상과 그 대상의 style 정보를 합친 구조입니다.

DOM Tree에는 문서 구조가 있고, CSSOM에는 style 규칙이 있습니다. 브라우저는 이 둘을 조합해 “무엇을, 어떤 모습으로 그릴지”를 정합니다.

예를 들어 `display: none`인 요소는 DOM에는 존재할 수 있지만 화면에는 그리지 않으므로 Render Tree에서는 빠질 수 있습니다.

### Layout / Reflow

Layout은 Render Tree의 각 요소가 화면 어디에, 어떤 크기로 놓일지 계산하는 단계입니다. 이 과정을 Reflow라고 부르기도 합니다.

버튼의 너비, 문단의 높이, 카드 사이의 간격, 화면 폭이 바뀌었을 때 줄바꿈이 어떻게 변하는지 같은 계산이 여기에 들어갑니다.

### Paint

Paint는 계산된 위치와 크기를 바탕으로 실제 픽셀을 그리는 단계입니다. 글자 색, 배경색, 테두리, 그림자 같은 시각적 결과가 화면에 칠해집니다.

### Composite

Composite는 여러 레이어나 그려진 결과를 합쳐 최종 화면을 만드는 단계입니다. 브라우저와 그래픽 시스템은 일부 요소를 별도 레이어로 다루고, 마지막에 이를 합성해 사용자가 보는 화면을 만듭니다.

초기 학습에서는 Composite를 “그려진 결과들을 최종 화면으로 합치는 단계” 정도로 이해하면 충분합니다.

### JavaScript와 화면 갱신

JavaScript는 HTML 파일을 직접 수정하는 것이 아니라 DOM Tree를 수정합니다.

```js
const message = document.querySelector("#message");

message.textContent = "감자가 달려왔어요!";
```

이 코드는 DOM Tree 안의 `#message` 요소를 찾아 텍스트를 바꿉니다. DOM이 바뀌면 브라우저는 필요한 부분의 Render Tree, Layout, Paint, Composite를 다시 처리해 화면을 갱신할 수 있습니다.

## 4. 실제 동작 과정

브라우저가 파일을 받아 화면을 만드는 큰 흐름은 다음과 같습니다.

1. 브라우저가 HTML 파일을 받는다.
2. 브라우저가 HTML을 파싱해 DOM을 만든다.
3. 브라우저가 CSS 파일을 읽고 CSSOM을 만든다.
4. DOM과 CSSOM을 조합해 Render Tree를 만든다.
5. 브라우저가 각 요소의 위치와 크기를 계산한다. 이것을 Layout 또는 Reflow라고 부른다.
6. 브라우저가 화면에 픽셀을 그린다. 이것을 Paint라고 부른다.
7. 여러 레이어나 그려진 결과를 합쳐 최종 화면을 만든다. 이것을 Composite라고 부른다.
8. JavaScript가 DOM이나 스타일을 바꾸면 필요한 부분이 다시 계산되고 다시 그려질 수 있다.

```text
HTML
 ↓
HTML Parser
 ↓
DOM Tree
 ↓
CSSOM
 ↓
Render Tree
 ↓
Layout / Reflow
 ↓
Paint
 ↓
Composite
 ↓
화면
```

JavaScript가 실행되면 이 흐름의 일부가 다시 일어날 수 있습니다. 텍스트만 바뀌면 일부 Paint만 다시 필요할 수 있고, 요소 크기나 위치가 바뀌면 Layout부터 다시 필요할 수 있습니다. 이번 문서에서는 성능 최적화보다 “DOM이 바뀌면 브라우저가 화면을 다시 만들 수 있다”는 연결을 이해하는 데 집중합니다.

## 5. 자주 하는 오해

- **HTML은 화면 그 자체인가?** 아닙니다. HTML은 문서입니다. 브라우저가 HTML을 해석해 DOM Tree를 만들고, CSS와 함께 계산한 결과가 화면입니다.
- **DOM은 HTML 파일의 복사본인가?** 단순 복사본이 아닙니다. DOM은 브라우저가 문서를 다루기 위한 객체 기반 구조입니다.
- **DOM은 항상 정적인가?** DOM의 규칙과 모델은 정적으로 정의되어 있지만, 실제 DOM Tree는 HTML parsing과 JavaScript 실행에 따라 동적으로 생성되고 변경될 수 있습니다.
- **DOM은 JavaScript가 전부 만드는가?** 아닙니다. 기본 DOM Tree는 HTML parsing으로 만들어지고, JavaScript가 이후 추가, 삭제, 수정을 할 수 있습니다.
- **CSS는 그냥 꾸미기 정보인가?** 꾸미기 정보이기도 하지만, 브라우저는 CSS를 CSSOM으로 해석하고 Render Tree와 Layout 계산에 사용합니다.
- **Render Tree와 DOM Tree는 같은가?** 아닙니다. DOM Tree는 문서 구조이고, Render Tree는 실제 화면에 그릴 대상과 style 정보를 합친 구조입니다.
- **JavaScript가 DOM을 바꾸면 항상 전체 화면을 다시 그리는가?** 항상 전체를 다시 그린다고 단정할 수는 없습니다. 브라우저는 필요한 범위를 다시 계산하고 다시 그릴 수 있습니다.

## 6. 프로젝트 적용 예시

### Potato's Day

Potato's Day에서 HTML은 버튼과 메시지 영역 같은 기본 구조를 만듭니다. CSS는 따뜻한 색감과 여백, 캐릭터 주변 분위기를 입힙니다. JavaScript가 감자 반응이나 화면 전환을 위해 DOM을 바꾸면 브라우저는 바뀐 부분을 다시 계산하고 화면을 갱신합니다.

### Living Aegis Origin

Living Aegis Origin은 Canvas 중심 게임이더라도 HTML 문서, HUD, 버튼, 상태 표시 영역은 브라우저가 DOM과 CSS를 해석해 화면 구조로 만듭니다. Canvas 안의 게임 장면은 JavaScript가 계속 다시 그리지만, Canvas 바깥의 UI는 DOM과 CSS 흐름 안에서 관리될 수 있습니다.

### 공공데이터 기반 서비스

공공데이터 기반 서비스에서 검색 결과가 API 응답에 따라 목록으로 추가될 수 있습니다. 이때 JavaScript는 응답 데이터를 바탕으로 DOM에 카드나 행을 추가하고, 브라우저는 변경된 DOM과 style을 바탕으로 목록 화면을 다시 보여줍니다.

## 7. 실습 과제

1. GitHub Pages 프로젝트에서 `index.html`, `style.css`, `app.js`가 각각 DOM, CSSOM, JavaScript 실행 흐름 중 어디에 연결되는지 적어봅니다.
2. 간단한 HTML 버튼과 문단을 보고 DOM Tree가 어떤 계층 구조를 가질지 손으로 그려봅니다.
3. 개발자 도구의 Elements 탭에서 HTML 원문이 아니라 현재 DOM Tree가 어떻게 보이는지 확인합니다.
4. JavaScript로 텍스트가 바뀌는 페이지를 열고, HTML 파일은 그대로인데 화면이 바뀌는 이유를 설명해 봅니다.
5. CSS에서 `display: none`, `font-size`, `margin` 같은 값을 바꾸면 Render Tree, Layout, Paint 중 어디에 영향이 있을지 추측해 봅니다.
6. Canvas를 사용하는 페이지에서 DOM으로 관리되는 UI와 Canvas 안에 직접 그려지는 화면을 구분해 봅니다.

## 8. 다음 문서와의 연결

- WEB-007에서는 브라우저가 HTML, CSS, JavaScript 파일과 API 데이터를 HTTP 요청과 응답으로 어떻게 받는지 더 자세히 학습합니다.
- WEB-008에서는 JavaScript가 호출하는 REST API가 자원과 작업을 어떤 방식으로 표현하는지 살펴봅니다.
- WEB-009에서는 브라우저가 다른 출처의 API 요청을 왜 제한하고 CORS가 어떤 기준으로 허용을 판단하는지 다룹니다.
- DOM, CSSOM, Render Tree, Layout, Paint, Composite는 이후 프로젝트에서 화면 표시 문제가 반복될 때 별도 Reference로 더 작게 나눌 수 있습니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-11 | WEB-006 초기 Learning Guide 작성 | DOM 변경이 Layout, Paint, Composite 중 어디부터 다시 필요하게 만드는지 어떻게 관찰할 수 있는가? |
