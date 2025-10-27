import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 19,
  "title": "Lesson 19: The Power of the Image: Symbolism and Motif",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 19",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–18",
  "description": "This placeholder marks the upcoming deep dive on The Power of the Image: Symbolism and Motif. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 19: The Power of the Image: Symbolism and Motif | AI Writers Retreat",
  "description": "Placeholder content for Lesson 19 of the DIY MFA program: The Power of the Image: Symbolism and Motif."
} as const;

export default function Lesson19Page() {
  return <LessonPlaceholder {...lesson} />;
}
