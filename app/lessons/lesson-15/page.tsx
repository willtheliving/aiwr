import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 15,
  "title": "Lesson 15: Genre Deep Dive II: Science Fiction, Fantasy & Speculative Fiction",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 15",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–14",
  "description": "This placeholder marks the upcoming deep dive on Genre Deep Dive II: Science Fiction, Fantasy & Speculative Fiction. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 15: Genre Deep Dive II: Science Fiction, Fantasy & Speculative Fiction | AI Writers Retreat",
  "description": "Placeholder content for Lesson 15 of the DIY MFA program: Genre Deep Dive II: Science Fiction, Fantasy & Speculative Fiction."
} as const;

export default function Lesson15Page() {
  return <LessonPlaceholder {...lesson} />;
}
