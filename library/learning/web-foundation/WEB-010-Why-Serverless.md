---
title: WEB-010. Why Serverless
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-010-Why-Serverless.md
copy_type: source
last_reviewed: 2026-07-14
print_friendly: true
---

# WEB-010. Serverless는 왜 서버가 없는 서버라고 불릴까?

## 부제: 서버를 없애는 기술이 아니라, 서버 운영을 외부 플랫폼에 맡기는 방식

> Serverless는 서버가 존재하지 않는다는 뜻이 아닙니다.
> 서버는 실제로 존재하지만, 개발자가 직접 설치하고 운영하지 않는 구조를 뜻합니다.

---

## 1. 학습 목표

이 문서를 읽고 나면 다음 질문에 답할 수 있어야 합니다.

- Serverless는 왜 등장했는가?
- Serverless에 정말 서버가 없는가?
- Serverless 서비스는 외부 클라우드 서비스인가?
- Serverless Function과 일반 서버는 어떻게 다른가?
- Serverless Proxy는 왜 필요한가?
- GitHub Pages와 Serverless를 어떻게 조합하는가?
- API Key 보호와 CORS 문제를 어떻게 해결하는가?
- 새 기능이 Serverless에 적합한지 어떻게 판단하는가?
- 언제 DB나 일반 서버를 추가해야 하는가?

---

## 2. 먼저 서버가 왜 필요할까?

정적 웹사이트는 HTML, CSS, JavaScript 파일만으로도 동작할 수 있습니다.

```text
브라우저
   │
   ▼
GitHub Pages
   │
   ├── HTML
   ├── CSS
   ├── JavaScript
   ├── 이미지
   └── 사운드
```

하지만 다음과 같은 기능은 브라우저만으로 처리하기 어렵습니다.

- 외부 API Key 숨기기
- 사용자의 요청 검증
- 로그인과 권한 처리
- 결제 처리
- 외부 API 대신 호출
- 비밀값이 필요한 AI API 호출
- 데이터 저장과 변경
- 이메일 전송
- 외부 서비스 간 중계

이때 서버 기능이 필요합니다.

---

## 3. 전통적인 서버 운영

과거에는 서버 기능이 필요하면 직접 서버를 준비하고 운영해야 했습니다.

예를 들면 다음 작업을 관리해야 했습니다.

- 서버 컴퓨터 또는 가상 서버 준비
- 운영체제 설치
- Node.js, Python, Java 등의 실행 환경 설치
- 웹 서버 설정
- 보안 업데이트
- 장애 감시
- 트래픽 증가 대응
- 백업
- 배포
- 로그 관리

구조는 대략 다음과 같습니다.

```text
브라우저
   │
   ▼
내가 운영하는 서버
   │
   ├── 운영체제
   ├── 웹 서버
   ├── 애플리케이션
   ├── 로그
   ├── 보안
   └── 백업
```

작은 기능 하나를 위해서도 관리해야 할 것이 많았습니다.

---

## 4. Serverless의 핵심 생각

개발자들은 다음과 같이 생각했습니다.

> 서버 기능은 필요하지만, 서버 운영까지 모두 직접 해야 할까?

Serverless는 이 문제를 해결합니다.

개발자는 필요한 함수 코드를 작성하고, 서버 운영은 플랫폼에 맡깁니다.

```text
개발자
   │
   └── 함수 코드 작성

Serverless Platform
   │
   ├── 서버 준비
   ├── 실행 환경 관리
   ├── 요청 분배
   ├── 자동 확장
   ├── 장애 대응
   └── 배포 환경 제공
```

즉, Serverless는 다음 뜻에 가깝습니다.

```text
서버가 없다
        ❌

서버를 내가 직접 관리하지 않는다
        ✅
```

---

## 5. Serverless는 외부 서비스를 이용하는 것인가?

대부분의 경우 그렇습니다.

GitHub에 가입하고 저장소와 GitHub Pages 기능을 사용하는 것처럼, Serverless 플랫폼에 가입하고 함수 실행 환경을 제공받습니다.

대표적인 흐름은 다음과 같습니다.

```text
1. Serverless 서비스 가입

2. 프로젝트 생성

3. 함수 코드 작성

4. 환경 변수 등록

5. 배포

6. 호출 가능한 URL 발급

7. 브라우저나 다른 서버에서 URL 호출
```

예:

```text
https://my-project.example/api/weather
```

브라우저에서는 이 주소를 작은 API 서버처럼 사용할 수 있습니다.

다만 전용 서버 컴퓨터 한 대를 통째로 할당받는 방식과는 다릅니다.

---

## 6. “공간을 할당받는다”는 표현은 어디까지 맞을까?

전통적인 가상 서버를 빌리면 다음과 같은 자원을 직접 관리할 수 있습니다.

```text
가상 서버
├── CPU
├── 메모리
├── 운영체제
├── 디스크
└── 계속 실행되는 프로그램
```

Serverless는 보통 다음에 가깝습니다.

```text
내가 등록한 함수
├── 요청이 들어오면 실행
├── 필요한 만큼 CPU와 메모리 사용
├── 처리가 끝나면 종료될 수 있음
├── 실행 환경은 플랫폼이 관리
└── 고유한 호출 URL 제공
```

따라서 Serverless는 고정된 컴퓨터 공간을 계속 빌리는 것보다 다음 표현이 더 정확합니다.

> 필요한 순간에 함수 코드를 실행할 수 있는 서버 기능을 제공받는다.

---

## 7. Serverless Function이란?

Serverless Function은 특정 요청이 들어올 때 실행되는 작은 서버 프로그램입니다.

예를 들어 브라우저가 다음 주소를 호출한다고 하겠습니다.

```text
/api/weather
```

Serverless Function은 요청을 받은 뒤 공공데이터 API를 대신 호출합니다.

```text
브라우저
   │
   │ GET /api/weather
   ▼
Serverless Function
   │
   │ 공공데이터 API 호출
   ▼
공공데이터 서버
   │
   │ JSON 응답
   ▼
Serverless Function
   │
   │ 필요한 형태로 정리
   ▼
브라우저
```

서버는 실제로 존재하지만 개발자는 함수 코드와 설정만 관리합니다.

---

## 8. 왜 Function이라고 부를까?

전통적인 서버는 계속 실행되는 하나의 큰 프로그램에 가깝습니다.

Serverless에서는 요청 단위로 작은 기능을 나누는 경우가 많습니다.

예:

```text
/api/weather
/api/holidays
/api/search
/api/contact
```

각 기능은 개념적으로 다음과 같은 함수가 될 수 있습니다.

```text
getWeather()
getHolidays()
searchPlaces()
sendContactMessage()
```

그래서 Serverless Function 또는 Function as a Service, 줄여서 FaaS라는 표현을 사용합니다.

---

## 9. Serverless Function과 Serverless Proxy는 같은 것인가?

Serverless Function은 실행 방식이고, Proxy는 그 함수가 맡는 역할입니다.

```text
Serverless Function
요청이 들어오면 실행되는 서버 코드

Serverless Proxy
외부 요청을 대신 전달하는 중계 역할의 Function
```

즉, Serverless Function이 다음 일을 한다면 Serverless Proxy라고 부를 수 있습니다.

```text
브라우저 요청 수신
   ↓
외부 API 대신 호출
   ↓
외부 응답 수신
   ↓
필요한 형태로 가공
   ↓
브라우저에 반환
```

모든 Serverless Function이 Proxy는 아니지만, Serverless Proxy는 Serverless Function으로 구현할 수 있습니다.

---

## 10. 왜 Proxy라고 부를까?

Proxy는 대신 요청해 주는 중간자입니다.

```text
브라우저
“공공데이터를 가져와 주세요.”
        ↓
Serverless Proxy
“제가 외부 API에 대신 요청하겠습니다.”
        ↓
외부 API
```

응답도 다시 중간 서버를 거칩니다.

```text
외부 API 응답
        ↓
Serverless Proxy
        ↓
브라우저
```

Proxy는 단순 전달만 할 수도 있고 다음 작업을 추가할 수도 있습니다.

- API Key 추가
- 요청값 검증
- 응답 형식 변환
- 불필요한 데이터 제거
- 오류 메시지 통일
- 요청 횟수 제한
- 간단한 캐시
- 접근 가능한 Origin 제한

---

## 11. GitHub Pages와 Serverless의 조합

GitHub Pages는 정적 파일 배포에 매우 적합합니다.

하지만 서버 코드를 실행할 수는 없습니다.

역할을 다음처럼 나눌 수 있습니다.

```text
GitHub Pages
   ├── HTML
   ├── CSS
   ├── JavaScript
   ├── 이미지
   └── 사용자 인터페이스

Serverless
   ├── API Key 보호
   ├── 외부 API 호출
   ├── 요청 검증
   ├── 응답 가공
   └── 필요한 서버 로직
```

전체 구조:

```text
사용자 브라우저
        │
        ▼
GitHub Pages
        │
        │ fetch()
        ▼
Serverless Function
        │
        ▼
공공데이터 API
```

정적 사이트의 단순함을 유지하면서 필요한 서버 기능만 추가할 수 있습니다.

---

## 12. API Key를 왜 브라우저에 두면 안 될까?

GitHub Pages의 JavaScript는 사용자 브라우저로 전달됩니다.

다음과 같이 작성하면 API Key가 공개됩니다.

```javascript
const API_KEY = "my-secret-key";
```

브라우저 개발자 도구나 소스 코드에서 누구나 확인할 수 있습니다.

Serverless에서는 API Key를 환경 변수에 저장할 수 있습니다.

```text
브라우저
   │
   │ API Key를 모름
   ▼
Serverless Function
   │
   │ 환경 변수에서 API Key 사용
   ▼
외부 API
```

환경 변수는 코드와 비밀값을 분리하는 방법입니다.

```text
코드
API를 어떻게 호출할 것인가

환경 변수
실제 API Key 값
```

---

## 13. Serverless Proxy와 CORS

브라우저가 외부 API를 직접 호출하면 CORS 정책의 영향을 받습니다.

```text
GitHub Pages JavaScript
        │
        ▼
외부 API
```

외부 API가 브라우저 Origin을 허용하지 않으면 JavaScript는 응답을 읽지 못할 수 있습니다.

Serverless Proxy를 사용하면 브라우저 대신 서버가 외부 API를 호출합니다.

```text
브라우저
   │
   ▼
Serverless Proxy
   │
   ▼
외부 API
```

Serverless Function은 브라우저가 아니므로 Proxy와 외부 API 사이에는 브라우저의 Same-Origin Policy가 적용되지 않습니다.

Serverless Proxy는 다음 두 문제를 함께 해결하는 데 유용합니다.

- API Key 노출
- 브라우저의 CORS 제한

---

## 14. Proxy를 쓰면 CORS를 완전히 잊어도 될까?

아닙니다.

다음 두 구간을 분리해야 합니다.

```text
브라우저 ↔ Serverless Proxy
CORS 고려 필요

Serverless Proxy ↔ 외부 API
브라우저 CORS 정책 적용 안 됨
```

GitHub Pages와 Serverless Proxy가 서로 다른 Origin이라면 Proxy가 적절한 CORS Header를 보내야 할 수 있습니다.

예:

```http
Access-Control-Allow-Origin: https://example.github.io
```

즉, Proxy는 외부 API의 CORS 문제를 우회할 수 있지만, 자신과 브라우저 사이의 CORS 설정은 여전히 책임져야 합니다.

---

## 15. Serverless에는 DB가 반드시 필요한가?

아닙니다.

Serverless와 데이터베이스는 별개의 선택입니다.

```text
GitHub Pages + Serverless + 외부 API
```

만으로도 DB 없는 서비스를 만들 수 있습니다.

DB가 필요한 경우:

- 사용자 계정 저장
- 즐겨찾기 저장
- 검색 기록 저장
- 댓글과 게시글
- 온라인 랭킹
- 사용자 설정
- 여러 사용자에게 공유되는 상태
- 통계 누적

단순 조회형 공공데이터 서비스라면 DB 없이 시작할 수 있습니다.

---

## 16. Stateless와 Serverless

Serverless Function은 요청을 처리한 뒤 실행 환경이 종료될 수 있습니다.

```text
요청 1
   ↓
함수 실행
   ↓
응답
   ↓
실행 환경 종료 가능
```

다음 요청에서는 다른 실행 환경이 사용될 수도 있습니다.

```text
요청 2
   ↓
새 실행 환경 또는 재사용된 환경
```

따라서 메모리에 데이터를 계속 보관하는 방식에 의존하면 안 됩니다.

영구적으로 보관해야 하는 데이터는 외부 저장소에 넣어야 합니다.

- 데이터베이스
- Object Storage
- Key-Value Storage
- 외부 API
- Queue
- Cache Service

---

## 17. Cold Start란?

Serverless Function이 오랫동안 사용되지 않았다면 플랫폼이 실행 환경을 새로 준비해야 할 수 있습니다.

```text
첫 요청
   ↓
실행 환경 준비
   ↓
함수 실행
   ↓
응답
```

이 첫 실행 지연을 Cold Start라고 합니다.

이후 요청은 이미 준비된 환경을 재사용하여 더 빠를 수 있습니다.

모든 Serverless 서비스에서 같은 정도로 발생하는 것은 아니지만, 성능을 판단할 때 알아둘 개념입니다.

---

## 18. 비용은 어떻게 계산될까?

전통적인 서버는 사용하지 않는 시간에도 계속 실행될 수 있습니다.

Serverless는 일반적으로 다음 항목을 기준으로 비용을 계산합니다.

- 요청 횟수
- 실행 시간
- 사용한 메모리
- 전송한 데이터
- 연결한 저장소나 부가 서비스

작은 프로젝트와 실험 단계에서는 무료 범위로 시작할 수 있는 서비스가 많습니다.

하지만 요청량이 매우 많거나 함수 실행 시간이 길면 비용이 증가할 수 있습니다.

무료라고 가정하지 말고 현재 요금과 제한을 확인해야 합니다.

---

## 19. 대표적인 Serverless 서비스

대표적인 선택지는 다음과 같습니다.

- Cloudflare Workers
- Vercel Functions
- Netlify Functions
- AWS Lambda
- Google Cloud Functions
- Azure Functions

서비스마다 다음 조건이 다릅니다.

- 지원 언어
- 실행 시간 제한
- 메모리 제한
- 무료 사용량
- 배포 방식
- 환경 변수 지원
- DB와 저장소 연동
- Edge 실행 여부
- 지역 선택
- 예약 실행
- WebSocket 지원

따라서 특정 서비스를 선택하기 전 현재 공식 문서를 확인해야 합니다.

---

## 20. 새 기능이 필요하면 무엇부터 확인해야 할까?

새로운 기능이 생겼다고 바로 일반 서버를 추가할 필요는 없습니다.

먼저 다음 순서로 판단할 수 있습니다.

```text
새 기능 요구
   ↓
브라우저만으로 가능한가?
   │
   ├── 가능 → GitHub Pages JavaScript로 구현
   │
   └── 불가능
         ↓
Serverless Function으로 가능한가?
   │
   ├── 가능 → 제한·비용·보안 확인 후 구성
   │
   └── 부적합
         ↓
DB, Queue, Storage 또는 일반 서버 검토
```

핵심 질문은 두 가지입니다.

```text
이 기능을 Serverless 플랫폼이 지원하는가?

그리고 이 기능이 Serverless 방식에 적합한가?
```

지원 가능 여부와 적합성은 서로 다른 문제입니다.

---

## 21. Serverless와 잘 맞는 기능

다음 기능은 일반적으로 Serverless와 잘 맞습니다.

- API Key를 숨긴 외부 API 호출
- CORS 중계
- 짧은 요청값 검증
- JSON 응답 가공
- 간단한 로그인 연동
- 이메일 전송
- 결제 API 연동
- Webhook 처리
- 이미지 메타데이터 처리
- 짧게 실행되는 데이터 변환
- 예약된 간단한 작업
- 폼 제출 처리
- 온라인 랭킹 등록 API

공통 특징:

```text
요청이 들어왔을 때 실행
짧은 시간 안에 처리
외부 저장소와 연동 가능
항상 실행 중일 필요 없음
```

---

## 22. Serverless에 주의가 필요한 기능

다음 기능은 서비스 제한을 자세히 확인해야 합니다.

- 장시간 실행되는 영상 변환
- 계속 실행되어야 하는 프로그램
- 지속적인 WebSocket 연결
- 매우 빈번한 실시간 처리
- 서버 로컬 파일에 영구 저장
- 메모리에 상태를 계속 유지
- 대용량 파일 처리
- 고정 IP가 반드시 필요한 통신
- 특수한 운영체제 기능
- 장시간 실행되는 게임 서버
- 초저지연 연결이 필요한 서비스

공통 문제:

```text
실행 시간 제한
메모리 제한
연결 유지 제한
임시 파일 시스템
비용 증가
플랫폼 종속
```

일부 Serverless 플랫폼은 이러한 기능을 지원하기도 하지만, 지원한다고 해서 항상 가장 적합한 선택이라는 뜻은 아닙니다.

---

## 23. 기능 검토 체크리스트

새 기능을 Serverless로 구성하기 전에 다음을 확인하면 좋습니다.

### 실행

```text
- 최대 실행 시간은 충분한가?
- 필요한 메모리를 지원하는가?
- 동시에 많은 요청을 처리할 수 있는가?
- Cold Start가 사용자 경험에 문제가 되는가?
```

### 네트워크

```text
- 외부 API 호출이 가능한가?
- 고정 IP가 필요한가?
- WebSocket이나 Streaming을 지원하는가?
- 요청·응답 크기 제한은 충분한가?
```

### 보안

```text
- 환경 변수를 지원하는가?
- API Key와 비밀값을 안전하게 저장할 수 있는가?
- 허용 Origin을 제한할 수 있는가?
- 인증과 권한 검사를 구현할 수 있는가?
```

### 데이터

```text
- DB 연결이 가능한가?
- Object Storage를 사용할 수 있는가?
- 로컬 파일이 임시라는 점이 문제가 없는가?
- 영구 상태를 외부 저장소로 분리할 수 있는가?
```

### 운영

```text
- 로그를 확인할 수 있는가?
- 오류 추적이 가능한가?
- 예약 실행을 지원하는가?
- 배포와 롤백이 쉬운가?
- 무료 범위와 실제 비용은 적절한가?
```

---

## 24. Browser, Serverless, DB, 일반 서버의 역할 판단

기능을 어디에 둘지 다음처럼 판단할 수 있습니다.

### 브라우저에 적합

```text
화면 표시
사용자 입력
간단한 계산
DOM 조작
공개된 정적 데이터 처리
```

### Serverless에 적합

```text
비밀값 사용
외부 API 중계
짧은 서버 로직
요청 검증
응답 가공
```

### DB가 필요한 경우

```text
영구 저장
사용자별 상태
공유되는 데이터
검색 기록
즐겨찾기
랭킹
```

### 일반 서버가 필요한 경우

```text
항상 실행되는 프로세스
긴 작업
지속 연결
복잡한 백그라운드 처리
특수한 시스템 제어
```

이 구분은 절대적인 법칙이 아니라 초기 설계를 위한 판단 기준입니다.

---

## 25. 공공데이터 기반 서비스에 적용하기

공공데이터 조회 서비스는 다음처럼 구성할 수 있습니다.

```text
사용자
   │
   ▼
GitHub Pages
   │
   │ 검색 조건
   ▼
Serverless Function
   │
   │ 환경 변수의 인증키 사용
   ▼
공공데이터 API
   │
   │ JSON 또는 XML
   ▼
Serverless Function
   │
   │ 필요한 데이터만 정리
   ▼
GitHub Pages 화면
```

이 구조에서는 다음이 가능합니다.

- DB 없이 배포
- API Key 보호
- CORS 문제 완화
- 외부 API 응답 가공
- 오류 형식 통일
- GitHub Pages 유지

초기에는 작은 구조로 시작하고, 필요할 때만 DB나 다른 서비스를 추가할 수 있습니다.

---

## 26. 프로젝트 연결

### Potato's Day

현재는 정적 GitHub Pages만으로 충분합니다.

다음 기능이 생기면 Serverless를 검토할 수 있습니다.

- 온라인 메시지
- 랭킹
- 사용자별 저장
- 외부 AI API
- 이메일 전송

하지만 실시간 멀티플레이 서버처럼 항상 실행되는 기능은 일반 Serverless Function만으로 적합하지 않을 수 있습니다.

### Living Aegis Origin

다음 기능에 사용할 수 있습니다.

- 점수 등록
- 온라인 랭킹
- 플레이 기록 저장
- 사용자 인증
- 게임 설정 동기화

지속적인 실시간 게임 세션이나 전용 매치 서버가 필요하다면 별도 서버 구조를 검토해야 합니다.

### 공공데이터 기반 서비스

가장 직접적인 사용 사례입니다.

- 공공데이터 API 호출
- 인증키 보호
- CORS 대응
- 응답 형식 정리
- 요청 횟수 제한
- 간단한 캐시

---

## 27. 잠깐 더 알아보기: Edge Function

일반적인 서버는 특정 지역의 데이터센터에서 실행됩니다.

Edge Function은 사용자와 가까운 여러 지역에서 함수를 실행하려는 방식입니다.

```text
한국 사용자
   ↓
가까운 아시아 지역 실행 환경

유럽 사용자
   ↓
가까운 유럽 지역 실행 환경
```

네트워크 이동 거리를 줄여 응답 속도를 개선할 수 있습니다.

Cloudflare Workers 같은 서비스가 대표적인 예입니다.

다만 모든 Edge 환경이 일반적인 서버 기능을 똑같이 지원하는 것은 아닙니다.

---

## 28. 잠깐 더 알아보기: Backend as a Service

Serverless Function 외에도 외부 서비스가 서버 기능을 제공하는 방식이 있습니다.

예:

- 인증
- 데이터베이스
- 파일 저장
- 실시간 데이터
- 알림

이런 형태를 Backend as a Service, 줄여서 BaaS라고 부르기도 합니다.

```text
Serverless Function
내가 서버 로직을 함수로 작성

BaaS
이미 준비된 인증·DB·저장 기능을 API로 사용
```

작은 프로젝트에서는 두 방식을 함께 사용할 수 있습니다.

```text
GitHub Pages
+
Serverless Function
+
외부 Database/BaaS
```

---

## 29. 자주 하는 오해

### “Serverless에는 서버가 없다.”

아닙니다.

서버는 존재하지만 외부 플랫폼이 관리합니다.

### “Serverless는 내 전용 서버 한 대를 할당받는 것이다.”

보통은 아닙니다.

요청이 들어올 때 함수가 실행되는 환경과 URL을 제공받는 방식에 가깝습니다.

### “Serverless Function과 Proxy는 같은 뜻이다.”

아닙니다.

Function은 실행 방식이고 Proxy는 함수가 맡을 수 있는 중계 역할입니다.

### “Serverless를 사용하면 DB도 자동으로 생긴다.”

아닙니다.

데이터베이스는 필요할 때 별도로 선택합니다.

### “Serverless를 사용하면 CORS를 생각하지 않아도 된다.”

아닙니다.

브라우저와 Serverless Function 사이의 CORS 설정은 여전히 필요할 수 있습니다.

### “GitHub Pages에서 Serverless 코드를 직접 실행한다.”

아닙니다.

Serverless Function은 별도 플랫폼에서 실행되고 브라우저가 네트워크로 호출합니다.

### “플랫폼에서 지원하면 무조건 Serverless로 만드는 것이 좋다.”

아닙니다.

지원 가능 여부뿐 아니라 실행 시간, 상태 유지, 지속 연결, 비용 등 Serverless 적합성을 함께 판단해야 합니다.

### “무료 범위가 있으니 비용을 확인할 필요가 없다.”

아닙니다.

무료 범위와 제한은 서비스마다 다르고 변경될 수 있으므로 실제 배포 전 확인해야 합니다.

---

## 30. 핵심 요약

- Serverless는 서버가 없는 구조가 아니다.
- 서버 운영을 외부 클라우드 플랫폼에 맡기는 방식이다.
- 보통 서비스에 가입하고 함수 코드와 환경 변수를 배포한 뒤 URL을 제공받는다.
- 전용 서버 한 대보다 요청 시 실행되는 서버 기능을 빌리는 방식에 가깝다.
- Serverless Function은 요청이 들어오면 실행되는 작은 서버 프로그램이다.
- Serverless Proxy는 외부 API 요청을 대신 수행하는 Function의 역할이다.
- GitHub Pages와 Serverless를 함께 사용할 수 있다.
- Serverless Proxy는 API Key 보호와 CORS 문제 해결에 유용하다.
- Serverless와 DB는 별개의 선택이다.
- 요청 사이에 메모리 상태가 유지된다고 가정하면 안 된다.
- 새 기능은 플랫폼 지원 여부와 Serverless 적합성을 함께 판단해야 한다.
- Serverless에 맞지 않는 기능이 생기면 DB, Storage, Queue 또는 일반 서버를 추가한다.
- Cold Start, 실행 제한, 비용, 플랫폼 종속성을 고려해야 한다.

---

## 31. 생각해 보기

1. Serverless에 서버가 실제로 있는데도 Serverless라고 부르는 이유는 무엇일까?
2. Serverless 서비스 가입은 가상 서버 한 대를 빌리는 것과 어떻게 다를까?
3. Serverless Function과 Serverless Proxy는 어떤 관계인가?
4. GitHub Pages의 JavaScript에 API Key를 넣으면 왜 숨길 수 없을까?
5. Proxy와 외부 API 사이에는 왜 브라우저의 CORS 정책이 적용되지 않을까?
6. Serverless를 사용해도 브라우저와 Proxy 사이에 CORS 설정이 필요할 수 있는 이유는 무엇일까?
7. 조회 전용 공공데이터 서비스에 DB가 없어도 되는 이유는 무엇일까?
8. Serverless Function의 메모리에 사용자 정보를 계속 저장하면 왜 위험할까?
9. 플랫폼이 기능을 지원하더라도 Serverless에 적합하지 않을 수 있는 사례는 무엇일까?
10. 새로운 기능을 브라우저, Serverless, DB, 일반 서버 중 어디에 둘지 어떤 기준으로 판단할 수 있을까?

---

## 32. 다음 문서

**WEB-011. GitHub Pages 서비스는 어떻게 설계할까?**

다음 문서에서는 지금까지 배운 기술을 하나의 실제 서비스 구조로 조합합니다.

```text
GitHub Pages
+
JavaScript
+
REST API
+
CORS
+
Serverless Proxy
+
Optional Database
```

다음 질문에 대한 전체 설계 기준을 정리합니다.

> 공공데이터포털을 이용한 서비스를 DB 없이 GitHub Pages로 만들 수 있을까?

---

# 변경 이력

## 2026-07-11

- 초판 작성
- 전통적인 서버 운영과 Serverless 비교
- Serverless Function과 FaaS 설명
- GitHub Pages 연동 구조 추가
- API Key와 환경 변수 설명
- Serverless Proxy와 CORS 관계 설명
- DB 없는 공공데이터 서비스 구조 추가
- Stateless, Cold Start, 비용, Edge Function 개요 추가

## 2026-07-14

- Serverless가 외부 클라우드 서비스를 이용하는 구조라는 설명 추가
- 전용 서버 할당과 함수 실행 환경 제공의 차이 보강
- 가입, 프로젝트 생성, 배포, URL 발급의 실제 사용 흐름 추가
- Serverless Function과 Serverless Proxy의 개념 구분 추가
- Proxy의 중계·가공·검증 역할 보강
- 브라우저, Proxy, 외부 API 사이의 CORS 관계 명확화
- 새 기능 검토 시 플랫폼 지원 여부와 Serverless 적합성을 함께 판단하도록 보강
- Serverless에 잘 맞는 기능과 주의가 필요한 기능 구분 추가
- 실행, 네트워크, 보안, 데이터, 운영 체크리스트 추가
- Browser, Serverless, DB, 일반 서버의 역할 판단 기준 추가
- Backend as a Service 개요 추가
- 관련 오해와 생각해 보기 항목 보강
