import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 28,
  "title": "Lesson 28: The Hero's Journey: Deconstructing the Monomyth",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 28",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–27",
  "description": "This placeholder marks the upcoming deep dive on The Hero's Journey: Deconstructing the Monomyth. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 28: The Hero's Journey: Deconstructing the Monomyth | AI Writers Retreat",
  "description": "Placeholder content for Lesson 28 of the DIY MFA program: The Hero's Journey: Deconstructing the Monomyth."
} as const;

export default function Lesson28Page() {
  return <LessonPlaceholder {...lesson} />;
}
