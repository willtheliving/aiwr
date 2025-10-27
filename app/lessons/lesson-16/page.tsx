import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 16,
  "title": "Lesson 16: Genre Deep Dive III: Mystery, Thriller & Horror",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 16",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–15",
  "description": "This placeholder marks the upcoming deep dive on Genre Deep Dive III: Mystery, Thriller & Horror. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 16: Genre Deep Dive III: Mystery, Thriller & Horror | AI Writers Retreat",
  "description": "Placeholder content for Lesson 16 of the DIY MFA program: Genre Deep Dive III: Mystery, Thriller & Horror."
} as const;

export default function Lesson16Page() {
  return <LessonPlaceholder {...lesson} />;
}
