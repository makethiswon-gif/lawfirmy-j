import React from 'react';
import Link from 'next/link';

export default function SuccessBoard() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 20px' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '20px', color: '#111' }}>승소사례</h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '50px' }}>카라 법률사무소의 다양한 승소사례를 확인하세요.</p>
        
        <div className="board-grid-3">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '220px', backgroundColor: '#e9e9e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#aaa' }}>승소사례 이미지</span>
              </div>
              <div style={{ padding: '30px' }}>
                <span style={{ display: 'inline-block', padding: '5px 12px', backgroundColor: '#4fadbb', color: '#fff', fontSize: '14px', borderRadius: '4px', marginBottom: '15px' }}>이혼/상속</span>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#111', marginBottom: '15px', lineHeight: 1.4 }}>상대방의 유책사유를 입증하여 위자료 전액 승소한 사례</h3>
                <p style={{ fontSize: '15px', color: '#888', marginBottom: '20px' }}>2024.11.20</p>
                <Link href="#" style={{ color: '#4fadbb', fontWeight: 500 }}>자세히 보기 →</Link>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '10px' }}>
          <span style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4fadbb', color: '#fff', borderRadius: '50%' }}>1</span>
          <span style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', color: '#666', borderRadius: '50%', border: '1px solid #ddd' }}>2</span>
          <span style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', color: '#666', borderRadius: '50%', border: '1px solid #ddd' }}>3</span>
        </div>
      </div>
    </div>
  );
}
