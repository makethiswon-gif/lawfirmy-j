'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navMenus = [
  {
    title: '카라소개',
    path: '/about',
    subMenu: [
      { title: '카라소개', path: '/about' },
      { title: '변호사소개', path: '/about/lawyer' },
      { title: '카라의 특별함', path: '/about/special' },
      { title: '오시는길', path: '/about/location' },
    ]
  },
  {
    title: '이혼',
    path: '/divorce',
    subMenu: [
      { title: '협의이혼', path: '/divorce' },
      { title: '재판상이혼', path: '/divorce/litigation' },
      { title: '재산분할', path: '/divorce/property' },
      { title: '사실혼', path: '/divorce/common-law' },
      { title: '국제이혼', path: '/divorce/international' },
    ]
  },
  {
    title: '상속',
    path: '/inheritance',
    subMenu: [
      { title: '상속재산분할', path: '/inheritance' },
      { title: '유류분반환', path: '/inheritance/legitime' },
      { title: '유언', path: '/inheritance/will' },
      { title: '상속포기', path: '/inheritance/renunciation' },
      { title: '한정승인', path: '/inheritance/qualified' },
    ]
  },
  {
    title: '기타 소송',
    path: '/other',
    subMenu: [
      { title: '친권, 양육권', path: '/other' },
      { title: '양육비', path: '/other/child-support' },
      { title: '가정폭력', path: '/other/domestic-violence' },
      { title: '혼인무효, 혼인취소', path: '/other/annulment' },
      { title: '부정행위에 의한 손해배상', path: '/other/damages' },
    ]
  },
  {
    title: '승소사례',
    path: '/success'
  },
  {
    title: '언론보도',
    path: '/press'
  },
  {
    title: '상담문의',
    path: '/counsel',
    subMenu: [
      { title: '온라인 상담', path: '/counsel' },
      { title: '자주묻는질문', path: '/counsel' },
    ]
  }
];

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
          {/* Default dark logo for inner pages, white logo for home header */}
          <Image 
            src="/img/logo_kara.png" 
            alt="법률사무소 카라" 
            width={200} 
            height={56} 
            className={styles.logoImg}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          {navMenus.map((menu) => (
            <div key={menu.path} className={styles.navItemWrapper}>
              <Link 
                href={menu.path} 
                className={`${styles.navItem} ${pathname.startsWith(menu.path) ? styles.active : ''}`}
              >
                {menu.title}
              </Link>
              
              {menu.subMenu && (
                <div className={styles.dropdown}>
                  {menu.subMenu.map((sub) => (
                    <Link key={sub.path} href={sub.path} className={styles.dropdownItem}>
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.headerRight}>
          <Link href="/counsel" className={styles.consultBtn}>상담 신청</Link>
          <span className={styles.phone}>02-594-2353</span>
        </div>

        <button className={styles.mobileToggle} onClick={() => setMobileOpen(!mobileOpen)} aria-label="메뉴">
          <span /><span /><span />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navMenus.map((menu) => (
            <div key={menu.path} className={styles.mobileMenuGroup}>
              <Link href={menu.path} className={styles.mobileMenuMain} onClick={() => setMobileOpen(false)}>
                {menu.title}
              </Link>
              {menu.subMenu && (
                <div className={styles.mobileSubMenu}>
                  {menu.subMenu.map((sub) => (
                    <Link key={sub.path} href={sub.path} onClick={() => setMobileOpen(false)}>
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
