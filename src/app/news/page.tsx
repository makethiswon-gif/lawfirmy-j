import Link from 'next/link';
import inner from '../inner.module.css';
import styles from './page.module.css';

export const metadata = {
  title: '소식/자료 | 법무법인 양영&정훈',
  description: '법무법인 양영&정훈의 최신 소식과 자료입니다.',
};

const newsItems = [
  { 
    id: 1, 
    tag: '언론보도', 
    title: '양영희 전 광주고법 수석부장판사, \'법무법인 양영&정훈\' 대표변호사 개업', 
    date: '2026. 02. 26', 
    desc: '광주고등법원 수석부장판사를 지낸 양영희 변호사(사법연수원 26기)가 \'법무법인 양영&정훈\'의 대표변호사로 새롭게 출발합니다.',
    link: 'https://www.koreapressunion.com/news/articleView.html?idxno=7439'
  },
  { 
    id: 2, 
    tag: '언론보도', 
    title: '"양영희 전 광주고법 수석판사, \'법무법인 양영&정훈\' 대표변호사로 변신"', 
    date: '2026. 02. 15', 
    desc: '"판결문의 무게를 견디며 매일 아침 무등산을 오르던 뚝심으로, 이제는 의뢰인의 험난한 법적 분쟁을 함께 넘는 든든한 등반 파트너가 되겠습니다."',
    link: 'https://www.thepeoplenews.co.kr/detail.php?number=1885'
  },
  { 
    id: 3, 
    tag: '언론보도', 
    title: '\'무등산 판사\' 양영희 아름다운 하산… "판결의 길, 무등산에서 찾아"', 
    date: '2026. 02. 03', 
    desc: '판결의 엄중함을 견디기 위해, 오직 공정함을 지키기 위해 매일 무등산을 오르며 심신을 닦았던 \'무등산 판사\', 양영희 광주고등법원 수석판사가 정든 법원을 떠납니다.',
    link: 'https://www.asiae.co.kr/article/2026020316103921677'
  }
];

export default function NewsPage() {
  return (
    <>
      <div className={inner.pageHeader}>
        <div className="container">
          <div className={inner.breadcrumb}>
            <Link href="/">HOME</Link> <span>›</span> <span>소식/자료</span>
          </div>
          <h1 className={inner.pageTitle}>소식/자료</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <section className={styles.newsSection}>
        <div className="container">
          {/* Tabs */}
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${styles.tabActive}`}>전체</button>
            <button className={styles.tab}>법인뉴스</button>
            <button className={styles.tab}>최근업무사례</button>
            <button className={styles.tab}>언론보도</button>
          </div>

          {/* News List */}
          <div className={styles.newsList}>
            {newsItems.map((item) => (
              <article key={item.id} className={styles.newsItem}>
                <div className={styles.newsLeft}>
                  <span className={styles.newsTag}>{item.tag}</span>
                  <span className={styles.newsDate}>{item.date}</span>
                </div>
                <div className={styles.newsRight}>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.newsLink}>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </a>
                  ) : (
                    <>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
          </div>
        </div>
      </section>
    </>
  );
}
