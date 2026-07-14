---
title: WEB-011. GitHub Pages Architecture
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-011-GitHub-Pages-Architecture.md
copy_type: source
last_reviewed: 2026-07-14
print_friendly: true
---

# WEB-011. GitHub Pages 서비스는 어떻게 설계할까?

## 부제: 브라우저, 정적 호스팅, Serverless, 외부 API와 DB를 하나의 구조로 조립하기

> 이제는 기술을 하나씩 배우는 단계가 아니라,
> 어떤 기능을 어디에 두고 어떻게 연결할지 설계하는 단계입니다.

---

## 1. 학습 목표

이 문서를 읽고 나면 다음 질문에 답할 수 있어야 합니다.

- GitHub Pages는 어떤 역할을 담당하는가?
- 브라우저 JavaScript는 어떤 일을 할 수 있고 어떤 일을 맡기면 안 되는가?
- 외부 API를 브라우저에서 직접 호출해도 되는 경우는 언제인가?
- Serverless Proxy는 언제 필요한가?
- 데이터베이스는 언제 추가해야 하는가?
- 일반 서버가 필요한 경우는 언제인가?
- 새로운 기능을 어느 계층에 배치할지 어떻게 판단하는가?
- 작은 프로젝트가 기능 증가에 따라 어떻게 확장될 수 있는가?

---

## 2. 지금까지 배운 내용을 하나로 연결하기

Part I에서 배운 기술은 따로 떨어진 개념이 아닙니다.

```text
HTML
+
CSS
+
JavaScript
        ↓
브라우저
        ↓ HTTP
REST API
        ↓
CORS
        ↓
Serverless Proxy
        ↓
외부 API
```

필요한 경우 다음 요소가 추가됩니다.

```text
Database
Object Storage
Authentication Service
General Server
```

전체 흐름은 다음처럼 볼 수 있습니다.

```text
사용자
   ↓
브라우저
   ↓
GitHub Pages
   ↓
JavaScript
   ↓
Serverless 또는 외부 API
   ↓
Database 또는 다른 서비스
```

---

## 3. 먼저 정적 사이트와 동적 서비스의 차이

### 정적 사이트

미리 준비된 파일을 사용자에게 전달합니다.

```text
HTML
CSS
JavaScript
이미지
사운드
Markdown 렌더링 결과
```

예:

```text
GitHub Pages
   ↓
브라우저에 파일 전달
```

### 동적 서비스

요청에 따라 서버가 데이터를 조회하거나 처리한 뒤 결과를 만듭니다.

예:

```text
사용자 요청
   ↓
서버 실행
   ↓
DB 조회 또는 외부 API 호출
   ↓
응답 생성
```

GitHub Pages는 정적 호스팅입니다.

하지만 JavaScript가 외부 API나 Serverless Function을 호출하면 정적 사이트도 동적인 기능을 가질 수 있습니다.

```text
정적 화면
+
동적 데이터 통신
=
웹 애플리케이션
```

---

## 4. GitHub Pages의 역할

GitHub Pages는 다음 파일을 배포하는 데 적합합니다.

- HTML
- CSS
- JavaScript
- 이미지
- 아이콘
- 폰트
- Markdown 기반 정적 콘텐츠
- 정적 JSON

GitHub Pages가 담당하는 일:

```text
화면
레이아웃
사용자 인터페이스
정적 리소스 배포
브라우저 코드 전달
```

GitHub Pages가 직접 담당하지 않는 일:

```text
서버 코드 실행
비밀 API Key 보관
DB 조회
로그인 세션 처리
결제 검증
이메일 전송
백그라운드 작업
```

즉:

> GitHub Pages는 화면과 정적 콘텐츠를 제공하지만, 서버 기능을 직접 실행하지는 않습니다.

---

## 5. 브라우저의 역할

브라우저는 GitHub Pages에서 받은 파일을 실행합니다.

담당하는 일:

- HTML 파싱
- CSS 적용
- JavaScript 실행
- DOM 생성과 변경
- 사용자 입력 처리
- 화면 렌더링
- `fetch()`를 통한 HTTP 요청
- 받은 데이터를 화면에 표시
- 간단한 계산과 상태 관리
- Local Storage 같은 브라우저 저장소 사용

브라우저에 두기 적합한 기능:

```text
버튼 클릭 처리
화면 전환
정렬과 필터
간단한 계산
공개 데이터 가공
애니메이션
사용자 인터페이스 상태
```

브라우저에 두면 안 되는 기능:

```text
비밀 API Key
관리자 권한 로직
결제 비밀값
서버용 인증 정보
누구나 보면 안 되는 업무 규칙
```

이유는 간단합니다.

> 브라우저로 전달된 JavaScript는 사용자가 확인할 수 있습니다.

---

## 6. 외부 API의 역할

외부 API는 원본 데이터나 기능을 제공합니다.

예:

- 공공데이터
- 날씨
- 지도
- 결제
- 이메일
- AI
- 이미지 분석
- 환율
- 교통
- 인증

구조:

```text
브라우저 또는 Serverless
        ↓
외부 API
        ↓
JSON·XML·이미지 등의 응답
```

외부 API는 우리 서비스의 일부처럼 사용할 수 있지만 실제로는 별도의 시스템입니다.

따라서 다음 조건을 확인해야 합니다.

- 요청 URL
- HTTP Method
- API Key
- 요청 제한
- CORS 지원
- 응답 형식
- 오류 형식
- 이용 약관
- 비용
- 서비스 안정성

---

## 7. 외부 API를 브라우저에서 직접 호출해도 될까?

다음 조건을 모두 만족하면 브라우저에서 직접 호출할 수 있습니다.

```text
API가 브라우저 Origin을 CORS로 허용
API Key가 필요 없거나 공개되어도 무방
응답 가공이 단순
민감한 업무 로직이 없음
호출 횟수 제한을 클라이언트에 맡겨도 문제 없음
```

구조:

```text
GitHub Pages
   ↓
브라우저 JavaScript
   ↓
외부 API
```

장점:

- 구조가 단순함
- Serverless가 필요 없음
- 배포가 쉬움
- 비용이 적음

주의점:

- API Key 노출 가능
- CORS 문제
- 외부 API 구조가 화면 코드에 직접 노출
- 오류 처리와 요청 제한을 브라우저가 맡음
- API 변경 시 프런트엔드 영향이 큼

---

## 8. Serverless Proxy가 필요한 경우

다음 중 하나라도 해당하면 Serverless Proxy를 검토합니다.

- API Key를 숨겨야 함
- 외부 API가 브라우저 CORS를 허용하지 않음
- 응답에서 필요한 데이터만 골라야 함
- 여러 API 결과를 하나로 합쳐야 함
- 요청값을 검증해야 함
- 오류 형식을 통일해야 함
- 호출 횟수를 제한해야 함
- 비즈니스 규칙을 브라우저에 공개하면 안 됨
- 외부 API 주소를 직접 노출하고 싶지 않음

구조:

```text
브라우저
   ↓
Serverless Proxy
   ↓
외부 API
```

Proxy는 중간에서 다음 역할을 맡습니다.

```text
요청 수신
인증키 추가
입력 검증
외부 API 호출
응답 가공
오류 처리
CORS Header 설정
응답 반환
```

---

## 9. GitHub Pages와 Serverless의 역할 분담

```text
GitHub Pages
화면과 정적 리소스

Serverless
서버 로직과 비밀값

외부 API
원본 데이터와 외부 기능
```

표로 정리하면:

| 영역 | 주요 역할 |
|---|---|
| GitHub Pages | HTML, CSS, JavaScript, 이미지 배포 |
| 브라우저 | 사용자 입력, 화면 구성, API 호출 |
| Serverless | 비밀값, 검증, 가공, 중계 |
| 외부 API | 원본 데이터와 기능 제공 |
| Database | 영구 데이터 저장 |
| General Server | 지속 실행과 복잡한 서버 처리 |

---

## 10. 전체 기본 아키텍처

DB가 없는 조회형 서비스:

```text
사용자
   ↓
브라우저
   ↓
GitHub Pages
   ↓ fetch()
Serverless Proxy
   ↓
공공데이터 API
   ↓
Serverless Proxy
   ↓ JSON
브라우저
   ↓
화면 표시
```

조금 더 구체적으로:

```text
1. 사용자가 검색 조건 입력

2. JavaScript가 Proxy URL 호출

3. Proxy가 입력값 검증

4. Proxy가 환경 변수의 API Key 사용

5. Proxy가 외부 API 호출

6. 외부 API가 JSON 또는 XML 응답

7. Proxy가 필요한 데이터만 추림

8. Proxy가 일정한 JSON 형식으로 변환

9. 브라우저가 JSON을 받음

10. JavaScript가 DOM을 갱신
```

---

## 11. API Key는 어디에 둘까?

잘못된 구조:

```javascript
const API_KEY = "secret-key";
```

GitHub Pages의 JavaScript에 넣으면 사용자가 확인할 수 있습니다.

올바른 구조:

```text
Serverless Platform
   └── Environment Variable
       └── API_KEY
```

함수는 실행 중 환경 변수에서 값을 읽습니다.

```text
브라우저
API Key를 모름

Serverless
API Key를 사용

외부 API
인증된 요청 수신
```

---

## 12. CORS는 어느 구간에서 확인해야 할까?

다음 두 구간을 분리해야 합니다.

```text
브라우저 ↔ Serverless Proxy
CORS 고려 필요

Serverless Proxy ↔ 외부 API
브라우저의 CORS 정책 적용 안 됨
```

예:

```text
GitHub Pages
https://example.github.io

Serverless Proxy
https://my-service.example.workers.dev
```

두 Origin이 다르므로 Proxy는 다음 Header를 응답할 수 있습니다.

```http
Access-Control-Allow-Origin: https://example.github.io
```

외부 API가 브라우저 CORS를 허용하지 않더라도 Proxy는 서버 간 통신으로 호출할 수 있습니다.

---

## 13. 데이터베이스는 언제 필요한가?

조회형 서비스는 DB 없이 시작할 수 있습니다.

예:

```text
오늘의 날씨
공휴일 조회
지역별 미세먼지
공공시설 검색
환율 조회
```

외부 API가 원본 데이터를 제공하고 우리 서비스가 별도로 저장할 필요가 없다면 DB는 필수가 아닙니다.

DB가 필요한 기능:

- 회원 정보
- 즐겨찾기
- 검색 기록
- 댓글
- 게시글
- 온라인 랭킹
- 사용자 설정
- 서비스 내부 통계
- 여러 사용자가 공유하는 상태
- 외부 API 데이터를 장기 보관해야 하는 경우

구조:

```text
브라우저
   ↓
Serverless 또는 일반 서버
   ↓
Database
```

---

## 14. DB를 처음부터 넣지 않는 이유

DB는 유용하지만 다음 운영 요소를 추가합니다.

- 스키마 설계
- 보안
- 접근 권한
- 백업
- 데이터 마이그레이션
- 비용
- 개인정보 관리
- 장애 대응
- 연결 관리

따라서 초기 서비스는 다음 질문부터 시작하는 것이 좋습니다.

> 이 데이터를 우리 서비스가 반드시 영구 저장해야 하는가?

답이 아니라면 DB 없이 시작할 수 있습니다.

---

## 15. Browser Storage는 DB를 대신할 수 있을까?

브라우저에는 다음 저장소가 있습니다.

- Local Storage
- Session Storage
- IndexedDB

개인 기기 안에만 저장해도 되는 데이터라면 사용할 수 있습니다.

예:

```text
테마 설정
최근 선택값
간단한 개인 메모
튜토리얼 완료 여부
```

하지만 한계가 있습니다.

- 다른 기기와 공유되지 않음
- 브라우저 데이터를 지우면 사라질 수 있음
- 여러 사용자가 공유할 수 없음
- 민감한 비밀값 저장에 부적합
- 서버의 신뢰 가능한 데이터로 보기 어려움

따라서:

```text
개인 브라우저 안의 편의 상태
Browser Storage

여러 기기·사용자가 공유하는 영구 상태
Database
```

---

## 16. 일반 서버는 언제 필요한가?

Serverless가 모든 기능에 적합한 것은 아닙니다.

다음 기능은 일반 서버를 검토할 수 있습니다.

- 항상 실행되어야 하는 프로세스
- 장시간 처리
- 지속적인 WebSocket 연결
- 실시간 멀티플레이 서버
- 복잡한 백그라운드 작업
- 고정된 메모리 상태 유지
- 특수 운영체제 기능
- 대용량 파일 처리
- 매우 세밀한 서버 제어
- 장기간 유지되는 연결

구조:

```text
브라우저
   ↓
일반 서버
   ├── 지속 실행
   ├── 복잡한 로직
   ├── Queue
   ├── Worker
   └── Database
```

---

## 17. 새로운 기능을 어디에 둘까?

다음 의사결정 흐름을 사용할 수 있습니다.

```text
새 기능 요구
   ↓
브라우저만으로 가능한가?
   │
   ├── 가능
   │     ↓
   │   GitHub Pages JavaScript
   │
   └── 불가능
         ↓
Serverless로 가능한가?
   │
   ├── 가능
   │     ↓
   │   제한·비용·보안 확인
   │
   └── 부적합
         ↓
DB·Storage·Queue·일반 서버 검토
```

구체적인 판단 기준:

```text
비밀값이 필요한가?
영구 저장이 필요한가?
항상 실행되어야 하는가?
요청 처리 시간이 긴가?
여러 사용자가 상태를 공유하는가?
외부 API를 대신 호출해야 하는가?
브라우저에 로직이 공개되어도 되는가?
```

---

## 18. 역할 배치 예시

### 화면 필터

```text
기능
목록을 이름순으로 정렬

배치
브라우저 JavaScript
```

### 외부 API Key 보호

```text
기능
비밀키를 사용해 외부 API 호출

배치
Serverless Function
```

### 즐겨찾기 저장

```text
기능
사용자 계정별 즐겨찾기

배치
Serverless 또는 일반 서버 + Database
```

### 실시간 게임 세션

```text
기능
여러 사용자가 지속적으로 연결

배치
일반 서버 또는 실시간 전용 플랫폼
```

### 개인 테마 설정

```text
기능
한 브라우저에서 다크 모드 기억

배치
Local Storage
```

---

## 19. 계층별 신뢰 수준

모든 코드는 같은 수준으로 신뢰할 수 있는 것이 아닙니다.

```text
브라우저
사용자가 보고 수정할 수 있음

Serverless·서버
서비스 운영자가 통제

Database
서버를 통해서만 접근하도록 제한
```

따라서 중요한 검증은 서버에서 다시 해야 합니다.

예를 들어 브라우저가 다음 값을 보냈다고 해도 그대로 믿으면 안 됩니다.

```json
{
  "score": 9999999,
  "isAdmin": true
}
```

서버는 다음을 검사해야 합니다.

- 로그인 사용자
- 권한
- 값의 범위
- 요청 형식
- 중복 제출
- 업무 규칙

> 브라우저 검증은 사용자 편의를 위한 것이고, 서버 검증은 신뢰와 보안을 위한 것입니다.

---

## 20. 외부 API 응답을 그대로 전달해도 될까?

가능하지만 항상 좋은 것은 아닙니다.

외부 API 응답:

```json
{
  "resultCode": "00",
  "resultMsg": "NORMAL_SERVICE",
  "items": {
    "item": [
      {
        "stationName": "종로구",
        "pm10Value": "32",
        "dataTime": "2026-07-14 09:00"
      }
    ]
  }
}
```

우리 Proxy가 필요한 형태로 바꿀 수 있습니다.

```json
{
  "station": "종로구",
  "pm10": 32,
  "measuredAt": "2026-07-14T09:00:00+09:00"
}
```

장점:

- 화면 코드 단순화
- 외부 API 구조 변경 영향 감소
- 숫자와 날짜 형식 통일
- 불필요한 데이터 제거
- 오류 응답 통일

이 과정을 응답 가공 또는 Adapter 역할이라고 볼 수 있습니다.

---

## 21. 오류는 어느 계층에서 처리할까?

오류는 한 곳에서만 처리되지 않습니다.

### 외부 API

```text
외부 서비스 오류
요청 제한 초과
잘못된 인증키
데이터 없음
```

### Serverless Proxy

```text
외부 오류를 내부 형식으로 변환
로그 기록
적절한 Status Code 반환
```

### 브라우저

```text
사용자에게 이해 가능한 메시지 표시
재시도 버튼
로딩 상태 종료
```

예:

```text
외부 API
SERVICE_KEY_IS_NOT_REGISTERED

Proxy 응답
HTTP 502 Bad Gateway
{
  "error": "UPSTREAM_API_ERROR",
  "message": "외부 데이터 서비스를 사용할 수 없습니다."
}

화면
"데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요."
```

---

## 22. 로그와 관찰 가능성

GitHub Pages는 정적 파일을 제공하므로 서버 로그가 거의 없습니다.

Serverless를 사용하면 다음 정보를 확인할 수 있어야 합니다.

- 함수 호출 횟수
- 오류
- 실행 시간
- 외부 API 응답 실패
- 요청 제한 초과
- 배포 버전
- 비용 사용량

브라우저에서는 다음을 확인합니다.

- Console
- Network
- CORS 오류
- Status Code
- 응답 Body
- JavaScript 예외

작은 프로젝트라도 문제가 발생했을 때 어느 구간에서 실패했는지 구분할 수 있어야 합니다.

```text
브라우저 문제인가?
Proxy 문제인가?
외부 API 문제인가?
DB 문제인가?
```

---

## 23. 보안 기본 원칙

### 비밀값은 브라우저에 두지 않는다

```text
API Key
Database Password
Private Token
관리자 비밀값
```

### 사용자 입력은 서버에서 다시 검증한다

브라우저에서 이미 검증했더라도 서버에서 확인합니다.

### CORS를 인증으로 착각하지 않는다

CORS 허용은 응답 읽기 정책입니다.

사용자 권한은 별도로 확인해야 합니다.

### 최소 권한을 사용한다

Serverless Function이 DB 전체를 관리할 필요가 없다면 필요한 권한만 부여합니다.

### 로그에 비밀값을 남기지 않는다

API Key와 개인정보가 로그에 출력되지 않도록 합니다.

---

## 24. 비용과 사용량

GitHub Pages는 정적 배포에 적합하고 비용 부담이 적습니다.

하지만 Serverless, DB, 외부 API는 사용량에 따라 비용이 발생할 수 있습니다.

확인할 항목:

- 함수 호출 횟수
- 실행 시간
- 데이터 전송량
- 외부 API 무료 한도
- DB 읽기·쓰기 횟수
- 저장 용량
- 로그 보관량
- 이미지·파일 전송

초기 구조를 작게 유지하면 비용을 이해하고 통제하기 쉽습니다.

---

## 25. 작은 구조에서 시작해 확장하기

### 1단계: 정적 사이트

```text
GitHub Pages
```

예:

- 문서 사이트
- 포트폴리오
- 단순 게임
- 정적 데이터 뷰어

### 2단계: 공개 API 직접 호출

```text
GitHub Pages
+
외부 API
```

조건:

- CORS 허용
- 비밀키 불필요

### 3단계: Serverless Proxy 추가

```text
GitHub Pages
+
Serverless Proxy
+
외부 API
```

필요:

- API Key
- CORS 대응
- 응답 가공

### 4단계: DB 추가

```text
GitHub Pages
+
Serverless
+
Database
```

필요:

- 사용자 저장
- 즐겨찾기
- 랭킹
- 기록

### 5단계: 일반 서버 또는 전문 서비스 추가

```text
Frontend
+
Serverless
+
General Server
+
Database
+
Queue·Storage
```

필요:

- 지속 연결
- 긴 작업
- 복잡한 처리

> 아키텍처는 처음부터 크게 만드는 것이 아니라, 요구가 생길 때 필요한 계층을 추가하는 방식으로 성장시킬 수 있습니다.

---

## 26. 공공데이터 서비스 예시

목표:

```text
지역별 미세먼지 조회
```

권장 초기 구조:

```text
사용자
   ↓
GitHub Pages
   ↓
Serverless Proxy
   ↓
공공데이터 API
```

DB가 필요하지 않은 이유:

- 원본 데이터는 공공데이터 API가 보유
- 사용자가 조회만 함
- 장기 저장이 필수가 아님
- 사용자 계정이 없음

DB가 필요해지는 시점:

- 즐겨찾는 지역 저장
- 알림 설정
- 사용자별 기록
- 장기간 통계 비교
- 자체 캐시 데이터 축적

---

## 27. Potato's Day 적용

현재 구조:

```text
GitHub Pages
```

적합한 기능:

- HTML/CSS/JavaScript 게임
- 이미지와 사운드
- 브라우저 내 상태
- Local Storage 기반 개인 설정

Serverless를 검토할 기능:

- 온라인 메시지
- 점수 등록
- 외부 AI API
- 이메일
- 간단한 사용자 저장

DB를 검토할 기능:

- 계정별 진행 상태
- 여러 기기 동기화
- 온라인 랭킹
- 공유 콘텐츠

일반 서버를 검토할 기능:

- 실시간 멀티플레이
- 지속 연결
- 복잡한 게임 세션

---

## 28. Living Aegis Origin 적용

현재 구조:

```text
GitHub Pages
+
Canvas 2D
+
JavaScript
```

Serverless로 가능한 기능:

- 점수 제출
- 플레이 기록 등록
- 온라인 랭킹 조회
- 설정 동기화
- 외부 AI·분석 API 호출

DB가 필요한 기능:

- 사용자 계정
- 업적
- 영구 랭킹
- 플레이 기록
- 캠페인 진행 상태

일반 서버가 필요한 기능:

- 실시간 전투 동기화
- 지속적인 멀티플레이 세션
- 서버 권위형 게임 로직

---

## 29. Project Reading Room 적용

현재 Reading Room은 정적 문서 사이트에 가깝습니다.

```text
GitHub Pages
+
Markdown 문서
+
JavaScript Viewer
```

현재 Serverless가 필요하지 않은 기능:

- 문서 목록
- 카테고리 필터
- 검색
- Markdown 렌더링
- 인쇄
- PDF 저장
- UI v3의 Part·Category 이동

Serverless가 필요해질 수 있는 기능:

- 사용자 로그인
- 개인별 읽기 기록 동기화
- 여러 기기 메모
- 서버 검색 인덱스
- 외부 AI 질의 연동
- 문서 편집과 저장

현재 원칙상 이런 기능은 MVP 범위에서 제외합니다.

---

## 30. 아키텍처 문서를 왜 작성할까?

기능이 적을 때는 구조가 단순해 보여 문서가 필요 없어 보일 수 있습니다.

하지만 아키텍처를 짧게라도 기록하면 다음 판단이 쉬워집니다.

- 어떤 기능이 브라우저에 있는가?
- 어떤 기능이 Serverless에 있는가?
- API Key는 어디에 저장되는가?
- DB는 왜 있는가?
- 외부 API가 실패하면 어떻게 되는가?
- 새 기능은 어디에 추가해야 하는가?

좋은 아키텍처 문서는 복잡한 그림보다 **역할과 경계를 명확히 설명하는 문서**입니다.

---

## 31. 추천 기본 설계 원칙

### 원칙 1. 가능한 한 작게 시작한다

```text
GitHub Pages
→ 필요 시 Serverless
→ 필요 시 DB
→ 필요 시 일반 서버
```

### 원칙 2. 비밀값은 브라우저에 두지 않는다

### 원칙 3. 외부 API의 구조를 화면 코드에 과도하게 결합하지 않는다

### 원칙 4. 영구 저장이 필요한지 먼저 확인한 뒤 DB를 추가한다

### 원칙 5. 지원 가능 여부와 적합성을 구분한다

```text
플랫폼이 할 수 있는가?
+
그 플랫폼에 맡기는 것이 좋은가?
```

### 원칙 6. 각 계층의 오류를 구분한다

### 원칙 7. 서버 검증을 브라우저 검증으로 대체하지 않는다

---

## 32. 자주 하는 오해

### “GitHub Pages로는 동적인 서비스를 만들 수 없다.”

GitHub Pages 자체는 정적이지만 JavaScript와 외부 API, Serverless를 연결하면 동적인 서비스를 만들 수 있습니다.

### “동적 기능이 있으면 무조건 DB가 필요하다.”

아닙니다.

외부 API 조회와 일시적인 화면 상태만 필요하다면 DB 없이도 가능합니다.

### “Serverless를 추가하면 모든 서버 문제가 해결된다.”

아닙니다.

실행 시간, 비용, 상태 유지, 지속 연결 등의 제한을 확인해야 합니다.

### “브라우저 JavaScript에 넣은 API Key는 코드에서 숨기면 안전하다.”

아닙니다.

브라우저로 전달된 값은 사용자가 확인할 수 있습니다.

### “CORS가 허용되면 보안 검사는 끝난다.”

아닙니다.

인증, 권한, 입력 검증은 서버가 별도로 처리해야 합니다.

### “외부 API 응답은 그대로 화면에 사용하면 된다.”

가능하지만 Proxy에서 필요한 형태로 가공하면 결합도를 낮추고 화면 코드를 단순화할 수 있습니다.

### “처음부터 완성된 대형 아키텍처를 만들어야 한다.”

아닙니다.

작게 시작하고 실제 요구가 생길 때 계층을 추가하는 편이 좋습니다.

---

## 33. 핵심 요약

- GitHub Pages는 HTML, CSS, JavaScript와 정적 리소스를 배포한다.
- 브라우저는 사용자 입력, 화면 구성, 공개 데이터 처리를 담당한다.
- 브라우저에 비밀 API Key와 신뢰가 필요한 로직을 두면 안 된다.
- 외부 API가 CORS를 허용하고 비밀키가 필요 없다면 브라우저에서 직접 호출할 수 있다.
- Serverless Proxy는 API Key 보호, CORS 대응, 요청 검증과 응답 가공을 담당한다.
- DB는 사용자별·공유·영구 데이터를 저장해야 할 때 추가한다.
- Browser Storage는 한 브라우저의 편의 상태에 적합하다.
- 일반 서버는 지속 실행, 장시간 처리, 지속 연결이 필요할 때 검토한다.
- 새로운 기능은 브라우저, Serverless, DB, 일반 서버 중 어디에 둘지 역할과 제약을 기준으로 판단한다.
- 외부 API, Proxy, 브라우저의 오류를 구분해서 처리해야 한다.
- 아키텍처는 처음부터 크게 만들기보다 요구에 따라 단계적으로 확장한다.

---

## 34. 생각해 보기

1. GitHub Pages가 정적 호스팅인데도 동적인 서비스를 만들 수 있는 이유는 무엇일까?
2. 외부 API를 브라우저에서 직접 호출해도 되는 조건은 무엇일까?
3. API Key를 Serverless 환경 변수에 두는 이유는 무엇일까?
4. Browser Storage와 Database는 어떤 차이가 있을까?
5. Serverless가 지원하는 기능이라도 일반 서버가 더 적합할 수 있는 이유는 무엇일까?
6. 공공데이터 조회 서비스에 DB가 필요 없는 경우와 필요한 경우를 구분해 보자.
7. 외부 API 응답을 Proxy에서 가공하면 어떤 장점이 있을까?
8. 브라우저 검증과 서버 검증은 왜 모두 필요할까?
9. CORS, 인증, 권한은 각각 어떤 문제를 해결하는가?
10. 현재 자신의 프로젝트 기능을 브라우저, Serverless, DB, 일반 서버로 나누어 본다면 어떻게 배치할 수 있을까?

---

## 35. Part I 마무리

Part I에서는 웹 서비스가 동작하는 전체 구조를 살펴봤습니다.

```text
WEB-001
웹의 기본 구조

WEB-002
브라우저

WEB-003
HTML

WEB-004
CSS

WEB-005
JavaScript

WEB-006
브라우저 렌더링

WEB-007
HTTP와 데이터 전달

WEB-008
REST API

WEB-009
CORS

WEB-010
Serverless

WEB-011
서비스 아키텍처
```

한 줄로 연결하면 다음과 같습니다.

```text
브라우저가
HTML·CSS·JavaScript를 실행하고,
HTTP로 REST API를 호출하며,
CORS 정책 안에서 응답을 사용하고,
필요하면 Serverless Proxy와 DB를 통해
하나의 서비스를 구성한다.
```

Part I은 **왜 이런 기술과 구조가 필요한가**를 이해하는 단계였습니다.

다음 Part에서는 이 개념을 실제 브라우저와 코드에서 확인합니다.

---

## 36. 다음 Part 예고

**Part II — 웹 애플리케이션 실습**

예상 학습 흐름:

```text
브라우저 개발자 도구
JavaScript 실행
Fetch API
비동기 처리
JSON 데이터
공공데이터 API
CORS 확인
Serverless Proxy 구성
환경 변수
GitHub Pages 배포
```

Part II에서는 다음 흐름을 반복합니다.

```text
개념
   ↓
짧은 코드
   ↓
브라우저에서 확인
   ↓
개발자 도구로 관찰
   ↓
결과와 원리 정리
```

---

# 변경 이력

## 2026-07-11

- 초판 작성
- Learning Track Part I 종합 정리
- GitHub Pages 기반 서비스 아키텍처 추가
- 브라우저, Serverless, 외부 API와 DB 역할 구분

## 2026-07-14

- 정적 사이트와 동적 서비스의 차이 보강
- GitHub Pages와 브라우저의 책임 범위 명확화
- 외부 API 직접 호출 조건 추가
- Serverless Proxy 도입 판단 기준 추가
- 브라우저, Proxy, 외부 API 사이의 CORS 구간 구분
- API Key와 환경 변수 배치 원칙 보강
- DB 도입 시점과 DB 없는 서비스 조건 추가
- Browser Storage와 Database 비교 추가
- 일반 서버가 필요한 기능 구분 추가
- 새 기능의 계층 배치 의사결정 흐름 추가
- 계층별 신뢰 수준과 서버 검증 원칙 추가
- 외부 API 응답 가공과 오류 처리 전략 추가
- 로그, 보안, 비용과 운영 관점 보강
- 정적 사이트에서 일반 서버까지의 단계별 확장 모델 추가
- Potato's Day, Living Aegis Origin, Project Reading Room 적용 예시 추가
- Part I 전체 요약과 Part II 실습 방향 추가
- 관련 오해와 생각해 보기 항목 보강
