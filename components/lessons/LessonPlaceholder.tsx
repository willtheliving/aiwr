import { GraduationCap, Clock, BookOpenCheck } from 'lucide-react';

type LessonPlaceholderProps = {
  lessonNumber: number;
  title: string;
  module: string;
  position: string;
  estimatedTime?: string;
  prerequisites?: string;
  description?: string;
};

export function LessonPlaceholder({
  lessonNumber,
  title,
  module,
  position,
  estimatedTime,
  prerequisites,
  description,
}: LessonPlaceholderProps) {
  return (
    <main className="bg-canvas dark:bg-canvasDark text-ink dark:text-canvas min-h-screen font-body">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <article className="rounded-3xl border border-gray-200/70 dark:border-gray-800/70 bg-white dark:bg-slate-950 shadow-xl overflow-hidden">
          <header className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white px-6 sm:px-8 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  {module}
                </p>
                <h1 className="text-3xl sm:text-4xl font-display font-bold mt-4 leading-tight">{title}</h1>
              </div>
              <span className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-4 py-2 text-sm sm:text-base font-semibold tracking-wide">
                Lesson {lessonNumber.toString().padStart(2, '0')}
              </span>
            </div>
          </header>

          <div className="px-6 sm:px-8 py-8 space-y-8">
            <section className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-canvas dark:bg-canvasDark/80 p-5 sm:p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 dark:text-canvas/70">Program Position</h2>
                <p className="mt-3 text-lg font-medium text-ink dark:text-canvas">{position}</p>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-canvas dark:bg-canvasDark/80 p-5 sm:p-6 space-y-4">
                {estimatedTime && (
                  <p className="flex items-center text-sm sm:text-base text-ink/80 dark:text-canvas/80">
                    <Clock className="mr-3 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    <span>
                      <span className="font-semibold text-ink dark:text-canvas">Estimated Time:</span> {estimatedTime}
                    </span>
                  </p>
                )}
                {prerequisites && (
                  <p className="flex items-center text-sm sm:text-base text-ink/80 dark:text-canvas/80">
                    <BookOpenCheck className="mr-3 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    <span>
                      <span className="font-semibold text-ink dark:text-canvas">Prerequisites:</span> {prerequisites}
                    </span>
                  </p>
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-dashed border-indigo-300/70 bg-indigo-50/70 dark:bg-indigo-500/10 px-6 py-8 text-indigo-900 dark:text-indigo-200">
              <h2 className="text-xl font-semibold font-display">Full lesson coming soon</h2>
              <p className="mt-3 leading-relaxed text-base sm:text-lg">
                {description ||
                  'We are actively developing this lesson. Expect lecture notes, reading pathways, studio prompts, and AI collaboration exercises tailored to this exact point in your DIY MFA journey.'}
              </p>
            </section>

            <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950 px-6 py-8">
              <h2 className="text-lg font-semibold text-ink dark:text-canvas">What to Expect</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/80 dark:text-canvas/80">
                <li>Deep-dive lectures that build on the curriculum milestones preceding this lesson.</li>
                <li>Curated readings, viewing guides, and optional extension paths to broaden your craft toolkit.</li>
                <li>Portfolio-centered studio assignments that align with the two-year Writer&rsquo;s Apprenticeship roadmap.</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
