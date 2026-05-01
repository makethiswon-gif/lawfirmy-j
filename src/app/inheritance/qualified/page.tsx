import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '한정승인 | 법률사무소 카라',
  description: '법률사무소 카라 한정승인',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub3.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 상속 <span>›</span> <span>한정승인</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>한정승인</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">한정승인</div>
</div>
<div class="common-con">
<div class="con-maintxt bg10">상속의 한정승인이란 상속은 받지만, 받은 재산의 범위 내에서 채무도 상속을 받겠다는 것으로, 상속인이 상속개시를 안 날로부터 3개월 이내에 상속으로 취득하게 될 재산의 한도에서 망인의 채무 등을 변제하겠다는 것을 조건으로 상속을 승인하는 것을 말합니다.</div>
</div>
<div class="common-con">
<div class="con-tit">상속포기와의 차이점</div>
<div class="conbar"></div>
<p>상속포기를 하게 되면 애초부터 상속인이 아닌 것으로 되기 때문에 피상속인의 채무를 떠안지 않아도 되지만, 한정승인을 하게 되는 경우 상속인이 되기 때문에 피상속인의 채무를 떠안게 되지만, 상속받은 재산의 한도 안에서만 채무를 변제해야 할 책임을 갖게 됩니다. 선순위 상속인들이 모두 상속포기를 할 경우 후순위상속인들이 피상속인의 채무를 떠안기 때문에 대부분 1순위 공동상속인들 중 1인이 한정승인을, 나머지 공동상속인들이 상속포기를 하여 빚의 대물림 현상을 막고 있습니다.</p>
</div>
<div class="common-con">
<div class="con-tit">특별한정승인</div>
<div class="conbar"></div>
<p>만약 상속개시를 안 날로부터 3개월 이내에 한정승인을 하지 않을 경우 단순승인으로 의제가 되는데, 나중에 채무초과 사실을 알게 된 경우 일정한 조건하에 한정승인을 할 수 있습니다. 즉, 상속인이 상속개시가 있음을 안 날로부터 3개월 이내에 상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 알지 못하여 단순승인을 하였다가 채무초과 사실을 알게 될 경우 그 날로부터 3개월 이내에 다시 한정승인을 청구할 수 있습니다.</p>
</div>
<div class="common-con">
<div class="con-tit">한정승인 절차</div>
<div class="conbar"></div>
<p class="ct"><img alt="한정승인 절차" src="https://www.calla-law.com/img/sub3_5_2.png"/></p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
