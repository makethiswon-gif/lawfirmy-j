import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import inner from '../../inner.module.css';
import styles from './page.module.css';
import { lawyers } from '@/data/lawyers';

export async function generateStaticParams() {
  return lawyers.map((lawyer) => ({
    id: lawyer.id,
  }));
}

export default async function ProfessionalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lawyer = lawyers.find(l => l.id === id);
  
  if (!lawyer) {
    notFound();
  }

  return (
    <>
      <div className={inner.pageHeader}>
        <div className="container">
          <div className={inner.breadcrumb}>
            <Link href="/">HOME</Link> <span>›</span> <Link href="/professionals">구성원</Link> <span>›</span> <span>{lawyer.name} {lawyer.title}</span>
          </div>
          <h1 className={inner.pageTitle}>{lawyer.name} {lawyer.title}</h1>
        </div>
      </div>
      
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <section className={styles.profileSection}>
        <div className={`container ${styles.profileLayout}`}>
          {/* Left Column: Portrait and Info */}
          <div className={styles.profileLeft}>
            <div className={styles.portraitWrapper}>
              {lawyer.image ? (
                <Image src={lawyer.image} alt={lawyer.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              ) : (
                <div className={styles.portraitPlaceholder}>
                  <span>{lawyer.name[0]}</span>
                </div>
              )}
            </div>
            <div className={styles.contactInfo}>
              <p><strong>E.</strong> {lawyer.email}</p>
              <p><strong>T.</strong> {lawyer.phone}</p>
            </div>
          </div>

          {/* Right Column: Bio / Experience / Education */}
          <div className={styles.profileRight}>
            <div className={styles.proHeader}>
              <span className={styles.proTitle}>{lawyer.title}</span>
              <h2 className={styles.proName}>{lawyer.name}</h2>
            </div>
            
            <div className={styles.tags}>
              {lawyer.areas.map(area => (
                <span key={area} className={styles.tag}>{area}</span>
              ))}
            </div>

            <div className={styles.infoBlock}>
              <h3>학력</h3>
              <ul>
                {lawyer.education.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.infoBlock}>
              <h3>경력</h3>
              <ul>
                {lawyer.experience.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
