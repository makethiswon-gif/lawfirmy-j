import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '상속포기 | 법률사무소 카라',
  description: '법률사무소 카라 상속포기',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub3.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 상속 <span>›</span> <span>상속포기</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>상속포기</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">상속포기</div>
</div>
<div class="common-con">
<div class="con-maintxt bg09">상속의 포기란 상속개시를 안 날로부터 3개월 내에 상속을 받지 않겠다고 가정법원에 신고를 하여 상속과 관련된 모든 권리 및 의무를 승계하지 않는 것입니다. 상속포기는 일부 또는 조건부 포기가 허용되지 않고 오직 전부의 포기만이 인정되며, 상속인이 여러 명일 경우 상속인 중 일부만 상속을 포기하면 나머지 상속인들이 각 지분에 따라 상속을 받게 되므로 포기 의사가 있다면 공동으로 청구해야 합니다. </div>
</div>
<div class="common-con">
<div class="con-tit">상속재산 조회방법</div>
<div class="conbar"></div>
<div class="jaesanbox">
<div class="jaesan-tit">
<span class="gr">01</span> <span>망인 사망 후 6개월 이내</span>
</div>
<p>피상속인의 재산은 “안심상속 원스톱 서비스”를 통해 빠르고 간편하게 파악하실 수 있습니다. 안심상속 원스톱 서비스는 상속인이 피상속인의 사망신고와 동시 또는 사망일이 속한 달의 말일부터 6개월 이내에 금융거래, 토지소유현황, 건축물, 자동차, 세금, 연금 가입 유무 등 사망자의 상속재산 조회를 개별기관을 일일이 방문하지 않고 한 번에 확인할 수 있는 제도입니다.</p>
</div>
<div class="onestop_btn"><a href="https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01007&amp;CappBizCD=17400000001&amp;tp_seq=01" rel="nofollow noreferrer noopener" target="_blank">안심상속 원스톱 서비스 온라인 신청 바로가기 <span>→</span></a></div>
<div class="jaesanbox">
<div class="jaesan-tit">
<span class="gr">02</span> <span>망인 사망 후 6개월경과 후</span>
</div>
<p>피상속인의 남겨놓은 금융자산은 금융감독원에서 운영하고 있는 ‘상속인 금융거래 통합조회서비스’를 통해 파악하실 수 있으며, 망인이 남겨놓은 부동산의 경우 ‘조상 땅 찾기’를 이용하여 해당 부동산을 파악할 수 있습니다.</p>
</div>
<div class="jedo_btns">
<ul><li><a href="https://www.kcredit.or.kr:1441/fnncCnsmSprt/heirFnncApplyGuide.do?_csrf=a2281933-3061-404e-af45-61a7b4156255&amp;menuNo=522&amp;hpBoardSn=&amp;link=fnncCnsmSprt%2FheirFnncApplyGuide.do" rel="nofollow">상속인 금융거래 통합 조회제도<br/><span>자세히보기 +</span></a></li>
<li><a href="https://www.gov.kr/main?a=AA020InfoCappViewApp&amp;HighCtgCD=A09005&amp;CappBizCD=13100000294&amp;tp_seq=" rel="nofollow noreferrer noopener" target="_blank">조상 땅 찾기 제도<br/><span>자세히보기 +</span></a></li>
</ul></div>
</div>
<div class="common-con">
<div class="con-tit">상속포기 준비서류</div>
<div class="conbar"></div>
<p class="ct"><img alt="상속포기 준비서류" src="https://www.calla-law.com/img/sub3_4_2.png"/></p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
