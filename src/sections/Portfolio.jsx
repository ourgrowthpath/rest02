import { useState } from 'react'
import { portfolio } from '../data/companyInfo'
import styles from './Portfolio.module.css'

const FILTERS = ['전체', 'Web', 'Software', 'AI', 'Data']

const CATEGORY_STYLE = {
  Web:      { badge: 'badge-blue', metric: styles.metricBlue },
  Software: { badge: 'badge-blue', metric: styles.metricBlue },
  AI:       { badge: 'badge-cyan', metric: styles.metricCyan },
  Data:     { badge: 'badge-cyan', metric: styles.metricCyan },
}

export default function Portfolio() {
  const [active, setActive] = useState('전체')

  const filtered =
    active === '전체' ? portfolio : portfolio.filter(p => p.category === active)

  return (
    <section id="portfolio" className={`section ${styles.portfolio}`}>
      <div className="container">

        <div className={styles.header}>
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">주요 프로젝트</h2>
          <div className="divider" />
          <p className="section-desc">
            다양한 산업군에서 쌓아온 프로젝트 경험입니다.
          </p>
        </div>

        <div className={styles.filters} role="group" aria-label="프로젝트 필터">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${active === f ? styles.active : ''}`}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
            >
              {f}
              {f !== '전체' && (
                <span className={styles.filterCount}>
                  {portfolio.filter(p => p.category === f).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p, i) => {
            const cs = CATEGORY_STYLE[p.category] ?? CATEGORY_STYLE.Web
            return (
              <article key={`${p.category}-${i}`} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={`badge ${cs.badge}`}>{p.category}</span>
                  <span className={styles.year}>{p.year}</span>
                </div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                <div className={`${styles.metric} ${cs.metric}`}>
                  <span className={styles.metricLabel}>{p.metric.label}</span>
                  <span className={styles.metricValue}>{p.metric.value}</span>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
