import { stats } from '../data/companyInfo'
import styles from './Stats.module.css'

export default function Stats() {
  return (
    <section id="stats" className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={s.label} className={styles.item}>
              <span className={styles.value}>{s.value}</span>
              <span className={styles.label}>{s.label}</span>
              <span className={styles.sub}>{s.sub}</span>
              {i < stats.length - 1 && <span className={styles.divider} aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
