import { notFound } from 'next/navigation';
import { getLessonBySlug, getAllLessons } from '@/lib/lessons-data';
import type { Metadata } from 'next';
import { Bookmark, Clock, GraduationCap } from 'lucide-react';

// --- This function generates the necessary metadata for the page ---
// It dynamically creates the title and description based on the lesson slug.
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) {
    return {
      title: 'Lesson Not Found',
      description: 'The requested lesson could not be found.',
    };
  }
  return {
    title: `${lesson.title} | AI Writers Retreat`,
    description: `A lesson on ${lesson.title} from the ${lesson.module} module.`,
  };
}

// --- This function tells Next.js which lesson pages to build statically ---
// It fetches all lesson slugs so they can be pre-rendered.
export async function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}


// --- This is the main Page Component (the required default export) ---
// It receives `params` containing the current URL's slug.
export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug);

  // If no lesson is found for the given slug, render a 404 page.
  if (!lesson) {
    notFound();
  }

  return (
    <main className="bg-canvas dark:bg-canvasDark text-ink dark:text-canvas min-h-screen font-body">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-display prose-a:text-glow dark:prose-a:text-mint hover:prose-a:underline">
          
          {/* A11Y: The <header> provides a landmark for the main content's introduction. */}
          <header className="mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">
            <p className="text-sm font-ui uppercase tracking-wider text-glow dark:text-mint flex items-center">
              <GraduationCap className="w-4 h-4 mr-2" />
              {lesson.module}
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold font-display text-ink dark:text-canvas">
              {lesson.title}
            </h1>
            <div className="mt-4 flex items-center space-x-4 text-sm font-ui text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                <span>{lesson.readingTime} min read</span>
              </div>
              <button
                aria-label="Bookmark this lesson"
                className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-glow dark:focus-visible:ring-offset-canvasDark"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Render video if available */}
          {lesson.videoUrl && (
            <div className="my-8 aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={lesson.videoUrl}
                title={`Video for ${lesson.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}

          {/* A11Y: The main lesson content is within the <article> tag for semantic meaning. */}
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />

        </article>
      </div>
    </main>
  );
}
