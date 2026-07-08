---
title: WEB-004. Why CSS
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-004-Why-CSS.md
copy_type: source
last_reviewed: 2026-07-08
print_friendly: true
---

# WEB-004. Why CSS

CSS는 단순히 색을 칠하고 화면을 예쁘게 만드는 문법만이 아닙니다. HTML 문서의 구조와 의미 위에 시각적 표현, 배치, 반응형 화면을 입히는 스타일 언어입니다.

핵심 질문은 이것입니다.

> 왜 HTML만으로 충분하지 않고 CSS가 필요해졌는가?

## 1. 학습 목표

- CSS가 왜 HTML에서 분리되어 등장했는지 이해합니다.
- HTML은 구조, CSS는 표현과 배치를 담당한다는 관계를 설명합니다.
- 구조와 표현의 분리, 즉 관심사의 분리(Separation of Concerns)를 이해합니다.
- selector, property, value의 기본 의미를 구분합니다.
- 색상, 글꼴, 여백, 크기, 테두리, box model, layout과 responsive design의 큰 역할을 이해합니다.
- 브라우저가 HTML 구조에 CSS 규칙을 적용해 화면을 만드는 흐름을 설명합니다.
- GitHub Pages 프로젝트에서 CSS 파일이 어떤 역할을 하는지 연결합니다.

## 2. 왜 CSS가 필요한가

초기의 웹은 문서를 읽는 것이 주된 목적이었습니다. 하지만 웹이 널리 쓰이면서 사람들은 더 읽기 좋고, 보기 좋고, 다양한 화면 크기에 맞는 웹페이지를 원했습니다.

처음에는 HTML 안에 색상, 글꼴, 크기 같은 표현 정보도 함께 넣었습니다. 하지만 이 방식은 곧 문제를 만들었습니다.

- 문서가 길고 복잡해졌습니다.
- 같은 디자인을 여러 페이지에서 반복해야 했습니다.
- 버튼 색상 하나를 바꾸기 위해 수많은 HTML 파일을 고쳐야 했습니다.
- 문서의 의미와 화면 표현이 뒤섞여 유지보수가 어려워졌습니다.

그래서 웹은 역할을 나누는 방향으로 발전했습니다.

```text
HTML → 구조와 의미
CSS → 표현과 배치
JavaScript → 동작과 상호작용
```

CSS는 단순히 꾸미기 기능을 추가한 것이 아니라, 관심사의 분리라는 설계 원칙을 웹에 적용한 결과입니다. 집으로 비유하면 HTML은 설계도, CSS는 인테리어, JavaScript는 전기 장치와 자동문에 가깝습니다.

## 3. 핵심 개념

### CSS

CSS는 Cascading Style Sheets의 줄임말입니다. HTML 요소가 화면에 어떻게 보일지 정하는 스타일 언어입니다. 색상, 글꼴, 여백, 크기, 테두리, 배치, 반응형 화면 같은 표현을 담당합니다.

### 구조와 표현의 분리

HTML은 “이것은 제목이다”, “이것은 문단이다”, “이것은 버튼이다”처럼 구조와 의미를 표현합니다. CSS는 그 구조를 어떻게 배치하고 어떤 분위기로 보여줄지 정합니다.

역할을 분리하면 한 CSS 파일을 수정해 여러 HTML 페이지의 스타일을 함께 바꿀 수 있습니다. 즉 CSS는 보기 좋게 만드는 기술이면서 동시에 유지보수와 재사용성을 높이는 기술입니다.

### Selector

Selector는 어떤 HTML 요소에 스타일을 적용할지 고르는 규칙입니다.

```css
button {
  padding: 12px 18px;
  border-radius: 12px;
  background: #ffffff;
}
```

이 예시에서 `button`은 스타일을 적용할 HTML 요소를 고르는 selector입니다.

### Property와 Value

Property는 바꾸고 싶은 스타일 항목이고, value는 그 항목에 넣는 값입니다.

- `padding`은 안쪽 여백을 정하는 property입니다.
- `border-radius`는 모서리 둥글기를 정하는 property입니다.
- `background`는 배경을 정하는 property입니다.
- `12px`, `#ffffff` 같은 값은 value입니다.

### 색상, 글꼴, 여백, 크기, 테두리

CSS는 화면의 기본 인상을 정합니다. 색상은 분위기를 만들고, 글꼴은 읽기 경험을 바꾸며, 여백과 크기는 정보 사이의 관계를 보여줍니다. 테두리는 영역을 구분하는 데 도움을 줍니다.

### Box Model

브라우저는 많은 HTML 요소를 상자처럼 다룹니다. 이 상자는 content, padding, border, margin으로 구성됩니다.

```text
margin
  border
    padding
      content
```

Box model을 이해하면 “왜 버튼이 예상보다 커졌는지”, “왜 요소 사이가 벌어졌는지”를 더 쉽게 볼 수 있습니다.

### Layout

Layout은 요소를 화면 어디에, 어떤 크기로, 어떤 흐름으로 배치할지 정하는 방식입니다. 처음에는 위에서 아래로 쌓이는 기본 흐름을 이해하고, 이후 flex, grid 같은 도구를 천천히 배웁니다.

### Responsive Design

Responsive design은 화면 크기에 따라 보기 좋은 형태로 바뀌는 설계입니다. 같은 문서라도 데스크톱, 태블릿, 모바일에서 읽기 좋은 크기와 배치가 다를 수 있습니다.

## 4. 실제 동작 과정

브라우저가 HTML에 CSS를 적용하는 단순화한 흐름은 다음과 같습니다.

1. 브라우저가 HTML 문서를 읽어 구조를 만든다.
2. HTML 문서 안의 `link` 태그 등을 통해 CSS 파일을 찾는다.
3. 브라우저가 CSS 파일을 요청해 가져온다.
4. CSS의 selector를 기준으로 어떤 HTML 요소에 스타일을 적용할지 판단한다.
5. `color`, `font-size`, `margin`, `padding`, `border` 같은 규칙을 적용한다.
6. box model과 layout 규칙에 따라 화면에서 각 요소의 위치와 크기를 계산한다.
7. 최종적으로 사용자가 보는 웹페이지의 시각적 표현이 만들어진다.

```text
HTML 구조
  ↓
CSS 파일 연결
  ↓
Selector로 대상 찾기
  ↓
Property와 value 적용
  ↓
Box model과 layout 계산
  ↓
화면 표시
```

JavaScript의 동작과 상호작용은 이후 WEB-005에서 다룹니다. 이 문서에서는 CSS가 HTML 구조 위에 표현과 배치를 입히는 흐름에 집중합니다.

## 5. 자주 하는 오해

- **CSS는 그냥 예쁘게 꾸미는 것인가?** 꾸미기도 하지만 핵심은 표현과 배치를 HTML 구조에서 분리하는 것입니다.
- **HTML만으로 웹페이지를 만들 수 없는가?** 만들 수는 있지만, 여러 화면의 디자인을 유지하고 바꾸기는 어렵습니다.
- **CSS가 문서의 의미를 바꾸는가?** CSS는 주로 보이는 방식을 바꿉니다. 문서의 의미와 구조는 HTML이 담당합니다.
- **CSS 속성을 많이 외워야 하는가?** 처음에는 전체 속성 목록보다 selector, property, value와 box model의 역할을 이해하는 것이 중요합니다.
- **반응형 화면은 나중에만 생각해도 되는가?** 초반부터 작은 화면에서 읽히는지 확인하는 습관을 들이면 프로젝트 품질이 좋아집니다.
- **CSS가 JavaScript 동작을 대신하는가?** CSS는 표현과 일부 시각적 변화에 강하지만, 상태와 복잡한 상호작용은 JavaScript가 담당합니다.

## 6. 프로젝트 적용 예시

### Potato's Day

Potato's Day에서 CSS는 감자의 집, 버튼, 캐릭터 위치, 따뜻한 색감, 부드러운 분위기를 만듭니다. 모바일 화면에서도 버튼과 캐릭터가 읽기 좋게 놓이도록 조정하는 일도 CSS의 역할입니다.

### Living Aegis Origin

Living Aegis Origin에서 Canvas 안의 그림은 JavaScript가 그릴 수 있지만, HUD, 버튼, 화면 레이어, 경고 표시, 메뉴와 전체 분위기는 CSS가 정리할 수 있습니다.

### 공공데이터 기반 서비스

공공데이터 기반 서비스에서 CSS는 검색창, 결과 목록, 카드형 정보, 모바일 보기, 인쇄용 화면을 정리합니다. 같은 데이터라도 CSS가 어떻게 배치하느냐에 따라 읽기 쉬움이 크게 달라집니다.

## 7. 실습 과제

1. CSS를 끈 웹페이지를 상상하거나 개발자 도구에서 스타일을 일부 꺼 보고 HTML 구조만 남으면 어떻게 보일지 관찰합니다.
2. HTML 문서에서 `link rel="stylesheet"`가 어떤 CSS 파일을 가리키는지 찾아봅니다.
3. 버튼 하나를 골라 `padding`, `border-radius`, `background` 값을 바꿔 봅니다.
4. 개발자 도구의 Elements 탭에서 한 요소의 margin, padding, border가 어떻게 표시되는지 확인합니다.
5. 같은 페이지를 데스크톱 폭과 모바일 폭에서 열어 배치가 어떻게 달라져야 읽기 좋은지 적어봅니다.

## 8. 다음 문서와의 연결

- WEB-005에서는 JavaScript가 웹페이지에 상태, 동작, 상호작용을 더하는 방식을 학습합니다.
- WEB-006에서는 HTML, CSS, JavaScript 파일이 HTTP 요청과 응답으로 어떻게 전달되는지 더 자세히 봅니다.
- Box model, layout, responsive design은 이후 프로젝트 경험이 쌓일 때 별도 Reference나 심화 문서로 분리할 수 있습니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-08 | WEB-004 초기 Learning Guide 작성 | CSS의 cascade와 specificity는 스타일 충돌을 어떤 기준으로 해결하는가? |
