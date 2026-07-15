---
title: Web Reference Index
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB_REFERENCE_INDEX.md
copy_type: source
last_reviewed: 2026-07-15
print_friendly: true
---

# Web Reference Index

## 부제: 웹 기초 개념이 어느 Guide에 설명되어 있는지 빠르게 찾기

> 이 문서는 새로운 개념을 처음부터 설명하는 교재가 아니라,
> 특정 용어와 개념이 어느 Guide에 있는지 찾아가는 색인입니다.

---

## 1. 이 문서의 역할

Web Foundation Learning의 세 인덱스 문서는 서로 다른 역할을 가집니다.

```text
README.md
Learning Track의 목적과 현재 상태

LEARNING_PATH.md
Part·Category·Guide의 학습 순서와 완료 기준

WEB_REFERENCE_INDEX.md
용어와 개념이 설명된 Guide의 위치
```

Track 전체 소개는 [README.md](./README.md)에서, 학습 순서는 [LEARNING_PATH.md](./LEARNING_PATH.md)에서 확인합니다.

이 문서는 다음 상황에서 사용합니다.

- 기억나지 않는 용어를 다시 찾을 때
- 비슷한 개념의 차이를 비교할 때
- 하나의 개념이 여러 Guide에서 어떻게 연결되는지 확인할 때
- Category별 핵심 개념을 빠르게 복습할 때
- UI v3에서 관련 Guide로 이동할 때

---

## 2. 사용 방법

### 학습 순서가 궁금할 때

[LEARNING_PATH.md](./LEARNING_PATH.md)를 먼저 확인합니다.

### 특정 용어가 궁금할 때

이 문서의 **용어별 색인**에서 찾습니다.

### 한 Guide가 다루는 개념을 확인할 때

**문서별 색인**을 사용합니다.

### 관련 개념을 묶어서 복습할 때

**Category별 색인**을 사용합니다.

---

## 3. 표기 기준

### 주요 문서

해당 개념을 중심적으로 설명하는 Guide입니다.

### 관련 문서

같은 개념을 다른 흐름이나 사례에서 다시 사용하는 Guide입니다.

예:

```text
직렬화

주요 문서
WEB-007 — 직렬화와 UTF-8 인코딩의 차이

관련 문서
WEB-008 — REST API 응답에서 객체를 JSON으로 직렬화하는 과정
```

---

# Part I — 문서별 색인

## 4. 전체 Guide 목록

| Guide | Category | 핵심 주제 |
|---|---|---|
| [WEB-001. How the Web Works](./WEB-001-How-the-Web-Works.md) | 웹의 구조 | 웹, 클라이언트, 서버, URL, DNS, 요청과 응답 |
| [WEB-002. What Is a Browser](./WEB-002-What-Is-a-Browser.md) | 웹의 구조 | 브라우저, 렌더링 엔진, JavaScript 엔진, 개발자 도구 |
| [WEB-003. What Is HTML](./WEB-003-What-Is-HTML.md) | 문서와 표현 | HTML, HyperText, Markup, 문서 구조, Semantic HTML |
| [WEB-004. Why CSS](./WEB-004-Why-CSS.md) | 문서와 표현 | CSS, 선택자, 상속, 우선순위, 반응형 표현 |
| [WEB-005. Why JavaScript](./WEB-005-Why-JavaScript.md) | 동작과 렌더링 | JavaScript, 이벤트, 상태, DOM 조작 |
| [WEB-006. How Browser Builds a Page](./WEB-006-How-Browser-Builds-a-Page.md) | 동작과 렌더링 | DOM, CSSOM, Render Tree, Layout, Paint |
| [WEB-007. How HTTP Works](./WEB-007-How-HTTP-Works.md) | 통신과 API | HTTP, 바이트, UTF-8, JSON, 직렬화, Base64 |
| [WEB-008. Why REST API](./WEB-008-Why-REST-API.md) | 통신과 API | API, REST, Resource, Path, DTO, Representation |
| [WEB-009. Why CORS](./WEB-009-Why-CORS.md) | 통신과 API | Origin, SOP, CORS, Preflight, OPTIONS |
| [WEB-010. Why Serverless](./WEB-010-Why-Serverless.md) | 배포와 서비스 아키텍처 | Serverless, Function, Proxy, 환경 변수, Cold Start |
| [WEB-011. GitHub Pages Architecture](./WEB-011-GitHub-Pages-Architecture.md) | 배포와 서비스 아키텍처 | GitHub Pages, 외부 API, DB, Browser Storage, 계층 배치 |

---

## 5. [WEB-001. How the Web Works](./WEB-001-How-the-Web-Works.md)

### 주요 개념

```text
Web
Client
Server
URL
Domain
DNS
IP Address
Request
Response
HTTP
Resource
Static Hosting
GitHub Pages
```

### 이 Guide에서 확인할 질문

- 주소를 입력한 뒤 웹페이지가 표시되기까지 어떤 일이 일어나는가?
- 브라우저와 서버는 어떤 역할을 맡는가?
- URL, Domain, DNS, IP Address는 어떻게 연결되는가?
- 웹페이지 하나를 열 때 왜 여러 파일을 요청하는가?
- GitHub Pages는 어떤 방식으로 정적 파일을 제공하는가?

### 관련 Guide

```text
WEB-002
브라우저가 받은 파일을 처리하는 과정

WEB-007
HTTP Request와 Response의 구체적인 구조

WEB-011
GitHub Pages를 실제 서비스 구조에 배치하는 방법
```

---

## 6. [WEB-002. What Is a Browser](./WEB-002-What-Is-a-Browser.md)

### 주요 개념

```text
Browser
User Agent
Rendering Engine
JavaScript Engine
Network
Storage
Developer Tools
Security Sandbox
```

### 이 Guide에서 확인할 질문

- 브라우저는 단순한 문서 뷰어인가?
- 브라우저는 네트워크 요청과 화면 렌더링을 어떻게 함께 처리하는가?
- 렌더링 엔진과 JavaScript 엔진은 어떻게 다른가?
- 개발자 도구는 무엇을 관찰할 수 있는가?
- 브라우저가 보안 정책을 적용하는 이유는 무엇인가?

### 관련 Guide

```text
WEB-006
브라우저 렌더링 과정

WEB-009
브라우저의 Same-Origin Policy와 CORS

WEB-011
브라우저가 서비스 아키텍처에서 담당하는 역할
```

---

## 7. [WEB-003. What Is HTML](./WEB-003-What-Is-HTML.md)

### 주요 개념

```text
HTML
HyperText
Markup
Element
Tag
Attribute
Document Structure
Semantic HTML
Link
```

### 이 Guide에서 확인할 질문

- HTML은 왜 프로그래밍 언어보다 문서 구조 언어에 가까운가?
- HyperText와 Markup은 각각 무엇을 의미하는가?
- Element, Tag, Attribute는 어떻게 다른가?
- 제목, 문단, 목록, 링크를 서로 다른 요소로 표현하는 이유는 무엇인가?
- Semantic HTML은 왜 필요한가?

### 관련 Guide

```text
WEB-004
HTML의 구조와 CSS의 표현 분리

WEB-005
JavaScript가 HTML 문서를 변경하는 방식

WEB-006
HTML이 DOM으로 변환되는 과정
```

---

## 8. [WEB-004. Why CSS](./WEB-004-Why-CSS.md)

### 주요 개념

```text
CSS
Style
Selector
Property
Value
Cascade
Inheritance
Specificity
Responsive Design
Media Query
```

### 이 Guide에서 확인할 질문

- HTML에서 디자인을 분리한 이유는 무엇인가?
- 선택자는 어떤 요소에 스타일을 적용할지 어떻게 결정하는가?
- Cascade, Inheritance, Specificity는 어떻게 다른가?
- 여러 문서에 같은 디자인을 재사용할 수 있는 이유는 무엇인가?
- 반응형 표현은 왜 필요한가?

### 관련 Guide

```text
WEB-003
문서 구조와 의미

WEB-006
CSS가 CSSOM과 Render Tree에 참여하는 과정

WEB-011
GitHub Pages에서 정적 UI를 구성하는 역할
```

---

## 9. [WEB-005. Why JavaScript](./WEB-005-Why-JavaScript.md)

### 주요 개념

```text
JavaScript
Event
Event Handler
State
DOM Manipulation
Interaction
Dynamic Page
Fetch
Web Application
```

### 이 Guide에서 확인할 질문

- HTML과 CSS만으로 부족했던 것은 무엇인가?
- 사용자 입력은 이벤트로 어떻게 전달되는가?
- 상태가 바뀌면 화면은 어떻게 변경되는가?
- JavaScript는 HTML과 CSS에 어떻게 접근하는가?
- 정적인 문서가 웹 애플리케이션으로 발전한 이유는 무엇인가?

### 관련 Guide

```text
WEB-006
JavaScript 변경이 렌더링에 미치는 영향

WEB-007
JavaScript가 HTTP를 통해 데이터를 주고받는 구조

WEB-011
브라우저 JavaScript에 적합한 기능과 부적합한 기능
```

---

## 10. [WEB-006. How Browser Builds a Page](./WEB-006-How-Browser-Builds-a-Page.md)

### 주요 개념

```text
Parsing
DOM
CSSOM
Render Tree
Layout
Paint
Composite
Reflow
Repaint
Rendering Pipeline
```

### 이 Guide에서 확인할 질문

- HTML 파일과 DOM은 왜 같은 것이 아닌가?
- CSSOM은 무엇인가?
- Render Tree는 DOM과 어떻게 다른가?
- Layout과 Paint는 각각 무엇을 계산하는가?
- JavaScript의 DOM 변경이 화면 갱신으로 이어지는 과정은 무엇인가?

### 관련 Guide

```text
WEB-002
브라우저 전체 구조

WEB-003
HTML 문서 구조

WEB-004
CSS 표현 규칙

WEB-005
JavaScript의 DOM 조작
```

---

## 11. [WEB-007. How HTTP Works](./WEB-007-How-HTTP-Works.md)

### 주요 개념

```text
HTTP
Request
Response
Header
Body
Status Code
Content-Type
Byte
Text
Binary
ASCII
Unicode
UTF-8
Encoding
Decoding
JSON
Serialization
Deserialization
Parsing
Base64
multipart/form-data
Stateless
```

### 이 Guide에서 확인할 질문

- HTTP는 실제로 무엇을 전달하는가?
- 텍스트와 바이너리는 어떻게 다른가?
- Unicode와 UTF-8은 어떻게 다른가?
- JSON 직렬화와 UTF-8 인코딩은 왜 서로 다른 단계인가?
- Base64는 무엇을 무엇으로 바꾸는가?
- `Content-Type`은 왜 필요한가?
- 이미지와 HTML은 한 요청으로 함께 오는가?
- `multipart/form-data`는 언제 사용하는가?

### 관련 Guide

```text
WEB-001
웹의 Request와 Response 기본 구조

WEB-008
REST API 응답의 JSON 직렬화

WEB-009
교차 Origin HTTP 요청과 응답 공개

WEB-010
Serverless Proxy가 HTTP 요청을 중계하는 과정
```

---

## 12. [WEB-008. Why REST API](./WEB-008-Why-REST-API.md)

### 주요 개념

```text
API
REST
RESTful
Resource
Collection
URL
Path
Path Variable
Path Parameter
Query String
Query Parameter
HTTP Method
GET
POST
PUT
PATCH
DELETE
RPC
Representation
Presentation
View
Entity
DTO
Response DTO
Serialization
Status Code
Client–Server
Stateless
```

### 이 Guide에서 확인할 질문

- HTTP와 REST는 어떻게 다른가?
- REST는 왜 자원을 중심으로 설계하는가?
- URL 전체와 Path는 어떻게 구분하는가?
- Path Variable과 Query Parameter는 어떤 역할 차이가 있는가?
- REST 스타일과 RPC 스타일은 어떻게 다른가?
- Servlet·JSP와 REST API는 왜 직접 반대되는 기술이 아닌가?
- REST의 Representation은 왜 화면 표현이 아닌가?
- Entity와 Response DTO를 분리하는 이유는 무엇인가?

### 관련 Guide

```text
WEB-007
HTTP, JSON, 직렬화

WEB-009
브라우저가 REST API 응답을 읽을 때의 CORS

WEB-011
REST API를 서비스 아키텍처에 배치하는 방법
```

---

## 13. [WEB-009. Why CORS](./WEB-009-Why-CORS.md)

### 주요 개념

```text
Origin
Scheme
Host
Port
Same-Origin Policy
SOP
Cross-Origin
CORS
Access-Control-Allow-Origin
Simple Request
Preflight
OPTIONS
Authorization Header
Credentials
Authentication
Authorization
Browser Security
```

### 이 Guide에서 확인할 질문

- Origin은 어떤 요소로 구성되는가?
- Same-Origin Policy는 무엇을 보호하는가?
- CORS는 요청 자체를 막는가, 응답 읽기를 막는가?
- 요청과 응답이 실제로 오갔는데 JavaScript가 데이터를 읽지 못할 수 있는 이유는 무엇인가?
- Preflight는 왜 `OPTIONS` 요청을 사용하는가?
- Preflight가 실패하면 실제 요청은 어떻게 되는가?
- CORS와 인증·권한은 어떻게 다른가?
- 같은 API가 브라우저에서는 실패하고 서버에서는 성공하는 이유는 무엇인가?

### 관련 Guide

```text
WEB-002
브라우저 보안 환경

WEB-007
HTTP Request, Response, Header

WEB-010
Serverless Proxy를 통한 CORS 대응

WEB-011
브라우저와 Proxy 사이의 CORS 구간
```

---

## 14. [WEB-010. Why Serverless](./WEB-010-Why-Serverless.md)

### 주요 개념

```text
Serverless
Cloud Platform
Function
Serverless Function
FaaS
Serverless Proxy
Proxy
Environment Variable
API Key
Deployment
Endpoint
Cold Start
Stateless
Execution Limit
Edge Function
BaaS
Cost
Scaling
```

### 이 Guide에서 확인할 질문

- 서버가 실제로 있는데 왜 Serverless라고 부르는가?
- 전용 서버와 함수 실행 환경은 어떻게 다른가?
- Serverless 서비스는 어떤 절차로 사용하는가?
- Serverless Function과 Serverless Proxy는 어떤 관계인가?
- 환경 변수는 왜 필요한가?
- API Key를 브라우저에 두면 왜 안 되는가?
- Cold Start는 무엇인가?
- 플랫폼이 기능을 지원하는 것과 Serverless에 적합한 것은 왜 다른가?
- 어떤 기능이 Serverless와 잘 맞지 않는가?

### 관련 Guide

```text
WEB-009
CORS와 Proxy

WEB-011
Serverless를 전체 서비스 구조에 배치하는 방법
```

---

## 15. [WEB-011. GitHub Pages Architecture](./WEB-011-GitHub-Pages-Architecture.md)

### 주요 개념

```text
Static Site
Dynamic Service
GitHub Pages
Browser
Frontend
External API
Serverless Proxy
Environment Variable
Database
Browser Storage
Local Storage
Session Storage
IndexedDB
General Server
Object Storage
Queue
Authentication
Authorization
Validation
Adapter
Error Handling
Logging
Observability
Architecture
Layer
Trust Boundary
```

### 이 Guide에서 확인할 질문

- GitHub Pages는 정적 호스팅인데 어떻게 동적인 서비스를 만들 수 있는가?
- 외부 API를 브라우저에서 직접 호출해도 되는 조건은 무엇인가?
- Serverless Proxy는 언제 추가해야 하는가?
- DB가 필요한 기능과 필요하지 않은 기능은 어떻게 구분하는가?
- Browser Storage와 Database는 어떻게 다른가?
- 일반 서버는 언제 필요한가?
- 브라우저 검증과 서버 검증은 왜 모두 필요한가?
- 새로운 기능을 어느 계층에 배치할지 어떻게 판단하는가?
- 작은 프로젝트는 어떤 순서로 확장하는 것이 좋은가?

### 관련 Guide

```text
WEB-001
GitHub Pages와 정적 호스팅

WEB-005
브라우저 JavaScript의 역할

WEB-008
REST API와 DTO

WEB-009
CORS

WEB-010
Serverless Function과 Proxy
```

---

# Part I — Category별 색인

## 16. Category 1 — 웹의 구조

### 포함 Guide

```text
WEB-001
WEB-002
```

### 핵심 개념

```text
Web
Client
Server
URL
Domain
DNS
IP Address
Browser
Rendering Engine
JavaScript Engine
Developer Tools
Static Hosting
GitHub Pages
```

### Category 연결 흐름

```text
사용자가 URL 입력
        ↓
DNS를 통해 서버 위치 확인
        ↓
브라우저가 서버에 요청
        ↓
서버가 파일 응답
        ↓
브라우저가 파일을 해석하고 실행
```

---

## 17. Category 2 — 문서와 표현

### 포함 Guide

```text
WEB-003
WEB-004
```

### 핵심 개념

```text
HTML
HyperText
Markup
Element
Attribute
Semantic HTML
CSS
Selector
Cascade
Inheritance
Specificity
Responsive Design
```

### Category 연결 흐름

```text
HTML
문서의 구조와 의미

CSS
문서의 시각적 표현

구조와 표현 분리
재사용과 유지보수
```

---

## 18. Category 3 — 동작과 렌더링

### 포함 Guide

```text
WEB-005
WEB-006
```

### 핵심 개념

```text
JavaScript
Event
State
DOM Manipulation
DOM
CSSOM
Render Tree
Layout
Paint
Composite
```

### Category 연결 흐름

```text
사용자 이벤트
        ↓
JavaScript 실행
        ↓
상태와 DOM 변경
        ↓
Render Tree 갱신
        ↓
Layout·Paint·Composite
        ↓
새로운 화면
```

---

## 19. Category 4 — 통신과 API

### 포함 Guide

```text
WEB-007
WEB-008
WEB-009
```

### 핵심 개념

```text
HTTP
Request
Response
Header
Body
Byte
UTF-8
JSON
Serialization
Base64
API
REST
Resource
Representation
Path Variable
Query Parameter
DTO
Origin
Same-Origin Policy
CORS
Preflight
OPTIONS
```

### Category 연결 흐름

```text
프로그램 객체
        ↓ JSON 직렬화
JSON 문자열
        ↓ UTF-8 인코딩
HTTP Body 바이트
        ↓
REST API 요청·응답
        ↓
브라우저의 CORS 검사
        ↓
JavaScript가 응답 사용
```

---

## 20. Category 5 — 배포와 서비스 아키텍처

### 포함 Guide

```text
WEB-010
WEB-011
```

### 핵심 개념

```text
Serverless
Serverless Function
Serverless Proxy
Environment Variable
API Key
Cold Start
GitHub Pages
External API
Database
Browser Storage
General Server
Architecture
Validation
Logging
```

### Category 연결 흐름

```text
GitHub Pages
화면과 정적 파일
        ↓
브라우저
사용자 입력과 화면 구성
        ↓
Serverless Proxy
비밀값·검증·중계
        ↓
외부 API 또는 Database
원본 데이터와 영구 상태
```

---

# Part I — 용어별 색인

## 21. A–C

### API

- **주요 문서:** WEB-008
- 프로그램이 다른 프로그램의 기능이나 데이터를 사용하기 위한 인터페이스
- 관련: REST API, 외부 API, Serverless Proxy

### API Key

- **주요 문서:** WEB-010
- **관련 문서:** WEB-011
- 외부 API 사용자를 식별하거나 사용 권한을 확인하는 비밀값
- 브라우저 JavaScript에 직접 넣지 않는 것이 원칙

### ASCII

- **주요 문서:** WEB-007
- 영문자, 숫자와 기본 기호를 표현하는 초기 문자 코드 체계
- UTF-8은 ASCII 범위와 호환됨

### Attribute

- **주요 문서:** WEB-003
- HTML 요소에 추가 정보를 제공하는 값

### Authorization

- **주요 문서:** WEB-009
- **관련 문서:** WEB-011
- 인증된 사용자가 특정 기능이나 데이터에 접근할 권한이 있는지 판단하는 과정
- CORS와는 별개의 보안 개념

### Base64

- **주요 문서:** WEB-007
- 임의의 바이트를 ASCII 문자로 이루어진 문자열로 표현하는 Binary-to-Text Encoding
- 일반적으로 원본보다 데이터 크기가 커짐

### BaaS

- **주요 문서:** WEB-010
- Backend as a Service
- 인증, DB, 파일 저장 같은 백엔드 기능을 서비스 형태로 제공

### Binary

- **주요 문서:** WEB-007
- 이미지, 음원, PDF 등 해당 파일 형식의 규칙으로 해석되는 바이트 데이터
- 텍스트와 물리적으로 다른 물질이 아니라 해석 방식이 다름

### Body

- **주요 문서:** WEB-007
- HTTP 메시지에서 실제 전달할 데이터가 들어가는 부분

### Browser

- **주요 문서:** WEB-002
- **관련 문서:** WEB-001, WEB-006, WEB-009, WEB-011
- 네트워크 요청, 문서 해석, JavaScript 실행, 화면 렌더링과 보안 정책을 담당

### Browser Storage

- **주요 문서:** WEB-011
- 브라우저 내부에 데이터를 저장하는 기술의 묶음
- Local Storage, Session Storage, IndexedDB 포함

### Byte

- **주요 문서:** WEB-007
- 네트워크와 저장 장치에서 데이터를 다루는 기본 단위
- HTTP는 본질적으로 바이트를 전달함

### Cache

- **관련 문서:** WEB-008, WEB-010, WEB-011
- 동일한 데이터나 결과를 다시 사용해 요청과 처리 비용을 줄이는 방식

### Cascade

- **주요 문서:** WEB-004
- 여러 CSS 규칙이 충돌할 때 최종 스타일을 결정하는 과정

### Client

- **주요 문서:** WEB-001
- **관련 문서:** WEB-008
- 서버에 요청하고 응답을 사용하는 프로그램
- 웹에서는 주로 브라우저가 클라이언트 역할을 함

### Client–Server

- **주요 문서:** WEB-008
- 화면과 사용자 경험을 담당하는 클라이언트와 데이터·업무 처리를 담당하는 서버의 역할 분리

### Cold Start

- **주요 문서:** WEB-010
- 오랫동안 실행되지 않은 Serverless Function의 실행 환경을 새로 준비하면서 생길 수 있는 초기 지연

### Composite

- **주요 문서:** WEB-006
- 여러 그리기 결과와 레이어를 조합해 최종 화면을 만드는 렌더링 단계

### Content-Type

- **주요 문서:** WEB-007
- HTTP Body의 바이트를 어떤 데이터 형식으로 해석할지 알려주는 Header

### CORS

- **주요 문서:** WEB-009
- Cross-Origin Resource Sharing
- 서버가 어떤 Origin의 브라우저 JavaScript에 응답을 공개할지 선언하는 방식

### CSS

- **주요 문서:** WEB-004
- HTML 문서의 시각적 표현을 정의하는 언어

### CSSOM

- **주요 문서:** WEB-006
- 브라우저가 CSS를 파싱하여 만든 객체 구조

---

## 22. D–H

### Database

- **주요 문서:** WEB-011
- **관련 문서:** WEB-010
- 사용자별·공유·영구 데이터를 저장할 때 사용하는 시스템
- 모든 동적 서비스에 반드시 필요한 것은 아님

### Decoding

- **주요 문서:** WEB-007
- 인코딩된 데이터를 원래 해석 가능한 형태로 되돌리는 과정
- 예: UTF-8 바이트 → 문자열

### Deserialization

- **주요 문서:** WEB-007
- **관련 문서:** WEB-008
- 전송이나 저장 형식의 데이터를 프로그램 내부 객체로 재구성하는 과정

### Developer Tools

- **주요 문서:** WEB-002
- **관련 문서:** WEB-009, WEB-011
- 브라우저의 DOM, Console, Network, Storage, 렌더링과 오류를 관찰하는 도구

### DNS

- **주요 문서:** WEB-001
- Domain Name System
- 사람이 읽는 도메인 이름을 서버의 IP 주소와 연결하는 시스템

### DOM

- **주요 문서:** WEB-006
- **관련 문서:** WEB-003, WEB-005
- 브라우저가 HTML을 파싱해 만든 문서 객체 구조

### DOM Manipulation

- **주요 문서:** WEB-005
- JavaScript가 DOM의 요소, 속성, 내용과 구조를 변경하는 작업

### DTO

- **주요 문서:** WEB-008
- Data Transfer Object
- 프로그램 계층 또는 네트워크 사이에서 필요한 데이터만 전달하기 위한 객체

### Dynamic Service

- **주요 문서:** WEB-011
- 요청에 따라 서버나 외부 서비스가 데이터를 조회·처리해 결과를 만드는 서비스 구조

### Edge Function

- **주요 문서:** WEB-010
- 사용자와 가까운 여러 지역의 실행 환경에서 동작하도록 설계된 Function

### Element

- **주요 문서:** WEB-003
- HTML 문서의 구조와 의미를 표현하는 기본 단위

### Encoding

- **주요 문서:** WEB-007
- 데이터를 다른 규칙의 표현으로 바꾸는 과정
- 항상 “무엇을 무엇으로 바꾸는가”를 함께 확인해야 함

### Endpoint

- **주요 문서:** WEB-010
- **관련 문서:** WEB-008
- API 또는 Function을 호출할 수 있는 네트워크 주소

### Entity

- **주요 문서:** WEB-008
- 서버 내부 도메인이나 DB 구조를 표현하는 객체
- 외부 응답 DTO와 분리하는 것이 일반적

### Environment Variable

- **주요 문서:** WEB-010
- **관련 문서:** WEB-011
- 코드와 비밀값·환경별 설정을 분리하여 저장하는 방법

### Event

- **주요 문서:** WEB-005
- 클릭, 키보드 입력, 로딩 등 브라우저에서 발생하는 사건

### External API

- **주요 문서:** WEB-011
- 우리 서비스 밖의 시스템이 제공하는 데이터나 기능
- 브라우저 직접 호출 또는 Proxy를 통한 호출 가능

### FaaS

- **주요 문서:** WEB-010
- Function as a Service
- 함수 단위의 서버 코드를 외부 플랫폼에서 실행하는 방식

### Fetch

- **관련 문서:** WEB-005, WEB-007, WEB-009, WEB-011
- 브라우저 JavaScript가 HTTP 요청을 보내는 대표적인 API
- 세부 실습은 Part II에서 다룰 예정

### General Server

- **주요 문서:** WEB-011
- 지속 실행, 긴 작업, WebSocket, 복잡한 백그라운드 처리 등에 적합한 일반적인 서버 구조

### GET

- **주요 문서:** WEB-008
- 자원을 조회할 때 주로 사용하는 HTTP Method

### GitHub Pages

- **주요 문서:** WEB-001, WEB-011
- GitHub 저장소의 정적 파일을 웹사이트로 배포하는 서비스
- 서버 코드를 직접 실행하지는 않음

### Header

- **주요 문서:** WEB-007
- HTTP 메시지의 데이터 형식, 길이, 캐시, 인증, CORS 같은 조건을 설명하는 부분

### Host

- **주요 문서:** WEB-009
- **관련 문서:** WEB-001
- 네트워크 주소에서 서버의 도메인이나 호스트를 나타내는 요소
- Origin을 구성하는 요소 중 하나

### HTML

- **주요 문서:** WEB-003
- 웹문서의 구조와 의미를 표현하는 Markup 언어

### HTTP

- **주요 문서:** WEB-007
- **관련 문서:** WEB-001, WEB-008, WEB-009
- 브라우저와 서버가 Request와 Response를 주고받기 위한 프로토콜

### HTTP Method

- **주요 문서:** WEB-008
- 요청이 자원에 수행하려는 동작을 나타냄
- GET, POST, PUT, PATCH, DELETE 등

### HyperText

- **주요 문서:** WEB-003
- 링크를 통해 다른 문서나 위치로 연결할 수 있는 텍스트 구조

---

## 23. I–P

### IndexedDB

- **주요 문서:** WEB-011
- 브라우저 내부에서 비교적 구조화된 대용량 데이터를 저장할 수 있는 저장소

### Inheritance

- **주요 문서:** WEB-004
- 부모 요소의 일부 CSS 속성이 자식 요소에 전달되는 특성

### IP Address

- **주요 문서:** WEB-001
- 네트워크에서 장치나 서버의 위치를 식별하는 주소

### JavaScript

- **주요 문서:** WEB-005
- **관련 문서:** WEB-002, WEB-006, WEB-011
- 브라우저에서 동작, 상태 변화, 네트워크 통신과 DOM 조작을 담당하는 언어

### JavaScript Engine

- **주요 문서:** WEB-002
- JavaScript 코드를 해석하고 실행하는 브라우저 구성 요소

### JSON

- **주요 문서:** WEB-007
- **관련 문서:** WEB-008
- 구조화된 데이터를 텍스트로 표현하는 데이터 교환 형식

### Layout

- **주요 문서:** WEB-006
- 요소의 크기와 화면상 위치를 계산하는 렌더링 단계

### Local Storage

- **주요 문서:** WEB-011
- 브라우저에 문자열 기반 데이터를 비교적 오래 저장하는 저장소

### Logging

- **주요 문서:** WEB-011
- 실행 과정, 요청, 오류와 상태를 기록하여 문제를 추적하는 운영 활동

### Markup

- **주요 문서:** WEB-003
- 문서의 구조와 의미를 태그 등으로 표시하는 방식

### Media Query

- **주요 문서:** WEB-004
- 화면 크기나 환경 조건에 따라 다른 CSS 규칙을 적용하는 기능

### multipart/form-data

- **주요 문서:** WEB-007
- 하나의 HTTP Body 안에 텍스트 필드와 파일 같은 여러 부분을 함께 전송하는 형식

### Network

- **주요 문서:** WEB-002
- **관련 문서:** WEB-001, WEB-007
- 브라우저가 서버와 요청·응답을 주고받는 영역

### Object Storage

- **관련 문서:** WEB-010, WEB-011
- 이미지, 영상, 문서 같은 파일 데이터를 객체 단위로 영구 저장하는 서비스

### Observability

- **주요 문서:** WEB-011
- 로그, 오류, 실행 시간과 상태를 통해 시스템 내부 동작을 파악할 수 있는 능력

### OPTIONS

- **주요 문서:** WEB-009
- 브라우저가 Preflight에서 실제 요청의 허용 여부를 확인할 때 사용하는 HTTP Method

### Origin

- **주요 문서:** WEB-009
- Scheme, Host, Port의 조합
- 브라우저의 Same-Origin Policy 판단 기준

### Paint

- **주요 문서:** WEB-006
- 계산된 요소를 픽셀과 시각적 결과로 그리는 렌더링 단계

### Parsing

- **주요 문서:** WEB-006, WEB-007
- 텍스트나 데이터를 규칙에 따라 구조로 해석하는 과정
- HTML Parsing, JSON Parsing 등

### PATCH

- **주요 문서:** WEB-008
- 자원의 일부를 수정할 때 주로 사용하는 HTTP Method

### Path

- **주요 문서:** WEB-008
- URL 안에서 서버의 자원 위치를 나타내는 경로 부분

### Path Parameter

- **주요 문서:** WEB-008
- Path Variable과 같은 의미로 사용되는 경우가 많은 용어

### Path Variable

- **주요 문서:** WEB-008
- `/books/10`의 `10`처럼 특정 자원을 식별하는 Path의 값

### POST

- **주요 문서:** WEB-008
- 새로운 자원을 생성하거나 서버에 처리를 요청할 때 주로 사용하는 HTTP Method

### Preflight

- **주요 문서:** WEB-009
- 브라우저가 실제 교차 Origin 요청 전에 허용 여부를 확인하는 절차

### Presentation

- **주요 문서:** WEB-008
- 사용자에게 보여 주는 화면 표현
- REST의 Representation과 구분

### Proxy

- **주요 문서:** WEB-010
- 클라이언트 대신 다른 서버에 요청하고 응답을 중계하는 중간자

### PUT

- **주요 문서:** WEB-008
- 자원을 전체 교체하거나 전체 수정할 때 주로 사용하는 HTTP Method

---

## 24. Q–Z

### Query Parameter

- **주요 문서:** WEB-008
- `?page=2&sort=title`처럼 필터, 정렬, 검색, 페이지 같은 조건을 전달하는 값

### Query String

- **주요 문서:** WEB-008
- URL에서 `?` 뒤에 이어지는 Query Parameter 전체 문자열

### Queue

- **관련 문서:** WEB-010, WEB-011
- 처리할 작업이나 메시지를 순서대로 보관하고 비동기적으로 전달하는 시스템

### Render Tree

- **주요 문서:** WEB-006
- DOM과 CSSOM을 바탕으로 실제 화면에 그릴 요소를 구성한 구조

### Rendering Engine

- **주요 문서:** WEB-002
- **관련 문서:** WEB-006
- HTML과 CSS를 해석하고 화면을 구성하는 브라우저 엔진

### Representation

- **주요 문서:** WEB-008
- 자원의 상태를 외부로 전달하기 위해 구성한 JSON, XML 같은 데이터 형식
- 화면 표현인 Presentation과 구분

### Request

- **주요 문서:** WEB-007
- **관련 문서:** WEB-001
- 클라이언트가 서버에 보내는 요청 메시지

### Resource

- **주요 문서:** WEB-008
- REST에서 서버가 제공하고 식별하는 대상
- 사용자, 책, 주문, 게시글 등

### Response

- **주요 문서:** WEB-007
- **관련 문서:** WEB-001
- 서버가 Request 처리 결과로 보내는 응답 메시지

### Responsive Design

- **주요 문서:** WEB-004
- 화면 크기와 환경에 따라 레이아웃과 표현을 조정하는 설계 방식

### REST

- **주요 문서:** WEB-008
- HTTP를 자원 중심으로 일관되게 사용하기 위한 아키텍처 스타일

### RESTful

- **주요 문서:** WEB-008
- REST의 설계 원칙을 비교적 충실하게 따르는 API를 설명하는 표현

### RPC

- **주요 문서:** WEB-008
- 서버의 특정 작업이나 함수를 실행해 달라고 요청하는 동작 중심 스타일

### Same-Origin Policy

- **주요 문서:** WEB-009
- 한 Origin의 JavaScript가 다른 Origin의 민감한 응답을 마음대로 읽지 못하도록 제한하는 브라우저 정책

### Scheme

- **주요 문서:** WEB-009
- **관련 문서:** WEB-001
- `http`, `https`처럼 URL에서 통신 방식을 나타내는 부분
- Origin 구성 요소 중 하나

### Selector

- **주요 문서:** WEB-004
- CSS 규칙을 적용할 HTML 요소를 선택하는 표현

### Semantic HTML

- **주요 문서:** WEB-003
- 요소의 외형보다 문서 안에서의 의미와 역할을 드러내도록 작성하는 HTML

### Serialization

- **주요 문서:** WEB-007
- **관련 문서:** WEB-008
- 프로그램 내부 객체를 전송·저장 가능한 JSON 같은 형식으로 변환하는 과정

### Server

- **주요 문서:** WEB-001
- 클라이언트의 요청을 처리하고 파일, 데이터 또는 기능을 제공하는 시스템

### Serverless

- **주요 문서:** WEB-010
- 서버가 없는 것이 아니라 서버 운영을 외부 플랫폼에 맡기는 방식

### Serverless Function

- **주요 문서:** WEB-010
- 요청이나 이벤트가 발생할 때 실행되는 작은 서버 프로그램

### Serverless Proxy

- **주요 문서:** WEB-010
- **관련 문서:** WEB-009, WEB-011
- Serverless Function이 외부 API를 대신 호출하고 응답을 중계하는 구조

### Session Storage

- **주요 문서:** WEB-011
- 현재 브라우저 탭이나 세션 동안 데이터를 보관하는 저장소

### Simple Request

- **주요 문서:** WEB-009
- CORS 규칙상 Preflight 없이 바로 전송될 수 있는 일부 교차 Origin 요청

### Specificity

- **주요 문서:** WEB-004
- 여러 CSS 선택자가 충돌할 때 어떤 규칙의 우선순위가 높은지 판단하는 기준

### State

- **주요 문서:** WEB-005
- 현재 화면과 프로그램 동작을 결정하는 데이터 상태

### Stateless

- **주요 문서:** WEB-007, WEB-008, WEB-010
- 각 요청이 독립적이며 처리에 필요한 정보를 요청 자체에 포함하는 성질
- Serverless 실행 환경의 상태 유지 문제와도 연결됨

### Static Hosting

- **주요 문서:** WEB-001
- 미리 준비된 HTML, CSS, JavaScript와 파일을 그대로 제공하는 호스팅 방식

### Static Site

- **주요 문서:** WEB-011
- 서버가 요청마다 새로운 화면을 만들지 않고 미리 준비된 정적 파일을 제공하는 사이트

### Status Code

- **주요 문서:** WEB-007, WEB-008
- HTTP 요청 처리 결과를 숫자로 표현하는 표준
- 예: 200, 201, 400, 404, 500

### Tag

- **주요 문서:** WEB-003
- HTML 요소의 시작과 끝 또는 단독 요소를 표시하는 문법

### Text

- **주요 문서:** WEB-007
- 문자 인코딩 규칙에 따라 글자로 해석할 수 있는 바이트 데이터

### Trust Boundary

- **주요 문서:** WEB-011
- 사용자가 통제할 수 있는 브라우저와 서비스 운영자가 통제하는 서버 사이의 신뢰 경계

### Unicode

- **주요 문서:** WEB-007
- 세계의 여러 문자에 고유한 번호를 부여하는 문자 표준

### URL

- **주요 문서:** WEB-001, WEB-008
- 웹상의 자원 위치를 나타내는 주소
- Scheme, Host, Path, Query 등으로 구성

### UTF-8

- **주요 문서:** WEB-007
- Unicode 문자를 바이트로 표현하는 대표적인 문자 인코딩 방식

### Validation

- **주요 문서:** WEB-011
- **관련 문서:** WEB-010
- 입력값이 형식, 범위와 업무 규칙에 맞는지 확인하는 과정
- 중요한 검증은 서버에서 다시 수행해야 함

### View

- **주요 문서:** WEB-008
- 사용자에게 보여 주는 화면 구조
- JSP, HTML, UI 컴포넌트 등
- REST의 Representation과 구분

### Web Application

- **주요 문서:** WEB-005
- 브라우저에서 사용자 입력, 상태 변화, 데이터 통신을 처리하는 응용 프로그램 형태의 웹서비스

---

# 25. 자주 혼동하는 개념 비교

## Unicode와 UTF-8

```text
Unicode
문자에 어떤 번호를 부여할 것인가

UTF-8
그 문자 번호를 어떤 바이트로 표현할 것인가
```

- **주요 문서:** WEB-007

---

## JSON 직렬화와 UTF-8 인코딩

```text
JSON 직렬화
객체 → JSON 문자열

UTF-8 인코딩
문자열 → 바이트
```

- **주요 문서:** WEB-007
- **관련 문서:** WEB-008

---

## UTF-8과 Base64

```text
UTF-8
문자열 → 바이트

Base64
임의의 바이트 → ASCII 문자열
```

- **주요 문서:** WEB-007

---

## URL과 Path

```text
URL
Scheme + Host + Path + Query 등을 포함한 전체 주소

Path
URL 안에서 자원의 위치를 나타내는 경로
```

- **주요 문서:** WEB-008
- **관련 문서:** WEB-001

---

## Path Variable과 Query Parameter

```text
Path Variable
어떤 자원인가?

Query Parameter
어떤 조건과 방식으로 조회할 것인가?
```

- **주요 문서:** WEB-008

---

## REST와 RPC

```text
REST
자원 중심
GET /users/3

RPC
동작·명령 중심
/getUser?id=3
```

- **주요 문서:** WEB-008

---

## Representation과 Presentation

```text
Representation
자원의 전송용 데이터 형식
JSON, XML

Presentation
사용자에게 보여 주는 화면 표현
HTML, CSS, UI
```

- **주요 문서:** WEB-008

---

## Servlet·JSP와 REST

```text
Servlet
HTTP 요청과 응답을 처리하는 Java 기술

JSP
서버에서 HTML을 생성하는 View 기술

REST
HTTP API를 설계하는 아키텍처 스타일
```

- **주요 문서:** WEB-008

---

## CORS와 인증

```text
CORS
브라우저가 교차 Origin 응답을 JavaScript에 공개할지 통제

인증
사용자가 누구인지 확인
```

- **주요 문서:** WEB-009

---

## CORS와 권한

```text
CORS
어느 Origin의 JavaScript에 응답을 공개할 것인가

권한
이 사용자가 이 데이터와 기능에 접근할 수 있는가
```

- **주요 문서:** WEB-009
- **관련 문서:** WEB-011

---

## 요청 전송과 응답 읽기

```text
일반적인 교차 Origin 요청
요청 전송
→ 응답 수신
→ CORS 실패 시 JavaScript가 응답을 읽지 못함

Preflight 요청
OPTIONS 사전 확인 실패
→ 실제 본 요청을 보내지 않음
```

- **주요 문서:** WEB-009

---

## Serverless Function과 Serverless Proxy

```text
Serverless Function
요청이 들어오면 실행되는 서버 코드

Serverless Proxy
외부 API를 대신 호출하고 응답을 중계하는 Function의 역할
```

- **주요 문서:** WEB-010

---

## 플랫폼 지원과 아키텍처 적합성

```text
지원 가능
플랫폼이 기술적으로 실행할 수 있다

적합
비용, 실행 시간, 상태, 연결 방식까지 고려했을 때 좋은 선택이다
```

- **주요 문서:** WEB-010
- **관련 문서:** WEB-011

---

## Browser Storage와 Database

```text
Browser Storage
한 브라우저 안의 개인적·편의적 상태

Database
여러 기기와 사용자가 공유할 수 있는 영구 상태
```

- **주요 문서:** WEB-011

---

## GitHub Pages와 Serverless

```text
GitHub Pages
정적 파일과 화면 제공

Serverless
비밀값, 외부 API 호출, 검증과 짧은 서버 로직
```

- **주요 문서:** WEB-011
- **관련 문서:** WEB-010

---

# 26. 프로젝트별 빠른 참조

## Project Reading Room

| 주제 | Guide |
|---|---|
| GitHub Pages와 정적 호스팅 | WEB-001, WEB-011 |
| HTML 문서 구조 | WEB-003 |
| CSS와 인쇄 표현 | WEB-004 |
| JavaScript Viewer와 UI | WEB-005 |
| Markdown 화면 렌더링 이해 | WEB-006 |
| 현재 Serverless·DB가 필요 없는 이유 | WEB-011 |

---

## Potato's Day

| 주제 | Guide |
|---|---|
| 브라우저 기반 정적 게임 구조 | WEB-001, WEB-005 |
| 캐릭터 이미지와 사운드 요청 | WEB-007 |
| Canvas·DOM 화면 갱신 이해 | WEB-006 |
| 향후 랭킹 API 설계 | WEB-008 |
| 외부 AI API와 CORS | WEB-009 |
| API Key 보호와 Serverless | WEB-010 |
| 온라인 기능 확장 판단 | WEB-011 |

---

## Living Aegis Origin

| 주제 | Guide |
|---|---|
| 브라우저와 JavaScript 실행 구조 | WEB-002, WEB-005 |
| Canvas 화면 갱신의 기반 개념 | WEB-006 |
| 에셋과 설정 데이터 통신 | WEB-007 |
| 점수·기록 API 설계 | WEB-008 |
| 외부 API와 CORS | WEB-009 |
| Serverless 랭킹 기능 | WEB-010 |
| 실시간 서버와 일반 서버 판단 | WEB-011 |

---

## 공공데이터 기반 서비스

| 주제 | Guide |
|---|---|
| HTTP와 JSON 응답 | WEB-007 |
| REST API 요청 구조 | WEB-008 |
| 브라우저 직접 호출과 CORS | WEB-009 |
| API Key 보호와 Proxy | WEB-010 |
| GitHub Pages + Proxy + Optional DB | WEB-011 |

---

# 27. UI v3 연결

Learning 전용 UI v3에서는 상단 안내 navigation과 Part·Category navigation을 함께 사용합니다.

현재 적용 구조:

```text
Home
→ README.md

Learning Path
→ LEARNING_PATH.md

Part I
→ WEB-001~WEB-011
→ 5개 Category
→ Category별 Guide 연속 읽기

Reference
→ WEB_REFERENCE_INDEX.md
```

이 문서는 UI v3의 `Reference` 메뉴에서 직접 접근할 수 있습니다.

```text
Reference
→ WEB_REFERENCE_INDEX.md
→ Web Reference Index
```

Reference 화면에서는 다음 방식으로 개념을 찾습니다.

```text
문서별 색인
어느 Guide가 어떤 내용을 다루는가?

Category별 색인
관련 개념을 어떤 묶음으로 복습하는가?

용어별 색인
특정 용어가 어느 Guide에 설명되어 있는가?

혼동 개념 비교
비슷한 용어의 차이를 어디에서 확인하는가?
```

2026년 7월 15일 기준 확인 상태:

```text
Reference 화면 표시
확인 완료

상단 navigation과 문서 링크
확인 완료

기존 Part / Category 연속 읽기
확인 완료

모바일 화면
확인 완료

인쇄 / PDF 저장
이번 마감 점검에서는 확인하지 않음
```

인쇄 기능은 기존 Reading Room의 브라우저 인쇄·PDF 저장 방식을 유지합니다. 다만 현재 Part I 마감 판단에는 인쇄 확인 결과를 포함하지 않습니다.

---

# 28. Part II 확장 원칙

Part II Guide가 추가되면 이 색인도 다음 순서로 확장합니다.

```text
1. 문서별 색인에 신규 Guide 추가

2. Part II Category별 색인 추가

3. 용어별 색인에 신규 개념 추가

4. 기존 Part I 개념과 연결 문서 표시

5. UI v3의 Part II Reference 링크 점검
```

Part II에서 예상되는 추가 용어:

```text
Console
Network Tab
Fetch API
Promise
Async
Await
JSON.parse()
JSON.stringify()
HTTP Error
CORS Diagnosis
Environment Variable
Deployment
```

세부 용어는 실제 Guide가 확정된 뒤 반영합니다.

---

# 29. 핵심 요약

- 이 문서는 학습 순서가 아니라 용어와 문서 위치를 찾는 색인이다.
- 문서별, Category별, 용어별 세 가지 방식으로 찾을 수 있다.
- 같은 개념이 여러 문서에서 다뤄질 때 주요 문서와 관련 문서를 구분한다.
- 비교가 필요한 개념은 별도의 혼동 개념 비교에서 확인할 수 있다.
- 프로젝트별 빠른 참조를 통해 실제 작업과 Guide를 연결할 수 있다.
- UI v3의 `Reference` 메뉴에서 이 문서에 직접 접근할 수 있다.
- 화면, 링크와 모바일 동작은 확인 완료했다.
- 인쇄·PDF 저장은 이번 마감 점검에서 확인하지 않았다.
- Part II가 시작되면 실제 신규 Guide를 기준으로 색인을 확장한다.

---

# 변경 이력

## 2026-07-04

- Web Foundation 기본 참고 색인 작성
- 초기 Guide와 주요 용어 연결

## 2026-07-14

- WEB-001~WEB-011 전체 Guide를 기준으로 문서별 색인 재구성
- Part I의 5개 Category별 색인 추가
- 알파벳·용어별 통합 색인 추가
- 주요 문서와 관련 문서 구분 기준 추가
- WEB-007의 UTF-8, Base64, 직렬화 개정 내용 반영
- WEB-008의 URL, Path Variable, DTO, Representation 개정 내용 반영
- WEB-009의 요청 전송, 응답 읽기 제한, Preflight 개정 내용 반영
- WEB-010의 Serverless Function, Proxy, 환경 변수와 적합성 판단 반영
- WEB-011의 Browser Storage, Database, 일반 서버와 계층 배치 반영
- 자주 혼동하는 개념 비교 섹션 추가
- 프로젝트별 빠른 참조 추가
- UI v3의 `Reference` 진입점과 인덱스 문서 노출 상태 추가
- Part II 확장 원칙 추가

## 2026-07-15

- UI v3의 `Reference` 메뉴 직접 접근 완료 상태 반영
- `Home / Learning Path / Part I / Reference` 전체 navigation 구조 반영
- 기존 Part I Category 연속 읽기 유지 상태 반영
- Reference 화면, 링크와 모바일 확인 완료 기록
- 인쇄·PDF 저장은 이번 마감 점검에서 확인하지 않았음을 명시
- UI v3 직접 노출이 별도 필요하다는 오래된 문구 제거
