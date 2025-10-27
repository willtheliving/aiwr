import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 11,
  "title": "Lesson 11: The Art of Revision II: Micro-Edits and Line-Level Polish",
  "module": "Year 1 · Semester 1 · Craft Fundamentals",
  "position": "Year 1, Semester 1, Week 11",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–10",
  "description": "This placeholder marks the upcoming deep dive on The Art of Revision II: Micro-Edits and Line-Level Polish. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 11: The Art of Revision II: Micro-Edits and Line-Level Polish | AI Writers Retreat",
  "description": "Placeholder content for Lesson 11 of the DIY MFA program: The Art of Revision II: Micro-Edits and Line-Level Polish."
} as const;

export default function Lesson11Page() {
  return <LessonPlaceholder {...lesson} />;
}
