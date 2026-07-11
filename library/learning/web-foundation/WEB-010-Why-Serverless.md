---
title: WEB-010. Why Serverless
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-010-Why-Serverless.md
copy_type: source
last_reviewed: 2026-07-11
print_friendly: true
---

# WEB-010. Serverless는 왜 서버가 없는 서버라고 불릴까?

## 부제: 서버를 없애는 기술이 아니라, 서버 운영을 맡기는 방식

> Serverless는 서버가 존재하지 않는다는 뜻이 아닙니다.
> 서버는 실제로 존재하지만, 개발자가 직접 설치하고 운영하지 않는 구조를 뜻합니다.

핵심 질문은 이것입니다.

> 정적 웹페이지는 서버 기능이 필요할 때 왜 Serverless를 선택할 수 있는가?

## 1. 학습 목표

이 문서를 읽고 나면 다음 질문에 답할 수 있어야 합니다.

- Serverless가 왜 등장했는지 이해합니다.
- Serverless Function을 “필요할 때 실행되는 작은 backend 함수”로 설명합니다.
- GitHub Pages 같은 정적 사이트가 할 수 있는 일과 할 수 없는 일을 구분합니다.
- API Key 보호, 외부 API 대신 호출, form 처리, 데이터 저장처럼 backend 기능이 필요한 상황을 설명합니다.
- GitHub Pages와 Serverless를 어떻게 조합할 수 있는지 이해합니다.
- Serverless의 장점과 한계를 함께 봅니다.

## 2. 왜 Serverless가 필요한가

정적 웹사이트는 HTML, CSS, JavaScript만으로도 많은 일을 할 수 있습니다.

하지만 다음 기능은 브라우저만으로 처리하기 어렵거나 위험합니다.

- 비밀 API Key 숨기기
- 외부 API 요청을 대신 처리하기
- 사용자의 form 제출 받기
- 요청 검증하기
- 데이터 저장과 변경 처리하기
- 로그인, 결제, 인증 서비스와 연동하기

예를 들어 GitHub Pages의 JavaScript 파일에 API Key를 넣으면 그 파일은 사용자 브라우저로 그대로 전달됩니다.

```javascript
const API_KEY = "my-secret-key";
```

이렇게 작성하면 개발자 도구에서 누구나 확인할 수 있습니다. 즉, 비밀값을 브라우저에 직접 두면 비밀이 아닙니다.

전통적으로는 이런 문제를 해결하기 위해 직접 서버를 준비하고 운영했습니다.

- 운영체제 설치
- 실행 환경 설치
- 웹 서버 설정
- 보안 업데이트
- 장애 감시
- 트래픽 대응
- 백업과 배포

작은 기능 하나를 위해서도 관리해야 할 것이 많았습니다.

Serverless는 이 부담을 줄이기 위한 선택지입니다. 개발자는 필요한 함수 중심으로 코드를 작성하고, 서버 준비와 운영은 플랫폼에 맡깁니다.

```text
서버가 없다 ❌
서버를 내가 직접 관리하지 않는다 ✅
```

## 3. 핵심 개념

### Serverless

Serverless는 서버가 전혀 없다는 뜻이 아닙니다.

실제 서버와 실행 환경은 존재합니다. 다만 개발자가 서버를 직접 설치하고 계속 운영하기보다, 플랫폼이 실행 환경, 확장, 요청 분배 같은 운영 일을 맡는 방식입니다.

### Serverless Function

Serverless Function은 특정 HTTP 요청이 들어올 때 실행되는 작은 backend 함수입니다.

예:

```text
GET /api/weather
POST /api/contact
POST /api/scores
```

브라우저는 이 endpoint에 HTTP 요청을 보내고, Serverless Function은 필요한 처리를 한 뒤 JSON 같은 응답을 돌려줄 수 있습니다.

### API endpoint로서의 Serverless Function

Serverless Function은 브라우저 입장에서는 API endpoint처럼 보입니다.

```text
브라우저
   │ fetch("/api/weather")
   ▼
Serverless Function
   │ 외부 API 호출 또는 데이터 처리
   ▼
JSON 응답
```

이 endpoint는 외부 API 호출, 요청 검증, 응답 가공, form 처리 같은 backend 역할을 수행할 수 있습니다.

### GitHub Pages와 Serverless

GitHub Pages는 정적 파일 배포에 적합하지만 서버 코드를 실행할 수 없습니다.

```text
GitHub Pages
   ├── HTML
   ├── CSS
   ├── JavaScript
   └── 화면과 사용자 인터페이스

Serverless
   ├── API Key 보호
   ├── 외부 API 호출
   ├── 요청 검증
   └── 응답 가공
```

GitHub Pages는 화면을 제공하고, Serverless는 필요한 backend 기능을 맡는 식으로 역할을 나눌 수 있습니다.

### Serverless와 DB

Serverless를 사용한다고 데이터베이스가 자동으로 생기는 것은 아닙니다.

```text
GitHub Pages + Serverless + 외부 API
```

만으로도 데이터베이스 없는 서비스를 만들 수 있습니다.

DB가 필요한 경우는 보통 이런 상황입니다.

- 사용자 계정
- 즐겨찾기
- 검색 기록
- 댓글과 게시글
- 통계 누적
- 공유되는 상태

단순 조회형 공공데이터 서비스라면 DB 없이 시작할 수 있습니다.

### Stateless와 Cold Start

Serverless Function은 요청을 처리한 뒤 실행이 종료될 수 있습니다.

```text
요청 1
  ↓
함수 실행
  ↓
응답
  ↓
실행 종료 가능
```

영구적으로 보관할 데이터는 함수 메모리가 아니라 데이터베이스나 외부 저장소에 넣어야 합니다.

또 오랫동안 사용되지 않은 함수는 실행 환경을 새로 준비해야 할 수 있습니다. 이 첫 실행 지연을 Cold Start라고 부릅니다.

### 대표 서비스

Serverless를 제공하는 서비스는 여러 가지가 있습니다.

- Vercel Functions
- Netlify Functions
- Cloudflare Workers
- AWS Lambda
- Supabase
- Firebase

이 문서에서는 특정 서비스 사용법보다 공통 원리를 우선합니다.

## 4. 실제 동작 과정

정적 웹페이지가 Serverless를 사용하는 흐름은 대략 이렇습니다.

1. 사용자가 GitHub Pages에서 제공되는 정적 웹페이지를 연다.
2. 브라우저가 HTML, CSS, JavaScript를 받아 실행한다.
3. JavaScript가 어떤 서버 기능을 필요로 한다.
   - 데이터를 저장해야 한다.
   - 비밀 API key를 사용해야 한다.
   - 외부 API 요청을 대신 처리해야 한다.
   - 사용자의 form 제출을 받아야 한다.
4. 정적 웹페이지만으로는 이 기능을 안전하게 처리하기 어렵다.
5. 이때 Serverless Function이 작은 backend endpoint 역할을 할 수 있다.
6. 브라우저는 Serverless endpoint에 HTTP 요청을 보낸다.
7. Serverless Function은 필요한 처리를 수행한다.
8. 결과를 JSON 등으로 브라우저에 응답한다.
9. 브라우저는 응답을 받아 화면을 업데이트한다.

API Key를 보호하면서 외부 API를 호출하는 흐름은 이렇게 볼 수 있습니다.

```text
GitHub Pages page
  ↓ fetch
Serverless Function
  ↓ secure request with API key
External API
  ↓ JSON response
Serverless Function
  ↓ safe response
Browser
```

이 구조에서 브라우저는 비밀 API Key를 직접 갖지 않습니다. Serverless Function이 중간에서 외부 API 요청을 대신 처리하고, 브라우저는 필요한 결과만 JSON으로 받아 화면을 업데이트합니다.

서버끼리의 통신에는 브라우저의 Same-Origin Policy가 적용되지 않기 때문에, Serverless Proxy는 API Key 노출과 CORS 문제를 함께 완화할 수 있습니다. 다만 브라우저와 Serverless Function 사이에는 여전히 적절한 CORS 설정이 필요할 수 있습니다.

## 5. 자주 하는 오해

### Serverless는 서버가 전혀 없다는 뜻이다

아닙니다. 서버는 존재하지만 플랫폼이 관리합니다.

### GitHub Pages만으로 모든 backend 기능을 만들 수 있다

아닙니다. GitHub Pages는 정적 파일 제공에 적합합니다. 서버 코드 실행, 비밀값 보호, 데이터 저장 같은 기능은 별도 backend나 Serverless가 필요할 수 있습니다.

### API key를 JavaScript 파일 안에 넣어도 괜찮다

아닙니다. 브라우저로 전달되는 JavaScript 안의 값은 사용자가 확인할 수 있습니다. 비밀 API Key는 서버나 Serverless 환경 변수 같은 곳에서 다루는 편이 안전합니다.

### Serverless를 쓰면 보안이나 비용을 신경 쓰지 않아도 된다

아닙니다. 요청 검증, 권한, 비용, 호출 제한, 데이터 보호는 여전히 설계해야 합니다.

### Serverless는 항상 전통적인 서버보다 좋다

아닙니다. 작은 기능이나 이벤트 기반 처리에는 유용하지만, 긴 실행 시간, 복잡한 상태 관리, 특수한 서버 환경이 필요한 경우에는 전통적인 서버가 더 적합할 수 있습니다.

### 정적 사이트는 외부 API를 호출할 수 없다

아닙니다. 브라우저 JavaScript는 외부 API를 호출할 수 있습니다. 다만 CORS, API Key 노출, 인증 같은 문제를 고려해야 합니다.

### Serverless를 쓰면 CORS 문제가 항상 사라진다

아닙니다. 외부 API와 Serverless 사이에는 브라우저 CORS가 적용되지 않지만, 브라우저와 Serverless Function 사이의 CORS 설정은 여전히 필요할 수 있습니다.

## 6. 프로젝트 적용 예시

### Potato's Day

현재 Potato's Day는 GitHub Pages 정적 파일 중심으로 충분히 동작할 수 있습니다.

나중에 플레이 기록 저장, 사용자별 상태 저장, 온라인 랭킹, 외부 데이터 연동이 필요해지면 Serverless Function을 고려할 수 있습니다.

### Living Aegis Origin

Living Aegis Origin에 랭킹 저장, 시뮬레이션 결과 저장, 게임 설정 동기화, 외부 데이터 조회 같은 기능이 생기면 Serverless backend를 붙일 수 있습니다.

게임 화면은 GitHub Pages에서 제공하고, 점수 등록이나 데이터 조회는 Serverless endpoint가 맡는 식으로 역할을 나눌 수 있습니다.

### 공공데이터 기반 서비스

공공데이터 기반 서비스는 Serverless의 가장 직접적인 사용 사례입니다.

- 공공데이터 API 호출
- 인증키 보호
- CORS 문제 완화
- 응답 형식 정리

단순 조회형 서비스라면 DB 없이 `GitHub Pages + Serverless + 공공데이터 API` 구조로 시작할 수 있습니다.

### Project Reading Room

Project Reading Room은 현재 정적 Markdown Reading Room으로 충분합니다.

하지만 나중에 문서 검색 인덱스 생성, 사용자별 읽기 상태, 서버 기반 PDF 생성, 대용량 문서 처리 같은 기능이 필요해지면 Serverless를 검토할 수 있습니다.

## 7. 실습 과제

1. GitHub Pages 프로젝트에서 브라우저만으로 처리해도 되는 기능과 서버 기능이 필요한 기능을 나눠 봅니다.
2. JavaScript 파일 안에 API Key를 넣으면 왜 숨길 수 없는지 설명해 봅니다.
3. 조회 전용 공공데이터 서비스에 DB가 없어도 되는 이유를 적어봅니다.
4. Serverless Function의 메모리에 정보를 계속 저장하면 왜 위험한지 설명해 봅니다.
5. `GitHub Pages + Serverless Proxy + External API` 흐름을 손으로 그려봅니다.
6. Serverless를 쓰더라도 CORS, 비용, 요청 검증을 생각해야 하는 이유를 정리해 봅니다.

## 8. 다음 문서와의 연결

WEB-011에서는 지금까지 배운 기술을 GitHub Pages 기반 서비스 구조로 조합합니다.

```text
GitHub Pages
+
JavaScript
+
REST API
+
CORS
+
Serverless Proxy
+
Optional Database
```

다음 문서에서는 정적 파일이 GitHub Pages를 통해 어떻게 웹사이트가 되고, Project Reading Room 같은 앱이 그 위에서 어떻게 동작하는지 살펴봅니다.

## 9. 변경 이력 및 학습 메모

| 날짜 | 변경 내용 | 후속 질문 |
| --- | --- | --- |
| 2026-07-11 | WEB-010 초기 Learning Guide 작성 | GitHub Pages와 Serverless Proxy 사이의 CORS 설정은 언제 필요하며 어떻게 확인할 수 있는가? |
