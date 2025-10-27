import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 42,
  "title": "Lesson 42: Working with a Critique Partner for a Full Manuscript Read",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 42",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–41",
  "description": "This placeholder marks the upcoming deep dive on Working with a Critique Partner for a Full Manuscript Read. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 42: Working with a Critique Partner for a Full Manuscript Read | AI Writers Retreat",
  "description": "Placeholder content for Lesson 42 of the DIY MFA program: Working with a Critique Partner for a Full Manuscript Read."
} as const;

export default function Lesson42Page() {
  return <LessonPlaceholder {...lesson} />;
}
