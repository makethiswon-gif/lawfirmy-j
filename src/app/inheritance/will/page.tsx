import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '유언 | 법률사무소 카라',
  description: '법률사무소 카라 유언',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub3.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 상속 <span>›</span> <span>유언</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>유언</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">유언</div>
</div>
<div class="common-con">
<div class="con-maintxt bg08">유언이란 사망과 동시에 일정한 법률상의 효과를 발생시키기 위한 생전의 자유로운 의사표시로서, 만 17세 이상이면 단독으로 유언할 수 있고, 언제든지 이를 변경 또는 철회할 수 있습니다. 민법은 유언의 방식을 엄격하게 규정하고 있고, 이 방식을 위반한 유언은 효력이 없습니다.</div>
</div>
<div class="common-con">
<div class="con-tit">유언의 종류 및 방식</div>
<div class="conbar"></div>
<p class="ct"><img alt="" src="https://www.calla-law.com/img/sub3_3_2.png"/></p>
</div>
<div class="common-con">
<div class="con-tit">유언무효확인소송</div>
<div class="conbar"></div>
<p class="mb20">유언무효확인소송이란 유언이 존재하지만 민법이 정한 방식을 지키지 않거나 유언자가 유언 당시 의사능력이 흠결되는 등으로 말미암아 그 유언의 효력이 없는 것을 증명하는 소송을 말합니다. 만일 무효인 유언에 의하여 법정상속분대로 받지 못할 경우에는 유언무효확인청구 소송을 통하여 상속분을 확보할 수 있습니다.</p>
<p><b>[무효사유]</b></p>
<div class="jaesanbox">
<div class="jaesan-tit">
<span class="gr">01</span> <span>방식을 갖추지 않은 유언</span>
</div>
<p>유언이 존재하지만 그 방식의 일부에 흠이 있거나 누락이 있는 경우 그 유언은 무효입니다.</p>
</div>
<div class="jaesanbox">
<div class="jaesan-tit">
<span class="gr">02</span> <span>유언무능력자의 유언, 수증결격자에 대한 유언</span>
</div>
<p>17세 미만자가 한 유언, 의사무능력자의 유언, 수증결격자에 대한 유언은 모두 무효입니다.</p>
</div>
<div class="jaesanbox">
<div class="jaesan-tit">
<span class="gr">03</span> <span>선량한 풍속 기타 사회질서에 위반하는 내용의 유언</span>
</div>
</div>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
