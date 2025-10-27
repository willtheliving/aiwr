import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 44,
  "title": "Lesson 44: The Synopsis and Author Bio: Crafting Your Submission Package",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 44",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–43",
  "description": "This placeholder marks the upcoming deep dive on The Synopsis and Author Bio: Crafting Your Submission Package. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 44: The Synopsis and Author Bio: Crafting Your Submission Package | AI Writers Retreat",
  "description": "Placeholder content for Lesson 44 of the DIY MFA program: The Synopsis and Author Bio: Crafting Your Submission Package."
} as const;

export default function Lesson44Page() {
  return <LessonPlaceholder {...lesson} />;
}
