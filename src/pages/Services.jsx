import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '📡',
    badge: 'badge-cyan',
    badgeText: 'Commerce',
    title: '통신판매업',
    desc: 'IT 제품·솔루션을 온·오프라인 채널로 공급합니다. 기업 대량 구매 할인 및 맞춤 제안 가능.',
    items: ['IT 제품 유통', '기업 대량 납품', '온라인 판매 채널 운영', '맞춤 사양 제안', '구매 후 AS 지원'],
  },
  {
    icon: '⚙️',
    badge: 'badge-blue',
    badgeText: 'Software',
    title: '소프트웨어 개발',
    desc: '기업 프로세스를 자동화하는 맞춤형 솔루션을 설계·개발합니다.',
    items: ['ERP / 재고관리 시스템', 'POS · 주문 관리', '업무 자동화 프로그램', 'API 연동 개발', '레거시 시스템 현대화'],
  },
  {
    icon: '🌐',
    badge: 'badge-blue',
    badgeText: 'Web Dev',
    title: '웹사이트 개발',
    desc: '기획부터 디자인, 풀스택 개발, SEO까지 원스톱으로 제공합니다.',
    items: ['기업 홈페이지', '쇼핑몰 · 커머스', 'SaaS 대시보드', '랜딩 페이지', '유지보수 · 호스팅'],
  },
  {
    icon: '📊',
    badge: 'badge-cyan',
    badgeText: 'Data & AI',
    title: '데이터 분석 · AI',
    desc: '데이터를 수집·분석하고 AI 모델을 적용해 비즈니스 의사결정을 고도화합니다.',
    items: ['데이터 파이프라인 구축', '비즈니스 인사이트 대시보드', 'ML·AI 모델 개발', '예측 분석 시스템', 'LLM·챗봇 적용'],
  },
]

const PROCESS = ['상담·요구사항', '분석·설계', '개발·구현', '테스트·QA', '납품·배포', 'AS·유지보수']

export default function Services() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className="container">
          <span className="badge badge-blue">Services</span>
          <h1 className={styles.title}>통합 IT 솔루션</h1>
          <p className={styles.desc}>
            통신판매부터 AI까지 — 고객에게 필요한 모든 IT 서비스를 한 곳에서.
          </p>
        </div>
      </section>

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {SERVICES.map(s => (
              <div key={s.title} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{s.icon}</span>
                  <span className={`badge ${s.badge}`}>{s.badgeText}</span>
                </div>
                <h2 className={styles.cardTitle}>{s.title}</h2>
                <p className={styles.cardDesc}>{s.desc}</p>
                <ul className={styles.list}>
                  {s.items.map(item => (
                    <li key={item}>
                      <span className={styles.bullet} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline" style={{ marginTop: 'auto' }}>
                  견적 문의
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Process</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>진행 프로세스</h2>
          <div className="divider" style={{ margin: '1rem auto 3rem' }} />
          <div className={styles.steps}>
            {PROCESS.map((step, i) => (
              <div key={step} className={styles.step}>
                <div className={styles.stepNum}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className={styles.stepLabel}>{step}</div>
                {i < PROCESS.length - 1 && <div className={styles.stepArrow}>›</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
