"use client";

import React from 'react';
import Link from 'next/link';
import styles from './FloatingMenu.module.css';

export default function FloatingMenu() {
  return (
    <div className={styles.floatingMenu}>
      <a href="tel:02-594-2353" className={styles.menuItem}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span className={styles.tooltip}>전화 상담</span>
      </a>
      
      <a href="https://pf.kakao.com/_xgzxjxdC" target="_blank" rel="noopener noreferrer" className={`${styles.menuItem} ${styles.kakao}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c-5.52 0-10 3.5-10 7.81 0 2.76 1.78 5.17 4.45 6.47-.23.82-.82 3.12-.85 3.33-.04.26.1.28.26.17.13-.09 3.06-2.12 4.31-3.01.6.08 1.21.12 1.83.12 5.52 0 10-3.5 10-7.81S17.52 3 12 3z"/>
        </svg>
        <span className={styles.tooltip}>카카오톡 상담</span>
      </a>

      <Link href="/contact" className={styles.menuItem}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span className={styles.tooltip}>온라인 상담</span>
      </Link>
    </div>
  );
}
