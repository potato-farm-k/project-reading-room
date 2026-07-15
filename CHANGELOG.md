# Project Reading Room Changelog

이 문서는 `project-reading-room` 저장소에 실제로 반영된 주요 변경을 기록합니다.

형식은 날짜별로 다음 범주를 사용합니다.

```text
Added
새로 추가된 문서, 기능, UI, 운영 구조

Changed
기존 문서, 기능, 구조의 변경

Fixed
오류 또는 표시 문제 수정

Verified
사용자가 직접 확인한 항목

Not Verified
기능은 유지되지만 해당 변경 시점에 확인하지 않은 항목
```

> 이 Changelog는 2026년 7월 15일부터 정식으로 관리합니다.
> 그 이전 작업은 현재 저장소 구조를 이해하는 데 필요한 주요 내용만 소급하여 요약합니다.

---

## Unreleased / Pending

아직 반영 예정이거나 확인이 끝나지 않은 항목을 기록합니다.

### Pending

- 브라우저 인쇄 확인
- PDF 저장 출력 확인
- Web Foundation Learning Part II 기획

---

## 기록 범위

이 문서에는 **Project Reading Room 저장소 관점의 변경만 기록**합니다.

기록 대상:

```text
- Reading Room에 새 문서 또는 reading copy가 추가됨
- 기존 문서가 개정판으로 교체됨
- metadata, frontmatter, library.json이 변경됨
- UI, navigation, 검색, 모바일, 인쇄 구조가 변경됨
- Reading Room 운영문서와 운영 절차가 변경됨
```

기록하지 않는 대상:

```text
- 원본 프로젝트의 개발 진행 자체
- Reading Room에 아직 반영되지 않은 원본 문서 변경
- 원본 프로젝트의 내부 일정과 구현 상태
```

예:

```text
Living Aegis Origin에서 새 prototype 개발
→ 기록하지 않음

해당 prototype 문서가 승인되어 Reading Room에 reading copy로 반영
→ 기록함
```

문서별 세부 수정 이력은 각 문서 하단의 `변경 이력`을 참고합니다.

```text
STATUS.md
현재 상태와 다음 작업

CHANGELOG.md
저장소에 실제로 반영된 변경

DECISION_LOG.md
변경과 운영 방식의 결정 이유
```

---

# 2026-07-15

## Added

### 루트 운영문서 체계

- 저장소 전체의 현재 운영 상태를 관리하기 위한 루트 `STATUS.md`를 추가했습니다.
- 저장소 전체 변경 이력을 날짜순으로 관리하기 위한 루트 `CHANGELOG.md`를 추가했습니다.
- 저장소 전체 의사결정과 결정 이유를 관리하기 위한 루트 `DECISION_LOG.md`를 추가했습니다.
- 운영문서는 개별 프로젝트별로 분리하지 않고, Project Reading Room 저장소 관점에서 통합 관리하기로 했습니다.

### Learning UI v3 인덱스 navigation

Learning UI v3 상단에서 다음 인덱스 문서로 직접 이동할 수 있는 navigation을 추가했습니다.

```text
Home
→ library/learning/web-foundation/README.md

Learning Path
→ library/learning/web-foundation/LEARNING_PATH.md

Part I
→ WEB-001~WEB-011
→ 5개 Category
→ Category별 Guide 연속 읽기

Reference
→ library/learning/web-foundation/WEB_REFERENCE_INDEX.md
```

인덱스 문서 3종은 일반 Guide나 Category에 포함하지 않고, Learning Track의 안내와 탐색을 위한 별도 진입점으로 구성했습니다.

---

## Changed

### WEB-007. How HTTP Works

다음 내용을 중심으로 전체 개정했습니다.

- HTTP가 본질적으로 바이트를 전달한다는 관점
- 텍스트와 바이너리의 차이
- ASCII, Unicode, UTF-8의 관계
- UTF-8 인코딩과 디코딩
- JSON 직렬화와 역직렬화
- 직렬화와 문자 인코딩의 차이
- Base64의 변환 방향과 용도
- 이미지가 JSON에 포함될 때의 전체 변환 과정
- `Content-Type`
- `multipart/form-data`

Canonical 경로:

```text
library/learning/web-foundation/WEB-007-How-HTTP-Works.md
```

### WEB-008. Why REST API

다음 내용을 중심으로 전체 개정했습니다.

- URL, Path, Path Variable, Query Parameter 구분
- REST 스타일과 RPC 스타일 비교
- HTTP와 REST의 개념적 계층 구분
- Servlet·JSP와 REST API 응답 방식 비교
- JSON 직렬화
- REST의 Representation과 화면 Presentation 구분
- Entity와 Response DTO 분리
- HTTP Status Code를 활용한 응답 설계
- Stateless와 Client–Server 역할 분리

Canonical 경로:

```text
library/learning/web-foundation/WEB-008-Why-REST-API.md
```

### WEB-009. Why CORS

다음 내용을 중심으로 전체 개정했습니다.

- Origin과 Same-Origin Policy
- 요청 전송과 응답 읽기 제한의 차이
- `Access-Control-Allow-Origin`의 의미
- Simple Request
- Preflight와 `OPTIONS`
- Preflight 실패 시 본 요청 전송 여부
- 브라우저가 정해진 요청 형식에 따라 Preflight 여부를 판단한다는 점
- CORS와 인증·권한의 차이
- GitHub Pages와 Serverless Proxy 사이의 CORS 구간

Canonical 경로:

```text
library/learning/web-foundation/WEB-009-Why-CORS.md
```

### WEB-010. Why Serverless

다음 내용을 중심으로 전체 개정했습니다.

- Serverless가 외부 클라우드 서비스를 이용하는 구조
- 전용 서버와 함수 실행 환경의 차이
- 가입, 프로젝트 생성, 환경 변수, 배포, URL 발급 흐름
- Serverless Function과 Serverless Proxy 구분
- API Key 보호
- CORS 중계
- Stateless와 Cold Start
- 비용과 실행 제한
- 플랫폼의 기능 지원 여부와 아키텍처 적합성 구분
- Browser, Serverless, Database, General Server의 역할 판단

Canonical 경로:

```text
library/learning/web-foundation/WEB-010-Why-Serverless.md
```

### WEB-011. GitHub Pages Architecture

다음 내용을 중심으로 전체 개정했습니다.

- 정적 사이트와 동적 서비스의 차이
- GitHub Pages와 브라우저의 역할
- 외부 API 직접 호출 조건
- Serverless Proxy 도입 기준
- API Key와 환경 변수
- Browser–Proxy–외부 API 사이의 CORS 구간
- Database 도입 시점
- Browser Storage와 Database 구분
- 일반 서버가 필요한 기능
- 계층별 신뢰 수준과 서버 검증
- 응답 가공과 오류 처리
- 정적 사이트에서 복합 서비스까지의 단계별 확장

Canonical 경로:

```text
library/learning/web-foundation/WEB-011-GitHub-Pages-Architecture.md
```

---

### Web Foundation Learning Track

`README.md`를 다음 역할에 맞게 전체 개정하고 마감 상태를 반영했습니다.

```text
Learning Track의 목적
현재 Part 상태
Part → Category → Guide 구조
Part I의 5개 Category
UI v3 사용 방식
문서 운영 원칙
Part II와 Part III 방향
```

UI v3 적용 후 다음 상태를 추가 반영했습니다.

- `Home / Learning Path / Part I / Reference` navigation 적용 완료
- 인덱스 문서 3종 직접 접근 완료
- 기존 Part I Category 연속 읽기 유지
- 화면·링크·모바일 확인 완료
- 인쇄·PDF 저장 미확인 상태 명시

Canonical 경로:

```text
library/learning/web-foundation/README.md
```

### Web Foundation Learning Path

`LEARNING_PATH.md`를 다음 구조로 전체 개정하고 마감 상태를 반영했습니다.

```text
Part → Category → Guide
Part I의 학습 목적과 완료 기준
Category별 Guide와 핵심 질문
UI v3에서 읽는 방법
문서별 순차 개정 프로세스
Part II와 Part III 방향
```

UI v3 적용 후 다음 상태를 추가 반영했습니다.

- `Home / Learning Path / Part I / Reference` 실제 접근 구조
- 인덱스 문서 접근 경로
- 기존 Category 연속 읽기 유지
- 화면·링크·모바일 확인 완료
- 인쇄·PDF 저장 미확인 상태 명시

Canonical 경로:

```text
library/learning/web-foundation/LEARNING_PATH.md
```

### Web Reference Index

`WEB_REFERENCE_INDEX.md`를 다음 구조로 전체 개정하고 마감 상태를 반영했습니다.

```text
WEB-001~WEB-011 문서별 색인
Part I Category별 색인
용어별 통합 색인
주요 문서와 관련 문서 구분
자주 혼동하는 개념 비교
프로젝트별 빠른 참조
Part II 확장 원칙
```

UI v3 적용 후 다음 상태를 추가 반영했습니다.

- `Reference` 메뉴 직접 접근 완료
- 전체 상단 navigation 구조 반영
- 화면·링크·모바일 확인 완료
- 인쇄·PDF 저장 미확인 상태 명시
- UI 직접 노출이 별도 필요하다는 오래된 문구 제거

Canonical 경로:

```text
library/learning/web-foundation/WEB_REFERENCE_INDEX.md
```

---

## Verified

사용자가 실제 화면에서 다음 항목을 확인했습니다.

```text
- Learning UI v3 화면 표시
- Home 링크
- Learning Path 링크
- Part I 및 Category 이동
- Reference 링크
- Category별 Guide 연속 읽기
- 모바일 화면
- 마감 개정판 3종 저장소 반영
```

---

## Not Verified

이번 마감에서는 다음 항목을 확인하지 않았습니다.

```text
- 브라우저 인쇄
- PDF 저장
```

기존 인쇄·PDF 구조는 유지하지만, 현재 완료 판단에는 포함하지 않습니다.

---

# Earlier history summary

> 아래 항목은 Changelog 정식 관리 시작 이전의 주요 구조를 현재 저장소 기준으로 요약한 것입니다. 정확한 반영일을 확인하기 어려운 과거 작업에는 임의 날짜를 부여하지 않습니다.

## Added

### Project Reading Room 기본 구조

- 정적 HTML, CSS, JavaScript 기반 Markdown Reading Room을 구성했습니다.
- GitHub Pages에서 접근할 수 있는 배포 구조를 적용했습니다.
- 다음 기본 기능을 구성했습니다.

```text
문서 목록
Markdown Viewer
Category Filter
간단한 검색
모바일 읽기
인쇄용 CSS
브라우저 인쇄 / PDF 저장
```

### Library 구조

- Reading Room 문서 루트를 `library/`로 사용했습니다.
- 문서 목록과 metadata를 `library.json`으로 관리했습니다.
- Learning 문서 경로를 다음과 같이 구성했습니다.

```text
library/learning/web-foundation/
```

### Web Foundation Learning Part I

다음 Guide를 Part I의 공식 범위로 구성했습니다.

```text
WEB-001 ~ WEB-011
```

Part I Category:

```text
웹의 구조
문서와 표현
동작과 렌더링
통신과 API
배포와 서비스 아키텍처
```

### Learning UI v3

- 기존 Reading Room UI를 유지한 채 Learning 전용 UI v3를 병렬로 추가했습니다.
- 좌측 고정 프레임 없이 상단 Part·Category navigation을 사용하는 구조를 적용했습니다.
- Category별 Guide를 한 페이지에서 연속으로 읽는 방식을 적용했습니다.
- Pretendard 기반의 읽기 화면을 적용했습니다.

### Reading copy 운영 흐름

다음 운영 원칙을 확정했습니다.

```text
- Reading Room은 모든 문서를 모으는 문서 창고가 아니다.
- 프로젝트별 공식 원본은 각 원본 프로젝트 저장소에 유지한다.
- Reading Room에는 승인된 reading copy만 반영한다.
- 문서 포함 여부는 개별 프로젝트 PM과 사용자가 결정한다.
- Reading Room Codex는 승인된 문서의 반영을 담당한다.
```

---

## Changed

### Root Index

- 저장소 문서를 한눈에 확인할 수 있도록 Root Index를 보강했습니다.
- 제목, 파일 경로, Category, Type과 Source Path를 확인할 수 있는 구조를 적용했습니다.
- Project Reading Room Document Flow 안내를 추가했습니다.

### Reading UI와 인쇄 표현

- 본문 배경, 제목, 목록, 표, 인용문, 코드 블록의 읽기 표현을 보강했습니다.
- 모바일 읽기와 브라우저 인쇄를 고려한 CSS를 적용했습니다.
- 기존 UI와 Learning UI v3를 병렬로 유지했습니다.

---

# Maintenance Rule

## Changelog 갱신 시점

다음 변경이 저장소에 실제 반영되었을 때 갱신합니다.

```text
- 새로운 reading copy 추가
- 기존 reading copy 교체
- Learning Guide 추가 또는 전체 개정
- UI 또는 navigation 변경
- library.json 또는 metadata 변경
- 운영문서 추가 또는 운영 절차 변경
- 주요 확인 작업 완료
```

## 날짜 기준

가능하면 실제 저장소 반영일을 사용합니다.

정확한 날짜를 확인할 수 없는 과거 작업은 임의의 날짜를 만들지 않고, 별도 요약 영역에 기록합니다.

## 상태 구분

```text
완료된 변경
날짜별 항목에 기록

진행 중 또는 다음 작업
STATUS.md에 기록

결정 이유
DECISION_LOG.md에 기록
```
