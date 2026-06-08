import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const SERVICES = [
  {
    icon: '🖥',
    title: '컴퓨터 판매 · 조립',
    desc: '업무용 PC부터 고성능 워크스테이션까지. 최적의 사양을 제안하고 직접 조립·납품합니다.',
    tag: 'tag-green',
    tagText: 'Hardware',
  },
  {
    icon: '⚙',
    title: '소프트웨어 개발',
    desc: 'ERP, POS, 재고관리 등 기업 맞춤형 솔루션을 설계·개발합니다.',
    tag: 'tag-blue',
    tagText: 'Software',
  },
  {
    icon: '🌐',
    title: '웹사이트 개발',
    desc: '반응형 기업 사이트, 쇼핑몰, 관리자 대시보드까지 풀스택으로 개발합니다.',
    tag: 'tag-red',
    tagText: 'Web',
  },
]

const STATS = [
  { value: '20+', label: '년 업력' },
  { value: '500+', label: '납품 프로젝트' },
  { value: '300+', label: '기업 고객사' },
  { value: '98%', label: '고객 만족도' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className="tag tag-green">2003년 개업 · 20년 이상 신뢰</span>
            <h1 className={styles.heroTitle}>
              기업의 IT 인프라,<br />
              <span className={styles.highlight}>처음부터 끝까지</span><br />
              함께합니다
            </h1>
            <p className={styles.heroDesc}>
              컴퓨터 판매부터 소프트웨어·웹 개발까지.<br />
              20년의 경험으로 최적의 IT 솔루션을 제공합니다.
            </p>
            <div className={styles.heroBtns}>
              <Link to="/services" className="btn btn-primary">서비스 보기</Link>
              <Link to="/contact" className="btn btn-outline">무료 상담</Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.glowBox}>
              <div className={styles.codeBlock}>
                <span className={styles.codeComment}>// IT Solutions since 2003</span>
                <span><span className={styles.codeKey}>const</span> company = {'{'}</span>
                <span>&nbsp;&nbsp;founded: <span className={styles.codeStr}>'2003.09.23'</span>,</span>
                <span>&nbsp;&nbsp;services: [</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeStr}>'Hardware'</span>,</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeStr}>'Software'</span>,</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeStr}>'Web Dev'</span></span>
                <span>&nbsp;&nbsp;],</span>
                <span>&nbsp;&nbsp;trust: <span className={styles.codeNum}>100</span></span>
                <span>{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Services */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <p className={styles.sectionTag}>What We Do</p>
          <h2 className="section-title">핵심 서비스</h2>
          <p className="section-subtitle">20년 노하우로 고객의 IT 문제를 빠르고 정확하게 해결합니다.</p>
          <div className={styles.servicesGrid}>
            {SERVICES.map(s => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.cardIcon}>{s.icon}</div>
                <span className={`tag ${s.tag}`}>{s.tagText}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <Link to="/services" className={styles.cardLink}>자세히 보기 →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>IT 프로젝트를 시작하려고 하시나요?</h2>
            <p>초기 상담부터 납품 후 유지보수까지 원스톱으로 지원합니다.</p>
            <Link to="/contact" className="btn btn-green">지금 무료 상담 신청</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
