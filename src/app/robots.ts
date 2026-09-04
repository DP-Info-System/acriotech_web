import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot'],
        allow: '/',
      },
      {
        userAgent: ['CCBot', 'Google-Extended', 'Bytespider', 'Applebot-Extended', 'Amazonbot'],
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/cdn-cgi/'],
      },
    ],
    sitemap: 'https://acriotech.com/sitemap.xml',
  };
}
