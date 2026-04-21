import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h3 className={styles.footerLogo}>법무법인 양영&amp;정훈</h3>
            <p className={styles.footerSlogan}>빛고을 광주에서 시작하는 깊은 신뢰</p>
          </div>
          <div className={styles.footerNav}>
            <div className={styles.footerCol}>
              <h4>바로가기</h4>
              <Link href="/about">법인소개</Link>
              <Link href="/practice-areas">업무분야</Link>
              <Link href="/professionals">구성원</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>고객지원</h4>
              <Link href="/contact">상담 신청</Link>
              <Link href="/news">소식/자료</Link>
              <Link href="/locations">오시는 길</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>광주 본사</h4>
              <p>광주광역시 동구 지산로 73</p>
              <p>동명빌딩 1층/5층</p>
              <p className={styles.footerTel}>TEL 062-223-7877</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerMeta}>
            <p>법무법인 양영&정훈 | 대표변호사: 김정웅, 장병우, 양영희 | 사업자등록번호: 372-87-00283</p>
            <p>Copyright © 2024 Law Firm Yang-young &amp; Jeong-hoon. All rights reserved.</p>
          </div>
          <div className={styles.footerPolicies}>
            <Link href="#">면책공고</Link>
            <Link href="#">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
