import { lessons } from '@/lib/lessons'; // Importing our lesson content
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This component will be the sidebar, dynamically listing all lessons
function LessonSidebar({ currentSlug }: { currentSlug: string }) {
    // We'll use the curriculum data structure for the sidebar
    const curriculum = {
        "Year 1: Foundations & Portfolio Building": {
            "Semester 1: Craft Fundamentals": [
                { id: 1, title: "The Writer's Pact" },
                { id: 2, title: "The Engine of Story" },
                { id: 3, title: "Finding the Filter" },
                { id: 4, title: "The Living World" },
            ],
        },
    };

    return (
        <aside className="w-full lg:w-1/4 lg:sticky top-28 self-start">
            <h2 className="font-bold font-display text-lg mb-4">Course Navigation</h2>
            <nav className="space-y-1">
                {Object.values(curriculum).map(year => 
                    Object.entries(year).map(([semesterTitle, semesterLessons]) => (
                        <div key={semesterTitle}>
                            <h3 className="font-bold font-display text-md py-2">{semesterTitle}</h3>
                            <ul className="space-y-1 pt-2 pb-2 border-l border-gray-200 dark:border-gray-800">
                                {semesterLessons.map(lesson => {
                                    const isActive = lesson.id.toString() === currentSlug;
                                    return (
                                        <li key={lesson.id}>
                                            <Link 
                                                href={`/lessons/${lesson.id}`}
                                                className={`block border-l-2 pl-4 py-1 text-sm transition-colors ${
                                                    isActive 
                                                    ? 'border-glow text-ink dark:text-canvas font-bold' 
                                                    : 'border-transparent text-ink/80 dark:text-canvas/80 hover:border-glow hover:text-ink dark:hover:text-canvas'
                                                }`}
                                            >
                                                Lesson {lesson.id}: {lesson.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))
                )}
            </nav>
        </aside>
    );
}


// This is the main page component
export default function LessonPage({ params }: { params: { slug: string } }) {
    // Find the lesson that matches the slug from the URL
    const lesson = lessons.find(p => p.slug === params.slug);

    // If no lesson is found, show a 404 page
    if (!lesson) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="flex flex-col lg:flex-row gap-12">
                
                <LessonSidebar currentSlug={params.slug} />

                {/* Main Lesson Content */}
                <div className="w-full lg:w-3/4">
                    {/* Header Block */}
                    <header className="mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
                        <h1 className="text-4xl font-extrabold tracking-tight font-display md:text-5xl">
                            {lesson.title}
                        </h1>
                        <div className="mt-4 text-sm text-ink/70 dark:text-canvas/70 space-y-1">
                            <p><strong>Program:</strong> {lesson.meta.program}</p>
                            <p><strong>Position:</strong> {lesson.meta.position}</p>
                            <p><strong>Estimated Time Commitment:</strong> {lesson.meta.time}</p>
                            <p><strong>Prerequisites:</strong> {lesson.meta.prerequisites}</p>
                        </div>
                    </header>

                    {/* This is where the lesson's HTML content is rendered.
                      `dangerouslySetInnerHTML` is React's way of rendering HTML from a string.
                      It's safe here because we are the ones writing the HTML content in our lessons.ts file.
                    */}
                    <article 
                        className="space-y-12 font-body text-lg leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: lesson.content }} 
                    />
                </div>
            </div>
        </div>
    );
}
