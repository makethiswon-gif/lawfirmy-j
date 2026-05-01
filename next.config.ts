import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // FTP 데모 배포를 위한 정적 파일 추출 설정
  output: 'export',
  
  // /demo 폴더 하위에서 동작하도록 경로 설정
  basePath: '/demo',
  assetPrefix: '/demo/',

  // 정적 추출 시에는 Next.js 자체 이미지 최적화 서버를 쓸 수 없으므로 비활성화
  images: {
    unoptimized: true,
  },

  /* 정적 추출 시 작동하지 않는 redirects 임시 주석 처리
  async redirects() {
    return [
      {
        source: '/bbs/board.php',
        has: [
          { type: 'query', key: 'bo_table', value: 'board2' },
          { type: 'query', key: 'wr_id', value: '(?<id>.*)' }
        ],
        destination: '/columns/:id',
        permanent: true,
      },
      {
        source: '/bbs/board.php',
        has: [
          { type: 'query', key: 'bo_table', value: 'board2' }
        ],
        destination: '/columns',
        permanent: true,
      }
    ]
  }
  */
};

export default nextConfig;
