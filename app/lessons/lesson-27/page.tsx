import type { Metadata } from 'next';
import { LessonPlaceholder } from '@/components/lessons/LessonPlaceholder';

const lesson = {
  "lessonNumber": 27,
  "title": "Lesson 27: The Tragic Form: Understanding Freytag's Pyramid and Negative Arcs",
  "module": "Year 2 · Semester 3 · Advanced Topics & Thesis Development",
  "position": "Year 2, Semester 3, Lesson 27",
  "estimatedTime": "4-5 hours",
  "prerequisites": "Lessons 1–26",
  "description": "This placeholder marks the upcoming deep dive on The Tragic Form: Understanding Freytag's Pyramid and Negative Arcs. The full lesson will include lecture content, readings, and studio work aligned with the DIY MFA roadmap."
} as const;

export const metadata: Metadata = {
  "title": "Lesson 27: The Tragic Form: Understanding Freytag's Pyramid and Negative Arcs | AI Writers Retreat",
  "description": "Placeholder content for Lesson 27 of the DIY MFA program: The Tragic Form: Understanding Freytag's Pyramid and Negative Arcs."
} as const;

export default function Lesson27Page() {
  return <LessonPlaceholder {...lesson} />;
}
