'use client';

import { useState } from 'react';
import Link from 'next/link';
import inner from '../inner.module.css';
import styles from './page.module.css';

const practiceAreas = [
  {
    title: '민사소송',
    items: ['계약 분쟁', '손해배상 청구', '채권추심', '부당이득 반환', '소유권 분쟁'],
  },
  {
    title: '형사사건',
    items: ['수사 단계 변호', '재판 변호', '고소·고발 대리', '형사합의', '보석·구속적부심'],
  },
  {
    title: '가사사건',
    items: ['이혼 소송', '양육권·친권', '상속 분할', '재산분할', '유류분 청구'],
  },
  {
    title: '건설·부동산',
    items: ['건설 분쟁', '부동산 거래', '등기·등록', '재개발·재건축', '임대차 분쟁'],
  },
  {
    title: '기업법무',
    items: ['M&A', '경영 자문', '계약 검토', '기업 설립', '컴플라이언스'],
  },
  {
    title: '행정소송',
    items: ['행정처분 취소', '국가배상 청구', '인·허가 관련', '면허 관련 소송'],
  },
  {
    title: '교통사고',
    items: ['피해 보상', '과실비율 분석', '보험금 청구', '형사 대리'],
  },
  {
    title: '노동·산재',
    items: ['부당해고', '임금체불', '산업재해 보상', '퇴직금 청구'],
  },
  {
    title: '의료소송',
    items: ['의료과오', '의료분쟁 조정', '손해배상', '감정 절차'],
  },
];

export default function PracticeAreasPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <>
      <div className={inner.pageHeader}>
        <div className="container">
          <div className={inner.breadcrumb}>
            <Link href="/">HOME</Link> <span>›</span> <span>업무분야</span>
          </div>
          <h1 className={inner.pageTitle}>업무분야</h1>
        </div>
      </div>

      <section className={styles.areasSection}>
        <div className="container">
          <div className={styles.tabRow}>
            <button className={styles.tabActive}>분야별 업무</button>
          </div>

          <div className={styles.areasGrid}>
            {practiceAreas.map((area, idx) => (
              <div key={area.title} className={styles.areaBlock}>
                <button
                  className={`${styles.areaHeader} ${openIdx === idx ? styles.areaOpen : ''}`}
                  onClick={() => toggle(idx)}
                >
                  <span>{area.title}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    {openIdx === idx ? (
                      <path d="M3 8h10" stroke="currentColor" strokeWidth="2" />
                    ) : (
                      <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="2" />
                    )}
                  </svg>
                </button>
                <div className={`${styles.areaBody} ${openIdx === idx ? styles.areaBodyOpen : ''}`}>
                  <ul>
                    {area.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
