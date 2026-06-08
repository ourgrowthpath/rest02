import { company, navLinks, services } from '../data/companyInfo'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>

        <div className={styles.brand}>
          <a href="#hero" className={styles.logo}>
            <span className={styles.logoMark}>
              <span className={styles.ring} />
              <span className={styles.dot} />
            </span>
            <span className={styles.logoText}>
              {company.logoPrimary}<span className={styles.sub}>{company.logoSecondary}</span>
            </span>
          </a>
          <p className={styles.desc}>
            {company.founded.slice(0, 4)}년 개업. 통신판매부터 AI까지<br />
            고객의 성장을 함께 만드는 IT 파트너.
          </p>
          <span className={styles.founded}>Established {company.founded}</span>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>메뉴</h4>
          {navLinks.map(n => (
            <a key={n.href} href={n.href} className={styles.colLink}>{n.label}</a>
          ))}
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>서비스</h4>
          {services.map(s => (
            <span key={s.id} className={styles.colText}>{s.title}</span>
          ))}
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>연락처</h4>
          <a href={`mailto:${company.contact.email}`} className={styles.colLink}>
            {company.contact.email}
          </a>
          <a href={`tel:${company.contact.phone.replace(/-/g, '')}`} className={styles.colLink}>
            {company.contact.phone}
          </a>
          <span className={styles.colText}>{company.contact.hours}</span>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {company.founded.slice(0, 4)} – {new Date().getFullYear()} {company.nameEn}. All rights reserved.</p>
          <p>사업자등록번호 : {company.bizNo}</p>
        </div>
      </div>
    </footer>
  )
}
