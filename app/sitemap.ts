import type { MetadataRoute } from 'next';

import { getAllLessons } from '@/lib/lessons-data';
import { lessons as diyMfaLessons } from '@/lib/lessons';

const BASE_URL = 'https://aiwritersretreat.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();

  const staticRoutes = ['/', '/about', '/reading-list', '/diy-mfa', '/ai-writing-news'];

  const standaloneLessonRoutes = [
    '/lessons/lesson-1',
    '/lessons/lesson-2',
    '/lessons/lesson-3',
    '/lessons/lesson-4',
    '/lessons/lesson-5',
    '/lessons/lesson-6',
  ];

  const lessonRoutes = new Map<string, MetadataRoute.Sitemap[number]>();

  standaloneLessonRoutes.forEach((path) => {
    const url = `${BASE_URL}${path}`;
    lessonRoutes.set(url, { url, lastModified: updatedAt });
  });

  getAllLessons().forEach((lesson) => {
    const url = `${BASE_URL}/lessons/${lesson.slug}`;
    lessonRoutes.set(url, { url, lastModified: updatedAt });
  });

  diyMfaLessons.forEach((lesson) => {
    const url = `${BASE_URL}/lessons/${lesson.slug}`;
    lessonRoutes.set(url, { url, lastModified: updatedAt });
  });

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE_URL}${path === '/' ? '' : path}`,
      lastModified: updatedAt,
    })),
    ...Array.from(lessonRoutes.values()),
  ];
}
