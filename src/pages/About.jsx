import styles from './About.module.css'

const VALUES = [
  { icon: '🎯', title: '고객 중심',  desc: '고객의 문제를 우리의 문제로 생각합니다.' },
  { icon: '🤖', title: '기술 혁신',  desc: 'AI와 데이터로 더 나은 솔루션을 만듭니다.' },
  { icon: '🤝', title: '신뢰 파트너', desc: '계약부터 유지보수까지 책임을 다합니다.' },
  { icon: '🚀', title: '빠른 실행',  desc: '아이디어를 실제 제품으로 빠르게 구현합니다.' },
]

const HISTORY = [
  { year: '2022',     month: '09', event: '블루컴퍼니 설립', desc: '2022년 9월 14일 창업. 통신판매업 등록.' },
  { year: '2022',     month: '12', event: '웹개발 서비스 런칭', desc: '기업 홈페이지·쇼핑몰 구축 서비스 시작.' },
  { year: '2023',     month: '06', event: '소프트웨어 개발 확장', desc: '맞춤형 업무 솔루션 개발 사업부 신설.' },
  { year: '2024',     month: '01', event: '데이터 분석 · AI 사업부', desc: '데이터 파이프라인 & AI 모델 적용 서비스 론칭.' },
  { year: '2024',     month: '09', event: '창업 2주년',  desc: '고객사 확장 및 기술 고도화 지속.' },
]

const SKILLS = [
  { name: 'React / Next.js', pct: 90 },
  { name: 'Python / FastAPI',  pct: 85 },
  { name: 'Data Analysis',    pct: 80 },
  { name: 'AI / ML',          pct: 75 },
  { name: 'DevOps / Cloud',   pct: 70 },
]

export default function About() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.orb} />
        <div className="container">
          <span className="badge badge-blue">About Us</span>
          <h1 className={styles.title}>
            데이터와 AI로<br />
            <span className={styles.grad}>세상을 연결</span>하는 기업
          </h1>
          <p className={styles.desc}>
            2022년 9월 14일, 더 나은 IT 솔루션을 만들겠다는 신념으로 출발했습니다.<br />
            통신판매부터 AI까지, 블루컴퍼니는 고객과 함께 성장합니다.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <p className="section-eyebrow">Our Values</p>
          <h2 className="section-title">핵심 가치</h2>
          <div className="divider" />
          <div className={styles.valuesGrid}>
            {VALUES.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <div className={styles.skillsInner}>
            <div>
              <p className="section-eyebrow">Tech Stack</p>
              <h2 className="section-title">기술 역량</h2>
              <div className="divider" />
              <p className="section-desc">
                최신 기술 스택으로 안정적이고 확장 가능한 솔루션을 구현합니다.
              </p>
            </div>
            <div className={styles.skillsList}>
              {SKILLS.map(s => (
                <div key={s.name} className={styles.skillItem}>
                  <div className={styles.skillMeta}>
                    <span className={styles.skillName}>{s.name}</span>
                    <span className={styles.skillPct}>{s.pct}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillFill} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className={`section ${styles.historySection}`}>
        <div className="container">
          <p className="section-eyebrow">History</p>
          <h2 className="section-title">회사 연혁</h2>
          <div className="divider" style={{ marginBottom: '3rem' }} />
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {HISTORY.map((h, i) => (
              <div key={i} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineDate}>{h.year}.{h.month}</span>
                  <h3 className={styles.timelineEvent}>{h.event}</h3>
                  <p className={styles.timelineDesc}>{h.desc}</p>
                </div>
                <div className={styles.timelineDot} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
