import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 8,
  "title": "Lesson 8: The Point of No Return: Mastering the First Act",
  "module": "Year 1 · Semester 1 · Craft Fundamentals",
  "position": "Year 1, Semester 1, Week 8",
  "estimatedTime": "3-4 hours",
  "prerequisites": "Lessons 1–7",
  "description": "This placeholder marks the upcoming deep dive on The Point of No Return: Mastering the First Act. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 8: The Point of No Return: Mastering the First Act | AI Writers Retreat",
  "description": "Placeholder content for Lesson 8 of the DIY MFA program: The Point of No Return: Mastering the First Act."
} as const;

export default function Lesson8Page() {
  return <LessonPlaceholder {...lesson} />;
}
