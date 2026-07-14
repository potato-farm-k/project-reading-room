---
title: Web Foundation Learning Track
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/README.md
copy_type: source
last_reviewed: 2026-07-08
print_friendly: true
---

# Web Foundation Learning Track

이 문서는 웹 기술을 처음부터 체계적으로 이해하기 위한 Learning Track의 시작 문서입니다.

이 Track은 단순 요약집이 아니라, 프로젝트를 진행하면서 계속 업데이트하는 개인용 웹 개발 교재입니다. 구현 방법을 외우는 데 그치지 않고 웹 기술이 왜 생겼으며 서로 어떻게 연결되는지 이해하는 것을 우선합니다.

이 Track은 한 번 작성하고 끝나는 문서가 아니라, ChatGPT와의 학습 대화 및 실제 프로젝트 경험을 통해 계속 업데이트하는 개인용 교재입니다.

WEB-002에서는 브라우저를 웹 문서를 요청하고 해석하고 실행하는 Runtime이자 웹 애플리케이션 플랫폼으로 이해합니다.

WEB-003에서는 HTML을 브라우저가 해석하는 웹 문서의 구조 언어이자 Markup의 한 흐름으로 이해합니다.

WEB-004에서는 CSS를 HTML 구조 위에 시각적 표현과 배치를 입히는 스타일 언어로 이해합니다.

WEB-005에서는 JavaScript를 브라우저 안에서 DOM Tree를 조작해 웹페이지에 동작과 상호작용을 부여하는 프로그래밍 언어로 이해합니다.

WEB-006에서는 브라우저가 HTML, CSS, JavaScript를 해석해 DOM, CSSOM, Render Tree를 만들고 실제 화면을 구성하는 흐름을 이해합니다.

WEB-007에서는 브라우저와 서버가 HTTP Request와 Response를 통해 통신하고, Header와 Body, Content-Type으로 데이터를 해석하는 방식을 이해합니다.

WEB-008에서는 REST API를 HTTP를 바탕으로 클라이언트와 서버가 resource를 요청하고 응답하는 설계 방식으로 이해하고, URL의 Path Variable과 Query Parameter를 구분합니다.

WEB-009에서는 브라우저가 다른 origin의 API 응답을 JavaScript에 전달할지 판단하는 CORS 규칙을 이해합니다.

WEB-010에서는 정적 웹페이지가 서버 기능을 필요로 할 때 Serverless를 선택할 수 있는 이유를 이해합니다.

WEB-011에서는 GitHub Pages, 브라우저, Serverless, 외부 API와 DB의 역할을 나누고 작은 웹 서비스를 단계적으로 확장하는 구조를 이해합니다.

## 학습 목적

- 브라우저와 서버 사이에서 일어나는 일을 설명할 수 있게 됩니다.
- HTML, CSS, JavaScript를 배우기 전에 웹의 공통 기반을 이해합니다.
- 프로젝트에서 만난 문제를 개념, 실습, 판단 기준으로 다시 기록합니다.
- 반복해서 읽고 수정할 수 있는 개인용 웹 개발 교재를 만듭니다.

## 운영 방식

```text
대화
↓
문서 초안 작성
↓
Reading Room 반영
↓
프로젝트 적용
↓
새로운 질문
↓
문서 업데이트
```

각 문서는 완성본이 아니라 현재 이해를 기록한 학습 문서입니다. 프로젝트 경험으로 설명이 달라지면 원인을 확인하고 문서를 갱신합니다.

## 문서 목록

- [README.md](./README.md) — Track 소개와 운영 원칙
- [LEARNING_PATH.md](./LEARNING_PATH.md) — 전체 학습 로드맵
- [WEB-001-How-the-Web-Works.md](./WEB-001-How-the-Web-Works.md) — Request와 Response로 이해하는 웹의 기본 동작 과정
- [WEB-002-What-Is-a-Browser.md](./WEB-002-What-Is-a-Browser.md) — 브라우저의 역할, Runtime 개념과 실행 흐름
- [WEB-003-What-Is-HTML.md](./WEB-003-What-Is-HTML.md) — HTML의 역할, Markup과 웹 문서 구조
- [WEB-004-Why-CSS.md](./WEB-004-Why-CSS.md) — CSS가 필요한 이유와 구조/표현의 분리
- [WEB-005-Why-JavaScript.md](./WEB-005-Why-JavaScript.md) — JavaScript가 필요한 이유와 DOM Tree 기반 동작/상호작용
- [WEB-006-How-Browser-Builds-a-Page.md](./WEB-006-How-Browser-Builds-a-Page.md) — 브라우저가 DOM, CSSOM, Render Tree를 만들고 화면을 구성하는 흐름
- [WEB-007-How-HTTP-Works.md](./WEB-007-How-HTTP-Works.md) — Request/Response, Header/Body, Content-Type으로 이해하는 HTTP 통신 방식
- [WEB-008-Why-REST-API.md](./WEB-008-Why-REST-API.md) — HTTP Method, endpoint, Path Variable과 Query Parameter로 이해하는 REST API 설계 방식
- [WEB-009-Why-CORS.md](./WEB-009-Why-CORS.md) — 다른 origin의 API 응답 접근을 브라우저가 판단하는 CORS 규칙
- [WEB-010-Why-Serverless.md](./WEB-010-Why-Serverless.md) — 정적 웹페이지가 서버 기능을 필요로 할 때 Serverless를 선택할 수 있는 이유
- [WEB-011-GitHub-Pages-Architecture.md](./WEB-011-GitHub-Pages-Architecture.md) — GitHub Pages, 브라우저, Serverless, 외부 API와 DB 역할 배치로 이해하는 서비스 아키텍처
- [WEB_REFERENCE_INDEX.md](./WEB_REFERENCE_INDEX.md) — 반복 확인할 Reference 목차

## 활용 프로젝트

- Potato's Day
- Living Aegis Origin
- 공공데이터 기반 서비스
- 기타 GitHub Pages 기반 프로젝트

## 문서 업데이트 방식

- 학습 대화에서 새롭게 이해한 개념을 기존 Guide의 적절한 위치에 반영합니다.
- 프로젝트에서 만난 오류와 해결 과정은 개념 설명, 적용 예시 또는 실습 과제로 정리합니다.
- 기존 설명이 실제 동작과 다르면 원인을 확인한 뒤 설명과 변경 이력을 함께 갱신합니다.
- 모든 문서를 한 번에 만들지 않고, 현재 학습에 필요한 문서부터 작게 추가합니다.

## 문서 작성 원칙

- 기술 용어보다 동작 원리와 문제의 배경을 먼저 설명합니다.
- 프로젝트 사례와 작은 실습을 연결합니다.
- 확실하지 않은 내용은 질문으로 남기고 후속 학습에서 보완합니다.
- 문서 수를 늘리기보다 반복해서 읽기 좋은 구조를 유지합니다.
