---
title: Web Foundation Learning Track
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/README.md
copy_type: source
last_reviewed: 2026-07-14
print_friendly: true
---

# Web Foundation Learning Track

## 웹 기술을 기능 목록이 아니라 연결된 구조로 이해하기

> Web Foundation Learning은 HTML, CSS, JavaScript 같은 기술의 사용법만 익히는 과정이 아닙니다.
> 각 기술이 왜 만들어졌고, 서로 어떻게 연결되며, 실제 웹서비스 안에서 어떤 역할을 맡는지 이해하는 학습 트랙입니다.

---

## 1. 이 Learning Track의 목적

웹을 공부하다 보면 다음과 같은 용어를 각각 따로 접하게 됩니다.

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
Database
```

각 용어의 뜻을 개별적으로 알고 있어도, 실제 웹서비스가 어떻게 동작하고 어떻게 구성되는지는 여전히 흐릿할 수 있습니다.

Web Foundation Learning은 다음 흐름을 하나의 연결된 구조로 이해하는 것을 목표로 합니다.

```text
웹페이지가 만들어지고
        ↓
브라우저가 문서를 읽고
        ↓
HTML·CSS·JavaScript가 역할을 나누고
        ↓
브라우저가 화면을 렌더링하고
        ↓
HTTP로 서버와 통신하고
        ↓
REST API로 데이터를 주고받으며
        ↓
CORS 정책 안에서 외부 응답에 접근하고
        ↓
필요하면 Serverless와 DB를 연결해
        ↓
하나의 웹서비스를 구성한다
```

---

## 2. 학습 원칙

이 Learning Track은 다음 원칙으로 운영합니다.

### 기술보다 이유를 먼저 이해한다

```text
무엇을 쓰는가?
```

보다 먼저 다음을 질문합니다.

```text
왜 이 기술이 생겼는가?
기존에는 어떤 문제가 있었는가?
어느 계층의 문제를 해결하는가?
```

### 용어를 서로 연결해서 이해한다

예:

```text
JSON
   ↓ 직렬화
문자열
   ↓ UTF-8 인코딩
바이트
   ↓ HTTP
네트워크 전송
```

개별 용어의 뜻뿐 아니라 실제 처리 순서와 관계를 함께 봅니다.

### 프로젝트와 연결해서 학습한다

개념을 다음 프로젝트와 연결합니다.

- Project Reading Room
- Potato's Day
- Living Aegis Origin
- 공공데이터 기반 웹서비스

### 질문을 문서 개정에 반영한다

학습 중 나온 중요한 질문은 관련 Guide의 전체 개정판에 반영합니다.

```text
질문
   ↓
개념 확인
   ↓
관련 Guide 결정
   ↓
전체 개정판 작성
   ↓
검토
   ↓
canonical 문서 교체
```

---

## 3. 학습 구조

Web Foundation Learning은 다음 세 단계로 구성합니다.

```text
Part
학습의 큰 단계

Category
서로 연결된 주제 묶음

Guide
개별 학습 문서
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

학습 단계와 범위를 나타냅니다.

### Category

서로 밀접한 Guide를 하나의 주제로 묶습니다.

### Guide

하나의 핵심 질문을 중심으로 구성된 개별 문서입니다.

---

## 4. 현재 진행 상태

| Part | 주제 | 상태 |
|---|---|---|
| Part I | 웹의 원리와 서비스 구조 | 1차 학습 및 주요 질의 반영 완료 |
| Part II | 웹 애플리케이션 실습 | 준비 단계 |
| Part III | 웹 서비스 확장 | 향후 계획 |

현재 공식 학습 범위는 다음과 같습니다.

```text
WEB-001 ~ WEB-011
```

Part I에서는 웹의 기본 구조부터 GitHub Pages 기반 서비스 아키텍처까지 다룹니다.

---

# Part I — 웹의 원리와 서비스 구조

## 5. Part I 카테고리

| Category | Guides | 핵심 주제 |
|---|---:|---|
| 웹의 구조 | WEB-001~002 | 웹, 클라이언트와 서버, 브라우저 |
| 문서와 표현 | WEB-003~004 | HTML, CSS, 구조와 표현의 분리 |
| 동작과 렌더링 | WEB-005~006 | JavaScript, DOM, 브라우저 렌더링 |
| 통신과 API | WEB-007~009 | HTTP, REST API, CORS |
| 배포와 서비스 아키텍처 | WEB-010~011 | Serverless, GitHub Pages 서비스 구조 |

---

## 6. Guide 목록

### Category 1 — 웹의 구조

| 문서 | 핵심 질문 |
|---|---|
| [WEB-001. How the Web Works](./WEB-001-How-the-Web-Works.md) | 주소를 입력한 뒤 웹페이지가 보이기까지 무슨 일이 일어나는가? |
| [WEB-002. What Is a Browser](./WEB-002-What-Is-a-Browser.md) | 브라우저는 단순히 웹페이지를 보여주는 프로그램인가? |

### Category 2 — 문서와 표현

| 문서 | 핵심 질문 |
|---|---|
| [WEB-003. What Is HTML](./WEB-003-What-Is-HTML.md) | HTML은 왜 문서 구조 언어인가? |
| [WEB-004. Why CSS](./WEB-004-Why-CSS.md) | 웹문서의 모양을 왜 HTML에서 분리했는가? |

### Category 3 — 동작과 렌더링

| 문서 | 핵심 질문 |
|---|---|
| [WEB-005. Why JavaScript](./WEB-005-Why-JavaScript.md) | HTML과 CSS만으로 부족했던 것은 무엇인가? |
| [WEB-006. How Browser Builds a Page](./WEB-006-How-Browser-Builds-a-Page.md) | 브라우저는 HTML과 CSS를 어떻게 실제 화면으로 바꾸는가? |

### Category 4 — 통신과 API

| 문서 | 핵심 질문 |
|---|---|
| [WEB-007. How HTTP Works](./WEB-007-How-HTTP-Works.md) | 서로 다른 데이터는 HTTP로 어떻게 전달되는가? |
| [WEB-008. Why REST API](./WEB-008-Why-REST-API.md) | HTTP로 통신할 수 있는데 왜 API 설계 방식이 따로 필요한가? |
| [WEB-009. Why CORS](./WEB-009-Why-CORS.md) | 서버가 응답했는데도 브라우저가 데이터를 읽지 못하는 이유는 무엇인가? |

### Category 5 — 배포와 서비스 아키텍처

| 문서 | 핵심 질문 |
|---|---|
| [WEB-010. Why Serverless](./WEB-010-Why-Serverless.md) | 실제 서버가 있는데 왜 Serverless라고 부르는가? |
| [WEB-011. GitHub Pages Architecture](./WEB-011-GitHub-Pages-Architecture.md) | GitHub Pages 기반 서비스를 어떻게 구성하고 확장하는가? |

---

## 7. Part I에서 다루는 핵심 흐름

Part I의 전체 흐름은 다음과 같습니다.

```text
웹은 어떻게 연결되는가?
        ↓
브라우저는 무엇을 하는가?
        ↓
HTML과 CSS는 왜 역할을 나누는가?
        ↓
JavaScript는 어떻게 문서를 움직이는가?
        ↓
브라우저는 화면을 어떻게 렌더링하는가?
        ↓
HTTP는 데이터를 어떻게 전달하는가?
        ↓
REST API는 요청과 응답을 어떻게 설계하는가?
        ↓
CORS는 외부 응답 접근을 어떻게 통제하는가?
        ↓
Serverless는 어떤 서버 기능을 제공하는가?
        ↓
GitHub Pages 기반 서비스는 어떻게 확장하는가?
```

---

## 8. Part I의 주요 개정 내용

Part I 학습 과정에서 나온 질문을 반영해 다음 Guide를 보강했습니다.

### WEB-007

```text
UTF-8
Base64
ASCII와 Unicode
JSON 직렬화
직렬화와 인코딩의 차이
텍스트와 바이너리
```

### WEB-008

```text
URL과 Path
Path Variable
Query Parameter
REST와 RPC 스타일
Servlet·JSP와 REST API
Representation과 화면 표현
Entity와 DTO
```

### WEB-009

```text
요청 전송과 응답 읽기 제한
Same-Origin Policy
CORS
Preflight
OPTIONS
CORS와 인증·권한의 차이
```

### WEB-010

```text
외부 Serverless 서비스 이용 구조
Serverless Function
Serverless Proxy
환경 변수
기능 지원 여부와 적합성 판단
```

### WEB-011

```text
GitHub Pages
브라우저
Serverless
외부 API
Database
Browser Storage
일반 서버
계층별 역할 판단
```

---

# UI v3

## 9. Learning 전용 UI v3

Web Foundation Learning에는 Learning 카테고리 전용 UI v3가 적용되어 있습니다.

주요 구조:

```text
기존 Reading Room UI와 병렬 운영

Learning 카테고리 전용

좌측 검색·선택 프레임 없음

상단 Part 메뉴

상단 Category 메뉴

Category별 Guide 연속 읽기
```

UI v3는 개별 문서를 하나씩 여는 방식뿐 아니라, 관련 Guide를 Category 단위로 이어 읽을 수 있도록 구성되어 있습니다.

---

## 10. UI v3에서 읽는 방법

### 처음 학습할 때

Guide 번호 순서대로 읽습니다.

```text
WEB-001
   ↓
WEB-002
   ↓
...
   ↓
WEB-011
```

### Category별로 복습할 때

상단 Category 메뉴를 이용합니다.

예:

```text
통신과 API
   ├─ WEB-007
   ├─ WEB-008
   └─ WEB-009
```

HTTP, REST, CORS를 하나의 흐름으로 이어 읽을 수 있습니다.

### 특정 개념을 찾을 때

[WEB_REFERENCE_INDEX.md](./WEB_REFERENCE_INDEX.md)를 사용합니다.

### 전체 학습 순서를 확인할 때

[LEARNING_PATH.md](./LEARNING_PATH.md)를 사용합니다.

---

## 11. 인덱스 문서의 UI 노출 상태

다음 세 문서는 Learning Track의 안내와 탐색을 담당합니다.

```text
README.md
Web Foundation Learning Track

LEARNING_PATH.md
Web Foundation Learning Path

WEB_REFERENCE_INDEX.md
Web Reference Index
```

현재 UI v3는 Part와 Category의 Guide 연속 읽기를 중심으로 적용되어 있습니다.

세 인덱스 문서를 UI v3에서 직접 접근할 수 있도록 하는 메뉴 또는 시작 영역은 별도 반영이 필요합니다.

권장 연결 구조:

```text
Home
→ README.md

Learning Path
→ LEARNING_PATH.md

Part I
→ WEB-001~WEB-011

Reference
→ WEB_REFERENCE_INDEX.md
```

---

## 12. 관련 문서

### [LEARNING_PATH.md](./LEARNING_PATH.md)

다음 내용을 자세히 안내합니다.

- Part와 Category 구조
- Guide 순서
- Category별 학습 목적
- 각 구간의 완료 기준
- UI v3에서 읽는 방법
- Part II와 Part III의 방향

### [WEB_REFERENCE_INDEX.md](./WEB_REFERENCE_INDEX.md)

다음 용도로 사용합니다.

- 특정 용어가 어느 Guide에 있는지 찾기
- 같은 개념이 여러 Guide에서 어떻게 다뤄지는지 비교
- Category별 핵심 용어 확인
- 복습할 문서 빠르게 찾기

---

## 13. 권장 학습 방식

### 1단계: Guide 읽기

각 Guide의 핵심 질문을 먼저 확인합니다.

### 2단계: 흐름 이해

용어를 외우기보다 기술이 생긴 배경과 처리 순서를 봅니다.

### 3단계: 프로젝트에 연결

현재 프로젝트의 기능이 어느 개념과 연결되는지 확인합니다.

### 4단계: 질문 기록

헷갈리는 표현과 경계가 모호한 용어를 질문합니다.

### 5단계: 문서 개정

중요한 질문은 해당 Guide의 전체 개정판에 반영합니다.

### 6단계: Category 복습

UI v3의 연속 읽기를 이용해 관련 문서를 다시 연결해서 읽습니다.

---

## 14. 문서 운영 원칙

### canonical 파일명을 유지한다

개정판을 만들더라도 Reading Room의 최종 파일명은 기존 이름을 유지합니다.

예:

```text
작업 파일
WEB-009-Why-CORS-v2.md

최종 canonical 파일
WEB-009-Why-CORS.md
```

### 별도 신규 문서로 중복 등록하지 않는다

기존 Guide의 개정판은 새 문서가 아니라 기존 문서의 교체본입니다.

### 문서를 하나씩 개정한다

```text
한 문서 개정
   ↓
검토
   ↓
확정
   ↓
다음 문서
```

여러 문서를 한꺼번에 변경하지 않고, 각 문서의 논리와 상태를 확인하며 순차적으로 진행합니다.

### 변경 이력을 남긴다

각 문서 하단의 변경 이력에 주요 수정 내용을 기록합니다.

### 인덱스 문서는 역할을 나눈다

```text
README.md
Learning Track 소개와 현재 상태

LEARNING_PATH.md
학습 순서와 완료 기준

WEB_REFERENCE_INDEX.md
용어와 문서 위치
```

---

## 15. Part I 완료 기준

모든 용어를 암기하는 것이 Part I의 목표는 아닙니다.

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
- DOM과 브라우저 렌더링 과정을 설명할 수 있다.
- HTTP Header와 Body를 구분할 수 있다.
- JSON 직렬화와 UTF-8 인코딩을 구분할 수 있다.
- REST의 Resource와 Representation을 설명할 수 있다.
- CORS와 Preflight의 기본 흐름을 설명할 수 있다.
- Serverless Proxy가 필요한 이유를 설명할 수 있다.
- GitHub Pages 기반 서비스 구조를 그릴 수 있다.
- 새 기능을 어느 계층에 둘지 기본 판단을 할 수 있다.
```

---

# 다음 단계

## 16. Part II — 웹 애플리케이션 실습

Part I이 개념과 구조를 이해하는 단계라면, Part II는 브라우저와 코드를 이용해 직접 확인하는 단계입니다.

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

Part II에서는 다음 흐름을 반복합니다.

```text
개념
   ↓
짧은 코드
   ↓
브라우저 실행
   ↓
개발자 도구로 관찰
   ↓
결과와 원리 정리
```

세부 Guide 번호와 제목은 Part II 시작 시 확정합니다.

---

## 17. Part III — 웹 서비스 확장

Part III에서는 실제 서비스가 성장할 때 필요한 주제를 다룰 수 있습니다.

예상 주제:

```text
Browser Storage
사용자 인증
Database
파일 저장
보안
성능
캐시
PWA
오프라인
테스트
로그와 관찰 가능성
```

Part III의 범위는 Part II 실습 결과와 실제 프로젝트 요구를 바탕으로 결정합니다.

---

## 18. 프로젝트 연결

### Project Reading Room

```text
GitHub Pages
Markdown
JavaScript Viewer
Category Filter
Search
UI v3
Print CSS
PDF 저장
```

현재는 정적 구조를 유지하며 Serverless와 DB는 사용하지 않습니다.

### Potato's Day

```text
GitHub Pages
HTML·CSS·JavaScript
이미지와 사운드
브라우저 게임 상태
```

향후 온라인 랭킹이나 사용자 저장 기능이 생기면 Serverless와 DB를 검토할 수 있습니다.

### Living Aegis Origin

```text
Canvas 2D
JavaScript
GitHub Pages
게임 프로토타입
```

점수, 기록, 온라인 기능이 추가될 때 브라우저와 서버의 역할을 구분하는 데 활용할 수 있습니다.

### 공공데이터 기반 서비스

```text
GitHub Pages
+
Serverless Proxy
+
공공데이터 API
+
Optional Database
```

Part I의 HTTP, REST, CORS, Serverless, 서비스 아키텍처를 실제로 연결하기 좋은 실습 후보입니다.

---

## 19. 핵심 요약

- Web Foundation Learning은 웹 기술을 연결된 구조로 이해하는 학습 트랙이다.
- 학습 구조는 Part, Category, Guide로 구성한다.
- 현재 Part I의 `WEB-001`~`WEB-011`이 공식 학습 범위다.
- Part I은 5개 Category로 구성한다.
- UI v3에서는 Part와 Category 메뉴, Category별 연속 읽기를 지원한다.
- README는 소개, LEARNING_PATH는 학습 순서, REFERENCE_INDEX는 용어 탐색을 담당한다.
- 중요한 질문은 관련 Guide의 전체 개정판에 반영한다.
- 문서는 하나씩 검토하고 canonical 파일을 교체한다.
- 다음 단계는 Part II 웹 애플리케이션 실습이다.

---

# 변경 이력

## 2026-07-04

- Web Foundation Learning Track 기본 소개 작성
- 초기 Guide 목록과 학습 목적 정리

## 2026-07-14

- Part → Category → Guide 구조로 전체 개편
- Part I 제목을 `웹의 원리와 서비스 구조`로 반영
- Part I 5개 Category와 WEB-001~WEB-011 목록 정리
- WEB-007~WEB-011 주요 질의 반영 내용 추가
- Learning 전용 UI v3 적용 상태와 읽기 방식 추가
- 기존 UI와 UI v3의 병렬 운영 원칙 추가
- README, LEARNING_PATH, WEB_REFERENCE_INDEX 역할 구분
- 인덱스 문서의 UI v3 노출 보완 필요 상태 기록
- 문서별 순차 개정과 canonical 파일 유지 원칙 추가
- Part I 완료 기준 추가
- Part II와 Part III의 방향 정리
- Project Reading Room, Potato's Day, Living Aegis Origin, 공공데이터 서비스 연결 추가
