import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 18,
  "title": "Lesson 18: Manipulating Time: The Strategic Use of Flashback and Foreshadowing",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 18",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–17",
  "description": "This placeholder marks the upcoming deep dive on Manipulating Time: The Strategic Use of Flashback and Foreshadowing. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 18: Manipulating Time: The Strategic Use of Flashback and Foreshadowing | AI Writers Retreat",
  "description": "Placeholder content for Lesson 18 of the DIY MFA program: Manipulating Time: The Strategic Use of Flashback and Foreshadowing."
} as const;

export default function Lesson18Page() {
  return <LessonPlaceholder {...lesson} />;
}
