"use client"; // This page has interactive accordions.
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { lessons, Lesson } from "@/lib/lessons";

// Helper function to group lessons by year and semester
const groupLessonsBySemester = (lessons: Lesson[]) => {
  return lessons.reduce<Record<string, Record<string, Lesson[]>>>((acc, lesson) => {
    const yearTitle = `Year ${lesson.year}`;
    const semesterTitle = `Semester ${lesson.semester}`;
    if (!acc[yearTitle]) acc[yearTitle] = {};
    if (!acc[yearTitle][semesterTitle]) acc[yearTitle][semesterTitle] = [];
    acc[yearTitle][semesterTitle].push(lesson);
    return acc;
  }, {});
};

const curriculum = groupLessonsBySemester(lessons);

const yearHeadings: Record<number, string> = { 1: "Foundations & Portfolio Building", 2: "Advanced Craft & Professional Development" };
const semesterHeadings: Record<number, string> = { 1: "Craft Fundamentals", 2: "Genre Focus & Experimentation", 3: "Advanced Topics & Thesis Development", 4: "Thesis Completion & Professional Prep"};

function AccordionSection({ year, semester, lessons }: { year: string; semester: string; lessons: Lesson[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const yearNum = parseInt(year.split(' ')[1]);
  const semesterNum = parseInt(semester.split(' ')[1]);

  const sortedLessons = [...lessons].sort((a, b) => a.lessonNumber - b.lessonNumber);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-expanded={isOpen}
      >
        <div>
          <h3 className="font-bold font-display text-lg">{`${year}: ${yearHeadings[yearNum]}`}</h3>
          <p className="text-sm text-ink/80 dark:text-canvas/80">{`${semester}: ${semesterHeadings[semesterNum]}`}</p>
        </div>
        <ChevronDown className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-4">
          <ul className="space-y-3">
            {sortedLessons.map((lesson) => {
              const [, ...titleParts] = lesson.title.split(': ');
              const displayTitle = titleParts.length ? titleParts.join(': ') : lesson.title;
              const lessonNumberLabel = lesson.lessonNumber ?? lesson.week;

              return (
                <li key={lesson.slug}>
                  <Link
                    className="flex items-start space-x-3 text-ink/80 dark:text-canvas/80 hover:text-glow"
                    href={`/lessons/${lesson.slug}`}
                  >
                    <span className="font-bold text-ink/60 dark:text-canvas/60 w-10 text-right pt-px">
                      {lessonNumberLabel.toString().padStart(2, '0')}.
                    </span>
                    <span className="flex-1">{displayTitle}</span>
                </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function DiyMfaPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <section className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight font-display md:text-5xl lg:text-6xl">The DIY MFA in Writing</h1>
        </section>
        <section className="mt-16">
          <h2 className="text-3xl font-bold font-display text-center mb-8">Course Offerings</h2>
          <div className="space-y-4">
            {Object.entries(curriculum).map(([year, yearData]) =>
              Object.entries(yearData).map(([semester, lessons]) => (
                <AccordionSection key={`${year}-${semester}`} year={year} semester={semester} lessons={lessons} />
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
