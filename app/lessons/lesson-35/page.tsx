import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 35,
  "title": "Lesson 35: Research for Writers: World-Building and Factual Accuracy",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 35",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–34",
  "description": "This placeholder marks the upcoming deep dive on Research for Writers: World-Building and Factual Accuracy. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 35: Research for Writers: World-Building and Factual Accuracy | AI Writers Retreat",
  "description": "Placeholder content for Lesson 35 of the DIY MFA program: Research for Writers: World-Building and Factual Accuracy."
} as const;

export default function Lesson35Page() {
  return <LessonPlaceholder {...lesson} />;
}
