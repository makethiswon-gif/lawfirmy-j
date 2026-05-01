import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '카라의 특별함 | 법률사무소 카라',
  description: '법률사무소 카라 카라의 특별함',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub1.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 카라소개 <span>›</span> <span>카라의 특별함</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>카라의 특별함</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">카라의 특별함</div>
</div>
<div class="common-con">
<p class="ct"><img alt="" src="https://www.calla-law.com/img/sub1_3_1.png"/></p>
</div>
<div class="gray-bg">
<div class="common-con">
<p class="ct"><img alt="" src="https://www.calla-law.com/img/sub1_3_2.jpg"/></p>
</div>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
