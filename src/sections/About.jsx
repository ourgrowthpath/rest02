import { company, values } from '../data/companyInfo'
import { Icon } from '../utils/iconMap'
import styles from './About.module.css'

const TECH = ['React / Next.js', 'Python / FastAPI', 'Node.js', 'Data Analysis', 'AI / ML', 'DevOps / Cloud']

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">

        {/* 인트로 */}
        <div className={styles.intro}>
          <div className={styles.introText}>
            <p className="section-eyebrow">About Us</p>
            <h2 className="section-title">
              신뢰할 수 있는<br />IT 파트너
            </h2>
            <div className="divider" />
            <p className={styles.desc}>
              {company.founded.slice(0, 4)}년 창업 이후 통신판매, 소프트웨어 개발, 웹 개발,
              데이터 분석·AI까지 서비스를 지속 확장해왔습니다.
            </p>
            <p className={styles.desc}>
              단순 개발사를 넘어 고객의 비즈니스 성장에 실질적으로 기여하는
              IT 파트너를 지향합니다. 2024년부터는 AI·데이터 분야에 집중 투자하여
              더욱 심층적인 디지털 전환을 지원합니다.
            </p>
          </div>

          <div className={styles.metaWrap}>
            <div className={styles.metaGrid}>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>설립일</span>
                <span className={styles.metaValue}>{company.founded}</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>사업 분야</span>
                <span className={styles.metaValue}>IT 솔루션</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>소재지</span>
                <span className={styles.metaValue}>{company.contact.address}</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>연락처</span>
                <span className={styles.metaValue}>{company.contact.phone}</span>
              </div>
            </div>

            <div className={styles.techCard}>
              <p className={styles.techTitle}>주요 기술 스택</p>
              <div className={styles.techTags}>
                {TECH.map(t => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 핵심 가치 */}
        <div className={styles.valuesWrap}>
          <div className={styles.valuesHead}>
            <p className="section-eyebrow">Core Values</p>
            <h3 className="section-title">핵심 가치</h3>
            <div className="divider" />
          </div>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.iconWrap}>
                  <Icon name={v.icon} size={24} />
                </div>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
