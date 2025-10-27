import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 30,
  "title": "Lesson 30: Weaving Theme into Plot: Thematic Resonance and Unity",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 30",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–29",
  "description": "This placeholder marks the upcoming deep dive on Weaving Theme into Plot: Thematic Resonance and Unity. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 30: Weaving Theme into Plot: Thematic Resonance and Unity | AI Writers Retreat",
  "description": "Placeholder content for Lesson 30 of the DIY MFA program: Weaving Theme into Plot: Thematic Resonance and Unity."
} as const;

export default function Lesson30Page() {
  return <LessonPlaceholder {...lesson} />;
}
