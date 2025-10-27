import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 29,
  "title": "Lesson 29: Discovering Your Theme: From Premise to Controlling Idea",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 29",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–28",
  "description": "This placeholder marks the upcoming deep dive on Discovering Your Theme: From Premise to Controlling Idea. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 29: Discovering Your Theme: From Premise to Controlling Idea | AI Writers Retreat",
  "description": "Placeholder content for Lesson 29 of the DIY MFA program: Discovering Your Theme: From Premise to Controlling Idea."
} as const;

export default function Lesson29Page() {
  return <LessonPlaceholder {...lesson} />;
}
