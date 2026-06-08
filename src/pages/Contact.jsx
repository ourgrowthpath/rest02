import { useState } from 'react'
import styles from './Contact.module.css'

const SERVICE_OPTIONS = ['통신판매 문의', '소프트웨어 개발', '웹사이트 개발', '데이터 분석·AI', '기타']

const INFO = [
  { icon: '✉️', label: '이메일', value: 'contact@bluecompany.kr', href: 'mailto:contact@bluecompany.kr' },
  { icon: '📞', label: '전화',   value: '02-1234-5678',           href: 'tel:0212345678' },
  { icon: '🕘', label: '운영시간', value: '평일 09:00 – 18:00',   href: null },
  { icon: '📅', label: '설립일',  value: '2022년 9월 14일',       href: null },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className="container">
          <span className="badge badge-cyan">Contact</span>
          <h1 className={styles.title}>무료 상담 · 견적 문의</h1>
          <p className={styles.desc}>1영업일 내 담당자가 연락드립니다.</p>
        </div>
      </section>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.grid}>

            {/* 정보 패널 */}
            <div className={styles.infoPanel}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>연락처 정보</h3>
                {INFO.map(i => (
                  <div key={i.label} className={styles.infoRow}>
                    <span className={styles.infoIcon}>{i.icon}</span>
                    <div>
                      <span className={styles.infoLabel}>{i.label}</span>
                      {i.href
                        ? <a href={i.href} className={styles.infoValue}>{i.value}</a>
                        : <span className={styles.infoValue}>{i.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.tipCard}>
                <p className={styles.tipTitle}>💡 상담 전 준비하면 좋은 것</p>
                <ul className={styles.tipList}>
                  <li>원하는 서비스 또는 문제 설명</li>
                  <li>예산 범위 (선택)</li>
                  <li>희망 일정 또는 데드라인</li>
                </ul>
              </div>
            </div>

            {/* 폼 */}
            <div className={styles.formPanel}>
              {submitted ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✅</span>
                  <h3>문의가 접수되었습니다!</h3>
                  <p>1영업일 내 담당자가 연락드리겠습니다.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    다시 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className={styles.form}>
                  <div className={styles.row}>
                    <label className={styles.field}>
                      <span>이름 *</span>
                      <input name="name" value={form.name} onChange={change} required placeholder="홍길동" />
                    </label>
                    <label className={styles.field}>
                      <span>회사명</span>
                      <input name="company" value={form.company} onChange={change} placeholder="(주)블루컴퍼니" />
                    </label>
                  </div>
                  <div className={styles.row}>
                    <label className={styles.field}>
                      <span>연락처 *</span>
                      <input name="phone" value={form.phone} onChange={change} required placeholder="010-0000-0000" />
                    </label>
                    <label className={styles.field}>
                      <span>이메일</span>
                      <input name="email" type="email" value={form.email} onChange={change} placeholder="example@email.com" />
                    </label>
                  </div>
                  <label className={styles.field}>
                    <span>문의 서비스 *</span>
                    <select name="service" value={form.service} onChange={change} required>
                      <option value="">선택해주세요</option>
                      {SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </label>
                  <label className={styles.field}>
                    <span>문의 내용 *</span>
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

    </div>
  )
}
