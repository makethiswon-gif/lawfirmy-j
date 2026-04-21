import Image from 'next/image';
import Link from 'next/link';
import inner from '../inner.module.css';
import styles from './page.module.css';
import { lawyers } from '@/data/lawyers';

export const metadata = {
  title: '구성원 | 법무법인 양영&정훈',
  description: '법무법인 양영&정훈의 구성원을 소개합니다.',
};

export default function ProfessionalsPage() {
  return (
    <>
      <div className={inner.pageHeader}>
        <div className="container">
          <div className={inner.breadcrumb}>
            <Link href="/">HOME</Link> <span>›</span> <span>구성원</span>
          </div>
          <h1 className={inner.pageTitle}>구성원</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      {/* Search Box */}
      <section className={styles.searchSection}>
        <div className="container">
          <div className={styles.searchBox}>
            <div className={styles.searchField}>
              <label>업무별</label>
              <select><option>전체</option><option>민사</option><option>형사</option><option>가사</option><option>기업법무</option><option>건설·부동산</option><option>행정</option></select>
            </div>
            <div className={styles.searchField}>
              <label>이름</label>
              <input type="text" placeholder="이름을 입력하세요." />
            </div>
            <button className={styles.searchSubmit}>검색하기</button>
          </div>
        </div>
      </section>

      {/* Lawyer Grid */}
      <section className={styles.lawyerSection}>
        <div className="container">
          <div className={styles.lawyerGrid}>
            {lawyers.map((lawyer) => (
              <Link href={`/professionals/${lawyer.id}`} key={lawyer.id} className={styles.lawyerCard}>
                <div className={styles.lawyerImg}>
                  {lawyer.image ? (
                    <Image src={lawyer.image} alt={lawyer.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                  ) : (
                    <div className={styles.lawyerPlaceholder}>
                      <span>{lawyer.name[0]}</span>
                    </div>
                  )}
                </div>
                <div className={styles.lawyerInfo}>
                  <span className={styles.lawyerTitle}>{lawyer.title}</span>
                  <h3>{lawyer.name}</h3>
                  <div className={styles.lawyerAreas}>
                    {lawyer.areas.map((a) => <span key={a}>{a}</span>)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
