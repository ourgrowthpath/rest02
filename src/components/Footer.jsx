import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>◆</span>
            <span className={styles.logoText}>IT<span className={styles.logoAccent}>Solutions</span></span>
          </div>
          <p className={styles.desc}>
            2003년부터 함께한 IT 파트너.<br />
            컴퓨터 판매, 소프트웨어·웹 개발까지<br />
            고객의 성장을 함께 만들어갑니다.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4>메뉴</h4>
            <Link to="/">홈</Link>
            <Link to="/about">회사소개</Link>
            <Link to="/services">서비스</Link>
            <Link to="/contact">문의하기</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4>서비스</h4>
            <span>컴퓨터 판매 · 조립</span>
            <span>소프트웨어 개발</span>
            <span>웹사이트 개발</span>
            <span>IT 유지보수</span>
          </div>
          <div className={styles.linkGroup}>
            <h4>연락처</h4>
            <span>개업일: 2003. 09. 23</span>
            <a href="mailto:contact@itsolutions.kr">contact@itsolutions.kr</a>
            <a href="tel:0212345678">02-1234-5678</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© 2003 – {new Date().getFullYear()} ITSolutions. All rights reserved.</p>
          <p>사업자등록번호: 000-00-00000</p>
        </div>
      </div>
    </footer>
  )
}
