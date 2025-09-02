"use client";

// import { notFound } from "next/navigation"; // Removed to fix compilation error
// import Link from "next/link"; // Removed to fix compilation error

// --- Data Duplication for Preview Environment ---
// To resolve persistent import errors, the lesson data is temporarily duplicated here.
// In a standard Next.js project, you would import this from a central 'lib/lessons.ts' file.
interface Lesson {
  slug: string;
  title: string;
  year: number;
  semester: number;
  week: number;
  meta?: {
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
      <h2>1. Learning Objectives</h2>
      <p>By the end of this lesson, you will be able to:</p>
      <ul>
        <li>Design and commit to a sustainable weekly writing schedule.</li>
        <li>Differentiate between "showing" and "telling".</li>
        <li>Analyze the difference between active and passive voice.</li>
        <li>Produce a 1,000-word descriptive scene.</li>
      </ul>
      <h2>2. Written Lecture</h2>
      <h3>The Myth of the Muse</h3>
      <p>Let's begin by dismantling the most destructive myth in the creative arts: the myth of the muse...</p>
    `,
  },
  {
    slug: "engine-of-story",
    title: "Lesson 2: The Engine of Story: Goal, Motivation, and Conflict",
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
];
// --- End Data Duplication ---


// Sidebar component
function LessonSidebar({ currentSlug }: { currentSlug: string }) {
  const semester1Lessons = lessons.filter(l => l.semester === 1);

  return (
    <aside className="w-full lg:w-1/4 lg:sticky top-28 self-start">
      <h2 className="font-bold font-display text-lg mb-4">Course Navigation</h2>
      <nav className="space-y-1">
        <div>
          <h3 className="font-bold font-display text-md py-2">Semester 1: Craft Fundamentals</h3>
          <ul className="space-y-1 pt-2 pb-2 border-l border-gray-200 dark:border-gray-800">
            {semester1Lessons.map((lesson) => {
              const isActive = lesson.slug === currentSlug;
              return (
                <li key={lesson.slug}>
                  <a
                    href={`/lessons/${lesson.slug}`}
                    className={`block border-l-2 pl-4 py-1 text-sm transition-colors rounded-r-md ${
                      isActive
                        ? "border-glow text-ink dark:text-canvas font-bold"
                        : "border-transparent text-ink/80 dark:text-canvas/80 hover:border-glow hover:text-ink dark:hover:text-canvas"
                    }`}
                  >
                    Lesson {lesson.week}: {lesson.title.split(": ")[1]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

// The page component for a single lesson.
export default function LessonPage({ params }: { params?: { slug: string } }) {
  // To make this component runnable in a preview environment that doesn't provide params,
  // we default to the first lesson if params are missing.
  const slug = params?.slug || 'writers-pact';
  const lesson = lessons.find((p) => p.slug === slug);

  if (!lesson) {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <h1 className="text-4xl font-extrabold">Lesson Not Found</h1>
            <p className="mt-4">Sorry, we couldn't find the lesson you were looking for.</p>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        <LessonSidebar currentSlug={slug} />
        <div className="w-full lg:w-3/4">
          <header className="mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-4xl font-extrabold tracking-tight font-display md:text-5xl">{lesson.title}</h1>
            {lesson.meta && (
              <div className="mt-4 text-sm text-ink/70 dark:text-canvas/70 space-y-1">
                <p><strong>Program:</strong> {lesson.meta.program}</p>
                <p><strong>Position:</strong> {lesson.meta.position}</p>
                <p><strong>Estimated Time Commitment:</strong> {lesson.meta.time}</p>
                <p><strong>Prerequisites:</strong> {lesson.meta.prerequisites}</p>
              </div>
            )}
          </header>
          <article
            className="prose prose-lg dark:prose-invert max-w-none font-body"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
          />
        </div>
      </div>
    </div>
  );
}



