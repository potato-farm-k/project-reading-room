---
title: WEB-003. What Is HTML
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-003-What-Is-HTML.md
copy_type: source
last_reviewed: 2026-07-08
print_friendly: true
---

# WEB-003. What Is HTML

HTML은 웹페이지에 글자를 쓰기 위한 문법만이 아닙니다. 사람이 문서를 더 잘 표현하고, 더 쉽게 공유하고, 컴퓨터가 더 잘 이해하도록 만들기 위한 문서 표현 방식의 진화 속에서 등장한 웹 문서용 Markup Language입니다.

## 1. 학습 목표

- HTML이 왜 만들어졌는지 설명합니다.
- Markup이 문서의 의미와 구조를 표시하는 방식이라는 점을 이해합니다.
- 태그, 요소, 시작 태그, 종료 태그와 속성의 기본 의미를 구분합니다.
- Markdown, XML, YAML, Frontmatter가 HTML과 어떤 관계를 갖는지 큰 흐름을 이해합니다.
- 브라우저가 HTML을 읽어 화면 구조를 만드는 흐름을 설명합니다.
- HTML, CSS, JavaScript가 각각 구조, 모양, 동작을 맡는다는 관계를 이해합니다.
- GitHub Pages와 Project Reading Room에서 HTML과 Markdown이 어떻게 연결되는지 이해합니다.

## 2. 왜 HTML이 필요한가

웹은 서로 다른 컴퓨터와 브라우저에서 같은 문서를 읽고 연결하기 위해 만들어졌습니다. 그러려면 “이 문장은 제목이다”, “이 부분은 문단이다”, “이 글자는 다른 페이지로 가는 링크다”처럼 문서의 의미를 공통된 방식으로 표현해야 합니다.

초기의 텍스트 파일은 글자만 저장했습니다. 하지만 사람들은 제목, 문단, 굵은 글씨, 링크, 이미지 같은 정보를 함께 표현하고 싶어 했습니다. 인쇄 편집자가 원고에 빨간 펜으로 표시를 남기던 관습을 Markup이라고 불렀고, 이 개념이 컴퓨터 문서에도 이어졌습니다.

HTML은 이 문제를 웹에서 해결합니다. HTML은 화면을 예쁘게 꾸미는 일을 중심으로 하지 않고, 문서 안의 정보가 무엇인지 구조로 표시합니다. 브라우저는 이 구조를 읽고 사용자에게 웹페이지로 보여줍니다.

문서 표현 방식은 다음처럼 발전해 왔다고 볼 수 있습니다.

```text
TXT
  ↓
Markup
  ↓
HTML
  ↓
XML
  ↓
Markdown
  ↓
YAML
  ↓
Frontmatter
```

이 순서는 “무조건 이 기술이 다음 기술을 대체했다”는 뜻이 아닙니다. 각 방식이 문서를 표현하고 공유하고 컴퓨터가 이해하도록 돕는 문제를 서로 다른 각도에서 풀어 왔다는 큰 흐름입니다.

## 3. 핵심 개념

### HTML

HTML은 HyperText Markup Language의 줄임말입니다. HyperText는 문서가 링크로 서로 연결될 수 있다는 뜻이고, Markup은 문서의 부분에 의미를 표시한다는 뜻입니다.

HTML은 문서를 어떻게 꾸밀지가 아니라 “무엇인지”, 즉 의미와 구조를 표현합니다.

### Markup

Markup은 문서의 각 부분이 어떤 의미를 갖는지 표시하는 방법입니다. 예를 들어 “이것은 제목이다”, “이것은 문단이다”, “이것은 링크다” 같은 정보를 문서 안에 남깁니다.

### 태그와 요소

태그는 브라우저에게 문서의 의미를 알려주는 표시입니다. 요소는 시작 태그, 내용, 종료 태그를 합친 단위입니다.

```html
<h1>감자의 하루</h1>
```

이 예시에서 `<h1>`은 시작 태그, `감자의 하루`는 내용, `</h1>`은 종료 태그입니다. 전체는 제목 요소입니다.

### 속성

속성(attribute)은 요소에 추가 정보를 붙입니다. 예를 들어 링크는 `href` 속성으로 이동할 주소를 가집니다.

```html
<a href="https://example.com">예시 문서 열기</a>
```

### 기본 요소

- `h1`은 문서나 영역의 중요한 제목을 나타냅니다.
- `p`는 문단을 나타냅니다.
- `a`는 다른 위치로 이동하는 링크를 나타냅니다.
- `img`는 이미지를 나타냅니다.
- `ul`, `ol`, `li`는 목록을 나타냅니다.
- `button`은 사용자가 누를 수 있는 요소를 나타냅니다.

처음에는 태그를 많이 외우는 것보다 “각 요소가 어떤 의미를 표현하는가”를 이해하는 편이 더 중요합니다.

### Semantic HTML

Semantic HTML은 요소를 단순한 상자처럼 쓰지 않고 의미에 맞게 사용하는 방식입니다. 예를 들어 제목은 `h1`, 문단은 `p`, 이동 링크는 `a`, 주요 내용 영역은 `main`처럼 표현합니다. 이렇게 쓰면 브라우저, 검색 엔진, 보조 기술이 문서 구조를 더 잘 이해할 수 있습니다.

### Markdown

Markdown은 사람이 빠르게 문서를 작성하도록 만든 가벼운 Markup입니다. HTML보다 읽고 쓰기 쉽고, 대부분의 경우 HTML로 변환된 뒤 브라우저에 표시됩니다.

```markdown
# 제목

본문입니다.
```

```text
Markdown
  ↓
HTML
  ↓
Browser
```

GitHub와 Project Reading Room이 Markdown을 사용하는 이유도 여기에 있습니다.

### XML

XML은 컴퓨터끼리 데이터를 설명하기 위한 Markup입니다.

```xml
<name>Kim</name>
```

HTML이 브라우저에 문서를 보여주기 위한 언어라면, XML은 데이터 표현에 더 가깝습니다. 과거에는 웹 서비스가 XML로 데이터를 많이 주고받았지만, 현재는 JSON이 많은 역할을 이어받았습니다.

### YAML과 Frontmatter

YAML은 사람이 읽기 쉬운 설정과 메타데이터 표현에 자주 쓰입니다.

```yaml
database:
  mysql:
    user: root
```

Markdown 문서 맨 위의 Frontmatter도 YAML 형식입니다.

```yaml
---
title: WEB-003
category: learning
---
```

본문이 아니라 문서의 메타데이터를 저장하는 영역입니다. Project Reading Room의 Markdown 문서들도 이 frontmatter로 제목, category, source path 같은 관리 정보를 남깁니다.

### HTML, CSS, JavaScript의 관계

- HTML은 구조와 의미를 담당합니다.
- CSS는 모양과 배치를 담당합니다.
- JavaScript는 동작과 상호작용을 담당합니다.

CSS와 JavaScript 문법은 이 문서에서 깊게 다루지 않습니다. CSS는 WEB-004에서, JavaScript는 WEB-005에서 따로 학습합니다.

## 4. 실제 동작 과정

HTML 파일이 브라우저에 도착한 뒤의 단순화한 흐름은 다음과 같습니다.

1. 서버 또는 GitHub Pages가 HTML 파일을 브라우저에 보낸다.
2. 브라우저가 HTML 문서를 읽는다.
3. 브라우저가 태그를 해석해 문서 구조를 만든다.
4. 제목, 문단, 링크, 이미지 같은 요소가 의미 있는 구조로 정리된다.
5. CSS가 연결되어 있으면 구조에 모양이 입혀진다.
6. JavaScript가 연결되어 있으면 사용자 상호작용이 추가된다.
7. 최종적으로 사용자가 보는 웹페이지가 만들어진다.

```text
HTML 파일
  ↓
Browser가 태그 해석
  ↓
문서 구조 생성
  ↓
CSS로 모양 적용
  ↓
JavaScript로 상호작용 추가
  ↓
웹페이지 표시
```

Project Reading Room처럼 Markdown을 사용하는 경우에는 한 단계가 더 있습니다.

```text
Markdown
  ↓
HTML로 변환
  ↓
Browser가 화면에 표시
```

아주 짧은 HTML 예시는 다음과 같습니다.

```html
<h1>감자의 하루</h1>
<p>감자와 함께 조용히 쉬는 작은 웹 게임입니다.</p>
<button>감자 부르기</button>
```

여기서 `h1`은 제목, `p`는 문단, `button`은 사용자가 누를 수 있는 요소를 나타냅니다. 아직 색상이나 애니메이션은 없지만, 브라우저가 이해할 수 있는 기본 구조는 이미 만들어져 있습니다.

## 5. 자주 하는 오해

- **HTML은 화면을 꾸미는 언어인가?** HTML의 핵심 역할은 구조와 의미입니다. 꾸미는 일은 주로 CSS가 맡습니다.
- **HTML은 프로그래밍 언어인가?** HTML은 계산이나 조건문을 실행하는 언어가 아니라 문서를 기술하는 Markup Language입니다.
- **Markup은 HTML만 뜻하는가?** 아닙니다. Markdown과 XML도 Markup 계열로 볼 수 있습니다.
- **Markdown은 웹 기술인가?** Markdown 자체는 글쓰기 기술에 가깝습니다. 하지만 HTML로 쉽게 변환할 수 있어 GitHub, 기술 문서, 블로그, Reading Room에서 널리 쓰입니다.
- **YAML Frontmatter도 본문인가?** 아닙니다. Frontmatter는 문서 본문이 아니라 제목, category, source path 같은 메타데이터를 저장하는 영역입니다.
- **태그를 많이 외우면 HTML을 잘하는가?** 처음에는 태그 목록보다 문서 구조를 어떻게 표현할지 이해하는 것이 더 중요합니다.
- **`div`만 써도 되는가?** 화면은 만들 수 있지만 의미가 약해집니다. 가능한 경우 제목, 문단, 목록, 버튼, 링크처럼 의미가 있는 요소를 먼저 선택합니다.

## 6. 프로젝트 적용 예시

### Potato's Day

Potato's Day에서 `index.html`은 게임 화면의 기본 구조를 잡아줍니다. 제목, 버튼, 캐릭터가 놓일 영역, 대화 영역 같은 뼈대는 HTML이 만들고, CSS와 JavaScript가 그 위에 분위기와 동작을 더합니다.

### Living Aegis Origin

Living Aegis Origin 같은 Canvas 2D 기반 프로젝트에서도 HTML은 출발점입니다. Canvas가 놓일 자리, HUD 요소, 상태 표시 영역 같은 기본 문서 구조를 HTML이 제공합니다.

### 공공데이터 기반 서비스

공공데이터 기반 서비스에서는 검색창, 검색 버튼, 결과 목록, 상세 정보 영역 같은 화면 구조를 HTML이 표현합니다. API 데이터가 오기 전에도 “어디에 입력하고, 어디에 결과를 보여줄지”라는 구조가 먼저 필요합니다.

### Project Reading Room

Project Reading Room의 원본 문서는 Markdown으로 작성됩니다. Markdown 상단의 frontmatter는 YAML 메타데이터이고, 브라우저는 최종적으로 Markdown이 변환된 HTML을 화면에 표시합니다.

```text
Markdown + YAML Frontmatter
  ↓
HTML
  ↓
Browser
```

## 7. 실습 과제

1. 자주 보는 웹페이지 하나를 열고 제목, 문단, 링크, 이미지, 버튼처럼 보이는 부분을 찾아봅니다.
2. 개발자 도구의 Elements 탭에서 `h1`, `p`, `a`, `img`, `button` 요소가 있는지 확인합니다.
3. 간단한 HTML 조각을 만들고 `h1`, `p`, `button` 요소를 하나씩 넣어봅니다.
4. Markdown 문서 하나를 열고 제목, 목록, 링크가 HTML의 어떤 요소로 바뀔지 예상해 봅니다.
5. Project Reading Room 문서의 frontmatter를 보고 본문과 메타데이터를 구분해 봅니다.
6. 의미가 약한 `div`와 의미가 있는 `main`, `section`, `button`, `a`의 차이를 한 문장으로 정리해 봅니다.

## 8. 다음 문서와의 연결

- [WEB-004](./WEB-004-Why-CSS.md)에서는 HTML 구조에 모양과 배치를 입히는 CSS를 학습합니다.
- WEB-005에서는 HTML 요소에 동작과 상태 변화를 더하는 JavaScript를 학습합니다.
- WEB-006에서는 브라우저가 HTML, CSS, JavaScript를 요청하고 응답받는 HTTP 흐름을 더 자세히 봅니다.
- Markdown, XML, YAML과 Frontmatter는 이후 문서 관리 또는 Reference 문서에서 더 자세히 분리할 수 있습니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-08 | WEB-003 초기 Learning Guide 작성 | 의미 있는 HTML 구조를 쓰면 브라우저와 보조 기술은 어떤 정보를 더 잘 이해하는가? |
| 2026-07-08 | v2 교체본 반영: 문서 진화 관점, Markup, Markdown, XML, YAML과 Frontmatter 비교 추가 | Markdown이 HTML로 변환될 때 semantic HTML 구조는 어디까지 보존되는가? |
