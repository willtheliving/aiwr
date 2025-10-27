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
    <main className="bg-gray-100 text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <article className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200">
          <header className="bg-indigo-600 text-white px-8 py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  {module}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mt-3">{title}</h1>
              </div>
              <div className="mt-6 md:mt-0">
                <span className="inline-flex items-center justify-center rounded-full bg-white/15 px-5 py-2 text-lg font-semibold">
                  Lesson {lessonNumber.toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          </header>

          <div className="px-8 py-10 space-y-8">
            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Program Position</h2>
                <p className="mt-3 text-lg font-medium text-gray-900">{position}</p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 space-y-3">
                {estimatedTime && (
                  <p className="flex items-center text-gray-700">
                    <Clock className="mr-3 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    <span>
                      <span className="font-medium">Estimated Time:</span> {estimatedTime}
                    </span>
                  </p>
                )}
                {prerequisites && (
                  <p className="flex items-center text-gray-700">
                    <BookOpenCheck className="mr-3 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    <span>
                      <span className="font-medium">Prerequisites:</span> {prerequisites}
                    </span>
                  </p>
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50 px-6 py-8 text-indigo-900">
              <h2 className="text-xl font-semibold">Full lesson coming soon</h2>
              <p className="mt-3 leading-relaxed">
                {description ||
                  'We are in the process of crafting this lesson. Check back soon for in-depth lecture notes, assignments, and additional resources tailored to this stage of the DIY MFA journey.'}
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white px-6 py-8">
              <h2 className="text-lg font-semibold text-gray-900">What to Expect</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Detailed lecture content exploring the key craft topic for this lesson.</li>
                <li>Curated reading and viewing assignments to deepen your understanding.</li>
                <li>Studio exercises designed to build your portfolio over the two-year program.</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
