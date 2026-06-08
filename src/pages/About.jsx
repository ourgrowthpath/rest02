import styles from './About.module.css'

const HISTORY = [
  { year: '2003', title: '회사 설립', desc: '2003년 9월 23일 컴퓨터 판매 전문 업체로 출발' },
  { year: '2005', title: '소프트웨어 개발 시작', desc: '기업 맞춤형 업무 자동화 프로그램 개발 서비스 런칭' },
  { year: '2008', title: '웹개발 사업부 신설', desc: '홈페이지·쇼핑몰 구축 서비스 확장' },
  { year: '2015', title: '기업 IT 통합 솔루션', desc: 'ERP·POS·재고관리 통합 패키지 출시, 납품 100사 돌파' },
  { year: '2020', title: '클라우드 전환 서비스', desc: '기업 클라우드 이전 컨설팅 및 유지보수 서비스 추가' },
  { year: '2024', title: '20주년 · 지속 성장', desc: '누적 프로젝트 500건 이상, 고객사 300곳 이상' },
]

const VALUES = [
  { icon: '🎯', title: '정확성', desc: '납기와 품질, 두 가지를 모두 지킵니다.' },
  { icon: '🤝', title: '신뢰', desc: '20년간 한 고객도 놓치지 않는 관계 중심 경영.' },
  { icon: '🚀', title: '혁신', desc: '변화하는 IT 환경에 앞서 대응합니다.' },
  { icon: '🛡', title: '책임', desc: '납품 후 유지보수까지 끝까지 책임집니다.' },
]

export default function About() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="tag tag-blue">About Us</span>
          <h1 className={styles.title}>2003년부터 쌓아온<br />IT 전문성</h1>
          <p className={styles.desc}>
            작은 컴퓨터 가게에서 시작해 소프트웨어·웹 개발을 아우르는<br />
            IT 종합 솔루션 기업으로 성장했습니다.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <h2 className="section-title">핵심 가치</h2>
          <div className={styles.valuesGrid}>
            {VALUES.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className={`section ${styles.historySection}`}>
        <div className="container">
          <h2 className="section-title">회사 연혁</h2>
          <div className={styles.timeline}>
            {HISTORY.map((h, i) => (
              <div key={h.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineContent}>
                  <span className={styles.year}>{h.year}</span>
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                </div>
                <div className={styles.dot} />
              </div>
            ))}
            <div className={styles.line} />
          </div>
        </div>
      </section>
    </div>
  )
}
