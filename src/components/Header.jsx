import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'

const NAV = [
  { to: '/',         label: '홈',      end: true },
  { to: '/about',    label: '회사소개' },
  { to: '/services', label: '서비스'   },
  { to: '/contact',  label: '문의'     },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* 로고 */}
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoMark}>
            <span className={styles.logoRing} />
            <span className={styles.logoDot} />
          </span>
          <span className={styles.logoText}>
            Blue<span className={styles.logoSub}>Company</span>
          </span>
        </Link>

        {/* 데스크탑 네비 */}
        <nav className={styles.desktopNav}>
          {NAV.map(n => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.right}>
          <Link to="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
            무료 상담
          </Link>
          <button
            className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="메뉴"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* 모바일 드로어 */}
      {menuOpen && (
        <div className={styles.drawer}>
          {NAV.map(n => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.active : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '1rem' }}
            onClick={() => setMenuOpen(false)}
          >
            무료 상담
          </Link>
        </div>
      )}
    </header>
  )
}
