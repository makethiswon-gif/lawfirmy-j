import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '양육비 | 법률사무소 카라',
  description: '법률사무소 카라 양육비',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub4.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 기타 소송 <span>›</span> <span>양육비</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>양육비</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">양육비</div>
</div>
<div class="common-con">
<div class="con-maintxt bg12">양육비는 부모가 공동으로 부담하는 것이 원칙입니다. 양육자는 비양육자에 대하여 양육비 중 적정 금액의 분담을 청구할 수 있고, 협의가 되지 않을 경우 재판부는 양육비 산정기준표상 표준양육비에 가산, 감산 요소 등을 고려하여 양육비 액수를 정하고 있습니다.</div>
</div>
<div class="common-con">
<div class="con-tit">양육비 산정기준표</div>
<div class="conbar"></div>
<p class="ct"><img alt="양육비 산정 기준표" src="https://www.calla-law.com/img/sub3_7_2.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">기본원칙</div>
<div class="conbar"></div>
<p class="ct"><img alt="기본원칙" src="https://www.calla-law.com/img/sub3_7_3.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">산정기준표 설명</div>
<div class="conbar"></div>
<p class="ct"><img alt="산정기준표" src="https://www.calla-law.com/img/sub3_7_4.png"/></p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
