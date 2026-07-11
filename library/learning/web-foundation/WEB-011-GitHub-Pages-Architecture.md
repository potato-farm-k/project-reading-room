---
title: WEB-011. GitHub Pages Architecture
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-011-GitHub-Pages-Architecture.md
copy_type: source
last_reviewed: 2026-07-11
print_friendly: true
---

# WEB-011. GitHub Pages 서비스는 어떻게 설계할까?

## 부제: 지금까지 배운 기술을 하나의 서비스로 조립하기

> 이제는 기술을 하나씩 배우는 단계가 아니라,
> 하나의 서비스를 어떤 구조로 만들 것인지 생각할 차례입니다.

핵심 질문은 이것입니다.

> GitHub Pages는 정적 웹 프로젝트를 어떤 구조로 배포하고 브라우저에 제공하는가?

## 1. 학습 목표

이 문서를 읽고 나면 다음 질문에 답할 수 있어야 합니다.

- GitHub Pages가 정적 파일을 웹사이트로 제공하는 구조를 이해합니다.
- repository와 GitHub Pages의 관계를 설명합니다.
- `index.html`이 기본 진입점이라는 점을 이해합니다.
- CSS, JavaScript, 이미지, Markdown 같은 정적 파일이 브라우저에 제공되는 흐름을 설명합니다.
- root 경로, 하위 경로, 상대 경로, 절대 경로의 차이를 구분합니다.
- GitHub Actions와 Pages 배포의 기본 관계를 이해합니다.
- GitHub Pages가 할 수 있는 것과 할 수 없는 것을 구분합니다.
- Project Reading Room이 GitHub Pages 위에서 어떻게 동작하는지 설명합니다.

## 2. 왜 GitHub Pages 구조를 이해해야 하는가

GitHub Pages는 단순히 “무료 웹호스팅”이라고만 이해하면 자주 막힙니다.

중요한 점은 repository 안의 정적 파일이 브라우저에서 접근 가능한 웹 리소스가 된다는 것입니다.

```text
repository의 파일
      ↓
GitHub Pages 배포
      ↓
웹에서 접근 가능한 URL
      ↓
브라우저가 HTTP로 요청
```

이 구조를 이해하면 다음 문제를 더 쉽게 판단할 수 있습니다.

- 왜 `index.html`이 먼저 열리는가?
- 왜 로컬에서는 되던 이미지 경로가 Pages에서는 깨지는가?
- JavaScript는 `library.json`이나 Markdown 파일을 어떻게 읽는가?
- GitHub Pages에서 API Key를 숨길 수 없는 이유는 무엇인가?
- 외부 API 호출에는 왜 CORS나 Serverless가 관련되는가?

## 3. 핵심 개념

### GitHub Pages

GitHub Pages는 repository의 정적 파일을 웹에서 접근 가능한 사이트로 제공하는 기능입니다.

정적 파일은 서버에서 실행되는 코드가 아니라, 브라우저가 다운로드해서 해석하거나 표시하는 파일입니다.

- HTML
- CSS
- JavaScript
- 이미지
- Markdown
- JSON

### Static Site

Static Site는 요청이 올 때마다 서버가 페이지를 새로 계산해서 만드는 방식이 아니라, 이미 준비된 정적 파일을 제공하는 방식의 사이트입니다.

GitHub Pages는 이런 정적 사이트에 잘 맞습니다.

### Repository와 Pages

repository는 파일을 저장하고 버전을 관리하는 곳입니다.

GitHub Pages는 그 repository의 특정 branch, folder, 또는 GitHub Actions 결과물을 웹사이트로 제공합니다.

### index.html

`index.html`은 사용자가 디렉터리 URL로 들어왔을 때 기본으로 열리는 진입점입니다.

예를 들어 Pages 사이트 주소에 접속하면 브라우저는 보통 먼저 `index.html`을 요청합니다.

### 정적 파일 제공

`index.html` 안에 연결된 파일은 브라우저가 추가로 요청합니다.

```html
<link rel="stylesheet" href="style.css">
<script src="app.js"></script>
<img src="assets/gamja.png" alt="Gamja">
```

브라우저는 HTML을 읽다가 CSS, JavaScript, 이미지 경로를 발견하면 해당 파일을 다시 HTTP로 요청합니다.

### GitHub Actions와 Pages

GitHub Actions는 repository에서 자동 작업을 실행하는 기능입니다.

GitHub Pages는 정적 파일을 배포하는 기능입니다.

두 기능은 함께 쓰일 수 있지만 같은 것은 아닙니다. 예를 들어 Actions workflow가 빌드 결과물을 만들고, Pages가 그 결과물을 웹사이트로 제공할 수 있습니다.

이 문서에서는 workflow 문법보다 “배포 대상이 Pages URL로 제공된다”는 흐름에 집중합니다.

### root 경로와 하위 경로

User site와 project site는 URL 구조가 다를 수 있습니다.

User site 예:

```text
https://username.github.io/
```

Project site 예:

```text
https://username.github.io/project-reading-room/
```

Project site에서는 사이트가 도메인 root가 아니라 하위 경로 아래에서 열릴 수 있습니다. 그래서 경로를 잘못 쓰면 로컬에서는 되지만 Pages에서는 깨질 수 있습니다.

### 상대 경로와 절대 경로

상대 경로는 현재 파일 위치를 기준으로 파일을 찾습니다.

```text
./library.json
library/learning/web-foundation/WEB-001-How-the-Web-Works.md
```

절대 경로처럼 보이는 `/library.json`은 사이트의 root를 기준으로 찾습니다.

Project site에서는 root가 `https://username.github.io/`일 수 있으므로, `/library.json`이 `https://username.github.io/project-reading-room/library.json`이 아니라 `https://username.github.io/library.json`을 가리키는 문제가 생길 수 있습니다.

그래서 GitHub Pages에서는 상대 경로와 배포 하위 경로를 조심해서 다뤄야 합니다.

### GitHub Pages가 할 수 있는 것과 할 수 없는 것

GitHub Pages가 잘하는 일:

- 정적 HTML/CSS/JavaScript 제공
- 이미지, JSON, Markdown 같은 정적 파일 제공
- 브라우저에서 JavaScript 실행을 위한 파일 제공

GitHub Pages만으로 처리하기 어려운 일:

- 서버 코드 실행
- 비밀 API Key 보호
- 사용자별 데이터 저장
- 인증/결제 처리
- backend API 서버 역할

## 4. 실제 동작 과정

GitHub Pages 기반 사이트는 대략 이런 흐름으로 동작합니다.

1. 개발자가 repository에 HTML, CSS, JavaScript, 이미지, Markdown 같은 정적 파일을 둔다.
2. GitHub Pages 설정 또는 GitHub Actions workflow가 배포 대상을 정한다.
3. GitHub Pages는 배포된 정적 파일을 웹에서 접근 가능한 URL로 제공한다.
4. 사용자가 GitHub Pages URL에 접속한다.
5. 브라우저는 index.html을 HTTP로 요청한다.
6. index.html 안의 link, script, img 경로를 따라 CSS, JavaScript, 이미지 파일을 추가로 요청한다.
7. JavaScript가 필요한 경우 library.json이나 Markdown 파일 같은 정적 데이터 파일을 fetch로 읽는다.
8. 외부 API가 필요한 경우 JavaScript가 외부 서버에 HTTP 요청을 보낼 수 있다.
9. 단, 외부 API 서버가 CORS를 허용해야 브라우저가 응답을 JavaScript에 전달할 수 있다.
10. 서버 측 처리, 비밀 키 보호, 데이터 저장 같은 기능은 GitHub Pages만으로는 처리하기 어렵고 별도 backend나 Serverless가 필요할 수 있다.

Project Reading Room 구조는 이렇게 볼 수 있습니다.

```text
project-reading-room/
  index.html
  style.css
  app.js
  library.json
  library/
    learning/
      web-foundation/
        WEB-001-How-the-Web-Works.md
```

`index.html`은 사용자가 처음 여는 기본 진입점입니다. `style.css`와 `app.js`는 `index.html`이 연결해 사용하는 정적 파일입니다. `library.json`과 Markdown 문서는 JavaScript가 `fetch`로 읽을 수 있는 정적 데이터 파일입니다.

## 5. 자주 하는 오해

### GitHub Pages는 모든 웹서비스 기능을 제공하는 서버다

아닙니다. GitHub Pages는 정적 파일 제공에 적합합니다. backend 기능은 별도 서버나 Serverless가 필요할 수 있습니다.

### GitHub Pages에 올리면 JavaScript 없이도 모든 기능이 자동으로 동작한다

아닙니다. Pages는 파일을 제공할 뿐입니다. 화면 상호작용, 문서 로딩, API 호출 같은 동작은 브라우저에서 JavaScript가 실행해야 합니다.

### repository에 파일만 있으면 어떤 경로에서도 자동으로 잘 열린다

아닙니다. 배포 대상, 폴더 구조, 상대 경로, project site 하위 경로에 따라 요청 URL이 달라질 수 있습니다.

### 상대 경로와 절대 경로는 대충 써도 된다

아닙니다. GitHub Pages, 특히 project site에서는 `/`로 시작하는 경로가 예상과 다른 위치를 가리킬 수 있습니다.

### GitHub Pages에서 API key를 숨길 수 있다

아닙니다. 브라우저로 전달되는 파일 안의 값은 사용자가 확인할 수 있습니다. 비밀 Key는 Serverless나 backend 쪽에서 다뤄야 합니다.

### GitHub Pages는 API 서버를 만들 수 있다

아닙니다. GitHub Pages 자체는 정적 파일 제공 기능입니다. API 서버 역할은 별도 backend나 Serverless가 맡아야 합니다.

### GitHub Actions와 GitHub Pages는 같은 것이다

아닙니다. Actions는 자동 작업 실행 도구이고, Pages는 정적 파일을 웹사이트로 제공하는 기능입니다.

### 로컬에서는 되는데 Pages에서 안 되면 GitHub가 고장난 것이다

꼭 그렇지는 않습니다. 상대 경로, 대소문자, 배포 대상 폴더, project site 하위 경로 문제일 수 있습니다.

## 6. 프로젝트 적용 예시

### Project Reading Room

Project Reading Room은 `index.html`, `style.css`, `app.js`가 GitHub Pages에서 제공되고, `app.js`가 `library.json`과 Markdown 파일을 읽어 문서 Reading Room을 구성합니다.

즉, Markdown 파일도 서버에서 변환되는 것이 아니라 정적 파일로 제공되고, 브라우저의 JavaScript가 읽어서 화면에 표시합니다.

### Potato's Day

Potato's Day에서는 GitHub Pages가 게임의 HTML/CSS/JavaScript와 캐릭터 이미지를 제공합니다.

브라우저는 JavaScript를 실행해 게임 화면을 만들고, 필요한 sprite 이미지나 오디오 파일을 정적 파일로 다시 요청할 수 있습니다.

### Living Aegis Origin

Living Aegis Origin prototype은 GitHub Pages가 정적 파일을 제공하고, 브라우저가 Canvas 2D 기반 게임 루프를 실행하는 구조로 볼 수 있습니다.

게임 루프는 브라우저에서 실행되고, Pages는 그 실행에 필요한 파일을 제공하는 역할입니다.

### 공공데이터 기반 서비스

공공데이터 기반 서비스에서는 GitHub Pages가 검색 화면을 제공하고, JavaScript가 외부 공공데이터 API를 호출해 결과를 표시할 수 있습니다.

다만 외부 API 서버가 CORS를 허용해야 브라우저가 응답을 JavaScript에 전달할 수 있습니다. 비밀 Key 보호나 응답 가공이 필요하면 Serverless Proxy가 중간에 들어갈 수 있습니다.

## 7. 실습 과제

1. Project Reading Room의 `index.html`, `style.css`, `app.js`, `library.json`이 각각 어떤 역할을 하는지 적어봅니다.
2. GitHub Pages project site URL과 user site URL의 차이를 예시로 설명해 봅니다.
3. `/library.json`과 `./library.json`이 project site에서 어떻게 다르게 해석될 수 있는지 설명해 봅니다.
4. Pages에서 이미지가 깨졌을 때 상대 경로, 대소문자, 배포 대상 폴더 중 무엇을 확인할지 순서대로 적어봅니다.
5. GitHub Pages에서 API Key를 숨길 수 없는 이유를 설명해 봅니다.
6. 공공데이터 API 호출이 필요한 프로젝트에서 GitHub Pages, JavaScript, Serverless, DB의 역할을 나눠 봅니다.

## 8. 다음 문서와의 연결

WEB-011은 Web Foundation Learning Track 1단계의 종합 정리입니다.

여기까지 오면 웹 서비스의 기본 구조를 큰 흐름으로 이해한 것입니다.

```text
브라우저
   │
HTTP
   │
REST API
   │
CORS
   │
Serverless
   │
GitHub Pages
```

이후 문서는 실제 프로젝트 경험을 바탕으로 필요한 Guide나 Reference를 추가하면서 확장합니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-11 | WEB-011 초기 Learning Guide 작성 | Project site 하위 경로에서 깨지기 쉬운 상대 경로 패턴은 어떤 것이 있는가? |
