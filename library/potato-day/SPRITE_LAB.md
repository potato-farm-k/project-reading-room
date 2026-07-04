---
title: Potato’s Day Sprite Lab
category: potato-day
source_repo: potato-day
source_path: docs/SPRITE_LAB.md
type: reading-copy
copy_type: reading-copy
last_reviewed: 2026-07-04
print_friendly: true
---
# Potato’s Day Sprite Lab

문서 상태: v0.1\
프로젝트: Potato’s Day / 감자의 하루\
문서 목적: Sprite Lab 운영 원칙과 새 sprite animation 추가 기준 정리

---

## 1. Sprite Lab의 목적

Sprite Lab은 Potato’s Day 본편과 분리된 **감자 애니메이션 테스트 공간**이다.

본편에 바로 적용하기 전에 새 sprite sheet를 넣어보고, 브라우저에서 실제 움직임을 확인하기 위한 개발/실험용 화면으로 사용한다.

기본 흐름은 다음과 같다.

```text
이미지 제작
→ repo에 테스트용 이미지 배치
→ Sprite Lab에 항목 추가
→ 브라우저에서 animation 확인
→ 괜찮으면 나중에 본편 적용 후보로 검토
```

Sprite Lab은 게임 플레이 화면이 아니라, 감자 캐릭터 동작을 확인하기 위한 **animation preview lab**이다.

---

## 2. 본편과 Sprite Lab의 관계

Sprite Lab은 본편 기능과 독립적으로 유지한다.

Sprite Lab에서 테스트하는 동작이 바로 본편에 적용되는 것은 아니다.
본편에 적용하려면 별도 판단이 필요하다.

```text
Sprite Lab
= 실험 / 확인 / 비교

본편
= 확정된 동작만 적용
```

Sprite Lab 수정 시 아래 본편 기능은 건드리지 않는다.

```text
- 감자의 집
- 공놀이
- 산책 활동
- 감자 기본 이미지
- 기존 본편 sprite animation
- 워크플로우 모달
```

---

## 3. 폴더 구분

Potato’s Day의 sprite 관련 이미지는 목적에 따라 폴더를 구분한다.

### 테스트용 sprite

```text
assets/characters/sprite-test/
```

사용 대상:

```text
- 새로 만들어본 sprite sheet
- 품질을 아직 확인하지 않은 동작
- Sprite Lab에서만 테스트할 이미지
- 4x2, 6프레임, 8프레임 등 구조 실험용 이미지
- 투명 배경 여부나 frame clipping을 확인할 이미지
```

### 본편 적용용 sprite

```text
assets/characters/sprites/
```

사용 대상:

```text
- 본편에서 실제로 사용하는 확정 sprite
- 산책 활동에서 사용하는 공식 걷기 sprite
- 나중에 본편에 적용될 확정 idle / walk / run / reaction sprite
```

운영 원칙:

```text
테스트용 이미지는 sprite-test 폴더에 둔다.
본편 적용이 확정된 이미지만 sprites 폴더로 승격한다.
```

---

## 4. Sprite Lab 화면 원칙

Sprite Lab은 animation 자체를 확인하는 공간이므로 화면을 단순하게 유지한다.

권장 원칙:

```text
- 배경 연출을 최소화한다.
- 바닥, 잔디, 러그, 장식 요소를 넣지 않는다.
- 움직이는 캐릭터 sprite가 중심이 되게 한다.
- frame이 잘리는지 확인하기 쉬워야 한다.
- 인접 frame이 보이는지 확인하기 쉬워야 한다.
- 본편 화면처럼 꾸미기보다 preview 도구처럼 유지한다.
```

필요하다면 아주 단순한 중립 배경색만 사용할 수 있다.

예:

```text
- 연한 회색
- 연한 파스텔 단색
- 투명 PNG 확인에 방해되지 않는 색
```

---

## 5. Sprite Lab 항목 데이터 구조

Sprite Lab의 항목은 나중에 쉽게 추가할 수 있도록 데이터 목록 형태로 관리한다.

권장 필드:

```text
Label
ID
File
Frames
Columns
Rows
SpeedMs
```

예시:

```javascript
const spriteTests = [
  {
    id: "walk-8-4x2",
    label: "Walk 8 Frames 4x2",
    file: "assets/characters/sprite-test/gamja-walk-8frames-4x2.png",
    frames: 8,
    columns: 4,
    rows: 2,
    speedMs: 120
  }
];
```

각 필드의 의미는 다음과 같다.

| 필드 | 의미 |
|---|---|
| `id` | 코드에서 사용하는 고유 식별자 |
| `label` | Sprite Lab 목록에 표시되는 이름 |
| `file` | sprite sheet 이미지 경로 |
| `frames` | 전체 animation frame 수 |
| `columns` | sprite sheet의 열 개수 |
| `rows` | sprite sheet의 행 개수 |
| `speedMs` | 한 frame이 유지되는 시간 |

---

## 6. Frame 재생 규칙

Sprite Lab의 기본 frame 재생 순서는 다음과 같다.

```text
왼쪽 → 오른쪽
위 → 아래
```

예를 들어 4 columns × 2 rows 구조의 8프레임 sprite는 다음 순서로 재생한다.

```text
frameIndex 0 → row 0, column 0
frameIndex 1 → row 0, column 1
frameIndex 2 → row 0, column 2
frameIndex 3 → row 0, column 3
frameIndex 4 → row 1, column 0
frameIndex 5 → row 1, column 1
frameIndex 6 → row 1, column 2
frameIndex 7 → row 1, column 3
```

frame 크기는 가능하면 이미지의 실제 크기에서 계산한다.

```text
frameWidth = imageWidth / columns
frameHeight = imageHeight / rows
```

---

## 7. 이름 규칙

### Label 규칙

Label은 사람이 보는 이름이다.

권장 형식:

```text
[Action] [Frame Count] Frames [Layout]
```

예시:

```text
Walk 8 Frames
Walk 8 Frames 4x2
Run 6 Frames
Hop 8 Frames
Ball Touch 6 Frames
Happy Reaction 5 Frames
```

---

### ID 규칙

ID는 코드에서 쓰는 고유 식별자다.

권장 규칙:

```text
- 소문자 사용
- 띄어쓰기 금지
- 단어는 하이픈(-)으로 연결
- 동작, 프레임 수, 배치 정보를 포함
```

예시:

```text
walk-8
walk-8-4x2
run-6
hop-8
ball-touch-6
happy-reaction-5
```

피해야 할 예:

```text
Walk 8 Frames
walk test!!
감자걷기
walk_8_frames_test_final_final
```

---

### File 이름 규칙

테스트용 sprite 파일은 다음 형식을 권장한다.

```text
assets/characters/sprite-test/gamja-[action]-[frames]frames-[layout].png
```

예시:

```text
assets/characters/sprite-test/gamja-walk-8frames.png
assets/characters/sprite-test/gamja-walk-8frames-4x2.png
assets/characters/sprite-test/gamja-run-6frames.png
assets/characters/sprite-test/gamja-hop-8frames.png
assets/characters/sprite-test/gamja-ball-touch-6frames.png
```

본편 적용용으로 승격할 경우:

```text
assets/characters/sprites/gamja-walk-8frames.png
assets/characters/sprites/gamja-run-6frames.png
assets/characters/sprites/gamja-ball-touch-6frames.png
```

---

## 8. SpeedMs 기준

`speedMs`는 한 frame이 유지되는 시간이다.

값이 작을수록 빠르게 재생되고, 값이 클수록 느리게 재생된다.

권장 기준:

```text
90ms  = 빠른 동작
120ms = 보통 걷기
150ms = 느긋한 동작
180ms = 아주 천천히
```

동작별 추천값:

```text
걷기: 120
뛰기: 90~100
통통 뛰기: 110~130
기쁜 반응: 100~140
졸림 / 느린 반응: 150~180
```

---

## 9. 새 동작 추가 요청 템플릿

Sprite Lab에 새 동작을 추가할 때는 아래 템플릿을 Codex 요청에 사용한다.

```text
Sprite Lab에 새 sprite animation 항목을 추가해줘.

추가할 항목:
- Label: [표시 이름]
- ID: [고유 id]
- File: [파일 경로]
- Frames: [총 프레임 수]
- Columns: [열 개수]
- Rows: [행 개수]
- SpeedMs: [프레임 재생 속도 ms]

요청:
- Sprite Lab 목록에 이 항목을 추가
- 선택 시 정상 재생
- frameWidth = imageWidth / columns
- frameHeight = imageHeight / rows
- 프레임 순서는 왼쪽→오른쪽, 위→아래
- 기존 Sprite Lab 항목 유지
- Sprite Lab은 배경/바닥 없이 캐릭터만 보이는 구조 유지
- 본편 기능은 수정하지 않음

완료 조건:
- Sprite Lab 목록에 [표시 이름] 항목이 보임
- 클릭 시 [파일 경로] sprite가 정상 재생됨
- 프레임이 잘리거나 인접 프레임이 보이지 않음
- 기존 Sprite Lab 항목도 정상 동작함
- 본편 감자의 집, 공놀이, 산책 활동은 기존처럼 정상 동작함

테스트 방법:
- 로컬에서 index.html을 연다
- Sprite Lab을 연다
- [표시 이름] 항목이 보이는지 확인한다
- 클릭해서 animation이 재생되는지 확인한다
- 프레임 순서가 자연스러운지 확인한다
- 프레임 잘림/인접 프레임 노출이 없는지 확인한다
- 기존 항목들도 다시 눌러 정상 동작하는지 확인한다
- 본편 기능이 기존처럼 동작하는지 확인한다

추천 커밋 메시지:
[커밋 메시지]
```

---

## 10. 새 동작 추가 예시

4 columns × 2 rows 구조의 8프레임 걷기 sprite를 추가하는 예시는 다음과 같다.

```text
Sprite Lab에 새 sprite animation 항목을 추가해줘.

추가할 항목:
- Label: Walk 8 Frames 4x2
- ID: walk-8-4x2
- File: assets/characters/sprite-test/gamja-walk-8frames-4x2.png
- Frames: 8
- Columns: 4
- Rows: 2
- SpeedMs: 120

요청:
- Sprite Lab 목록에 이 항목을 추가
- 선택 시 정상 재생
- frameWidth = imageWidth / columns
- frameHeight = imageHeight / rows
- 프레임 순서는 왼쪽→오른쪽, 위→아래
- 기존 Sprite Lab 항목 유지
- Sprite Lab은 배경/바닥 없이 캐릭터만 보이는 구조 유지
- 본편 기능은 수정하지 않음

완료 조건:
- Sprite Lab 목록에 Walk 8 Frames 4x2 항목이 보임
- 클릭 시 assets/characters/sprite-test/gamja-walk-8frames-4x2.png sprite가 정상 재생됨
- 프레임이 잘리거나 인접 프레임이 보이지 않음
- 기존 Sprite Lab 항목도 정상 동작함
- 본편 감자의 집, 공놀이, 산책 활동은 기존처럼 정상 동작함

추천 커밋 메시지:
Add 4x2 walk sprite test
```

---

## 11. 새 동작 추가 전 체크리스트

이미지를 repo에 넣기 전에 확인한다.

```text
- PNG 파일인가?
- 가능하면 투명 배경인가?
- 프레임 수가 맞는가?
- Columns / Rows를 정확히 알고 있는가?
- 프레임 크기가 균일한가?
- 캐릭터가 프레임마다 너무 심하게 흔들리지 않는가?
- 파일명을 규칙에 맞게 정했는가?
- 테스트용이라면 sprite-test 폴더에 넣었는가?
```

---

## 12. 새 동작 추가 후 체크리스트

Sprite Lab에서 확인한다.

```text
- 목록에 항목이 보이는가?
- 클릭하면 올바른 이미지가 재생되는가?
- 프레임 순서가 맞는가?
- 프레임이 잘리지 않는가?
- 옆 프레임 일부가 보이지 않는가?
- 속도가 너무 빠르거나 느리지 않은가?
- 기존 항목이 여전히 정상 동작하는가?
- 본편 기능이 깨지지 않았는가?
```

---

## 13. 본편 적용 후보로 승격할 때

Sprite Lab에서 충분히 확인한 sprite만 본편 적용 후보로 검토한다.

승격 기준 예시:

```text
- 캐릭터가 감자처럼 보인다.
- 프레임 순서가 자연스럽다.
- 투명 배경이 정상이다.
- frame clipping이 없다.
- 인접 frame이 보이지 않는다.
- 본편 화면 크기에서 읽기 쉽다.
- 움직임이 Potato’s Day의 부드럽고 귀여운 분위기와 맞는다.
```

승격 흐름:

```text
sprite-test에서 테스트
→ 품질 확인
→ 본편 적용 여부 판단
→ sprites 폴더로 복사 또는 이동
→ 본편 activity에 적용
```

---

## 14. 현재 운영 원칙 요약

```text
Sprite Lab은 본편과 분리된 animation preview 공간이다.
테스트용 이미지는 assets/characters/sprite-test/에 둔다.
본편 적용용 이미지는 assets/characters/sprites/에 둔다.
새 항목은 Label / ID / File / Frames / Columns / Rows / SpeedMs로 관리한다.
프레임은 왼쪽→오른쪽, 위→아래 순서로 재생한다.
Sprite Lab 수정은 본편 기능을 건드리지 않는다.
```

---

## 15. 향후 보완 후보

나중에 필요하면 다음 내용을 추가로 정리한다.

```text
- Sprite Lab UI 구조
- 현재 등록된 sprite 목록
- 각 sprite별 품질 평가 메모
- Asset Creator 요청 프롬프트 예시
- 투명 PNG / alpha channel 확인 방법
- 본편 적용 승인 기준
- sprite animation별 권장 frame count
```
