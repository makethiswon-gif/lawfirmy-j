import React from 'react';
import inner from '../../inner.module.css';
import styles from './page.module.css';

export const metadata = {
  title: '변호사소개 | 법률사무소 카라',
  description: '법률사무소 카라 변호사소개',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub1.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 카라소개 <span>›</span> <span>변호사소개</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>변호사소개</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className={styles.pageWrapper}>
        <div className={styles.lawyerContainer}>
          <div className={styles.sectionHeader}>
            <span className={inner.callaName}>CALLA LAW OFFICE</span>
            <h2 className={styles.sectionTitle}>변호사 소개</h2>
          </div>

          {/* 대표 변호사 */}
          <div className={styles.repLawyer}>
            <div className={styles.repPhoto}>
              <img alt="유지은 변호사 사진" src="https://www.calla-law.com/img/lawyer_img.png" />
            </div>
            <div className={styles.repInfo}>
              <h3 className={styles.repName}>유지은 <span>대표변호사</span></h3>
              
              <div className={styles.careerSection}>
                <div className={styles.careerTitle}>약력</div>
                <ul className={styles.careerList}>
                  <li>변호사, 변리사, 세무사 자격 취득</li>
                  <li>대한변호사협회 인증 이혼전문변호사, 상속전문변호사 자격 취득</li>
                  <li>가족상담사 1급, 심리분석사 1급, 심리상담사 1급</li>
                  <li>학교폭력예방상담사 자격 취득</li>
                </ul>
                <ul className={styles.careerList}>
                  <li>現) 법률사무소 카라 대표변호사</li>
                  <li>現) 대한변호사협회 장애인법률지원변호사단 단원</li>
                  <li>現) 대한변호사협회 여성변호사특별위원회 위원</li>
                  <li>現) 대법원 국선변호인</li>
                </ul>
                <ul className={styles.careerList}>
                  <li>現) 청주밝은안과 법률 고문변호사</li>
                  <li>現) 연세이비인후과 법률 고문변호사</li>
                  <li>現) 한맥치과 법률 고문변호사</li>
                  <li>現) 강대근한의원 법률 고문변호사</li>
                  <li>現) 안광무내과 법률 고문변호사</li>
                </ul>
              </div>

              <div style={{ textAlign: 'center' }}>
                <a 
                  href="https://www.lawtalk.co.kr/directory/profile/9321-%EC%9C%A0%EC%A7%80%EC%9D%80/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.reviewBtn}
                >
                  의뢰인 후기 확인하기
                </a>
              </div>
            </div>
          </div>

          <div style={{ height: '60px' }}></div>
          <h3 className={styles.otherLawyersTitle}>소속 변호사</h3>

          {/* 소속 변호사 그리드 */}
          <div className={styles.lawyersGrid}>
            
            {/* 권하늘 변호사 */}
            <div className={styles.lawyerCard}>
              <div className={styles.photoWrap}>
                <img alt="권하늘" src="http://www.calla-law.com/img/law1.jpg" />
                <div className={styles.hoverDesc}>
                  <div className={styles.descName}>권하늘 변호사</div>
                  <ul className={styles.descList}>
                    <li>서울외국어고등학교</li>
                    <li>숙명여자대학교 법학과</li>
                    <li>부산대학교 법학전문대학원</li>
                    <li style={{ marginTop: '12px' }}>헌법재판소 헌법재판연구원 실무과정 이수</li>
                    <li>법무부 법무과 실무과정 이수</li>
                    <li>대한변호사협회 가사법 특별연수 다수 수료</li>
                    <li>서울지방변호사회 가사 커뮤니티 연수 다수 수료</li>
                    <li>대한변호사협회 전문직 성년후견인 양성 교육 과정 수료</li>
                  </ul>
                </div>
              </div>
              <div className={styles.lawyerName}>권하늘 변호사</div>
            </div>

            {/* 염수빈 변호사 */}
            <div className={styles.lawyerCard}>
              <div className={styles.photoWrap}>
                <img alt="염수빈" src="http://www.calla-law.com/img/law2.jpg" />
                <div className={styles.hoverDesc}>
                  <div className={styles.descName}>염수빈 변호사</div>
                  <ul className={styles.descList}>
                    <li>동두천외국어고등학교</li>
                    <li>한양대학교 독어독문학과</li>
                    <li>충남대학교 법학전문대학원</li>
                    <li style={{ marginTop: '12px' }}>대한법률구조공단 실무과정 이수</li>
                    <li>증권금융연수원 실무과정 이수</li>
                    <li>서울대학교 기획처 법무팀</li>
                    <li>대한변호사협회 가사법 특별연수 다수 수료</li>
                    <li>서울지방변호사회 가사 커뮤니티 연수 다수 수료</li>
                    <li>대한변호사협회 전문직 성년후견인 양성 교육 과정 수료</li>
                  </ul>
                </div>
              </div>
              <div className={styles.lawyerName}>염수빈 변호사</div>
            </div>

            {/* 한가람 변호사 */}
            <div className={styles.lawyerCard}>
              <div className={styles.photoWrap}>
                <img alt="한가람" src="http://www.calla-law.com/img/law3.jpg" />
                <div className={styles.hoverDesc}>
                  <div className={styles.descName}>한가람 변호사</div>
                  <ul className={styles.descList}>
                    <li>숙명여자대학교 법학과 수석 졸업</li>
                    <li>이화여자대학교 법학전문대학원</li>
                    <li style={{ marginTop: '12px' }}>헌법재판소 헌법재판연구원 실무과정 이수</li>
                    <li>검찰청 실무과정 이수</li>
                    <li>대한변호사협회 가사법 특별연수 다수 수료</li>
                    <li>서울지방변호사회 가사 커뮤니티 연수 다수 수료</li>
                    <li>대한변호사협회 전문직 성년후견인 양성 교육 과정 수료</li>
                  </ul>
                </div>
              </div>
              <div className={styles.lawyerName}>한가람 변호사</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
