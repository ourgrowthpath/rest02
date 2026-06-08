// ── 회사 기본 정보 ──────────────────────────────────────────
// 고객사 납품 시 이 파일의 값만 수정하면 전체 홈페이지에 반영됩니다.
export const company = {
  name: '블루컴퍼니',
  nameEn: 'BlueCompany',
  logoPrimary: 'Blue',       // 헤더·푸터 로고 앞부분
  logoSecondary: 'Company',  // 헤더·푸터 로고 뒷부분 (컬러 강조)
  slogan: '데이터와 AI로 비즈니스를 혁신하는 IT 전문 기업',
  desc: '통신판매부터 소프트웨어·웹 개발, 데이터 분석·AI까지.\n블루컴퍼니가 고객의 디지털 전환을 함께합니다.',
  founded: '2022.09.14',
  bizNo: '000-00-00000',
  meta: {
    title: '블루컴퍼니 | IT 전문 기업 — 웹개발 · AI · 데이터분석',
    description:
      '블루컴퍼니는 웹개발, 소프트웨어 개발, 데이터 분석, AI 솔루션을 제공하는 IT 전문 기업입니다.',
    keywords: '웹개발,소프트웨어개발,데이터분석,AI솔루션,IT기업,블루컴퍼니',
  },
  contact: {
    email: 'contact@bluecompany.kr',
    phone: '02-1234-5678',
    address: '서울특별시 강남구 테헤란로 123',
    hours: '평일 09:00 – 18:00',
  },
}

// ── 네비게이션 ───────────────────────────────────────────────
export const navLinks = [
  { label: '회사소개',    href: '#about' },
  { label: '서비스',     href: '#services' },
  { label: '포트폴리오',  href: '#portfolio' },
  { label: '문의',      href: '#contact' },
]

// ── 통계 수치 ────────────────────────────────────────────────
export const stats = [
  { value: '3+',   label: '년 업력',     sub: 'Years of Experience' },
  { value: '50+',  label: '완료 프로젝트', sub: 'Projects Done' },
  { value: '30+',  label: '고객사',      sub: 'Happy Clients' },
  { value: '100%', label: '고객 만족도',  sub: 'Satisfaction Rate' },
]

// ── 핵심 가치 ────────────────────────────────────────────────
export const values = [
  {
    icon: '🎯',
    title: '고객 중심',
    desc: '고객의 문제를 우리의 문제로 생각하고 최적의 솔루션을 제공합니다.',
  },
  {
    icon: '🤖',
    title: '기술 혁신',
    desc: 'AI와 데이터로 더 나은 솔루션을 지속적으로 만들어 갑니다.',
  },
  {
    icon: '🤝',
    title: '신뢰 파트너',
    desc: '계약부터 유지보수까지 책임을 다하는 믿을 수 있는 파트너입니다.',
  },
  {
    icon: '🚀',
    title: '빠른 실행',
    desc: '아이디어를 실제 제품으로 빠르게 구현하여 시장 기회를 잡습니다.',
  },
]

// ── 서비스 ──────────────────────────────────────────────────
export const services = [
  {
    id: 'web',
    icon: '🌐',
    badge: 'badge-blue',
    badgeText: 'Web Dev',
    title: '웹 개발',
    desc: '기획부터 디자인, 풀스택 개발, SEO까지 원스톱으로 제공합니다.',
    items: ['기업 홈페이지', '쇼핑몰·커머스', 'SaaS 대시보드', '랜딩 페이지', '유지보수·호스팅'],
  },
  {
    id: 'sw',
    icon: '⚙️',
    badge: 'badge-blue',
    badgeText: 'Software',
    title: '프로그램 개발',
    desc: '기업 프로세스를 자동화하는 맞춤형 솔루션을 설계·개발합니다.',
    items: ['ERP·재고관리', 'POS·주문관리', '업무 자동화', 'API 연동', '레거시 현대화'],
  },
  {
    id: 'data',
    icon: '📊',
    badge: 'badge-cyan',
    badgeText: 'Data',
    title: '데이터 분석',
    desc: '데이터를 수집·분석하고 비즈니스 인사이트를 도출합니다.',
    items: ['데이터 파이프라인', '비즈니스 대시보드', '매출·고객 분석', '고객 세그먼트', '리포트 자동화'],
  },
  {
    id: 'ai',
    icon: '🤖',
    badge: 'badge-cyan',
    badgeText: 'AI',
    title: 'AI 솔루션',
    desc: 'AI 모델 적용으로 비즈니스 의사결정을 고도화합니다.',
    items: ['ML·AI 모델 개발', '예측 분석', 'LLM·챗봇 개발', 'RAG 시스템', 'AI 자동화'],
  },
]

// ── 포트폴리오 ───────────────────────────────────────────────
// category: 'Web' | 'Software' | 'AI' | 'Data'
export const portfolio = [
  {
    category: 'Web',
    title: '제조사 B2B 협력사 포털',
    desc: '국내 제조 중견기업의 협력사 관리·발주 시스템 구축. 기존 수작업 대비 업무 효율을 대폭 향상.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    metric: { label: '업무 효율', value: '+60%' },
    year: '2024',
  },
  {
    category: 'Software',
    title: '식품 유통사 맞춤형 ERP',
    desc: '재고·납품·정산을 통합한 맞춤형 ERP 개발. 월 마감 작업 시간을 대폭 단축하여 인력 효율화.',
    tags: ['Python', 'FastAPI', 'MySQL'],
    metric: { label: '마감 시간', value: '-80%' },
    year: '2024',
  },
  {
    category: 'AI',
    title: '리테일 AI 수요 예측',
    desc: '판매 데이터 기반 AI 재고 수요 예측 모델 도입. 재고 손실률 및 폐기 비용 절감.',
    tags: ['Python', 'ML', 'FastAPI'],
    metric: { label: '손실 감소', value: '-45%' },
    year: '2023',
  },
  {
    category: 'Data',
    title: '커머스 매출 분석 대시보드',
    desc: '온라인 쇼핑몰 통합 분석 대시보드 구축. 실시간 KPI 모니터링 및 주간 자동 리포트 제공.',
    tags: ['React', 'Recharts', 'Python'],
    metric: { label: '분석 시간', value: '-70%' },
    year: '2023',
  },
  {
    category: 'Web',
    title: '스타트업 SaaS 플랫폼',
    desc: '구독 기반 B2B SaaS 대시보드 풀스택 개발. MVP부터 프로덕션까지 단기간에 완성.',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    metric: { label: '출시 기간', value: '3개월' },
    year: '2023',
  },
  {
    category: 'AI',
    title: '고객 응대 AI 챗봇',
    desc: 'LLM 기반 고객 서비스 자동화. 반복 문의를 자동 처리하여 상담원 업무 집중도 향상.',
    tags: ['LLM', 'RAG', 'Python'],
    metric: { label: '자동 처리율', value: '75%' },
    year: '2024',
  },
]

// ── 개발 프로세스 ────────────────────────────────────────────
export const process = [
  { step: '01', label: '상담·요구사항' },
  { step: '02', label: '분석·설계' },
  { step: '03', label: '개발·구현' },
  { step: '04', label: '테스트·QA' },
  { step: '05', label: '납품·배포' },
  { step: '06', label: 'AS·유지보수' },
]

// ── 문의 서비스 옵션 ─────────────────────────────────────────
export const contactOptions = [
  '웹 개발',
  '프로그램 개발',
  '데이터 분석',
  'AI 솔루션',
  '기타 문의',
]
