import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 9,
  "title": "Lesson 9: The Long Middle: Rising Action and the Midpoint",
  "module": "Year 1 · Semester 1 · Craft Fundamentals",
  "position": "Year 1, Semester 1, Week 9",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–8",
  "description": "This placeholder marks the upcoming deep dive on The Long Middle: Rising Action and the Midpoint. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 9: The Long Middle: Rising Action and the Midpoint | AI Writers Retreat",
  "description": "Placeholder content for Lesson 9 of the DIY MFA program: The Long Middle: Rising Action and the Midpoint."
} as const;

export default function Lesson9Page() {
  return <LessonPlaceholder {...lesson} />;
}
