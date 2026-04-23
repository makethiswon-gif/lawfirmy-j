import { MetadataRoute } from 'next';
import { columns } from '@/data/columns';
import { lawyers } from '@/data/lawyers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lawfirmjunghoon.kr';

  // 정적 라우트
  const routes = [
    '',
    '/about',
    '/practice-areas',
    '/professionals',
    '/news',
    '/columns',
    '/contact',
    '/locations',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 칼럼 동적 라우트
  const columnRoutes = columns.map((column) => ({
    url: `${baseUrl}/columns/${column.id}`,
    // 칼럼의 작성일을 lastModified로 사용할 수 있으나, Date 객체로 변환 필요
    lastModified: new Date(column.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 변호사 동적 라우트
  const lawyerRoutes = lawyers.map((lawyer) => ({
    url: `${baseUrl}/professionals/${lawyer.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...lawyerRoutes, ...columnRoutes];
}
