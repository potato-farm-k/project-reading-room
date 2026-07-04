---
title: Potato’s Day README
category: potato-day
source_repo: potato-day
source_path: README.md
copy_type: reading-copy
last_reviewed: 2026-07-04
print_friendly: true
---

# Potato’s Day / 감자의 하루

포메라니안 감자가 주인공인 조용하고 귀여운 2D 힐링 웹 게임입니다.

## 현재 버전

v2.0.1

## 현재 기능

- `감자의 집` 허브 화면
- 투명 배경 감자 캐릭터 표시
- `감자 부르기` 버튼과 반응 문구
- Web Audio API 기반의 짧은 효과음
- 사운드 ON/OFF 토글
- 감자의 부드러운 idle animation과 클릭 reaction animation
- `공놀이 하러 가기` 화면 전환
- 버튼 하나짜리 간단한 공놀이
- 공놀이 상태 루프 준비
- 공이 감자 쪽으로 굴러갔다 돌아오는 기본 이동 animation
- 공놀이 화면 감자 표시와 짧은 반응 animation
- 공놀이 공과 감자의 크기 비례 및 도착 위치 조정
- 공놀이 감자와 공의 크기 균형 조정
- 공놀이 상태 흐름에 맞춘 단계별 반응 메시지
- 상태별 버튼 문구와 중복 입력 방지를 갖춘 한 버튼 공놀이 loop
- 첫 공놀이 미니게임 1차 polish 완료
- 8프레임 sprite sheet 기반의 첫 본편 활동 `감자와 산책`
- 천천히 움직이는 산책길과 따뜻한 산책 메시지
- 여러 animation을 선택해 확인하는 개발용 `Sprite Animation Lab`
- 워크플로우 보기 modal

## 기술

- HTML
- CSS
- JavaScript
- GitHub Pages

## 실행 방법

1. 이 저장소를 로컬에 내려받습니다.
2. `index.html` 파일을 브라우저에서 엽니다.
3. 화면에 `v2.0.1`, `Potato’s Day`, `감자의 하루`, `감자의 집` 문구가 보이는지 확인합니다.
4. `감자 부르기` 버튼으로 감자의 반응 문구, animation, 효과음을 확인합니다.
5. 사운드 토글로 효과음을 켜고 끌 수 있는지 확인합니다.
6. `공놀이 하러 가기` 버튼을 눌러 공놀이 화면으로 이동합니다.
7. `공 톡 치기` 버튼으로 공 animation과 공놀이 반응 문구를 확인합니다.
8. `감자의 집으로 돌아가기` 버튼으로 홈 화면에 복귀합니다.
9. `감자와 산책` 버튼을 눌러 8프레임 걷기 animation과 움직이는 산책길을 확인합니다.
10. 산책 화면의 `감자의 집으로 돌아가기` 버튼으로 홈 화면에 복귀합니다.
11. `Sprite Lab`에서 기존 항목과 `Walk 8 Frames 4x2`를 전환하고 각 frame 수, layout, speed 표시를 확인합니다.
12. 작은 워크플로우 아이콘 버튼을 눌러 modal이 열리고 닫히는지 확인합니다.
13. 브라우저 개발자 도구 Console에서 `Potato’s Day v2.0.1` 메시지를 확인합니다.

## 공놀이 상태 루프

v1.1은 공놀이 화면의 내부 상태 루프를 준비합니다.

```text
ready → rolling → gamja-reacting → returning → ready
```

## 공놀이 변경 기록

- v1.1: 공놀이 상태 구조 준비
- v1.2: 공의 이동 및 복귀 animation 추가
- v1.3: 공놀이 화면의 감자와 짧은 반응 animation 추가
- v1.3.x: 공과 감자의 크기 및 위치 균형 조정
- v1.4: 상태별 공놀이 메시지 추가
- v1.5: 한 버튼 반복 공놀이 loop 정리
- v1.6: 첫 공놀이 미니게임의 메시지와 전체 흐름 polish

## Sprite 활동 변경 기록

- v2.0: 8프레임 감자 걷기 sprite sheet를 사용한 첫 sprite-based activity `감자와 산책` 추가
- v2.0: 걷기 sprite의 실제 PNG alpha channel을 별도 런타임 처리 없이 직접 사용
- v2.0.1: 256px 안전 crop과 축소된 표시 크기로 걷기 sprite 경계 및 크기 안정화
- Sprite Lab: 선택 가능한 sprite 목록과 중립 미리보기 기반의 multi-animation lab으로 개편
- Sprite Lab: `columns × rows` layout을 지원하고 테스트용 `Walk 8 Frames 4x2` 항목 추가
- Sprite Lab: 4x2 걷기 sprite의 프레임별 중앙·발끝 기준선을 맞추고 재생 속도를 160ms로 조정

## 다음 계획

- 다음 sprite-based activity 범위 논의
