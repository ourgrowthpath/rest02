# 개발일지 — 블루컴퍼니 공식 사이트

> **프로젝트:** 블루컴퍼니 (BlueCompany) 기업 홈페이지  
> **저장소:** https://github.com/ourgrowthpath/rest02  
> **라이브 URL:** https://ourgrowthpath.github.io/rest02/  
> **기술 스택:** React 19 · Vite 8 · CSS Modules · GitHub Pages

---

## 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [개발 환경](#2-개발-환경)
3. [컬러 시스템](#3-컬러-시스템)
4. [아키텍처](#4-아키텍처)
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

## 4. 아키텍처

### v3 — 단일 페이지 섹션 구조 (현재)

React Router를 제거하고 앵커 스크롤 기반 단일 페이지로 전환했습니다.  
기업 홈페이지 특성상 라우팅보다 스크롤 내비게이션이 UX에 더 적합하다고 판단했습니다.

```
/ (단일 페이지)
├── #hero       Hero 섹션
├── #stats      통계 배너
├── #about      회사소개 + 핵심 가치
├── #services   서비스 카드 + 프로세스
├── #portfolio  포트폴리오 (필터 기능)
└── #contact    문의 폼 + 연락처
```

**핵심 설계 원칙**

| 원칙 | 구현 방법 |
|---|---|
| 하드코딩 최소화 | 모든 텍스트 데이터를 `data/companyInfo.js` 로 분리 |
| 섹션 단위 구조화 | `sections/` 폴더에 섹션별 독립 컴포넌트 |
| 재사용성 | 회사명·연락처만 바꾸면 다른 고객사에 즉시 납품 가능 |
| CSS 변수 기반 테마 | `variables.css` 수정으로 전체 색상 일괄 변경 |

### v2 — 멀티 페이지 (React Router HashRouter)

```
/ /about /services /contact (HashRouter)
```

GitHub Pages 404 문제로 HashRouter 선택 (v3에서 앵커 스크롤로 대체).

---

## 5. 컴포넌트 구조

```
src/
├── main.jsx                    # 진입점 (React 19 createRoot)
├── App.jsx                     # 단일 페이지 — 섹션 조합
├── data/
│   └── companyInfo.js          # ★ 고객용 수정 파일 (전사 데이터 중앙화)
├── sections/                   # 페이지 구성 섹션
│   ├── Hero.jsx / .module.css        # 풀뷰포트 히어로 + 코드 카드
│   ├── Stats.jsx / .module.css       # 통계 숫자 배너
│   ├── About.jsx / .module.css       # 회사소개 + 메타정보 + 핵심가치
│   ├── Services.jsx / .module.css    # 4개 서비스 카드 + 프로세스
│   ├── Portfolio.jsx / .module.css   # 카테고리 필터 + 프로젝트 카드
│   └── Contact.jsx / .module.css     # 문의 폼 + 정보 패널
├── components/
│   ├── Header.jsx / .module.css      # 고정 헤더
│   └── Footer.jsx / .module.css      # 4컬럼 푸터
└── styles/
    ├── variables.css               # CSS 변수 (색상, 간격, 폰트, 그림자)
    └── global.css                  # 리셋 + 공통 클래스 (.btn, .badge, .section 등)
```

### Header 주요 기능

- 스크롤 50px 이상: `backdrop-filter: blur(16px)` + 배경 반투명 전환
- `IntersectionObserver` 로 현재 뷰포트 섹션 자동 감지 → 네비 링크 활성화
- 모바일(<768px): 전체화면 드로어 메뉴 (버거 버튼, aria 접근성 적용)
- `passive` 스크롤 이벤트로 성능 최적화

### Portfolio 섹션 — 필터 기능

```jsx
const FILTERS = ['전체', 'Web', 'Software', 'AI', 'Data']
const [active, setActive] = useState('전체')
// 카테고리별 필터링 → 그리드 재렌더
```

- 이미지 없이도 카드가 풍성하게 보이도록 **핵심 지표(metric)** 를 카드 하단에 배치
- 카테고리별 색상 구분 (Blue 계열: Web·Software / Cyan 계열: AI·Data)

### data/companyInfo.js — 고객사 커스터마이징 포인트

고객사 납품 시 이 파일 하나만 수정하면 전체 홈페이지에 반영됩니다.

| 항목 | 키 |
|---|---|
| 회사명 (한/영/로고분리) | `company.name`, `nameEn`, `logoPrimary`, `logoSecondary` |
| 연락처 | `company.contact.*` |
| SEO 메타 | `company.meta.*` |
| 통계 수치 | `stats[]` |
| 핵심 가치 | `values[]` |
| 서비스 | `services[]` |
| 포트폴리오 | `portfolio[]` |
| 문의 옵션 | `contactOptions[]` |

---

## 6. 개발 일지

### 2026-06-08

#### 1차 시도 — 초기 셋업 (취소)

처음에는 다크블루/로열블루 + 다크그린/다크레드 조합으로 개발을 시작했으나,  
클라이언트 요청으로 **블루컴퍼니** 브랜드에 맞춰 전면 재설계.

---

#### 2차 개발 — 블루컴퍼니 멀티 페이지 구축 (v2)

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

**빌드 결과 (v2)**
```
dist/assets/index-DJNlaM3Z.js    256.47 kB (gzip: 81.04 kB)
dist/assets/index-53yFrtoQ.css    22.20 kB (gzip:  4.70 kB)
```

---

#### 3차 개발 — 단일 페이지 템플릿 리아키텍처 (v3) `현재`

**목표:** 단순 예제가 아닌 실제 고객에게 납품 가능한 수준의 IT 기업 홈페이지 템플릿

**아키텍처 변경 결정**

| 항목 | v2 (이전) | v3 (현재) |
|---|---|---|
| 구조 | Multi-page (React Router) | Single-page (앵커 스크롤) |
| 데이터 관리 | 하드코딩 | `data/companyInfo.js` 중앙화 |
| 폴더 구조 | `pages/` | `sections/` |
| 포트폴리오 | 없음 | 카테고리 필터 + 6개 카드 |
| 라우터 | HashRouter | 제거 (앵커 + IntersectionObserver) |
| SEO | 기본 description | OG, Twitter Card, keywords 추가 |
| 헤더 활성 표시 | NavLink isActive | IntersectionObserver 섹션 감지 |

**주요 작업 내용**

1. **`data/companyInfo.js` 신설** — 회사명·연락처·서비스·포트폴리오·통계 등 전사 데이터 일원화. 고객사 납품 시 이 파일만 수정하면 됨.

2. **`sections/` 폴더 신설** — 7개 섹션을 독립 컴포넌트로 분리:
   - `Hero`: 풀뷰포트 히어로, 코드 카드 비주얼, 스크롤 힌트 애니메이션
   - `Stats`: 그라디언트 수치 배너 (업력·프로젝트·고객사·만족도)
   - `About`: 회사 소개 + 메타 정보 카드 + 기술 스택 태그 + 핵심 가치
   - `Services`: 4개 서비스 카드 + 6단계 프로세스 플로우
   - `Portfolio` (**신규**): 카테고리 필터 탭 + 6개 프로젝트 카드 (핵심 지표 강조)
   - `Contact`: sticky 정보 패널 + 문의 폼 (접근성 속성 추가)

3. **Header 개선**
   - `NavLink` → `<a>` 앵커 링크로 교체
   - `IntersectionObserver` 로 현재 뷰포트 섹션 자동 감지 → 네비 하이라이트
   - `passive` 스크롤 이벤트 리스너로 성능 최적화
   - aria-label, aria-expanded 접근성 속성 추가

4. **Footer 개선** — 하드코딩 텍스트를 모두 `companyInfo.js` 참조로 전환

5. **index.html SEO 강화** — Open Graph, Twitter Card, keywords, robots 메타태그 추가. 파비콘 경로를 Vite base 설정과 충돌하지 않도록 수정 (`/rest02/` 제거).

6. **React Router 의존성 제거** — `main.jsx`에서 `HashRouter` 제거, `App.jsx`에서 `Routes/Route` 제거. 번들 크기 감소.

**빌드 결과 (v3)**
```
dist/assets/index-B4gkMfPx.js    216.77 kB (gzip: 68.14 kB)   ← -39.7 kB (Router 제거)
dist/assets/index-DQ6K8m9m.css    23.43 kB (gzip:  5.21 kB)   ← +1.2 kB (섹션 추가)
```

**디자인 결정 사항**

- Portfolio 카드: 이미지 없이도 풍성한 정보 밀도 유지 → 카테고리 배지 + 기술 태그 + 핵심 지표(metric) 박스 조합
- 과도한 애니메이션 금지 원칙 준수: hover `translateY(-5px)` + `box-shadow` 만 사용
- `min-height: 100svh` — iOS Safari 주소창 높이 변동 대응 (`100vh` 대신 `svh` 사용)
- Contact 정보 패널: `position: sticky; top: 6rem` — 폼 스크롤 시 연락처 고정

---

## 7. 배포 과정

### GitHub Pages 배포 설정

```
배포 방식: gh-pages npm 패키지 → gh-pages 브랜치
Pages 소스: gh-pages 브랜치 / / (루트)
빌드 타입: legacy (Jekyll 스킵 — .nojekyll 추가)
라이브 URL: https://ourgrowthpath.github.io/rest02/
```

### 배포 플로우

```
npm run deploy
  └─ vite build         # dist/ 생성 (base: '/rest02/')
  └─ gh-pages -d dist   # gh-pages 브랜치에 푸시
```

### Vercel 배포 (대안)

```bash
# vite.config.js base를 '/' 로 변경 후
npx vercel --prod
```

### 커밋 이력

| 커밋 | 메시지 |
|---|---|
| `ced3772` | Initial commit |
| `a0892f9` | feat: IT회사 사이트 초기 구축 (React + Vite) |
| `03a615b` | feat: 블루컴퍼니 사이트 전면 재개발 |
| `01affa5` | docs: 개발일지(DEV_LOG.md) 추가 및 .nojekyll 설정 |
| `(현재)` | feat: 단일 페이지 템플릿 리아키텍처 (v3) |

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
| 🔴 높음 | 실제 회사 정보 입력 | `data/companyInfo.js` 에 실제 연락처·사업자번호 등록 |
| 🔴 높음 | 문의 폼 백엔드 연동 | EmailJS 또는 자체 API 서버 연결 |
| 🔴 높음 | 파비콘 제작 | `public/favicon.svg` 에 브랜드 아이콘 배치 |
| 🟡 중간 | sitemap.xml 추가 | 검색엔진 색인 효율화 |
| 🟡 중간 | 실제 포트폴리오 콘텐츠 | `companyInfo.js`의 `portfolio[]` 실 프로젝트로 교체 |
| 🟡 중간 | 스크롤 진입 애니메이션 | IntersectionObserver + CSS transition 경량 구현 |
| 🟢 낮음 | Google Analytics 연동 | `index.html` GA4 스니펫 삽입 |
| 🟢 낮음 | 다국어 지원 | `companyInfo.js` 를 언어별로 분기 |

---

*마지막 업데이트: 2026-06-08 (v3 리아키텍처)*
