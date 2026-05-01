import React from 'react';

export default function CounselBoard() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '50px 20px' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '20px', color: '#111', textAlign: 'center' }}>온라인 상담신청</h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '50px', textAlign: 'center' }}>어려운 법률 문제, 카라와 함께 해결하세요. 최대한 빠르게 답변해 드리겠습니다.</p>
        
        <form className="counsel-form" style={{ backgroundColor: '#f9f9f9', borderRadius: '12px', border: '1px solid #eaeaea' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>이름 <span style={{color: 'red'}}>*</span></label>
            <input type="text" placeholder="이름을 입력해주세요" style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px' }} />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>연락처 <span style={{color: 'red'}}>*</span></label>
            <input type="text" placeholder="010-0000-0000" style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>상담분야</label>
            <select style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', backgroundColor: '#fff' }}>
              <option>이혼상담</option>
              <option>상속상담</option>
              <option>기타소송</option>
            </select>
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>상담내용 <span style={{color: 'red'}}>*</span></label>
            <textarea placeholder="상담 내용을 자세히 적어주시면 더 정확한 답변이 가능합니다." style={{ width: '100%', height: '200px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', resize: 'none' }}></textarea>
          </div>
          
          <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="agree" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
            <label htmlFor="agree" style={{ fontSize: '15px', color: '#555' }}>개인정보 수집 및 이용에 동의합니다.</label>
          </div>
          
          <button type="button" style={{ width: '100%', padding: '20px', backgroundColor: '#4fadbb', color: '#fff', fontSize: '18px', fontWeight: 700, border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            상담 신청하기
          </button>
        </form>
      </div>
    </div>
  );
}
