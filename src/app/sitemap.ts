import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.calla-law.com';

  // 정적 라우트
  const routes = [
    '',
    '/about',
    '/about/lawyer',
    '/about/location',
    '/about/special',
    '/divorce',
    '/divorce/property',
    '/divorce/litigation',
    '/divorce/common-law',
    '/divorce/international',
    '/inheritance',
    '/inheritance/legitime',
    '/inheritance/qualified',
    '/inheritance/renunciation',
    '/inheritance/will',
    '/other',
    '/other/damages',
    '/other/annulment',
    '/other/domestic-violence',
    '/other/child-support',
    '/counsel',
    '/contact',
    '/press',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
