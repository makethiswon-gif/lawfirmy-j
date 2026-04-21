import Link from 'next/link';
import inner from '../inner.module.css';
import styles from './page.module.css';

export const metadata = {
  title: '법률상담 | 법무법인 양영&정훈',
  description: '법무법인 양영&정훈에 법률 상담을 신청하세요.',
};

export default function ContactPage() {
  return (
    <>
      <div className={inner.pageHeader}>
        <div className="container">
          <div className={inner.breadcrumb}>
            <Link href="/">HOME</Link> <span>›</span> <span>법률상담</span>
          </div>
          <h1 className={inner.pageTitle}>법률상담</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form */}
            <div className={styles.formSide}>
              <h2>상담 신청</h2>
              <p className={styles.formDesc}>아래 양식을 작성해 주시면 담당 변호사가 신속하게 연락 드리겠습니다.</p>

              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>성함 <span>*</span></label>
                    <input type="text" placeholder="성함을 입력해 주세요" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>연락처 <span>*</span></label>
                    <input type="tel" placeholder="010-0000-0000" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>이메일</label>
                  <input type="email" placeholder="example@email.com" />
                </div>

                <div className={styles.formGroup}>
                  <label>상담 분야</label>
                  <select>
                    <option value="">선택해 주세요</option>
                    <option>민사소송</option>
                    <option>형사사건</option>
                    <option>가사사건</option>
                    <option>건설·부동산</option>
                    <option>기업법무</option>
                    <option>행정소송</option>
                    <option>교통사고</option>
                    <option>노동/산재</option>
                    <option>기타</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>상담 내용 <span>*</span></label>
                  <textarea rows={6} placeholder="상담 받으실 내용을 간략히 적어 주세요." required></textarea>
                </div>

                <div className={styles.formCheck}>
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy">개인정보 수집 및 이용에 동의합니다. <span>*</span></label>
                </div>

                <button type="submit" className={styles.submitBtn}>상담 신청하기</button>
              </form>
            </div>

            {/* Info side */}
            <div className={styles.infoSide}>
              <div className={styles.infoCard}>
                <h3>광주 본사</h3>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>📍</span>
                  <span>광주광역시 동구 지산로 73 동명빌딩 1층/5층</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>📞</span>
                  <span>062-223-7877</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>📠</span>
                  <span>062-222-7877</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>✉️</span>
                  <span>junghoon6523@naver.com</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3>운영 시간</h3>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>🕐</span>
                  <div>
                    <p>월~금: 09:00 - 18:00</p>
                    <p style={{ fontSize: '0.82rem', color: '#999' }}>12:00 - 13:00 휴게시간</p>
                  </div>
                </div>
                <div className={styles.infoRow}>
                    <span className={styles.infoIcon}>📅</span>
                    <span>토·일: 정기휴무</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3>지점 안내</h3>
                <p className={styles.branchItem}><strong>장흥</strong> TEL 061-864-6523</p>
                <p className={styles.branchItem}><strong>순천</strong> TEL 061-727-6523</p>
                <p className={styles.branchItem}><strong>고흥</strong> TEL 061-835-6523</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
