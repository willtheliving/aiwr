"use client"; // This page has interactive accordions.

import { useState } from "react";
// import Link from "next/link"; // Removed to fix compilation error in this environment
import { ChevronDown } from "lucide-react";

// To resolve the persistent import error, the lesson data has been moved directly into this file.
// This is a temporary solution to ensure the page compiles correctly in the current environment.
interface Lesson {
  slug: string;
  title: string;
  year: number;
  semester: number;
  week: number;
  meta: {
    program: string;
    position: string;
    time: string;
    prerequisites: string;
  };
  content: string;
}

const lessons: Lesson[] = [
  {
    slug: "writers-pact",
    title: "Lesson 1: The Writer's Pact: Building a Sustainable Routine & Mastering Basic Craft",
    year: 1,
    semester: 1,
    week: 1,
    meta: {
      program: "The Writer's Apprenticeship: A Two-Year, Self-Paced MFA",
      position: "Year 1, Semester 1, Week 1",
      time: "3-4 hours",
      prerequisites: "None",
    },
    content: `
      <!-- The full HTML content for Lesson 1 goes here. -->
      <!-- For brevity, it is represented by this comment. -->
      <h2>The Myth of the Muse</h2>
      <p>Let's begin by dismantling the most destructive myth in the creative arts: the myth of the muse...</p>
      <!-- ... rest of the lesson content -->
    `,
  },
  {
    slug: "engine-of-story",
    title: "The Engine of Story: Goal, Motivation, and Conflict",
    year: 1,
    semester: 1,
    week: 2,
    meta: {
      program: "The Writer's Apprenticeship",
      position: "Year 1, Semester 1, Week 2",
      time: "3-4 hours",
      prerequisites: "Lesson 1",
    },
    content: "Content for this lesson is coming soon...",
  },
  // Add other lesson objects here...
];


// Helper function to group lessons by year and semester
const groupLessonsBySemester = (lessons: Lesson[]) => {
  return lessons.reduce<Record<string, Record<string, Lesson[]>>>((acc, lesson) => {
    const yearTitle = `Year ${lesson.year}`;
    const semesterTitle = `Semester ${lesson.semester}`;
    if (!acc[yearTitle]) {
      acc[yearTitle] = {};
    }
    if (!acc[yearTitle][semesterTitle]) {
      acc[yearTitle][semesterTitle] = [];
    }
    acc[yearTitle][semesterTitle].push(lesson);
    return acc;
  }, {});
};

const curriculum = groupLessonsBySemester(lessons);
const yearTitles: Record<number, string> = { 1: "Foundations & Portfolio Building", 2: "Advanced Craft & Professional Development" };
const semesterTitles: Record<number, string> = { 1: "Craft Fundamentals", 2: "Genre Focus & Experimentation", 3: "Advanced Topics & Thesis Development", 4: "Thesis Completion & Professional Prep"};

interface AccordionProps {
  yearTitle: string;
  semesterTitle: string;
  lessons: Lesson[];
}

// A component to render a collapsible section for each semester.
function AccordionSection({ yearTitle, semesterTitle, lessons }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
        aria-expanded={isOpen}
      >
        <div>
          <h3 className="font-bold font-display text-lg text-ink dark:text-canvas">{yearTitle}</h3>
          <p className="text-sm text-ink/80 dark:text-canvas/80">{semesterTitle}</p>
        </div>
        <ChevronDown className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
        <div className="p-4">
          <ul className="space-y-3">
            {lessons.map((lesson) => (
              <li key={lesson.slug}>
                <a
                  href={`/lessons/${lesson.slug}`}
                  className="flex items-start space-x-3 text-ink/80 dark:text-canvas/80 hover:text-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow rounded-md"
                >
                  <span className="font-bold text-ink/60 dark:text-canvas/60 w-8 text-right pt-px">{lesson.week}.</span>
                  <span>{lesson.title.split(": ")[1]}</span>
                </a>
              </li>
            ))}
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
          <div className="mt-6 max-w-3xl mx-auto space-y-4 font-body text-lg leading-relaxed text-ink/90 dark:text-canvas/90">
            <p>
              You are here because the work itself is the point. You understand that a writing career is not a passive endeavor but an active
              craft—one that must be built. This program is designed for the self-motivated writer who seeks the rigor and structure of a Master of Fine
              Arts program without the demanding, expensive, and often inaccessible institutional framework.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold font-display text-center mb-8">Our Guiding Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body text-ink/80 dark:text-canvas/80">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold font-display text-xl mb-2 text-ink dark:text-canvas">Craft Before Commerce</h3>
              <p>
                The habits of a professional writer—querying, platform-building, and audience engagement—are vital, but they are secondary. This
                program helps you write with power, precision, and originality.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold font-display text-xl mb-2 text-ink dark:text-canvas">Active, Not Passive</h3>
              <p>
                This program is designed for immense self-direction. The program provides the guardrails; you provide the engine. The work is about the
                writing itself. The lessons, deadlines, and assessments are the scaffolding that allows you to build your own unique body of work.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold font-display text-center mb-8">Program Structure: A Two‑Year Journey</h2>
           <div className="space-y-6 font-body text-ink/80 dark:text-canvas/80">
             <div>
               <h3 className="font-bold font-display text-xl mb-2 text-ink dark:text-canvas">
                 Semester 1: Craft Fundamentals &amp; Portfolio Building
               </h3>
               <p>
                 We begin with the essentials. You will establish a durable writing practice and begin a deep dive into the foundational elements of
                 narrative craft. This semester is about building a strong foundation for your future work.
               </p>
             </div>
             <div>
               <h3 className="font-bold font-display text-xl mb-2 text-ink dark:text-canvas">Semester 2: Genre Focus &amp; Experimentation</h3>
               <p>
                 With the fundamentals in place, you will begin to explore genre and reader expectations. Through a series of focused deep dives and
                 lessons, you will experiment with advanced craft techniques and begin developing the extended work that will become your thesis.
               </p>
             </div>
             <div>
               <h3 className="font-bold font-display text-xl mb-2 text-ink dark:text-canvas">Semester 3: Advanced Topics &amp; Thesis Development</h3>
               <p>
                 This semester is dedicated to your thesis—the novel‑length manuscript at the core of this program. You will gain a clear understanding
                 of the publishing landscape while formally outlining and beginning to draft your thesis manuscript.
               </p>
             </div>
             <div>
               <h3 className="font-bold font-display text-xl mb-2 text-ink dark:text-canvas">Semester 4: Thesis Completion &amp; Professional Preparation</h3>
               <p>
                 The final semester is focused on a single outcome: a completed, deeply revised thesis. Alongside this intensive work, you will prepare
                 for a professional writing life by mastering the query letter, synopsis, and other essential submission materials.
               </p>
             </div>
           </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold font-display text-center mb-8">Course Offerings</h2>
          <div className="space-y-4">
            {Object.entries(curriculum).map(([year, yearData]) =>
              Object.entries(yearData).map(([semester, lessons]) => (
                <AccordionSection
                  key={`${year}-${semester}`}
                  yearTitle={`${year}: ${yearTitles[parseInt(year.split(' ')[1])]}`}
                  semesterTitle={`${semester}: ${semesterTitles[parseInt(semester.split(' ')[1])]}`}
                  lessons={lessons}
                />
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

