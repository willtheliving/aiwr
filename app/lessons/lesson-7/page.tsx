import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 7,
  "title": "Lesson 7: The Blueprint of Story: Introduction to the Three-Act Structure",
  "module": "Year 1 · Semester 1 · Craft Fundamentals",
  "position": "Year 1, Semester 1, Week 7",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–6",
  "description": "This placeholder marks the upcoming deep dive on The Blueprint of Story: Introduction to the Three-Act Structure. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 7: The Blueprint of Story: Introduction to the Three-Act Structure | AI Writers Retreat",
  "description": "Placeholder content for Lesson 7 of the DIY MFA program: The Blueprint of Story: Introduction to the Three-Act Structure."
} as const;

export default function Lesson7Page() {
  return <LessonPlaceholder {...lesson} />;
}
