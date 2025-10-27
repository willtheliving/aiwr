import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 24,
  "title": "Lesson 24: Semester 2 Portfolio & Mid-Program Evaluation",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 24",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–23",
  "description": "This placeholder marks the upcoming deep dive on Semester 2 Portfolio & Mid-Program Evaluation. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 24: Semester 2 Portfolio & Mid-Program Evaluation | AI Writers Retreat",
  "description": "Placeholder content for Lesson 24 of the DIY MFA program: Semester 2 Portfolio & Mid-Program Evaluation."
} as const;

export default function Lesson24Page() {
  return <LessonPlaceholder {...lesson} />;
}
