import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 53,
  "title": "Lesson 53: The Writing Life: Balancing Art, Commerce, and Mental Health",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 53",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–52",
  "description": "This placeholder marks the upcoming deep dive on The Writing Life: Balancing Art, Commerce, and Mental Health. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 53: The Writing Life: Balancing Art, Commerce, and Mental Health | AI Writers Retreat",
  "description": "Placeholder content for Lesson 53 of the DIY MFA program: The Writing Life: Balancing Art, Commerce, and Mental Health."
} as const;

export default function Lesson53Page() {
  return <LessonPlaceholder {...lesson} />;
}
