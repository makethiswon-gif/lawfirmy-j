import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import ScrollReveal from '@/components/animations/ScrollReveal';
import CountUp from '@/components/animations/CountUp';

export default function Home() {
  return (
    <>
      {/* ===== HERO: 빛고을 광주 ===== */}
      <section className={styles.hero}>
        <video 
          className={styles.heroVideo}
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/images/offices/외관1.jpg"
        >
          <source src="/videos/hero_bg.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroLabel}>Law Firm Yang-young &amp; Jeong-hoon</p>
          <h1 className={styles.heroTitle}>
            빛이 되어<br />
            <span className={styles.heroAccent}>당신의 권리</span>를 지킵니다
          </h1>
          <p className={styles.heroDesc}>
            빛고을 광주에 뿌리를 내리고, 전남 전역에서<br />
            정의와 신뢰의 법률 서비스를 펼치는 법무법인 양영&amp;정훈입니다.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className={styles.heroBtn}>상담 신청</Link>
            <Link href="/about" className={styles.heroBtnGhost}>법인 소개 →</Link>
          </div>
        </div>
        <div className={styles.scrollHint}>
          <span>SCROLL</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ===== IDENTITY: 빛고을에서 시작하는 신뢰 ===== */}
      <section className={styles.identity}>
        <div className={`container ${styles.identityInner}`}>
          <ScrollReveal direction="left" duration={1}>
            <div className={styles.identityText}>
              <span className={styles.sectionLabel}>ABOUT US</span>
              <h2 className={styles.sectionTitle}>
                빛고을에서 시작하는<br />
                <span className={styles.highlight}>깊은 신뢰</span>
              </h2>
              <p>
                법무법인 양영&amp;정훈은 민주와 예술의 도시 광주에 뿌리를 두고 있습니다. 
                5·18 정신이 깃든 이 도시에서 정의의 가치를 실천하며, 무등산의 변함없는 자태처럼 
                한결같은 법률 서비스로 지역 사회와 함께 성장해왔습니다.
              </p>
              <p>
                광주 본사를 거점으로 장흥, 순천, 고흥까지 전남 주요 지역에 
                네트워크를 구축하여 의뢰인에게 가장 가까운 곳에서 든든한 조력자가 되어드리고 있습니다.
              </p>
              <Link href="/about" className={styles.textLink}>자세히 보기 →</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" duration={1} delay={0.2}>
            <div className={styles.identityVisual}>
              <div className={styles.imgMain}>
                <Image src="/images/offices/5층.jpg" alt="회의실" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imgSub}>
                <Image src="/images/offices/1층.jpg" alt="로비" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.floatingBadge}>
                <CountUp end={4} duration={2} className={styles.badgeNum} />
                <span className={styles.badgeText}>개 지역<br />네트워크</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRACTICE AREAS ===== */}
      <section className={styles.practiceSection}>
        <div className="container">
          <ScrollReveal>
            <span className={styles.sectionLabel}>PRACTICE AREAS</span>
            <h2 className={styles.sectionTitle}>업무 분야</h2>
          </ScrollReveal>
          <div className={styles.practiceGrid}>
            {[
              { title: '민사소송', desc: '계약, 손해배상, 채권추심' },
              { title: '형사사건', desc: '수사 변호, 재판 대리' },
              { title: '가사사건', desc: '이혼, 양육권, 상속 분할' },
              { title: '건설·부동산', desc: '분쟁, 거래, 재개발' },
              { title: '기업법무', desc: 'M&A, 계약, 경영 자문' },
              { title: '행정소송', desc: '처분 취소, 국가배상' },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.1} distance={30}>
                <Link href="/practice-areas" className={styles.practiceCard}>
                  <span className={styles.practiceNum}>{String(idx + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className={styles.practiceArrow}>→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONALS ===== */}
      <section className={styles.profSection}>
        <div className="container">
          <ScrollReveal>
            <span className={styles.sectionLabel}>PROFESSIONALS</span>
            <h2 className={styles.sectionTitle}>핵심 구성원</h2>
          </ScrollReveal>
          <div className={styles.profGrid}>
            {[
              { name: '김정웅', title: '대표변호사', img: null, spec: '민사 · 형사 · 기업법무' },
              { name: '장병우', title: '대표변호사', img: '/images/profiles/대표변호사-장병우-프로필(사진파일).jpg', spec: '건설·부동산 · 민사 · 행정' },
              { name: '양영희', title: '대표변호사', img: '/images/profiles/대표변호사-양영희-프로필(사진파일).jpg', spec: '기업법무 · 민사 · 가사' },
            ].map((lawyer, idx) => (
              <ScrollReveal key={lawyer.name} delay={idx * 0.15} distance={40}>
                <Link href="/professionals" className={styles.profCard}>
                  <div className={styles.profImg}>
                    {lawyer.img ? (
                      <Image src={lawyer.img} alt={lawyer.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                    ) : (
                      <div className={styles.profPlaceholder}><span>{lawyer.name[0]}</span></div>
                    )}
                    <div className={styles.profImgOverlay} />
                  </div>
                  <div className={styles.profInfo}>
                    <span className={styles.profRole}>{lawyer.title}</span>
                    <h3>{lawyer.name}</h3>
                    <p>{lawyer.spec}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.5}>
            <div className={styles.profMore}>
              <Link href="/professionals" className={styles.outlineBtn}>전체 구성원 보기 →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== NETWORK ===== */}
      <section className={styles.networkSection}>
        <div className="container">
          <ScrollReveal>
            <span className={styles.sectionLabel}>OUR NETWORK</span>
            <h2 className={styles.sectionTitle}>광주·전남 전역의 네트워크</h2>
          </ScrollReveal>
          <div className={styles.networkGrid}>
            {[
              { name: '광주 본사', addr: '동구 지산로 73 동명빌딩', tel: '062-223-7877', main: true },
              { name: '장흥사무소', addr: '장흥읍 읍성로 130', tel: '061-864-6523', main: false },
              { name: '순천사무소', addr: '왕지로 8-1', tel: '061-727-6523', main: false },
              { name: '고흥사무소', addr: '고흥읍 흥양길 35', tel: '061-835-6523', main: false },
            ].map((office, idx) => (
              <ScrollReveal key={office.name} delay={idx * 0.12} direction="up" distance={30}>
                <div className={`${styles.networkCard} ${office.main ? styles.networkMain : ''}`}>
                  {office.main && <span className={styles.mainBadge}>본사</span>}
                  <h3>{office.name}</h3>
                  <p className={styles.networkAddr}>{office.addr}</p>
                  <p className={styles.networkTel}>{office.tel}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal direction="none" duration={1.2}>
            <div className={styles.ctaInner}>
              <div>
                <h2>법률 문제로 고민이신가요?</h2>
                <p>빛고을 광주의 전문 법률팀이 함께합니다.</p>
              </div>
              <div className={styles.ctaBtns}>
                <Link href="/contact" className={styles.ctaBtn}>상담 신청하기</Link>
                <a href="tel:062-223-7877" className={styles.ctaPhone}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  062-223-7877
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
