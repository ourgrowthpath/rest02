import { services, process } from '../data/companyInfo'
import { Icon } from '../utils/iconMap'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">

        <div className={styles.header}>
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title">서비스</h2>
          <div className="divider" />
          <p className="section-desc">
            기술과 데이터 중심으로 고객의 비즈니스 문제를 해결합니다.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map(s => (
            <div key={s.id} className={`${styles.card} ${s.badge === 'badge-cyan' ? styles.cardCyan : ''}`}>
              <div className={styles.cardAccent} aria-hidden="true" />
              <div className={styles.cardTop}>
                <div className={`${styles.iconWrap} ${s.badge === 'badge-cyan' ? styles.iconCyan : ''}`}>
                  <Icon name={s.icon} size={22} />
                </div>
                <span className={`badge ${s.badge}`}>{s.badgeText}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <ul className={styles.list}>
                {s.items.map(item => (
                  <li key={item} className={styles.listItem}>
                    <Icon name="chevron" size={14} className={styles.bullet} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn btn-outline ${styles.cardBtn}`}>
                견적 문의
              </a>
            </div>
          ))}
        </div>

        <div className={styles.process}>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Process</p>
          <h3 className={`section-title ${styles.processTitle}`}>진행 프로세스</h3>
          <div className="divider" style={{ margin: '1rem auto 2.75rem' }} />
          <div className={styles.steps}>
            {process.map((p, i) => (
              <div key={p.step} className={styles.stepWrap}>
                <div className={styles.step}>
                  <div className={styles.stepNum}>{p.step}</div>
                  <div className={styles.stepLabel}>{p.label}</div>
                </div>
                {i < process.length - 1 && (
                  <span className={styles.stepArrow} aria-hidden="true">
                    <Icon name="chevron" size={18} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
