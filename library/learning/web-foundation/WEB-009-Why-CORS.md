---
title: WEB-009. Why CORS
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-009-Why-CORS.md
copy_type: source
last_reviewed: 2026-07-11
print_friendly: true
---

# WEB-009. CORS는 왜 브라우저를 제한하는가?

## 부제: 불편함을 만들기 위한 기술이 아니라 사용자를 보호하기 위한 기술

> CORS는 서버를 보호하는 기술이 아닙니다.  
> 브라우저가 사용자를 보호하기 위해 적용하는 보안 규칙입니다.

핵심 질문은 이것입니다.

> 왜 브라우저는 어떤 API 요청을 막고, 어떤 요청은 허용하는가?

## 1. 학습 목표

이 문서를 읽고 나면 다음 질문에 답할 수 있어야 합니다.

- Origin이 무엇인지 설명합니다.
- Same-Origin Policy가 왜 필요한지 이해합니다.
- Cross-Origin Request가 무엇인지 구분합니다.
- CORS를 브라우저가 적용하는 보안 규칙으로 이해합니다.
- `Access-Control-Allow-Origin` Header의 기본 의미를 설명합니다.
- Preflight와 `OPTIONS` 요청이 왜 등장하는지 이해합니다.
- 요청 자체 실패와 CORS 정책에 의한 응답 접근 차단을 구분합니다.
- GitHub Pages에서 외부 API를 호출할 때 CORS가 왜 중요한지 설명합니다.

## 2. 왜 CORS가 필요한가

웹은 원래 매우 개방적인 환경입니다.

브라우저는 HTML, CSS, JavaScript, 이미지, API 데이터처럼 여러 서버의 리소스를 요청할 수 있습니다. 그런데 브라우저 안의 JavaScript가 아무 사이트의 응답이나 마음대로 읽을 수 있다면 문제가 생깁니다.

예를 들어 악성 웹사이트가 사용자를 대신해서 다른 사이트에 요청을 보내고, 로그인된 사용자의 민감한 응답을 읽으려 한다고 생각해 봅니다.

```text
악성 웹사이트
      │
      │ JavaScript 요청
      ▼
다른 서비스의 서버
```

브라우저는 이런 상황에서 사용자를 보호하기 위해 Same-Origin Policy라는 기본 보안 정책을 적용합니다.

하지만 모든 다른 origin 요청을 막아 버리면 정상적인 서비스도 만들기 어렵습니다. GitHub Pages에서 실행되는 JavaScript가 공공데이터 API를 호출하거나, 게임 페이지가 랭킹 API를 호출하는 일도 필요할 수 있습니다.

그래서 서버가 브라우저에게 이렇게 알려줄 수 있는 방식이 필요했습니다.

```text
이 origin의 요청은 응답을 읽어도 됩니다.
```

그 방식이 CORS입니다.

## 3. 핵심 개념

### Origin

Origin은 protocol, domain, port를 조합한 출처입니다.

아래 세 가지가 모두 같으면 같은 origin입니다.

- Protocol 또는 Scheme: `https`
- Domain 또는 Host: `example.com`
- Port: `443`

예:

```text
https://example.com
```

`https://example.com`과 `https://example.com`은 같은 origin입니다.

하지만 아래 주소들은 origin이 다릅니다.

```text
http://example.com        protocol이 다름
https://api.example.com   domain/host가 다름
https://example.com:8443  port가 다름
```

### Same-Origin Policy

Same-Origin Policy는 기본적으로 같은 origin끼리만 자유롭게 응답을 읽을 수 있도록 제한하는 브라우저 보안 정책입니다.

짧게 말하면 이렇습니다.

```text
다른 origin의 응답은
JavaScript가 마음대로 읽지 못하게 한다.
```

이 정책은 서버가 죽었거나 API가 틀렸다는 뜻이 아닙니다. 브라우저가 사용자를 보호하기 위해 JavaScript에게 응답 내용을 넘겨주지 않는 상황일 수 있습니다.

### Cross-Origin Request

Cross-Origin Request는 현재 웹페이지와 다른 origin으로 보내는 요청입니다.

예를 들어 GitHub Pages 페이지가 아래 origin에서 열렸다고 생각합니다.

```text
https://gamja.github.io
```

이 페이지의 JavaScript가 아래 API에 요청하면 cross-origin 요청입니다.

```text
https://api.example.com
```

protocol, domain, port 중 하나라도 다르면 브라우저는 다른 origin으로 봅니다.

### CORS

CORS는 Cross-Origin Resource Sharing의 줄임말입니다.

서버가 “이 origin의 요청은 허용해도 된다”고 브라우저에 알려주는 방식입니다.

중요한 점은 CORS를 최종적으로 검사하고 적용하는 주체가 브라우저라는 것입니다. 서버는 허용 정보를 Header로 보내고, 브라우저는 그 Header를 보고 JavaScript가 응답을 읽을 수 있는지 판단합니다.

### Access-Control-Allow-Origin

`Access-Control-Allow-Origin`은 어떤 origin의 요청을 허용할지 서버가 응답 Header로 알려주는 값입니다.

예:

```text
Access-Control-Allow-Origin: https://example.github.io
```

이 Header는 “`https://example.github.io`에서 온 브라우저 JavaScript 요청은 응답을 읽어도 된다”는 의미입니다.

간단한 공개 API에서는 아래처럼 모든 origin을 허용하는 경우도 있습니다.

```text
Access-Control-Allow-Origin: *
```

하지만 `*`가 언제나 좋은 해결책은 아닙니다. 사용자 인증 정보, 쿠키, 민감한 데이터가 관련되면 더 신중한 설정이 필요합니다. 이 문서에서는 깊게 다루지 않고 이후 Reference 또는 보안 문서에서 나눠 봅니다.

### Preflight

Preflight는 실제 요청 전에 브라우저가 이 요청을 보내도 되는지 확인하기 위해 보내는 사전 요청입니다.

브라우저는 요청 Method, Header, Content-Type 등의 조건을 보고 “이 요청은 먼저 확인이 필요하다”고 판단할 수 있습니다.

### OPTIONS

`OPTIONS`는 preflight에서 자주 사용되는 HTTP Method입니다.

브라우저는 실제 요청을 보내기 전에 API 서버에 대략 이렇게 묻습니다.

```text
OPTIONS /api/data HTTP/1.1
Origin: https://example.github.io
Access-Control-Request-Method: POST
```

서버가 허용한다면 응답 Header로 허용 범위를 알려줍니다.

```text
Access-Control-Allow-Origin: https://example.github.io
Access-Control-Allow-Methods: GET, POST
```

그 뒤 브라우저가 실제 요청을 이어서 보낼 수 있습니다.

### 요청 자체 실패와 응답 접근 차단

CORS를 이해할 때는 두 상황을 구분해야 합니다.

요청 자체가 서버에 도착하지 않은 경우:

- 네트워크 문제
- URL 오류
- 서버 장애
- DNS 문제

요청은 갔지만 브라우저가 응답을 JavaScript에 넘기지 않는 경우:

- API 서버가 CORS 허용 Header를 보내지 않음
- API 서버가 현재 origin을 허용하지 않음
- Preflight 요청에 올바르게 응답하지 않음

두 경우 모두 화면에서는 “API 호출 실패”처럼 보일 수 있지만 원인은 다릅니다.

## 4. 실제 동작 과정

GitHub Pages 같은 정적 웹페이지에서 외부 API를 호출하는 흐름은 대략 이렇습니다.

1. 사용자가 GitHub Pages 같은 웹페이지를 연다.
2. 브라우저는 이 페이지의 origin을 기억한다.
3. JavaScript가 다른 origin의 API 서버에 요청을 보낸다.
4. 브라우저는 이 요청이 cross-origin 요청인지 판단한다.
5. 요청 조건에 따라 브라우저가 먼저 preflight 요청을 보낼 수 있다.
6. API 서버는 CORS 허용 Header를 응답한다.
7. 브라우저는 응답 Header를 보고 JavaScript가 응답 내용을 읽어도 되는지 판단한다.
8. 허용되면 JavaScript가 응답 데이터를 받아 화면을 업데이트한다.
9. 허용되지 않으면 브라우저가 CORS 에러를 발생시키고 JavaScript가 응답 내용을 읽지 못하게 한다.

간단한 예시는 이렇게 볼 수 있습니다.

```text
웹페이지 origin:
https://example.github.io

API 서버:
https://api.example.com
```

웹페이지와 API 서버의 origin이 다르므로 이 요청은 cross-origin 요청입니다.

API 서버가 아래 Header를 응답하면:

```text
Access-Control-Allow-Origin: https://example.github.io
```

브라우저는 `https://example.github.io`에서 실행되는 JavaScript가 응답을 읽어도 된다고 판단할 수 있습니다.

하지만 서버가 해당 Header를 보내지 않거나 다른 origin만 허용하면, 브라우저는 응답 내용을 JavaScript에 넘기지 않습니다. 이때 개발자 도구 Console에서 CORS 에러를 볼 수 있습니다.

## 5. 자주 하는 오해

### CORS는 서버 에러다

꼭 그렇지는 않습니다. 서버가 정상 응답을 보냈더라도 브라우저가 CORS 정책 때문에 JavaScript에게 응답 내용을 넘겨주지 않을 수 있습니다.

### CORS는 JavaScript 코드만 고치면 해결된다

대부분은 아닙니다. CORS 허용 여부는 API 서버가 응답 Header로 알려줘야 합니다. JavaScript 코드만 바꿔서 서버의 허용 정책을 대신 만들 수는 없습니다.

### 브라우저가 요청 자체를 항상 보내지 않는다

상황에 따라 다릅니다. 단순 요청은 서버에 도착할 수 있고, preflight가 필요한 요청은 실제 요청 전에 `OPTIONS` 요청을 먼저 보낼 수 있습니다. CORS 문제는 “요청이 아예 안 갔다”와 “응답을 JavaScript가 읽지 못했다”를 나눠 봐야 합니다.

### Postman이나 curl에서는 되는데 브라우저에서 안 되면 API가 고장난 것이다

아닙니다. CORS는 브라우저가 적용하는 보안 규칙입니다. Postman이나 curl은 브라우저의 Same-Origin Policy를 그대로 적용하지 않기 때문에, 서버에서는 되지만 브라우저 JavaScript에서는 막힐 수 있습니다.

### 모든 API는 아무 웹사이트에서나 호출할 수 있어야 한다

아닙니다. API 서버는 어떤 origin의 브라우저 요청을 허용할지 정할 수 있습니다. 민감한 데이터나 사용자 상태가 관련될수록 아무 origin이나 허용하면 위험할 수 있습니다.

### Access-Control-Allow-Origin: * 를 쓰면 언제나 좋은 해결책이다

아닙니다. 공개 데이터처럼 모든 웹페이지에서 읽어도 되는 응답에는 적절할 수 있지만, 인증 정보나 민감한 데이터가 관련되면 무조건적인 `*`는 좋은 기준이 아닙니다.

### GitHub Pages에서 API를 호출할 수 없다는 뜻이다

아닙니다. GitHub Pages에서 실행되는 JavaScript는 외부 API를 호출할 수 있습니다. 다만 외부 API 서버가 해당 origin을 허용하지 않으면 브라우저가 응답 접근을 막을 수 있습니다.

## 6. 프로젝트 적용 예시

### Potato's Day

Potato's Day가 현재처럼 정적 파일 중심으로 동작한다면 CORS 문제가 크게 드러나지 않을 수 있습니다.

하지만 나중에 외부 API, 저장 서버, 랭킹 서버, 사용자 메시지 서버를 브라우저에서 직접 호출한다면 해당 API 서버가 Potato's Day의 origin을 허용해야 합니다.

### Living Aegis Origin

Living Aegis Origin에서 게임 랭킹, 설정 저장, 시뮬레이션 데이터 조회 같은 외부 API를 브라우저에서 호출한다면 API 서버가 해당 origin을 허용해야 합니다.

허용 Header가 없으면 서버가 데이터를 돌려주더라도 브라우저가 JavaScript에 응답을 넘기지 않을 수 있습니다. 그러면 게임 UI는 데이터를 받은 것처럼 업데이트할 수 없습니다.

### 공공데이터 기반 서비스

GitHub Pages에서 실행되는 JavaScript가 공공데이터 API를 직접 호출할 수 있습니다.

하지만 해당 공공데이터 API가 브라우저 요청을 허용하지 않으면 CORS 에러가 발생할 수 있습니다. 이 경우 선택지는 대략 두 가지입니다.

- 브라우저에서 직접 호출 가능한 API인지 확인한다.
- 직접 호출이 막혀 있다면 Serverless Proxy나 별도 백엔드를 통해 서버에서 API를 호출한다.

GitHub Pages는 정적 파일을 제공할 수 있고, GitHub Pages에서 실행되는 JavaScript는 외부 API를 호출할 수 있습니다. 하지만 외부 API 서버가 해당 origin을 허용하지 않으면 브라우저가 응답 접근을 막을 수 있습니다.

## 7. 실습 과제

1. 임의의 웹페이지 URL에서 protocol, domain, port를 나눠 origin을 적어봅니다.
2. `https://example.github.io`와 `https://api.example.com`이 왜 다른 origin인지 설명해 봅니다.
3. 개발자 도구 Network 탭에서 API 요청이 서버에 도착했는지, Console에 CORS 에러가 있는지 구분해 봅니다.
4. CORS 에러가 발생했을 때 JavaScript 코드, API URL, 서버 응답 Header 중 어디를 확인해야 할지 순서대로 적어봅니다.
5. `Access-Control-Allow-Origin: *`가 적절한 경우와 위험할 수 있는 경우를 나눠 봅니다.
6. GitHub Pages에서 공공데이터 API를 직접 호출하지 못할 때 Serverless Proxy가 왜 도움이 되는지 설명해 봅니다.

## 8. 다음 문서와의 연결

WEB-010에서는 서버를 직접 운영하지 않고 코드를 실행하는 Serverless 개념을 살펴봅니다.

CORS를 이해하면 GitHub Pages 같은 정적 사이트에서 외부 API를 직접 호출할 수 있는 경우와, Serverless Proxy나 별도 백엔드가 필요한 경우를 더 잘 구분할 수 있습니다.

인증, 쿠키, 세션, OAuth, JWT, 보안 Header 전체는 이번 문서에서 깊게 다루지 않고 이후 Reference 또는 별도 Guide로 나눕니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-11 | WEB-009 초기 Learning Guide 작성 | 공공데이터 API가 브라우저 직접 호출을 허용하지 않을 때 Serverless Proxy는 어떤 정보를 대신 받아오고 무엇을 숨겨야 하는가? |
