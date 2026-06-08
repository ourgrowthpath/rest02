import { useState, useEffect, useRef } from 'react'
import { company, navLinks } from '../data/companyInfo'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('')
  const observerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach(s => observerRef.current.observe(s))
    return () => observerRef.current?.disconnect()
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        <a href="#hero" className={styles.logo} onClick={close}>
          <span className={styles.logoMark}>
            <span className={styles.logoRing} />
            <span className={styles.logoDot} />
          </span>
          <span className={styles.logoText}>
            {company.logoPrimary}<span className={styles.logoSub}>{company.logoSecondary}</span>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="메인 메뉴">
          {navLinks.map(n => (
            <a
              key={n.href}
              href={n.href}
              className={`${styles.navLink} ${activeSection === n.href.slice(1) ? styles.active : ''}`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`}>무료 상담</a>
          <button
            className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.drawer} aria-label="모바일 메뉴">
          {navLinks.map(n => (
            <a key={n.href} href={n.href} className={styles.drawerLink} onClick={close}>
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '1rem' }}
            onClick={close}
          >
            무료 상담
          </a>
        </nav>
      )}
    </header>
  )
}
