import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 33,
  "title": "Lesson 33: The Editor's Desk: Understanding the Acquisition Process",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 33",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–32",
  "description": "This placeholder marks the upcoming deep dive on The Editor's Desk: Understanding the Acquisition Process. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 33: The Editor's Desk: Understanding the Acquisition Process | AI Writers Retreat",
  "description": "Placeholder content for Lesson 33 of the DIY MFA program: The Editor's Desk: Understanding the Acquisition Process."
} as const;

export default function Lesson33Page() {
  return <LessonPlaceholder {...lesson} />;
}
