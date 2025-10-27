import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 43,
  "title": "Lesson 43: The Query Letter: A Masterclass in Pitching Your Book",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 43",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–42",
  "description": "This placeholder marks the upcoming deep dive on The Query Letter: A Masterclass in Pitching Your Book. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 43: The Query Letter: A Masterclass in Pitching Your Book | AI Writers Retreat",
  "description": "Placeholder content for Lesson 43 of the DIY MFA program: The Query Letter: A Masterclass in Pitching Your Book."
} as const;

export default function Lesson43Page() {
  return <LessonPlaceholder {...lesson} />;
}
