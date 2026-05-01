'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './page.module.css';
import ScrollReveal from '@/components/animations/ScrollReveal';
import CountUp from '@/components/animations/CountUp';

// Extend Window for YouTube API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function Home() {
  const [videoReady, setVideoReady] = useState(false);
  const playerRef = useRef<any>(null);

  // YouTube IFrame API — detect when video is actually playing
  useEffect(() => {
    const initPlayer = () => {
      playerRef.current = new window.YT.Player('yt-hero-player', {
        videoId: '10NqtH0_IbY',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: '10NqtH0_IbY',
          modestbranding: 1,
          showinfo: 0,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          rel: 0,
        },
        events: {
          onStateChange: (event: any) => {
            // YT.PlayerState.PLAYING === 1
            if (event.data === 1) {
              // Wait a very short time to avoid black frames
              const checkTime = setInterval(() => {
                if (playerRef.current && playerRef.current.getCurrentTime) {
                  const time = playerRef.current.getCurrentTime();
                  if (time > 0) {
                    setVideoReady(true);
                    clearInterval(checkTime);
                  }
                }
              }, 100);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // Load API script
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
  }, []);

  // Apply native CSS scroll snapping only to the homepage
  useEffect(() => {
    document.documentElement.style.scrollSnapType = 'y mandatory';
    return () => {
      document.documentElement.style.scrollSnapType = '';
    };
  }, []);

  return (
    <>
      {/* 1. VIDEO HERO */}
      <section className={styles.video_section}>
        <div className={styles.video_wrapper}>
          <div id="yt-hero-player" style={{ pointerEvents: 'none' }}></div>
          <div className={styles.video_overlay}></div>
          <div className={`${styles.video_cover} ${videoReady ? styles.video_cover_hide : ''}`} style={{ backgroundImage: "url('https://img.youtube.com/vi/10NqtH0_IbY/maxresdefault.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'var(--color-ink)' }}></div>
        </div>
        {/* Hero scroll indicator */}
        <div className={styles.scroll_indicator}>
          <span></span>
        </div>
      </section>

      {/* 2. LAWYER SECTION — Dark BG with deco text */}
      <section className={styles.lawyer_section}>
        <span className={styles.deco_text} aria-hidden="true">LAWYER</span>
        
        {/* Background portrait — no ScrollReveal wrapper for absolute positioning */}
        <div className={styles.lawyer_bg_image}>
          <img src="/img/ceo.jpg" alt="유지은 대표변호사" />
        </div>

        <div className={`container ${styles.lawyer_inner}`}>
          <div className={styles.lawyer_info}>
            <ScrollReveal direction="up" delay={0}>
              <span className={styles.section_label}>CALLA LAW OFFICE</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.25}>
              <div className={styles.name}><b>유지은</b> 대표변호사</div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <p className={styles.lawyer_tagline}>
                &ldquo;의뢰인의 고통을 내 가족의 일처럼 함께합니다&rdquo;
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.5} stagger={200}>
              <ul>
                <li>변호사, 변리사, 세무사 자격 취득</li>
                <li>대한변호사협회 인증 이혼전문변호사, 상속전문변호사</li>
                <li>가족상담사 1급, 심리분석사 1급, 심리상담사 1급</li>
                <li>학교폭력예방상담사 자격 취득</li>
                <li>서울가정법원 실무 경력 다수</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.9}>
              <Link href="/about/lawyer" className={styles.btn_lawyer}>
                자세히 보기 <i>→</i>
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* SLIM CONTACT BANNER */}
        <div className={styles.bnr_main}>
          <div className={styles.bnr_inner}>
            <span>의뢰인의 빠른 상담을 도와드립니다.</span>
            <span>문의전화 <b>02-594-2353</b></span>
            <span>긴급전화 <b>010-2108-2353</b></span>
          </div>
        </div>
      </section>


      {/* 5. BLOG & YOUTUBE LINKS (2-COLUMN) */}
      <section className={styles.links_section}>
        <div className={styles.links_grid}>
          <ScrollReveal direction="left" duration={1.4}>
            <a href="https://blog.naver.com/calla-law-blog" target="_blank" rel="noopener noreferrer" className={styles.link_card}>
              <div className={styles.link_bg} style={{ backgroundImage: "url('/img/blog_bg_new.png')" }}></div>
              <div className={styles.link_overlay}></div>
              <div className={styles.link_content}>
                <span className={styles.link_badge}>BLOG</span>
                <h3>7년간 이혼상속 방문 1위</h3>
                <p>공식블로그 바로가기 <i>→</i></p>
              </div>
            </a>
          </ScrollReveal>
          <ScrollReveal direction="right" duration={1.4}>
            <a href="https://www.youtube.com/@calla-law" target="_blank" rel="noopener noreferrer" className={styles.link_card}>
              <div className={styles.link_bg} style={{ backgroundImage: "url('/img/youtube_bg_new.png')" }}></div>
              <div className={styles.link_overlay}></div>
              <div className={styles.link_content}>
                <span className={styles.link_badge}>YOUTUBE</span>
                <h3>카라 법률사무소</h3>
                <p>유튜브 바로가기 <i>→</i></p>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. MEDIA (PRESS) — Teal BG */}
      <section className={styles.press_section}>
        <span className={styles.deco_text} aria-hidden="true">MEDIA</span>
        <div className={styles.press_inner}>
          <ScrollReveal direction="up" delay={0}>
            <div className={styles.press_header}>
              <span className={styles.section_label}>CALLA IN THE NEWS</span>
              <h2 className={styles.section_title}>각종 수상내역에 빛나는<br/>카라 법률사무소</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={1} stagger={100}>
            <div className={styles.press_grid}>
              <a href="https://www.etoday.co.kr/news/view/1860190" target="_blank" rel="noopener noreferrer" className={styles.press_item}>
                <div className={styles.press_img_wrap}>
                  <img src="/img/1.png" alt="대한민국 리더대상 이혼부문 수상" />
                </div>
                <div className={styles.press_info}>
                  <span>이투데이</span>
                  <p>대한민국 리더대상 이혼부문 수상</p>
                </div>
              </a>
              <a href="https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202002210363&t=NN" target="_blank" rel="noopener noreferrer" className={styles.press_item}>
                <div className={styles.press_img_wrap}>
                  <img src="/img/3.png" alt="KSPACI 상속부문 수상" />
                </div>
                <div className={styles.press_info}>
                  <span>한국경제TV</span>
                  <p>KSPACI 상속부문 수상</p>
                </div>
              </a>
              <a href="https://www.joongang.co.kr/article/25373571" target="_blank" rel="noopener noreferrer" className={styles.press_item}>
                <div className={styles.press_img_wrap}>
                  <img src="/img/2.png" alt="중앙일보 이혼상속부문 5년연속 수상" />
                </div>
                <div className={styles.press_info}>
                  <span>중앙일보</span>
                  <p>이혼상속부문 5년연속 수상</p>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. WHY CALLA — Numbers + Customer Reviews (merged) */}
      <section className={styles.numbers_section}>
        <span className={styles.deco_text_light} aria-hidden="true">CALLA</span>
        <div className={`container ${styles.numbers_inner}`}>
          <div className={styles.numbers_left}>
            <ScrollReveal>
              <div className={styles.numbers_header}>
                <span className={styles.section_label}>WHY CALLA</span>
                <h2 className={styles.section_title_dark}>카라 법률사무소를<br/>선택하는 이유</h2>
              </div>
            </ScrollReveal>
            <div className={styles.numbers_grid}>
              <ScrollReveal direction="up" delay={0} duration={1.6}>
                <div className={styles.number_card}>
                  <p className={styles.number_label}>비밀상담</p>
                  <p className={styles.number_desc}>대표변호사가 직접 상담</p>
                  <div className={styles.number_value}>
                    <CountUp end={24} className={styles.count_num} />
                    <span className={styles.count_unit}>시간</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.15} duration={1.6}>
                <div className={styles.number_card}>
                  <p className={styles.number_label}>누적상담</p>
                  <p className={styles.number_desc}>ALL IN ONE 프리미엄 법률서비스</p>
                  <div className={styles.number_value}>
                    <CountUp end={30000} suffix="+" className={styles.count_num} />
                    <span className={styles.count_unit}>건</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3} duration={1.6}>
                <div className={styles.number_card}>
                  <p className={styles.number_label}>성공사례</p>
                  <p className={styles.number_desc}>최적화 된 맞춤 솔루션</p>
                  <div className={styles.number_value}>
                    <CountUp end={10000} suffix="+" className={styles.count_num} />
                    <span className={styles.count_unit}>건</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.45} duration={1.6}>
                <div className={styles.number_card}>
                  <p className={styles.number_label}>의뢰인후기</p>
                  <p className={styles.number_desc}>수많은 의뢰인이 증명하는 결과</p>
                  <div className={styles.number_value}>
                    <CountUp end={1079} suffix="+" className={styles.count_num} />
                    <span className={styles.count_unit}>건</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className={styles.numbers_right}>
            <ScrollReveal direction="right" delay={0.2}>
              <div className={styles.reviews_header}>
                <span className={styles.section_label}>CLIENT REVIEWS</span>
                <h3 className={styles.reviews_title}>
                  <a href="https://www.lawtalk.co.kr/directory/profile/9321-%EC%9C%A0%EC%A7%80%EC%9D%80" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    실제 영수증 · 의뢰인 후기 <i style={{ fontSize: '1rem', color: 'var(--color-vermillion)' }}>→</i>
                  </a>
                </h3>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3} stagger={100}>
              <a href="https://www.lawtalk.co.kr/directory/profile/9321-%EC%9C%A0%EC%A7%80%EC%9D%80" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <ul className={styles.quick}>
                  <li><img src="/img/main/img_quick_1.jpg" alt="의뢰인 후기 1" /></li>
                  <li><img src="/img/main/img_quick_2.jpg" alt="의뢰인 후기 2" /></li>
                  <li><img src="/img/main/img_quick_3.jpg" alt="의뢰인 후기 3" /></li>
                  <li><img src="/img/main/img_quick_4.jpg" alt="의뢰인 후기 4" /></li>
                  <li><img src="/img/main/img_quick_5.jpg" alt="의뢰인 후기 5" /></li>
                  <li><img src="/img/main/img_quick_6.jpg" alt="의뢰인 후기 6" /></li>
                </ul>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. COUNSEL — Dark BG */}
      <section id="cf" className={styles.counsel_section}>
        <span className={styles.deco_text} aria-hidden="true">COUNSEL</span>
        <div className={`container ${styles.counsel_inner}`}>
          <ScrollReveal>
            <div className={styles.counsel_header}>
              <span className={styles.section_label}>ONLINE CONSULTATION</span>
              <h2 className={styles.section_title}>상담 신청</h2>
            </div>
          </ScrollReveal>

          <div className={styles.counsel_grid}>
            <ScrollReveal direction="left" delay={0.1} duration={1}>
              <div className={styles.counsel_card}>
                <h3>온라인 <span>상담현황</span></h3>
                <p className={styles.top_txt}>1:1 무료 온라인 상담서비스를 통해 전문변호사의<br/>의견을 지금 바로 받아보세요.</p>
                
                <ul className={styles.counsel_list}>
                  <li><Link href="#"><span>황**님의 상담이 접수되었습니다.</span> <span className={`${styles.qnaIco} ${styles.qnaIco3}`}>상담완료</span></Link></li>
                  <li><Link href="#"><span>정**님의 상담이 접수되었습니다.</span> <span className={`${styles.qnaIco} ${styles.qnaIco3}`}>상담완료</span></Link></li>
                  <li><Link href="#"><span>유**님의 상담이 접수되었습니다.</span> <span className={`${styles.qnaIco} ${styles.qnaIco3}`}>상담완료</span></Link></li>
                  <li><Link href="#"><span>정**님의 상담이 접수되었습니다.</span> <span className={`${styles.qnaIco} ${styles.qnaIco3}`}>상담완료</span></Link></li>
                </ul>
                
                <Link href="/contact" className={styles.btn_counsel}>온라인 상담 신청하기 <i>→</i></Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1} duration={1}>
              <div className={styles.sms_card}>
                <h3>실시간 전화상담<span className={styles.secret}>비밀보장</span></h3>
                <p className={styles.top_txt}>이혼, 상속 전문변호사와 실시간으로 통화상담 받아보세요.</p>
                <p className={styles.txt_tel}>
                  <strong>02-594-2353</strong>
                </p>
                
                <div className={styles.form}>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="연락처 ('-' 없이 숫자만 입력)" />
                    <textarea placeholder="상담내용" rows={5}></textarea>
                    <div className={styles.agree}>
                      <input type="checkbox" id="agree_terms" />
                      <label htmlFor="agree_terms">개인정보 수집 및 이용에 동의합니다.</label>
                      <span className={styles.btn_privacy}>[전문보기]</span>
                    </div>
                    <button className={styles.btn_counsel} style={{ width: '100%', border: 'none', cursor: 'pointer' }}>문자 상담 신청하기 <i>→</i></button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 9. LOCATION — Light BG */}
      <section className={styles.location_section}>
        <span className={styles.deco_text_light} aria-hidden="true">CONTACT</span>
        <div className={`container ${styles.loc_con}`}>
          <div className={styles.loc_txt}>
            <ScrollReveal direction="left" duration={1}>
              <span className={styles.section_label}>CALLA LAW OFFICE</span>
              <h2 className={styles.section_title_dark}>오시는 길</h2>
              
              <table className={styles.table01}>
                <tbody>
                  <tr>
                    <th>문의전화</th>
                    <td><b>02-594-2353</b></td>
                  </tr>
                  <tr>
                    <th>긴급전화</th>
                    <td><b>010-2108-2353</b></td>
                  </tr>
                  <tr>
                    <th>업무시간</th>
                    <td>
                      <table className={styles.table02}>
                        <tbody>
                          <tr>
                            <td>평일</td>
                            <td>am 09:00 ~ pm 07:00<br/><span className={styles.gray}>(야간예약방문상담가능)</span></td>
                          </tr>
                          <tr>
                            <td>주말 / 공휴일</td>
                            <td><span className={styles.gr}>전화상담 및 예약방문상담가능</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td>
                      도로명 : 서울 서초구 강남대로 210 행복빌딩 13층 (양재역 8번출구)<br/>
                      주차장 : 건물내 기계식주차 무료이용 가능 (차량크기별 제한은 전화로 문의)
                    </td>
                  </tr>
                </tbody>
              </table>
            </ScrollReveal>
          </div>
          
          <div className={styles.loc_map}>
            <ScrollReveal direction="right" delay={0.15} duration={1} scale={0.96}>
              <div className={styles.map_placeholder}>
                카카오맵 영역 (550x400)
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
