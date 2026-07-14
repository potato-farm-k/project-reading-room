---
title: Web Foundation Learning Path
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/LEARNING_PATH.md
copy_type: source
last_reviewed: 2026-07-14
print_friendly: true
---

# Web Foundation Learning Path

## 부제: 웹 기술을 기능 목록이 아니라 연결된 구조로 이해하기

> Web Foundation Learning은 웹 기술의 사용법만 외우는 과정이 아닙니다.
> 각 기술이 왜 생겼고, 서로 어떻게 연결되며, 실제 서비스 안에서 어떤 역할을 맡는지 이해하는 학습 과정입니다.

---

## 1. 이 Learning Path의 목적

웹을 처음 공부하면 다음과 같은 용어를 각각 따로 접하기 쉽습니다.

```text
HTML
CSS
JavaScript
DOM
HTTP
REST API
CORS
Serverless
GitHub Pages
```

각 용어의 뜻을 개별적으로 알더라도, 실제 웹서비스가 어떻게 만들어지는지는 여전히 흐릿할 수 있습니다.

이 Learning Path는 다음 흐름을 이해하는 것을 목표로 합니다.

```text
웹페이지가 만들어지고
        ↓
브라우저가 문서를 읽고
        ↓
JavaScript가 화면을 움직이고
        ↓
HTTP로 서버와 통신하고
        ↓
REST API로 데이터를 주고받으며
        ↓
CORS와 보안을 고려하고
        ↓
필요하면 Serverless와 DB를 연결해
        ↓
하나의 웹서비스를 구성한다
```

---

## 2. 학습 구조

Web Foundation Learning은 다음 세 계층으로 구성합니다.

```text
Part
학습의 큰 단계

Category
각 Part 안의 주제 묶음

Guide
실제 개별 학습 문서
```

예:

```text
Part I — 웹의 원리와 서비스 구조

└─ 통신과 API
   ├─ WEB-007
   ├─ WEB-008
   └─ WEB-009
```

### Part

한 단계의 학습 목표와 난이도를 나타냅니다.

### Category

서로 밀접하게 연결된 Guide를 하나의 주제로 묶습니다.

### Guide

하나의 핵심 질문을 중심으로 작성된 개별 문서입니다.

---

## 3. 현재 진행 상태

```text
Part I
웹의 원리와 서비스 구조
상태: 1차 학습 및 질의 반영 완료

Part II
웹 애플리케이션 실습
상태: 준비 단계

Part III
웹 서비스 확장
상태: 향후 계획
```

현재 공식 학습 범위는 `WEB-001`부터 `WEB-011`까지입니다.

---

# Part I — 웹의 원리와 서비스 구조

## 4. Part I의 목표

Part I은 웹 기술을 직접 구현하기 전에 전체 구조와 탄생 배경을 이해하는 단계입니다.

Part I을 마치면 다음 질문에 답할 수 있어야 합니다.

- 웹페이지는 어떤 과정을 거쳐 브라우저에 표시되는가?
- HTML, CSS, JavaScript는 왜 분리되어 있는가?
- 브라우저는 문서를 어떻게 화면으로 바꾸는가?
- HTTP 요청과 응답은 어떤 구조인가?
- JSON, UTF-8, Base64, 직렬화는 어떻게 다른가?
- REST API는 왜 자원을 중심으로 설계하는가?
- CORS는 요청과 응답을 어떻게 통제하는가?
- Serverless는 어떤 서버 기능을 제공하는가?
- GitHub Pages 기반 서비스는 어떻게 확장할 수 있는가?
- 새로운 기능을 브라우저, Serverless, DB, 일반 서버 중 어디에 배치해야 하는가?

---

## 5. Part I 전체 흐름

```text
1. 웹의 구조
   WEB-001 → WEB-002

2. 문서와 표현
   WEB-003 → WEB-004

3. 동작과 렌더링
   WEB-005 → WEB-006

4. 통신과 API
   WEB-007 → WEB-008 → WEB-009

5. 배포와 서비스 아키텍처
   WEB-010 → WEB-011
```

각 Category는 앞의 내용을 기반으로 다음 문제로 이동합니다.

```text
웹은 어떻게 연결되는가?
        ↓
브라우저는 무엇을 하는가?
        ↓
문서의 구조와 표현은 왜 나뉘는가?
        ↓
화면은 어떻게 동작하고 렌더링되는가?
        ↓
브라우저와 서버는 어떻게 통신하는가?
        ↓
API는 어떻게 설계하고 보호하는가?
        ↓
실제 서비스 구조는 어떻게 구성하는가?
```

---

# Category 1 — 웹의 구조

## 6. 학습 목적

웹을 개별 기술이 아니라 클라이언트와 서버가 연결된 시스템으로 이해합니다.

---

## WEB-001. How the Web Works

### 핵심 질문

> 주소를 입력한 뒤 웹페이지가 보이기까지 무슨 일이 일어나는가?

### 주요 내용

- 웹의 기본 구조
- 클라이언트와 서버
- URL
- DNS
- Request와 Response
- 웹페이지를 구성하는 여러 파일
- GitHub Pages와 정적 호스팅

### 읽은 뒤 설명할 수 있어야 하는 것

- 브라우저가 서버에 무엇을 요청하는지
- 서버가 어떤 방식으로 응답하는지
- URL과 DNS가 어떤 역할을 하는지
- 하나의 웹페이지가 여러 리소스로 구성되는 이유

---

## WEB-002. What Is a Browser

### 핵심 질문

> 브라우저는 단순히 웹페이지를 보여주는 프로그램인가?

### 주요 내용

- 브라우저의 역할
- 네트워크 요청
- HTML·CSS·JavaScript 처리
- 렌더링 엔진
- JavaScript 엔진
- 저장소와 개발자 도구
- 브라우저 보안 환경

### 읽은 뒤 설명할 수 있어야 하는 것

- 브라우저가 파일을 받는 것과 화면을 만드는 것의 차이
- 브라우저가 운영체제와 웹서비스 사이에서 맡는 역할
- 같은 웹 문서가 브라우저에서 실행 가능한 프로그램처럼 동작하는 이유

---

## Category 1 완료 기준

```text
- 웹을 브라우저와 서버의 통신 구조로 설명할 수 있다.
- URL, DNS, Request, Response의 기본 역할을 구분할 수 있다.
- 브라우저가 네트워크, 해석, 실행, 렌더링을 함께 담당한다는 것을 설명할 수 있다.
```

---

# Category 2 — 문서와 표현

## 7. 학습 목적

웹문서의 내용과 시각적 표현이 왜 분리되었는지 이해합니다.

---

## WEB-003. What Is HTML

### 핵심 질문

> HTML은 왜 단순한 화면 배치 언어가 아니라 문서 구조 언어인가?

### 주요 내용

- HTML의 탄생 배경
- HyperText
- Markup
- 문서 구조와 의미
- 요소와 속성
- Semantic HTML
- 브라우저와 HTML의 관계

### 읽은 뒤 설명할 수 있어야 하는 것

- HTML이 문서의 구조와 의미를 표현하는 이유
- 제목, 문단, 목록, 링크가 각각 다른 요소인 이유
- HTML을 화면 디자인 도구로만 보면 부족한 이유

---

## WEB-004. Why CSS

### 핵심 질문

> 웹문서의 모양을 왜 HTML에서 분리했는가?

### 주요 내용

- HTML 안에 표현을 넣었을 때의 문제
- 내용과 디자인의 분리
- 선택자
- 상속과 우선순위
- 재사용
- 반응형 표현
- 유지보수

### 읽은 뒤 설명할 수 있어야 하는 것

- HTML과 CSS의 역할 차이
- 여러 페이지에 공통 디자인을 적용할 수 있는 이유
- 구조와 표현을 분리하면 유지보수가 쉬워지는 이유

---

## Category 2 완료 기준

```text
- HTML은 내용과 의미를, CSS는 시각적 표현을 담당한다고 설명할 수 있다.
- 구조와 표현의 분리가 재사용과 유지보수에 어떤 도움을 주는지 설명할 수 있다.
```

---

# Category 3 — 동작과 렌더링

## 8. 학습 목적

정적인 문서가 JavaScript를 만나 동작하는 웹 애플리케이션으로 바뀌고, 브라우저가 이를 화면에 그리는 과정을 이해합니다.

---

## WEB-005. Why JavaScript

### 핵심 질문

> HTML과 CSS만으로 부족했던 것은 무엇인가?

### 주요 내용

- 정적 문서의 한계
- 사용자 입력과 이벤트
- 동적인 상태 변경
- JavaScript의 브라우저 도입
- DOM 조작
- 네트워크 통신
- 웹 애플리케이션으로의 발전

### 읽은 뒤 설명할 수 있어야 하는 것

- JavaScript가 웹에 동작을 추가하는 방식
- 이벤트와 상태의 관계
- JavaScript가 HTML과 CSS를 변경할 수 있는 이유

---

## WEB-006. How Browser Builds a Page

### 핵심 질문

> 브라우저는 HTML과 CSS를 어떻게 실제 화면으로 바꾸는가?

### 주요 내용

- HTML Parsing
- DOM
- CSS Parsing
- CSSOM
- Render Tree
- Layout
- Paint
- Composite
- JavaScript와 렌더링 갱신

### 읽은 뒤 설명할 수 있어야 하는 것

- HTML 파일과 DOM이 같은 것이 아닌 이유
- CSSOM과 Render Tree의 역할
- DOM 변경이 화면 갱신으로 이어지는 과정
- Layout과 Paint가 성능에 영향을 주는 이유

---

## Category 3 완료 기준

```text
- JavaScript가 브라우저 안에서 문서와 화면을 변경하는 방식을 설명할 수 있다.
- HTML·CSS가 DOM·CSSOM을 거쳐 실제 화면이 되는 흐름을 설명할 수 있다.
```

---

# Category 4 — 통신과 API

## 9. 학습 목적

브라우저와 서버가 데이터를 주고받는 과정, API 설계, 브라우저 보안 정책을 하나의 흐름으로 이해합니다.

---

## WEB-007. How HTTP Works

### 핵심 질문

> 텍스트, JSON, 이미지 같은 서로 다른 데이터는 HTTP로 어떻게 전달되는가?

### 주요 내용

- HTTP Request와 Response
- Header와 Body
- Status Code
- 바이트
- 텍스트와 바이너리
- ASCII, Unicode, UTF-8
- JSON
- JSON 직렬화
- UTF-8 인코딩
- Base64
- Content-Type
- multipart/form-data
- Stateless

### 읽은 뒤 설명할 수 있어야 하는 것

- HTTP가 본질적으로 바이트를 전달한다는 의미
- 텍스트와 바이너리의 차이가 해석 방식이라는 점
- JSON 직렬화와 UTF-8 인코딩의 차이
- UTF-8과 Base64의 변환 방향
- HTML과 이미지가 일반적으로 별도 요청으로 전달되는 이유

---

## WEB-008. Why REST API

### 핵심 질문

> HTTP로 통신할 수 있는데 왜 API 설계 방식이 따로 필요했는가?

### 주요 내용

- API
- REST
- Resource
- URL과 Path
- Path Variable
- Query Parameter
- HTTP Method
- REST와 RPC 스타일
- Status Code를 활용한 응답 설계
- Servlet·JSP와 REST API 비교
- JSON 직렬화
- Representation
- View와 데이터 형식의 구분
- DTO
- Stateless
- Client–Server 역할 분리

### 읽은 뒤 설명할 수 있어야 하는 것

- HTTP와 REST가 서로 다른 계층의 개념인 이유
- `/books/10`에서 `10`이 Path Variable인 이유
- REST와 RPC 스타일의 차이
- Servlet·JSP 방식과 REST API 방식의 서버 역할 차이
- REST의 Representation이 화면 디자인이 아니라 전송용 데이터 형식이라는 점
- 서버 내부 Entity와 Response DTO를 분리하는 이유

---

## WEB-009. Why CORS

### 핵심 질문

> 외부 API 서버가 응답했는데도 브라우저 JavaScript가 데이터를 읽지 못하는 이유는 무엇인가?

### 주요 내용

- Origin
- Same-Origin Policy
- CORS
- Access-Control-Allow-Origin
- 요청 전송과 응답 읽기 제한
- Simple Request
- Preflight
- OPTIONS
- CORS와 인증·권한의 차이
- GitHub Pages와 외부 API
- Serverless Proxy를 통한 중계

### 읽은 뒤 설명할 수 있어야 하는 것

- Origin을 Scheme, Host, Port로 구분하는 방법
- CORS가 외부 요청 전체를 무조건 금지하지 않는 이유
- 요청은 전송됐지만 응답을 JavaScript가 읽지 못할 수 있다는 점
- Preflight 실패 시 본 요청이 전송되지 않을 수 있다는 점
- 같은 API가 브라우저에서는 실패하고 서버에서는 성공할 수 있는 이유

---

## Category 4 완료 기준

```text
- HTTP 메시지와 데이터 변환 과정을 설명할 수 있다.
- REST의 자원 중심 설계와 응답 설계를 설명할 수 있다.
- CORS가 요청 전송과 응답 공개를 어떻게 통제하는지 설명할 수 있다.
- 브라우저 직접 호출과 Serverless Proxy 호출의 차이를 설명할 수 있다.
```

---

# Category 5 — 배포와 서비스 아키텍처

## 10. 학습 목적

앞에서 배운 기술을 실제 배포 가능한 서비스 구조로 조합하고, 새로운 기능을 어느 계층에 둘지 판단합니다.

---

## WEB-010. Why Serverless

### 핵심 질문

> Serverless에는 실제 서버가 있는데 왜 Serverless라고 부르는가?

### 주요 내용

- 전통적인 서버 운영
- 외부 Serverless 플랫폼
- Function as a Service
- 함수 배포와 URL 발급
- Serverless Function
- Serverless Proxy
- 환경 변수
- API Key 보호
- CORS 중계
- Stateless
- Cold Start
- 비용과 제한
- Edge Function
- Backend as a Service
- 기능 적합성 판단

### 읽은 뒤 설명할 수 있어야 하는 것

- Serverless가 서버 부재가 아니라 서버 운영 위임을 뜻하는 이유
- 전용 서버 할당과 함수 실행 환경 제공의 차이
- Serverless Function과 Serverless Proxy의 관계
- API Key를 환경 변수에 두는 이유
- 플랫폼이 기능을 지원하는 것과 그 기능이 Serverless에 적합한 것이 다른 이유

---

## WEB-011. GitHub Pages Architecture

### 핵심 질문

> GitHub Pages 기반 서비스를 실제로 어떻게 구성하고 확장할 것인가?

### 주요 내용

- 정적 사이트와 동적 서비스
- GitHub Pages의 역할
- 브라우저의 역할
- 외부 API 직접 호출 조건
- Serverless Proxy 도입 기준
- CORS 구간
- 환경 변수
- Database
- Browser Storage
- 일반 서버
- 계층별 신뢰 수준
- 서버 검증
- 응답 가공
- 오류 처리
- 로그와 운영
- 단계별 아키텍처 확장

### 읽은 뒤 설명할 수 있어야 하는 것

- GitHub Pages로 동적인 서비스를 만들 수 있는 이유
- 브라우저, Serverless, DB, 일반 서버의 역할 차이
- DB가 필요한 기능과 필요하지 않은 기능
- Browser Storage와 Database의 차이
- 새로운 기능을 어느 계층에 배치해야 하는지 판단하는 방법
- 작게 시작한 프로젝트가 요구에 따라 확장되는 과정

---

## Category 5 완료 기준

```text
- GitHub Pages와 Serverless를 조합한 기본 구조를 설명할 수 있다.
- API Key, CORS, DB, Browser Storage의 역할을 구분할 수 있다.
- 새로운 기능을 브라우저, Serverless, DB, 일반 서버 중 어디에 둘지 판단할 수 있다.
```

---

# 11. UI v3에서 읽는 방법

Web Foundation Learning에는 Learning 카테고리 전용 UI v3가 적용되어 있습니다.

UI v3의 주요 구조:

```text
좌측 검색·선택 프레임 없음

상단 Part 메뉴
+
상단 Category 메뉴
+
카테고리별 문서 연속 읽기
```

## 처음 학습할 때

`WEB-001`부터 번호 순서대로 읽습니다.

```text
WEB-001
   ↓
WEB-002
   ↓
...
   ↓
WEB-011
```

번호 순서는 개념의 선후 관계를 고려한 기본 학습 순서입니다.

## Category별로 복습할 때

상단 Category 메뉴를 이용하여 관련 Guide를 한 페이지에서 연속으로 읽습니다.

예:

```text
통신과 API
   ├─ WEB-007
   ├─ WEB-008
   └─ WEB-009
```

HTTP, REST, CORS를 하나의 흐름으로 다시 확인할 수 있습니다.

## 종합 질문을 할 때

개별 용어 하나보다 Category 전체를 기준으로 질문하면 개념 사이의 관계를 더 잘 확인할 수 있습니다.

예:

```text
HTTP로 데이터를 전달하고
REST로 API를 설계하며
CORS가 브라우저의 응답 접근을 통제하는
전체 흐름을 다시 설명해 주세요.
```

## 특정 개념을 찾을 때

[WEB_REFERENCE_INDEX.md](./WEB_REFERENCE_INDEX.md)를 사용합니다.

---

# 12. 권장 학습 방식

각 Guide는 다음 흐름으로 학습합니다.

```text
1. 핵심 질문 확인

2. 기술이 생긴 배경 읽기

3. 구조와 흐름 이해

4. 예시를 프로젝트와 연결

5. 헷갈리는 용어 질문

6. 답변을 기존 문서에 반영

7. Category 단위로 다시 읽기
```

이 Learning Track에서는 질문이 생기는 것을 학습 실패로 보지 않습니다.

오히려 다음과 같은 질문을 중요하게 다룹니다.

```text
이 용어는 어느 계층의 개념인가?
비슷한 용어와 무엇이 다른가?
실제 처리 순서는 어떻게 되는가?
왜 이런 설계가 필요했는가?
어느 역할이 어느 기능을 담당하는가?
```

---

# 13. 문서 개정 방식

학습 중 나온 중요한 질문은 관련 Guide의 전체 개정판에 반영합니다.

기본 절차:

```text
질문과 답변
   ↓
반영할 Guide 결정
   ↓
전체 개정판 작성
   ↓
사용자 검토
   ↓
기존 canonical 파일 교체
   ↓
변경 이력 기록
```

여러 Guide를 한꺼번에 갱신하기보다 문서별로 하나씩 검토하고 확정합니다.

현재 Part I의 주요 질의 반영 상태:

```text
WEB-007
UTF-8, Base64, 직렬화와 인코딩

WEB-008
URL 구조, REST와 RPC, Servlet·JSP 비교,
Representation과 화면 표현

WEB-009
요청 전송, 응답 읽기 제한, Preflight

WEB-010
외부 Serverless 서비스, Proxy,
기능 지원 여부와 적합성 판단

WEB-011
계층별 역할과 아키텍처 확장 기준
```

---

# 14. Part I 완료 기준

Part I을 마쳤다고 판단하려면 용어를 모두 외울 필요는 없습니다.

다음 흐름을 자신의 말로 설명할 수 있으면 충분합니다.

```text
브라우저가 HTML·CSS·JavaScript를 받아 실행하고,
HTTP로 서버와 데이터를 주고받으며,
REST API를 통해 자원을 다루고,
CORS 정책에 따라 교차 Origin 응답에 접근하고,
필요하면 Serverless Proxy와 DB를 연결해
하나의 서비스를 구성한다.
```

구체적인 완료 기준:

```text
- 웹페이지가 표시되는 전체 흐름을 설명할 수 있다.
- HTML, CSS, JavaScript의 역할을 구분할 수 있다.
- DOM과 렌더링 과정을 설명할 수 있다.
- HTTP Header와 Body를 구분할 수 있다.
- JSON 직렬화와 UTF-8 인코딩을 구분할 수 있다.
- REST의 Resource와 Representation을 설명할 수 있다.
- CORS와 Preflight의 기본 흐름을 설명할 수 있다.
- Serverless Proxy가 필요한 이유를 설명할 수 있다.
- GitHub Pages 기반 서비스의 기본 구조를 그릴 수 있다.
- 새 기능을 어느 계층에 둘지 기본 판단을 할 수 있다.
```

---

# Part II — 웹 애플리케이션 실습

## 15. Part II의 방향

Part I이 다음 질문을 다뤘다면:

```text
왜 이런 기술이 생겼는가?
각 기술은 어떤 역할을 하는가?
기술들은 어떻게 연결되는가?
```

Part II는 다음 질문을 다룹니다.

```text
브라우저에서 실제로 어떻게 확인하는가?
코드로 어떻게 사용하는가?
오류가 발생했을 때 어디를 보는가?
작은 서비스를 어떻게 완성하고 배포하는가?
```

예상 주제:

```text
브라우저 개발자 도구
JavaScript 실행
Fetch API
Promise와 비동기 처리
JSON 다루기
공공데이터 API 호출
Network 탭 분석
CORS와 Preflight 확인
Serverless Proxy 구성
환경 변수
GitHub Pages 배포
```

Part II의 세부 Guide 제목과 번호는 시작 시점에 확정합니다.

---

# Part III — 웹 서비스 확장

## 16. Part III의 방향

Part III에서는 실제 서비스가 성장할 때 필요한 주제를 다룰 수 있습니다.

예상 주제:

```text
Browser Storage
사용자 인증
Database
파일 저장소
보안
성능
캐시
PWA
오프라인
테스트
관찰 가능성
```

Part III의 범위는 Part II 실습과 실제 프로젝트 요구를 바탕으로 결정합니다.

---

# 17. 프로젝트와 연결해서 읽기

## Project Reading Room

```text
HTML·CSS·JavaScript
정적 Markdown 문서
GitHub Pages
카테고리와 검색
UI v3
인쇄와 PDF 저장
```

현재는 Serverless나 DB가 필요하지 않은 정적 Reading Site입니다.

## Potato's Day

```text
GitHub Pages
JavaScript 게임
이미지와 사운드
브라우저 상태
향후 랭킹·저장 기능
```

정적 게임에서 온라인 기능으로 확장할 때 아키텍처 판단에 활용할 수 있습니다.

## Living Aegis Origin

```text
Canvas 2D
JavaScript
GitHub Pages
향후 점수·랭킹·사용자 기록
```

브라우저 그래픽과 서버 기능의 경계를 이해하는 실제 사례입니다.

## 공공데이터 기반 서비스

```text
GitHub Pages
Serverless Proxy
공공데이터 API
Optional Database
```

Part I의 HTTP, REST, CORS, Serverless, 아키텍처 개념이 가장 직접적으로 연결되는 실습 후보입니다.

---

# 18. 참고 문서

## [README.md](./README.md)

Learning Track의 목적, 현재 상태, 주요 문서와 운영 원칙을 간단히 안내합니다.

## [WEB_REFERENCE_INDEX.md](./WEB_REFERENCE_INDEX.md)

용어와 개념이 어느 Guide에 설명되어 있는지 찾아볼 수 있는 색인입니다.

---

# 19. 핵심 요약

- Web Foundation Learning은 Part, Category, Guide 구조로 구성한다.
- Part I은 웹의 원리와 서비스 구조를 이해하는 단계다.
- Part I에는 5개 Category와 11개 Guide가 있다.
- 기본 학습은 `WEB-001`부터 번호 순서대로 진행한다.
- UI v3에서는 상단 메뉴를 통해 Category별 연속 읽기를 지원한다.
- 복습과 종합 질문은 Category 단위로 진행할 수 있다.
- 중요한 질문은 관련 Guide의 전체 개정판에 반영한다.
- Part II는 브라우저와 코드를 이용한 실제 실습 단계다.
- Part III는 인증, DB, 보안, 성능 등 서비스 확장 단계로 발전할 수 있다.

---

# 변경 이력

## 2026-07-04

- Web Foundation Learning 기본 학습 경로 작성
- 초기 Guide 순서와 학습 목적 정리

## 2026-07-14

- Part → Category → Guide 구조로 전체 개편
- Part I 제목을 `웹의 원리와 서비스 구조`로 확정
- Part I의 5개 Category와 WEB-001~WEB-011 연결
- 각 Category의 목적, 문서, 완료 기준 추가
- WEB-007~WEB-011 개정 내용을 학습 목표에 반영
- Learning 전용 UI v3의 상단 Part·Category 메뉴와 연속 읽기 방식 반영
- 처음 학습, Category 복습, 종합 질문, 용어 검색 방법 구분
- 문서별 순차 개정 프로세스 추가
- Part I 전체 완료 기준 추가
- Part II와 Part III의 방향을 계획 상태로 정리
- Project Reading Room, Potato's Day, Living Aegis Origin, 공공데이터 서비스 연결 추가
