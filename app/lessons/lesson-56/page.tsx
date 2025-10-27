import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 56,
  "title": "Lesson 56: Financial Planning for Writers: Diversifying Income Streams",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 56",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–55",
  "description": "This placeholder marks the upcoming deep dive on Financial Planning for Writers: Diversifying Income Streams. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 56: Financial Planning for Writers: Diversifying Income Streams | AI Writers Retreat",
  "description": "Placeholder content for Lesson 56 of the DIY MFA program: Financial Planning for Writers: Diversifying Income Streams."
} as const;

export default function Lesson56Page() {
  return <LessonPlaceholder {...lesson} />;
}
