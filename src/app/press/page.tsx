import React from 'react';
import Link from 'next/link';

export default function PressBoard() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 20px' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '20px', color: '#111' }}>언론보도</h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '50px' }}>언론이 주목하는 카라 법률사무소입니다.</p>
        
        <div className="board-grid-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '180px', backgroundColor: '#e9e9e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#aaa' }}>언론 썸네일</span>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111', marginBottom: '10px', lineHeight: 1.4 }}>[중앙일보] 유지은 변호사, 이혼소송 관련 인터뷰</h3>
                <p style={{ fontSize: '14px', color: '#888' }}>2024.11.20</p>
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
