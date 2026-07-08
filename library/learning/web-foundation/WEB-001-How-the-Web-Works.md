---
title: WEB-001 — How the Web Works
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-001-How-the-Web-Works.md
copy_type: source
last_reviewed: 2026-07-08
print_friendly: true
---

# WEB-001 — 웹은 어떻게 동작하는가

## 1. 학습 목표

- 웹에서 Client와 Server가 맡는 역할을 구분합니다.
- Browser, URL, DNS와 HTTP가 한 번의 페이지 요청에서 어떻게 연결되는지 설명합니다.
- 프로젝트 파일을 웹에 배포했을 때 로컬 파일과 무엇이 달라지는지 이해합니다.

## 2. 왜 이 기술이 생겼는가

서로 다른 컴퓨터에 있는 문서를 공통된 방식으로 찾고 전달하려면 주소 체계와 통신 규칙이 필요합니다. 웹은 자원에 URL을 부여하고, Client가 HTTP로 요청하면 Server가 응답하는 구조를 통해 이 문제를 해결합니다.

웹의 각 기술은 혼자 존재하지 않습니다. 사람이 기억하기 쉬운 주소, 서버를 찾는 과정, 요청과 응답의 규칙, 받은 내용을 보여주는 프로그램이 협력해 하나의 페이지를 만듭니다.

## 3. 핵심 개념

주소창에 URL을 입력하면 Browser가 Client 역할을 맡아 DNS로 Server의 주소를 찾고, HTTP로 자원을 요청합니다. Server가 HTTP 응답을 보내면 Browser가 이를 해석해 사용자에게 보여줍니다. 아래 개념은 이 한 흐름 안에서 서로 연결됩니다.

### 웹

인터넷 위에서 URL과 HTTP를 사용해 문서와 데이터를 연결하고 주고받는 시스템입니다. 인터넷은 네트워크 기반이고, 웹은 그 기반 위에서 동작하는 서비스 중 하나입니다.

### Client

자원을 요청하는 쪽입니다. 브라우저, 모바일 앱 또는 API를 호출하는 프로그램이 Client가 될 수 있습니다.

### Server

요청을 받고 알맞은 문서나 데이터를 응답하는 쪽입니다. 정적 파일을 그대로 전달할 수도 있고, 요청에 따라 결과를 계산할 수도 있습니다.

### Browser

사용자를 대신해 URL을 해석하고 요청을 보내며, 응답받은 웹 문서를 화면과 상호작용으로 표현하는 Client 프로그램입니다.

### URL

웹 자원의 위치와 접근 방법을 나타내는 주소입니다. 보통 protocol, host, path, query 같은 부분으로 구성됩니다.

```text
https://example.com/library/document.html?mode=read
│       │           │                     │
protocol host        path                  query
```

### DNS

사람이 읽는 도메인 이름을 네트워크 통신에 필요한 IP 주소로 찾도록 돕는 시스템입니다. DNS는 웹 문서를 전달하지 않고 서버를 찾는 단서를 제공합니다.

### HTTP

Client가 무엇을 원하는지 요청하고 Server가 결과와 상태를 응답하는 규칙입니다. method, path, header, body와 status code 같은 요소를 사용합니다.

## 4. 실제 동작 과정

브라우저 주소창에 URL을 입력했을 때의 단순화한 흐름은 다음과 같습니다.

1. Browser가 URL에서 protocol, host와 path를 구분합니다.
2. DNS를 통해 host에 대응하는 서버 주소를 찾습니다.
3. Browser가 해당 Server에 HTTP 요청을 보냅니다.
4. Server가 요청한 자원을 찾거나 결과를 만들고 HTTP 응답을 보냅니다.
5. Browser가 응답의 상태와 MIME Type을 확인합니다.
6. Browser가 받은 문서와 연결 자원을 해석해 화면을 구성합니다.

```text
사용자
  ↓ URL 입력
Browser(Client)
  ↓ DNS로 서버 주소 확인
Server
  ↕ HTTP 요청과 응답
Browser가 응답을 해석해 화면 구성
```

실제 환경에는 캐시, TLS, 프록시, CDN과 여러 추가 요청이 포함될 수 있습니다. 이번 문서에서는 전체 흐름의 뼈대만 다룹니다.

HTML, CSS, JavaScript는 이후 문서에서 별도로 다룹니다.

## 5. 자주 하는 오해

- **인터넷과 웹은 같은가?** 인터넷은 연결 기반이며 웹은 그 위에서 동작하는 서비스입니다.
- **URL은 파일 경로인가?** 파일을 가리킬 수도 있지만 서버가 해석하는 자원 식별자이므로 실제 디스크 경로와 항상 같지는 않습니다.
- **DNS가 페이지를 보내는가?** DNS는 서버 주소를 찾는 역할을 하며 본문은 HTTP 응답으로 받습니다.
- **Browser가 Server인가?** Browser는 보통 요청을 시작하고 응답을 표현하는 Client입니다.
- **정적 사이트에는 Server가 없는가?** 동적 계산 서버가 없을 뿐, 파일을 전달하는 웹 서버나 CDN은 필요합니다.

## 6. 프로젝트 적용 예시

### Potato's Day

GitHub Pages URL을 열면 Browser가 배포 서버에서 HTML, CSS, JavaScript와 sprite 파일을 각각 요청합니다. 상대 경로가 잘못되면 저장소에는 파일이 있어도 Browser가 다른 URL로 요청해 404가 발생할 수 있습니다.

### Living Aegis Origin

Canvas 2D 기반 Prototype과 Simulator도 Browser가 HTML, CSS, JavaScript 파일을 받아 실행하는 웹 애플리케이션입니다. 로컬 개발 서버와 GitHub Pages의 host가 다르면 URL과 자원 경로의 기준도 달라집니다.

### 공공데이터 기반 서비스

Browser 또는 별도 Server가 외부 공공 API에 HTTP 요청을 보내 JSON 데이터를 받을 수 있습니다. 이때 API URL, method, status code, CORS 정책을 함께 이해해야 문제를 진단할 수 있습니다.

## 7. 실습 과제

1. 자주 사용하는 웹 페이지 URL 하나를 protocol, host, path와 query로 나눠 적습니다.
2. 브라우저 개발자 도구의 Network 탭에서 첫 HTML 요청과 추가 자원 요청을 구분합니다.
3. 성공 응답 하나와 404 응답 하나의 status code, Content-Type과 요청 URL을 비교합니다.
4. `python3 -m http.server`로 연 페이지와 파일을 직접 연 `file://` 페이지의 URL을 비교합니다.

## 8. 다음 문서와의 연결

- WEB-002에서는 Browser가 응답을 해석하고 화면을 만드는 역할을 더 자세히 살펴봅니다.
- WEB-006에서는 HTTP 요청과 응답 구조를 분리해 학습합니다.
- [Web Reference Index](./WEB_REFERENCE_INDEX.md)에는 HTTP, MIME Type과 Status Code처럼 반복해서 확인할 항목을 모읍니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-08 | WEB-001 초기 초안 작성 | Browser가 HTML을 받은 뒤 추가 자원을 찾고 요청하는 순서는 어떻게 결정되는가? |
| 2026-07-08 | Client, Server, Browser, URL, DNS, HTTP의 연결 흐름과 프로젝트 예시 보강 | DNS 조회와 HTTP 요청 사이에서 연결은 어떻게 만들어지는가? |
