import React from 'react';
import inner from '../inner.module.css';

export const metadata = {
  title: '상속재산분할 | 법률사무소 카라',
  description: '법률사무소 카라 상속재산분할',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub3.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 상속 <span>›</span> <span>상속재산분할</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>상속재산분할</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">상속재산분할</div>
</div>
<div class="common-con">
<div class="con-maintxt bg06">상속재산분할이란 피상속인이 사망하면서 남긴 재산을 상속인들끼리 배분해서 각자 단독 소유로 보유하는 절차를 말합니다.
피상속인의 상속재산은 원칙적으로 상속인들의 공유가 되며, 피상속인이 남긴 적법한 유언이 없는 경우, 상속인들은 협의를 통해 상속재산을 나누어 가지게 됩니다.
이러한 상속재산 분할협의는 반드시 모든 상속인들이 참여하여 동의를 하는 경우에만 유효하고, 한명이라도 반대를 할 경우 상속인 중 일부가 상속재산분할심판을 청구
하여 법원의 판결에 따라 보다 신속하게 상속재산을 분할 할 수 있습니다.</div>
</div>
<div class="common-con">
<div class="con-tit">상속재산분할의 방법</div>
<div class="conbar"></div>
<p class="mb20">상속재산분할심판이 청구되면 담당재판부는 망인이 사망한 상속개시시를 기준으로 구체적 상속분을 확정하고, 분할을 하는 때를 기준으로 실제 상속재산의 가액을 평가합니다. <br/>법원은 상속재산을 각 상속인들이 지분대로 나누는 현물분할, 상속재산을 경매로 매각하고 그 대금을 각 상속인들의 지분대로 나누는 가액분할, 상속재산을 특정 상속인의 소유로 하고 다른 상속인들에게 상속분에 상응하는 현금을 지급하도록 하는 대상분할, 세 가지 방법 중에서 가장 합리적이라고 생각되는 방법을 재량으로 결정하게 됩니다.</p>
<p class="ct"><img alt="" src="https://www.calla-law.com/img/sub3_1_2.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">구체적 상속분의 결정</div>
<div class="conbar"></div>
<p>민법은 상속인들 간의 상속분을 균분으로 정하고, 배우자의 경우에 50%를 가산하도록 규정하고 있습니다. 다만 망인의 생전에 증여를 받은 상속인들에게는 그 증여 받은 가액을 특별수익으로 공제하고, 망인을 특별히 부양하거나 망인의 재산 유지 또는 증가에 특별한 기여를 한 상속인들에게는 그 기여분을 인정하여 상속분을 증액하도록 법정상속분을 조정하고 있습니다.<br/>
			즉, 망인이 남긴 재산을 확정하여 법정상속분에 따른 상속재산을 파악한 뒤, 각 상속인들이 망인으로부터 증여 받은 특별수익을 공제하고, 각 상속인들의 기여분을 고려하여 가산한 결과가 구체적 상속분으로 확정하게 됩니다.</p>
</div>
<div class="common-con">
<div class="con-tit">기여분의 결정</div>
<div class="conbar"></div>
<p>망인을 특별히 부양하거나 망인의 재산 유지 또는 증가에 특별히 기여를 한 상속인이 상속재산분할심판과 함께 기여분 결정을 청구하여 기여분을 인정받으면, 그 기여분에 해당하는 재산은 그 상속인에게 분할되고, 나머지 상속인들은 기여분을 공제한 남은 재산에서 법정상속분에 따라 분할을 받게 됩니다.<br/>
			결론적으로 기여분을 인정받은 상속인은 <b>[자신의 기여분에 해당하는 재산 + 나머지 재산 중 자신의 상속분에 해당하는 재산]</b>을 상속받게 되는 것입니다.</p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
