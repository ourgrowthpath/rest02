import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const SERVICES = [
  {
    icon: '📡',
    badge: 'badge-cyan',
    badgeText: 'Commerce',
    title: '통신판매업',
    desc: '온·오프라인 통신판매 채널을 통해 IT 제품 및 솔루션을 유통합니다.',
  },
  {
    icon: '⚙️',
    badge: 'badge-blue',
    badgeText: 'Software',
    title: '소프트웨어 개발',
    desc: '기업 맞춤형 업무 자동화, ERP, 관리 시스템 등 풀커스텀 솔루션을 개발합니다.',
  },
  {
    icon: '🌐',
    badge: 'badge-blue',
    badgeText: 'Web Dev',
    title: '웹사이트 개발',
    desc: '반응형 기업 사이트, 쇼핑몰, SaaS 대시보드를 설계·개발합니다.',
  },
  {
    icon: '📊',
    badge: 'badge-cyan',
    badgeText: 'Data & AI',
    title: '데이터 분석 · AI',
    desc: '데이터 파이프라인 구축부터 머신러닝·AI 모델 적용까지 지원합니다.',
  },
]

const STATS = [
  { value: '3+',   label: '년 업력' },
  { value: '4',    label: '핵심 서비스' },
  { value: '100%', label: '고객 만족' },
  { value: '24/7', label: '기술 지원' },
]

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.grid} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className="badge badge-blue">블루컴퍼니 · Est. 2022.09.14</span>
            <h1 className={styles.heroTitle}>
              데이터와 AI로<br />
              <span className={styles.grad}>비즈니스를 혁신</span>하는<br />
              IT 전문 기업
            </h1>
            <p className={styles.heroDesc}>
              통신판매부터 소프트웨어·웹 개발, 데이터 분석·AI까지.<br />
              블루컴퍼니가 고객의 디지털 전환을 함께합니다.
            </p>
            <div className={styles.heroBtns}>
              <Link to="/services" className="btn btn-primary">서비스 살펴보기</Link>
              <Link to="/contact"  className="btn btn-outline">무료 상담 신청</Link>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.cardInner}>
              <div className={styles.cardHeader}>
                <span className={styles.cardDot} style={{ background: '#ef4444' }} />
                <span className={styles.cardDot} style={{ background: '#f59e0b' }} />
                <span className={styles.cardDot} style={{ background: '#22c55e' }} />
                <span className={styles.cardFilename}>bluecompany.ai</span>
              </div>
              <pre className={styles.code}>{`// BlueCompany AI Pipeline
import { analyze, predict } from '@blue/ai'

const result = await analyze({
  data:    await fetchBusinessData(),
  model:   'blue-gpt-v2',
  target:  'growth_rate',
})

console.log(\`예측 성장률: \${result.rate}%\`)
// ✅ 예측 성장률: 23.7%`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map(s => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title">핵심 서비스</h2>
          <div className="divider" />
          <p className="section-desc" style={{ marginBottom: '3rem' }}>
            기술과 데이터 중심으로 고객의 비즈니스 문제를 해결합니다.
          </p>
          <div className={styles.servGrid}>
            {SERVICES.map(s => (
              <div key={s.title} className={styles.servCard}>
                <div className={styles.servIcon}>{s.icon}</div>
                <span className={`badge ${s.badge}`}>{s.badgeText}</span>
                <h3 className={styles.servTitle}>{s.title}</h3>
                <p className={styles.servDesc}>{s.desc}</p>
                <Link to="/services" className={styles.servMore}>
                  자세히 보기 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <span className="badge badge-cyan">Get Started</span>
            <h2 className={styles.ctaTitle}>프로젝트를 시작할 준비가 되셨나요?</h2>
            <p className={styles.ctaDesc}>
              상담부터 납품, 유지보수까지 블루컴퍼니가 함께합니다.
            </p>
            <Link to="/contact" className="btn btn-primary">지금 무료 상담 신청</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
