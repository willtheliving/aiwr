import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 46,
  "title": "Lesson 46: Navigating Rejection and Building Resilience",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 46",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–45",
  "description": "This placeholder marks the upcoming deep dive on Navigating Rejection and Building Resilience. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 46: Navigating Rejection and Building Resilience | AI Writers Retreat",
  "description": "Placeholder content for Lesson 46 of the DIY MFA program: Navigating Rejection and Building Resilience."
} as const;

export default function Lesson46Page() {
  return <LessonPlaceholder {...lesson} />;
}
