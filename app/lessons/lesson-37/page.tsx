import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 37,
  "title": "Lesson 37: Thesis Drafting II: Overcoming the \"Muddled Middle\"",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 37",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–36",
  "description": "This placeholder marks the upcoming deep dive on Thesis Drafting II: Overcoming the \"Muddled Middle\". The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 37: Thesis Drafting II: Overcoming the \"Muddled Middle\" | AI Writers Retreat",
  "description": "Placeholder content for Lesson 37 of the DIY MFA program: Thesis Drafting II: Overcoming the \"Muddled Middle\"."
} as const;

export default function Lesson37Page() {
  return <LessonPlaceholder {...lesson} />;
}
