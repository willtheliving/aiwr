import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 38,
  "title": "Lesson 38: Thesis Drafting III: Writing Toward the Climax",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 38",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–37",
  "description": "This placeholder marks the upcoming deep dive on Thesis Drafting III: Writing Toward the Climax. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 38: Thesis Drafting III: Writing Toward the Climax | AI Writers Retreat",
  "description": "Placeholder content for Lesson 38 of the DIY MFA program: Thesis Drafting III: Writing Toward the Climax."
} as const;

export default function Lesson38Page() {
  return <LessonPlaceholder {...lesson} />;
}
