import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 32,
  "title": "Lesson 32: The Role of the Agent: Who They Are and What They Do",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 32",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–31",
  "description": "This placeholder marks the upcoming deep dive on The Role of the Agent: Who They Are and What They Do. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 32: The Role of the Agent: Who They Are and What They Do | AI Writers Retreat",
  "description": "Placeholder content for Lesson 32 of the DIY MFA program: The Role of the Agent: Who They Are and What They Do."
} as const;

export default function Lesson32Page() {
  return <LessonPlaceholder {...lesson} />;
}
