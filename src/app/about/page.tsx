import Image from 'next/image';
import Link from 'next/link';
import inner from '../inner.module.css';
import styles from './page.module.css';

export const metadata = {
  title: '법인소개 | 법무법인 양영&정훈',
  description: '법무법인 양영&정훈을 소개합니다.',
};

export default function AboutPage() {
  return (
    <>
      <div className={inner.pageHeader}>
        <div className="container">
          <div className={inner.breadcrumb}>
            <Link href="/">HOME</Link> <span>›</span> <span>법인소개</span>
          </div>
          <h1 className={inner.pageTitle}>법인소개</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <section className={styles.greeting}>
        <div className="container">
          <div className={styles.greetingInner}>
            <div className={styles.greetingText}>
              <h2 className={styles.sectionTitle}>인사말</h2>
              <p className={styles.lead}>
                법무법인 양영&amp;정훈은 광주와 전남 지역의 든든한 법률 파트너로서,<br />
                고객의 권리와 이익을 최우선으로 생각합니다.
              </p>
              <p>
                저희는 각 분야의 전문 변호사들이 하나의 팀을 이루어, 복잡한 법률 문제에 대해 최적의 솔루션을 제공합니다. 
                다년간의 경험과 축적된 노하우를 바탕으로 민사, 형사, 가사, 행정, 기업법무 등 폭넓은 영역에서 탁월한 성과를 거두어왔습니다.
              </p>
              <p>
                광주 본사를 거점으로 장흥, 순천, 고흥까지 전남 주요 지역에 네트워크를 구축하여 
                지역 사회에 밀착된 신속하고 정확한 법률 서비스를 제공하고 있습니다. 
                앞으로도 변함없는 신뢰와 헌신으로 의뢰인의 가장 든든한 조력자가 되겠습니다.
              </p>
              <p className={styles.sig}>대표변호사 김정웅 · 장병우 · 양영희</p>
            </div>
            <div className={styles.greetingImage}>
              <Image src="/images/offices/5층.jpg" alt="사무실 내부" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.vision}>
        <div className="container">
          <h2 className={styles.sectionTitle}>비전과 철학</h2>
          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}>⚖️</div>
              <h3>정의와 공정</h3>
              <p>법의 정의를 실현하고, 모든 의뢰인에게 공정한 법률 서비스를 제공합니다.</p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}>🤝</div>
              <h3>신뢰와 소통</h3>
              <p>투명한 업무 진행과 긴밀한 소통을 통해 깊은 신뢰 관계를 구축합니다.</p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}>📚</div>
              <h3>전문성과 혁신</h3>
              <p>끊임없는 연구와 학습을 통해 최신 법률 트렌드를 선도합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.office}>
        <div className="container">
          <h2 className={styles.sectionTitle}>사무실 안내</h2>
          <div className={styles.officeGrid}>
            <div className={styles.officeImg}>
              <Image src="/images/offices/1층.jpg" alt="1층" fill style={{ objectFit: 'cover' }} />
              <span>1층 로비</span>
            </div>
            <div className={styles.officeImg}>
              <Image src="/images/offices/4층.jpg" alt="4층" fill style={{ objectFit: 'cover' }} />
              <span>4층 집무실</span>
            </div>
            <div className={styles.officeImg}>
              <Image src="/images/offices/5층.jpg" alt="5층" fill style={{ objectFit: 'cover' }} />
              <span>5층 회의실</span>
            </div>
            <div className={styles.officeImg}>
              <Image src="/images/offices/5층1.jpg" alt="5층1" fill style={{ objectFit: 'cover' }} />
              <span>5층 상담실</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
