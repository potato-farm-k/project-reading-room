window.learningMap = [
  {
    id: "web-foundation",
    title: "Web Foundation Learning",
    description:
      "웹의 기본 원리부터 서비스 배포 구조까지, 서로 연결된 질문을 따라가며 이해하는 학습 트랙입니다.",
    parts: [
      {
        id: "part-1",
        title: "Part I — 웹의 원리와 서비스 구조",
        description:
          "브라우저가 문서를 읽는 과정에서 시작해 HTTP, API, 보안, 배포 아키텍처까지 하나의 흐름으로 연결합니다.",
        categories: [
          {
            id: "web-structure",
            title: "웹의 구조",
            description:
              "브라우저, 서버, URL, DNS와 HTTP가 하나의 웹페이지를 만드는 기본 구조를 이해합니다.",
            documents: [
              {
                slug: "web-001",
                documentId: "learning-web-foundation-web-001-how-the-web-works",
                title: "웹은 어떻게 동작하는가",
              },
              {
                slug: "web-002",
                documentId: "learning-web-foundation-web-002-what-is-a-browser",
                title: "브라우저는 무엇을 하는가",
              },
            ],
          },
          {
            id: "document-expression",
            title: "문서와 표현",
            description:
              "웹 문서의 구조와 표현을 분리한 HTML과 CSS의 역할과 탄생 배경을 이해합니다.",
            documents: [
              {
                slug: "web-003",
                documentId: "learning-web-foundation-web-003-what-is-html",
                title: "HTML은 왜 만들어졌는가",
              },
              {
                slug: "web-004",
                documentId: "learning-web-foundation-web-004-why-css",
                title: "CSS는 왜 HTML에서 분리되었는가",
              },
            ],
          },
          {
            id: "behavior-rendering",
            title: "동작과 렌더링",
            description:
              "JavaScript가 문서에 동작을 더하고 브라우저가 코드를 화면으로 조립하는 과정을 이해합니다.",
            documents: [
              {
                slug: "web-005",
                documentId: "learning-web-foundation-web-005-why-javascript",
                title: "JavaScript는 왜 웹을 프로그램으로 만들었는가",
              },
              {
                slug: "web-006",
                documentId: "learning-web-foundation-web-006-how-browser-builds-a-page",
                title: "브라우저는 문서를 어떻게 객체로 바꾸는가",
              },
            ],
          },
          {
            id: "communication-api",
            title: "통신과 API",
            description:
              "HTTP 대화 규칙에서 REST API와 브라우저의 CORS 보안 경계까지 연결해 이해합니다.",
            documents: [
              {
                slug: "web-007",
                documentId: "learning-web-foundation-web-007-how-http-works",
                title: "HTTP는 컴퓨터끼리 어떻게 대화하는가",
              },
              {
                slug: "web-008",
                documentId: "learning-web-foundation-web-008-why-rest-api",
                title: "REST API는 왜 만들어졌는가",
              },
              {
                slug: "web-009",
                documentId: "learning-web-foundation-web-009-why-cors",
                title: "CORS는 왜 브라우저를 제한하는가",
              },
            ],
          },
          {
            id: "deployment-architecture",
            title: "배포와 서비스 아키텍처",
            description:
              "정적 사이트가 서버 기능과 만나는 방식과 GitHub Pages 서비스의 전체 구조를 이해합니다.",
            documents: [
              {
                slug: "web-010",
                documentId: "learning-web-foundation-web-010-why-serverless",
                title: "Serverless는 왜 서버가 없는 서버라고 불릴까",
              },
              {
                slug: "web-011",
                documentId: "learning-web-foundation-web-011-github-pages-architecture",
                title: "GitHub Pages 서비스는 어떻게 설계할까",
              },
            ],
          },
        ],
      },
    ],
  },
];
