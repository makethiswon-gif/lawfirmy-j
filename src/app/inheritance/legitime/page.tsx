import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '유류분반환 | 법률사무소 카라',
  description: '법률사무소 카라 유류분반환',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub3.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 상속 <span>›</span> <span>유류분반환</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>유류분반환</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">유류분 반환</div>
</div>
<div class="common-con">
<div class="con-maintxt bg07">유류분이란, 망인의 재산 처분의 자유를 일정 부분 제한하면서, 상속인에게 귀속되는 것이 법으로 보장된 일정비율의 상속재산을 말합니다. 유류분권을 사전에 포기하는 것은 허용되지 않고, 상속결격 및 상속 포기자에게는 유류분청구가 인정되지 않으며, 대습상속인도 피대습자에게 유류분권이 인정되는 범위내에서 유류분권이 인정됩니다.</div>
</div>
<div class="common-con">
<div class="con-tit">유류분의 산정방법</div>
<div class="conbar"></div>
<div class="calculation01">유류분침해액(부족액) = (유류분 산정의 기초가 되는 재산 × 유류분비율) - 특별수익액</div>
<div class="jaesanbox">
<div class="jaesan-tit">
<span class="gr">01</span> <span>유류분 산정의 기초가 되는 재산</span>
</div>
<div class="calculation02">상속개시당시 피상속인의 적극재산 가액 + 증여재산 가액 - 상속채무 전액</div>
</div>
<div class="jaesanbox">
<div class="jaesan-tit">
<span class="gr">02</span> <span>산입될 증여재산</span>
</div>
<p>증여계약 시점 기준 상속개시 전 1년 동안에 행한 증여는 모두 산입되고, 상속 개시 전 1년 이전의 증여라도 당사자 쌍방이 유류분 권리자에게 손해를 가할 것을 알고 한 증여는 산입됩니다. 공동상속인 중 피상속인으로부터 생전 증여를 받아 특별수익한 자가 있는 경우, 증여시점이나 유류분 권리자에게 손해를 가할 것임을 알았는지 여부를 불문하고 모두 기초재산에 산입됩니다.</p>
</div>
<div class="jaesanbox">
<div class="jaesan-tit">
<span class="gr">03</span> <span>상속인에게 보장된 유류분 비율</span>
</div>
<table><tbody><tr><th>순서</th>
<th>상속인</th>
<th>유류분 비율</th>
</tr><tr><td>01</td>
<td>피상속인의 직계비속</td>
<td>법정상속분 x 1/2</td>
</tr><tr><td>02</td>
<td>피상속인의 직계존속</td>
<td>법정상속분 x 1/3</td>
</tr><tr><td>03</td>
<td>피상속인의 형제자매</td>
<td>법정상속분 x 1/3</td>
</tr><tr><td colspan="3">* 피상속인의 배우자가 있는 경우 1순위 또는 2순위 유류분 권리자와 함께 유류분 권리를 갖게 되며,<br/>그 유류분 비율은 법정상속분의 1/2 입니다.</td>
</tr></tbody></table></div>
<div class="jaesanbox">
<div class="jaesan-tit">
<span class="gr">04</span> <span>특별수익액</span>
</div>
<p>유류분 반환 청구자 자신이 피상속인 생전에 받았던 특별수익은 유류분 침해액에서 제외됩니다. 여기서 중요한 점은 재산 중 어느 범위까지가 특별수익으로 인정되는지 여부입니다. 이는 피상속인과 상속인들의 자산, 수입, 생활수준, 가정상황 및 상속인들 사이의 형평 등을 종합적으로 고려하여 결정됩니다. 그 동안의 사례를 보면, 부모가 자녀에게 단순 생활비, 선물 등을 주는 행위는 부양의무를 이행한 것으로 보아 특별수익으로 인정하지 않았지만, 사업자금, 주택구입 자금, 혼인자금 등을 증여한 것은 특별 수익에 해당한다고 인정하였습니다.</p>
</div>
</div>
<div class="common-con">
<div class="con-tit">유류분반환청구권 행사기간</div>
<div class="conbar"></div>
<p>유류분반환청구권은 유류분 권리자가 상속이 개시된 사실 및 증여 또는 유증을 한 사실을 안 날로부터 1년 이내에 청구하여야 하고, 상속이 개시된 때로부터 10년 이내에 청구해야 합니다. 이 기간이 도과하였을 경우에는 유류분반환청구권의 소멸시효가 완성되어 더 이상 권리를 행사할 수 없습니다.</p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
