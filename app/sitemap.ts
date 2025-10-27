import type { MetadataRoute } from 'next';

import { getAllLessons } from '@/lib/lessons-data';

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

  const lessonLibraryRoutes = getAllLessons().map((lesson) => ({
    url: `${BASE_URL}/lessons/${lesson.slug}`,
    lastModified: updatedAt,
  }));

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE_URL}${path === '/' ? '' : path}`,
      lastModified: updatedAt,
    })),
    ...standaloneLessonRoutes.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: updatedAt,
    })),
    ...lessonLibraryRoutes,
  ];
}
