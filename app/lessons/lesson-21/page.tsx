import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 21,
  "title": "Lesson 21: The Synopsis: Outlining Your Novel-Length Project",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 21",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–20",
  "description": "This placeholder marks the upcoming deep dive on The Synopsis: Outlining Your Novel-Length Project. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 21: The Synopsis: Outlining Your Novel-Length Project | AI Writers Retreat",
  "description": "Placeholder content for Lesson 21 of the DIY MFA program: The Synopsis: Outlining Your Novel-Length Project."
} as const;

export default function Lesson21Page() {
  return <LessonPlaceholder {...lesson} />;
}
