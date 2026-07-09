---
title: Living Aegis Origin Decision Log
category: living-aegis-origin
source_repo: living-aegis-origin
source_path: DECISION_LOG.md
copy_type: reading-copy
last_reviewed: 2026-07-09
print_friendly: true
---

# 결정 기록

## 2026-07-09 - P0 Threat Visibility and Approach Model

결정: P0 Missile-type Threat에서는 Surface Occluded와 Predicted Contact를 핵심 상태로 사용하지 않는다.

세부:

- P0 visibility는 Off-screen / Visual Contact 중심으로 단순화한다.
- Surface Occluded는 crater rim, lunar structure, low-angle approach처럼 실제 line of sight가 막히는 P1/P2 특수 조건으로 보류한다.
- Predicted Contact는 Visual Contact와 혼동될 수 있어 P0에서는 사용하지 않는다.
- 필요 시 Predicted Impact 또는 Incoming Prediction으로 재검토한다.

이유: 현재 LAO의 P0 목표는 복잡한 occlusion / prediction 상태보다 Missile-type Threat의 정면 접근감과 Impact Warning Corridor 체감을 검증하는 것이다.

## 2026-07-08 - Threat Type Classification v0.1

결정: Living Aegis Origin의 위협 유형은 현재 Missile-type Threat, Beam/Charge-type Threat, Mass/Object-type Threat의 3계열로 분류한다. 이 분류는 최종 enemy taxonomy가 아니라 prototype과 simulator 개발을 위한 working draft다.

현재 우선순위:

- Missile-type Threat: P0 / main threat
- Beam/Charge-type Threat: P1 / pre-fire intercept variation
- Mass/Object-type Threat: P2 / heavy special threat

이유: Missile-type Threat이 "지구 방향에서 다가오는 위협을 감지하고 요격한다"는 LAO의 핵심 경험과 가장 잘 맞는다. Beam/Charge-type Threat은 발사 전 충전 또는 조준 source를 차단하는 방식으로 광속 공격의 발사 후 대응 문제를 피할 수 있다. Mass/Object-type Threat은 느리고 무거운 압박을 만들 수 있지만 정면 돌진감을 약화할 수 있으므로 특수 변주로 둔다.

## 2026-07-05 - 통합 GDD v0.20을 프로젝트 기준 문서로 저장

결정: `Living Aegis Origin GDD v0.20`을 `docs/GDD.md`에 통합 참고 문서로 저장한다.

이 문서는 Project Manager, Game Designer, Creative Director, Art Director, Simulation Director, Codex Director의 보강 내용을 통합하며, 현재 기획 방향과 역할별 기준을 반복 참조하기 위한 원본 문서로 관리한다.

이유: Living Aegis Origin의 현재 설계 판단을 origin 저장소에서 일관되게 유지하고, 이후 필요할 때 `project-reading-room`에 reading copy로 반영할 수 있도록 하기 위해서이다.

## 2026-07-04 - 프로젝트 공통 참고 문서를 origin 저장소에서 관리

결정: Living Aegis Origin의 용어, 사운드 방향, concept art prompt 기준 문서를 `living-aegis-origin` 저장소의 공식 원본 후보로 관리한다.

추가한 문서:

- `docs/GLOSSARY.md`
- `docs/direction/SOUND_DIRECTION.md`
- `docs/art/CONCEPT_ART_PROMPT_PACK.md`

이유: 역할별 작업에서 반복 참조할 프로젝트 공통 기준을 origin 저장소에 먼저 유지하고, 이후 필요할 때 `project-reading-room`에 reading copy로 반영하기 위해서이다.

## 2026-06-23 - 이 저장소를 메인 게임 프로젝트로 사용

결정: `living-aegis-origin`은 Living Aegis Origin의 메인 게임 저장소이다.

이유: 메인 게임에는 명확한 파일 구조와 정적 진입 페이지를 가진 안정적인 시작점이 필요하다. 이 저장소의 역할을 좁게 유지하면 이후 반복 작업에서 혼선을 줄일 수 있다.

## 2026-06-23 - prototype과 simulator 작업을 분리

결정: prototype 실험과 simulator 작업은 별도 저장소에서 관리한다.

이유: 실험 작업은 빠르게 바뀌고 방향이 자주 달라질 수 있다. 이를 메인 게임 저장소 밖에 두면 불필요한 범위 확장과 관련 없는 구현 세부 사항으로부터 메인 프로젝트를 보호할 수 있다.

관련 저장소:

- `living-aegis-prototype`
- `living-aegis-simulator`

## 2026-06-23 - GitHub Pages와 Canvas 2D로 시작

결정: 정적 HTML, CSS, JavaScript, Canvas 2D로 시작한다.

이유: 초기 scaffold 단계에서는 로컬에서 쉽게 열 수 있고, GitHub Pages로 쉽게 배포할 수 있으며, build tool이나 외부 의존성 없이 유지하는 것이 좋다.

## 2026-06-23 - 내부 설명 문서는 한국어 중심으로 작성

결정: 내부 설명 문서는 한국어 중심으로 작성한다.

이유: 이 프로젝트는 개인 학습과 반복 참고가 중요하므로, README와 상태 문서처럼 자주 읽는 설명 문서는 한국어로 정리하는 편이 유지 관리에 좋다.

세부 원칙:

- 파일명, 폴더명, 코드 식별자, 주요 기술 용어는 영어를 유지한다.
- HTML, CSS, JavaScript 코드와 변수명, 함수명, class 이름, id 이름은 변경하지 않는다.
- `Canvas 2D`, `GitHub Pages`, `JavaScript`, `HUD`, `prototype`, `simulator`처럼 필요한 기술 용어는 영어 표기를 허용한다.
- 프로젝트 제목과 저장소 이름은 영어를 유지한다.

## 2026-06-23 - Codex 반복 작업 지침을 AGENTS.md에 기록

결정: Codex가 이 저장소에서 작업할 때 반복해서 적용할 작업 원칙은 루트의 `AGENTS.md`에 기록한다.

이유: 새 작업을 시작할 때 이전 대화 맥락에 의존하지 않고, 저장소 안의 기준 문서를 먼저 확인한 뒤 같은 원칙으로 안전하게 작업하기 위해서이다.
