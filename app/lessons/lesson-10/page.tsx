import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 10,
  "title": "Lesson 10: The Art of Revision I: Macro-Edits and Re-Visioning",
  "module": "Year 1 · Semester 1 · Craft Fundamentals",
  "position": "Year 1, Semester 1, Week 10",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–9",
  "description": "This placeholder marks the upcoming deep dive on The Art of Revision I: Macro-Edits and Re-Visioning. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 10: The Art of Revision I: Macro-Edits and Re-Visioning | AI Writers Retreat",
  "description": "Placeholder content for Lesson 10 of the DIY MFA program: The Art of Revision I: Macro-Edits and Re-Visioning."
} as const;

export default function Lesson10Page() {
  return <LessonPlaceholder {...lesson} />;
}
