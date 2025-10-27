import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 48,
  "title": "Lesson 48: Workshop II: Critiquing Your Final 50 Pages",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 48",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–47",
  "description": "This placeholder marks the upcoming deep dive on Workshop II: Critiquing Your Final 50 Pages. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 48: Workshop II: Critiquing Your Final 50 Pages | AI Writers Retreat",
  "description": "Placeholder content for Lesson 48 of the DIY MFA program: Workshop II: Critiquing Your Final 50 Pages."
} as const;

export default function Lesson48Page() {
  return <LessonPlaceholder {...lesson} />;
}
