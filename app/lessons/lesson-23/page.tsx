import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 23,
  "title": "Lesson 23: Workshop I: Critiquing Your First 15 Pages",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 23",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–22",
  "description": "This placeholder marks the upcoming deep dive on Workshop I: Critiquing Your First 15 Pages. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 23: Workshop I: Critiquing Your First 15 Pages | AI Writers Retreat",
  "description": "Placeholder content for Lesson 23 of the DIY MFA program: Workshop I: Critiquing Your First 15 Pages."
} as const;

export default function Lesson23Page() {
  return <LessonPlaceholder {...lesson} />;
}
