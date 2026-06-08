import { useState } from 'react'
import styles from './Contact.module.css'

const SERVICES = ['컴퓨터 판매·조립', '소프트웨어 개발', '웹사이트 개발', 'IT 유지보수', '기타']

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="tag tag-green">Contact</span>
          <h1 className={styles.title}>무료 상담 · 견적 문의</h1>
          <p className={styles.desc}>양식을 작성해 주시면 1영업일 내 담당자가 연락드립니다.</p>
        </div>
      </section>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Info */}
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <h3>연락처</h3>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div>
                    <strong>전화</strong>
                    <a href="tel:0212345678">02-1234-5678</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✉</span>
                  <div>
                    <strong>이메일</strong>
                    <a href="mailto:contact@itsolutions.kr">contact@itsolutions.kr</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🕘</span>
                  <div>
                    <strong>운영시간</strong>
                    <span>평일 09:00 – 18:00</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📅</span>
                  <div>
                    <strong>설립일</strong>
                    <span>2003년 9월 23일</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formWrap}>
              {submitted ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✅</span>
                  <h3>문의가 접수되었습니다!</h3>
                  <p>1영업일 내 담당자가 연락드리겠습니다.<br />감사합니다.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    다시 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>이름 *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="홍길동" />
                    </div>
                    <div className={styles.field}>
                      <label>회사명</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="(주)회사명" />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>연락처 *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="010-0000-0000" />
                    </div>
                    <div className={styles.field}>
                      <label>이메일</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="example@email.com" />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>문의 서비스 *</label>
                    <select name="service" value={form.service} onChange={handleChange} required>
                      <option value="">선택해주세요</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>문의 내용 *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="문의하실 내용을 자세히 적어주세요."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
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
