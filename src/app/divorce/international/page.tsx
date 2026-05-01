import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '국제이혼 | 법률사무소 카라',
  description: '법률사무소 카라 국제이혼',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub2.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 이혼 <span>›</span> <span>국제이혼</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>국제이혼</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">국제이혼</div>
</div>
<div class="common-con">
<div class="con-maintxt bg05">국제이혼의 경우 여러 국가의 법이 관련되어 있기 때문에 국내에서 재판을 받을 수 있을지,<br/>국내에서 재판을 받는다면 어느 나라의 법률을 준거법으로 적용할지가
문제됩니다.<br/>국제사법 제2조에 따르면 당사자 또는 분쟁이 된 사안이<br/>대한민국과 실질적 관련이 있는 경우에는 대한민국에 관할권이 있다고 규정하고 있으므로,<br/>일방이
한국인이거나 한국에 살거나 한국에 재산이 있는 경우 등이라면 우리나라 법원에서 재판을 받을 수 있습니다.</div>
</div>
<div class="common-con">
<div class="con-tit">준거법 적용 기준</div>
<div class="conbar"></div>
<p class="ct mb10"><img alt="" src="https://www.calla-law.com/img/sub2_5_2.png"/></p>
<p>부부 중 일방이 한국에 상거소(주된 거주지)가 있는 대한민국 국민인 경우에 이혼은 한국법에 따르므로 국내이혼과 동일한 절차와 방식으로 이혼이 진행됩니다. 따라서 이혼에 따르는 위자료, 재산분할과 같은 재산 문제나, 친권, 양육권과 같은 자녀 문제도 대한민국 민법이 정한 바에 따르게 됩니다.</p>
</div>
<div class="common-con">
<div class="con-tit">구체적 사례</div>
<div class="conbar"></div>
<p class="ct"><img alt="" src="https://www.calla-law.com/img/sub2_5_3.png"/></p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
