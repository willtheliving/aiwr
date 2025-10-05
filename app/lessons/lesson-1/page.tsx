import type { Metadata } from 'next';
import { Bookmark, Clock, GraduationCap, PenSquare } from 'lucide-react';

// --- Metadata for this specific lesson is hard-coded ---
export const metadata: Metadata = {
  title: "Lesson 1: The Writer's Pact | AI Writers Retreat",
  description: "Establish the discipline, routine, and commitment required for a successful writing life.",
};

// --- This is the main Page Component (the required default export) ---
// All content for "The Writer's Pact" is directly inside this component.
export default function WritersPactLessonPage() {
  const lesson = {
    module: "The Writer's Apprenticeship: A Two-Year, Self-Paced MFA",
    title: "The Writer's Pact: Discipline, Routine, and the Commitment to the Craft",
    readingTime: 15,
    // The lesson's written content is stored here as an HTML string.
    content: `
      <p class="text-sm italic">Year 1, Semester 1, Week 1</p>
      <p class="text-sm italic">Estimated Time Commitment: 2-3 hours</p>

      <h2 class="font-display">1. Learning Objectives</h2>
      <p>By the end of this lesson, you will be able to:</p>
      <ul>
        <li>Articulate the difference between a writing hobby and a writing practice.</li>
        <li>Design a personalized and sustainable weekly writing schedule.</li>
        <li>Identify your primary obstacles to consistent writing and develop strategies to overcome them.</li>
        <li>Draft a personal "Writer's Pact" to serve as a mission statement for your writing journey.</li>
      </ul>

      <hr class="my-8"/>

      <h2 class="font-display">2. Written Lecture</h2>
      <h3 class="font-display">The Professional Amateur</h3>
      <p>Welcome to your apprenticeship. The first, and most critical, lesson has nothing to do with plot, character, or prose. It has to do with commitment. Before you are a storyteller, you must first be a worker. The muse, contrary to popular myth, does not visit the idle. She rewards the dedicated.</p>
      <p>Many writers wait for inspiration to strike. This is the amateur's way. The professional understands that inspiration is a byproduct of effort, not a prerequisite for it. You do not write when you feel like it. You write at your scheduled time, every time. You treat it like a job. You show up, punch the clock, and put in the hours. Some days the words will flow; other days they will feel like carving stone. It does not matter. You show up anyway.</p>
      <p>Your goal this week is to transform your mindset. You are not someone who writes. You are a writer. The distinction is action.</p>

      <h3 class="font-display">Building Your Writing Sanctuary</h3>
      <p>Your practice needs a time and a place. It must be sacred. This does not mean it needs to be silent or beautiful. Stephen King famously wrote his early novels in the laundry room of a trailer. Your "sanctuary" is simply the space where you have given yourself permission to do nothing but write.</p>
      <p><strong>Time:</strong> Look at your week with brutal honesty. Where can you carve out an hour? It might be at 5 AM before the house wakes up. It might be during your lunch break. It might be late at night after everyone else is asleep. Find the time, and guard it ruthlessly. It is non-negotiable.</p>
      <p><strong>Place:</strong> Find a corner, a desk, a specific chair. When you are there, you are at work. Eliminate distractions. Put your phone in another room. Use an app to block social media. This space is for the words and nothing else.</p>

      <hr class="my-8"/>

      <h2 class="font-display">3. Reading Assignment</h2>
      <p><strong>Primary Reading:</strong> Stephen King's <em>On Writing: A Memoir of the Craft</em>, the section titled "C.V." through to the end of "What Writing Is".</p>
      <p><strong>Secondary Reading:</strong> The chapter "Shitty First Drafts" from Anne Lamott's <em>Bird by Bird: Some Instructions on Writing and Life</em>.</p>
      <p><strong>Reading Questions:</strong></p>
      <ol>
        <li>King insists on a daily word count (2,000 words a day, every day). What is the psychological function of this rigid goal? Do you find it inspiring or intimidating?</li>
        <li>Lamott gives you permission to write a "shitty first draft." How does this concept liberate you from the pressure of perfectionism that often prevents writers from starting at all?</li>
      </ol>

      <hr class="my-8"/>

      <h2 class="font-display">4. Writing Assignment</h2>
      <p><strong>Primary Exercise: The Writer's Pact</strong></p>
      <p>Draft a one-page mission statement for your writing life. This is a contract with yourself. It must include the following four sections:</p>
      <div class="p-4 border rounded-xl bg-gray-50 dark:bg-gray-800">
        <h5 class="font-bold font-ui">My Writer's Pact</h5>
        <ol>
          <li><strong>My Goals:</strong> What do I want to achieve with my writing in the next two years? (Be specific: "Finish a novel draft," not "Become a better writer.")</li>
          <li><strong>My Schedule:</strong> When and where will I write? State the exact days, times, and location. (e.g., "Mon-Fri, 6 AM to 7 AM, at the kitchen table.")</li>
          <li><strong>My Rules:</strong> What will I do to protect my writing time? (e.g., "My phone will be off," "I will not check email before my session is over.")</li>
          <li><strong>My Promise:</strong> A one-sentence declaration of your commitment to the craft, to be revisited when you feel discouraged.</li>
        </ol>
      </div>

      <hr class="my-8"/>

      <h2 class="font-display">5. Discussion Prompts</h2>
      <p>For Community Forum or Writing Group:</p>
      <ol>
        <li>What is the most significant obstacle to establishing a consistent writing routine in your life? Time? Fear? Self-doubt? Discuss strategies for overcoming it.</li>
        <li>Do you believe that talent is more important than discipline, or vice versa? Defend your position using examples from your own experience or from the reading.</li>
        <li>Stephen King wrote in a laundry room. Where is your writing sanctuary? If you don't have one yet, what would your ideal space look like?</li>
      </ol>

      <hr class="my-8"/>

      <h2 class="font-display">6. Further Reading &amp; Resources</h2>
      <ul>
        <li><strong>Books:</strong>
          <ul>
            <li>Mason Currey, <em>Daily Rituals: How Artists Work</em> – A fascinating look at the routines of famous writers and artists.</li>
            <li>Dorothea Brande, <em>Becoming a Writer</em> – A classic text on developing the writer's temperament.</li>
          </ul>
        </li>
        <li><strong>Articles:</strong>
          <ul>
            <li>"The Psychology of the Writing Routine" by Maria Popova (Brain Pickings)</li>
            <li>"How to Build a Writing Habit" on The Write Practice</li>
          </ul>
        </li>
        <li><strong>Tools:</strong>
          <ul>
            <li><strong>Freedom or Cold Turkey:</strong> Apps to block distracting websites during your writing sessions.</li>
            <li><strong>Focusmate or Caveday:</strong> Virtual co-working sessions for accountability.</li>
          </ul>
        </li>
      </ul>

      <hr class="my-8"/>

      <h2 class="font-display">7. Reflection Journal Prompt</h2>
      <p>(To be completed at the end of the week)</p>
      <p>Write a one-page reflection addressing the following:</p>
      <ul>
        <li>Did you stick to your Writer's Pact this week? If not, what prevented you?</li>
        <li>What surprised you most about establishing a regular writing routine?</li>
        <li>Quote one sentence from King or Lamott that resonated most with you, and explain why.</li>
      </ul>

      <hr class="my-8"/>

      <h2 class="font-display">8. Optional Challenge</h2>
      <p><strong>The Seven-Day Streak:</strong> Write for at least 20 minutes every single day for seven consecutive days. It doesn't matter if the writing is "good." The goal is to prove to yourself that you can show up consistently. At the end of the week, journal about the experience: Was it easier or harder than you expected? How did your relationship with writing change over the course of the week?</p>

      <hr class="my-8"/>

      <h2 class="font-display">9. Key Takeaways &amp; Next Steps</h2>
      <p><strong>Essential Concepts:</strong></p>
      <ul>
        <li>Discipline precedes inspiration.</li>
        <li>A sacred time and place are essential for a sustainable writing practice.</li>
        <li>Permission to be imperfect in the first draft is the key to productivity.</li>
      </ul>
      <p><strong>Preview:</strong> In Lesson 2, now that we've established our discipline, we will build the engine of all narrative: <strong>Character</strong>. We will learn how a character's deep-seated motivations create a plot that is both inevitable and surprising.</p>
    `,
  };

  return (
    <main className="bg-canvas dark:bg-canvasDark text-ink dark:text-canvas min-h-screen font-body">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-display prose-a:text-glow dark:prose-a:text-mint hover:prose-a:underline">

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
                {lesson.readingTime} min read
              </div>
              <button
                aria-label="Bookmark this lesson"
                className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-glow dark:focus-visible:ring-offset-canvasDark"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* A11Y: The main lesson content is rendered from the hard-coded HTML string. */}
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
        </article>
      </div>
    </main>
  );
}
