---
title: WEB-007. How HTTP Works
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-007-How-HTTP-Works.md
copy_type: source
last_reviewed: 2026-07-11
print_friendly: true
---

# WEB-007. HTTP는 컴퓨터끼리 어떻게 대화하는가?

## 부제: 요청과 응답, 그리고 바이트를 해석하는 약속

> 웹은 Request와 Response를 반복하며 동작합니다.
> HTTP는 브라우저와 서버가 요청과 응답을 주고받기 위한 공통 규칙입니다.

핵심 질문은 이것입니다.

> 브라우저와 서버는 어떤 형식으로 요청하고 응답하는가?

## 1. 학습 목표

이 문서를 읽고 나면 다음 질문에 답할 수 있어야 합니다.

- HTTP는 왜 필요한가?
- Request와 Response는 무엇인가?
- Method, URL/path, Header, Body, Status Code는 어떤 역할을 하는가?
- HTTP는 텍스트와 이미지를 어떻게 전달하는가?
- `Content-Type`은 왜 필요한가?
- JSON은 어떤 형식이며 이미지도 담을 수 있는가?
- 웹페이지 하나를 열 때 왜 여러 요청이 발생하는가?
- 정적 파일 요청과 API 요청은 무엇이 같고 무엇이 다른가?

## 2. 왜 HTTP가 필요한가

브라우저와 서버는 서로 다른 회사와 개발자가 만들 수 있습니다.

각자 원하는 방식으로 통신한다면 브라우저마다 서버를 따로 만들어야 하고, 서버마다 전용 브라우저가 필요해집니다.

그래서 모두가 함께 사용할 수 있는 공통 규칙이 필요했습니다.

그 규칙이 HTTP입니다.

```text
브라우저
   │
   │ Request
   ▼
서버
   │
   │ Response
   ▼
브라우저
```

HTTP는 특정 파일 형식이 아니라, 요청과 응답을 주고받는 방법을 정한 프로토콜입니다.

처음에는 이렇게 기억하면 충분합니다.

> 브라우저가 서버에 무엇을 요청했고, 서버가 무엇을 돌려줬는가?

## 3. 핵심 개념

### Request

Request는 브라우저나 프로그램이 서버에 보내는 요청입니다.

예:

```text
GET /index.html HTTP/1.1
Host: example.com
```

뜻은 대략 다음과 같습니다.

```text
example.com 서버의
/index.html 파일을 보내 주세요.
```

Request에는 보통 다음 정보가 들어갑니다.

- Method: 어떤 종류의 요청인지 나타내는 동사
- URL/path: 어떤 대상이 필요한지 나타내는 경로
- Header: 요청에 대한 부가 정보
- Body: 필요할 때 보내는 본문 데이터

### Response

Response는 서버가 요청에 대해 보내는 응답입니다.

예:

```text
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

<html>...</html>
```

응답에는 요청 처리 결과를 알려주는 Status Code, Body의 형식을 알려주는 Header, 실제 데이터가 담긴 Body가 포함될 수 있습니다.

웹은 이 요청과 응답을 매우 빠르게 반복하는 시스템입니다.

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

### Header와 Body

HTTP 메시지는 크게 Header와 Body로 나눌 수 있습니다.

```text
HTTP Message

├── Header
└── Body
```

Header는 Body에 담긴 데이터와 통신 조건을 설명합니다.

예:

- 어떤 형식의 데이터인가?
- 문자 인코딩은 무엇인가?
- 얼마나 큰가?
- 캐시해도 되는가?
- 압축되어 있는가?

Body는 실제로 전달할 내용입니다.

예:

- HTML
- CSS
- JavaScript
- JSON
- 이미지
- 음원
- 동영상
- PDF

모든 HTTP 메시지가 반드시 Body를 가지는 것은 아닙니다.

### HTTP는 실제로 무엇을 운반할까?

가장 중요한 관점은 다음과 같습니다.

> HTTP는 본질적으로 바이트의 묶음을 전달합니다.

텍스트도 네트워크를 통과할 때는 바이트로 변환됩니다.

```text
"안녕하세요"
    ↓
UTF-8 인코딩
    ↓
바이트
    ↓
HTTP로 전송
```

이미지, 동영상, PDF도 마찬가지로 바이트의 묶음입니다.

```text
HTTP가 전달하는 것
        ↓
      바이트
        ↓
Header의 설명에 따라 해석
```

텍스트와 이미지는 전송 단계에서 완전히 다른 물질이 아닙니다.

둘 다 바이트이며, 수신 측이 그 바이트를 어떻게 해석하느냐가 다릅니다.

### Content-Type과 MIME Type

서버는 `Content-Type` Header를 통해 Body의 데이터 형식을 알려줍니다.

| 데이터 종류 | Content-Type 예 |
| --- | --- |
| HTML | `text/html; charset=utf-8` |
| CSS | `text/css` |
| JavaScript | `text/javascript` 또는 `application/javascript` |
| JSON | `application/json` |
| PNG 이미지 | `image/png` |
| JPEG 이미지 | `image/jpeg` |
| PDF | `application/pdf` |
| 일반 바이너리 | `application/octet-stream` |

JSON 응답의 예:

```text
HTTP/1.1 200 OK
Content-Type: application/json

{"name":"Gamja"}
```

PNG 이미지 응답의 예:

```text
HTTP/1.1 200 OK
Content-Type: image/png

[PNG 바이너리 데이터]
```

브라우저는 Header를 읽고 Body를 HTML, JSON, 이미지 또는 다른 데이터로 해석합니다.

### JSON

JSON은 다음의 약자입니다.

```text
JavaScript Object Notation
```

JavaScript 객체 표기법에서 출발했지만, 지금은 특정 언어에 종속되지 않는 표준 데이터 교환 형식으로 사용됩니다.

예:

```json
{
  "name": "Gamja",
  "age": 5,
  "isHappy": true
}
```

JSON이 표현할 수 있는 기본 값은 다음과 같습니다.

- 문자열
- 숫자
- 참과 거짓
- `null`
- 배열
- 객체

Python, Java, C#, Go 등 거의 모든 주요 언어가 JSON을 읽고 쓸 수 있습니다.

JSON은 텍스트 형식이지만 ASCII로만 제한되지는 않습니다. 한글, 일본어, 이모지 같은 유니코드 문자를 사용할 수 있습니다.

```json
{
  "message": "안녕하세요",
  "emoji": "🐶"
}
```

웹에서는 일반적으로 UTF-8로 인코딩하여 전송합니다.

```text
JSON 문자
   ↓
UTF-8 인코딩
   ↓
바이트
   ↓
HTTP Body
```

### JSON에 이미지를 넣을 수 있을까?

JSON은 바이너리 데이터를 직접 표현하지 못합니다.

이미지 파일을 그대로 JSON 값으로 넣을 수는 없습니다.

대신 대표적으로 다음 두 방법을 사용합니다.

#### 방법 1. 이미지 주소 전달

가장 일반적인 방법입니다.

```json
{
  "name": "Gamja",
  "imageUrl": "/assets/characters/gamja.png"
}
```

브라우저는 JSON을 받은 뒤 `imageUrl` 주소로 별도의 HTTP 요청을 보냅니다.

#### 방법 2. Base64 문자열로 변환

바이너리를 텍스트 문자열로 변환하여 JSON에 넣을 수도 있습니다.

```json
{
  "filename": "gamja.png",
  "image": "iVBORw0KGgoAAAANSUhEUgAA..."
}
```

하지만 다음과 같은 단점이 있습니다.

- 원본보다 데이터 크기가 커진다.
- JSON이 지나치게 길어진다.
- 인코딩과 디코딩 과정이 필요하다.
- 큰 이미지와 동영상에는 비효율적이다.

따라서 작은 데이터나 특별한 상황이 아니라면 이미지 주소를 전달하는 방식이 일반적입니다.

### Status Code

서버는 Status Code를 통해 요청 처리 결과를 알려줍니다.

대표적인 예:

- `200 OK`: 요청 성공
- `201 Created`: 새로운 데이터 생성 성공
- `301 Moved Permanently`: 주소가 영구적으로 변경됨
- `400 Bad Request`: 요청 형식이 잘못됨
- `401 Unauthorized`: 인증이 필요함
- `403 Forbidden`: 접근 권한이 없음
- `404 Not Found`: 요청한 대상을 찾을 수 없음
- `500 Internal Server Error`: 서버 내부 오류

Status Code는 사람이 아니라 프로그램도 결과를 빠르게 판단할 수 있도록 만든 약속입니다.

### HTTP는 상태를 기억하지 않는다

HTTP는 기본적으로 Stateless한 프로토콜입니다.

즉, 각각의 요청은 독립적이며 서버는 기본적으로 이전 요청을 자동으로 기억하지 않습니다.

```text
첫 번째 요청
"저는 김기욱입니다."

두 번째 요청
"제 정보를 보여 주세요."

서버
"누구신가요?"
```

로그인 상태를 유지하기 위해 Cookie, Session, Token 같은 기술이 추가로 사용됩니다.

이 내용은 이후 별도의 문서에서 다시 다룹니다.

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

### HTML과 이미지는 한꺼번에 오는가?

보통은 각각 별도의 HTTP 요청과 응답으로 전달됩니다.

브라우저가 먼저 HTML을 요청합니다.

```text
GET /index.html
```

HTML을 읽다가 다음 코드를 발견합니다.

```html
<img src="/images/gamja.png">
```

그러면 브라우저는 이미지 파일을 다시 요청합니다.

```text
GET /images/gamja.png
```

CSS와 JavaScript도 같은 방식입니다.

```html
<link rel="stylesheet" href="/styles.css">
<script src="/app.js"></script>
```

웹페이지 하나를 열어도 실제로는 여러 요청이 발생합니다.

```text
브라우저
   ├── index.html 요청
   ├── styles.css 요청
   ├── app.js 요청
   ├── gamja.png 요청
   └── sound.mp3 요청
```

개발자 도구의 Network 탭에서는 이 요청들을 직접 확인할 수 있습니다.

### 텍스트와 이미지를 한 요청에 같이 보낼 수도 있을까?

가능합니다.

파일 업로드에서는 주로 `multipart/form-data`를 사용합니다.

예를 들어 프로필 이름과 이미지를 함께 보내는 경우입니다.

```text
Content-Type: multipart/form-data
```

Body는 여러 부분으로 나뉩니다.

```text
Part 1
name = "Gamja"

Part 2
profile-image = [PNG 바이너리]
```

각 부분은 Boundary라는 경계 표시로 구분됩니다.

즉, 하나의 HTTP Body 안에 텍스트와 바이너리를 함께 담되, 여러 구역으로 나누어 전달하는 방식입니다.

### GitHub Pages와 HTTP 요청

GitHub Pages는 정적 파일을 배포하는 방식입니다.

사용자가 GitHub Pages 주소에 들어가면 브라우저는 서버에 `index.html`을 요청합니다. 그 HTML 안에 `style.css`, `app.js`, 이미지 파일이 연결되어 있으면 브라우저는 필요한 파일을 다시 HTTP로 요청합니다.

GitHub Pages가 직접 복잡한 서버 로직을 실행하지 않더라도, 브라우저가 파일을 받아오는 과정 자체는 HTTP Request와 Response로 이루어집니다.

### 잠깐 더 알아보기

HTTP/1.1의 Header는 사람이 읽을 수 있는 텍스트 형태에 가깝습니다.

하지만 최신 HTTP/2와 HTTP/3는 전송 효율을 높이기 위해 내부 표현과 전송 방식이 더 복잡해졌습니다.

그럼에도 개발자가 이해해야 할 핵심 개념은 같습니다.

```text
Request
   ↓
Header + Body
   ↓
Response
   ↓
Header + Body
```

## 5. 자주 하는 오해

### HTTP는 텍스트만 전달한다

아닙니다. HTTP Body에는 이미지, 동영상, PDF 같은 바이너리 데이터도 담을 수 있습니다.

### HTTP는 HTML만 가져오는 규칙이다

아닙니다. HTTP는 HTML뿐 아니라 CSS, JavaScript, 이미지, JSON 데이터 등 여러 종류의 리소스를 주고받을 수 있습니다.

### URL과 HTTP는 같은 것이다

아닙니다. URL은 “어디에 있는 무엇인지”를 가리키는 주소에 가깝고, HTTP는 그 주소의 리소스를 요청하고 응답받는 방식입니다.

### HTML 안에 이미지가 들어 있다

대부분의 경우 HTML에는 이미지 주소만 있으며, 이미지는 별도의 HTTP 요청으로 받습니다.

### JSON은 JavaScript에서만 사용한다

아닙니다. JSON은 거의 모든 프로그래밍 언어에서 사용하는 독립적인 데이터 교환 형식입니다.

### JSON에 이미지를 그대로 넣을 수 있다

직접 넣을 수는 없습니다. Base64 문자열로 변환하거나 이미지 URL을 전달해야 합니다.

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

브라우저는 GitHub Pages에서 다음 파일을 HTTP로 각각 받아옵니다.

- HTML
- CSS
- JavaScript
- 캐릭터 이미지
- 사운드

사용자 입장에서는 “게임 페이지를 열었다”이지만, 브라우저 입장에서는 여러 정적 파일 요청을 보내고 응답을 받아 화면을 만든 것입니다.

### Living Aegis Origin

게임에서 사용하는 이미지와 음원도 HTTP 요청으로 불러옵니다.

게임 화면이 Canvas에서 그려지더라도, 필요한 자산은 먼저 네트워크로 받아야 합니다.

파일 경로가 틀리면 서버는 404를 돌려줄 수 있고, 그러면 게임 화면에서 이미지나 사운드가 빠져 보일 수 있습니다.

### 공공데이터 기반 서비스

브라우저 또는 Serverless Proxy가 공공데이터 OpenAPI에 HTTP 요청을 보냅니다.

서버는 일반적으로 JSON이나 XML을 응답합니다.

이미지가 필요하면 JSON 안에는 이미지 자체보다 URL이 들어가는 경우가 많습니다.

이때 REST API의 설계 방식은 WEB-008에서, 다른 출처의 API 요청이 왜 제한될 수 있는지는 WEB-009 CORS에서 다룹니다.

## 7. 실습 과제

1. GitHub Pages 프로젝트 하나를 열고 개발자 도구의 Network 탭에서 `index.html`, CSS, JavaScript, 이미지 요청을 찾아봅니다.
2. 각 요청을 보고 Method, Status Code, Content-Type Header를 확인합니다.
3. 브라우저가 PNG 파일을 받았다는 사실을 어떻게 알 수 있는지 설명해 봅니다.
4. 웹페이지 하나를 열었는데 Network 탭에 요청이 수십 개 나타나는 이유를 적어봅니다.
5. HTML 파일 요청과 API JSON 요청의 차이를 “응답 Body에 무엇이 들어오는가?” 기준으로 비교해 봅니다.
6. 공공데이터 API의 JSON 안에 이미지 대신 URL을 넣는 이유를 설명해 봅니다.
7. 모든 데이터를 Base64로 JSON에 넣으면 어떤 문제가 생길지 생각해 봅니다.
8. HTTP가 모든 요청을 자동으로 기억한다면 어떤 장점과 문제가 생길지 적어봅니다.

## 8. 다음 문서와의 연결

**WEB-008. REST API는 왜 만들어졌는가?**

HTTP로 대화할 수 있게 된 뒤, 개발자들은 다음 문제를 만나게 됩니다.

```text
대화는 가능하지만,
서비스마다 요청 방식이 너무 다르다.
```

다음 문서에서는 HTTP를 더 일관되고 이해하기 쉽게 사용하는 REST API의 설계 배경을 살펴봅니다.

WEB-009에서는 브라우저가 다른 출처의 API 요청을 왜 제한하고, CORS가 어떤 기준으로 요청을 허용하는지 다룹니다.

인증, 쿠키, 세션, 캐시, HTTPS, HTTP/2, HTTP/3는 이번 문서에서 깊게 다루지 않고 이후 필요할 때 Reference 또는 별도 Guide로 나눕니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-11 | WEB-007 초기 Learning Guide 작성 | 개발자 도구 Network 탭에서 Request Header, Response Header, Response Body를 어떻게 구분해서 읽을 수 있는가? |
| 2026-07-11 | HTTP가 바이트를 전달한다는 관점, Content-Type, JSON, 이미지 URL/Base64, multipart/form-data 설명을 반영한 개정판으로 교체 | MIME Type과 Content-Type은 실무에서 어떻게 구분해 사용되는가? |
