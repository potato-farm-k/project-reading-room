# Project Reading Room Decision Log

최초 작성: 2026-07-15
최종 갱신: 2026-07-15

> 이 문서는 `project-reading-room` 저장소의 장기 운영 원칙과 주요 설계 결정을 기록합니다.
> 무엇이 바뀌었는지는 `CHANGELOG.md`, 현재 어디까지 진행됐는지는 `STATUS.md`에서 관리합니다.

---

## 1. 문서 목적

`DECISION_LOG.md`는 다음 질문에 답하기 위한 문서입니다.

```text
왜 이 저장소를 이런 방식으로 운영하는가?
왜 다른 선택지를 사용하지 않았는가?
이 결정은 어디까지 적용되는가?
앞으로 어떤 작업이 이 결정을 따라야 하는가?
```

이 문서는 단순 작업 목록이나 회의 메모가 아닙니다.

다음과 같은 장기적인 결정을 기록합니다.

```text
- 저장소의 역할
- 원본 문서와 reading copy의 관계
- 문서 포함 승인 절차
- canonical 파일 운영
- UI 구조와 병렬 운영 원칙
- 운영문서 관리 방식
- Codex 작업 요청 절차
```

---

## 2. 다른 운영문서와의 관계

```text
STATUS.md
현재 상태, 진행 중, 다음 작업, 보류 항목

CHANGELOG.md
저장소에 실제로 반영된 변경의 시간순 기록

DECISION_LOG.md
왜 그렇게 운영하고 설계하기로 했는지에 대한 결정 기록
```

예:

```text
Learning UI v3가 적용되었다.
→ CHANGELOG.md

Learning UI v3가 현재 운영 중이다.
→ STATUS.md

Learning UI v3는 기존 UI를 제거하지 않고 병렬 운영한다.
→ DECISION_LOG.md
```

---

## 3. 기록 규칙

각 결정은 다음 상태 중 하나를 사용합니다.

```text
Proposed
검토 중이며 아직 확정되지 않음

Accepted
현재 유효한 결정

Superseded
새로운 결정으로 대체됨

Deprecated
더 이상 권장하지 않지만 일부 구조에 남아 있음

Rejected
검토했으나 채택하지 않음
```

적용 범위는 가능한 한 명확히 표시합니다.

예:

```text
적용 범위: 저장소 전체
적용 범위: 모든 project-specific reading copy
적용 범위: Web Foundation Learning
적용 범위: Learning UI v3
```

최초 작성 시 기존에 확정된 결정을 소급 정리했습니다.

정확한 원결정일을 확인하기 어려운 항목은 임의 날짜를 만들지 않고 `기록일`을 사용합니다.

---

# Accepted Decisions

## DEC-001 — Reading Room은 선별된 읽기 공간으로 운영한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: 저장소 전체

### 결정

`project-reading-room`은 여러 프로젝트의 모든 문서를 모으는 문서 창고로 운영하지 않습니다.

반복해서 읽을 가치가 있다고 판단된 문서를 선별하여 제공하는 개인용 Markdown Reading Room으로 운영합니다.

### 이유

모든 문서를 복사하면 다음 문제가 생깁니다.

```text
- 중요한 문서와 일시적인 작업 문서가 섞인다.
- 원본 프로젝트와 Reading Room의 역할이 중복된다.
- 어느 문서가 최신인지 판단하기 어려워진다.
- 읽기 공간이 다시 문서 보관소와 프로젝트 관리 공간으로 변한다.
```

Reading Room의 핵심 가치는 문서 수가 아니라 선별과 반복 읽기에 있습니다.

### 영향

```text
- 승인되지 않은 문서를 자동으로 가져오지 않는다.
- 프로젝트의 모든 운영문서를 복제하지 않는다.
- 반복 읽기 가치가 있는 문서만 reading copy로 반영한다.
- 문서 추가 요청에는 포함 이유와 읽기 목적이 있어야 한다.
```

---

## DEC-002 — 프로젝트별 공식 원본은 각 원본 저장소에 유지한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: 모든 project-specific reading copy

### 결정

특정 프로젝트에 속한 공식 문서의 source of truth는 해당 프로젝트 저장소에 유지합니다.

Reading Room에는 원본을 대체하는 공식 문서가 아니라, 승인된 reading copy를 둡니다.

### 이유

프로젝트 문서의 원본과 Reading Room 사본이 동시에 공식 문서가 되면 다음 문제가 생깁니다.

```text
- 두 저장소의 내용이 달라질 수 있다.
- 수정할 위치가 모호해진다.
- 프로젝트 상태와 Reading Room 표시 상태가 섞인다.
- 원본 프로젝트의 문서 운영 책임이 약해진다.
```

### 영향

```text
- 프로젝트별 문서는 원본 프로젝트에서 먼저 확정한다.
- Reading Room 문서에는 필요한 경우 source_repo와 source_path를 기록한다.
- 원본 내용이 변경되면 승인 절차를 거쳐 reading copy를 갱신한다.
- Reading Room에서 프로젝트 원본을 임의로 재정의하지 않는다.
```

### 예외

특정 프로젝트에 속하지 않는 공통 문서는 Reading Room이 source of truth가 될 수 있습니다.

예:

```text
Web Foundation Learning
Reading Room 공통 운영 가이드
공통 참고 문서
```

---

## DEC-003 — 문서 포함 여부는 개별 프로젝트 PM과 사용자가 결정한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: 모든 project-specific reading copy

### 결정

Reading Room에 문서를 포함할지 여부는 해당 개별 프로젝트의 PM과 사용자가 함께 결정합니다.

별도의 Reading Room PM 승인 단계를 추가하지 않습니다.

### 이유

문서의 중요도와 반복 읽기 가치는 해당 프로젝트의 맥락을 가장 잘 아는 프로젝트 PM과 사용자가 판단하는 것이 적절합니다.

별도 승인 단계를 추가하면 다음 문제가 생깁니다.

```text
- 승인 절차가 불필요하게 길어진다.
- Reading Room 담당자가 프로젝트 내용을 다시 판단해야 한다.
- 역할과 책임이 중복된다.
```

### 영향

```text
개별 프로젝트 PM + 사용자
포함 여부 결정
        ↓
원본 프로젝트 문서 확정
        ↓
Reading Room 반영 요청
```

Reading Room Codex는 승인된 문서의 포함 가치를 다시 심사하지 않습니다.

---

## DEC-004 — Reading Room Codex는 승인된 문서의 반영과 표시를 담당한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: Reading copy 반영 작업

### 결정

Reading Room Codex의 책임은 승인된 문서를 Reading Room 형식에 맞게 반영하는 것입니다.

주요 책임:

```text
- reading copy 생성 또는 교체
- frontmatter와 metadata 확인
- library.json 반영
- Category와 경로 확인
- 화면 표시 확인
- 기본 모바일·읽기 상태 확인
```

### 이유

콘텐츠 승인과 저장소 반영을 분리하면 역할이 명확해집니다.

```text
개별 프로젝트 PM
문서 내용과 포함 가치 판단

Reading Room Codex
저장소 구조와 표시 품질 책임
```

### 영향

Reading Room Codex는 최신 승인 내용보다 오래된 문서나 과거 결정을 우선하여 추론하지 않습니다.

반영 요청에는 가능한 한 현재 최종 결정을 명시합니다.

---

## DEC-005 — 기존 문서 개정판은 canonical 파일을 교체한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: 모든 기존 Reading Room 문서의 개정

### 결정

기존 문서의 개정판은 새로운 문서로 추가하지 않고 기존 canonical 파일을 교체합니다.

예:

```text
작업 파일
WEB-009-Why-CORS-v2.md

최종 canonical 파일
library/learning/web-foundation/WEB-009-Why-CORS.md
```

### 이유

개정판을 별도 문서로 추가하면 다음 문제가 생깁니다.

```text
- 같은 문서가 여러 개 표시된다.
- 어느 버전이 최신인지 알기 어렵다.
- library.json에 중복 항목이 생긴다.
- 기존 링크와 학습 순서가 깨질 수 있다.
```

### 영향

```text
- 작업용 파일명에는 v2, revision 등을 사용할 수 있다.
- 저장소 반영 시 기존 canonical 파일명을 유지한다.
- library.json에 개정판을 별도 문서로 중복 등록하지 않는다.
- 변경 내용은 문서 내부 변경 이력과 루트 CHANGELOG.md에 기록한다.
```

---

## DEC-006 — 문서 갱신은 가능한 한 하나씩 진행한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: 문서 개정 작업 전반

### 결정

서로 관련된 문서가 여러 개 있어도 가능한 한 문서별로 하나씩 개정하고 검토한 뒤 다음 문서로 이동합니다.

기본 흐름:

```text
대상 문서 결정
        ↓
전체 개정판 작성
        ↓
사용자 검토
        ↓
canonical 파일 교체
        ↓
표시 상태 확인
        ↓
다음 문서
```

### 이유

여러 문서를 한꺼번에 수정하면 다음 문제가 생길 수 있습니다.

```text
- 어느 질문이 어느 문서에 반영됐는지 불명확해진다.
- 문서별 설명 깊이와 표현이 달라질 수 있다.
- 중간에 새로운 질문이 생기면 여러 문서를 다시 수정해야 한다.
- 전체 개정판 대신 요약본만 만들어지는 실수가 생길 수 있다.
```

### 영향

장기 작업에서는 다음 상태를 중간중간 짧게 리마인드합니다.

```text
현재 단계
완료된 문서
다음 작업
보류 또는 미확인 사항
```

---

## DEC-007 — Reading Room 운영문서는 저장소 전체 기준으로 통합 관리한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: 루트 운영문서

### 결정

Reading Room 저장소의 운영문서는 개별 출처 프로젝트별로 분리하지 않고 루트에서 통합 관리합니다.

현재 운영문서:

```text
STATUS.md
CHANGELOG.md
DECISION_LOG.md
```

### 이유

프로젝트별로 Reading Room용 운영문서를 만들면 원본 프로젝트의 운영문서와 역할이 중복됩니다.

```text
library/potato-day/STATUS.md
library/living-aegis-origin/STATUS.md
```

같은 구조는 다음 혼란을 만들 수 있습니다.

```text
- 원본 프로젝트 상태와 Reading Room 반영 상태가 섞인다.
- 어느 상태 문서가 공식인지 모호해진다.
- Reading Room이 다시 프로젝트 관리 저장소처럼 변한다.
```

### 영향

루트 운영문서에는 다음만 기록합니다.

```text
- Reading Room에 실제 반영된 문서 상태
- UI와 navigation 상태
- reading copy 추가·교체
- Reading Room 운영 원칙
```

다음은 기록하지 않습니다.

```text
- 원본 프로젝트의 개발 진행
- 원본 프로젝트의 내부 일정
- Reading Room에 아직 반영되지 않은 변경
```

---

## DEC-008 — Learning 구조는 Part → Category → Guide를 사용한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: Web Foundation Learning 및 향후 Learning Track

### 결정

Learning 콘텐츠는 다음 세 계층으로 구성합니다.

```text
Part
학습의 큰 단계

Category
서로 연결된 주제 묶음

Guide
하나의 핵심 질문을 다루는 개별 학습 문서
```

### 이유

문서 번호만 나열하면 학습의 큰 흐름과 관련 문서 묶음을 파악하기 어렵습니다.

Part와 Category를 추가하면 다음이 가능합니다.

```text
- 전체 학습 단계 파악
- 관련 Guide의 연속 읽기
- Category 단위 복습
- Part II와 Part III로 확장
```

### 영향

Web Foundation Learning Part I은 다음 Category를 사용합니다.

```text
1. 웹의 구조
2. 문서와 표현
3. 동작과 렌더링
4. 통신과 API
5. 배포와 서비스 아키텍처
```

Guide 파일은 기존 `WEB-001` 형식의 번호 체계를 유지합니다.

---

## DEC-009 — Learning UI v3는 기존 UI와 병렬 운영한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: Learning UI v3

### 결정

Learning UI v3는 기존 Reading Room UI를 제거하거나 대체하지 않고 병렬로 운영합니다.

### 이유

기존 UI는 전체 Reading Room의 문서 탐색과 검색에 적합하고, UI v3는 Learning 콘텐츠의 연속 읽기에 최적화되어 있습니다.

두 UI는 목적이 다릅니다.

```text
기존 Reading Room UI
전체 문서 목록, 검색, Category Filter, 개별 Viewer

Learning UI v3
Part·Category 학습 흐름, Guide 연속 읽기
```

### 영향

```text
- 기존 UI 기능을 유지한다.
- UI v3 변경이 기존 UI에 영향을 주지 않도록 한다.
- Learning 이외의 문서를 UI v3에 무리하게 포함하지 않는다.
- UI v3는 Learning 카테고리 전용으로 운영한다.
```

---

## DEC-010 — Learning UI v3는 상단 navigation과 Category 연속 읽기를 사용한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: Learning UI v3

### 결정

Learning UI v3는 좌측 고정 검색·선택 프레임을 사용하지 않고 상단 navigation을 사용합니다.

현재 구조:

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

### 이유

Learning 콘텐츠는 검색 결과에서 개별 문서를 고르는 것뿐 아니라, 선후 관계와 주제 묶음에 따라 이어 읽는 경험이 중요합니다.

### 영향

```text
- 인덱스 문서 3종은 일반 Guide에 섞지 않는다.
- Category를 선택하면 관련 Guide를 연속해서 표시한다.
- 개별 Guide 접근도 유지한다.
- 화면·링크·모바일 동작을 기본 확인 범위로 둔다.
```

### 확인 상태

2026년 7월 15일 기준:

```text
화면
확인 완료

링크와 navigation
확인 완료

모바일
확인 완료

인쇄·PDF
미확인
```

인쇄·PDF 확인은 향후 필요성이 명확해질 때 수행합니다.

---

## DEC-011 — Learning 인덱스 문서는 역할을 분리한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: Web Foundation Learning

### 결정

세 인덱스 문서는 동일 내용을 반복하지 않고 각각 다른 역할을 담당합니다.

```text
README.md
Learning Track의 목적과 현재 상태

LEARNING_PATH.md
Part / Category / Guide의 학습 순서와 완료 기준

WEB_REFERENCE_INDEX.md
문서별·Category별·용어별 참고 색인
```

### 이유

세 문서에 같은 정보를 반복하면 수정 시 불일치가 생기고, 사용자가 어느 문서를 봐야 하는지 모호해집니다.

### 영향

예를 들어 `UTF-8`은 다음처럼 나눠 다룹니다.

```text
README.md
Part I에서 HTTP와 데이터 전달을 학습한다고 소개

LEARNING_PATH.md
WEB-007의 학습 목표와 읽은 뒤 설명할 내용을 안내

WEB_REFERENCE_INDEX.md
UTF-8이 WEB-007에 있다는 위치와 관련 개념 제공
```

---

## DEC-012 — Project Reading Room의 MVP는 정적이고 작게 유지한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: 저장소 전체

### 결정

Project Reading Room의 기본 구조는 HTML, CSS, JavaScript와 GitHub Pages를 사용하는 정적 사이트로 유지합니다.

현재 핵심 기능:

```text
문서 목록
Viewer
Category Filter
간단한 검색
모바일 읽기
인쇄용 CSS
브라우저 인쇄 / PDF 저장 기반
Learning UI v3
```

### 제외 범위

현재 MVP에는 다음을 포함하지 않습니다.

```text
로그인
브라우저에서 문서 편집
댓글
Database
복잡한 권한 관리
서버 PDF 생성
복잡한 Tag 시스템
원본 저장소 자동 동기화
```

### 이유

Reading Room의 목적은 문서를 안정적으로 읽고 반복해서 참고하는 것입니다.

기능을 과도하게 늘리면 문서 운영보다 애플리케이션 개발이 중심이 될 수 있습니다.

### 영향

새 기능을 제안할 때 먼저 다음을 확인합니다.

```text
현재 Reading Room의 핵심 읽기 경험에 필요한가?
정적 구조를 유지하면서 구현 가능한가?
운영 복잡도를 크게 늘리지 않는가?
```

---

## DEC-013 — Codex Director를 기본 요청 대상으로 사용한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: Codex 작업 요청 절차

### 결정

Codex 관련 작업은 특별한 이유가 없으면 Codex Director를 기본 요청 대상으로 합니다.

문서 제목과 첫 문장에서 요청 대상을 명확히 구분합니다.

```text
# Codex Director 요청 — …
당신은 이 프로젝트의 Codex Director입니다.
```

```text
# Codex 작업 지시 — …
당신은 이 저장소에서 직접 작업하는 Codex입니다.
```

### 이유

Codex Director 요청문과 Codex 직접 지시서는 관점과 책임이 다릅니다.

```text
Codex Director
요구사항 검토
현재 결정과 제약 정리
작업 범위와 완료 조건 설계
Codex 실행 지시서 작성

Codex
저장소 확인
코드와 문서 수정
테스트
변경 결과 보고
```

두 문서를 구분해 읽으면 기획·판단과 실제 실행 절차의 차이를 확인하는 학습 효과도 있습니다.

### 영향

```text
- 기본 요청 대상은 Codex Director로 표시한다.
- Codex 직접 실행 요청인 경우 제목에 `Codex 작업 지시`를 사용한다.
- 대상이 혼동될 수 있는 문서는 작성하지 않는다.
- 필요하면 Codex Director 요청문과 Codex 지시서를 별도로 제공한다.
```

---

## DEC-014 — 인쇄·PDF는 기능을 유지하되 현재 필수 완료 조건으로 두지 않는다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: 현재 Part I 마감과 UI v3 점검

### 결정

브라우저 인쇄와 PDF 저장을 고려한 기존 구조는 유지합니다.

다만 현재 사용 필요성이 확실하지 않으므로 Part I과 UI v3 마감의 필수 확인 조건에서는 제외합니다.

### 이유

현재 실제로 중요하게 사용하는 기능은 화면 읽기, navigation, 링크와 모바일입니다.

사용하지 않을 가능성이 있는 기능 때문에 마감을 지연할 필요는 없습니다.

### 영향

```text
- 인쇄·PDF 기능을 제거하지 않는다.
- 확인하지 않은 상태를 완료로 기록하지 않는다.
- STATUS.md와 CHANGELOG.md에 미확인 상태를 명시한다.
- 향후 실제 필요가 생기면 별도 점검 작업으로 수행한다.
```

---

## DEC-015 — library.json은 단순한 display/index source of truth로 유지한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: `library.json`, Classic UI, Root Index

### 결정

Reading Room의 문서 목록과 표시 기준은 `library.json`을 source of truth로 유지합니다.

현재 스키마는 다음 필드로 제한합니다.

```text
id
title
category
path
type
description
```

문서 성격은 다음 기준으로 구분합니다.

```text
Project-specific reading copy
category: [project-category]
type: reading-copy
copy_type: reading-copy

Learning source document
category: learning
type: source
copy_type: source
```

### 이유

`library.json`이 복잡해지면 전체 Reading Room 문서 목록, Root Index, Learning 전용 흐름이 한 파일 안에 섞입니다.

Reading Room은 정적 HTML/CSS/JavaScript 기반이므로 문서 표시 목록은 단순하게 유지하는 것이 안정적입니다.

### 영향

```text
- track, part, status, tags, document_kind 필드를 추가하지 않는다.
- source_repo와 source_path는 frontmatter 관리 메모로만 둔다.
- Learning의 Part / Category / Guide 흐름은 library.json에 넣지 않는다.
- library.json에는 Reading Room에 표시할 문서만 등록한다.
- repo-level 운영문서는 library.json에 등록하지 않는다.
```

---

## DEC-016 — Learning UI v3 flow는 learning-map.js에서 관리한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: Learning UI v3

### 결정

Learning UI v3의 Part / Category / Guide 구조는 다음 파일에서 관리합니다.

```text
learning-v3/learning-map.js
```

### 이유

Learning UI v3는 전체 Reading Room 목록이 아니라 학습 순서와 연속 읽기를 표현합니다.

이 흐름을 `library.json`에 넣으면 일반 문서 목록과 Learning 전용 학습 구조가 섞입니다.

### 영향

```text
- 새 Learning Guide 추가 시 learning-map.js를 함께 확인한다.
- Guide 순서, Category 배치, Part 구조가 바뀔 때 learning-map.js를 수정한다.
- 단순 본문 개정이나 canonical 파일 교체만 있을 때는 learning-map.js를 수정하지 않는다.
- project-specific reading copy는 Learning UI v3 flow에 포함하지 않는다.
```

---

## DEC-017 — Web Foundation Part I은 현재 closed baseline으로 취급한다

- 상태: Accepted
- 기록일: 2026-07-15
- 적용 범위: Web Foundation Learning Part I

### 결정

Web Foundation Part I은 현재 `WEB-001`부터 `WEB-011`까지를 closed baseline으로 취급합니다.

현재 구조:

```text
Part I — 웹의 원리와 서비스 구조

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

### 이유

Part I의 범위를 닫아야 Part II 실습 구조를 별도 단계로 설계할 수 있습니다.

### 영향

```text
- Part I 문서 범위는 WEB-001~WEB-011로 유지한다.
- Part II 이후 문서는 계획으로 언급할 수 있지만 완료된 문서처럼 기록하지 않는다.
- Part II를 추가할 때는 Part / Category / Guide 구조를 새로 확정한다.
```

---

# Decision Summary

## 4. 현재 핵심 운영 원칙

```text
Reading Room은 선별된 읽기 공간이다.

프로젝트 공식 원본은 원본 저장소에 둔다.

library.json은 단순한 display/index source of truth로 유지한다.

문서 포함 여부는 개별 프로젝트 PM과 사용자가 결정한다.

Reading Room Codex는 승인된 reading copy의 반영을 담당한다.

기존 문서 개정판은 canonical 파일을 교체한다.

문서는 가능한 한 하나씩 개정한다.

운영문서는 저장소 전체 기준으로 통합 관리한다.

Learning은 Part → Category → Guide 구조를 사용한다.

Learning UI v3는 기존 UI와 병렬 운영한다.

Learning UI v3 flow는 learning-v3/learning-map.js에서 관리한다.

Web Foundation Part I은 WEB-001~WEB-011 closed baseline으로 취급한다.

Codex 작업은 Codex Director를 기본 요청 대상으로 한다.

MVP는 정적이고 작게 유지한다.
```

---

# Pending Decisions

## 5. 아직 확정하지 않은 항목

### Part II의 최종 구성

- 상태: Proposed
- 적용 범위: Web Foundation Learning Part II

검토할 내용:

```text
- Part II의 최종 학습 목표
- Category 구성
- Guide 번호와 제목
- 첫 실습 프로젝트
- 공공데이터 API 실습 범위
- Serverless Proxy 실습 시점
```

Part II 기획 단계에서 별도 결정으로 확정합니다.

### Part III의 범위

- 상태: Proposed
- 적용 범위: Web Foundation Learning Part III

예상 주제:

```text
Browser Storage
인증
Database
파일 저장
보안
성능
캐시
PWA
테스트
관찰 가능성
```

Part II 실습 결과와 실제 프로젝트 요구를 바탕으로 결정합니다.

### 인쇄·PDF 정식 점검 시점

- 상태: Proposed
- 적용 범위: 전체 Reading Room 및 Learning UI v3

실제 사용 필요가 생기거나 인쇄 품질이 중요해지는 문서가 추가될 때 별도 점검 여부를 결정합니다.

---

# Maintenance Rule

## 6. 새 결정을 추가해야 하는 경우

다음과 같은 변화가 있을 때 새 Decision 항목을 추가합니다.

```text
- Reading Room의 역할이나 범위가 변경됨
- reading copy 승인 절차가 변경됨
- 원본과 사본의 source of truth 정책이 변경됨
- UI 구조를 대체하거나 통합함
- library.json schema를 크게 변경함
- 자동 동기화나 서버 기능을 도입함
- 운영문서 구조가 변경됨
- 새로운 Part의 학습 구조를 확정함
```

단순한 문서 수정과 버그 수정은 Decision이 아니라 `CHANGELOG.md`에 기록합니다.

---

## 7. 기존 결정을 변경하는 방법

기존 결정을 직접 지워서 과거 판단을 숨기지 않습니다.

새 결정으로 대체할 경우:

```text
기존 결정
상태: Superseded

대체 결정
상태: Accepted
대체 대상: DEC-XXX
```

기존 결정에 다음 내용을 추가합니다.

```text
대체된 날짜
대체한 Decision 번호
변경 이유
```

---

## 8. 현재 한 줄 결정 요약

```text
Project Reading Room은
각 프로젝트의 공식 원본을 존중하면서 승인된 reading copy만 선별해 제공하고,
정적이고 작은 구조와 명확한 문서·역할 경계를 유지하는 방향으로 운영한다.
```
