import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 54,
  "title": "Lesson 54: Finding Your Literary Community",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 54",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–53",
  "description": "This placeholder marks the upcoming deep dive on Finding Your Literary Community. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 54: Finding Your Literary Community | AI Writers Retreat",
  "description": "Placeholder content for Lesson 54 of the DIY MFA program: Finding Your Literary Community."
} as const;

export default function Lesson54Page() {
  return <LessonPlaceholder {...lesson} />;
}
