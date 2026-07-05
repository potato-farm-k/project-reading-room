---
title: Living Aegis Origin GDD v0.20
category: living-aegis-origin
source_repo: living-aegis-origin
source_path: docs/GDD.md
copy_type: reading-copy
last_reviewed: 2026-07-05
print_friendly: true
---

# Living Aegis Origin GDD v0.20

문서 상태: v0.20 / 통합 참고 문서
원본 위치: `living-aegis-origin`
사용 목적: Living Aegis Origin의 현재 기획, 방향성, 역할별 기준을 공유하기 위한 통합 GDD
리딩룸 후보: yes
주의: 이 문서는 최종 상용 기획서가 아니라, 현재 개발과 Codex 작업을 위한 기준 문서입니다.

> 통합 참고 문서 · Living Document · 최종본 아님

**문서 성격** 프로토타입 진행과 역할별 보강 내용을 통합한 작업 참고용 문서  
**통합 기준** v0.10 Project Manager 초안 + v0.11~v0.15 역할별 보강  
**현재 초점** prototype-07 Impact Warning phase 안정화 / prototype-08 후보 판단  
**주의** 확정 문서가 아니며, 미정·후속 검토 항목을 의도적으로 유지함

---

## 상태 표기 기준

이 문서 전체에서 아래 4단계 상태 표기를 일관되게 사용한다.

| 상태 | 의미 |
|------|------|
| ✅ 확정 | 현재 프로젝트 방향으로 유지할 가능성이 높은 기준 |
| 🔬 실험 중 | 프로토타입에서 검증 중이며 아직 조정 가능성이 있는 항목 |
| ❓ 미정 | 아직 결정하지 않은 항목 |
| 🔁 후속 검토 | 현재 단계에서는 보류하지만 이후 반드시 다시 검토할 항목 |

---

## 통합 출처 문서

| 문서 | 통합 반영 내용 |
|------|--------------|
| v0.10 Project Manager 초안 | GDD 0~8 섹션의 전체 뼈대와 상태 표기 기준 |
| v0.11 Game Designer 보강 | Core Loop, Threat State, Impact Warning의 플레이 의미 |
| v0.12 Creative Director 보강 | 세계관, 감정선, 오프닝 구조 |
| v0.13 Art Director 보강 | Art Bible, HUD, 화면 요소 명칭, 에셋 방향 |
| v0.14 Simulation Director 보강 | 시야, horizon, occlusion, simulator 기준 |
| v0.15 Codex Director 보강 | P0 작업 지시서, 저장소 경계, 문서 반영 기준 |

---

## 목차

1. [프로젝트 개요](#섹션-1--프로젝트-개요)
2. [게임 컨셉 & 3C](#섹션-2--게임-컨셉--3c)
3. [게임플레이 & 메카닉스](#섹션-3--게임플레이--메카닉스)
4. [내러티브 & 세계관](#섹션-4--내러티브--세계관)
5. [아트 디렉션 & UI/UX](#섹션-5--아트-디렉션--uiux)
6. [기술 설계 & 시뮬레이션](#섹션-6--기술-설계--시뮬레이션)
7. [오디오 디자인](#섹션-7--오디오-디자인)
8. [비즈니스 & 로드맵](#섹션-8--비즈니스--로드맵)
9. [Codex Director 워크플로우](#섹션-9--codex-director-워크플로우)
- [부록 A — 현재 결정 / 실험 / 미정 요약](#부록-a--현재-결정--실험--미정-요약)
- [부록 B — 다음 작업 우선순위](#부록-b--다음-작업-우선순위)
- [부록 C — 핵심 용어 사전](#부록-c--핵심-용어-사전)
- [부록 D — 산출물 형식 제안](#부록-d--산출물-형식-제안)

---

## 섹션 1 — 프로젝트 개요

**Living Aegis Origin**은 달 표면의 1인칭 HUD 시점에서 지구 또는 지구 궤도에서 날아오는 위협을 감지하고 요격하는 **Lunar Defense Shooter** 후보 프로젝트다.

현재는 GitHub Pages에서 실행 가능한 HTML/CSS/JavaScript + Canvas 2D 기반 프로토타입을 통해 플레이 감각을 검증하고 있다.

### Elevator Pitch

> 달 표면의 방어자가 되어 지구와 지구 궤도에서 날아오는 위협을 감지하고, 시야를 돌려 포착한 뒤, 생체 기계식 방어 무기로 요격하는 1인칭 HUD 방어 슈팅 게임.

### Vision Statement

> 플레이어가 달 표면에서 지구를 바라보는 압도적인 거리감과 아름다움 속에서, 점점 다가오는 위협을 직접 찾아내고 막아내는 긴장감과 책임감을 느끼게 한다.

### 기본 정보

| 항목 | 내용 | 상태 |
|------|------|------|
| Game Title | Living Aegis Origin | ✅ 확정 |
| Genre | 1인칭 HUD 기반 Lunar Defense Shooter / Prototype-first Web Game | 🔬 실험 중 |
| Target Platform | Web Browser / GitHub Pages 우선 | ✅ 확정 |
| Future Platform | PC Web / Steam 가능성 | ❓ 미정 |
| Game Engine | HTML + CSS + JavaScript + Canvas 2D | ✅ 확정 |
| Future Tech | WebGL / Three.js / WebGPU 가능성 | 🔁 후속 검토 |
| Team Size | 1인 개발 + AI 협업 구조 | ✅ 확정 |
| Current Stage | Prototype phase | ✅ 확정 |

### Core Pillars

| Core Pillar | 정의 | 상태 |
|-------------|------|------|
| Lunar Perspective | 달에서 지구를 바라보는 1인칭 시점의 스케일감 | ✅ 확정 |
| Search → Aim → Intercept | 위협을 찾고, 시야에 포착하고, 조준해 요격하는 핵심 루프 | ✅ 확정 |
| Threat Readability | 상태가 플레이어에게 왜 쏠 수 있는지/없는지 설명해야 함 | 🔬 실험 중 |
| Bio-Mechanical Defense | 생체/기계가 결합된 살아있는 방어체 감각 | 🔁 후속 검토 |
| Comic Cel-Shaded Impact | XIII 풍 Comic Book Cel-Shaded + SF/Bio-Mechanical 비주얼 | 🔬 실험 중 |

---

## 섹션 2 — 게임 컨셉 & 3C

플레이어는 달 표면의 방어 지점에 위치한다. 지구 또는 지구 주변 궤도에서 위협이 발생하고, 플레이어는 HUD와 시야 조작을 통해 위협을 찾아내고, 중앙 crosshair에 맞춰 Lock Ready 상태를 만든 뒤 요격한다.

현재 장르명과 시장 포지션은 실험 중이지만, 핵심 컨셉은 **"달에서 지구 방향 위협을 직접 찾아 막는 1인칭 방어 루프"** 로 유지한다.

### USP (Unique Selling Point)

| 구분 | 내용 | 상태 |
|------|------|------|
| Gameplay USP | 달 표면 1인칭 시점에서 지구/궤도 기반 위협을 탐색하고 요격 | 🔬 실험 중 |
| Narrative USP | 평화로운 지구 풍경이 위협의 원천으로 전환되는 역설 | 🔁 후속 검토 |
| Visual USP | Comic Book Cel-Shaded + Bio-Mechanical lunar defense HUD | 🔬 실험 중 |
| Market USP | 웹 기반 프로토타입으로 독특한 SF 방어 감각을 빠르게 검증 | ✅ 확정 |

### 3C 분석

| 3C | 설계 방향 | 남은 과제 |
|----|----------|----------|
| Character | 달 표면의 고정 방어자. 직접 이동보다 시야 조작과 조준이 핵심 | 플레이어 정체성, 생체무기와의 관계 |
| Camera | 1인칭 HUD. crosshair는 화면 중앙 고정. 마우스로 시야 이동 | 시야 범위, horizon, Earth scale, fullscreen 감도 |
| Control | 마우스 이동, click/Space 발사. crosshair 정렬 시 Lock Ready | 조작 민감도, 보조 키보드, 모바일 대응 |

### Reference Work

| 레퍼런스 | 참고 요소 | 회피할 요소 |
|---------|----------|-----------|
| XIII | Comic Book Cel-Shaded 분위기 | 그대로 복제하지 않기 |
| H.R. Giger 계열 | 생체+기계 결합 감각 | 과도한 성적/혐오적 표현 |
| Zdzisław Beksiński 계열 | 초현실적이고 불길한 구조물 감각 | 지나치게 정적이고 난해한 화면 |
| Missile Command 계열 | 위협을 막는 명료한 방어 구조 | 단순 2D 포대 게임처럼 보이는 것 |
| Space HUD / Sci-fi cockpit UI | 상태 정보, 경고, 조준 UI | 정보 과밀 HUD |

---

## 섹션 3 — 게임플레이 & 메카닉스

> **Game Designer 핵심 결정**
> Core Loop는 단순한 "감지-조준-요격" 순서가 아니라, 플레이어가 **위협을 알아차리고 → 시야를 돌리고 → 상태를 읽고 → 발사 결정을 내리는 판단 루프**로 정의한다.
>
> Impact Warning은 실패 직전 알림이 아니라 **마지막 방어 선택 구간**이다. 이 단계에서 플레이어가 아직 개입 가능하다고 느껴야 실패가 공정하게 받아들여진다.

### Core Game Loop (전체)

```
위협 발생
  → 위협 감지
  → 방향 탐색
  → Visual Contact
  → crosshair 조준
  → Lock Ready
  → 발사
  → Intercept ✅  또는  Impact Warning ⚠️
  → 다음 위협
```

### Prototype Loop (현재 구현 기준)

```
Source
  → Boost
  → Trajectory
  → [Visual Contact / Surface Occluded / Off-screen]
  → Lock Ready
  → Intercept ✅

  또는

  → Impact Warning ⚠️
  → Lunar Defense Zone Impact ❌
```

### Threat State Model

위협의 현재 가시성·요격 가능 여부를 플레이어에게 전달하는 핵심 언어.  
**Threat State는 내부 상태명이 아니라 "왜 지금 쏠 수 있는지/없는지"를 플레이어가 이해하게 만드는 플레이 언어여야 한다.**

| 상태 | 의미 | 플레이어 가능 행동 | 구현 상태 |
|------|------|-----------------|---------|
| Off-screen | 화면 밖에 있음 | edge indicator를 보고 시야 이동 | 🔬 실험 중 |
| Detected | 위협 감지됨, 아직 명확히 안 보임 | 방향 탐색 | 🔬 실험 중 |
| Surface Occluded | 달 표면 뒤에 가려져 조준 불가 | 기다리거나 시야/상태 변화 확인 | 🔬 실험 중 |
| Visual Contact | 하늘 영역에 보임 | 조준 가능 | 🔬 실험 중 |
| Lock Ready | Visual Contact + crosshair 정렬 | 발사 가능 | 🔬 실험 중 |
| Intercepted | 요격 성공 | 피드백 확인 | 🔬 실험 중 |
| **Impact Warning** | **Impact 전 마지막 방어 기회** | **Visual Contact / Lock Ready 가능해야 함** | ⚠️ 수정 중 |
| Impact | Lunar Defense Zone 도달 | 실패/피해/연출 | 🔁 후속 검토 |

> ⚠️ **현재 리스크**: prototype-07에서 Impact Warning phase가 아직 안정화되지 않았음. Surface Occluded에서 Impact Warning을 건너뛰고 바로 Impact로 이어지는 현상 발생 중.

### Prototype 검증 이력

| Prototype | 검증 목표 | 현재 판단 |
|-----------|----------|----------|
| prototype-01 | 달 시점, Earth Scale, 마우스 시야 이동 | Earth Scale 6x 기본값과 시야 이동 감각 확인 |
| prototype-02 | 화면 밖 위협 방향 추적 | edge indicator와 상태 구분 필요 확인 |
| prototype-03 | 중앙 crosshair와 Lock Ready | Visual Contact 후 중앙 조준 흐름 확인 |
| prototype-04 | 발사 입력과 요격 피드백 | click/Space 발사와 간단한 요격 반응 확인 |
| prototype-05 | 움직이는 위협의 탐색/조준 시간감 | 움직이는 위협을 찾고 맞추는 흐름 확인 |
| prototype-06 | 공격 원천과 Lunar Defense Zone 연결 | source → trajectory → defense zone 흐름 확인 |
| **prototype-07** | Origin Type과 visibility state | **Impact Warning phase 안정화 필요** ⚠️ |

### 핵심 미결 문제

| 문제 | 설명 | 다음 행동 |
|------|------|----------|
| Impact Warning phase 누락 | Surface Occluded에서 Impact로 바로 이어지는 현상 | prototype-07 hotfix |
| Surface Occluded / Off-screen 구분 | "안 보임"의 원인이 다름 | 상태 모델 정리 |
| 최종 접근 감각 | "나에게 다가옴"보다 "아래로 꽂힘" 느낌 | 비주얼/고도감 후속 |
| 실제 궤도 계산 범위 | 어디까지 물리적으로 처리할지 미정 | Simulator 검토 |
| 여러 위협 처리 | 단일 위협 기준만 검증 중 | 후속 prototype |

---

## 섹션 4 — 내러티브 & 세계관

> **Creative Director 핵심 결정**
> Living Aegis Origin을 "거대한 우주 전쟁 설명"보다 **"고요한 달 위에서 생체 방패가 처음 깨어나는 순간"** 으로 정의한다.
>
> 현재 단계에서는 세계관의 모든 정답을 확정하지 않고, **플레이어가 처음 느껴야 할 감정의 순서**를 명확히 하는 것이 우선이다.

### 세계관 기본 방향

| 항목 | 내용 | 상태 |
|------|------|------|
| Setting | 달 표면 또는 달 방어 지점에서 지구를 바라보는 근미래/초현실 SF | 🔬 실험 중 |
| Conflict | 지구 또는 지구 궤도에서 발사되는 위협을 달에서 방어 | 🔬 실험 중 |
| Player Role | 달 표면의 방어자 / 생체기계 방어체의 조작자 | ❓ 미정 |
| Earth | 고향이자 위협의 방향이며 아직 해명되지 않은 미스터리의 중심 | 🔁 후속 검토 |
| Moon | 빈 무대가 아니라 오래된 방어선 | 🔁 후속 검토 |
| Theme | 방어, 거리감, 모성적 지구 이미지의 전복, 생체무기화 | 🔁 후속 검토 |

### 오프닝 감정선

현재 확정된 오프닝 구조: **평화 → 이상 징후 → 첫 타격 → 분위기 전환 → 부분 각성 → 첫 방어 성공 → 본격 방어전 예고**

현재 프로토타입의 우선 목표는 전체 전투 완성이 아니라 **첫 방어 성공까지의 감정 구조**를 확인하는 것이다.

| 순서 | 감정/사건 | 판단 기준 |
|------|---------|----------|
| 1 | 고요함 | 달에서 바라보는 평화로운 지구 풍경 |
| 2 | 이상 징후 | 지구 방향에서 작은 반짝임 또는 궤적 |
| 3 | 첫 타격 | 대규모 폭격보다 "평화를 깨는 첫 번째 상처" |
| 4 | 분위기 전환 | 음악, 효과음, HUD 감각이 방어 상황으로 전환 |
| 5 | 부분 각성 | 생체 병기가 반쯤 깨어난 방패처럼 반응 |
| 6 | 첫 방어 성공 | 완전하지 않은 상태로 간신히 막아내는 첫 감각 |
| 7 | 본격 방어전 예고 | 동시다발 위협과 완성형 생체 병기는 이후 검토 |

### 현재 확정하지 않을 것 (의도적 보류)

| 보류 항목 | 이유 |
|---------|------|
| 지구가 진짜 적인지 여부 | 초기 감정선과 미스터리 유지 |
| 공격 주체의 정체 | 프로토타입을 통해 정체성 확인 후 결정 |
| 플레이어 정체성 | 인간/AI/생체무기/달 방어체 후보 유지 |
| 생체 병기의 정확한 기원 | 아트와 게임 시스템 보강 후 결정 |
| 고급 SF 설정 | 광속, 블랙홀, 중력 렌즈 등은 후속 검토 |

---

## 섹션 5 — 아트 디렉션 & UI/UX

> **Art Director 핵심 결정**
> 섹션 5는 현재 단계에서 **"최종 에셋 제작서"가 아니라 "프로토타입 기반 Art Bible"** 로 정의한다.
>
> 현재 중심 이미지: **"달 분화구 안에서 지구 방향을 조준하는 생체 방어선"**
> XIII식 Comic Book Cel-Shading, Bio-Mechanical 생체 병기, 달-지구 원거리 방어 구도를 하나의 화면에서 읽히게 만드는 것이 핵심이다.

### Art Bible 원칙

| 원칙 | 내용 |
|------|------|
| Readability First | 미사일, 지구, 생체포, 조준점, HUD는 첫눈에 역할이 읽혀야 한다 |
| Comic Book Cel-Shading | 굵은 외곽선, 단순한 면 분할, 강한 명암, 제한된 색상 대비 |
| Bio-Mechanical | 생체포는 일반 대포가 아니라 살아있는 방어 기관처럼 보여야 한다 |
| Lunar Defense | 화려한 우주 전투보다 달 위의 고요함과 방어자로 깨어나는 긴장감 우선 |
| Prototype-Driven | 최종 미술 사양서가 아니라 프로토타입에서 실제 게임으로 넘어가기 위한 중간 기준 |

### 공식 화면 구성요소 명칭

화면 구성요소 명칭을 이 문서에서 공식 확정한다. 요청문·코드·디버그 UI 모두 동일한 명칭을 사용한다.

| 공식 명칭 | 의미 |
|---------|------|
| Bio-Optic Combat View | 플레이어가 보는 1인칭 HUD 화면 전체 |
| Lunar Crater Foreground | 화면 하단 약 1/3을 차지하는 달 전경 |
| Crater Rim | 우주와 달 표면이 만나는 굴곡진 경계선 |
| Hostile Earth Disc | 전장의 중심이 되는 지구 본체 |
| Attack Vector Lanes | 지구 근처의 공격선 또는 위협 형성 영역 |
| Orbital Battery | 지구 궤도상의 적 발사 플랫폼 |
| Living Aegis Cannon | 플레이어 생체포 전체 |
| Hostile Missile | 적 미사일 전체 |
| Bio-Lance Shot | 플레이어가 발사하는 생체 에너지탄 |
| Bio-Optic HUD | HUD 전체 |

### 에셋 제작 방향

| 분류 | 해당 에셋 | 판단 근거 |
|------|---------|----------|
| Sprite Sheet | Living Aegis Cannon charge/fire, Hostile Missile, Impact Burst | 상태 변화와 프레임 반응이 중요한 요소 |
| 레이어 이미지 | Hostile Earth Disc, Earth Cloud Layer, Lunar Crater Foreground | 분위기와 품질이 중요한 배경/반배경 |
| Canvas 도형 유지 | Attack Vector Lanes, Targeting Reticle, Alert Banner | 위치/색/숫자가 실시간으로 바뀌는 요소 |
| 혼합 후보 | Orbital Battery | 현재는 Canvas 도형, 실루엣 확정 후 스프라이트 전환 |

---

## 섹션 6 — 기술 설계 & 시뮬레이션

> **Simulation Director 핵심 결정**
> 정확한 천문학 재현보다 **게임 화면에서 판단 가능한 달-지구-위협 관계**를 우선한다.
>
> 시뮬레이터는 질문을 검증하는 도구이고, 조준·발사·격추 같은 플레이 루프는 prototype에서 다룬다. **이 분리를 유지해야 구현 범위가 과도하게 커지지 않는다.**

### Technical Requirements

| 항목 | 현재 기준 | 상태 |
|------|---------|------|
| Runtime | Browser | ✅ 확정 |
| Deployment | GitHub Pages | ✅ 확정 |
| Build Tool | 없음 — HTML/CSS/JS 정적 구조 | ✅ 확정 |
| Rendering | Canvas 2D | ✅ 확정 |
| Future Rendering | WebGL / Three.js / WebGPU 검토 가능 | 🔁 후속 검토 |
| Input | Mouse movement, click, Space | 🔬 실험 중 |
| Repository Split | origin / prototype / simulator | ✅ 확정 |

### Simulation 기준

| 항목 | 판단 |
|------|------|
| Framing First | 지구 위치, 달 표면 비중, 지구 크기를 먼저 검증한다 |
| World State / Camera State 분리 | 지구의 실제 위치와 화면상 위치를 같은 값으로 취급하지 않는다 |
| Horizon | 단순 경계선이 아니라 달 위에 있다는 감각과 위협 판정 기준이다 |
| View Offset | 지구가 움직인 것이 아니라 플레이어 시야 중심이 움직인 결과로 본다 |
| Occlusion | 화면 밖, 달 표면 뒤, 시각적 식별 가능 상태를 분리한다 |

### Simulator 후보

| Simulator | 검증 질문 | 우선순위 |
|-----------|----------|---------|
| earth-moon-travel-simulator | 지구-달 실제 크기와 거리, 이동 감각 확인 | 유지 |
| lunar-view-framing-simulator | Earth Scale, Earth Vertical Position, 달 표면 비중 비교 | **P0** |
| view-offset-mode | 제한된 시야 좌우/상하 오프셋 검증 | P1 |
| lunar-threat-approach-viewer | 지구발 위협의 접근감, 속도, trail, warning guide 검토 | P1 |
| orbital-attack-source-simulator | 지구 궤도 공격 위성의 고도, 속도, 식별성 검증 | P2 |
| lunar-threat-approach-visibility-simulator | Off-screen / Surface Occluded / Visual Contact / Impact Warning 전환 검증 | **P0 후보** |

### Technical Risks

| 리스크 | 대응 방안 |
|--------|---------|
| 좌표계 혼선 | screen-space, world-space, surface anchor 정의를 문서와 디버그 UI에 반복 표시 |
| Occlusion 판정 복잡도 | 시뮬레이터로 horizon/visibility/impact phase를 분리 검증 |
| 실제 궤도 계산 유혹 | 현재는 visual trajectory 우선, 물리는 후속으로 보류 |
| Canvas 2D 한계 | 깊이감이 부족하면 후속 WebGL/Three.js 검토 |
| Codex 요청 복잡도 | 한 요청에 한 목적만 넣고 금지 범위를 명시 |

---

## 섹션 7 — 오디오 디자인

오디오 영역은 아직 별도 Sound Director 문서가 없으므로 Creative Director의 감정선 기준을 임시로 따른다.

> 현재 목표: 오프닝의 **고요함**과 Impact Warning의 **압박감**을 구분하는 오디오 방향을 설정하는 것 (후속 검토)

### Sound Direction

| 항목 | 방향 | 상태 |
|------|------|------|
| Overall Mood | 평화로운 우주/지구 감상에서 점차 긴장으로 전환 | 🔁 후속 검토 |
| Opening Music | 달에서 보는 지구의 고요함과 외로움 | 🔁 후속 검토 |
| Threat Detection Cue | 작은 반짝임 또는 신호음 | 🔁 후속 검토 |
| Lock Ready Sound | 짧고 명확한 조준 완료음 | 🔁 후속 검토 |
| Intercept Sound | 강한 타격감, 에너지 방출음 | 🔁 후속 검토 |
| Impact Warning Sound | 심박/경고/압박감 있는 반복음 | 🔁 후속 검토 |
| Bio-Mechanical Sound | 젖은 기계음, 유기적 금속 변형음 | 🔁 후속 검토 |

### Music Cue 후보

| Cue | 상황 | 상태 |
|-----|------|------|
| Peaceful Earth View | 시작, 지구 감상 | 🔁 후속 검토 |
| First Spark | 첫 위협 발견 | 🔁 후속 검토 |
| First Impact | 첫 폭격 또는 실패 연출 | 🔁 후속 검토 |
| Defense Activation | 방어체 활성화 | 🔁 후속 검토 |
| Bio-Mechanical Shift | 생체무기 변환 | 🔁 후속 검토 |
| Critical Impact Warning | 착탄 임박 | 🔁 후속 검토 |

---

## 섹션 8 — 비즈니스 & 로드맵

현재 Living Aegis Origin의 1차 목적은 출시보다 **학습, 프로토타입 검증, AI 협업 개발 훈련**이다.

### Business Model

| 항목 | 내용 | 상태 |
|------|------|------|
| 현재 목적 | 학습, 프로토타입, AI 협업 개발 훈련 | ✅ 확정 |
| 출시 목적 | 미정 | ❓ 미정 |
| 비즈니스 모델 | 미정 | ❓ 미정 |
| 무료 공개 | GitHub Pages prototype 공개 가능 | 🔬 실험 중 |
| 유료 판매 | Steam/Web 패키지 가능성 | 🔁 후속 검토 |

### Release Roadmap 초안

| 단계 | 목표 | 산출물 |
|------|------|--------|
| **Prototype Phase** ← 현재 | 핵심 감각 검증 | prototype-01~prototype-10 |
| Technical Notes Phase | 프로토타입 결과 정리 | Technical Design Notes / Whitepaper |
| Vertical Slice Phase | 실제 게임 기준 1개 장면 완성 | living-aegis-origin 초기 playable build |
| Asset Production Phase | 공식 캐릭터/무기/HUD/배경 에셋 | Art Bible / Asset Pack |
| Public Demo Phase | 외부 테스트 가능한 짧은 데모 | GitHub Pages 또는 웹 빌드 |
| Launch Planning | 출시 여부 검토 | One-Pager / Pitch Deck / Store Page 초안 |

---

## 섹션 9 — Codex Director 워크플로우

Codex Director의 1차 역할은 게임 디자인, 세계관, 아트 방향, 시뮬레이션 판단을 새로 확정하는 것이 아니라, **이미 정리된 결정을 안전한 구현 단위로 변환하는 것**이다.

### Codex 요청 원칙

| 원칙 | 설명 |
|------|------|
| One Task, One Prompt | 한 요청문에는 하나의 구현 목적만 담는다 |
| Repository Boundary First | origin / prototype / simulator의 역할을 섞지 않는다 |
| Source of Truth 우선 | AGENTS, README, INDEX, DECISION_LOG, CHANGELOG를 먼저 확인한다 |
| 기존 기능 보존 | 새 prototype/simulator 추가 시 기존 폴더 기능 코드는 기본적으로 수정하지 않는다 |
| 제외 항목 명시 | 점수, 체력, 게임 오버, 실제 궤도 계산 등 아직 다루지 않을 항목을 명시한다 |
| 문서 동시 반영 | INDEX, README, CHANGELOG, 필요 시 DECISION_LOG를 함께 갱신한다 |

### Codex 작업 지시서 구성 (템플릿)

작업 지시서는 아래 항목을 순서대로 채워서 작성한다.

```
작업 제목:     [무엇을 추가/수정하는지 한 문장]
작업 배경:     [왜 다음 단계가 필요한지]
작업 대상 저장소: origin / prototype / simulator 중 하나

시작 전 확인 문서:
  - AGENTS
  - README
  - INDEX
  - DECISION_LOG
  - CHANGELOG

포함 기능:    [이번 작업에 들어갈 것]
제외 기능:    [절대 넣지 않을 것 — 점수, 체력, 게임 오버 등]

문서 갱신 대상: [어느 문서에 무엇을 기록할지]
완료 조건:    [브라우저에서 무엇이 보여야 하는지]
확인 방법:    [열 파일, 입력 확인, git diff 확인 범위]
추천 커밋 메시지: [영어 중심 한 줄]
```

### P0 후보 판단

| 후보 | 실행 조건 | 다음 행동 |
|------|---------|---------|
| **prototype-07 hotfix** | Impact Warning phase가 아직 불안정한 경우 | prototype-08 전에 우선 복구 |
| prototype-08-multi-threat-priority | prototype-07 상태가 안정화된 경우 | 다중 위협/우선순위 판단 검증 |
| prototype 문서 정합성 정리 | README/INDEX/DECISION_LOG가 불일치할 경우 | 구현 전 문서 정리 |
| visibility simulator | horizon/occlusion/Impact Warning 혼란이 반복될 경우 | lunar-threat-approach-visibility-simulator 검토 |

---

## 부록 A — 현재 결정 / 실험 / 미정 요약

다음 작업을 시작할 때 빠르게 기준을 확인하기 위한 요약이다.

### ✅ 확정에 가까운 항목

| 항목 | 내용 |
|------|------|
| 기본 시점 | 1인칭 HUD, 달에서 지구를 바라보는 시점 |
| 기본 기술 | HTML/CSS/JS + Canvas 2D + GitHub Pages |
| 기본 조작 | 마우스 시야 이동, click/Space 발사 |
| 기본 루프 | 위협 감지 → 시야 포착 → 조준 → Lock Ready → 요격 |
| 저장소 구조 | origin / prototype / simulator 분리 |
| 문서 운영 | 한국어 본문 + 영어 개발 용어 유지 |

### 🔬 실험 중인 항목

| 항목 | 현재 이슈 |
|------|---------|
| Threat Visibility | Off-screen / Surface Occluded / Visual Contact 구분 |
| Impact Warning | 마지막 방어 기회로 동작해야 함 ← **현재 불안정** |
| Lunar Defense Zone | surface anchor 기준 유지 필요 |
| Threat Origin | Earth Surface / Orbital, High / Low source position |
| Trajectory | 물리 계산 전 visual trajectory 기준 |
| Bio-Mechanical Weapon | 아직 실제 시스템/에셋 없음 |

### ❓ 미정 항목

| 항목 | 비고 |
|------|------|
| 최종 장르명 | Lunar Defense Shooter / HUD Shooter 등 후보 |
| 플레이어 정체성 | 인간 / AI / 생체무기 / 달 방어체 |
| 세계관 원인 | 지구에서 왜 공격이 발생하는지 |
| 최종 기술 스택 | Canvas 2D 유지 또는 WebGL 전환 |
| 비즈니스 모델 | 학습 프로젝트인지 출시 목표인지 |
| 오디오 방향 | 별도 Sound Director 문서 필요 |
| 난이도 설계 | 초보/중급/숙련자 기준 필요 |

---

## 부록 B — 다음 작업 우선순위

다음 단계는 Codex 작업 대기 시간에도 진행할 수 있는 문서/에셋 작업을 포함한다.

### P0 — 지금 당장 필요한 작업

| 작업 | 담당 역할 |
|------|---------|
| prototype-07 Impact Warning phase 복구 | Codex / Project Manager 검토 |
| Threat state 용어 정리 | Project Manager / Game Designer |
| Lunar Defense Zone surface anchor 검증 | Simulation Director / Codex |
| GDD v0.20 통합본 유지관리 | Project Manager 중심 |

### P1 — 다음 단계 후보

| 작업 | 담당 역할 |
|------|---------|
| prototype-08 후보 선정 | Project Manager / Game Designer |
| 실제 요격체 발사 궤적 검토 | Game Designer / Codex Director |
| 위협 다중화와 우선순위 | Game Designer |
| Bio-Mechanical weapon concept | Creative Director / Art Director |
| Art asset priority list | Art Director / Asset Creator |

### 역할별 보강 요청

| 역할 | 보강할 부분 |
|------|-----------|
| Creative Director | 세계관 핵심 질문, 플레이어 정체성, 지구가 위협의 원천이 되는 이유, 오프닝 감정선 |
| Game Designer | Core Loop 재미 분석, Threat State Model, Impact Warning, 난이도 단계 |
| Art Director | Art Bible, HUD 구성요소 명칭, Earth/Moon/Threat/Bio-Weapon visual direction |
| Asset Creator | prototype용 임시 에셋, threat projectile, impact warning FX, bio-mechanical silhouette |
| Simulation Director | horizon/occlusion/view offset 관계, visibility simulator 필요성 |
| Codex Director | P0 작업 지시서, 코드 수정 범위 제한, 문서 업데이트 기준 |

---

## 부록 C — 핵심 용어 사전

요청문과 GDD를 읽을 때 반복해서 나오는 기본 용어를 정리한다.  
**함수명이나 코드 구현을 몰라도 이 용어들의 의미는 알고 있는 것이 좋다.**

### 게임플레이 용어

| 용어 | 한국어 의미 | Living Aegis Origin에서의 의미 |
|------|-----------|------------------------------|
| `anchor` | 기준점 / 부착 지점 | Lunar Defense Zone surface anchor = 달 표면에 붙어 있는 방어 기준점 |
| `Impact Warning Corridor` | 마지막 방어 접근 구간 | 위협이 Lunar Defense Zone에 수렴하는 마지막 접근 통로. 현재 후보 용어 |
| `Threat On Screen` | 위협 표시가 화면 안에 있음 | marker 또는 projection이 화면 안에 표시되는 상태. Visual Contact와 구분하는 후보 용어 |
| `Predicted Contact` | 예측 접촉 | 아직 보이지 않지만 경고 또는 trajectory 예측이 가능한 상태. 현재 후보 용어 |
| `crosshair` | 화면 중앙 조준점 | 항상 screen-space에 고정되어 위협을 맞추는 기준이 된다 |
| `source` | 위협 발생지 / 발사 원천 | Earth Surface Source, Orbital Source 등 |
| `boost` | 초기 추진 | 발사 직후 지구 중심 반대 방향으로 짧게 밀려나는 느낌 |
| `trajectory` | 이동 궤적 | source에서 Lunar Defense Zone까지 이어지는 위협의 이동 경로 |
| `horizon` | 달 지평선 / 표면 경계 | 우주와 달 표면을 나누며 occlusion 판단 기준이 된다 |
| `surface occluded` | 달 표면 뒤에 가려짐 | 위협이 달 표면 뒤에 있어 조준할 수 없는 상태 |
| `off-screen` | 현재 화면 밖 | 시선을 돌리면 다시 볼 수 있는 상태 |
| `Visual Contact` | 시야 내 포착 | 화면 안의 하늘 영역에서 위협을 직접 확인한 상태 |
| `Lock Ready` | 조준 완료 / 발사 가능 | Visual Contact 상태에서 crosshair 정렬이 된 상태 |
| `Impact Warning` | 착탄 전 마지막 방어 기회 | Impact 직전이지만 아직 Visual Contact / Lock Ready가 가능해야 하는 시간 |

### 기술 용어

| 용어 | 한국어 의미 | Living Aegis Origin에서의 의미 |
|------|-----------|------------------------------|
| `screen-space` | 화면 기준 좌표 | HUD, crosshair처럼 화면에 붙어 있는 좌표계 |
| `world-space` | 게임 세계 기준 좌표 | 지구, 달, 위협, 방어 지점 등이 속한 좌표계 |
| `camera pitch` | 카메라 상하 각도 | 플레이어가 위 또는 아래로 보는 시야 각도 |
| `projection` | 투영 | 3D 또는 공간 위치를 2D 화면 좌표로 옮기는 방식 |
| `Hybrid 2.5D` | 3D와 2D HUD 혼합 | 3D 공간 표현과 2D HUD overlay를 결합하는 후속 검토 후보 구조 |

---

## 부록 D — 산출물 형식 제안

이 문서는 기본적으로 **Markdown 파일로 저장소에 보관**하고, 목적에 따라 아래 형식으로 변환한다.

> 긴 표와 역할별 책임표가 많으므로 PDF/PPTX는 가로형 16:9 또는 A4 landscape 구성을 권장한다.

### 형식별 용도

| 형식 | 용도 | 권장 파일명 |
|------|------|-----------|
| **MD** | 저장소 원본 / Codex 요청문 소스 / 버전 관리 | `Living_Aegis_Origin_GDD_v0.20.md` |
| DOCX | 역할별 수기 수정이 필요한 경우 | `Living_Aegis_Origin_GDD_v0.20.docx` |
| PPTX | 역할별 공유용 가로 슬라이드 | `Living_Aegis_Origin_GDD_v0.20_Overview.pptx` |
| PDF | 읽기/공유용 고정 문서 | `Living_Aegis_Origin_GDD_v0.20_Overview.pdf` |

### 권장 PPTX 슬라이드 구조

| Slide | 제목 | 핵심 내용 |
|-------|------|---------|
| 1 | Title | Living Aegis Origin / GDD v0.20 |
| 2 | 문서 목적 | 최종 결과물이 아니라 다음 작업 효율을 위한 참고 문서 |
| 3 | 현재 결정 요약 | ✅ 확정 / 🔬 실험 중 / ❓ 미정 / 🔁 후속 검토 |
| 4 | Core Loop | 감지 → 포착 → 조준 → 요격 |
| 5 | Threat State Model | Off-screen / Surface Occluded / Visual Contact / Lock Ready / Impact Warning |
| 6 | Narrative Direction | 평화 → 이상 징후 → 첫 방어 성공 |
| 7 | Art Direction | Comic Cel-Shaded + Bio-Mechanical |
| 8 | Simulation Direction | view / horizon / occlusion / simulator |
| 9 | Codex Workflow | One Task, One Prompt / repository boundary |
| 10 | Next Actions | prototype-07 hotfix → prototype-08 후보 |

---

*Living Aegis Origin GDD v0.20 — 통합 참고 문서 / 최종본 아님*  
*다음 버전: prototype-07 hotfix 결과 반영 후 v0.21 업데이트 예정*
