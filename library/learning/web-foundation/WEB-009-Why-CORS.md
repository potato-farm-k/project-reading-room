---
title: WEB-009. Why CORS
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-009-Why-CORS.md
copy_type: source
last_reviewed: 2026-07-14
print_friendly: true
---

# WEB-009. CORS는 왜 브라우저를 제한하는가?

## 부제: 외부 요청을 모두 금지하는 것이 아니라, 응답을 JavaScript에 공개할지 통제하는 방식

> CORS는 서버를 보호하기 위한 기술이라기보다,
> 브라우저가 사용자를 보호하기 위해 적용하는 보안 정책입니다.

---

## 1. 학습 목표

이 문서를 읽고 나면 다음 질문에 답할 수 있어야 합니다.

- Origin은 무엇인가?
- Same-Origin Policy는 왜 필요한가?
- CORS는 요청 자체를 막는가, 응답 읽기를 막는가?
- `Access-Control-Allow-Origin`은 무엇을 허용하는가?
- Preflight는 언제 발생하며 왜 필요한가?
- 왜 같은 API가 브라우저에서는 실패하고 서버에서는 성공할 수 있는가?
- Serverless Proxy는 CORS 문제를 어떻게 완화하는가?

---

## 2. 웹은 원래 외부 리소스를 많이 사용한다

웹페이지는 한 서버의 파일만 사용하는 것이 아닙니다.

다음과 같은 외부 리소스를 자주 불러옵니다.

- 이미지
- 폰트
- 동영상
- 광고
- 분석 스크립트
- 지도
- 결제 서비스
- 외부 API

예:

```html
<img src="https://images.example.com/gamja.png">
```

```html
<script src="https://cdn.example.com/library.js"></script>
```

```javascript
fetch("https://api.example.com/books");
```

브라우저가 외부 서버와의 모든 통신을 금지한다면 현대 웹은 제대로 동작하기 어렵습니다.

따라서 브라우저는 외부 요청을 전부 차단하는 대신, **어떤 요청과 응답을 JavaScript가 사용할 수 있는지**를 통제합니다.

---

## 3. Origin이란?

Origin은 보통 다음 세 요소의 조합입니다.

```text
Scheme + Host + Port
```

예:

```text
https://example.com:443
```

구성:

```text
https        → Scheme
example.com  → Host
443          → Port
```

세 요소가 모두 같아야 같은 Origin입니다.

---

## 4. 같은 Origin과 다른 Origin

다음 두 주소는 같은 Origin입니다.

```text
https://example.com/books
https://example.com/users
```

Scheme, Host, Port가 모두 같습니다.

다음은 다른 Origin입니다.

### Host가 다른 경우

```text
https://example.com
https://api.example.com
```

### Scheme이 다른 경우

```text
http://example.com
https://example.com
```

### Port가 다른 경우

```text
https://example.com:443
https://example.com:8443
```

Path는 Origin 판단에 포함되지 않습니다.

```text
https://example.com/books
https://example.com/users
```

두 주소는 Path가 달라도 같은 Origin입니다.

---

## 5. Same-Origin Policy란?

Same-Origin Policy, 줄여서 SOP는 브라우저의 기본 보안 정책입니다.

핵심은 다음과 같습니다.

> 한 Origin에서 실행된 JavaScript가
> 다른 Origin의 민감한 응답 내용을 마음대로 읽지 못하게 한다.

예를 들어 사용자가 은행 사이트에 로그인한 상태에서 악성 사이트를 방문했다고 가정하겠습니다.

```text
사용자
   │
   ├── 은행 사이트 로그인 상태
   │
   └── 악성 사이트 방문
```

악성 사이트의 JavaScript가 은행 서버에 요청하고 계좌 정보를 읽을 수 있다면 큰 문제가 됩니다.

```text
악성 사이트 JavaScript
        │
        │ 은행 API 요청
        ▼
은행 서버
        │
        │ 계좌 정보 응답
        ▼
악성 사이트가 응답 내용을 읽음
```

브라우저는 이런 상황을 막기 위해 다른 Origin의 응답을 JavaScript가 읽는 것을 기본적으로 제한합니다.

---

## 6. CORS란?

CORS는 다음의 약자입니다.

```text
Cross-Origin Resource Sharing
```

직역하면 다음과 같습니다.

```text
교차 출처 자원 공유
```

Same-Origin Policy가 모든 교차 Origin 응답 접근을 제한하면 정상적인 API 통신도 어려워집니다.

그래서 외부 API 서버가 브라우저에게 다음과 같이 알려 줄 수 있게 만든 것이 CORS입니다.

> 이 Origin에서 실행된 JavaScript에는
> 내 응답을 공개해도 됩니다.

대표적인 응답 Header:

```text
Access-Control-Allow-Origin
```

예:

```http
Access-Control-Allow-Origin: https://example.github.io
```

정확한 의미는 다음과 같습니다.

> 이 응답은 `https://example.github.io` Origin에서 실행된 브라우저 JavaScript가 읽어도 됩니다.

---

## 7. 요청을 막는가, 응답을 막는가?

여기가 가장 자주 헷갈리는 부분입니다.

일반적인 교차 Origin 요청에서는 다음과 같은 일이 일어날 수 있습니다.

```text
JavaScript
   │
   │ 요청
   ▼
외부 API 서버
   │
   │ 응답
   ▼
브라우저
   │
   │ CORS Header 검사
   ▼
JavaScript에 응답을 공개할지 결정
```

즉, 많은 경우:

```text
요청은 전송됨
응답도 도착함
하지만 JavaScript가 응답 내용을 읽지 못함
```

이 때문에 개발자는 흔히 다음처럼 말합니다.

```text
브라우저가 API 요청을 막았다.
```

하지만 더 정확하게는 다음과 같습니다.

```text
브라우저가 교차 Origin 응답을
JavaScript에 공개하지 않았다.
```

---

## 8. CORS가 허용된 경우

현재 페이지:

```text
https://example.github.io
```

JavaScript 요청:

```javascript
fetch("https://api.example.com/books");
```

외부 서버 응답:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Access-Control-Allow-Origin: https://example.github.io
```

```json
{
  "books": [
    {
      "id": 1,
      "title": "어린 왕자"
    }
  ]
}
```

브라우저는 응답 Header를 확인합니다.

```text
허용 Origin
https://example.github.io

현재 JavaScript Origin
https://example.github.io
```

두 값이 일치하므로 응답을 JavaScript에 공개합니다.

```text
외부 서버 응답
   ↓
브라우저의 CORS 검사 통과
   ↓
JavaScript가 JSON 사용
```

---

## 9. CORS가 허용되지 않은 경우

외부 서버가 다음처럼 응답했다고 가정하겠습니다.

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

`Access-Control-Allow-Origin`이 없습니다.

이 경우 네트워크 관점에서는 요청과 응답이 완료됐을 수 있습니다.

```text
요청 전송
응답 수신
```

하지만 브라우저는 응답을 JavaScript에 공개하지 않습니다.

```text
응답 수신
   ↓
CORS 허용 Header 없음
   ↓
JavaScript에는 오류
```

개발자 도구의 Network 탭에서는 응답이 보일 수 있지만, JavaScript 코드에서는 데이터를 사용할 수 없습니다.

---

## 10. 왜 외부 요청 자체를 모두 금지하지 않을까?

웹은 오래전부터 교차 Origin 요청을 사용해 왔습니다.

예:

```html
<img src="https://other.example/image.png">
```

```html
<form action="https://other.example/submit" method="post">
```

브라우저가 모든 외부 요청을 금지하면 다음 기능들이 크게 제한됩니다.

- 외부 이미지
- CDN
- 결제
- 지도
- 광고
- 외부 로그인
- 외부 폰트
- 여러 서버를 조합한 웹 서비스

따라서 기본 개념은 다음에 가깝습니다.

```text
외부 요청을 무조건 금지하지는 않는다.

하지만 외부 응답의 민감한 내용을
JavaScript가 마음대로 읽지는 못하게 한다.
```

Same-Origin Policy의 핵심은 주로 **읽기 제한**에 있습니다.

---

## 11. 그런데 실제 요청 자체가 보내지지 않는 경우도 있다

일부 교차 Origin 요청은 브라우저가 바로 보내지 않습니다.

먼저 서버에 사전 확인 요청을 보냅니다.

이를 Preflight Request라고 합니다.

```text
Preflight
실제 요청 전에 허용 여부를 미리 확인하는 절차
```

브라우저는 보통 `OPTIONS` Method를 사용합니다.

예:

```http
OPTIONS /books/1
```

의미는 대략 다음과 같습니다.

```text
https://example.github.io에서
이 Method와 Header를 사용해
실제 요청을 보내도 됩니까?
```

---

## 12. Preflight가 필요한 대표적인 경우

교차 Origin 요청에서 다음과 같은 조건이 포함되면 Preflight가 발생하는 경우가 많습니다.

- `PUT`
- `PATCH`
- `DELETE`
- `Authorization` Header
- 사용자 정의 Header
- `Content-Type: application/json`

예:

```javascript
fetch("https://api.example.com/books", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "어린 왕자"
  })
});
```

교차 Origin 요청이라면 브라우저가 실제 `POST` 전에 `OPTIONS` 요청을 보낼 수 있습니다.

---

## 13. Preflight가 성공하는 경우

전체 흐름:

```text
JavaScript가 실제 요청을 준비
        ↓
브라우저가 OPTIONS Preflight 전송
        ↓
서버가 허용 Header 응답
        ↓
브라우저가 실제 요청 전송
        ↓
서버 응답
        ↓
브라우저가 응답 공개 여부 검사
```

예상 Preflight 요청:

```http
OPTIONS /books
Origin: https://example.github.io
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
```

서버 응답:

```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://example.github.io
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

브라우저는 허용 여부를 확인한 뒤 실제 `POST` 요청을 보냅니다.

---

## 14. Preflight가 실패하는 경우

서버가 필요한 CORS Header를 보내지 않으면 다음처럼 됩니다.

```text
OPTIONS Preflight
   ↓
허용되지 않음
   ↓
실제 POST·PUT·DELETE 요청은 보내지 않음
   ↓
JavaScript에 CORS 오류
```

이 경우에는 실제 본 요청 자체가 전송되지 않습니다.

따라서 CORS는 두 가지 형태로 나타날 수 있습니다.

```text
단순한 교차 Origin 요청
본 요청 전송 → 응답 수신 → JavaScript의 응답 읽기 제한

Preflight가 필요한 요청
OPTIONS 사전 확인 → 실패하면 본 요청 자체를 전송하지 않음
```

---

## 15. 브라우저가 실제 위험도를 계산하는가?

브라우저가 요청 내용을 분석하여 실시간으로 위험 점수를 계산하는 것은 아닙니다.

정해진 규칙에 따라 다음을 판단합니다.

- 어떤 HTTP Method인가?
- 어떤 Header를 사용하는가?
- 어떤 Content-Type인가?
- 자격 증명을 포함하는가?

즉, 다음 표현이 더 정확합니다.

```text
위험한 요청인지 브라우저가 판단한다
```

보다는:

```text
사전 확인이 필요한 형식의 요청인지
정해진 규칙으로 판단한다
```

---

## 16. 단순 요청이라는 말

CORS 문맥에서 일부 요청은 **Simple Request**라고 부릅니다.

이 요청들은 Preflight 없이 바로 전송될 수 있습니다.

대표적으로 단순한 `GET` 조회 요청이 여기에 해당하는 경우가 많습니다.

```javascript
fetch("https://api.example.com/books");
```

대체 흐름:

```text
GET 요청 전송
   ↓
응답 수신
   ↓
CORS Header 검사
   ↓
JavaScript의 응답 읽기 허용 또는 차단
```

다만 `GET`이라고 항상 Preflight가 없는 것은 아닙니다.

특정 Header를 추가하면 Preflight가 발생할 수 있습니다.

---

## 17. 지금 단계에서 Preflight를 어디까지 알아야 할까?

현재 단계에서는 다음 정도만 기억하면 충분합니다.

```text
Preflight는 오류가 아니라
교차 Origin 요청의 정상적인 사전 확인 절차다.
```

```text
브라우저가 OPTIONS 요청을 먼저 보내면
실제 요청을 보내기 전 허용 여부를 확인하는 중일 수 있다.
```

아직 외울 필요가 없는 세부 사항:

- 정확한 CORS Safelisted Header 목록
- 세부 Content-Type 조건
- Preflight 캐시 시간
- 자격 증명 요청의 모든 규칙
- 모든 `Access-Control-*` Header 조합

이 세부 내용은 Part II의 `fetch()`와 개발자 도구 실습에서 다루는 편이 자연스럽습니다.

---

## 18. 서버가 요청을 처리하는 것과 브라우저가 응답을 공개하는 것은 다르다

다음 두 단계는 구분해야 합니다.

### 서버의 판단

```text
이 요청을 처리할 것인가?
```

서버는 다음을 검사할 수 있습니다.

- 인증
- 권한
- 입력값
- API Key
- 요청 횟수
- 비즈니스 규칙

### 브라우저의 판단

```text
이 응답을 JavaScript에 공개할 것인가?
```

브라우저는 CORS Header를 확인합니다.

따라서 CORS 허용은 서버의 실제 권한 검사를 대신하지 않습니다.

```text
CORS 허용
브라우저 JavaScript의 응답 읽기 허용

인증·인가
사용자가 이 기능과 데이터에 접근할 권한이 있는지 확인
```

둘은 서로 다른 보안 단계입니다.

---

## 19. `Access-Control-Allow-Origin: *`

서버는 모든 Origin을 허용한다는 뜻으로 `*`를 사용할 수 있습니다.

```http
Access-Control-Allow-Origin: *
```

의미:

```text
어떤 Origin에서 실행된 JavaScript라도
이 응답을 읽을 수 있다.
```

공개 데이터 API에서는 사용할 수 있습니다.

하지만 사용자 계정이나 민감한 정보를 다루는 API에는 주의가 필요합니다.

또한 Cookie 같은 자격 증명을 포함하는 요청에서는 `*`를 그대로 사용할 수 없는 등 추가 규칙이 있습니다.

현재 단계에서는 다음만 기억하면 됩니다.

```text
*
모든 Origin 허용

특정 Origin 값
지정한 Origin만 허용
```

---

## 20. CORS는 서버가 설정하지만 브라우저가 집행한다

CORS에는 서버와 브라우저가 모두 등장합니다.

### 서버의 역할

허용 범위를 응답 Header로 선언합니다.

```http
Access-Control-Allow-Origin: https://example.github.io
```

### 브라우저의 역할

서버의 Header를 검사하고 응답을 JavaScript에 공개할지 결정합니다.

```text
서버
허용 여부 선언

브라우저
정책 검사와 집행
```

그래서 CORS를 다음처럼 이해하면 좋습니다.

> 서버가 허가서를 작성하고, 브라우저가 그 허가서를 검사합니다.

---

## 21. 왜 같은 API가 브라우저에서는 실패하고 서버에서는 성공할까?

CORS는 브라우저 보안 정책입니다.

Serverless Function, 백엔드 서버, 터미널의 `curl` 같은 프로그램은 브라우저가 아닙니다.

```text
브라우저 JavaScript
Same-Origin Policy와 CORS 적용

Serverless Function
브라우저 SOP 적용 안 됨

백엔드 서버
브라우저 SOP 적용 안 됨

curl
브라우저 SOP 적용 안 됨
```

따라서 같은 외부 API라도:

```text
브라우저 fetch()
CORS 오류

Serverless Function의 fetch()
정상 응답
```

이 될 수 있습니다.

서버 간 통신에도 인증, 방화벽, 네트워크 정책은 존재할 수 있지만, 브라우저의 CORS 정책은 적용되지 않습니다.

---

## 22. GitHub Pages에서 CORS가 자주 문제가 되는 이유

GitHub Pages는 정적 호스팅입니다.

브라우저가 HTML, CSS, JavaScript를 받은 뒤 JavaScript가 직접 외부 API를 호출합니다.

```text
GitHub Pages
   │
   │ JavaScript 실행
   ▼
사용자 브라우저
   │
   │ 외부 API 요청
   ▼
공공데이터 API
```

외부 API가 GitHub Pages의 Origin을 CORS로 허용하지 않으면 브라우저 JavaScript는 응답을 읽을 수 없습니다.

예:

```text
페이지 Origin
https://example.github.io

API Origin
https://api.publicdata.example
```

서로 다른 Origin이므로 CORS 확인이 필요합니다.

---

## 23. Serverless Proxy는 CORS 문제를 어떻게 완화할까?

브라우저가 외부 API를 직접 호출하지 않고 Serverless Proxy를 호출합니다.

```text
브라우저
   │
   ▼
Serverless Proxy
   │
   ▼
외부 API
```

Serverless Proxy는 브라우저가 아니므로 외부 API와의 통신에 브라우저의 Same-Origin Policy가 적용되지 않습니다.

전체 구조:

```text
GitHub Pages JavaScript
        │
        │ 내가 만든 Proxy 호출
        ▼
Serverless Proxy
        │
        │ 외부 API 호출
        ▼
공공데이터 API
        │
        │ 응답
        ▼
Serverless Proxy
        │
        │ 필요한 형태로 가공
        ▼
브라우저
```

Proxy는 다음 역할을 함께 수행할 수 있습니다.

- 외부 API 대신 호출
- API Key 보호
- 응답 데이터 가공
- 오류 형식 통일
- 요청 횟수 제한
- 브라우저에 허용할 CORS Header 설정

---

## 24. Proxy를 사용하면 CORS를 전혀 생각하지 않아도 될까?

아닙니다.

외부 API와 Proxy 사이에서는 브라우저 CORS 정책을 피할 수 있습니다.

하지만 브라우저와 Proxy의 Origin이 다르면 Proxy가 브라우저에 적절한 CORS Header를 보내야 합니다.

예:

```text
GitHub Pages
https://example.github.io

Serverless Proxy
https://my-proxy.example.workers.dev
```

두 Origin이 다르므로 Proxy 응답에 다음과 같은 Header가 필요할 수 있습니다.

```http
Access-Control-Allow-Origin: https://example.github.io
```

즉:

```text
브라우저 ↔ Proxy
CORS 고려 필요

Proxy ↔ 외부 API
브라우저 CORS 정책 적용 안 됨
```

---

## 25. 개발자 도구에서 CORS 흐름 확인하기

브라우저 개발자 도구의 Network 탭에서 다음을 확인할 수 있습니다.

- 실제 요청이 전송되었는가?
- `OPTIONS` 요청이 먼저 발생했는가?
- 서버가 어떤 Status Code를 보냈는가?
- 응답에 `Access-Control-Allow-Origin`이 있는가?
- 본 요청이 실행되었는가?
- Console에 어떤 CORS 오류가 표시되는가?

Preflight가 발생했다면 Network 탭에 다음 두 요청이 보일 수 있습니다.

```text
OPTIONS /books
POST /books
```

Preflight가 실패하면 `OPTIONS`만 보이고 실제 `POST`는 보이지 않을 수 있습니다.

---

## 26. 프로젝트 연결

### Potato's Day

현재는 같은 GitHub Pages 안의 정적 파일을 주로 사용하므로 CORS 문제가 거의 없습니다.

하지만 외부 AI API나 온라인 저장 API를 브라우저에서 직접 호출하면 CORS와 API Key 노출을 고려해야 합니다.

### Living Aegis Origin

외부 랭킹 서버나 사용자 계정 API를 연결하면 다음을 확인해야 합니다.

- 게임 페이지 Origin 허용
- 요청 Method
- Authorization Header
- Preflight 처리
- 오류 응답

### 공공데이터 기반 서비스

공공데이터 API가 브라우저 직접 호출을 허용하는지 먼저 확인해야 합니다.

```text
허용
브라우저에서 직접 호출 가능

불허
Serverless Proxy 검토
```

단순 `GET` 조회만 사용하더라도 응답의 CORS Header가 없으면 JavaScript는 데이터를 읽지 못할 수 있습니다.

---

## 27. 자주 하는 오해

### “CORS는 외부 API 요청을 모두 막는다.”

아닙니다.

많은 경우 요청과 응답은 실제로 오가지만, 브라우저가 응답을 JavaScript에 공개하지 않습니다.

### “CORS 오류가 나면 서버가 응답하지 않은 것이다.”

아닙니다.

서버가 정상 응답했지만 브라우저가 JavaScript의 접근을 차단했을 수 있습니다.

### “Preflight가 보이면 오류가 발생한 것이다.”

아닙니다.

`OPTIONS` Preflight는 정상적인 사전 허가 확인 절차입니다.

### “Preflight에서는 항상 본 요청도 전송된다.”

아닙니다.

Preflight가 실패하면 실제 본 요청은 전송되지 않을 수 있습니다.

### “브라우저가 요청의 실제 위험도를 계산한다.”

아닙니다.

Method, Header, Content-Type 등 정해진 조건에 따라 Preflight 여부를 판단합니다.

### “CORS가 허용되면 누구나 서버 기능을 사용할 수 있다.”

아닙니다.

CORS와 별개로 서버는 인증, 권한, 입력값을 직접 검사해야 합니다.

### “Serverless Proxy를 사용하면 CORS 설정이 전혀 필요 없다.”

아닙니다.

브라우저와 Proxy가 다른 Origin이라면 Proxy 응답에도 CORS 설정이 필요할 수 있습니다.

### “CORS는 서버 보안 기능이다.”

정확히는 서버가 허용 범위를 선언하고 브라우저가 정책을 집행하는 구조입니다.

---

## 28. 핵심 요약

- Origin은 Scheme, Host, Port의 조합이다.
- Same-Origin Policy는 다른 Origin의 응답을 JavaScript가 마음대로 읽지 못하게 한다.
- CORS는 서버가 교차 Origin 응답 접근을 허용하는 방법이다.
- 많은 경우 본 요청과 응답은 실제로 오가지만 JavaScript가 응답을 읽지 못한다.
- `Access-Control-Allow-Origin`은 어떤 Origin의 JavaScript에 응답을 공개할지 나타낸다.
- Preflight는 실제 요청 전에 `OPTIONS`로 허용 여부를 확인하는 절차다.
- Preflight가 실패하면 실제 본 요청이 전송되지 않을 수 있다.
- 브라우저는 위험도를 계산하기보다 정해진 요청 형식에 따라 Preflight 여부를 판단한다.
- CORS는 브라우저 정책이므로 서버 간 통신에는 적용되지 않는다.
- Serverless Proxy는 외부 API 호출, API Key 보호, CORS 대응에 유용하다.
- CORS 허용은 인증과 권한 검사를 대신하지 않는다.

---

## 29. 생각해 보기

1. 브라우저가 모든 외부 요청을 금지하면 웹에 어떤 문제가 생길까?
2. Same-Origin Policy가 요청 전송보다 응답 읽기를 주로 제한하는 이유는 무엇일까?
3. CORS Header가 없을 때 서버 응답이 도착했어도 JavaScript가 읽지 못할 수 있는 이유는 무엇일까?
4. `Access-Control-Allow-Origin`은 서버의 요청 처리 허가와 어떤 차이가 있을까?
5. Preflight가 실패하면 실제 `DELETE` 요청이 전송되지 않을 수 있는 이유는 무엇일까?
6. 같은 API가 브라우저에서는 실패하고 Serverless Function에서는 성공할 수 있는 이유는 무엇일까?
7. Serverless Proxy와 브라우저가 다른 Origin이라면 왜 Proxy에도 CORS 설정이 필요할까?
8. CORS가 허용되어 있어도 서버의 인증과 권한 검사가 필요한 이유는 무엇일까?

---

## 30. 다음 문서

**WEB-010. Serverless는 왜 서버가 없는 서버라고 불릴까?**

CORS 때문에 브라우저에서 외부 API를 직접 사용하기 어려운 경우 다음 구조를 고려할 수 있습니다.

```text
브라우저
   ↓
Serverless Proxy
   ↓
외부 API
```

다음 문서에서는 Serverless가 실제 서버 없이 동작하는 것처럼 보이는 이유와, GitHub Pages에 작은 서버 기능을 추가하는 방법을 살펴봅니다.

---

# 변경 이력

## 2026-07-11

- 초판 작성
- Same-Origin Policy 소개
- Origin의 기본 구성 설명
- CORS의 목적과 `Access-Control-Allow-Origin` 소개
- GitHub Pages와 Serverless Proxy 연결

## 2026-07-14

- 외부 요청 전송과 응답 읽기 제한의 차이 명확화
- 일반적인 교차 Origin 요청의 실제 처리 흐름 추가
- `Access-Control-Allow-Origin`의 의미를 응답 공개 허용으로 보강
- 외부 요청 자체를 모두 금지하지 않는 이유 추가
- Preflight와 `OPTIONS` 요청의 목적 설명 추가
- Preflight 성공·실패에 따른 본 요청 전송 여부 설명
- 단순 요청과 Preflight 요청의 흐름 비교
- 브라우저가 위험도가 아닌 정해진 요청 조건을 검사한다는 설명 추가
- CORS와 인증·인가의 역할 구분 추가
- `Access-Control-Allow-Origin: *` 기본 개념 추가
- 브라우저, 서버, Serverless Proxy의 역할 구분 보강
- GitHub Pages와 Proxy 사이의 CORS 설정 필요성 추가
- 개발자 도구에서 확인할 항목 추가
- 관련 오해와 생각해 보기 항목 보강
