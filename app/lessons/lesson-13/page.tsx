import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 13,
  "title": "Lesson 13: Choosing Your Lane: Genre, Audience, and Reader Expectations",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 13",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–12",
  "description": "This placeholder marks the upcoming deep dive on Choosing Your Lane: Genre, Audience, and Reader Expectations. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 13: Choosing Your Lane: Genre, Audience, and Reader Expectations | AI Writers Retreat",
  "description": "Placeholder content for Lesson 13 of the DIY MFA program: Choosing Your Lane: Genre, Audience, and Reader Expectations."
} as const;

export default function Lesson13Page() {
  return <LessonPlaceholder {...lesson} />;
}
