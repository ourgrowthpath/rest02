import { useState } from 'react'
import { company, contactOptions } from '../data/companyInfo'
import { Icon } from '../utils/iconMap'
import styles from './Contact.module.css'

const INFO = [
  { icon: 'mail',   label: '이메일',  value: company.contact.email,   href: `mailto:${company.contact.email}` },
  { icon: 'phone',  label: '전화',    value: company.contact.phone,   href: `tel:${company.contact.phone.replace(/-/g, '')}` },
  { icon: 'mapPin', label: '위치',    value: company.contact.address,  href: null },
  { icon: 'clock',  label: '운영시간', value: company.contact.hours,   href: null },
]

const INITIAL_FORM = { name: '', company: '', phone: '', email: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm]       = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSubmitted(true) }
  const reset  = () => { setForm(INITIAL_FORM); setSubmitted(false) }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">

        <div className={styles.header}>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">무료 상담 · 견적 문의</h2>
          <div className="divider" />
          <p className="section-desc">1영업일 내 담당자가 연락드립니다.</p>
        </div>

        <div className={styles.grid}>

          {/* 정보 패널 */}
          <aside className={styles.infoPanel}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>연락처 정보</h3>
              {INFO.map(item => (
                <div key={item.label} className={styles.infoRow}>
                  <div className={styles.infoIconWrap}>
                    <Icon name={item.icon} size={18} />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} className={styles.infoValue}>{item.value}</a>
                      : <span className={styles.infoValue}>{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.tipCard}>
              <p className={styles.tipTitle}>
                <Icon name="lightbulb" size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.4rem', color: 'var(--cyan-400)' }} />
                상담 전 준비하면 좋은 것
              </p>
              <ul className={styles.tipList}>
                <li>원하는 서비스 또는 해결할 문제 설명</li>
                <li>예산 범위 (선택 사항)</li>
                <li>희망 일정 또는 납품 기한</li>
              </ul>
            </div>
          </aside>

          {/* 폼 */}
          <div className={styles.formPanel}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIconWrap}>
                  <Icon name="check" size={36} />
                </div>
                <h3>문의가 접수되었습니다!</h3>
                <p>1영업일 내 담당자가 연락드리겠습니다.</p>
                <button className="btn btn-primary" onClick={reset}>
                  다시 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className={styles.form} noValidate>
                <div className={styles.row}>
                  <label className={styles.field}>
                    <span>이름 <abbr title="필수">*</abbr></span>
                    <input name="name" value={form.name} onChange={change} required placeholder="홍길동" autoComplete="name" />
                  </label>
                  <label className={styles.field}>
                    <span>회사명</span>
                    <input name="company" value={form.company} onChange={change} placeholder="(주)회사명" autoComplete="organization" />
                  </label>
                </div>
                <div className={styles.row}>
                  <label className={styles.field}>
                    <span>연락처 <abbr title="필수">*</abbr></span>
                    <input name="phone" value={form.phone} onChange={change} required placeholder="010-0000-0000" autoComplete="tel" />
                  </label>
                  <label className={styles.field}>
                    <span>이메일</span>
                    <input name="email" type="email" value={form.email} onChange={change} placeholder="example@email.com" autoComplete="email" />
                  </label>
                </div>
                <label className={styles.field}>
                  <span>문의 서비스 <abbr title="필수">*</abbr></span>
                  <select name="service" value={form.service} onChange={change} required>
                    <option value="">선택해주세요</option>
                    {contactOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </label>
                <label className={styles.field}>
                  <span>문의 내용 <abbr title="필수">*</abbr></span>
                  <textarea name="message" value={form.message} onChange={change} required rows={5} placeholder="프로젝트 내용, 요구사항, 일정 등을 자유롭게 작성해 주세요." />
                </label>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  문의 접수하기
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
