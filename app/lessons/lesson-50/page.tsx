import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 50,
  "title": "Lesson 50: Formatting Your Manuscript for Submission",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 50",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–49",
  "description": "This placeholder marks the upcoming deep dive on Formatting Your Manuscript for Submission. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 50: Formatting Your Manuscript for Submission | AI Writers Retreat",
  "description": "Placeholder content for Lesson 50 of the DIY MFA program: Formatting Your Manuscript for Submission."
} as const;

export default function Lesson50Page() {
  return <LessonPlaceholder {...lesson} />;
}
