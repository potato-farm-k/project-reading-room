---
title: Living Aegis Origin Sound Direction Memo
category: living-aegis-origin
source_repo: living-aegis-origin
source_path: docs/direction/SOUND_DIRECTION.md
copy_type: reading-copy
last_reviewed: 2026-07-04
print_friendly: true
---

# Living Aegis Origin Sound Direction Memo v0.1

문서 상태: v0.1 / 참고용 초안  
문서 성격: Creative Direction reference draft  
원본 위치: `living-aegis-origin`  
사용 목적: 초반 오프닝과 방어자 각성 흐름에 맞는 사운드 감정 기준 정리  
리딩룸 후보: yes  
주의: `project-reading-room`에는 나중에 reading copy로 반영 가능

작업 범위: Sound Direction Memo + Mood Track Sketch Prompt 초안
제외 범위: 실제 음악 파일 제작, AI 음악 서비스 선택, 게임 내 적용, Sound Director 분리

---

## 1. 문서 목적

이 문서는 Living Aegis Origin의 초반 오프닝과 방어자 각성 흐름에 맞는 사운드 방향을 정리하기 위한 Creative Director 메모다.

현재 단계에서는 실제 음악 파일을 제작하지 않는다.
또한 특정 AI 음악 서비스를 선택하지 않으며, 게임 내 적용 방식이나 Web Audio API 구현도 논의하지 않는다.

이 문서의 목적은 다음과 같다.

```text
- LAO 초반 감정선에 맞는 사운드 기준 정리
- 작업용 Mood Track Sketch 후보 3종의 방향 정리
- AI music prompt 초안 작성
- Art Director / Game Designer / Codex Director가 참고할 수 있는 감정 기준 제공
- 이후 Sound Director 분리 전까지 Creative Director 산하 메모로 관리
```

이 문서에서 작성하는 prompt는 실제 제작 확정용이 아니라,
나중에 PM 재승인 후 음악 제작을 검토할 때 사용할 수 있는 **초안**이다.

---

## 2. 현재 핵심 감정선

Living Aegis Origin의 초반 감정 흐름은 다음과 같다.

```text
평화로운 달의 고요함
→ 지구 방향의 작은 이상 징후
→ 첫 타격 또는 막지 못한 첫 상처
→ 분위기 전환
→ 생체무기 부분 각성
→ 첫 방어 성공
→ 본격 방어전 예고
```

이 흐름에서 사운드는 단순한 배경음이 아니다.
사운드는 플레이어가 다음 상태 변화를 감정적으로 이해하도록 도와야 한다.

```text
관찰자
→ 이상을 감지한 목격자
→ 첫 충격을 받은 생존자
→ 깨어나는 방어 시스템과 연결된 존재
→ 첫 위협을 막아낸 방어자
```

따라서 사운드는 처음부터 웅장한 전투 음악으로 시작하지 않는다.
처음에는 고요함과 여백을 유지하고, 위협과 각성의 순간에만 강한 질감이 들어와야 한다.

---

## 3. Sound Direction 핵심 판단

### 3.1 사운드가 강화해야 할 것

Living Aegis Origin의 사운드는 다음 요소를 강화해야 한다.

```text
- 달 표면의 고요함
- 지구를 바라보는 외로움과 경이감
- 지구 방향에서 오는 불안한 이상 징후
- 평화가 깨지는 첫 충격
- 생체무기가 장비가 아니라 살아있는 방패처럼 깨어나는 감각
- 플레이어가 방어자로 전환되는 순간
- 본격 전투 직전의 압박감
```

사운드는 전투의 박진감을 먼저 만들기보다,
**고요함이 깨지고 방어자가 태어나는 감정 변화**를 만들어야 한다.

---

### 3.2 기본 사운드 정체성

현재 단계의 기본 사운드 정체성은 다음과 같이 잡는다.

```text
lunar blues noir
+ cosmic ambient
+ bio-mechanical pulse
+ restrained industrial impact
```

의미는 다음과 같다.

```text
lunar blues noir:
달 위에서 지구를 바라보는 고독함, 느슨한 정적, 쓸쓸한 인간적 감정

cosmic ambient:
우주의 넓이, 거리감, 공기가 없는 듯한 정적, 지구의 압도감

bio-mechanical pulse:
생체무기가 살아있는 존재처럼 반응하는 심장박동, 저주파 진동, 유기적 움직임

restrained industrial impact:
첫 타격, 각성, 요격 순간에 짧고 강하게 들어오는 금속성/기계성 충격
```

---

### 3.3 일반 SF 전투 음악과 달라야 하는 점

Living Aegis Origin은 일반적인 space battle game처럼 시작하면 안 된다.

피해야 할 방향은 다음과 같다.

```text
- 시작부터 웅장한 전투 음악
- 빠른 드럼 루프
- 밝고 영웅적인 fanfare
- 현대 군사 SF 경고음
- arcade shooter식 보상음
- 단순한 beep 중심의 UI 사운드
- 기존 작품이나 특정 아티스트를 직접 모방하는 방향
```

LAO의 사운드는 “전투를 멋있게 꾸미는 음악”이 아니라,
“고요한 달 위에서 살아있는 방패가 깨어나는 감정”을 중심에 둔다.

---

## 4. Mood Track Sketch 후보 3종

현재 PM 승인 범위에서 유지할 Mood Track Sketch 후보는 다음 3종이다.

```text
1. Quiet Lunar Blues
2. First Anomaly / First Wound
3. Bio-Mechanical Awakening
```

이 3종은 최종 OST가 아니다.
현재는 working reference / mood reference이며, 실제 음악 생성은 PM 재승인 이후에만 진행한다.

---

## 5. Mood Track 01 — Quiet Lunar Blues

### 5.1 목적

Quiet Lunar Blues는 LAO의 시작 정서를 확인하기 위한 작업용 mood track이다.

이 track은 달 표면에서 지구를 바라보는 고요함, 외로움, 넓은 공간감을 표현한다.
아직 전투가 시작되지 않았고, 플레이어는 방어자가 아니라 관찰자에 가깝다.

이 음악은 “멋진 오프닝 테마”가 아니라,
작업자가 LAO를 생각할 때 반복해서 들을 수 있는 **정서적 기준점** 역할을 한다.

---

### 5.2 핵심 감정

```text
고요함
외로움
넓은 공간감
느슨한 긴장
아름답지만 불안한 지구
결투 전의 정적
달 위의 고독한 방어자 예감
```

---

### 5.3 사운드 질감

```text
near silence
wide lunar ambience
low cosmic drone
slow blues phrasing
lonely guitar tone
sparse bass
soft brushed rhythm
large reverb
minimal melody
```

사운드는 너무 꽉 차 있으면 안 된다.
중요한 것은 선율보다 여백이다.

---

### 5.4 사용할 수 있는 악기 / 음색 후보

```text
slow clean electric guitar
tremolo guitar
baritone guitar
sparse upright bass or deep electric bass
soft brushed percussion
distant ambient pad
subtle low drone
very light metallic resonance
```

악기 구성은 적어야 한다.
달 표면의 공간감과 고독함이 먼저 느껴져야 한다.

---

### 5.5 피해야 할 방향

```text
- 밝은 jazz swing
- big band 느낌
- 빠른 bebop 리듬
- 지나치게 서부극처럼 들리는 휘파람/트럼펫 중심 구성
- 시작부터 전투를 암시하는 drums
- 웅장한 orchestra
- 지나치게 감상적인 멜로디
```

이 track은 space western으로 기울지 않도록 주의한다.
목표는 western 그 자체가 아니라 **lunar noir의 고독함**이다.

---

### 5.6 AI music prompt 초안

```text
Create a slow, sparse lunar blues noir mood track for a quiet first-person view from the Moon toward Earth. The music should feel lonely, spacious, restrained, and cinematic, with slow clean electric guitar phrases, sparse deep bass, subtle brushed percussion, wide reverb, near silence, and a very low cosmic ambient drone. The mood is peaceful but slightly uneasy, like a lone defender before the first sign of danger. Avoid heroic fanfare, fast jazz, big band swing, military sci-fi action, or obvious western parody. Keep the arrangement minimal, atmospheric, and emotionally restrained.
```

### 5.7 한국어 설명용 요약

```text
달 표면에서 지구를 바라보는 고요한 blues noir.
느린 기타, 넓은 reverb, 낮은 ambient drone, 적은 악기 구성.
전투 음악이 아니라 외롭고 넓은 정적.
아름답지만 어딘가 불안한 지구를 바라보는 분위기.
```

---

## 6. Mood Track 02 — First Anomaly / First Wound

### 6.1 목적

First Anomaly / First Wound는 평화로운 달의 고요함이 처음 깨지는 순간을 위한 mood track이다.

이 track은 지구 방향의 작은 이상 징후가 실제 위협으로 드러나고,
플레이어가 아직 막지 못한 첫 타격 또는 첫 상처를 경험하는 감정을 표현한다.

중요한 것은 “대규모 전투 시작”이 아니다.
이 track의 목적은 **평화가 처음 찢어지는 감각**을 만드는 것이다.

---

### 6.2 핵심 감정

```text
미세한 이상함
불안
집중
정적의 균열
막지 못한 첫 충격
무력감
이제 돌아갈 수 없다는 감각
```

---

### 6.3 사운드 질감

```text
distant metallic resonance
thin signal shimmer
unstable low drone
broken guitar harmonics
subtle dissonance
sudden industrial impact
muffled shock
silence rupture
```

처음에는 작은 이상 신호처럼 시작한다.
이후 한 번의 짧고 강한 impact가 들어오며 평화가 깨져야 한다.

---

### 6.4 사용할 수 있는 악기 / 음색 후보

```text
distant metallic bell-like resonance
processed guitar harmonics
low analog drone
sub-bass impact
distorted metal hit
short industrial noise burst
faint warning pulse
dark ambient texture
```

금속성 질감은 허용하지만, 너무 현대 군사 장비처럼 들리면 안 된다.

---

### 6.5 피해야 할 방향

```text
- 처음부터 강한 전투 리듬
- 공포 영화식 jump scare
- 지나치게 큰 폭발음 중심 구성
- 명확한 보스 등장 음악
- 승리감 또는 영웅적 전환
- 단순 siren / beep 반복
```

첫 타격은 “멋진 액션의 시작”이 아니라
“고요함이 망가진 첫 상처”여야 한다.

---

### 6.6 AI music prompt 초안

```text
Create a tense cinematic sci-fi mood sketch that begins with quiet lunar ambience and slowly introduces a faint anomaly from the direction of Earth. Use distant metallic resonance, thin shimmering signal tones, unstable low drone, broken guitar harmonics, and subtle dissonance. Around the middle, add one short restrained industrial impact that feels like silence being torn open, a first wound rather than a large battle explosion. The mood should shift from peaceful unease to shocked stillness. Avoid heroic action music, jump scares, loud blockbuster explosions, military sirens, or repetitive beeps.
```

### 6.7 한국어 설명용 요약

```text
고요한 달 풍경 속에서 지구 방향의 작은 이상 신호가 나타나고,
그것이 첫 타격으로 이어지는 분위기.
작은 금속성 공명, 낮은 drone, 깨진 기타 harmonic,
그리고 짧은 industrial impact로 정적이 찢어지는 느낌.
```

---

## 7. Mood Track 03 — Bio-Mechanical Awakening

### 7.1 목적

Bio-Mechanical Awakening은 생체무기가 단순한 장비가 아니라 살아있는 방패처럼 깨어나는 감정을 확인하기 위한 mood track이다.

이 track은 완전한 전투 음악이 아니다.
아직 무기는 완전히 안정되지 않았고, 플레이어도 자신이 무엇과 연결되었는지 모른다.

핵심은 다음이다.

```text
기계가 켜지는 것이 아니라,
살아있는 무언가가 반응한다.
```

---

### 7.2 핵심 감정

```text
이질감
생명성
불완전한 각성
심장박동
낯선 연결감
두려움과 힘의 공존
방어자로 변하는 순간
```

---

### 7.3 사운드 질감

```text
organic heartbeat
deep pulse
wet mechanical texture
bio-metal resonance
low biological drone
rising electronic tension
mysterious vocal-like texture
restrained industrial burst
energy charge
```

이 track은 LAO의 Bio-Mechanical 정체성을 가장 직접적으로 다룬다.
따라서 일반 robot activation sound와 구분되어야 한다.

---

### 7.4 사용할 수 있는 악기 / 음색 후보

```text
low pulsing synth
processed human-like vocal texture without clear lyrics
distorted guitar feedback
sub-bass heartbeat
wet mechanical percussion
metallic breathing texture
dark electronic pad
restrained industrial drums
bio-energy charge sound
```

보컬성은 가사가 명확한 노래라기보다,
신비롭고 미래적인 vocal texture 정도가 적합하다.

---

### 7.5 피해야 할 방향

```text
- 깨끗한 robot boot-up sound
- 슈퍼히어로 변신 음악
- 밝은 power-up jingle
- 지나치게 공포스러운 괴물 소리
- gore 느낌이 강한 젖은 효과음
- 완성형 전투 테마처럼 들리는 빠른 리듬
```

생체무기는 괴물이 아니라 방패다.
따라서 혐오감보다 이질적인 생명성과 연결감을 우선한다.

---

### 7.6 AI music prompt 초안

```text
Create a dark bio-mechanical awakening mood track for a living defense weapon partially awakening on the Moon. The music should feel alien, organic, powerful, and uncertain, with a deep heartbeat-like pulse, low pulsing synth, wet mechanical textures, metallic breathing resonance, distorted guitar feedback, subtle futuristic vocal-like tones without clear lyrics, and restrained industrial energy. It should not feel like a clean robot startup or a superhero transformation. The mood is a human becoming connected to a living shield, frightened but beginning to defend. Avoid gore horror, bright power-up jingles, fast action drums, or heroic fanfare.
```

### 7.7 한국어 설명용 요약

```text
달 위에서 생체무기가 부분적으로 깨어나는 분위기.
기계 시동음이 아니라 심장박동, 낮은 pulse, 젖은 금속성 질감,
가사 없는 미래적 vocal texture, 왜곡된 feedback이 섞인 느낌.
두렵지만 방어자로 변해가는 감정.
```

---

## 8. 세 Mood Track의 관계

세 track은 각각 독립된 음악이 아니라, 하나의 감정 흐름을 나누어 보는 기준이다.

```text
Quiet Lunar Blues
= 아직 평화롭고 고요한 달의 정적

First Anomaly / First Wound
= 지구 방향의 이상 징후와 첫 상처

Bio-Mechanical Awakening
= 살아있는 방패와 연결되는 순간
```

세 track의 감정 흐름은 다음과 같다.

```text
고요함
→ 균열
→ 각성
```

따라서 이 3종은 LAO 초반 사운드 방향의 최소 단위로 볼 수 있다.

---

## 9. 레퍼런스 사용 기준

현재 내부 감정 참고로 사용된 방향은 다음과 같다.

```text
- 고독한 공간감
- blues / jazz noir의 느슨함
- 신비롭고 상승하는 futuristic electronic texture
- 짧고 강한 industrial impact
```

하지만 실제 prompt나 외부 제작 요청에서는 특정 아티스트나 기존 곡을 직접 모방하라는 표현을 피한다.

사용 가능한 표현:

```text
lonely western-noir guitar
sparse blues phrasing
wide lunar ambience
mysterious futuristic vocal texture
restrained industrial impact
organic heartbeat pulse
distorted machine resonance
bio-mechanical texture
cosmic ambient drone
```

피해야 할 표현:

```text
특정 작곡가처럼 만들어줘
특정 애니메이션 음악처럼 만들어줘
특정 게임 OST와 비슷하게 만들어줘
특정 밴드/작곡가의 사운드를 그대로 따라해줘
```

레퍼런스는 이름이 아니라 감정 성분과 질감으로 변환해서 사용한다.

---

## 10. 실제 음악 생성 전 PM 확인 문구

이 문서의 prompt는 초안이며, 실제 음악 생성은 아직 진행하지 않는다.

실제 음악 생성을 시작하기 전에는 PM에게 다음 사항을 다시 확인해야 한다.

```text
1. 현재 프로토타입 진행 단계에서 음악 생성이 필요한가?
2. 생성 목적은 작업용 reference인가, 게임 내 적용 후보인가?
3. 사용할 AI music service를 정할 것인가?
4. 생성된 음악을 repository에 포함할 계획이 있는가?
5. 저작권 / 라이선스 검토가 필요한가?
6. Sound Director 분리가 필요한 단계인가?
```

PM 승인 전까지 이 문서는 사운드 제작 지시서가 아니라
Creative Director의 감정 방향 메모로만 사용한다.

---

## 11. 피해야 할 전체 사운드 방향

현재 LAO 초반 사운드에서 피해야 할 방향은 다음과 같다.

```text
- 처음부터 전투 음악처럼 들리는 방향
- 지나치게 서부극으로 기우는 방향
- 특정 작품을 직접 연상시키는 모방
- arcade shooter식 가벼운 효과음
- 현대 군사 시뮬레이터식 경고음
- 과도한 horror / gore texture
- 너무 깨끗하고 차가운 일반 SF UI sound
- 승리감이 너무 빨리 오는 음악
```

LAO의 핵심은 다음이다.

```text
고요한 달
불안한 지구
첫 상처
살아있는 방패의 각성
고독한 첫 방어
```

사운드는 이 흐름을 방해하지 않아야 한다.

---

## 12. 다음 단계 제안

현재 PM 승인 범위에서 다음 단계는 여기까지다.

```text
1. Sound Direction Memo v0.1을 Creative Director 메모로 유지한다.
2. Mood Track Sketch 3종의 prompt 초안을 보관한다.
3. 실제 음악 파일은 생성하지 않는다.
4. Art Director / Game Designer / Codex Director가 참고할 수 있도록 감정 기준으로 공유한다.
5. 프로토타입에서 첫 위협, 첫 타격, 생체무기 각성 흐름이 더 구체화되면 PM에게 음악 생성 여부를 다시 확인한다.
```

이후 확장 가능 문서는 다음과 같다.

```text
- Sound Direction Memo v0.2
- Mood Track Sketch Prompt Pack
- AI Music Prompt Pack
- BGM Cue List
- SFX List
- Sound Bible
```

단, 위 문서들은 현재 단계에서 작성하지 않는다.

---

## 13. Creative Director 결정

Living Aegis Origin의 사운드 방향은 현재 단계에서 실제 제작이 아니라 감정 기준 정리로 제한한다.

초반 사운드는 `Quiet Lunar Blues`, `First Anomaly / First Wound`, `Bio-Mechanical Awakening`의 3개 Mood Track Sketch 후보로 정리하며, 각각은 최종 OST가 아니라 working reference / mood reference로 관리한다.

실제 음악 생성, 게임 적용, Sound Director 분리는 PM 재승인 전까지 진행하지 않는다.

---

## 14. 다른 역할에 미치는 영향

### Creative Director 결정

LAO의 사운드 방향은 현재 `Sound Direction Memo v0.1`과 `Mood Track Sketch Prompt` 수준으로 관리한다. 실제 음악 제작은 하지 않는다.

↓

### Art Director 영향

Art Director는 달 표면, 지구, 첫 타격, 생체무기 각성 장면의 시각 톤을 잡을 때 이 사운드 감정 기준을 참고할 수 있다.

↓

### Game Designer 영향

Game Designer는 사운드를 단순 배경음이 아니라, 플레이어가 고요한 관찰자에서 방어자로 전환되는 감정 장치로 해석할 수 있다.

↓

### Codex Director 영향

Codex Director는 현재 오디오 구현 작업을 요청받지 않는다. 나중에 PM 승인 후 cue system, 임시 BGM 적용, Web Audio API 작업으로 분리할 수 있다.

↓

### Sound Director 영향

Sound Director는 아직 분리하지 않는다. 향후 실제 음악 생성, SFX list, cue 관리, loop/fade/volume 기준, Web Audio API 적용 논의가 시작될 때 분리할 수 있다.

↓

### Project Manager 영향

PM은 이 문서를 현재 핵심 prototype/simulator 검토를 방해하지 않는 병렬 참고 문서로 관리할 수 있다.
