import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '재산분할 | 법률사무소 카라',
  description: '법률사무소 카라 재산분할',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub2.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 이혼 <span>›</span> <span>재산분할</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>재산분할</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">재산분할</div>
</div>
<div class="common-con">
<div class="con-maintxt bg03">재산분할청구권이란 부부가 혼인 중 함께 모은 재산에 대하여 자신의 기여도에 따른 재산의 분할을 청구할 수 있는 권리입니다.<br/>유책배우자라 할지라도 재산분할청구가 가능하고, 부부 사이에 재산에 관한 합의가 이루어지지 않을 경우 재산분할심판을 청구할 수 있습니다.</div>
</div>
<div class="common-con">
<div class="con-tit">재산분할 대상</div>
<div class="conbar"></div>
<p class="ct"><img alt="재산분할 대상" src="https://www.calla-law.com/img/sub2_3_2.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">재산분할청구권 행사기간</div>
<div class="conbar"></div>
<p>재산분할청구권은 이혼한 날로부터 2년이 경과한 때에는 그 권리가 소멸됩니다. 재산분할에 대한 협의 없이 이혼 신고를 마쳤다면 이혼한 날부터 2년 안에 재산분할청구 소송을 제기할 수 있습니다.</p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
