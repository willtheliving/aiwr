import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 36,
  "title": "Lesson 36: Thesis Drafting I: Writing the First 50 Pages",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 36",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–35",
  "description": "This placeholder marks the upcoming deep dive on Thesis Drafting I: Writing the First 50 Pages. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 36: Thesis Drafting I: Writing the First 50 Pages | AI Writers Retreat",
  "description": "Placeholder content for Lesson 36 of the DIY MFA program: Thesis Drafting I: Writing the First 50 Pages."
} as const;

export default function Lesson36Page() {
  return <LessonPlaceholder {...lesson} />;
}
