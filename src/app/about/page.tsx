import React from 'react';
import inner from '../inner.module.css';

export const metadata = {
  title: '카라소개 | 법률사무소 카라',
  description: '법률사무소 카라 카라소개',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub1.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 카라소개 <span>›</span> <span>카라소개</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>카라소개</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">카라소개</div>
</div>
<div class="common-con">
<div class="con-tit">인사말</div>
<div class="conbar"></div>
<p class="ct">법률사무소를 선택할 때 고려해야 할 부분에는 어떤 것이 있을까요?<br/>
			실력, 경험, 책임감을 제외하면 딱히 떠오르는 것이 없나요?<br/>
			아니면 실력, 경험을 공증받은 '전문' 타이틀을 가진 변호사를 선택해야 하고,<br/>
			변호사가 아닌 사무장 등이 상담 및 법률행위를 진행하는 곳은 지양하고자 하시나요?<br/><br/>

			‘다른 곳처럼 의뢰인과의 소통을 통해 열정을 갖고<br/>
			최선을 다하겠다.’는 진부한 말씀을 드리진 않겠습니다.<br/><br/>

			'이혼·상속' 전문 대표변호사가 직접 모든 과정을 진행하는<br/>
			저희 카라의 가장 큰 장점은<br/>
			고객이 처한 상황을 여러 각도로 검토하여<br/>
			가장 적합한 제안을 드릴 수 있다는 것입니다.<br/><br/>

			개인정보보호가 강화되었고 일반적인 법률 지식이 높아진 요즘 시대에는<br/>
			누가 얼마나 전문적으로 접근하느냐에 따라 결과가 갈리게 됩니다.<br/><br/>

			단순히 문의 사항에 대한 답변이나 법률 지식은<br/>
			인터넷에 조금만 검색해도 알 수 있기 때문에<br/>
			저희 카라의 진행방향은 법률 전문가로서<br/>
			일반인이 미처 생각하지 못한 문제점들을 발견하고<br/>
			어떠한 증거를 어떻게 준비해야하는지,<br/>
			또한 비전문가가 알지 못할 수 있는 쟁점들을 파악하는<br/>
			종합적인 컨설팅을 통해 의뢰인이 만족하는 결과들을 도출하고 있습니다.<br/><br/>

			카라는 정직을 최우선으로 고객의 신뢰를 통해 성장해 온 만큼<br/>
			형식적으로 상담하거나 이길 수 없는 사건을 이길 수 있다고 과장하면서<br/>
			사건을 수임하지 않습니다.<br/><br/>

			법률적으로 어려움에 처하셨거나 계획이 있으시다면<br/> 
			언제든 열려있으니 주저 말고 연락 주세요.<br/>
			믿고 맡겨주시면 카라가 도와드리겠습니다.</p><p class="ct"><br/></p><p class="ct"><b>대표변호사</b></p><p class="ct"><img alt="7e5841ad79a31f59d22b3cf5f61decd5_1732691565_1631.png" src="http://www.calla-law.com/data/editor/2411/7e5841ad79a31f59d22b3cf5f61decd5_1732691565_1631.png" title="7e5841ad79a31f59d22b3cf5f61decd5_1732691565_1631.png"/><br/></p></div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
