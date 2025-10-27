import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 41,
  "title": "Lesson 41: The \"Read Aloud\" Pass: Polishing for Rhythm and Cadence",
  "module": "Year 2 · Semester 4 · Thesis Completion & Professional Prep",
  "position": "Year 2, Semester 4, Lesson 41",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–40",
  "description": "This placeholder marks the upcoming deep dive on The \"Read Aloud\" Pass: Polishing for Rhythm and Cadence. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 41: The \"Read Aloud\" Pass: Polishing for Rhythm and Cadence | AI Writers Retreat",
  "description": "Placeholder content for Lesson 41 of the DIY MFA program: The \"Read Aloud\" Pass: Polishing for Rhythm and Cadence."
} as const;

export default function Lesson41Page() {
  return <LessonPlaceholder {...lesson} />;
}
