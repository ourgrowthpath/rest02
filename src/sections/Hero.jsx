import { company } from '../data/companyInfo'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className="badge badge-blue">
            {company.nameEn} · Est. {company.founded}
          </span>
          <h1 className={styles.title}>
            데이터와 AI로<br />
            <span className={styles.grad}>비즈니스를 혁신</span>하는<br />
            IT 전문 기업
          </h1>
          <p className={styles.desc}>
            통신판매부터 소프트웨어·웹 개발, 데이터 분석·AI까지.<br />
            {company.nameEn}가 고객의 디지털 전환을 함께합니다.
          </p>
          <div className={styles.btns}>
            <a href="#services" className="btn btn-primary">서비스 살펴보기</a>
            <a href="#contact"  className="btn btn-outline">무료 상담 신청</a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.card}>
            <div className={styles.cardBar}>
              <span className={styles.dot} style={{ background: '#ef4444' }} />
              <span className={styles.dot} style={{ background: '#f59e0b' }} />
              <span className={styles.dot} style={{ background: '#22c55e' }} />
              <span className={styles.filename}>bluecompany.ai</span>
            </div>
            <pre className={styles.code}>{`// BlueCompany AI Pipeline
import { analyze } from '@blue/ai'

const result = await analyze({
  data:   await fetchBusinessData(),
  model:  'blue-gpt-v2',
  target: 'growth_rate',
})

console.log(\`예측 성장률: \${result.rate}%\`)
// ✅ 예측 성장률: 23.7%`}</pre>
          </div>
          <div className={styles.floatBadge}>
            <span className={styles.pulse} />
            AI 분석 실행 중
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollDot} />
        <span>스크롤</span>
      </div>
    </section>
  )
}
