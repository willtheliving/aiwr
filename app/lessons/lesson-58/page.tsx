import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 58,
  "title": "Lesson 58: Teaching and Mentoring: Paying It Forward",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 58",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–57",
  "description": "This placeholder marks the upcoming deep dive on Teaching and Mentoring: Paying It Forward. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 58: Teaching and Mentoring: Paying It Forward | AI Writers Retreat",
  "description": "Placeholder content for Lesson 58 of the DIY MFA program: Teaching and Mentoring: Paying It Forward."
} as const;

export default function Lesson58Page() {
  return <LessonPlaceholder {...lesson} />;
}
