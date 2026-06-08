# 개발일지 — 블루컴퍼니 공식 사이트

> **프로젝트:** 블루컴퍼니 (BlueCompany) 기업 홈페이지  
> **저장소:** https://github.com/ourgrowthpath/rest02  
> **라이브 URL:** https://ourgrowthpath.github.io/rest02/  
> **기술 스택:** React 19 · Vite 8 · React Router v7 · CSS Modules · GitHub Pages

---

## 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [개발 환경](#2-개발-환경)
3. [컬러 시스템](#3-컬러-시스템)
4. [페이지 구성](#4-페이지-구성)
5. [컴포넌트 구조](#5-컴포넌트-구조)
6. [개발 일지](#6-개발-일지)
7. [배포 과정](#7-배포-과정)
8. [트러블슈팅](#8-트러블슈팅)
9. [향후 계획](#9-향후-계획)

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|---|---|
| **회사명** | 블루컴퍼니 (BlueCompany) |
| **개업일** | 2022년 9월 14일 |
| **사업 분야** | 통신판매업, 소프트웨어 개발, 웹개발, 데이터 분석 · AI |
| **목표** | 기업 신뢰성 제고 및 서비스 홍보를 위한 공식 웹사이트 구축 |
| **개발 기간** | 2026년 6월 8일 |

---

## 2. 개발 환경

```
Node.js   v26.0.0
npm       v11.12.1
Vite      v8.0.16
React     v19.2.7
OS        macOS Darwin 25.5.0
```

### 주요 의존성

```json
{
  "dependencies": {
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-router-dom": "^7.17.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^6.0.2",
    "gh-pages": "^6.3.0",
    "vite": "^8.0.16"
  }
}
```

### npm 스크립트

| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행 (`http://localhost:5173/rest02/`) |
| `npm run build` | 프로덕션 빌드 (`dist/` 생성) |
| `npm run deploy` | 빌드 후 GitHub Pages 배포 |

---

## 3. 컬러 시스템

프리미엄 IT/AI 기업 이미지에 맞춰 **딥 다크네이비 배경 + 블루·사이언 포인트** 조합을 채택했습니다.

### 배경 계층 (Background)

| 변수 | HEX | 용도 |
|---|---|---|
| `--bg-deepest` | `#020b18` | 최하단 배경, 히어로 섹션 |
| `--bg-base` | `#060d1f` | 기본 페이지 배경 |
| `--bg-surface` | `#0b1730` | 카드, 섹션 배경 |
| `--bg-elevated` | `#0f2040` | 호버, 강조 배경 |

### 포인트 컬러 (Blue Accent)

| 변수 | HEX | 용도 |
|---|---|---|
| `--blue-600` | `#1d4ed8` | 진한 블루 (버튼 호버) |
| `--blue-500` | `#2563eb` | 기본 블루 (버튼, CTA) |
| `--blue-400` | `#3b82f6` | 밝은 블루 (링크, 아이콘) |
| `--blue-300` | `#60a5fa` | 연한 블루 (활성 네비) |
| `--cyan-400` | `#22d3ee` | 사이언 (그라디언트 끝점) |
| `--cyan-300` | `#67e8f9` | 밝은 사이언 (뱃지 텍스트) |

### 텍스트

| 변수 | HEX | 용도 |
|---|---|---|
| `--text-primary` | `#f0f6ff` | 본문 주요 텍스트 |
| `--text-secondary` | `#94a3b8` | 설명, 부제목 |
| `--text-muted` | `#475569` | 메타, 레이블 |

---

## 4. 페이지 구성

### 라우팅 구조 (HashRouter)

```
/ (홈)
├── /about    (회사소개)
├── /services (서비스)
└── /contact  (문의하기)
```

> **HashRouter 선택 이유:** GitHub Pages는 서버 사이드 라우팅을 지원하지 않아 새로고침 시 404가 발생합니다.  
> URL 해시(`#/`) 방식으로 클라이언트 라우팅을 구현했습니다.

### 홈 (`/`)

- **Hero 섹션:** 그리드 배경 + 오브 글로우 효과, 코드 프리뷰 카드
- **Stats 섹션:** 핵심 수치 (업력, 서비스 수, 만족도, 지원시간)
- **Services 섹션:** 4개 핵심 서비스 카드
- **CTA 섹션:** 무료 상담 유도

### 회사소개 (`/about`)

- **Hero:** 그라디언트 타이틀 + 회사 소개 문구
- **핵심 가치:** 4개 가치 카드 (고객중심·기술혁신·신뢰파트너·빠른실행)
- **기술 역량:** 스킬 바 (React, Python, Data, AI, DevOps)
- **연혁:** 양방향 타임라인 (2022–2024)

### 서비스 (`/services`)

- 4개 서비스 상세 카드 (통신판매업 · SW개발 · 웹개발 · 데이터·AI)
- 6단계 진행 프로세스 플로우

### 문의하기 (`/contact`)

- 연락처 정보 패널
- 상담 준비 팁 카드
- 폼 (이름·회사명·연락처·이메일·서비스선택·내용)
- 제출 후 완료 메시지

---

## 5. 컴포넌트 구조

```
src/
├── main.jsx              # 진입점, HashRouter 래핑
├── App.jsx               # Routes 정의
├── styles/
│   ├── variables.css     # CSS 변수 (색상, 타이포, 간격)
│   └── global.css        # 글로벌 스타일, 공통 유틸리티 클래스
├── components/
│   ├── Header.jsx        # 고정 헤더 (스크롤 효과 + 모바일 드로어)
│   ├── Header.module.css
│   ├── Footer.jsx        # 4컬럼 푸터
│   └── Footer.module.css
└── pages/
    ├── Home.jsx / Home.module.css
    ├── About.jsx / About.module.css
    ├── Services.jsx / Services.module.css
    └── Contact.jsx / Contact.module.css
```

### Header 주요 기능

- 스크롤 50px 이상: `backdrop-filter: blur(16px)` + 배경 반투명 전환
- 모바일(<768px): 전체화면 드로어 메뉴 (버거 버튼)
- 활성 NavLink 하이라이트

---

## 6. 개발 일지

### 2026-06-08

#### 1차 시도 — 초기 셋업 (취소)

처음에는 다크블루/로열블루 + 다크그린/다크레드 조합으로 개발을 시작했으나,  
클라이언트 요청으로 **블루컴퍼니** 브랜드에 맞춰 전면 재설계.

#### 2차 개발 — 블루컴퍼니 사이트 구축

**환경 구성**
- 기존 레포 (`ourgrowthpath/rest02`) 클론
- Vite + React 19 + React Router v7 설치
- `package.json` 타입을 `commonjs` → `module`로 변경
- GitHub Pages 배포용 `base: '/rest02/'` 설정

**UI/UX 설계 결정 사항**
- 배경: 딥 다크네이비 계열 4단계 레이어 구조로 깊이감 표현
- 포인트: 블루(`#2563eb`) + 사이언(`#22d3ee`) 그라디언트
- 타이포: `Noto Sans KR` (한글) + `Inter` (영문) 조합
- 특수 효과: 라디얼 글로우 오브, CSS 그리드 배경 패턴, 텍스트 그라디언트

**개발 순서**
1. `variables.css` — 색상·간격·그림자·전환 CSS 변수 정의
2. `global.css` — 리셋, 버튼·뱃지·섹션헤더 공통 클래스
3. `Header.jsx` — 고정 헤더, 스크롤 감지, 모바일 드로어
4. `Footer.jsx` — 4컬럼 그리드, 회사 정보
5. `Home.jsx` — Hero(코드 카드), Stats, Services, CTA
6. `About.jsx` — 핵심가치, 스킬바, 연혁 타임라인
7. `Services.jsx` — 4개 서비스 카드, 진행 프로세스
8. `Contact.jsx` — 문의 폼, 정보 패널

**빌드 결과**
```
dist/assets/index-DJNlaM3Z.js    256.47 kB (gzip: 81.04 kB)
dist/assets/index-53yFrtoQ.css    22.20 kB (gzip:  4.70 kB)
```

---

## 7. 배포 과정

### GitHub Pages 배포 설정

```
배포 방식: gh-pages npm 패키지 → gh-pages 브랜치
Pages 소스: gh-pages 브랜치 / / (루트)
빌드 타입: legacy (Jekyll 스킵 — .nojekyll 추가)
```

### 배포 플로우

```
npm run deploy
  └─ vite build         # dist/ 생성
  └─ gh-pages -d dist   # gh-pages 브랜치에 푸시
```

### 커밋 이력

| 커밋 | 메시지 |
|---|---|
| `ced3772` | Initial commit |
| `a0892f9` | feat: IT회사 사이트 초기 구축 (React + Vite) |
| `03a615b` | feat: 블루컴퍼니 사이트 전면 재개발 |

---

## 8. 트러블슈팅

### ① GitHub Pages — 빈 화면 (흰 화면)

**원인:** `gh-pages` 브랜치로 배포했으나 GitHub Pages 소스가 `main` 브랜치로 설정되어 있어 개발용 `index.html`(`src="/src/main.jsx"`)이 그대로 서빙됨.

**해결:**
1. GitHub Pages API (`PUT /repos/{owner}/{repo}/pages`)로 소스를 `gh-pages` 브랜치로 변경
2. `public/.nojekyll` 파일 추가 → Jekyll 처리 방지

```bash
curl -X PUT \
  -H "Authorization: Bearer $TOKEN" \
  https://api.github.com/repos/ourgrowthpath/rest02/pages \
  -d '{"source":{"branch":"gh-pages","path":"/"}}'
```

### ② 새로고침 시 404

**원인:** `BrowserRouter` 사용 시 GitHub Pages는 `404.html`을 별도로 구성하지 않으면 서버 라우팅 불가.

**해결:** `BrowserRouter` → `HashRouter`로 변경. URL이 `/#/about` 형태가 되어 서버 요청 없이 클라이언트 라우팅 처리.

### ③ CDN 캐시 지연

**현상:** 배포 완료 후에도 수 분간 구버전 HTML이 서빙됨.

**해결:** GitHub Pages 빌드 강제 트리거 API 사용.

```bash
curl -X POST \
  -H "Authorization: Bearer $TOKEN" \
  https://api.github.com/repos/ourgrowthpath/rest02/pages/builds
```

---

## 9. 향후 계획

| 우선순위 | 항목 | 설명 |
|---|---|---|
| 🔴 높음 | 실제 회사 정보 입력 | 전화번호, 이메일, 사업자등록번호, 주소 |
| 🔴 높음 | 문의 폼 백엔드 연동 | EmailJS 또는 서버 API 연결 |
| 🟡 중간 | 포트폴리오·사례 페이지 추가 | 주요 개발 사례 소개 |
| 🟡 중간 | SEO 최적화 | Open Graph 메타태그, sitemap.xml |
| 🟢 낮음 | 다크/라이트 모드 토글 | 사용자 선호 테마 지원 |
| 🟢 낮음 | 페이지 전환 애니메이션 | Framer Motion 적용 |
| 🟢 낮음 | Google Analytics | 방문자 통계 수집 |

---

*마지막 업데이트: 2026-06-08*
