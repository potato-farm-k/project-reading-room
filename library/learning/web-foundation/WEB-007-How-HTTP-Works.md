---
title: WEB-007. How HTTP Works
category: learning
source_repo: project-reading-room
source_path: library/learning/web-foundation/WEB-007-How-HTTP-Works.md
copy_type: source
last_reviewed: 2026-07-14
print_friendly: true
---

# WEB-007. HTTP는 컴퓨터끼리 어떻게 대화하는가?

## 부제: 요청과 응답, 그리고 데이터를 전달하기 위한 여러 변환

> 웹은 Request와 Response를 반복하며 동작합니다.
> HTTP는 브라우저와 서버가 요청과 응답을 주고받기 위한 공통 규칙입니다.

---

## 1. 학습 목표

이 문서를 읽고 나면 다음 질문에 답할 수 있어야 합니다.

- HTTP는 왜 필요한가?
- Request와 Response는 무엇인가?
- Header와 Body는 어떤 역할을 하는가?
- HTTP는 텍스트와 이미지를 어떻게 전달하는가?
- UTF-8 인코딩은 무엇을 무엇으로 바꾸는가?
- Base64는 왜 바이너리를 문자열로 바꾸는가?
- JSON 직렬화와 UTF-8 인코딩은 어떻게 다른가?
- 웹페이지 하나를 열 때 왜 여러 요청이 발생하는가?

---

## 2. 왜 HTTP가 필요했을까?

브라우저와 서버는 서로 다른 회사와 개발자가 만들 수 있습니다.

각자 원하는 방식으로 통신한다면 브라우저마다 서버를 따로 만들어야 하고, 서버마다 전용 브라우저가 필요해집니다.

그래서 모두가 함께 사용할 수 있는 공통 규칙이 필요했습니다.

그 규칙이 HTTP입니다.

```text
브라우저
   │
   │ Request
   ▼
서버
   │
   │ Response
   ▼
브라우저
```

HTTP는 특정 파일 형식이 아니라, 요청과 응답을 주고받는 방법을 정한 프로토콜입니다.

---

## 3. Request와 Response

### Request

브라우저나 프로그램이 서버에 보내는 요청입니다.

예:

```text
GET /index.html
Host: example.com
```

뜻은 대략 다음과 같습니다.

```text
example.com 서버의
/index.html 파일을 보내 주세요.
```

### Response

서버가 요청에 대해 보내는 응답입니다.

예:

```text
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
```

그 뒤에 실제 HTML 데이터가 따라옵니다.

웹은 이 요청과 응답을 매우 빠르게 반복하는 시스템입니다.

---

## 4. HTTP 메시지의 구조

HTTP 메시지는 크게 Header와 Body로 나눌 수 있습니다.

```text
HTTP Message

├── Header
└── Body
```

### Header

Body에 담긴 데이터와 통신 조건을 설명합니다.

예:

- 어떤 형식의 데이터인가?
- 문자 인코딩은 무엇인가?
- 얼마나 큰가?
- 캐시해도 되는가?
- 압축되어 있는가?

### Body

실제로 전달할 내용입니다.

예:

- HTML
- CSS
- JavaScript
- JSON
- 이미지
- 음원
- 동영상
- PDF

모든 HTTP 메시지가 반드시 Body를 가지는 것은 아닙니다.

---

## 5. HTTP는 실제로 무엇을 운반할까?

가장 중요한 관점은 다음과 같습니다.

> HTTP는 본질적으로 바이트의 묶음을 전달합니다.

텍스트도 네트워크를 통과할 때는 바이트로 변환됩니다.

```text
"안녕하세요"
    ↓
UTF-8 인코딩
    ↓
바이트
    ↓
HTTP로 전송
```

이미지, 동영상, PDF도 마찬가지로 바이트의 묶음입니다.

```text
HTTP가 전달하는 것
        ↓
      바이트
        ↓
Header의 설명에 따라 해석
```

텍스트와 이미지는 전송 단계에서 완전히 다른 물질이 아닙니다.

둘 다 바이트이며, 수신 측이 그 바이트를 어떤 규칙으로 해석하느냐가 다릅니다.

---

## 6. 텍스트와 바이너리는 어떻게 다른가?

물리적으로는 둘 다 바이트입니다.

```text
텍스트 파일  → 바이트
PNG 이미지   → 바이트
MP3 음원     → 바이트
PDF 파일     → 바이트
```

차이는 해석 규칙입니다.

### 텍스트 데이터

문자 인코딩 규칙을 사용해 글자로 해석할 수 있는 바이트입니다.

### 바이너리 데이터

이미지·음원·실행 파일처럼 해당 파일 형식의 규칙으로 해석하는 바이트입니다.

PNG 파일을 텍스트 편집기로 열었을 때 깨진 글자가 보일 수 있습니다.

```text
PNG 바이트
   ↓ 텍스트라고 잘못 해석
�PNG...IHDR...
```

PNG가 텍스트로 변한 것이 아닙니다.

텍스트 편집기가 이미지 바이트를 문자처럼 잘못 해석한 것입니다.

---

## 7. Unicode와 UTF-8

문자는 컴퓨터에 글자 모양 그대로 저장되지 않습니다.

먼저 문자에 번호를 대응시키고, 그 번호를 바이트로 저장합니다.

```text
문자
 ↓
문자 번호
 ↓
바이트
```

### Unicode

Unicode는 세계의 여러 문자에 번호를 부여하는 표준입니다.

예:

```text
A  → U+0041
가 → U+AC00
```

Unicode는 문자 목록과 문자 번호 체계에 가깝습니다.

### UTF-8

UTF-8은 Unicode 문자 번호를 실제 바이트로 표현하는 대표적인 방식입니다.

```text
문자 "가"
   ↓ Unicode 문자 번호
U+AC00
   ↓ UTF-8 인코딩
EA B0 80
```

따라서 다음처럼 구분할 수 있습니다.

```text
Unicode
문자에 어떤 번호를 부여할 것인가

UTF-8
그 번호를 어떤 바이트로 저장할 것인가
```

---

## 8. UTF-8 인코딩과 디코딩

UTF-8 인코딩은 다음 방향의 변환입니다.

```text
문자열 → 바이트
```

예:

```text
"안녕하세요"
       ↓ UTF-8 인코딩
바이트들의 배열
```

반대 과정은 UTF-8 디코딩입니다.

```text
UTF-8 바이트
       ↓ UTF-8 디코딩
"안녕하세요"
```

전체 과정:

```text
문자열 ── 인코딩 ──▶ 바이트
문자열 ◀─ 디코딩 ─── 바이트
```

보내는 쪽이 UTF-8로 인코딩했다면, 받는 쪽도 UTF-8로 디코딩해야 합니다.

다른 규칙으로 읽으면 글자가 깨질 수 있습니다.

---

## 9. ASCII와 UTF-8

ASCII는 기본적인 영문자, 숫자, 기호를 표현하는 오래된 문자 코드 체계입니다.

```text
A-Z
a-z
0-9
! @ # $
공백과 줄바꿈
```

ASCII만으로는 한글이나 대부분의 세계 문자를 표현할 수 없습니다.

UTF-8은 ASCII와 호환되도록 설계되었습니다.

영문자 `A`는 ASCII와 UTF-8에서 같은 바이트 값을 사용합니다.

```text
A → 65 → 0x41
```

간단히 정리하면:

```text
ASCII
영어 중심의 작은 문자 체계

Unicode
세계 여러 문자를 포함하는 큰 문자 체계

UTF-8
Unicode 문자를 바이트로 저장하는 대표적인 방식
```

---

## 10. Content-Type은 왜 필요할까?

HTTP Body에는 결국 바이트가 들어 있습니다.

서버는 `Content-Type` Header를 통해 그 바이트를 어떤 형식으로 해석해야 하는지 알려줍니다.

| 데이터 종류 | Content-Type 예 |
|---|---|
| HTML | `text/html; charset=utf-8` |
| CSS | `text/css` |
| JavaScript | `text/javascript` 또는 `application/javascript` |
| JSON | `application/json` |
| PNG 이미지 | `image/png` |
| JPEG 이미지 | `image/jpeg` |
| PDF | `application/pdf` |
| 일반 바이너리 | `application/octet-stream` |

JSON 응답:

```text
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"name":"Gamja"}
```

PNG 이미지 응답:

```text
HTTP/1.1 200 OK
Content-Type: image/png

[PNG 바이너리 데이터]
```

브라우저는 Header를 읽고 Body의 바이트를 HTML, JSON, 이미지 또는 다른 데이터로 해석합니다.

---

## 11. JSON은 무엇인가?

JSON은 다음의 약자입니다.

```text
JavaScript Object Notation
```

JavaScript 객체 표기법에서 출발했지만, 지금은 특정 언어에 종속되지 않는 표준 데이터 교환 형식으로 사용됩니다.

예:

```json
{
  "name": "Gamja",
  "age": 5,
  "isHappy": true
}
```

JSON이 표현할 수 있는 기본 값은 다음과 같습니다.

- 문자열
- 숫자
- 참과 거짓
- `null`
- 배열
- 객체

Python, Java, C#, Go 등 거의 모든 주요 언어가 JSON을 읽고 쓸 수 있습니다.

---

## 12. JSON은 ASCII 텍스트인가?

JSON은 텍스트 형식이지만 ASCII로만 제한되지는 않습니다.

한글, 일본어, 이모지 같은 Unicode 문자를 사용할 수 있습니다.

```json
{
  "message": "안녕하세요",
  "emoji": "🐶"
}
```

웹에서는 일반적으로 UTF-8로 인코딩하여 전송합니다.

```text
JSON 문자열
   ↓ UTF-8 인코딩
바이트
   ↓
HTTP Body
```

여기서 중요한 점은 JSON과 UTF-8이 서로 다른 단계라는 것입니다.

```text
JSON
데이터 구조를 텍스트로 표현하는 형식

UTF-8
그 텍스트를 바이트로 만드는 인코딩 방식
```

---

## 13. JSON 직렬화란 무엇인가?

서버 프로그램 안의 객체는 해당 프로그래밍 언어 내부에서만 의미가 있습니다.

예를 들어 Java 서버 안에 다음 객체가 있다고 하겠습니다.

```text
Book 객체

id       → 1
title    → "어린 왕자"
author   → "생텍쥐페리"
```

브라우저는 Java의 `Book` 객체를 직접 이해할 수 없습니다.

그래서 다른 프로그램도 이해할 수 있는 JSON 텍스트로 바꿉니다.

```json
{
  "id": 1,
  "title": "어린 왕자",
  "author": "생텍쥐페리"
}
```

이 변환을 JSON 직렬화라고 합니다.

```text
프로그램 내부 객체
        ↓ JSON 직렬화
JSON 문자열
```

쉽게 말하면:

> 직렬화는 프로그램 안의 객체를 외부로 보내거나 저장할 수 있도록 포장하는 작업입니다.

---

## 14. JSON 파싱과 역직렬화

브라우저가 JSON 문자열을 받으면 JavaScript 객체로 다시 만들 수 있습니다.

```javascript
const jsonText = `
{
  "id": 1,
  "title": "어린 왕자"
}
`;

const book = JSON.parse(jsonText);
```

개념적 흐름:

```text
JSON 문자열
     ↓ JSON 파싱 또는 역직렬화
JavaScript 객체
```

서버와 브라우저의 객체는 같은 객체가 아닙니다.

JSON이라는 공통 형식을 통해 같은 정보를 각 프로그램 언어의 객체로 재구성한 것입니다.

---

## 15. 직렬화와 인코딩은 어떻게 다른가?

둘은 바꾸는 대상이 다릅니다.

```text
프로그램 객체
      ↓ JSON 직렬화
JSON 문자열
      ↓ UTF-8 인코딩
바이트
      ↓ HTTP 전송
```

받는 쪽에서는 반대로 처리합니다.

```text
HTTP 바이트
      ↓ UTF-8 디코딩
JSON 문자열
      ↓ JSON 파싱·역직렬화
프로그램 객체
```

| 단계 | 변환 |
|---|---|
| JSON 직렬화 | 객체 → JSON 문자열 |
| UTF-8 인코딩 | 문자열 → 바이트 |
| UTF-8 디코딩 | 바이트 → 문자열 |
| JSON 파싱·역직렬화 | JSON 문자열 → 객체 |

따라서 JSON 직렬화는 텍스트를 바이트로 바꾸는 작업이 아닙니다.

객체의 구조를 JSON 텍스트 형식으로 옮기는 작업입니다.

---

## 16. Base64는 무엇인가?

Base64는 UTF-8과 출발점과 목적이 다릅니다.

UTF-8:

```text
문자열 → 바이트
```

Base64:

```text
임의의 바이트 → ASCII 문자로 이루어진 문자열
```

예를 들어 PNG 이미지의 바이트가 있다고 하겠습니다.

```text
PNG 바이너리 바이트
89 50 4E 47 ...
```

이를 Base64로 인코딩하면 다음처럼 보입니다.

```text
iVBORw0KGgoAAAANSUhEUgAA...
```

정확히는 바이너리 바이트를 제한된 ASCII 문자만으로 표현하는 **Binary-to-Text Encoding**입니다.

---

## 17. Base64는 이미지의 의미를 번역하는가?

아닙니다.

다음과 같은 변환이 아닙니다.

```text
PNG 이미지
   ↓ Base64
"강아지가 웃고 있는 이미지"
```

실제 과정은 다음과 같습니다.

```text
PNG 바이트
   ↓ Base64 규칙으로 재표현
ASCII 문자로 이루어진 문자열
```

Base64 문자열을 다시 디코딩하면 원래 PNG 바이트로 돌아갑니다.

```text
PNG 바이트
   ── Base64 인코딩 ──▶ Base64 문자열

PNG 바이트
   ◀─ Base64 디코딩 ─── Base64 문자열
```

---

## 18. 왜 바이너리를 Base64 문자열로 바꿀까?

어떤 데이터 형식이나 시스템은 텍스트만 안전하게 다룰 수 있기 때문입니다.

JSON은 문자열은 표현할 수 있지만 이미지 바이트를 직접 값으로 넣지는 못합니다.

```json
{
  "name": "Gamja",
  "image": "iVBORw0KGgoAAAANSUhEUgAA..."
}
```

여기서 `image` 값은 PNG 파일 자체가 아닙니다.

PNG 바이트를 Base64 문자열로 표현한 것입니다.

과거의 이메일 시스템처럼 텍스트 전달을 전제로 만들어진 환경에서도 파일을 Base64로 바꾸어 전송했습니다.

---

## 19. Base64의 단점

Base64로 바꾸면 데이터가 보통 원본보다 약 33% 커집니다.

대략적으로:

```text
원본 바이너리 3바이트
        ↓
Base64 문자 4개
```

그래서 큰 이미지나 동영상을 JSON 안에 Base64로 넣는 것은 대체로 비효율적입니다.

보통은 이미지 URL을 전달하는 방식이 더 좋습니다.

```json
{
  "name": "Gamja",
  "imageUrl": "/images/gamja.png"
}
```

브라우저는 이미지 URL로 별도의 HTTP 요청을 보냅니다.

---

## 20. UTF-8과 Base64 비교

| 구분 | UTF-8 | Base64 |
|---|---|---|
| 출발 데이터 | 문자·문자열 | 임의의 바이트 |
| 결과 | 바이트 | ASCII 문자로 된 문자열 |
| 주목적 | 문자를 저장·전송 | 바이너리를 텍스트 환경에서 표현 |
| 역과정 | UTF-8 디코딩 | Base64 디코딩 |
| 예 | `"가"` → `EA B0 80` | PNG 바이트 → `iVBOR...` |
| 데이터 크기 | 문자에 따라 다름 | 원본보다 약 33% 증가 |

방향이 다르다는 점이 핵심입니다.

```text
UTF-8
문자열 ─────────▶ 바이트

Base64
바이트 ─────────▶ 문자열
```

---

## 21. 이미지가 JSON 안에 들어갈 때의 전체 변환

PNG 이미지를 JSON 안에 Base64로 넣는다면 여러 단계가 연속으로 일어납니다.

```text
PNG 파일
   ↓ 파일 바이트 읽기
바이너리 바이트
   ↓ Base64 인코딩
Base64 문자열
   ↓ JSON 직렬화
JSON 문자열
   ↓ UTF-8 인코딩
HTTP Body의 바이트
```

받을 때는 반대입니다.

```text
HTTP Body 바이트
   ↓ UTF-8 디코딩
JSON 문자열
   ↓ JSON 파싱
Base64 문자열
   ↓ Base64 디코딩
PNG 바이트
   ↓ PNG 형식으로 해석
이미지 표시
```

한 번의 통신 안에서 여러 종류의 변환이 연속해서 일어날 수 있기 때문에 처음에는 모두 비슷하게 느껴질 수 있습니다.

---

## 22. HTML과 이미지는 한꺼번에 오는가?

보통은 각각 별도의 HTTP 요청과 응답으로 전달됩니다.

브라우저가 먼저 HTML을 요청합니다.

```text
GET /index.html
```

HTML을 읽다가 다음 코드를 발견합니다.

```html
<img src="/images/gamja.png">
```

그러면 브라우저는 이미지 파일을 다시 요청합니다.

```text
GET /images/gamja.png
```

CSS와 JavaScript도 같은 방식입니다.

```html
<link rel="stylesheet" href="/styles.css">
<script src="/app.js"></script>
```

웹페이지 하나를 열어도 실제로는 여러 요청이 발생합니다.

```text
브라우저
   ├── index.html 요청
   ├── styles.css 요청
   ├── app.js 요청
   ├── gamja.png 요청
   └── sound.mp3 요청
```

개발자 도구의 Network 탭에서는 이 요청들을 직접 확인할 수 있습니다.

---

## 23. 텍스트와 이미지를 한 요청에 같이 보낼 수도 있을까?

가능합니다.

파일 업로드에서는 주로 `multipart/form-data`를 사용합니다.

예를 들어 프로필 이름과 이미지를 함께 보내는 경우입니다.

```text
Content-Type: multipart/form-data
```

Body는 여러 부분으로 나뉩니다.

```text
Part 1
name = "Gamja"

Part 2
profile-image = [PNG 바이너리]
```

각 부분은 Boundary라는 경계 표시로 구분됩니다.

즉, 하나의 HTTP Body 안에 텍스트와 바이너리를 함께 담되 여러 구역으로 나누어 전달하는 방식입니다.

---

## 24. Status Code

서버는 Status Code를 통해 요청 처리 결과를 알려줍니다.

대표적인 예:

- `200 OK` : 요청 성공
- `201 Created` : 새로운 데이터 생성 성공
- `301 Moved Permanently` : 주소가 영구적으로 변경됨
- `400 Bad Request` : 요청 형식이 잘못됨
- `401 Unauthorized` : 인증이 필요함
- `403 Forbidden` : 접근 권한이 없음
- `404 Not Found` : 요청한 대상을 찾을 수 없음
- `500 Internal Server Error` : 서버 내부 오류

Status Code는 사람뿐 아니라 프로그램도 결과를 빠르게 판단할 수 있도록 만든 약속입니다.

---

## 25. HTTP는 상태를 기억하지 않는다

HTTP는 기본적으로 Stateless한 프로토콜입니다.

즉, 각각의 요청은 독립적이며 서버는 기본적으로 이전 요청을 자동으로 기억하지 않습니다.

```text
첫 번째 요청
"저는 김기욱입니다."

두 번째 요청
"제 정보를 보여 주세요."

서버
"누구신가요?"
```

로그인 상태를 유지하기 위해 Cookie, Session, Token 같은 기술이 추가로 사용됩니다.

이 내용은 이후 별도의 문서에서 다시 다룹니다.

---

## 26. 프로젝트 연결

### Potato's Day

브라우저는 GitHub Pages에서 다음 파일을 HTTP로 각각 받아옵니다.

- HTML
- CSS
- JavaScript
- 캐릭터 이미지
- 사운드

이미지는 보통 HTML 안에 Base64로 넣기보다 별도 파일로 요청하는 편이 효율적입니다.

### Living Aegis Origin

Canvas에서 화면을 그리더라도 이미지와 음원 파일은 먼저 HTTP로 받아야 합니다.

설정 데이터를 JSON으로 제공한다면 객체 직렬화와 UTF-8 인코딩 과정이 사용될 수 있습니다.

### 공공데이터 기반 서비스

브라우저 또는 Serverless Proxy가 공공데이터 OpenAPI에 HTTP 요청을 보냅니다.

서버는 일반적으로 JSON이나 XML을 응답합니다.

이미지가 필요하면 JSON 안에는 이미지 자체보다 URL이 들어가는 경우가 많습니다.

---

## 27. 잠깐 더 알아보기

HTTP/1.1의 Header는 사람이 읽을 수 있는 텍스트 형태에 가깝습니다.

하지만 HTTP/2와 HTTP/3는 전송 효율을 높이기 위해 내부 표현과 전송 방식이 더 복잡해졌습니다.

그럼에도 개발자가 이해해야 할 핵심 개념은 같습니다.

```text
Request
   ↓
Header + Body
   ↓
Response
   ↓
Header + Body
```

또한 `인코딩`이라는 말은 하나의 특정 기술만 가리키지 않습니다.

앞으로 인코딩이라는 말을 만나면 다음 질문을 먼저 하면 좋습니다.

> 무엇을 무엇으로 바꾸는 인코딩인가?

예:

```text
UTF-8 인코딩
문자열 → 바이트

Base64 인코딩
바이트 → ASCII 문자열

URL 인코딩
URL에서 안전하게 사용할 수 있는 문자 형태로 변환

이미지 인코딩
픽셀 데이터 → PNG·JPEG 형식의 바이트
```

---

## 28. 자주 하는 오해

### “HTTP는 텍스트만 전달한다.”

아닙니다.

HTTP Body에는 이미지, 동영상, PDF 같은 바이너리 데이터도 담을 수 있습니다.

### “텍스트와 바이너리는 완전히 다른 물질이다.”

전송과 저장 단계에서는 둘 다 바이트입니다.

차이는 어떤 규칙으로 해석하느냐입니다.

### “HTML 안에 이미지가 들어 있다.”

대부분의 경우 HTML에는 이미지 주소만 있으며, 이미지는 별도의 HTTP 요청으로 받습니다.

### “JSON은 JavaScript에서만 사용한다.”

아닙니다.

JSON은 거의 모든 프로그래밍 언어에서 사용하는 독립적인 데이터 교환 형식입니다.

### “JSON 직렬화와 UTF-8 인코딩은 같은 작업이다.”

아닙니다.

JSON 직렬화는 객체를 JSON 문자열로 바꾸고, UTF-8 인코딩은 그 문자열을 바이트로 바꿉니다.

### “Base64는 이미지를 텍스트로 설명한다.”

아닙니다.

이미지 바이트를 ASCII 문자 조합으로 다시 표현할 뿐입니다.

### “JSON에 이미지를 그대로 넣을 수 있다.”

직접 넣을 수는 없습니다.

Base64 문자열로 변환하거나 이미지 URL을 전달해야 합니다.

---

## 29. 핵심 요약

- HTTP는 브라우저와 서버가 대화하는 규칙이다.
- 웹은 Request와 Response의 반복으로 동작한다.
- HTTP 메시지는 Header와 Body로 구성된다.
- HTTP는 본질적으로 바이트를 전달한다.
- 텍스트와 바이너리는 모두 바이트이며 해석 규칙이 다르다.
- Unicode는 문자 번호 체계이고 UTF-8은 문자를 바이트로 표현하는 방식이다.
- JSON 직렬화는 객체를 JSON 문자열로 바꾸는 작업이다.
- UTF-8 인코딩은 문자열을 바이트로 바꾸는 작업이다.
- Base64는 임의의 바이트를 ASCII 문자열로 표현하는 방식이다.
- `Content-Type`은 Body의 바이트를 어떻게 해석할지 알려준다.
- 이미지는 일반적으로 별도의 HTTP 요청으로 받아온다.
- 텍스트와 바이너리를 함께 보낼 때는 `multipart/form-data`를 사용할 수 있다.
- HTTP는 기본적으로 Stateless하다.

---

## 30. 생각해 보기

1. 브라우저는 PNG 파일을 받았다는 사실을 어떻게 알 수 있을까?
2. UTF-8과 Base64는 각각 무엇을 무엇으로 바꾸는가?
3. JSON 직렬화와 UTF-8 인코딩은 왜 서로 다른 단계일까?
4. 모든 이미지를 Base64로 JSON에 넣으면 어떤 문제가 생길까?
5. 웹페이지 하나를 열었는데 Network 탭에 요청이 수십 개 나타나는 이유는 무엇일까?
6. 공공데이터 API의 JSON 안에 이미지 대신 URL을 넣는 이유는 무엇일까?
7. HTTP가 모든 요청을 자동으로 기억한다면 어떤 장점과 문제가 생길까?

---

## 31. 다음 문서

**WEB-008. REST API는 왜 만들어졌는가?**

HTTP로 대화할 수 있게 된 뒤, 개발자들은 다음 문제를 만나게 됩니다.

```text
대화는 가능하지만,
서비스마다 요청 방식이 너무 다르다.
```

다음 문서에서는 HTTP를 더 일관되고 이해하기 쉽게 사용하는 REST API의 설계 배경을 살펴봅니다.

---

# 변경 이력

## 2026-07-11

- 초판 작성
- Request와 Response 중심으로 구성
- Header, Body, Status Code, Stateless 개요 추가
- HTTP가 바이트를 전달한다는 관점 보강
- `Content-Type`과 데이터 형식 예시 추가
- JSON의 표준 형식과 UTF-8 설명 추가
- JSON과 바이너리 데이터의 차이 추가
- Base64와 이미지 URL 방식 비교 추가
- HTML, CSS, JavaScript, 이미지의 개별 요청 과정 추가
- `multipart/form-data` 개요 추가

## 2026-07-14

- 텍스트와 바이너리가 모두 바이트라는 설명 보강
- Unicode, UTF-8, ASCII의 관계 추가
- UTF-8 인코딩과 디코딩 과정 보강
- JSON 직렬화와 역직렬화 설명 추가
- 직렬화와 문자 인코딩의 단계 구분 추가
- Base64의 목적과 Binary-to-Text Encoding 개념 보강
- 이미지가 JSON에 포함될 때의 전체 변환 과정 추가
- 인코딩이라는 용어를 구분하는 판단 기준 추가
- 관련 오해와 생각해 보기 항목 보강
