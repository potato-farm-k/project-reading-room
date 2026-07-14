---
title: WEB-008. Why REST API
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-008-Why-REST-API.md
copy_type: source
last_reviewed: 2026-07-14
print_friendly: true
---

# WEB-008. REST API는 왜 만들어졌는가?

## 부제: HTTP로 대화할 수 있게 된 뒤, 왜 다시 설계 원칙이 필요했을까?

> HTTP는 컴퓨터끼리 대화하는 규칙입니다.
> REST는 그 대화를 자원 중심으로 더 일관되고 이해하기 쉽게 설계하려는 방식입니다.

---

## 1. 학습 목표

이 문서를 읽고 나면 다음 질문에 답할 수 있어야 합니다.

- API는 무엇인가?
- HTTP와 REST는 어떻게 다른가?
- REST는 왜 자원(Resource)을 중심으로 생각하는가?
- URL, Path, Path Variable, Query Parameter는 어떻게 구분하는가?
- REST 스타일과 RPC 스타일은 어떻게 다른가?
- REST API 서버는 Servlet·JSP 방식의 서버와 무엇이 달라졌는가?
- JSON 직렬화는 왜 필요한가?
- REST에서 말하는 Representation은 화면 표현과 어떻게 다른가?
- 서버 내부 객체와 외부 응답 DTO를 왜 분리하는가?

---

## 2. 먼저 API란 무엇일까?

API는 다음의 약자입니다.

```text
Application Programming Interface
```

프로그램이 다른 프로그램에게 기능이나 데이터를 요청하기 위한 창구입니다.

사람에게 메뉴판이 있다면, 프로그램에는 API가 있다고 생각할 수 있습니다.

```text
사용자
   │
   │ 메뉴 선택
   ▼
메뉴판
   │
   ▼
주방
```

프로그램에서는 다음과 같습니다.

```text
클라이언트 프로그램
   │
   │ API 요청
   ▼
서버 프로그램
```

API는 반드시 웹에서만 사용하는 것은 아닙니다.

하지만 웹 API에서는 주로 HTTP를 사용하여 요청과 응답을 주고받습니다.

---

## 3. HTTP만으로도 통신할 수 있는데 왜 REST가 필요했을까?

HTTP는 다음을 정의합니다.

- 요청과 응답
- Method
- Header
- Body
- Status Code

하지만 API 주소를 어떤 방식으로 설계해야 하는지까지 모두 정해 주지는 않습니다.

예를 들어 사용자 한 명을 조회하는 기능을 다음처럼 만들 수 있습니다.

```text
/getUser
/findMember
/loadUser
/userInfo
/users/3
```

모두 동작할 수 있습니다.

하지만 프로젝트마다 이름과 규칙이 다르면 다음 문제가 생깁니다.

- URL만 보고 의미를 추측하기 어렵다.
- 팀마다 다른 규칙을 사용한다.
- 기능이 많아질수록 주소가 복잡해진다.
- 클라이언트가 서버의 개별 명령 이름에 강하게 의존한다.
- API 문서를 매번 새로 익혀야 한다.

개발자들은 다음과 같은 공통 방향을 고민하게 됩니다.

> 기능 이름을 제각각 만드는 대신,
> 웹의 기본 구조와 HTTP의 의미를 더 일관되게 활용할 수 없을까?

REST는 이러한 문제의식에서 출발한 아키텍처 스타일입니다.

---

## 4. REST는 기술 이름인가?

REST는 다음의 약자입니다.

```text
Representational State Transfer
```

REST는 특정 프로그래밍 언어나 프레임워크가 아닙니다.

```text
REST
아키텍처 스타일 또는 설계 원칙

Servlet
Java에서 HTTP 요청과 응답을 처리하는 기술

JSP
서버에서 HTML을 생성하는 View 기술

Spring
Java 애플리케이션 프레임워크
```

따라서 Servlet으로 REST API를 만들 수도 있고, Spring으로 REST API를 만들 수도 있습니다.

REST가 Servlet을 대체한 것은 아닙니다.

> REST는 서버를 어떤 기술로 구현하느냐보다,
> HTTP API를 어떤 관점과 규칙으로 설계하느냐에 관한 개념입니다.

---

## 5. REST의 핵심: 자원(Resource)을 중심으로 생각하기

REST에서는 서버가 제공하는 대상을 **자원(Resource)** 으로 바라봅니다.

예:

```text
책
사용자
주문
게시글
댓글
점수
```

책이라는 자원들의 집합을 다음처럼 표현할 수 있습니다.

```text
/books
```

특정 책 한 권은 다음처럼 표현합니다.

```text
/books/10
```

여기서 핵심은 URL이 동작보다 **무엇을 다루는가**를 나타내는 것입니다.

```text
/books
책이라는 자원 집합

/books/10
10번 책이라는 특정 자원
```

---

## 6. URL 전체와 Path를 구분하기

다음 주소를 살펴보겠습니다.

```text
https://api.example.com/books/10?sort=title&page=2
```

구성 요소를 나누면 다음과 같습니다.

```text
https://api.example.com/books/10?sort=title&page=2

https                    → Scheme
api.example.com          → Host
/books/10                → Path
          └── 10         → Path Variable
?sort=title&page=2       → Query String
sort=title, page=2       → Query Parameters
```

전체는 URL입니다.

그중 다음 부분은 Path입니다.

```text
/books/10
```

따라서 `/books/10`은 단순히 숫자 값을 붙인 표현이 아니라, 자원의 위치를 나타내는 경로입니다.

---

## 7. `/books/10`의 `10`은 무엇인가?

`10`은 일반적으로 다음 용어로 부릅니다.

```text
Path Variable
Path Parameter
```

프레임워크나 문서에 따라 둘 다 사용됩니다.

개념적으로는 다음과 같습니다.

```text
/books/{bookId}
```

실제 요청:

```text
/books/10
```

여기서:

```text
bookId = 10
```

`10`은 값이 맞습니다.

하지만 Query Parameter처럼 Path 뒤에 붙는 옵션 값이 아니라, **특정 자원을 가리키는 Path의 일부**입니다.

```text
/books
책들의 집합

/books/10
그 집합 안의 10번 책
```

파일 경로와 비슷하게 생각할 수도 있습니다.

```text
/books/10
books 아래의 10번 자원
```

---

## 8. Path Variable과 Query Parameter

둘은 목적이 다릅니다.

### Path Variable

특정 자원을 식별합니다.

```text
/books/10
/users/3
/orders/152
```

다음 질문에 답합니다.

> 무엇을 다루는가?

### Query Parameter

조회 조건이나 옵션을 추가합니다.

```text
/books?page=2
/books?sort=title
/books?author=Kim
/books?category=history&limit=20
```

다음 질문에 답합니다.

> 어떤 조건과 방식으로 가져오는가?

간단히 정리하면:

```text
Path Variable
대상 식별

Query Parameter
조회 조건·필터·정렬·페이지
```

다만 실제 API에서는 설계 상황에 따라 경계가 달라질 수 있으므로, 이를 절대적인 법칙이라기보다 일반적인 설계 기준으로 이해하면 됩니다.

---

## 9. HTTP Method는 동작을 표현한다

REST 스타일에서는 URL이 자원을 표현하고, HTTP Method가 동작을 표현합니다.

| Method | 일반적인 의미 |
|---|---|
| GET | 조회 |
| POST | 생성 |
| PUT | 전체 교체 또는 전체 수정 |
| PATCH | 일부 수정 |
| DELETE | 삭제 |

책 자원을 예로 들면:

```text
GET    /books
GET    /books/10
POST   /books
PUT    /books/10
PATCH  /books/10
DELETE /books/10
```

같은 Path라도 Method가 다르면 의미가 달라집니다.

```text
GET /books/10
10번 책 조회

PATCH /books/10
10번 책 일부 수정

DELETE /books/10
10번 책 삭제
```

---

## 10. 왜 URL에 동사를 넣지 않을까?

다음 두 방식을 비교해 보겠습니다.

### REST 스타일

```text
GET    /users
GET    /users/3
POST   /users
PATCH  /users/3
DELETE /users/3
```

### RPC 스타일

```text
GET  /getUser?id=3
POST /createUser
POST /updateUser
POST /deleteUser
```

RPC 스타일에서는 Path가 명령이나 동작을 표현합니다.

```text
getUser
createUser
deleteUser
```

REST 스타일에서는 Path가 자원을 표현하고 Method가 동작을 표현합니다.

```text
/users/3
+
GET, PATCH, DELETE
```

중요한 점은 RPC 스타일이 무조건 잘못된 것이 아니라는 점입니다.

RPC는 다음과 같이 이해할 수 있습니다.

> 서버에 특정 작업이나 함수를 실행해 달라고 요청하는 방식

REST는 다음과 같이 이해할 수 있습니다.

> 특정 자원을 HTTP의 공통 의미에 따라 조회·생성·수정·삭제하는 방식

서비스 성격에 따라 RPC, REST, GraphQL, gRPC 등 다른 방식을 사용할 수 있습니다.

---

## 11. REST는 URL만 예쁘게 만드는 규칙이 아니다

REST API 설계는 다음 요소를 함께 고려합니다.

```text
HTTP Method
+
Resource Path
+
Request Header
+
Request Body
+
Status Code
+
Response Header
+
Response Body
```

예를 들어 책 한 권을 조회합니다.

```text
GET /api/books/10
```

성공 응답:

```text
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "id": 10,
  "title": "어린 왕자",
  "author": "생텍쥐페리"
}
```

책이 없을 때:

```text
HTTP/1.1 404 Not Found
Content-Type: application/json
```

```json
{
  "error": "BOOK_NOT_FOUND",
  "message": "해당 책을 찾을 수 없습니다."
}
```

새 책을 생성했을 때:

```text
HTTP/1.1 201 Created
Location: /api/books/11
Content-Type: application/json
```

```json
{
  "id": 11,
  "title": "새로운 책"
}
```

REST 스타일에서는 HTTP가 이미 가진 의미를 적극적으로 사용합니다.

---

## 12. 과거 Servlet·JSP 방식의 전형적인 흐름

전통적인 서버 렌더링 웹 애플리케이션에서는 서버가 완성된 HTML 화면을 만들어 보냈습니다.

```text
브라우저
   │
   │ GET /bookDetail?id=10
   ▼
Servlet 또는 Controller
   │
   │ DB 조회
   ▼
JSP
   │
   │ HTML 생성
   ▼
브라우저
```

서버의 역할:

- 요청 처리
- DB 조회
- 화면에 필요한 데이터 준비
- JSP에 데이터 전달
- 완성된 HTML 생성
- 브라우저에 HTML 응답

응답 예:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>어린 왕자</h1>
    <p>저자: 생텍쥐페리</p>
  </body>
</html>
```

여기에는 다음 두 가지가 함께 포함됩니다.

```text
데이터
"어린 왕자", "생텍쥐페리"

화면 구조
<h1>, <p>, <body>
```

---

## 13. REST API 방식의 흐름

REST API 서버는 일반적으로 완성된 HTML 화면보다 JSON 같은 데이터를 응답합니다.

```text
브라우저 또는 앱
   │
   │ GET /api/books/10
   ▼
REST API 서버
   │
   │ DB 조회
   ▼
JSON 응답
   │
   ▼
브라우저 JavaScript
   │
   │ HTML·DOM 구성
   ▼
사용자 화면
```

응답:

```json
{
  "id": 10,
  "title": "어린 왕자",
  "author": "생텍쥐페리"
}
```

클라이언트 JavaScript가 이 데이터를 화면에 표시합니다.

```javascript
titleElement.textContent = book.title;
authorElement.textContent = book.author;
```

역할을 간단히 비교하면:

```text
기존 서버 렌더링
서버가 데이터 + 완성된 화면을 제공

REST API
서버가 화면 구성에 필요한 데이터를 제공
클라이언트가 실제 화면을 구성
```

---

## 14. Servlet·JSP와 REST는 서로 반대되는 기술인가?

아닙니다.

Servlet은 Java에서 HTTP 요청과 응답을 처리하는 기반 기술입니다.

JSP는 서버에서 HTML을 생성하는 View 기술입니다.

REST는 API 설계 스타일입니다.

Java의 Spring MVC를 사용하더라도 내부적으로는 Servlet 구조 위에서 동작할 수 있습니다.

```text
HTTP Request
   ↓
Servlet Container
   ↓
DispatcherServlet
   ↓
REST Controller
   ↓
JSON Response
```

따라서 정확한 관계는 다음과 같습니다.

```text
Servlet
HTTP 처리 기술

JSP
서버 화면 생성 기술

REST
HTTP API 설계 방식
```

REST가 Servlet을 없앤 것이 아니라, Servlet이나 다른 서버 기술을 사용해 **REST 스타일의 API를 구현할 수 있는 것**입니다.

---

## 15. JSON으로 직렬화한다는 의미

서버 프로그램 안에 책 객체가 있다고 가정하겠습니다.

```text
Book 객체

id       → 10
title    → "어린 왕자"
author   → "생텍쥐페리"
```

이 객체는 Java 프로그램 내부에서만 의미가 있습니다.

브라우저의 JavaScript는 Java의 `Book` 클래스와 메모리 구조를 직접 이해할 수 없습니다.

그래서 다른 프로그램도 읽을 수 있는 JSON 문자열로 바꿉니다.

```json
{
  "id": 10,
  "title": "어린 왕자",
  "author": "생텍쥐페리"
}
```

이 과정을 JSON 직렬화라고 합니다.

```text
프로그램 내부 객체
        ↓ JSON 직렬화
JSON 문자열
```

쉽게 말하면:

> 프로그램 내부의 객체를 외부로 보내거나 저장할 수 있는 데이터 형식으로 포장하는 과정입니다.

---

## 16. 직렬화와 UTF-8 인코딩은 다른 단계다

서버가 객체를 HTTP로 보내기까지는 여러 단계가 있습니다.

```text
Java Book 객체
      ↓ JSON 직렬화
JSON 문자열
      ↓ UTF-8 인코딩
바이트
      ↓ HTTP 전송
```

클라이언트에서는 반대로 처리합니다.

```text
HTTP 바이트
      ↓ UTF-8 디코딩
JSON 문자열
      ↓ JSON 파싱·역직렬화
JavaScript 객체
```

| 단계 | 변환 |
|---|---|
| JSON 직렬화 | 객체 → JSON 문자열 |
| UTF-8 인코딩 | 문자열 → 바이트 |
| UTF-8 디코딩 | 바이트 → 문자열 |
| JSON 파싱·역직렬화 | JSON 문자열 → 객체 |

직렬화에 관한 더 자세한 설명은 `WEB-007. HTTP는 컴퓨터끼리 어떻게 대화하는가?`에서 다룹니다.

---

## 17. REST에서 말하는 Representation은 무엇인가?

REST의 이름에는 `Representation`이라는 단어가 들어 있습니다.

```text
Representational State Transfer
```

한국어로는 흔히 **자원의 표현**이라고 번역합니다.

여기서 표현은 화면 디자인이나 시각적 표현이 아닙니다.

```text
Representation
자원의 상태를 전달하기 위한 데이터 형식

Presentation 또는 View
사용자에게 보여 주는 화면 표현
```

예를 들어 서버가 가진 책 자원이 있다고 하겠습니다.

```text
책 자원

ID: 10
제목: 어린 왕자
저자: 생텍쥐페리
```

이 자원을 JSON 형식으로 표현할 수 있습니다.

```json
{
  "id": 10,
  "title": "어린 왕자",
  "author": "생텍쥐페리"
}
```

XML로도 표현할 수 있습니다.

```xml
<book>
  <id>10</id>
  <title>어린 왕자</title>
  <author>생텍쥐페리</author>
</book>
```

둘은 형식이 다르지만 같은 자원의 상태를 나타냅니다.

```text
책 자원
   ├── JSON Representation
   └── XML Representation
```

따라서 REST에서 말하는 Representation은 다음 뜻에 가깝습니다.

> 자원의 상태를 외부로 전달하기 위해 구성한 데이터 형식

---

## 18. 화면 표현과 자원 표현

| 구분 | 자원의 표현 | 화면 표현 |
|---|---|---|
| 영어 | Representation | Presentation 또는 View |
| 목적 | 자원의 상태 전달 | 사용자에게 시각적으로 표시 |
| 담당 | REST API 서버 | 브라우저와 JavaScript |
| 예 | JSON, XML | HTML, CSS, 화면 컴포넌트 |
| 핵심 질문 | 어떤 데이터를 보낼까? | 어떻게 보여 줄까? |

예를 들어 서버가 다음 날씨 데이터를 보냅니다.

```json
{
  "temperature": 28,
  "condition": "sunny"
}
```

클라이언트는 같은 데이터를 서로 다르게 보여 줄 수 있습니다.

```text
웹사이트
28°C, 맑음

모바일 앱
해 아이콘 + 28°

음성 서비스
"현재 기온은 28도이며 맑습니다."

게임
맑은 하늘 배경 적용
```

서버가 보낸 데이터 표현은 같아도, 화면 표현은 클라이언트마다 달라집니다.

---

## 19. 서버는 내부 데이터를 그대로 보내는가?

보통은 그렇지 않습니다.

서버 내부에는 다음과 같은 데이터가 있을 수 있습니다.

```text
Book Entity
├── id
├── title
├── author
├── internalMemo
├── deleted
├── createdBy
└── updatedAt
```

클라이언트에 필요한 정보는 일부일 수 있습니다.

```json
{
  "id": 10,
  "title": "어린 왕자",
  "author": "생텍쥐페리"
}
```

서버는 내부 데이터에서 필요한 값만 선택하고 가공하여 외부에 제공할 Representation을 만듭니다.

```text
서버 내부 데이터
      ↓ 선택·가공
Response DTO
      ↓ JSON 직렬화
JSON 응답
```

Representation은 DB 데이터를 그대로 복사한 것이 아니라, **외부에 공개하기 위해 설계한 데이터 모습**입니다.

---

## 20. DTO는 왜 사용할까?

DTO는 다음의 약자입니다.

```text
Data Transfer Object
```

프로그램 계층이나 네트워크 사이에서 데이터를 전달하기 위한 객체입니다.

응답 전용 DTO의 예:

```text
BookResponse

id
title
author
```

내부 Entity를 그대로 응답하면 다음 문제가 생길 수 있습니다.

- 비밀번호나 내부 관리 정보 노출
- DB 구조가 API에 그대로 드러남
- 불필요한 데이터 전송
- 내부 구조 변경이 곧 API 변경으로 이어짐
- 객체 관계로 인한 직렬화 문제
- 클라이언트가 서버 내부 구현에 강하게 의존

따라서 흔히 다음과 같이 분리합니다.

```text
Database Entity
      ↓
Domain 또는 Service 처리
      ↓
Response DTO
      ↓
JSON
```

---

## 21. HTTP Status Code를 응답 설계에 활용하기

과거 일부 시스템에서는 오류가 발생해도 HTTP 상태를 항상 `200 OK`로 보내고 Body 안에서 성공과 실패를 구분하기도 했습니다.

```text
HTTP/1.1 200 OK
```

```json
{
  "result": "fail",
  "message": "책이 없습니다."
}
```

이 방식도 동작은 합니다.

하지만 REST 스타일에서는 HTTP Status Code의 의미를 함께 활용하는 편이 자연스럽습니다.

```text
200 OK
조회 성공

201 Created
생성 성공

400 Bad Request
요청 형식 오류

401 Unauthorized
인증 필요

403 Forbidden
권한 없음

404 Not Found
자원 없음

500 Internal Server Error
서버 내부 오류
```

책이 없다면:

```text
HTTP/1.1 404 Not Found
Content-Type: application/json
```

```json
{
  "error": "BOOK_NOT_FOUND",
  "message": "해당 책을 찾을 수 없습니다."
}
```

Status Code는 큰 범주의 결과를 표현하고, JSON Body는 구체적인 오류 정보와 설명을 제공합니다.

---

## 22. Stateless는 서버 설계에 어떤 영향을 줄까?

REST의 중요한 원칙 중 하나는 Stateless입니다.

각 요청은 서버가 처리하는 데 필요한 정보를 스스로 포함해야 합니다.

```text
GET /api/books?page=2&sort=title
Authorization: Bearer ...
```

서버가 이전 화면에서 어떤 버튼을 눌렀는지 기억해야만 현재 요청을 해석할 수 있는 구조는 피하려고 합니다.

전통적인 서버 렌더링 웹에서는 Session에 화면 진행 상태를 많이 저장하기도 했습니다.

```text
현재 단계
이전 검색 조건
임시 입력값
선택한 메뉴
```

REST API에서는 가능한 한 필요한 조건을 요청에 명시합니다.

```text
Path
Query Parameter
Header
Body
```

다만 실무의 REST API가 Session을 절대 사용하지 않는다는 뜻은 아닙니다.

엄격한 REST 원칙과 현실적인 REST 스타일 구현 사이에는 차이가 있을 수 있습니다.

---

## 23. 서버와 클라이언트의 역할 분리

전통적인 JSP 방식:

```text
서버
데이터 조회
+
화면 구조 생성
+
완성된 HTML 응답
```

REST API 방식:

```text
서버
자원의 데이터 표현 제공

클라이언트
데이터를 이용해 화면 구성
```

이를 한 문장으로 정리하면:

> 기존 서버는 데이터로 완성된 HTML 화면까지 만들어 제공했지만, REST API 서버는 자원의 상태를 JSON 같은 전송용 데이터 형식으로 제공하고 실제 화면 구성은 클라이언트가 담당합니다.

이 역할 분리 덕분에 같은 REST API를 여러 클라이언트가 사용할 수 있습니다.

```text
                   ┌─ 웹 브라우저
REST API 서버 ─────┼─ iPhone 앱
                   ├─ Android 앱
                   ├─ 관리자 도구
                   └─ 다른 서버
```

각 클라이언트는 같은 데이터를 자신에게 맞는 화면으로 표현합니다.

---

## 24. JSP와 REST API를 함께 사용할 수도 있다

둘 중 하나만 선택해야 하는 것은 아닙니다.

다음과 같은 혼합 구조도 가능합니다.

```text
일반 페이지
Controller + JSP 또는 Template

동적 데이터
JavaScript + REST API
```

또는 첫 화면은 서버가 HTML로 렌더링하고, 이후 상호작용만 REST API로 처리할 수도 있습니다.

```text
첫 페이지
서버 렌더링 HTML

이후 검색·저장·갱신
JavaScript + REST API
```

현대 웹 애플리케이션에서도 서버 렌더링과 API 통신을 함께 사용하는 경우가 많습니다.

---

## 25. REST의 주요 설계 원칙을 가볍게 보기

REST에는 여러 제약과 원칙이 있지만, 이 단계에서는 다음 정도로 이해하면 충분합니다.

### Client–Server

화면과 사용자 경험을 담당하는 클라이언트와, 데이터와 업무 처리를 담당하는 서버의 역할을 분리합니다.

### Stateless

각 요청은 독립적이며 처리에 필요한 정보를 포함합니다.

### Cacheable

응답을 캐시할 수 있는지 명확히 하여 불필요한 통신을 줄일 수 있습니다.

### Uniform Interface

자원, Method, Status Code 같은 일관된 방식을 사용합니다.

### Layered System

클라이언트는 중간에 Proxy, Gateway, Cache가 있어도 최종 서버와 같은 방식으로 통신할 수 있습니다.

현재 단계에서는 특히 다음 세 가지를 기억하면 됩니다.

```text
자원 중심
HTTP 의미 활용
클라이언트와 서버 역할 분리
```

---

## 26. RESTful이라는 표현

REST 원칙을 비교적 잘 따르는 API를 흔히 `RESTful API`라고 부릅니다.

```text
REST API
REST 스타일로 설계한 API

RESTful API
REST 원칙을 비교적 충실하게 따른 API
```

하지만 현실의 API는 REST 원칙을 일부만 적용하기도 합니다.

예를 들어:

- URL은 자원 중심
- JSON 응답 사용
- Status Code 사용
- 일부 작업은 동사형 Endpoint 사용

이처럼 실무에서는 완벽한 REST보다 **REST 스타일**이라는 표현이 더 현실적일 때도 있습니다.

---

## 27. 프로젝트 연결

### Potato's Day

현재는 정적 GitHub Pages 프로젝트이므로 REST API가 필요하지 않습니다.

나중에 다음 기능이 생기면 API를 고려할 수 있습니다.

```text
GET  /messages
POST /scores
GET  /users/{id}/settings
```

### Living Aegis Origin

온라인 랭킹이 생긴다면 다음과 같이 설계할 수 있습니다.

```text
GET  /scores
POST /scores
GET  /players/{id}/scores
```

서버는 JSON 데이터를 제공하고 게임 JavaScript가 HUD나 랭킹 화면을 구성합니다.

### 공공데이터 기반 서비스

공공데이터 API는 주로 HTTP `GET` 요청으로 JSON 또는 XML을 반환합니다.

```text
GET /weather?region=seoul
```

브라우저나 Serverless Proxy는 받은 데이터를 화면에 맞게 가공합니다.

---

## 28. 자주 하는 오해

### “REST는 URL 작성 규칙이다.”

아닙니다.

URL뿐 아니라 Method, Status Code, Header, Body, Stateless, 역할 분리 등을 함께 다루는 아키텍처 스타일입니다.

### “REST API는 반드시 JSON만 사용한다.”

아닙니다.

JSON이 가장 흔하지만 XML, HTML 등 다른 Representation도 가능합니다.

### “REST가 Servlet을 대체했다.”

아닙니다.

Servlet 같은 서버 기술 위에서 REST API를 구현할 수 있습니다.

### “REST의 Representation은 화면 표현이다.”

아닙니다.

자원의 상태를 전달하는 JSON, XML 같은 데이터 형식을 뜻합니다.

### “REST 서버는 DB 데이터를 그대로 보낸다.”

일반적으로 내부 데이터를 선택·가공하고 DTO를 통해 외부 응답을 구성합니다.

### “Path Variable과 Query Parameter는 같은 것이다.”

둘 다 값이지만 역할이 다릅니다.

Path Variable은 특정 자원을 식별하고, Query Parameter는 조회 조건이나 옵션을 표현하는 경우가 많습니다.

### “URL에 동사가 들어가면 잘못된 API다.”

반드시 그렇지는 않습니다.

RPC 스타일에서는 동사 중심 Endpoint가 자연스러울 수 있습니다. REST와 다른 설계 스타일일 뿐입니다.

---

## 29. 핵심 요약

- API는 프로그램이 다른 프로그램과 기능과 데이터를 주고받는 창구다.
- HTTP는 통신 규칙이고 REST는 HTTP API 설계 스타일이다.
- REST는 자원(Resource)을 중심으로 URL을 설계한다.
- URL 전체와 Path는 구분해야 한다.
- `/books/10`의 `10`은 Path Variable 또는 Path Parameter다.
- Query Parameter는 필터, 정렬, 검색, 페이지 같은 조건에 주로 사용한다.
- URL은 자원을, HTTP Method는 동작을 표현하는 것이 일반적인 REST 스타일이다.
- REST는 URL뿐 아니라 Status Code, Header, Body까지 함께 설계한다.
- Servlet·JSP는 구현 기술이고 REST는 설계 스타일이다.
- 기존 JSP 방식은 완성된 HTML을 서버가 만들고, REST API는 주로 JSON 데이터를 제공한다.
- JSON 직렬화는 프로그램 객체를 JSON 문자열로 바꾸는 과정이다.
- REST의 Representation은 화면 디자인이 아니라 자원의 전송용 데이터 형식이다.
- 서버 내부 Entity와 외부 Response DTO를 분리하는 것이 일반적이다.
- REST API는 같은 데이터를 웹, 모바일 앱, 다른 서버 등 여러 클라이언트에 제공할 수 있다.

---

## 30. 생각해 보기

1. HTTP만으로 통신할 수 있는데 REST 같은 설계 스타일이 필요했던 이유는 무엇일까?
2. `/books/10` 전체와 `10`은 각각 어떤 용어로 부를 수 있을까?
3. `/books?page=2`의 `page=2`는 왜 Path Variable보다 Query Parameter가 자연스러울까?
4. `GET /getUser?id=3`과 `GET /users/3`은 어떤 설계 관점의 차이를 보여 주는가?
5. Servlet·JSP와 REST를 직접 반대되는 기술로 보면 왜 부정확할까?
6. JSON 직렬화와 UTF-8 인코딩은 어떻게 다른가?
7. REST의 Representation을 화면 표현으로 오해하면 어떤 혼란이 생길까?
8. 서버 내부 Entity를 그대로 JSON으로 보내면 어떤 문제가 생길 수 있을까?
9. 동일한 REST API를 웹사이트와 모바일 앱이 함께 사용할 수 있는 이유는 무엇일까?
10. 모든 API를 반드시 REST 방식으로 만들어야 할까?

---

## 31. 다음 문서

**WEB-009. CORS는 왜 브라우저를 제한하는가?**

REST API를 설계하고 외부 서버에 요청을 보낼 수 있게 되면 다음 문제를 만나게 됩니다.

```text
주소도 맞고 서버도 정상인데,
왜 브라우저 JavaScript는 응답을 읽지 못할까?
```

다음 문서에서는 브라우저의 Same-Origin Policy와 CORS가 사용자를 어떻게 보호하는지 살펴봅니다.

---

# 변경 이력

## 2026-07-11

- 초판 작성
- API와 REST의 기본 개념 추가
- Resource 중심 설계 설명
- HTTP Method와 URL의 역할 구분
- JSON과 REST의 관계 설명

## 2026-07-14

- URL, Path, Path Variable, Query Parameter 구조 설명 보강
- REST 스타일과 RPC 스타일의 동일 수준 비교 추가
- REST가 URL만의 규칙이 아니라는 설명 보강
- Servlet·JSP 서버 렌더링 방식과 REST API 응답 방식 비교 추가
- Servlet, JSP, REST의 개념적 계층 구분 추가
- JSON 직렬화와 UTF-8 인코딩의 단계 구분 추가
- Representation을 전송용 데이터 형식으로 명확화
- 자원 표현과 화면 표현의 차이 추가
- Entity와 Response DTO 분리 이유 추가
- HTTP Status Code와 오류 응답 설계 보강
- Stateless와 클라이언트·서버 역할 분리 설명 추가
- REST의 주요 설계 원칙과 RESTful 표현 추가
- 관련 오해와 생각해 보기 항목 보강
