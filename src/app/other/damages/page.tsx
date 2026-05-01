import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '부정행위에 의한 손해배상 | 법률사무소 카라',
  description: '법률사무소 카라 부정행위에 의한 손해배상',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub4.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 기타 소송 <span>›</span> <span>부정행위에 의한 손해배상</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>부정행위에 의한 손해배상</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">부정행위에 의한 손해배상</div>
</div>
<div class="common-con">
<div class="con-maintxt bg15">형법제241조에 규정된 간통죄가 폐지되면서 배우자가 외도를 하더라도 형사 처벌은 불가능하게 되었습니다. 이로 인해 현재 배우자의 외도로 인한 이혼이 증가추세에 있으며, 민사상 손해배상 청구를 통해서만 보상을 받을 수 있게 되었습니다. </div>
</div>
<div class="common-con">
<div class="con-tit">외도한 배우자와 상대방에게 대처할 수 있는 방법</div>
<div class="conbar"></div>
<p class="ct"><img alt="sub3_10_2.png" src="https://www.calla-law.com/img/sub3_10_2.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">부정행위로 인한 위자료</div>
<div class="conbar"></div>
<p class="ct"><img alt="sub3_10_3.png" src="https://www.calla-law.com/img/sub3_10_3.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">상간자 소송에서 주의해야 할 점</div>
<div class="conbar"></div>
<p class="mb20"><span class="gr">01</span> <b>유책배우자와 상간자는 부진정 연대관계에 있기 때문에 상간자 소송을 진행하기 전에 유책배우자로부터 위자료를 미리 지급받았다면 위자료 청구 소송이 기각될 수 있습니다. 따라서 이혼 소송에서 재산분할과 위자료를 명확히 구분하는 한편 위자료 명목으로 받는 금액의 비중을 조절하는 것이 중요합니다.</b></p>
<p><span class="gr">02</span> <b>상간자의 불법 행위를 인정받기 위해서는 상간자가 만난 사람이 기혼임을 알았다는 증거가 필요합니다. 무리하게 증거를 수집하는 과정에서 명예훼손, 주거침입, 폭행 등 혐의로 고소당할 수 있으므로 각별한 주의가 필요합니다.</b></p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
