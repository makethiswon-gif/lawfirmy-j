import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h3 className={styles.footerLogo}>법률사무소 카라</h3>
            <p className={styles.footerSlogan}>당신의 새로운 내일을 위한 첫걸음</p>
          </div>
          <div className={styles.footerNav}>
            <div className={styles.footerCol}>
              <h4>바로가기</h4>
              <Link href="/about">카라소개</Link>
              <Link href="/divorce">이혼상담</Link>
              <Link href="/inheritance">상속상담</Link>
              <Link href="/other">기타소송</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>고객지원</h4>
              <Link href="/counsel">상담문의</Link>
              <Link href="/success">승소사례</Link>
              <Link href="/press">언론보도</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>오시는 길</h4>
              <p>서울특별시 서초구 강남대로 210</p>
              <p>행복빌딩 13층</p>
              <p className={styles.footerTel}>TEL 02-594-2353</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerMeta}>
            <p>법률사무소 카라 | 대표변호사: 유지은</p>
            <p>Copyright © 2024 Calla Law Office. All rights reserved.</p>
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
