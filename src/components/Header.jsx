import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { path: '/', label: '홈' },
  { path: '/about', label: '회사소개' },
  { path: '/services', label: '서비스' },
  { path: '/contact', label: '문의하기' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>◆</span>
          <span className={styles.logoText}>IT<span className={styles.logoAccent}>Solutions</span></span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className={`btn btn-primary ${styles.ctaBtn}`} onClick={() => setMenuOpen(false)}>
            견적 문의
          </Link>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="메뉴 열기"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
