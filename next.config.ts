import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
