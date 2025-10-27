import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 22,
  "title": "Lesson 22: Giving and Receiving Feedback: The Art of the Critique",
  "module": "Year 1 · Semester 2 · Genre Focus & Experimentation",
  "position": "Year 1, Semester 2, Lesson 22",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–21",
  "description": "This placeholder marks the upcoming deep dive on Giving and Receiving Feedback: The Art of the Critique. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 22: Giving and Receiving Feedback: The Art of the Critique | AI Writers Retreat",
  "description": "Placeholder content for Lesson 22 of the DIY MFA program: Giving and Receiving Feedback: The Art of the Critique."
} as const;

export default function Lesson22Page() {
  return <LessonPlaceholder {...lesson} />;
}
