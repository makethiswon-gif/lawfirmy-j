import Link from 'next/link';
import inner from '../inner.module.css';
import styles from './page.module.css';

export const metadata = {
  title: '오시는 길 | 법무법인 양영&정훈',
  description: '법무법인 양영&정훈 사무소 찾아오시는 길 안내.',
};

const offices = [
  {
    name: '광주 본사 (광주사무소)',
    address: '(61445) 광주광역시 동구 지산로 73 동명빌딩 1층/5층',
    tel: '062-223-7877',
    fax: '062-222-7877',
    email: 'junghoon6523@naver.com',
    mapQuery: '광주광역시 동구 지산로 73',
  },
  {
    name: '장흥사무소',
    address: '(59330) 전남 장흥군 장흥읍 읍성로 130 2층',
    tel: '061-864-6523',
    fax: '061-864-6524',
    email: 'junghoon6523@naver.com',
    mapQuery: '전남 장흥군 장흥읍 읍성로 130',
  },
  {
    name: '순천사무소',
    address: '(57932) 전남 순천시 왕지로 8-1 5층',
    tel: '061-727-6523',
    fax: '061-726-9399',
    email: 'junghoon6523@naver.com',
    mapQuery: '전남 순천시 왕지로 8-1',
  },
  {
    name: '고흥사무소',
    address: '(59538) 전남 고흥군 고흥읍 흥양길 35 3층',
    tel: '061-835-6523',
    fax: '061-835-6524',
    email: 'khyeonjun@hanmail.net',
    mapQuery: '전남 고흥군 고흥읍 흥양길 35',
  },
];

export default function LocationsPage() {
  return (
    <>
      <div className={inner.pageHeader}>
        <div className="container">
          <div className={inner.breadcrumb}>
            <Link href="/">HOME</Link> <span>›</span> <span>오시는 길</span>
          </div>
          <h1 className={inner.pageTitle}>오시는 길</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <section className={styles.locationsSection}>
        <div className="container">
          {offices.map((office, idx) => (
            <div key={office.name} className={styles.officeBlock}>
              <div className={styles.officeHeader}>
                <h2>{office.name}</h2>
                {idx === 0 && <span className={styles.mainBadge}>본사</span>}
              </div>
              <div className={styles.officeBody}>
                <div className={styles.officeMap}>
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title={office.name}
                  />
                </div>
                <div className={styles.officeInfo}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>주소</span>
                    <span>{office.address}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>TEL</span>
                    <span>{office.tel}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>FAX</span>
                    <span>{office.fax}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>E-MAIL</span>
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
