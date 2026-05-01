import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '사실혼 | 법률사무소 카라',
  description: '법률사무소 카라 사실혼',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub2.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 이혼 <span>›</span> <span>사실혼</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>사실혼</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">사실혼</div>
</div>
<div class="common-con">
<div class="con-maintxt bg04">사실혼이란 혼인신고를 하지 않고 부부생활을 하는 것을 말하며 혼인의사 없이<br/>단순히 공동생활을 하는 동거와는 차이가 있습니다.<br/>
			동거의 경우 부부공동생활의 실체가 없어 법적으로 보호를 받기 어렵지만<br/>사실혼의 경우 법률혼에서 인정되는 권리와 의무의 일부를 인정받을 수 있습니다.</div>
</div>
<div class="common-con">
<div class="con-tit">사실혼 관계에서 인정받을 수 있는 권리</div>
<div class="conbar"></div>
<p>사실혼 부부는 법률혼 상태의 부부와 마찬가지로 혼인 파탄 시 공동재산에 대한 재산분할을 청구할 수 있으며, 혼인파탄에 대한 위자료를 청구할 수 있습니다. 그러나 사실혼은 친족 관계가 발생하지 않으므로 사실혼 배우자가 사망할 경우 상속권이 발생하지 않습니다. 단, 사실혼 배우자라도 공무원 유족연금의 수령은 가능합니다.</p>
</div>
<div class="common-con">
<div class="con-tit">사실혼 관계에서 태어난 자녀</div>
<div class="conbar"></div>
<p class="ct mb10">사실혼 부부 사이에서 출생한 자녀는 ‘혼인 외의 출생자’가 됩니다.</p>
<p class="ct"><img alt="" src="https://www.calla-law.com/img/sub2_4_2.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">사실혼 해소 절차</div>
<div class="conbar"></div>
<p>사실혼 부부는 법률상 부부가 아니므로 가정법원의 이혼 확인 절차를 받을 필요 없이 당사자의 합의나 통보로 인해 혼인관계를 자유롭게 해소할 수 있습니다. 그러나 사실혼 관계를 부당하게 해소 당한 경우 이혼과 마찬가지로 상대방에게 위자료를 청구할 수 있고, 부부공동재산에 대한 재산분할을 청구할 수 있으며, 미성년 자녀의 친권 및 양육권자 지정을 청구할 수 있습니다.</p>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
