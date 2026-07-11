---
title: WEB-008. Why REST API
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-008-Why-REST-API.md
copy_type: source
last_reviewed: 2026-07-11
print_friendly: true
---

# WEB-008. REST API는 왜 만들어졌는가?

## 부제: HTTP만으로는 부족했던 이유

> HTTP는 컴퓨터가 대화하는 규칙입니다. REST는 그 대화를 더 이해하기 쉽고 일관되게 설계하기 위한 방식입니다.

핵심 질문은 이것입니다.

> 웹페이지는 왜 단순 파일 요청을 넘어서 API를 필요로 하는가?

## 1. 학습 목표

이 문서를 읽고 나면 다음 질문에 답할 수 있어야 합니다.

- API가 무엇인지 설명합니다.
- REST API를 HTTP 위에서 resource를 다루는 설계 방식으로 이해합니다.
- 정적 파일 요청과 API 요청의 차이를 구분합니다.
- Resource, Endpoint, Method, JSON, Stateless의 기본 의미를 설명합니다.
- JavaScript가 API 응답을 받아 DOM을 업데이트하는 흐름을 이해합니다.
- GitHub Pages는 API 서버가 아니지만 외부 API를 호출할 수 있다는 점을 구분합니다.
- CORS, 인증, 토큰, 쿠키, 세션, API 보안은 이후 문서에서 다룰 주제임을 이해합니다.

## 2. 왜 REST API가 필요한가

HTTP만으로도 브라우저와 서버는 요청과 응답을 주고받을 수 있습니다.

하지만 HTTP는 “대화 방법”을 알려줄 뿐, 서비스마다 어떤 URL 이름을 쓰고 어떤 방식으로 데이터를 다룰지까지 통일해 주지는 않습니다.

예를 들어 학생 정보를 조회하는 기능을 만든다고 생각해 봅니다.

```text
/getStudent
/student
/getUser
/findMember
```

모두 동작할 수 있지만, 서비스마다 방식이 달라지면 개발자는 매번 새 규칙을 외워야 합니다.

개발자들은 이런 질문을 하게 됩니다.

> 규칙을 조금 더 통일하면 좋지 않을까?

REST는 이런 고민에서 출발했습니다.

REST API는 HTTP의 URL, Method, Status Code 등을 사용해 클라이언트와 서버가 resource를 요청하고 응답하는 방식을 더 일관되게 설계하려는 접근입니다.

## 3. 핵심 개념

### API

API(Application Programming Interface)는 프로그램끼리 정해진 방식으로 요청하고 응답하기 위한 약속입니다.

사람에게는 메뉴판과 비슷합니다.

```text
손님
   │
메뉴판(API)
   │
주방(서버)
```

브라우저의 JavaScript도 서버의 API를 통해 데이터를 요청할 수 있습니다.

### REST API

REST API는 HTTP의 URL, Method, Status Code 등을 사용해 resource를 다루는 API 설계 방식입니다.

REST는 특정 서버 프레임워크나 라이브러리 이름이 아닙니다. “자원을 중심으로 API를 설계하자”는 철학에 가깝습니다.

### Resource

Resource는 API가 다루는 대상 또는 정보 단위입니다.

예를 들어 책, 사용자, 점수, 메시지, 공공데이터 검색 결과가 resource가 될 수 있습니다.

```text
books
users
scores
messages
weather-observations
```

REST에서는 URL이 가능하면 “무엇을 다루는가”를 표현합니다.

### Endpoint

Endpoint는 특정 resource에 접근하기 위한 URL 경로입니다.

예를 들어 `books`라는 resource를 다룬다면 다음 경로가 endpoint가 될 수 있습니다.

```text
/api/books
/api/books/1
```

`/api/books`는 책 목록 또는 새 책 생성을 다루고, `/api/books/1`은 id가 `1`인 책 한 권을 다룬다고 설계할 수 있습니다.

### Method

Method는 resource에 대해 어떤 행동을 할지 나타내는 HTTP 동사입니다.

| Method | REST API에서 자주 쓰는 의미 | 예시 |
| --- | --- | --- |
| GET | 조회 | `GET /api/books` |
| POST | 생성 또는 처리 요청 | `POST /api/books` |
| PUT | 전체 수정 | `PUT /api/books/1` |
| PATCH | 일부 수정 | `PATCH /api/books/1` |
| DELETE | 삭제 | `DELETE /api/books/1` |

REST에서는 가능하면 URL에는 resource를 두고, 동작은 Method로 표현합니다.

좋은 예:

```text
GET    /users/3
DELETE /users/3
```

아쉬운 예:

```text
/getUser
/deleteUser
/updateUser
```

동작은 이미 HTTP Method가 알려주기 때문입니다.

### JSON

JSON은 서버가 데이터를 주고받을 때 자주 사용하는 텍스트 기반 데이터 형식입니다.

REST API가 반드시 JSON만 사용하는 것은 아닙니다. XML이나 다른 형식도 사용할 수 있습니다. 다만 오늘날 많은 웹 API는 JavaScript와 다루기 쉬운 JSON을 응답 형식으로 사용합니다.

```json
{
  "id": 10,
  "name": "Gamja"
}
```

### Stateless

Stateless는 서버가 이전 요청의 상태를 자동으로 기억한다고 가정하지 않고, 각 요청이 필요한 정보를 담아 독립적으로 처리되는 방식입니다.

HTTP 자체도 기본적으로 Stateless합니다. REST API도 이 흐름과 잘 맞습니다.

로그인, 권한, 사용자 식별이 필요한 서비스에서는 토큰, 쿠키, 세션 같은 추가 기술을 사용합니다. 이 문서에서는 깊게 다루지 않고 이후 문서 또는 Reference에서 나눠 봅니다.

### 정적 파일 요청과 API 요청

정적 파일 요청은 HTML, CSS, JavaScript, 이미지 같은 파일을 달라는 요청입니다.

API 요청은 화면에 표시하거나 처리할 데이터를 달라는 요청입니다.

예를 들어 GitHub Pages에서 `index.html`을 받는 것은 정적 파일 요청입니다. 반면 검색어에 맞는 공공데이터 목록을 받는 것은 API 요청입니다.

둘 다 HTTP Request와 Response를 사용하지만, 목적과 응답 Body의 성격이 다릅니다.

## 4. 실제 동작 과정

웹페이지가 API를 사용하는 흐름은 대략 다음과 같습니다.

1. 사용자가 웹페이지에서 버튼을 누르거나 검색어를 입력한다.
2. JavaScript가 필요한 데이터를 얻기 위해 API 요청을 준비한다.
3. 요청 대상은 특정 resource를 가리키는 URL 또는 endpoint다.
4. 요청의 목적에 따라 HTTP Method를 선택한다.
   - 조회: GET
   - 생성: POST
   - 전체 수정: PUT
   - 일부 수정: PATCH
   - 삭제: DELETE
5. 서버는 요청된 resource와 method를 보고 처리할 일을 결정한다.
6. 서버는 결과를 JSON 같은 데이터 형식으로 응답한다.
7. 브라우저의 JavaScript는 응답 데이터를 해석한다.
8. JavaScript는 DOM을 업데이트해 화면에 결과를 보여준다.

간단한 요청 예시는 이렇게 볼 수 있습니다.

```text
GET /api/books HTTP/1.1
Host: example.com
Accept: application/json
```

이 요청은 `example.com` 서버의 `/api/books` endpoint에 책 목록을 JSON으로 달라고 요청하는 것입니다.

응답 Body는 이런 JSON일 수 있습니다.

```json
[
  {
    "id": 1,
    "title": "Web Foundation"
  }
]
```

여기서 `/api/books`는 `books`라는 resource에 접근하기 위한 endpoint입니다. `GET`은 해당 resource 목록을 조회하겠다는 의미입니다. 서버는 JSON 형식으로 데이터를 응답할 수 있고, JavaScript는 이 JSON을 읽어 화면에 목록을 만들 수 있습니다.

## 5. 자주 하는 오해

### REST API는 HTTP와 완전히 다른 기술이다

아닙니다. REST API는 보통 HTTP의 URL, Method, Status Code, Header, Body를 활용해 resource를 다루는 방식입니다.

### API는 무조건 JSON만 사용한다

아닙니다. JSON이 많이 쓰이지만 API는 XML, CSV, plain text, binary 같은 다른 형식도 사용할 수 있습니다.

### URL이 있으면 모두 REST API다

아닙니다. URL이 있다고 해서 모두 REST API는 아닙니다. REST API에서는 URL이 resource를 표현하고, Method가 행동을 표현하도록 설계하는 경향이 있습니다.

### GET은 데이터를 가져오기만 하므로 서버에 아무 영향도 줄 수 없다

보통 GET은 조회에 사용하고 서버 상태를 바꾸지 않는 것이 기대됩니다. 하지만 실제 서버 구현이 잘못되어 있으면 GET 요청이 영향을 줄 수도 있습니다. 그래서 설계 의도와 실제 구현을 함께 봐야 합니다.

### POST는 항상 데이터베이스에 저장하는 요청이다

아닙니다. POST는 생성 요청에 자주 쓰이지만, 검색 처리, 계산 요청, 외부 작업 실행처럼 “처리 요청”에 사용될 수도 있습니다.

### REST API를 쓰려면 반드시 복잡한 백엔드 프레임워크가 필요하다

아닙니다. 프레임워크는 API 구현을 도와주는 도구일 뿐입니다. REST API의 핵심은 resource, endpoint, method, response 형식을 일관되게 설계하는 생각입니다.

### GitHub Pages는 API를 만들 수 없지만 API를 호출할 수는 있다

맞습니다. GitHub Pages는 정적 파일을 제공하는 데 적합하고, 자체적으로 백엔드 API 서버가 되는 것은 아닙니다. 하지만 GitHub Pages에서 실행되는 JavaScript는 외부 API를 호출할 수 있습니다.

## 6. 프로젝트 적용 예시

### Potato's Day

Potato's Day는 현재 GitHub Pages에서 정적 파일 중심으로 동작합니다.

나중에 저장된 기록, 사용자 설정, 외부 데이터, 메시지 목록 같은 기능이 필요해지면 JavaScript가 REST API를 호출할 수 있습니다.

예:

```text
GET /api/messages
POST /api/scores
```

이 경우 GitHub Pages는 화면 파일을 제공하고, 실제 API는 별도 서버나 외부 서비스가 담당하는 구조가 될 수 있습니다.

### Living Aegis Origin

Living Aegis Origin에 랭킹, 설정 저장, 시뮬레이션 데이터 조회 같은 기능이 생긴다면 클라이언트가 서버 API에 요청하는 구조를 사용할 수 있습니다.

예:

```text
POST /scores
GET  /scores
GET  /simulations/latest
```

게임 화면이 Canvas에서 그려지더라도, 랭킹이나 저장 데이터는 API 응답으로 받아 JavaScript가 게임 상태나 UI에 반영할 수 있습니다.

### 공공데이터 기반 서비스

공공데이터 기반 서비스에서는 사용자가 검색 조건을 입력하면 JavaScript 또는 서버가 공공데이터 API endpoint에 요청을 보냅니다.

공공데이터 OpenAPI는 보통 `GET` 요청으로 JSON이나 XML을 반환합니다.

JavaScript는 응답 데이터를 읽고, 필요한 항목을 DOM에 추가해 화면에 표시합니다. 다만 브라우저에서 다른 출처의 API를 직접 호출할 때는 CORS 제한을 만날 수 있으며, 이 내용은 WEB-009에서 다룹니다.

## 7. 실습 과제

1. 공공데이터 API 문서 하나를 열고 endpoint, Method, 응답 형식을 찾아봅니다.
2. `/api/books`, `/api/books/1`, `/api/books/1/reviews`가 각각 어떤 resource를 가리키는지 설명해 봅니다.
3. 조회, 생성, 전체 수정, 일부 수정, 삭제에 각각 어떤 Method를 쓰면 좋을지 적어봅니다.
4. 같은 기능을 `/getBook`, `/deleteBook`처럼 설계했을 때와 `GET /books/1`, `DELETE /books/1`처럼 설계했을 때의 차이를 비교해 봅니다.
5. GitHub Pages에서 실행되는 JavaScript가 외부 API를 호출할 수는 있지만, GitHub Pages 자체가 백엔드 API 서버가 아닌 이유를 설명해 봅니다.
6. API 응답 JSON을 화면 카드 목록으로 바꾸려면 JavaScript가 어떤 일을 해야 하는지 순서대로 말해 봅니다.

## 8. 다음 문서와의 연결

WEB-009에서는 브라우저가 다른 출처의 API 요청을 왜 제한하고, CORS가 어떤 기준으로 요청을 허용하는지 살펴봅니다.

REST API를 이해하면 “어떤 endpoint에 어떤 Method로 요청할지”를 생각할 수 있습니다. 하지만 브라우저에서 실제 외부 API를 호출할 때는 출처(origin), CORS Header, 프리플라이트 요청 같은 브라우저 보안 규칙을 만나게 됩니다.

인증, 토큰, 쿠키, 세션, API 보안은 이번 문서에서 깊게 다루지 않고 이후 필요할 때 Reference 또는 별도 Guide로 나눕니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-11 | WEB-008 초기 Learning Guide 작성 | 브라우저에서 외부 API를 호출할 때 왜 같은 요청이 서버에서는 되는데 브라우저에서는 CORS로 막힐 수 있는가? |
