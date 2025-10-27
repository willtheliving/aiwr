import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 20,
  "title": "Lesson 20: From Scene to Chapter: Weaving Scenes into Larger Units",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 20",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–19",
  "description": "This placeholder marks the upcoming deep dive on From Scene to Chapter: Weaving Scenes into Larger Units. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 20: From Scene to Chapter: Weaving Scenes into Larger Units | AI Writers Retreat",
  "description": "Placeholder content for Lesson 20 of the DIY MFA program: From Scene to Chapter: Weaving Scenes into Larger Units."
} as const;

export default function Lesson20Page() {
  return <LessonPlaceholder {...lesson} />;
}
