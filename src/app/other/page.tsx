import React from 'react';
import inner from '../inner.module.css';

export const metadata = {
  title: '친권, 양육권 | 법률사무소 카라',
  description: '법률사무소 카라 친권, 양육권',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub4.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 기타 소송 <span>›</span> <span>친권, 양육권</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>친권, 양육권</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">친권, 양육권</div>
</div>
<div class="common-con">
<div class="con-maintxt bg10">부모가 혼인 중인 때에는 부모가 친권을 공동으로 행사하지만, 이혼하는 경우 친권자 및 양육자를 지정해야 합니다. 일반적으로는 부부 중 일방으로 친권자를 정하고 친권자가 양육권까지 함께 보유하는 것이 보통이지만, 양육권을 보유하지 않은 부모도 공동친권자로 지정될 수 있습니다. </div>
</div>
<div class="common-con">
<div class="con-tit">친권자의 지정</div>
<div class="conbar"></div>
<p>협의이혼을 하는 경우 부부가 합의하여 친권자를 지정해야 하고, 합의할 수 없거나 합의가 이루어지지 않는 경우 가정법원이 직권으로 또는 당사자의 청구에 따라 친권자를 지정합니다. 재판상 이혼을 하는 경우 가정법원은 직권으로 친권자를 결정하고, 친권자가 지정된 후에도 자녀의 복리를 위해 필요한 경우 자녀의 4촌 이내의 친족의 청구에 의하여 가정 법원이 친권자를 변경할 수 있습니다.</p>
</div>
<div class="common-con">
<div class="con-tit">양육권자의 지정</div>
<div class="conbar"></div>
<p>이혼을 하는 경우 부부가 합의하여 양육자, 양육비, 면접교섭권의 행사여부 및 그 방법에 관한 사항을 결정해야 하고, 합의할 수 없거나 합의가 이루어지지 않는 경우 가정 법원이 직권으로 또는 당사자의 청구에 따라 양육에 관한 사항을 결정합니다. 법원은 친권자가 누구인가에 관계없이 자녀의 연령, 부모의 재산상황 기타 모든 사정을 고려하여 부모 중 일방을 양육자로 지정하거나 또는 쌍방 모두에게 양육 사항을 나누어 분담하게 할 수 있고, 이 경우 자녀의 복리를 우선적으로 고려하여 판단합니다. 양육자가 지정된 후에도 법원은 자녀의 복리를 위하여 필요하다고 인정하는 경우 당사자의 청구 또는 직권으로 자녀의 양육에 관한 사항을 변경하거나 다른 적당한 처분을 할 수 있고, 조정이나 재판상화해를 통하여 정해진 양육사항을 변경할 수 있습니다.</p>
</div>
<div class="common-con">
<div class="con-tit">면접교섭권</div>
<div class="conbar"></div>
<p>이혼 후 자녀를 직접 양육하지 않는 부모 중 일방은 자녀와의 면접교섭권이 인정되는데, 자녀와 만나거나 서신교환, 선물 교환, 전화통화 등을 할 수 있는 권리를 말합니다. 면접교섭권은 일차적으로 자녀의 관점에서 시기와 방법이 결정되어지며, 통상적으로 한 달에 2번 숙박면접의 형태로 이루어지고 있습니다. </p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
