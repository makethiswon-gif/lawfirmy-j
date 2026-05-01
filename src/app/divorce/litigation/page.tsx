import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '재판상이혼 | 법률사무소 카라',
  description: '법률사무소 카라 재판상이혼',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub2.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 이혼 <span>›</span> <span>재판상이혼</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>재판상이혼</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">재판상 이혼</div>
</div>
<div class="common-con">
<div class="con-maintxt bg02">재판상이혼은 이혼의사에 대한 합치가 되지 않아도,<br/>민법 제840조에 규정된 이혼 사유가 있을 때에 법원에 소를 제기하여 부부관계를 해소하는 절차를 말합니다.</div>
</div>
<div class="common-con">
<div class="con-tit">재판상 이혼 절차</div>
<div class="conbar"></div>
<p class="ct"><img alt="재판상 이혼 절차" src="https://www.calla-law.com/img/sub2_2_2.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">재판상 이혼 사유</div>
<div class="conbar"></div>
<p class="ct"><img alt="재판상 이혼 사유" src="https://www.calla-law.com/img/sub2_2_3.png"/></p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
