import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 45,
  "title": "Lesson 45: Building a Writer's Platform: Website, Social Media, and Newsletter Essentials",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 45",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–44",
  "description": "This placeholder marks the upcoming deep dive on Building a Writer's Platform: Website, Social Media, and Newsletter Essentials. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 45: Building a Writer's Platform: Website, Social Media, and Newsletter Essentials | AI Writers Retreat",
  "description": "Placeholder content for Lesson 45 of the DIY MFA program: Building a Writer's Platform: Website, Social Media, and Newsletter Essentials."
} as const;

export default function Lesson45Page() {
  return <LessonPlaceholder {...lesson} />;
}
