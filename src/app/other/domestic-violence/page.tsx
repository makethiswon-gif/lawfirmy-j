import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '가정폭력 | 법률사무소 카라',
  description: '법률사무소 카라 가정폭력',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub4.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 기타 소송 <span>›</span> <span>가정폭력</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>가정폭력</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">가정폭력</div>
</div>
<div class="common-con">
<div class="con-maintxt bg13">가정폭력은 가정 안에서 이루어지는 폭력으로 민법 제840조 제3호, 제6호의 재판상 이혼사유에 해당합니다. 피해자는 위자료를 받을 수 있음은 물론 이혼소송과 별도로 가해자를 고소하여 형사적으로 처벌할 수도 있으며,  임시보호처분을 받을 수 있습니다.</div>
</div>
<div class="common-con">
<p class="ct"><img alt="sub3_8_2.png" src="https://www.calla-law.com/img/sub3_8_2.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">임시보호처분</div>
<div class="conbar"></div>
<p>가정폭력으로 인한 이혼의 경우, 피해자가 가장 두려워하는 것은 상대방이 보복하려고 찾아와 행패를 부리지 않을까 하는 점입니다. 소송기간 중 접근금지가처분 신청을 통해 상대방으로부터의 접근을 금지시킬 수 있으며, 이와 별도로 직접 법원에 피해자보호명령을 청구하여 법원에서 피해자 보호조치를 결정할 수 있게 할 수 있습니다.</p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
