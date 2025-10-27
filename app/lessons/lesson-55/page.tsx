import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 55,
  "title": "Lesson 55: From One Project to the Next: How to Keep Writing",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 55",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–54",
  "description": "This placeholder marks the upcoming deep dive on From One Project to the Next: How to Keep Writing. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 55: From One Project to the Next: How to Keep Writing | AI Writers Retreat",
  "description": "Placeholder content for Lesson 55 of the DIY MFA program: From One Project to the Next: How to Keep Writing."
} as const;

export default function Lesson55Page() {
  return <LessonPlaceholder {...lesson} />;
}
