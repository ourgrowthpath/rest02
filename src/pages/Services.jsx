import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '🖥',
    title: '컴퓨터 판매 · 조립',
    tag: 'tag-green',
    tagText: 'Hardware',
    items: ['사무용 PC / 노트북', '고성능 워크스테이션', '서버 장비', '맞춤형 조립 PC', '주변기기 납품'],
    desc: '법인 구매부터 소량 개인 구매까지 최적 사양을 제안합니다. AS 및 교체 서비스도 제공합니다.',
  },
  {
    icon: '⚙',
    title: '소프트웨어 개발',
    tag: 'tag-blue',
    tagText: 'Software',
    items: ['ERP / 재고관리 시스템', 'POS 시스템', '업무 자동화 프로그램', '데이터 관리 솔루션', 'API 연동 개발'],
    desc: '업종별 특성에 맞춘 맞춤형 솔루션을 설계부터 납품까지 책임집니다.',
  },
  {
    icon: '🌐',
    title: '웹사이트 개발',
    tag: 'tag-red',
    tagText: 'Web Dev',
    items: ['기업 홈페이지', '쇼핑몰 구축', '관리자 대시보드', '랜딩 페이지', '유지보수 · 호스팅'],
    desc: '기획부터 디자인, 개발, SEO까지 풀스택으로 지원합니다.',
  },
  {
    icon: '🔧',
    title: 'IT 유지보수',
    tag: 'tag-green',
    tagText: 'Support',
    items: ['정기 점검 계약', '긴급 출동 서비스', '네트워크 구성', '보안 솔루션', '데이터 백업'],
    desc: '납품 후에도 지속적인 유지보수로 안정적인 IT 환경을 보장합니다.',
  },
]

export default function Services() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="tag tag-blue">Services</span>
          <h1 className={styles.title}>통합 IT 서비스</h1>
          <p className={styles.desc}>하드웨어부터 소프트웨어, 웹개발, 유지보수까지 한 곳에서.</p>
        </div>
      </section>

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {SERVICES.map(s => (
              <div key={s.title} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>{s.icon}</span>
                  <div>
                    <span className={`tag ${s.tag}`}>{s.tagText}</span>
                    <h2 className={styles.cardTitle}>{s.title}</h2>
                  </div>
                </div>
                <p className={styles.cardDesc}>{s.desc}</p>
                <ul className={styles.list}>
                  {s.items.map(item => (
                    <li key={item}>
                      <span className={styles.bullet}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                  견적 문의
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>진행 프로세스</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>상담부터 완료까지 투명하게 진행합니다.</p>
          <div className={styles.steps}>
            {['무료 상담', '요구사항 분석', '견적·계약', '개발·납품', 'AS·유지보수'].map((step, i) => (
              <div key={step} className={styles.step}>
                <div className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.stepLabel}>{step}</div>
                {i < 4 && <div className={styles.stepArrow}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
