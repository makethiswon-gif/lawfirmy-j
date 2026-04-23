'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cls = `${styles.header} ${scrolled ? styles.scrolled : ''} ${!isHome ? styles.inner : ''}`;

  return (
    <header className={cls}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/logo/yangyoung_logo_transparent.png" 
            alt="법무법인 양영&정훈" 
            width={200} 
            height={56} 
            className={styles.logoImg}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/about" className={`${styles.navItem} ${pathname === '/about' ? styles.active : ''}`}>법인소개</Link>
          <Link href="/practice-areas" className={`${styles.navItem} ${pathname === '/practice-areas' ? styles.active : ''}`}>업무분야</Link>
          <Link href="/professionals" className={`${styles.navItem} ${pathname === '/professionals' ? styles.active : ''}`}>구성원</Link>
          <Link href="/news" className={`${styles.navItem} ${pathname === '/news' ? styles.active : ''}`}>소식/자료</Link>
          <Link href="/columns" className={`${styles.navItem} ${pathname.startsWith('/columns') ? styles.active : ''}`}>칼럼</Link>
          <Link href="/locations" className={`${styles.navItem} ${pathname === '/locations' ? styles.active : ''}`}>오시는 길</Link>
        </nav>

        <div className={styles.headerRight}>
          <Link href="/contact" className={styles.consultBtn}>상담 신청</Link>
          <span className={styles.phone}>062-223-7877</span>
        </div>

        <button className={styles.mobileToggle} onClick={() => setMobileOpen(!mobileOpen)} aria-label="메뉴">
          <span /><span /><span />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/about" onClick={() => setMobileOpen(false)}>법인소개</Link>
          <Link href="/practice-areas" onClick={() => setMobileOpen(false)}>업무분야</Link>
          <Link href="/professionals" onClick={() => setMobileOpen(false)}>구성원</Link>
          <Link href="/news" onClick={() => setMobileOpen(false)}>소식/자료</Link>
          <Link href="/columns" onClick={() => setMobileOpen(false)}>칼럼</Link>
          <Link href="/locations" onClick={() => setMobileOpen(false)}>오시는 길</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>상담 신청</Link>
        </div>
      )}
    </header>
  );
}
