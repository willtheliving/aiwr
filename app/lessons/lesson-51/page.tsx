import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 51,
  "title": "Lesson 51: Creating Your Submission Strategy: Researching Agents and Presses",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 51",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–50",
  "description": "This placeholder marks the upcoming deep dive on Creating Your Submission Strategy: Researching Agents and Presses. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 51: Creating Your Submission Strategy: Researching Agents and Presses | AI Writers Retreat",
  "description": "Placeholder content for Lesson 51 of the DIY MFA program: Creating Your Submission Strategy: Researching Agents and Presses."
} as const;

export default function Lesson51Page() {
  return <LessonPlaceholder {...lesson} />;
}
