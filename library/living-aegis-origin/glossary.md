---
title: Living Aegis Origin Glossary
category: living-aegis-origin
source_repo: living-aegis-origin
source_path: docs/GLOSSARY.md
copy_type: reading-copy
last_reviewed: 2026-07-09
print_friendly: true
---

# Living Aegis Origin Glossary v0.1

## Project Manager Reference Draft

문서 상태: v0.1 / 참고용 초안  
문서 성격: Project Manager reference draft  
원본 위치: `living-aegis-origin`  
사용 목적: 역할별 채팅과 Codex 작업에서 같은 용어를 같은 의미로 사용하기 위한 공통 기준 정리  
리딩룸 후보: yes  
주의: `project-reading-room`에는 나중에 reading copy로 반영 가능

사용 대상: Project Manager, Game Designer, Creative Director, Art Director, Simulation Director, Codex Director, Asset Creator
주의: 이 문서는 최종 GDD 편입본이 아니라, 이후 작업 효율을 높이기 위한 `Glossary v0.1` 초안이다.

---

# 1. 문서 목적

`Living Aegis Origin`은 1인칭 HUD 기반 lunar defense game으로, 현재 `prototype`, `simulator`, GDD, Art Direction, Sound Direction, Codex 작업이 병렬로 진행되고 있다.

최근 작업에서 다음과 같은 용어가 반복적으로 등장하고 있다.

```text
Impact Warning
Impact Warning Corridor
Visual Contact
Surface Occluded
camera pitch
projection
trajectory
source
boost
Lunar Defense Zone
```

문제는 같은 용어라도 역할별 채팅이나 Codex 작업에서 조금씩 다르게 해석될 수 있다는 점이다.

이 문서는 다음 목적을 가진다.

1. 프로젝트에서 반복 사용되는 핵심 용어를 하나의 기준으로 정리한다.
2. 일반적 의미와 `Living Aegis Origin`에서의 의미가 다를 경우 구분한다.
3. Codex 요청문과 GDD에 바로 사용할 수 있는 표현을 만든다.
4. 아직 확정되지 않은 용어는 후보 또는 후속 검토로 분리한다.
5. 초보자도 다시 읽으면 “이 용어가 왜 필요한지” 이해할 수 있게 한다.

---

# 2. 용어 사용 원칙

## 2.1 한국어 설명 + 영어 기준어 유지

본문 설명은 한국어로 작성하되, 다음 항목은 영어를 유지한다.

```text
prototype
simulator
Impact Warning
Visual Contact
Surface Occluded
camera pitch
projection
trajectory
source
boost
Lunar Defense Zone
```

이유는 Codex 요청문, 코드, 파일명, 저장소 문서에서 영어 기준어가 반복 사용되기 때문이다.

---

## 2.2 “일반적 의미”와 “LAO에서의 의미”를 구분한다

예를 들어 `Impact Warning`은 일반적으로 “충돌 경고”처럼 들릴 수 있다.
하지만 `Living Aegis Origin`에서는 단순 경고 UI가 아니라 **착탄 전 마지막 방어 선택 구간**이다.

따라서 용어를 사용할 때는 다음처럼 구분한다.

```text
일반적 의미:
충돌이 임박했음을 알리는 경고

LAO에서의 의미:
Lunar Defense Zone에 도달하기 전, 플레이어가 마지막으로 위협을 보고 조준하고 요격할 수 있는 방어 구간
```

---

## 2.3 확정 / 후보 / 후속 검토를 구분한다

용어 상태는 다음 세 단계로 나눈다.

| 상태    | 의미                                 |
| ----- | ---------------------------------- |
| 확정    | 현재 프로젝트 문서와 Codex 요청문에서 기준어로 사용 가능 |
| 후보    | 방향은 좋지만 아직 구현/문서에서 완전히 고정하지 않음     |
| 후속 검토 | 필요성은 있지만 지금 단계에서 상세 정의하지 않음        |

---

## 2.4 prototype과 simulator를 섞지 않는다

`prototype`과 `simulator`는 모두 실험 도구지만 목적이 다르다.

```text
prototype
= 플레이 감각, 조작, Lock Ready, Intercept, Impact Warning 체감을 검증하는 도구

simulator
= 거리, 시야, horizon, occlusion, trajectory 구조 같은 질문을 분리해 검증하는 도구
```

따라서 시뮬레이터에 조준/발사/점수/게임오버를 넣지 않고, 프로토타입에 과도한 물리 검증을 넣지 않는다.

---

# 3. 핵심 용어 요약표

| 용어                          | 짧은 정의           | LAO에서의 의미                                | 상태    | 관련 역할                                              |
| --------------------------- | --------------- | ---------------------------------------- | ----- | -------------------------------------------------- |
| Impact Warning              | 충돌 임박 경고        | 마지막 방어 선택 구간                             | 확정    | Game Designer, Simulation Director, Codex Director |
| Impact Warning Corridor     | 경고가 발생하는 공간 구간  | 위협이 Lunar Defense Zone에 수렴하는 마지막 접근 통로   | 후보    | Simulation Director, Game Designer                 |
| Visual Contact              | 시각적 접촉          | 위협이 시야 안에 있고 occlusion이 없는 P0 핵심 상태       | 확정    | Game Designer, Simulation Director                 |
| Surface Occluded            | 표면에 가려짐         | line of sight가 달 표면/ridge/구조물에 막힌 상태. P0 핵심 상태는 아님 | 후속 검토 | Simulation Director, Codex Director                |
| Off-screen                  | 화면 밖            | camera pitch / view direction 때문에 위협이 화면 밖에 있는 P0 필요 상태 | 확정    | Game Designer, Codex Director                      |
| Threat On Screen            | 위협 표시가 화면 안에 있음 | marker 또는 projection이 화면 안에 표시되는 상태      | 후보    | Simulation Director                                |
| Predicted Contact           | 예측 접촉           | Visual Contact와 혼동될 수 있어 P0에서는 사용하지 않는 용어 | 후속 검토 | Simulation Director                                |
| Predicted Impact            | 예측 충돌           | trajectory / warning model상 Impact 가능성이 예측되는 후보 | 후속 검토 | Simulation Director, Game Designer                 |
| Incoming Prediction         | 접근 예측           | 위협 접근 중임을 알리는 예측 경고 후보                  | 후속 검토 | Simulation Director, Game Designer                 |
| Lock Ready                  | 조준 가능 상태        | Visual Contact + crosshair 정렬로 발사 가능한 상태 | 확정    | Game Designer, Codex Director                      |
| Intercept                   | 요격              | 위협을 방어/격추하는 결과                           | 확정    | Game Designer                                      |
| Lunar Defense Zone          | 달 방어 구역         | 플레이어가 방어해야 하는 달 표면 구역                    | 확정    | Game Designer, Art Director, Simulation Director   |
| Impact Point                | 충돌 지점           | 위협이 실패 시 도달하는 목표 지점                      | 확정    | Simulation Director                                |
| source                      | 출발점             | 위협이 발생하거나 발사되는 지점                        | 확정    | Simulation Director, Codex Director                |
| Earth Surface Source        | 지구 표면 출발점       | 지구 표면에서 위협이 시작되는 지점                      | 후보    | Simulation Director                                |
| Orbital Source              | 궤도 출발점          | 지구 궤도상 위협 발생 지점                          | 후보    | Simulation Director                                |
| Test Source                 | 테스트 출발점         | 실제 설정과 무관한 검증용 source                    | 후보    | Simulation Director                                |
| boost                       | 초기 가속           | source 직후 위협이 방향을 잡고 가속되는 구간             | 확정    | Simulation Director                                |
| trajectory                  | 이동 경로           | source에서 Lunar Defense Zone까지 이어지는 위협 경로 | 확정    | Simulation Director                                |
| main trajectory             | 주 이동 경로         | boost 이후 Impact Warning 전까지의 주 접근 구간     | 후보    | Simulation Director                                |
| guided curve                | 유도 곡선           | 목표로 수렴하는 의도적 곡선 경로                       | 후보    | Simulation Director                                |
| threat marker               | 위협 표시점          | 시뮬레이터/프로토타입에서 위협 현재 위치를 표시하는 점           | 확정    | Codex Director                                     |
| threat trail / ghost points | 이동 흔적           | 위협의 이전 위치를 보여주는 궤적 표시                    | 확정    | Art Director, Simulation Director                  |
| side profile                | 옆면 단면           | 위협 접근 구조를 옆에서 보는 시뮬레이터 구도                | 확정    | Simulation Director                                |
| front projection preview    | 정면 투영 미리보기      | 단면 위치가 실제 게임 화면에 어떻게 보일지 보여주는 보조 화면      | 후보    | Simulation Director                                |
| camera pitch                | 카메라 상하 각도       | 플레이어가 위/아래로 보는 시야 각도                     | 확정    | Simulation Director, Codex Director                |
| projection                  | 투영              | 3D/공간 위치를 2D 화면 좌표로 옮기는 방식               | 확정    | Technical Director                                 |
| field of view / verticalFOV | 시야각             | 특히 세로 방향으로 얼마나 넓게 보는지                    | 확정    | Simulation Director                                |
| horizon                     | 지평선             | 하늘과 달 표면이 만나는 기준선                        | 확정    | Art Director, Simulation Director                  |
| local horizon line          | 지역 지평선          | 현재 플레이어 위치 기준의 horizon 판정선               | 후보    | Simulation Director                                |
| camera view cone            | 카메라 시야 원뿔       | 카메라가 볼 수 있는 공간 범위                        | 후보    | Simulation Director                                |
| line of sight               | 시선 직선           | 플레이어와 위협 사이의 직접 시야선                      | 확정    | Simulation Director                                |
| occlusion                   | 가림              | 물체가 달 표면/ridge 등에 의해 보이지 않는 상태           | 확정    | Simulation Director                                |
| Hostile Earth Disc          | 적대적 지구 원반       | 화면 중심의 지구 본체, 고향이자 위협 방향                 | 후보    | Art Director                                       |
| Lunar Crater Foreground     | 달 분화구 전경        | 화면 하단의 달 표면/분화구 영역                       | 후보    | Art Director                                       |
| Crater Rim                  | 분화구 가장자리        | horizon과 연결되는 거친 달 표면 경계                 | 후보    | Art Director                                       |
| Living Aegis Cannon         | 생체 방어 포대        | 플레이어가 사용하는 생체기계식 방어 무기                   | 후보    | Art Director                                       |
| Bio-Optic HUD               | 생체 시야 HUD       | 생체 병기 시야 위에 겹쳐진 전투 UI                    | 후보    | Art Director                                       |
| Hostile Missile             | 적 위협 미사일        | 기본 위협체 시각 명칭                             | 후보    | Art Director                                       |
| Bio-Lance Shot              | 생체 에너지탄         | 플레이어가 발사하는 방어/요격 탄                       | 후보    | Art Director                                       |
| Attack Vector Lanes         | 공격 벡터 라인        | 지구/궤도 근처 위협 발생 또는 접근선                    | 후보    | Art Director                                       |
| Canvas 2D                   | 브라우저 2D 렌더링     | 현재 prototype 기본 구현 기술                    | 확정    | Codex Director                                     |
| Three.js                    | 웹 3D 라이브러리      | 정면 돌진감/깊이감 검증 후보 기술                      | 후속 검토 | Technical Director                                 |
| WebGL                       | 웹 3D 그래픽 API    | Three.js의 기반 기술 후보                       | 후속 검토 | Technical Director                                 |
| Hybrid 2.5D                 | 3D + 2D HUD 혼합  | 3D 공간 표현 + 2D HUD overlay 후보             | 후속 검토 | Technical Director                                 |
| prototype                   | 플레이 검증 도구       | 조작, 상태, 요격 감각을 검증하는 실험                   | 확정    | Game Designer, Codex Director                      |
| simulator                   | 구조 검증 도구        | 시야, 거리, 궤적, 스케일 질문을 검증하는 도구              | 확정    | Simulation Director                                |
| technical spike             | 기술 가능성 실험       | 특정 기술이 적합한지 작게 확인하는 실험                   | 후보    | Technical Director                                 |
| Codex Director              | 작업 지시서 담당       | 역할별 판단을 Codex 실행 요청문으로 변환                | 확정    | Project Manager                                    |
| living-aegis-origin         | 본편 후보 저장소       | 실제 게임 본편 후보                              | 확정    | Codex Director                                     |
| living-aegis-prototype      | 프로토타입 저장소       | 기능별 플레이 감각 실험                            | 확정    | Codex Director                                     |
| living-aegis-simulator      | 시뮬레이터 저장소       | 거리/시야/스케일/궤적 검증 도구 모음                    | 확정    | Codex Director                                     |

---

# 4. 범주별 상세 용어집

---

## 4.1 Core Gameplay / Threat State

### Impact Warning

일반적 의미:
충돌이 임박했음을 알려주는 경고.

LAO에서의 의미:
위협이 `Lunar Defense Zone`에 도달하기 전, 플레이어가 마지막으로 위협을 인식하고 조준하고 요격할 수 있는 구간.

중요한 점:

```text
Impact Warning은 단순 UI 알림이 아니다.
Impact Warning은 마지막 방어 선택 구간이다.
```

사용 예시:

```text
Impact Warning 중에는 threat가 Visual Contact 가능 상태여야 한다.
Impact Warning이 Surface Occluded 상태로만 유지되면 플레이어가 공정하게 대응할 수 없다.
```

상태: 확정

---

### Impact Warning Corridor

일반적 의미:
일반 게임 용어는 아니며, LAO에서 새로 정의 중인 용어.

LAO에서의 의미:
위협이 `Lunar Defense Zone`으로 확실히 수렴하고 있으며, 아직 방어 개입이 가능한 마지막 접근 통로.

쉬운 설명:
“이제부터가 마지막으로 막을 수 있는 거리 구간”이다.

사용 예시:

```text
Impact Warning Corridor는 UI 경고가 아니라 공간상의 마지막 접근 구간으로 표시한다.
```

상태: 후보

---

### Visual Contact

일반적 의미:
대상을 눈으로 확인한 상태.

LAO에서의 의미:
위협이 camera view 안에 있고, 달 표면이나 ridge에 가려지지 않은 상태. P0 Missile-type Threat visibility의 핵심 상태다.

조건:

```text
Visual Contact =
threat가 시야 안에 있음
+ Surface Occluded가 아님
```

사용 예시:

```text
Visual Contact 상태에서 crosshair가 threat와 정렬되면 Lock Ready가 된다.
```

상태: 확정

---

### Surface Occluded

일반적 의미:
표면 또는 물체에 의해 시야가 가려진 상태.

LAO에서의 의미:
위협과 플레이어 사이의 `line of sight`가 달 표면, ridge, crater rim, lunar structure 등에 의해 실제로 막힌 상태.

중요한 점:

```text
Surface Occluded는 화면 밖이라는 뜻이 아니다.
Surface Occluded는 지형 때문에 직접 볼 수 없는 상태다.
P0 Missile-type Threat의 핵심 상태가 아니라 P1/P2 특수 조건으로 보류한다.
```

사용 예시:

```text
Threat가 화면 방향에 있더라도 line of sight가 Lunar Surface Cross Section에 막히면 Surface Occluded로 판정한다.
```

상태: 후속 검토 (P1/P2 특수 조건)

---

### Off-screen

일반적 의미:
화면 밖.

LAO에서의 의미:
위협이 존재하지만 camera pitch 또는 view direction 때문에 현재 camera view 밖에 있어 보이지 않는 상태. P0 Missile-type Threat에서도 필요한 기본 visibility 상태다.

Surface Occluded와 차이:

```text
Off-screen = 카메라가 그 방향을 보고 있지 않음
Surface Occluded = 그 방향을 보더라도 달 표면에 가려짐
```

상태: 확정

---

### Threat On Screen

일반적 의미:
위협이 화면에 표시되는 상태.

LAO에서의 의미:
위협 marker, warning marker, projection marker가 화면 안에 표시되는 상태.
단, 이것이 반드시 실제 `Visual Contact`를 뜻하지는 않는다.

예시:

```text
Front Projection Preview 안에는 threat marker가 보이지만,
실제 line of sight 기준으로는 Surface Occluded일 수 있다.
```

상태: 후보

---

### Predicted Contact

일반적 의미:
예측된 접촉/탐지.

LAO에서의 의미:
아직 직접 보이지는 않지만, trajectory 예측 또는 Impact Warning Corridor 기준으로 경고 가능한 상태를 뜻하는 후보 표현이었다.

현재 판단:

```text
Predicted Contact는 Visual Contact와 혼동될 수 있으므로 P0에서는 사용하지 않는다.
필요 시 Predicted Impact 또는 Incoming Prediction으로 용어를 재검토한다.
```

상태: 후속 검토

---

### Predicted Impact

일반적 의미:
예측된 충돌.

LAO에서의 의미:
아직 직접 보이지 않더라도 trajectory / warning model상 `Impact` 가능성이 예측되는 상태 후보.

주의:

```text
Predicted Impact는 P0 확정 상태가 아니다.
Predicted Contact를 대체할 수 있는 후보 용어로만 둔다.
```

상태: 후속 검토

---

### Incoming Prediction

일반적 의미:
접근 중이라는 예측.

LAO에서의 의미:
위협이 접근 중이라는 예측 경고 후보 용어. `Visual Contact`와 혼동되지 않도록 P1/P2에서 재검토한다.

상태: 후속 검토

---

### Lock Ready

일반적 의미:
발사 또는 조준 잠금이 가능한 상태.

LAO에서의 의미:
위협이 `Visual Contact` 상태이고, 화면 중앙 `crosshair`와 정렬되어 플레이어가 발사할 수 있는 상태.

조건:

```text
Lock Ready =
Visual Contact
+ crosshair 정렬
```

상태: 확정

---

### Intercept

일반적 의미:
가로막다, 요격하다.

LAO에서의 의미:
플레이어가 발사한 방어 수단으로 위협을 제거하거나 충돌 전에 막는 결과.

상태: 확정

---

### Lunar Defense Zone

일반적 의미:
달 방어 구역.

LAO에서의 의미:
플레이어가 방어해야 하는 달 표면의 핵심 구역.
위협이 이 지점에 도달하면 `Impact` 또는 실패/피해 연출로 이어질 수 있다.

중요한 점:

```text
Lunar Defense Zone은 단순 장식이 아니라 threat trajectory의 목표 anchor다.
```

상태: 확정

---

### Impact Point

일반적 의미:
충돌 지점.

LAO에서의 의미:
위협이 요격되지 못했을 때 도달하는 실제 충돌 위치.
대부분 `Lunar Defense Zone` 내부 또는 주변으로 설정된다.

상태: 확정

---

## 4.2 Trajectory / Simulator

### source

일반적 의미:
출처, 발생 지점.

LAO에서의 의미:
위협이 시작되거나 발사되는 지점.

예시:

```text
Earth Surface Source
Orbital Source
Test Source
```

상태: 확정

---

### Earth Surface Source

LAO에서의 의미:
지구 표면에서 위협이 발생하는 source.

게임적 의미:
지구가 단순 배경이 아니라 위협의 방향이자 origin이라는 느낌을 준다.

상태: 후보

---

### Orbital Source

LAO에서의 의미:
지구 궤도상의 위협 발생 지점.

예시:

```text
Orbital Battery
Earth orbit attack platform
```

상태: 후보

---

### Test Source

LAO에서의 의미:
실제 세계관 설정과 무관하게 simulator 검증을 위해 임시로 둔 source.

사용 목적:

```text
trajectory, boost, warning corridor를 쉽게 비교하기 위한 테스트 출발점
```

상태: 후보

---

### boost

일반적 의미:
초기 가속, 밀어 올림.

LAO에서의 의미:
source 직후 위협이 달 방향 trajectory에 들어가기 전, 방향과 속도를 잡는 초기 가속 구간.

게임적 의미:
미사일형 위협이 갑자기 생기는 것이 아니라 “출발했다”는 느낌을 준다.

상태: 확정

---

### trajectory

일반적 의미:
이동 궤적.

LAO에서의 의미:
위협이 source에서 시작해 Lunar Defense Zone 또는 Impact Point로 향하는 전체 이동 경로.

중요한 점:

```text
trajectory는 projection과 다르다.
trajectory는 공간상의 경로이고,
projection은 그 경로가 화면에 보이는 방식이다.
```

상태: 확정

---

### main trajectory

LAO에서의 의미:
boost 이후 Impact Warning Corridor에 들어가기 전까지의 주 이동 구간.

상태: 후보

---

### guided curve

일반적 의미:
유도 곡선.

LAO에서의 의미:
위협이 단순 낙하가 아니라 Lunar Defense Zone으로 의도적으로 수렴하는 곡선 경로.

사용 예시:

```text
Impact Warning 구간의 threat는 guided curve를 따라 Lunar Defense Zone으로 수렴한다.
```

상태: 후보

---

### threat marker

LAO에서의 의미:
시뮬레이터나 prototype에서 위협의 현재 위치를 표시하는 점, 아이콘, 작은 오브젝트.

상태: 확정

---

### threat trail / ghost points

LAO에서의 의미:
위협의 이전 위치를 표시해 이동 방향과 속도감을 보여주는 흔적.

차이:

```text
threat trail = 연속적인 흔적
ghost points = 과거 위치를 점으로 남긴 표시
```

상태: 확정

---

### side profile

일반적 의미:
옆면, 측면도.

LAO에서의 의미:
지구/source에서 달/Lunar Defense Zone까지의 위협 접근 흐름을 옆에서 보는 단면 시뮬레이터 구도.

사용 예시:

```text
lunar-threat-side-profile-simulator는 side profile view로 source → boost → trajectory → Impact Warning Corridor → Impact를 보여준다.
```

상태: 확정

---

### front projection preview

LAO에서의 의미:
side profile에서 현재 위협 위치가 실제 정면 게임 화면에서는 어떻게 보일지 간단히 보여주는 보조 화면.

상태: 후보

---

## 4.3 Camera / Visibility

### camera pitch

일반적 의미:
카메라의 상하 회전 각도.

LAO에서의 의미:
플레이어가 하늘 쪽을 보는지, horizon 쪽을 보는지, 달 표면 쪽을 보는지를 결정하는 값.

쉬운 설명:

```text
camera pitch up = 위를 봄
camera pitch down = 아래를 봄
```

상태: 확정

---

### projection

일반적 의미:
공간상의 위치를 화면에 옮기는 계산 방식.

LAO에서의 의미:
위협의 실제 trajectory가 2D 화면에서 어디에 보이는지를 결정하는 변환.

중요한 점:

```text
위협이 실제로 아래로 떨어지는 것과,
projection 때문에 화면에서 아래로 움직이는 것은 다르다.
```

상태: 확정

---

### field of view / verticalFOV

일반적 의미:
카메라가 볼 수 있는 시야각.

LAO에서의 의미:
특히 `verticalFOV`는 위/아래로 얼마나 넓게 볼 수 있는지를 뜻한다.

상태: 확정

---

### horizon

일반적 의미:
하늘과 지면이 만나는 선.

LAO에서의 의미:
달 표면과 우주/하늘이 만나는 기준선.
시야, occlusion, Lunar Crater Foreground의 기준이 된다.

상태: 확정

---

### local horizon line

LAO에서의 의미:
플레이어 위치와 카메라 기준으로 계산한 지역 horizon 판정선.

상태: 후보

---

### camera view cone

LAO에서의 의미:
카메라가 볼 수 있는 공간 범위.
side profile simulator에서 부채꼴 또는 원뿔 형태로 표현할 수 있다.

상태: 후보

---

### line of sight

일반적 의미:
시야선, 두 지점 사이를 직접 잇는 선.

LAO에서의 의미:
플레이어 camera와 threat marker를 잇는 직접 시야선.

사용 예시:

```text
line of sight가 Lunar Surface Cross Section에 막히면 Surface Occluded로 판정한다.
```

상태: 확정

---

### occlusion

일반적 의미:
가림.

LAO에서의 의미:
위협이 달 표면, ridge, crater rim 등에 의해 직접 보이지 않는 상태.

상태: 확정

---

## 4.4 Visual / Art Direction

### Hostile Earth Disc

LAO에서의 의미:
화면 중심에 놓이는 지구 본체.
단순 배경이 아니라 고향이자 위협 방향이며, 아직 해명되지 않은 미스터리의 중심이다.

상태: 후보

---

### Lunar Crater Foreground

LAO에서의 의미:
화면 하단에 보이는 달 표면/분화구 전경.
플레이어가 달 위에 서 있다는 감각과 Lunar Defense Zone의 기반을 만든다.

상태: 후보

---

### Crater Rim

LAO에서의 의미:
달 표면과 우주가 만나는 굴곡진 경계.
horizon과 시각적으로 연결된다.

상태: 후보

---

### Living Aegis Cannon

LAO에서의 의미:
플레이어가 사용하는 생체기계식 방어 포대.
일반 대포가 아니라 위협에 반응해 깨어나는 살아있는 방어 기관이다.

상태: 후보

---

### Bio-Optic HUD

LAO에서의 의미:
생체 병기의 시야 위에 겹쳐진 전투 HUD.
단순 아케이드 UI가 아니라 살아있는 방어체의 감각을 보강하는 화면 정보층이다.

상태: 후보

---

### Hostile Missile

LAO에서의 의미:
적 위협체의 기본 시각 이름.
미사일형 위협을 가리키지만, 최종적으로는 다양한 threat type으로 확장될 수 있다.

상태: 후보

---

### Bio-Lance Shot

LAO에서의 의미:
플레이어가 발사하는 생체 에너지탄 또는 요격 공격.

상태: 후보

---

### Attack Vector Lanes

LAO에서의 의미:
지구 주변 또는 위협 접근 방향에 표시되는 공격선.
위협이 어느 방향에서 형성되는지, 어디로 접근하는지 읽게 해준다.

상태: 후보

---

## 4.5 Technical / Repository

### Canvas 2D

일반적 의미:
HTML `<canvas>`에서 2D 그래픽을 그리는 브라우저 기술.

LAO에서의 의미:
현재 대부분의 prototype이 사용하는 기본 구현 기술.

장점:

```text
빠른 구현
GitHub Pages 배포 쉬움
HUD와 상태 표시 구현 쉬움
Codex 수정이 비교적 단순함
```

한계:

```text
정면 돌진감, 깊이감, 3D camera pitch 표현은 보정이 필요함
```

상태: 확정

---

### Three.js

일반적 의미:
WebGL을 쉽게 사용할 수 있게 해주는 JavaScript 3D 라이브러리.

LAO에서의 의미:
정면에서 위협이 플레이어에게 돌진하는 감각, camera pitch, 지구-달 공간감을 검증할 후보 기술.

상태: 후속 검토

---

### WebGL

일반적 의미:
웹 브라우저에서 3D 그래픽을 렌더링하는 API.

LAO에서의 의미:
Three.js 또는 직접 3D 렌더링을 위한 기반 기술.

상태: 후속 검토

---

### Hybrid 2.5D

LAO에서의 의미:
3D 공간 표현과 2D HUD를 결합하는 후보 구조.

예시:

```text
Three.js = 지구, 달 표면, 위협 접근
2D overlay = HUD, crosshair, Lock Ready, state label
```

상태: 후속 검토

---

### prototype

일반적 의미:
기능이나 감각을 확인하기 위한 실험 버전.

LAO에서의 의미:
플레이 감각, 조작, 상태 전환, 발사/요격, Impact Warning 체감을 검증하는 도구.

중요한 점:

```text
prototype은 플레이 감각 검증 도구다.
```

상태: 확정

---

### simulator

일반적 의미:
상황이나 구조를 실험적으로 보여주는 도구.

LAO에서의 의미:
거리, 시야, horizon, occlusion, scale, trajectory 같은 질문을 분리해서 검증하는 도구.

중요한 점:

```text
simulator는 질문/구조 검증 도구다.
조준, 발사, 점수, 게임오버를 넣지 않는다.
```

상태: 확정

---

### technical spike

일반적 의미:
기술 가능성을 작게 확인하는 실험.

LAO에서의 의미:
Canvas 2D가 적합한지, Three.js가 필요한지, Hybrid 2.5D가 가능한지 등을 작은 실험으로 확인하는 작업.

상태: 후보

---

### Codex Director

LAO에서의 의미:
Project Manager, Game Designer, Simulation Director, Art Director 등의 판단을 Codex가 실행할 수 있는 작업 지시서로 변환하는 역할.

상태: 확정

---

### living-aegis-origin

LAO에서의 의미:
실제 게임 본편 후보 저장소.

주의:

```text
prototype에서 검증되지 않은 기능을 바로 넣지 않는다.
```

상태: 확정

---

### living-aegis-prototype

LAO에서의 의미:
기능별 플레이 감각을 실험하는 prototype 저장소.

상태: 확정

---

### living-aegis-simulator

LAO에서의 의미:
거리, 시야, 스케일, 궤적, 지구-달 관계 등을 검증하는 simulator 저장소.

상태: 확정

---

# 5. 헷갈리기 쉬운 용어 쌍

---

## 5.1 Threat On Screen vs Visual Contact

| 구분           | Threat On Screen            | Visual Contact            |
| ------------ | --------------------------- | ------------------------- |
| 의미           | marker나 projection이 화면에 표시됨 | 실제로 위협을 볼 수 있음            |
| occlusion 고려 | 반드시 고려하지 않음                 | 반드시 고려함                   |
| 예시           | preview panel에 점이 보임        | camera view 안에 있고 가려지지 않음 |

정리:

```text
Threat On Screen은 “화면에 표시됨”이고,
Visual Contact는 “실제로 볼 수 있음”이다.
```

---

## 5.2 Off-screen vs Surface Occluded

| 구분    | Off-screen        | Surface Occluded        |
| ----- | ----------------- | ----------------------- |
| 원인    | 카메라가 그 방향을 보지 않음  | 달 표면/ridge가 시야를 막음      |
| 해결    | 시야를 돌리면 보일 수 있음   | 시야를 돌려도 지형 뒤라 안 보일 수 있음 |
| 게임 의미 | P0에서 edge indicator 필요 | P1/P2 특수 조건으로 보류          |

정리:

```text
Off-screen은 화면 밖,
Surface Occluded는 지형 뒤다.
P0 Missile-type Threat에서는 Surface Occluded를 핵심 상태로 쓰지 않는다.
```

---

## 5.3 Impact Warning vs Impact Warning Corridor

| 구분 | Impact Warning   | Impact Warning Corridor |
| -- | ---------------- | ----------------------- |
| 성격 | 상태 / 경고 단계       | 공간 구간 / 마지막 접근 통로       |
| 표시 | UI, label, alert | trajectory 상의 구간        |
| 의미 | 지금 마지막 방어 단계임    | 위협이 마지막 방어 구간에 들어옴      |

정리:

```text
Impact Warning은 상태이고,
Impact Warning Corridor는 그 상태가 발생하는 공간 구간이다.
```

---

## 5.4 trajectory vs projection

| 구분 | trajectory                   | projection            |
| -- | ---------------------------- | --------------------- |
| 의미 | 실제/가상 공간상의 이동 경로             | 그 경로가 화면에 보이는 방식      |
| 문제 | 경로 자체가 잘못됨                   | 경로는 맞지만 화면에서 다르게 보임   |
| 예시 | 위협이 Lunar Defense Zone으로 수렴함 | 화면에서는 아래로 떨어지는 것처럼 보임 |

정리:

```text
trajectory는 길이고,
projection은 그 길이 화면에 보이는 방식이다.
```

---

## 5.5 simulator vs prototype

| 구분          | simulator            | prototype                        |
| ----------- | -------------------- | -------------------------------- |
| 목적          | 질문/구조 검증             | 플레이 감각 검증                        |
| 예시          | 거리, 시야, 궤적, scale 확인 | 조준, 발사, Lock Ready, Intercept 확인 |
| 포함하면 안 되는 것 | 점수, 게임오버, 과도한 플레이 기능 | 과도한 물리 검증                        |

정리:

```text
simulator는 이해 도구,
prototype은 플레이 실험 도구다.
```

---

## 5.6 camera pitch vs projection

| 구분 | camera pitch                                    | projection                   |
| -- | ----------------------------------------------- | ---------------------------- |
| 의미 | 카메라가 위/아래로 향하는 각도                               | 공간 위치를 화면에 옮기는 방식            |
| 영향 | horizon, surface coverage, threat visibility 변화 | threat가 화면에서 어떻게 이동해 보이는지 변화 |

정리:

```text
camera pitch는 어디를 보는가,
projection은 그것이 화면에 어떻게 그려지는가다.
```

---

# 6. Codex 요청문에서 사용할 권장 표현

## 6.1 Impact Warning 관련

권장 표현:

```text
Impact Warning은 단순 UI 알림이 아니라 Lunar Defense Zone에 도달하기 전 마지막 방어 선택 구간으로 동작해야 한다.
```

```text
Impact Warning 중 threat는 camera pitch를 맞추면 Visual Contact 가능해야 하며, Surface Occluded 상태로만 남아 있으면 안 된다.
```

피해야 할 표현:

```text
Impact Warning을 더 잘 보이게 해줘.
```

이 표현은 너무 모호하다.

---

## 6.2 Surface Occluded 관련

권장 표현:

```text
Surface Occluded는 threat가 화면 밖에 있는 상태가 아니라, player camera와 threat marker 사이의 line of sight가 Lunar Surface Cross Section 또는 ridge line에 의해 막힌 상태로 정의한다.
```

```text
P0 Missile-type Threat에서는 Surface Occluded를 핵심 상태로 사용하지 않고, P1/P2 특수 조건으로 보류한다.
```

피해야 할 표현:

```text
안 보이면 Occluded로 처리해줘.
```

이 표현은 Off-screen과 Surface Occluded를 섞을 위험이 있다.

---

## 6.3 Visual Contact 관련

권장 표현:

```text
Visual Contact는 threat가 camera view 안에 있고 Surface Occluded가 아닌 상태로 정의한다.
```

```text
P0 visibility는 Off-screen / Visual Contact 중심으로 단순화한다.
```

```text
Threat On Screen과 Visual Contact는 같은 의미가 아니므로 상태 label에서 구분한다.
```

---

## 6.4 Predicted Contact 관련

권장 표현:

```text
Predicted Contact는 Visual Contact와 혼동될 수 있으므로 P0에서는 사용하지 않는다.
```

```text
필요하면 Predicted Impact 또는 Incoming Prediction으로 용어를 재검토한다.
```

---

## 6.5 trajectory / projection 관련

권장 표현:

```text
이번 작업에서는 trajectory 자체와 front projection에서 보이는 움직임을 구분해서 확인한다.
```

```text
정면 화면에서 threat가 아래로 내려오는 것처럼 보이는 문제가 trajectory 문제인지 projection 문제인지 분리한다.
```

---

## 6.5 simulator / prototype 관련

권장 표현:

```text
이 작업은 simulator 작업이며 조준, 발사, 요격, 점수, 게임오버는 포함하지 않는다.
```

```text
이 작업은 prototype 작업이며 실제 플레이 감각, Lock Ready, Intercept feedback을 검증한다.
```

---

## 6.6 저장소 관련

권장 표현:

```text
작업 대상은 living-aegis-simulator이며, living-aegis-prototype과 living-aegis-origin은 수정하지 않는다.
```

```text
기존 earth-moon-travel-simulator의 목적은 변경하지 않고, 새 simulator를 별도 폴더로 추가한다.
```

---

# 7. 다음에 보강할 용어 후보

아래 용어는 추후 `Glossary v0.2`에서 보강할 수 있다.

## 7.1 Game Design 후보

```text
Core Loop
Meta Loop
Threat Priority
Threat Type
Difficulty Curve
Wave
Scenario Phase
Resource Recovery Segment
Upgrade Resource
```

## 7.2 Narrative / Creative 후보

```text
First Awakening
Bio-Mechanical Transformation
Living Shield
Hostile Origin
Quiet Lunar View
First Impact
First Defense Success
```

## 7.3 Art Direction 후보

```text
Cel-Shading
Comic Book Paneling
Ink Outline
Bio-Mechanical Silhouette
HUD Layer
Warning Pulse
Impact Burst
Far-Field Dissipation
```

## 7.4 Technical 후보

```text
pseudo-3D
2D overlay
render loop
view transform
world-space
screen-space
anchor point
debug panel
```

## 7.5 Simulation 후보

```text
Earth Scale
Moon Surface Coverage
Earth Vertical Position
view offset
time warp
scale-time simulator
side-profile simulator
front-approach technical spike
```

---

# 8. PM 메모

현재 `Glossary v0.1`에서 가장 중요한 기준은 다음이다.

```text
Impact Warning은 마지막 방어 선택 구간이다.
P0 visibility는 Off-screen / Visual Contact 중심으로 단순화한다.
Surface Occluded는 화면 밖이 아니라 line of sight가 달 표면/ridge에 막힌 상태이며, P0 핵심 상태가 아니다.
Predicted Contact는 P0에서 사용하지 않고 필요 시 Predicted Impact / Incoming Prediction으로 재검토한다.
Visual Contact는 시야 안에 있고 occlusion이 없는 상태다.
prototype은 플레이 감각 검증 도구다.
simulator는 질문/구조 검증 도구다.
```

이 기준이 흔들리지 않으면 이후 Codex 요청문과 역할별 문서의 혼선을 크게 줄일 수 있다.

---

# 9. 한 줄 요약

```text
Living Aegis Origin의 용어는 “멋있게 들리는 이름”보다
역할 채팅과 Codex가 같은 판단을 반복할 수 있게 만드는 기준어로 사용한다.
```
