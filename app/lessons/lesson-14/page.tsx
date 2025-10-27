import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 14,
  "title": "Lesson 14: Genre Deep Dive I: Literary & Commercial Fiction",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 14",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–13",
  "description": "This placeholder marks the upcoming deep dive on Genre Deep Dive I: Literary & Commercial Fiction. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 14: Genre Deep Dive I: Literary & Commercial Fiction | AI Writers Retreat",
  "description": "Placeholder content for Lesson 14 of the DIY MFA program: Genre Deep Dive I: Literary & Commercial Fiction."
} as const;

export default function Lesson14Page() {
  return <LessonPlaceholder {...lesson} />;
}
