import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 25,
  "title": "Lesson 25: Beyond the Straight Line: An Introduction to Non-Linear Narratives",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 25",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–24",
  "description": "This placeholder marks the upcoming deep dive on Beyond the Straight Line: An Introduction to Non-Linear Narratives. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 25: Beyond the Straight Line: An Introduction to Non-Linear Narratives | AI Writers Retreat",
  "description": "Placeholder content for Lesson 25 of the DIY MFA program: Beyond the Straight Line: An Introduction to Non-Linear Narratives."
} as const;

export default function Lesson25Page() {
  return <LessonPlaceholder {...lesson} />;
}
