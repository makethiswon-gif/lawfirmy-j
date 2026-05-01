import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '혼인무효, 혼인취소 | 법률사무소 카라',
  description: '법률사무소 카라 혼인무효, 혼인취소',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub4.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 기타 소송 <span>›</span> <span>혼인무효, 혼인취소</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>혼인무효, 혼인취소</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">혼인무효, 혼인취소</div>
</div>
<div class="common-con">
<div class="con-maintxt bg14"></div>
</div>
<div class="common-con">
<p class="ct"><img alt="sub3_9_2.png" src="https://www.calla-law.com/img/sub3_9_2.png"/></p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
