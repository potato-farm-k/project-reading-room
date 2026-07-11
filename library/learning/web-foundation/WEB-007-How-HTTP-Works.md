---
title: WEB-007. How HTTP Works
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-007-How-HTTP-Works.md
copy_type: source
last_reviewed: 2026-07-11
print_friendly: true
---

# WEB-007. How HTTP Works

HTTP는 브라우저와 서버가 요청과 응답을 주고받기 위해 사용하는 공통 약속입니다.

브라우저가 페이지를 보여줄 때는 단순히 “인터넷에 접속한다”로 끝나지 않습니다. 브라우저는 서버에 필요한 파일이나 데이터를 요청하고, 서버는 그 요청에 맞는 응답을 돌려줍니다. 웹은 이 Request와 Response의 반복 위에서 움직입니다.

핵심 질문은 이것입니다.

> 브라우저와 서버는 어떤 형식으로 요청하고 응답하는가?

## 1. 학습 목표

- HTTP를 브라우저와 서버 사이의 요청/응답 약속으로 이해합니다.
- Request와 Response가 무엇인지 설명합니다.
- Method, URL/path, Header, Body, Status Code의 기본 의미를 구분합니다.
- 정적 파일 요청과 API 요청의 차이를 초보자 수준에서 설명합니다.
- GitHub Pages에서 HTML, CSS, JavaScript, 이미지가 HTTP로 전달된다는 점을 이해합니다.
- REST API와 CORS는 HTTP 위에서 이어지는 다음 학습 주제라는 점을 구분합니다.

## 2. 왜 HTTP가 필요한가

웹에서는 브라우저와 서버가 서로 다른 컴퓨터일 때가 많습니다.

브라우저는 사용자가 보고 싶은 페이지, 이미지, CSS, JavaScript 파일, 또는 API 데이터를 서버에 요청해야 합니다. 서버는 그 요청을 읽고 파일, 데이터, 오류 메시지 같은 결과를 돌려줘야 합니다.

이때 둘 사이에 공통 약속이 없으면 이런 질문이 계속 생깁니다.

- 브라우저는 어떤 파일을 달라고 말해야 할까?
- 서버는 요청이 성공했는지 실패했는지 어떻게 알려줄까?
- 응답 본문이 HTML인지 JSON인지 이미지는 어떻게 구분할까?
- 데이터를 새로 만들거나 수정하는 요청은 어떻게 표현할까?

HTTP는 이 대화를 정리해 주는 규칙입니다.

너무 넓게 보면 HTTP는 네트워크 프로토콜이지만, 처음에는 이렇게 기억해도 충분합니다.

> 브라우저가 서버에 무엇을 요청했고, 서버가 무엇을 돌려줬는가?

## 3. 핵심 개념

### HTTP

HTTP는 HyperText Transfer Protocol의 줄임말입니다.

이름에는 HyperText가 들어가지만, HTTP는 HTML만 주고받는 규칙이 아닙니다. HTML, CSS, JavaScript, 이미지, JSON 데이터 등 웹에서 필요한 여러 종류의 파일과 데이터를 주고받을 수 있습니다.

### Request

Request는 브라우저나 클라이언트가 서버에 보내는 요청입니다.

예를 들면 이런 요청이 있습니다.

- `/index.html` 파일을 주세요.
- `/style.css` 파일을 주세요.
- `/assets/gamja.png` 이미지를 주세요.
- `/api/weather?city=seoul`에 맞는 데이터를 주세요.

### Response

Response는 서버가 클라이언트에 돌려주는 응답입니다.

응답에는 요청 결과가 담깁니다.

- HTML 문서
- CSS 파일
- JavaScript 파일
- 이미지
- JSON 데이터
- 오류 메시지

### Method

Method는 어떤 종류의 요청인지 나타내는 동사입니다.

처음에는 아래 정도만 구분합니다.

| Method | 기본 의미 | 처음 이해할 때의 감각 |
| --- | --- | --- |
| GET | 파일이나 데이터를 가져온다 | “보여줘”, “읽어줘” |
| POST | 새 데이터나 처리 요청을 보낸다 | “등록해줘”, “처리해줘” |
| PUT | 대상을 통째로 바꾼다 | “이 내용으로 교체해줘” |
| PATCH | 대상의 일부를 바꾼다 | “이 부분만 수정해줘” |
| DELETE | 대상을 삭제한다 | “지워줘” |

실제 서비스에서는 서버 설계에 따라 의미가 조금씩 달라질 수 있습니다. 그래서 Method만 보고 모든 동작을 단정하지 말고, 서버가 그 Method를 어떻게 처리하도록 만들었는지도 함께 봐야 합니다.

### Header

Header는 요청이나 응답에 대한 부가 정보입니다.

예를 들어 Header에는 이런 정보가 들어갈 수 있습니다.

- 어떤 사이트에 요청하는가
- 어떤 형식의 데이터를 받거나 보내는가
- 응답 본문의 종류가 HTML인지 JSON인지 이미지인지
- 브라우저나 서버가 참고해야 할 추가 조건

Header는 “본문 데이터 그 자체”라기보다, 본문을 어떻게 이해해야 하는지 알려주는 메모에 가깝습니다.

### Body

Body는 실제로 보내거나 받는 본문 데이터입니다.

GET 요청처럼 단순히 파일이나 데이터를 가져오는 요청에는 Body가 없을 수 있습니다. POST, PUT, PATCH처럼 데이터를 보내는 요청에는 Body에 JSON이나 form 데이터가 들어갈 수 있습니다.

응답 Body에는 HTML, CSS, JavaScript, JSON, 이미지 데이터처럼 브라우저가 실제로 사용할 내용이 들어갑니다.

### Status Code

Status Code는 요청 처리 결과를 숫자로 알려주는 상태 표시입니다.

처음에는 아래 예시부터 익숙해지면 됩니다.

| Status Code | 의미 | 처음 이해할 때의 감각 |
| --- | --- | --- |
| 200 OK | 요청이 성공했다 | “요청한 것을 줄 수 있어요” |
| 301 Moved Permanently | 주소가 영구적으로 바뀌었다 | “이제 다른 주소로 가세요” |
| 404 Not Found | 요청한 대상을 찾지 못했다 | “그 경로에는 없어요” |
| 500 Internal Server Error | 서버 내부에서 오류가 났다 | “서버 쪽에서 처리하다 실패했어요” |

### 정적 파일 요청과 API 요청

정적 파일 요청은 HTML, CSS, JavaScript, 이미지 같은 파일을 달라는 요청입니다.

API 요청은 화면에 표시할 데이터나 처리 결과를 달라는 요청입니다.

두 요청은 완전히 다른 기술이 아닙니다. 둘 다 HTTP Request와 HTTP Response를 사용합니다. 다만 응답으로 받는 것이 파일 중심인지, 데이터와 처리 결과 중심인지가 다릅니다.

## 4. 실제 동작 과정

브라우저에서 URL을 입력하거나 링크를 클릭하면, HTTP 관점에서는 대략 이런 흐름이 일어납니다.

1. 사용자가 브라우저에서 URL을 입력하거나 링크를 클릭한다.
2. 브라우저는 필요한 서버와 경로를 파악한다.
3. 브라우저는 HTTP Request를 만든다.
4. Request에는 Method, URL/path, Header, 필요 시 Body가 포함된다.
5. 서버는 Request를 해석한다.
6. 서버는 파일, 데이터, 오류 메시지 등 적절한 결과를 준비한다.
7. 서버는 HTTP Response를 보낸다.
8. Response에는 Status Code, Header, 필요 시 Body가 포함된다.
9. 브라우저는 Response를 해석해 화면을 만들거나 JavaScript에 데이터를 전달한다.

아주 단순한 요청은 이렇게 볼 수 있습니다.

```text
GET /index.html HTTP/1.1
Host: example.com
```

이 요청은 `example.com` 서버에 `/index.html`을 달라고 말하는 것입니다.

서버가 성공적으로 HTML을 돌려주면 응답은 이런 모양일 수 있습니다.

```text
HTTP/1.1 200 OK
Content-Type: text/html

<html>...</html>
```

여기서 `200 OK`는 요청이 성공적으로 처리되었다는 뜻입니다. `Content-Type: text/html`은 응답 Body가 HTML 문서라는 뜻입니다. 빈 줄 아래의 `<html>...</html>` 부분이 실제 응답 Body입니다.

브라우저는 이 HTML을 받은 뒤, HTML 안에서 연결된 CSS, JavaScript, 이미지도 다시 HTTP로 요청할 수 있습니다. 그래서 웹페이지 하나를 여는 일은 보통 하나의 요청이 아니라 여러 HTTP 요청과 응답의 묶음입니다.

### GitHub Pages와 HTTP 요청

GitHub Pages는 정적 파일을 배포하는 방식입니다.

사용자가 GitHub Pages 주소에 들어가면 브라우저는 서버에 `index.html`을 요청합니다. 그 HTML 안에 `style.css`, `app.js`, 이미지 파일이 연결되어 있으면 브라우저는 필요한 파일을 다시 HTTP로 요청합니다.

GitHub Pages가 직접 복잡한 서버 로직을 실행하지 않더라도, 브라우저가 파일을 받아오는 과정 자체는 HTTP Request와 Response로 이루어집니다.

## 5. 자주 하는 오해

### HTTP는 HTML만 가져오는 규칙이다

아닙니다. HTTP는 HTML뿐 아니라 CSS, JavaScript, 이미지, JSON 데이터 등 여러 종류의 리소스를 주고받을 수 있습니다.

### URL과 HTTP는 같은 것이다

아닙니다. URL은 “어디에 있는 무엇인지”를 가리키는 주소에 가깝고, HTTP는 그 주소의 리소스를 요청하고 응답받는 방식입니다.

### GET은 항상 안전하고 POST는 항상 저장만 한다

조심해야 합니다. GET은 보통 읽기 요청에 사용하고 POST는 보통 생성이나 처리 요청에 사용하지만, 실제 동작은 서버가 어떻게 구현했는지에 따라 달라질 수 있습니다.

### Status Code 200이면 항상 화면이 정상이라는 뜻이다

아닙니다. 200은 HTTP 요청이 성공했다는 뜻입니다. 응답 Body 안의 데이터가 비어 있거나, JavaScript가 그 데이터를 잘못 처리하거나, 화면 렌더링 코드에 문제가 있으면 사용자가 보는 화면은 여전히 이상할 수 있습니다.

### 404는 브라우저 오류다

대부분은 브라우저 자체 오류가 아닙니다. 브라우저가 요청한 경로에 해당 파일이나 데이터가 없다고 서버가 응답한 상태입니다.

### API 요청은 웹페이지 요청과 완전히 다른 기술이다

아닙니다. API 요청도 HTTP Request와 Response를 사용합니다. 다만 응답으로 HTML 페이지 대신 JSON 같은 데이터를 받는 경우가 많습니다.

## 6. 프로젝트 적용 예시

### Potato's Day

Potato's Day를 GitHub Pages에서 열면 브라우저는 먼저 `index.html`을 요청합니다. HTML이 로드되면 `style.css`, `app.js`, sprite 이미지 같은 파일도 HTTP로 요청해 받아옵니다.

사용자 입장에서는 “게임 페이지를 열었다”이지만, 브라우저 입장에서는 여러 정적 파일 요청을 보내고 응답을 받아 화면을 만든 것입니다.

### Living Aegis Origin

Living Aegis Origin 같은 브라우저 기반 게임도 HTML, CSS, JavaScript 파일을 먼저 HTTP로 받아옵니다.

게임 실행에 필요한 이미지, 사운드 리소스도 파일 경로가 연결되어 있다면 브라우저가 HTTP 요청으로 가져옵니다. 파일 경로가 틀리면 서버는 404를 돌려줄 수 있고, 그러면 게임 화면에서 이미지나 사운드가 빠져 보일 수 있습니다.

### 공공데이터 기반 서비스

공공데이터 기반 서비스에서는 사용자가 검색 조건을 입력하면 JavaScript가 공공데이터 API에 HTTP 요청을 보낼 수 있습니다.

서버는 조건에 맞는 데이터를 JSON 같은 형식으로 응답하고, JavaScript는 그 Response Body를 읽어 화면에 목록이나 카드로 표시합니다.

이때 REST API의 설계 방식은 WEB-008에서, 다른 출처의 API 요청이 왜 제한될 수 있는지는 WEB-009 CORS에서 다룹니다.

## 7. 실습 과제

1. GitHub Pages 프로젝트 하나를 열고 개발자 도구의 Network 탭에서 `index.html`, CSS, JavaScript, 이미지 요청을 찾아봅니다.
2. 각 요청을 보고 Method, Status Code, Content-Type Header를 확인합니다.
3. 존재하지 않는 이미지 경로를 상상해 보고, 그런 요청이 왜 404가 될 수 있는지 설명해 봅니다.
4. HTML 파일 요청과 API JSON 요청의 차이를 “응답 Body에 무엇이 들어오는가?” 기준으로 비교해 봅니다.
5. `200 OK` 응답을 받았는데도 화면이 비어 있을 수 있는 이유를 JavaScript 처리나 데이터 내용 관점에서 적어봅니다.
6. Potato's Day나 Living Aegis Origin에서 파일 하나가 화면에 나타나기까지 어떤 HTTP 요청이 필요할지 순서대로 말해 봅니다.

## 8. 다음 문서와의 연결

- WEB-008에서는 HTTP 위에서 API를 설계하고 사용하는 방식인 REST API를 살펴봅니다.
- WEB-009에서는 브라우저가 다른 출처의 API 요청을 왜 제한하고, CORS가 어떤 기준으로 요청을 허용하는지 다룹니다.
- 인증, 쿠키, 세션, 캐시, HTTPS, HTTP/2, HTTP/3는 이번 문서에서 깊게 다루지 않고 이후 필요할 때 Reference 또는 별도 Guide로 나눕니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-11 | WEB-007 초기 Learning Guide 작성 | 개발자 도구 Network 탭에서 Request Header, Response Header, Response Body를 어떻게 구분해서 읽을 수 있는가? |
