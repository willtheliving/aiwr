import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 12,
  "title": "Lesson 12: Semester 1 Portfolio: Assembling and Assessing Your Foundational Work",
  "module": "Year 1 · Semester 1 · Craft Fundamentals",
  "position": "Year 1, Semester 1, Week 12",
  "estimatedTime": "6-8 hours",
  "prerequisites": "Lessons 1–11",
  "description": "This placeholder marks the upcoming deep dive on Semester 1 Portfolio: Assembling and Assessing Your Foundational Work. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 12: Semester 1 Portfolio: Assembling and Assessing Your Foundational Work | AI Writers Retreat",
  "description": "Placeholder content for Lesson 12 of the DIY MFA program: Semester 1 Portfolio: Assembling and Assessing Your Foundational Work."
} as const;

export default function Lesson12Page() {
  return <LessonPlaceholder {...lesson} />;
}
