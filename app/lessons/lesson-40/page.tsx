import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 40,
  "title": "Lesson 40: The \"Seek and Destroy\" Pass: Eliminating Clichés and Filler Words",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 40",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–39",
  "description": "This placeholder marks the upcoming deep dive on The \"Seek and Destroy\" Pass: Eliminating Clichés and Filler Words. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 40: The \"Seek and Destroy\" Pass: Eliminating Clichés and Filler Words | AI Writers Retreat",
  "description": "Placeholder content for Lesson 40 of the DIY MFA program: The \"Seek and Destroy\" Pass: Eliminating Clichés and Filler Words."
} as const;

export default function Lesson40Page() {
  return <LessonPlaceholder {...lesson} />;
}
