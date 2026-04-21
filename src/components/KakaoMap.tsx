'use client';

import { useEffect, useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

interface KakaoMapProps {
  address: string;
  name: string;
}

export default function KakaoMap({ address, name }: KakaoMapProps) {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY || '',
    libraries: ['services'],
  });

  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (loading || error) return;
    
    if (!window.kakao || !window.kakao.maps || !window.kakao.maps.services) {
      console.error('Kakao Maps API not loaded. Check your API key.');
      return;
    }

    try {
      const geocoder = new window.kakao.maps.services.Geocoder();

      // Extract raw address string to ensure highest hit rate
      // "(61445) 광주광역시 동구 지산로 73 동명빌딩 1층/5층" -> "광주광역시 동구 지산로 73"
      let searchAddress = address;
      const bracketMatch = address.match(/\(.*?\)\s*(.*)/);
      if (bracketMatch) {
         searchAddress = bracketMatch[1];
      }
      
      // Remove detail building numbers/floors to help geocoder
      const parts = searchAddress.split(' ');
      if (parts.length > 3) {
         // rough heuristic: "광주광역시 동구 지산로 73"
         searchAddress = parts.slice(0, 4).join(' ');
      }

      geocoder.addressSearch(searchAddress, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setCoords({
            lat: parseFloat(result[0].y),
            lng: parseFloat(result[0].x),
          });
        } else {
          console.error('Failed to geocode address:', searchAddress, status);
          // Fallback to average location (Gwangju area roughly)
          setCoords({ lat: 35.1500, lng: 126.9200 });
        }
      });
    } catch (err) {
      console.error('Geocoding error:', err);
    }
  }, [address, loading, error]);

  if (error || !process.env.NEXT_PUBLIC_KAKAO_APP_KEY) {
    return (
      <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', color: '#666', border: '1px solid #ddd' }}>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>카카오맵 API 초기화 대기중</p>
        <p style={{ fontSize: '0.85rem' }}>개발자 센터에서 발급받은 <strong>NEXT_PUBLIC_KAKAO_APP_KEY</strong>를 .env.local에 설정해주세요.</p>
      </div>
    );
  }

  if (!coords) {
    return (
      <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', color: '#999' }}>
        지도를 불러오는 중입니다...
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px' }}>
      <Map
        center={coords}
        style={{ width: '100%', height: '100%' }}
        level={3}
      >
        <MapMarker position={coords}>
          <div style={{ padding: "5px", color: "#000", fontSize: "13px", fontWeight: "600", textAlign: "center", width: "150px" }}>
            {name}
          </div>
        </MapMarker>
      </Map>
    </div>
  );
}
