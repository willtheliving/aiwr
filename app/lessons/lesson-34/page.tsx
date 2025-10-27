import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 34,
  "title": "Lesson 34: The Thesis Proposal: Creating Your Project Blueprint",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 34",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–33",
  "description": "This placeholder marks the upcoming deep dive on The Thesis Proposal: Creating Your Project Blueprint. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 34: The Thesis Proposal: Creating Your Project Blueprint | AI Writers Retreat",
  "description": "Placeholder content for Lesson 34 of the DIY MFA program: The Thesis Proposal: Creating Your Project Blueprint."
} as const;

export default function Lesson34Page() {
  return <LessonPlaceholder {...lesson} />;
}
