import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 57,
  "title": "Lesson 57: The Art of the Public Reading",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 57",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–56",
  "description": "This placeholder marks the upcoming deep dive on The Art of the Public Reading. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 57: The Art of the Public Reading | AI Writers Retreat",
  "description": "Placeholder content for Lesson 57 of the DIY MFA program: The Art of the Public Reading."
} as const;

export default function Lesson57Page() {
  return <LessonPlaceholder {...lesson} />;
}
