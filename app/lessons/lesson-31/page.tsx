import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 31,
  "title": "Lesson 31: The Publishing Landscape: Traditional, Independent, and Hybrid Paths",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 31",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–30",
  "description": "This placeholder marks the upcoming deep dive on The Publishing Landscape: Traditional, Independent, and Hybrid Paths. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 31: The Publishing Landscape: Traditional, Independent, and Hybrid Paths | AI Writers Retreat",
  "description": "Placeholder content for Lesson 31 of the DIY MFA program: The Publishing Landscape: Traditional, Independent, and Hybrid Paths."
} as const;

export default function Lesson31Page() {
  return <LessonPlaceholder {...lesson} />;
}
