import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 17,
  "title": "Lesson 17: Advanced Pacing: Mastering Tension and Release",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 17",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–16",
  "description": "This placeholder marks the upcoming deep dive on Advanced Pacing: Mastering Tension and Release. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 17: Advanced Pacing: Mastering Tension and Release | AI Writers Retreat",
  "description": "Placeholder content for Lesson 17 of the DIY MFA program: Advanced Pacing: Mastering Tension and Release."
} as const;

export default function Lesson17Page() {
  return <LessonPlaceholder {...lesson} />;
}
