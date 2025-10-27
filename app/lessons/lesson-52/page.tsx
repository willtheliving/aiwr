import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 52,
  "title": "Lesson 52: The First Ten Submissions: Sending Your Work Out",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 52",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–51",
  "description": "This placeholder marks the upcoming deep dive on The First Ten Submissions: Sending Your Work Out. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 52: The First Ten Submissions: Sending Your Work Out | AI Writers Retreat",
  "description": "Placeholder content for Lesson 52 of the DIY MFA program: The First Ten Submissions: Sending Your Work Out."
} as const;

export default function Lesson52Page() {
  return <LessonPlaceholder {...lesson} />;
}
