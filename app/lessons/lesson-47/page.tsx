import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 47,
  "title": "Lesson 47: Understanding Publishing Contracts and Rights",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 47",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–46",
  "description": "This placeholder marks the upcoming deep dive on Understanding Publishing Contracts and Rights. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 47: Understanding Publishing Contracts and Rights | AI Writers Retreat",
  "description": "Placeholder content for Lesson 47 of the DIY MFA program: Understanding Publishing Contracts and Rights."
} as const;

export default function Lesson47Page() {
  return <LessonPlaceholder {...lesson} />;
}
