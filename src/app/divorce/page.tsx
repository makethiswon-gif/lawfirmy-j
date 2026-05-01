import React from 'react';
import inner from '../inner.module.css';

export const metadata = {
  title: '협의이혼 | 법률사무소 카라',
  description: '법률사무소 카라 협의이혼',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub2.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 이혼 <span>›</span> <span>협의이혼</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>협의이혼</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">협의이혼</div>
</div>
<div class="common-con">
<div class="con-maintxt bg01">협의이혼은 부부가 서로 헤어지기로 합의하고 관할법원에 찾아가 이혼의사 확인을 받은 다음, 행정관청에 이혼신고를 함으로써 부부관계를 해소하는 절차를 말합니다.<br/>협의이혼은 재산관련 서류를 첨부하여 재산분할관계까지 확인받을 수는 없습니다.</div>
</div>
<div class="common-con">
<div class="con-tit">협의이혼 절차</div>
<div class="conbar"></div>
<p class="ct"><img alt="협의이혼 절차" src="https://www.calla-law.com/img/sub2_1_2.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">필요서류</div>
<div class="conbar"></div>
<p class="ct"><img alt="필요서류" src="https://www.calla-law.com/img/sub2_1_3.jpg"/></p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
