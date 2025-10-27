import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 26,
  "title": "Lesson 26: The Ensemble Cast: Managing Multiple Points of View",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 26",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–25",
  "description": "This placeholder marks the upcoming deep dive on The Ensemble Cast: Managing Multiple Points of View. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 26: The Ensemble Cast: Managing Multiple Points of View | AI Writers Retreat",
  "description": "Placeholder content for Lesson 26 of the DIY MFA program: The Ensemble Cast: Managing Multiple Points of View."
} as const;

export default function Lesson26Page() {
  return <LessonPlaceholder {...lesson} />;
}
