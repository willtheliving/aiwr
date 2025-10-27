import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 60,
  "title": "Lesson 60: The Writer's Pact, Revisited: Your Path Forward",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 60",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–59",
  "description": "This placeholder marks the upcoming deep dive on The Writer's Pact, Revisited: Your Path Forward. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 60: The Writer's Pact, Revisited: Your Path Forward | AI Writers Retreat",
  "description": "Placeholder content for Lesson 60 of the DIY MFA program: The Writer's Pact, Revisited: Your Path Forward."
} as const;

export default function Lesson60Page() {
  return <LessonPlaceholder {...lesson} />;
}
