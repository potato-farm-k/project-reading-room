# Project Reading Room Status

최종 갱신: 2026-07-15

> 이 문서는 `project-reading-room` 저장소의 현재 운영 상태를 기록합니다.
> 각 원본 프로젝트의 개발 진행 상황이 아니라, Reading Room에 반영된 문서·UI·운영 상태만 다룹니다.

---

## 1. 현재 상태 요약

```text
저장소 상태
운영 중

주요 기능
정적 Markdown Reading Room
GitHub Pages 배포
문서 목록과 Viewer
Category Filter
검색
모바일 읽기
브라우저 인쇄 / PDF 저장 기반
Learning 전용 UI v3

현재 주요 작업축
Web Foundation Learning Part I 마감 완료
Part II 기획 준비
Reading copy 운영 체계 정리
```

---

## 2. 저장소 역할

`project-reading-room`은 여러 프로젝트의 모든 문서를 모으는 문서 창고가 아닙니다.

반복해서 읽을 가치가 있다고 판단된 문서를 선별하여 제공하는 개인용 Markdown Reading Room입니다.

운영 원칙:

```text
- 프로젝트별 공식 원본 문서는 각 원본 프로젝트 저장소에 유지한다.
- Reading Room에는 승인된 reading copy만 반영한다.
- 문서 포함 여부는 개별 프로젝트 PM과 사용자가 결정한다.
- Reading Room Codex는 승인된 문서의 반영과 표시 상태를 담당한다.
- 기존 문서의 개정판은 새 문서로 등록하지 않고 canonical 파일을 교체한다.
- 문서 갱신은 문서별로 하나씩 검토하고 확정한다.
```

---

## 3. 현재 콘텐츠 영역

현재 Reading Room에는 다음과 같은 성격의 문서가 포함될 수 있습니다.

```text
Learning
웹 기초 학습 문서와 학습 경로

Project Reading Copies
개별 프로젝트에서 승인된 반복 읽기용 문서

Common Documents
특정 프로젝트에만 속하지 않는 공통 참고 문서
```

각 원본 프로젝트의 개발 상태와 일정은 해당 프로젝트 저장소에서 관리합니다.

이 문서에서는 Reading Room에 실제로 반영된 상태만 기록합니다.

---

# Learning

## 4. Web Foundation Learning

### 현재 상태

```text
Part I — 웹의 원리와 서비스 구조
상태: 완료

Part II — 웹 애플리케이션 실습
상태: 기획 준비

Part III — 웹 서비스 확장
상태: 향후 계획
```

### Part I 문서 범위

```text
WEB-001 ~ WEB-011
```

### Part I Category

```text
1. 웹의 구조
   WEB-001
   WEB-002

2. 문서와 표현
   WEB-003
   WEB-004

3. 동작과 렌더링
   WEB-005
   WEB-006

4. 통신과 API
   WEB-007
   WEB-008
   WEB-009

5. 배포와 서비스 아키텍처
   WEB-010
   WEB-011
```

### 주요 개정 완료

다음 Guide는 학습 중 나온 질문을 반영하여 전체 개정했습니다.

```text
WEB-007
HTTP, UTF-8, Base64, JSON 직렬화와 인코딩

WEB-008
REST, URL 구조, Path Variable, Query Parameter,
Servlet·JSP 비교, Representation, DTO

WEB-009
Same-Origin Policy, CORS,
요청 전송과 응답 읽기 제한, Preflight

WEB-010
Serverless 서비스 구조, Function, Proxy,
환경 변수, 지원 가능 여부와 적합성 판단

WEB-011
GitHub Pages, 브라우저, Serverless,
외부 API, Database, 일반 서버의 역할 배치
```

---

## 5. Web Foundation 인덱스 문서

다음 세 문서의 전체 개정과 마감 개정이 완료되었습니다.

```text
library/learning/web-foundation/README.md
Web Foundation Learning Track

library/learning/web-foundation/LEARNING_PATH.md
Web Foundation Learning Path

library/learning/web-foundation/WEB_REFERENCE_INDEX.md
Web Reference Index
```

역할 구분:

```text
README.md
Learning Track의 목적과 현재 상태

LEARNING_PATH.md
Part / Category / Guide 학습 순서와 완료 기준

WEB_REFERENCE_INDEX.md
문서별·Category별·용어별 참고 색인
```

---

# UI and Reading Experience

## 6. UI surfaces

### Classic UI

경로:

```text
/
```

기존 Reading Room UI는 유지되고 있습니다.

주요 기능:

```text
문서 목록
문서 Viewer
Category Filter
검색
모바일 읽기
인쇄용 CSS
브라우저 인쇄 / PDF 저장
```

### UI v2

경로:

```text
ui-v2/
```

역할:

```text
- 전체 Reading Room의 대체 디자인 실험
- 기존 library.json과 library/ 문서 사용
- Classic UI를 대체하지 않음
```

Learning UI v3는 Classic UI와 UI v2를 대체하지 않고 병렬로 운영합니다.

---

## 7. Learning UI v3

### 현재 상태

```text
PM 검토 승인
완료

개발과 적용
완료

인덱스 문서 navigation
완료
```

### 적용 구조

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

### 주요 특징

```text
- Learning 카테고리 전용
- 기존 Reading Room UI와 병렬 운영
- 좌측 검색·선택 프레임 없음
- 상단 안내 navigation
- 상단 Part / Category navigation
- Category별 Guide 연속 읽기
- Pretendard 기반 읽기 화면
```

---

## 8. 확인 상태

2026년 7월 15일 기준:

| 확인 항목 | 상태 |
|---|---|
| UI v3 화면 표시 | 확인 완료 |
| Home 링크 | 확인 완료 |
| Learning Path 링크 | 확인 완료 |
| Part I 및 Category 이동 | 확인 완료 |
| Reference 링크 | 확인 완료 |
| Category별 Guide 연속 읽기 | 확인 완료 |
| 모바일 화면 | 확인 완료 |
| 인쇄·PDF 저장 | 미확인 |

인쇄·PDF 저장 기능은 현재 확실하게 사용할 기능으로 정해지지 않아 이번 마감 점검에서는 확인하지 않았습니다.

기존 브라우저 인쇄와 PDF 저장 구조는 유지합니다.

---

# Project Reading Copies

## 9. 운영 상태

개별 프로젝트 문서는 다음 흐름으로 Reading Room에 반영합니다.

```text
개별 프로젝트 PM + 사용자
문서 포함 여부 결정
        ↓
원본 프로젝트 저장소에 공식 문서 저장
        ↓
Reading Room 반영 요청
        ↓
Reading Room Codex
reading copy 생성 또는 갱신
        ↓
metadata / frontmatter / library.json 확인
        ↓
화면 표시와 기본 읽기 상태 점검
```

현재 이 문서에서는 개별 프로젝트의 개발 진행 상황을 관리하지 않습니다.

기록 대상:

```text
- Reading Room에 새 reading copy가 추가됨
- 기존 reading copy가 교체됨
- metadata 또는 표시 상태가 변경됨
- Category나 문서 경로가 변경됨
```

기록 대상이 아닌 것:

```text
- 원본 프로젝트의 개발 진행
- 원본 프로젝트의 내부 일정
- Reading Room에 아직 반영되지 않은 작업
```

---

# Document Operations

## 10. canonical 파일 운영

기존 문서의 개정판은 새 문서가 아닙니다.

예:

```text
작업 파일
WEB-010-Why-Serverless-v2.md

최종 canonical 파일
library/learning/web-foundation/WEB-010-Why-Serverless.md
```

운영 원칙:

```text
- 기존 canonical 파일명을 유지한다.
- 개정판을 library.json에 별도 문서로 중복 등록하지 않는다.
- 작업용 파일명은 저장소 반영 전에 canonical 파일명으로 교체한다.
- 변경 이력은 문서 내부 또는 루트 CHANGELOG.md에 기록한다.
```

---

## 11. 문서 갱신 프로세스

문서는 가능한 한 하나씩 갱신합니다.

```text
질문 또는 변경 요구
        ↓
대상 문서 결정
        ↓
전체 개정판 작성
        ↓
사용자 검토
        ↓
canonical 파일 교체
        ↓
UI와 링크 확인
        ↓
다음 문서로 이동
```

장기 작업에서는 중간중간 다음 상태를 리마인드합니다.

```text
현재 단계
완료된 문서
다음 작업
보류 또는 미확인 사항
```

---

# Current Work

## 12. 최근 완료

```text
- WEB-007 전체 개정
- WEB-008 전체 개정
- WEB-009 전체 개정
- WEB-010 전체 개정
- WEB-011 전체 개정
- README.md 전체 개정 및 마감 개정
- LEARNING_PATH.md 전체 개정 및 마감 개정
- WEB_REFERENCE_INDEX.md 전체 개정 및 마감 개정
- Learning UI v3 인덱스 navigation 적용
- 화면·링크·모바일 확인
- 마감 개정판 3종 저장소 반영 확인
- 루트 STATUS.md 추가
- 루트 CHANGELOG.md 추가
- 루트 DECISION_LOG.md 추가
```

---

## 13. 진행 중

현재 진행 중인 구현 작업은 없습니다.

Reading Room 루트 운영문서는 다음 상태입니다.

```text
STATUS.md
현재 상태 관리 시작

CHANGELOG.md
변경 이력 관리 시작

DECISION_LOG.md
의사결정 기록 관리 시작
```

---

## 14. 다음 작업

우선순위:

```text
1. Web Foundation Learning Part II 기획
   목표
   Category
   첫 실습 프로젝트
```

Part II의 예상 방향:

```text
브라우저 개발자 도구
JavaScript 실행
Fetch API
비동기 처리
JSON
공공데이터 API
CORS 확인
Serverless Proxy
환경 변수
GitHub Pages 배포
```

세부 Guide 번호와 제목은 Part II 기획 단계에서 확정합니다.

---

## 15. 보류 및 미확인

```text
인쇄·PDF 저장
현재 미확인

Part II 세부 문서 구성
아직 미확정

Part III 범위
향후 실제 프로젝트 요구를 바탕으로 결정
```

미확인 항목은 완료된 것으로 기록하지 않습니다.

---

# Repository Paths

## 16. 주요 경로

```text
library/
Reading copy와 Learning 문서 저장

library/learning/web-foundation/
Web Foundation Learning 문서

library.json
문서 목록과 metadata

README.md
저장소 루트 소개 문서가 존재하는 경우 별도 역할

STATUS.md
현재 Reading Room 운영 상태

CHANGELOG.md
저장소 전체 변경 이력

DECISION_LOG.md
Reading Room 운영 결정 기록
```

---

# Status Rule

## 17. 이 문서의 갱신 원칙

`STATUS.md`는 과거 작업을 모두 쌓는 문서가 아닙니다.

항상 현재 상태를 기준으로 갱신합니다.

```text
STATUS.md
현재 상태와 다음 작업

CHANGELOG.md
완료된 변경의 시간순 기록

DECISION_LOG.md
왜 그렇게 운영하기로 했는지에 대한 결정 기록
```

다음 경우에 갱신합니다.

```text
- 주요 Part 또는 Learning Track 상태가 변경됨
- UI 기능이 추가되거나 제거됨
- Reading copy 운영 방식이 변경됨
- 다음 주요 작업이 변경됨
- 보류 항목이 확인 또는 완료됨
```

---

# Current Summary

## 18. 현재 한 줄 상태

```text
Project Reading Room은 운영 중이며,
Web Foundation Learning Part I과 Learning UI v3 마감이 완료되었고,
루트 운영문서 정리 후 Part II 기획을 시작할 단계다.
```
