import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const LINKS = [
  { label: '회사소개', to: '/about' },
  { label: '서비스',  to: '/services' },
  { label: '문의하기', to: '/contact' },
]

const SERVICES = ['통신판매업', '소프트웨어 개발', '웹사이트 개발', '데이터 분석', 'AI 솔루션']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className={`container ${styles.inner}`}>

        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMark}>
              <span className={styles.ring} />
              <span className={styles.dot} />
            </span>
            <span className={styles.logoText}>Blue<span className={styles.sub}>Company</span></span>
          </Link>
          <p className={styles.desc}>
            2022년 개업. 통신판매부터 AI까지<br />
            고객의 성장을 함께 만드는 IT 파트너.
          </p>
          <span className={styles.founded}>Established 2022.09.14</span>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>메뉴</h4>
          {LINKS.map(l => (
            <Link key={l.to} to={l.to} className={styles.colLink}>{l.label}</Link>
          ))}
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>서비스</h4>
          {SERVICES.map(s => (
            <span key={s} className={styles.colText}>{s}</span>
          ))}
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>연락처</h4>
          <a href="mailto:contact@bluecompany.kr" className={styles.colLink}>
            contact@bluecompany.kr
          </a>
          <a href="tel:0212345678" className={styles.colLink}>02-1234-5678</a>
          <span className={styles.colText}>평일 09:00 – 18:00</span>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© 2022 – {new Date().getFullYear()} BlueCompany. All rights reserved.</p>
          <p>사업자등록번호 : 000-00-00000</p>
        </div>
      </div>
    </footer>
  )
}
