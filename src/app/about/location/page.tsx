import React from 'react';
import inner from '../../inner.module.css';

export const metadata = {
  title: '오시는길 | 법률사무소 카라',
  description: '법률사무소 카라 오시는길',
};

export default function SubPage() {
  return (
    <>
      <div className={inner.pageHeader} style={{ backgroundImage: "url('/img/bg_sub1.jpg')" }}>
        <div className="container">
          <div className={inner.breadcrumb} dangerouslySetInnerHTML={{ __html: 'HOME <span>›</span> 카라소개 <span>›</span> <span>오시는길</span>' }}>
          </div>
          <h1 className={inner.pageTitle}>오시는길</h1>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <div className="sub-contentwr" dangerouslySetInnerHTML={{ __html: `<div id="ctt_con">
<div class="sub-contentwr">
<div class="sub-content">
<div class="common-tit">
<div class="calla-name">CALLA LAW OFFICE</div>
<div class="page-tit">오시는길</div>
</div>
<div class="common-con">
<div class="location-info">
<!-- * 카카오맵 - 지도퍼가기 -->
<!-- 1. 지도 노드 -->
<div class="root_daum_roughmap root_daum_roughmap_landing" id="daumRoughmapContainer1587098464381" style="width:100%;"></div>
<!--
					2. 설치 스크립트
					* 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
				-->
<script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
<!-- 3. 실행 스크립트 -->
<script charset="UTF-8">
					new daum.roughmap.Lander({
						"timestamp" : "1587098464381",
						"key" : "xxyc",
						"mapWidth" : "auto",
						"mapHeight" : "420"
					}).render();
				</script>
<div class="stit">CALLA LAW OFFICE</div>
<div class="btit">CONTACT US</div>
<p>법률사무소 카라 상담안내 및 오시는길을 확인해 보세요.</p>
<table class="table01">
<tbody>
<tr>
<th>문의전화</th>
<td><b>02-594-2353</b></td>
</tr>
<tr>
<th>긴급전화</th>
<td><b>010-2108-2353</b></td>
</tr>
<tr>
<th>업무시간</th>
<td>
<table class="table02">
<tbody>
<tr>
<td>평일</td>
<td>am 09:00 ~ pm 07:00<br/><span class="gray">(야간예약방문상담가능)</span></td>
</tr>
<tr>
<td>주말 / 공휴일</td>
<td><span class="gr">전화상담 및 예약방문상담가능</span></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<th>주소</th>
<td>도로명 : 서울 서초구 강남대로 210 행복빌딩 13층 (양재역 8번출구)<br/>
         주차장 : 건물내 기계식주차 무료이용 가능 (차량크기별 제한은 전화로 문의)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div> </div>` }}>
      </div>
    </>
  );
}
