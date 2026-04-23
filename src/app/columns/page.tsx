import Link from 'next/link';
import inner from '../inner.module.css';
import styles from '../news/page.module.css';
import { columns } from '@/data/columns';

export const metadata = {
  title: '정훈컬럼 | 법무법인 양영&정훈',
  description: '법무법인 정훈 시절부터 쌓아온 전문 법률 칼럼입니다.',
};

export default function ColumnsPage() {
  return (
    <>
      <div className={inner.pageHeader}>
        <div className="container">
          <div className={inner.breadcrumb}>
            <Link href="/">HOME</Link> <span>›</span> <span>정훈컬럼</span>
          </div>
          <h1 className={inner.pageTitle}>정훈컬럼</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <section className={styles.newsSection}>
        <div className="container">
          <div className={styles.newsList}>
            {columns.map((item) => (
              <article key={item.id} className={styles.newsItem}>
                <div className={styles.newsLeft}>
                  <span className={styles.newsTag}>정훈컬럼</span>
                  <span className={styles.newsDate}>{item.date}</span>
                </div>
                <div className={styles.newsRight}>
                  <Link href={`/columns/${item.id}`} className={styles.newsLink}>
                    <h3>{item.title}</h3>
                    <p style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {item.content.replace(/<[^>]+>/g, '').substring(0, 150)}...
                    </p>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
