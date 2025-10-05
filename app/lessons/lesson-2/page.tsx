import type { Metadata } from 'next';
import { Bookmark, Clock, GraduationCap, PenSquare } from 'lucide-react';

// --- Metadata for this specific lesson is hard-coded ---
export const metadata: Metadata = {
  title: "Lesson 2: The Engine of Story | AI Writers Retreat",
  description: "Understand how a character's deep-seated motivations create a plot that is both inevitable and surprising.",
};

// --- This is the main Page Component (the required default export) ---
// All content for "The Engine of Story" is directly inside this component.
export default function EngineOfStoryLessonPage() {
  const lesson = {
    module: "The Writer's Apprenticeship: A Two-Year, Self-Paced MFA",
    title: "The Engine of Story: Goal, Motivation, and Conflict",
    readingTime: 20,
    // The lesson's written content is stored here as an HTML string.
    content: `
      <p class="text-sm italic">Year 1, Semester 1, Week 2</p>
      <p class="text-sm italic">Estimated Time Commitment: 3-4 hours</p>
      <p class="text-sm italic">Prerequisites: Lesson 1: The Writer's Pact</p>

      <h2 class="font-display">1. Learning Objectives</h2>
      <p>By the end of this lesson, you will be able to:</p>
      <ul>
        <li>Distinguish between a character's external "Want" and their internal "Need."</li>
        <li>Articulate how a character's "Ghost" (a past wound) creates the "Lie" they believe, which in turn drives their actions.</li>
        <li>Analyze the symbiotic relationship between internal conflict (a character's psychological struggle) and external conflict (the plot's obstacles).</li>
        <li>Create a one-page character profile that outlines a character's Ghost, Lie, Want, and Need, forming a coherent psychological engine.</li>
      </ul>

      <hr class="my-8"/>

      <h2 class="font-display">2. Written Lecture</h2>
      <h3 class="font-display">Character Creates Plot</h3>
      <p>In our first lesson, we established the discipline of the writer. Now, we turn to the engine of all narrative: character. Many novice writers believe that plot—the sequence of events—is what makes a story. They spend weeks devising intricate twists and explosive action sequences. This is a mistake.</p>
      <p><strong>Plot does not create character. Character creates plot.</strong></p>
      <p>A compelling story is not a report of things that happen; it is a journey of transformation. Events are only meaningful in how they reveal, test, and change the people within them. A car chase is boring. A car chase where the driver is a cripplingly anxious man, forced to break every rule he has ever lived by to save his child in the back seat—that is a story. The external action is merely a crucible for the internal human drama.</p>
      <p>To build stories that resonate, we must first build characters with deep, coherent, and powerful motivations. Today, we will build that engine.</p>

      <h3 class="font-display">Part I: The Foundational Dichotomy - Want vs. Need</h3>
      <p>At the heart of every great character lies a fundamental internal conflict: the tension between what they <em>want</em> and what they <em>need</em>. This is the central dichotomy that fuels their journey.</p>
      <p><strong>The "Want" (The External Goal)</strong></p>
      <p>The Want is the character's tangible, conscious, external goal. It is the plot-driver, the objective they can articulate and actively pursue. The Want is what the character <em>thinks</em> will make them happy. It should be specific and measurable.</p>
      <p><strong>The "Need" (The Internal Truth)</strong></p>
      <p>The Need is the character's unconscious, internal, emotional truth. It is the psychological state or revelation they must achieve to become whole. The Need is what will <em>actually</em> make them happy, but they don't know it yet. It is often a truth about themselves or the world that they are avoiding.</p>

      <h3 class="font-display">Part II: The Source of the Struggle - The Lie and the Ghost</h3>
      <p>What creates this chasm between the Want and the Need? The answer lies in the character's past.</p>
      <p><strong>The "Lie the Character Believes"</strong></p>
      <p>The Lie is a fundamental misconception about oneself or the world that the character has internalized. It is a flawed worldview that governs their actions and justifies their Want. This Lie is almost always born from a past trauma; it is the wrong lesson learned from a painful experience.</p>
      <p><strong>The "Ghost" or "Wound"</strong></p>
      <p>The Lie does not appear from nowhere. It is born from a specific, formative event in the character's past known as the Ghost or the Wound. This is the haunting memory, the root trauma that shaped their entire psychology.</p>
      <p>This creates a clear causal chain that serves as your character's psychological blueprint:</p>
      <p class="text-center font-bold">GHOST (Past Wound) → LIE (Flawed Belief) → WANT (External Goal) vs. NEED (Internal Truth)</p>

      <h3 class="font-display">Part III: The Crucible - Where Internal and External Conflict Meet</h3>
      <p>The secret to profound storytelling is to use the external conflict to force the internal conflict to the surface. The plot events you devise should not be random; they must be specifically engineered to challenge the character's Lie.</p>

      <hr class="my-8"/>

      <h2 class="font-display">3. Reading Assignment</h2>
      <p><strong>Primary Reading:</strong> F. Scott Fitzgerald's <em>The Great Gatsby</em>, Chapters 1-3.</p>
      <p><strong>Secondary Reading:</strong> The article "Creating Your Character's Inner Conflict: Want vs. Need" by K.M. Weiland on the website Helping Writers Become Authors.</p>
      <p><strong>Reading Questions:</strong></p>
      <ol>
        <li>Based on the first three chapters of Gatsby, what is Jay Gatsby's explicit, external Want?</li>
        <li>What do you suspect is Gatsby's deeper, internal Need? What truth about himself or the world must he learn?</li>
        <li>Nick Carraway is the narrator. What is his initial Want in moving to the East? How is it immediately complicated by his encounter with the world of Gatsby and the Buchanans?</li>
        <li>The "valley of ashes" is a powerful piece of external setting. How does it reflect the internal moral landscape of the characters?</li>
        <li>Based on the Weiland article, how does the conflict between Gatsby's Want and his Need create the central tension of the novel's opening chapters?</li>
      </ol>
      <p><strong>Reading Journal Prompt:</strong> In 300 words, create a preliminary "Lie" and "Ghost" for Jay Gatsby, using the terminology from the lecture and the secondary reading.</p>

      <hr class="my-8"/>

      <h2 class="font-display">4. Writing Assignment</h2>
      <p><strong>Primary Exercise (1 page):</strong></p>
      <p>Create a one-page character profile for a new fictional character. Using the framework from the lecture, you must define the following four elements in detail.</p>
      <div class="p-4 border rounded-xl bg-gray-50 dark:bg-gray-800">
        <h5 class="font-bold font-ui">Character Profile Template:</h5>
        <ol>
          <li><strong>The Ghost (The Wound):</strong> Describe the specific, formative event from your character's past that defines them. (1-2 paragraphs)</li>
          <li><strong>The Lie:</strong> State, in a single sentence, the flawed lesson or core misconception your character learned from their Ghost.</li>
          <li><strong>The Want (External Goal):</strong> Describe the tangible, specific, external goal your character is pursuing at the start of the story. (1 paragraph)</li>
          <li><strong>The Need (Internal Truth):</strong> State, in a single sentence, the truth your character must learn to become whole.</li>
        </ol>
      </div>

      <hr class="my-8"/>

      <h2 class="font-display">5. Discussion Prompts</h2>
      <p>For Community Forum or Writing Group:</p>
      <ol>
        <li>Think of your favorite protagonist from a novel, film, or TV show. Can you identify their Want and their Need? How does the story use the external plot to challenge the internal Lie?</li>
        <li>In your own writing, do you tend to focus more on external plot or internal character development? What are the strengths and weaknesses of your natural approach?</li>
        <li>Discuss a time in your own life when what you <em>wanted</em> was different from what you <em>needed</em>. How did you reconcile that tension?</li>
      </ol>

      <hr class="my-8"/>

      <h2 class="font-display">6. Further Reading &amp; Resources</h2>
      <ul>
        <li><strong>Books:</strong>
          <ul>
            <li>K.M. Weiland, <em>Creating Character Arcs: The Masterful Author's Guide to Uniting Story Structure, Plot, and Character Development</em></li>
            <li>Donald Maass, <em>The Emotional Craft of Fiction: How to Write the Story Beneath the Surface</em></li>
            <li>Lisa Cron, <em>Wired for Story: The Writer's Guide to Using Brain Science to Hook Readers from the Very First Sentence</em></li>
          </ul>
        </li>
        <li><strong>Articles:</strong>
          <ul>
            <li>"The Positive Change Arc" series by K.M. Weiland (Helping Writers Become Authors)</li>
            <li>"Character Want vs. Character Need" on The Write Practice</li>
          </ul>
        </li>
        <li><strong>Films to Study:</strong>
          <ul>
            <li><em>Frozen</em> (2013) - A masterclass in Want vs. Need (Elsa's journey)</li>
            <li><em>The Shawshank Redemption</em> (1994) - Ghost, Lie, and transformation through adversity</li>
          </ul>
        </li>
      </ul>

      <hr class="my-8"/>

      <h2 class="font-display">7. Reflection Journal Prompt</h2>
      <p>(To be completed at the end of the week)</p>
      <p>Write a one-page reflection addressing the following:</p>
      <ul>
        <li>Did the character you created for the writing assignment feel psychologically coherent? Why or why not?</li>
        <li>How has this lesson changed the way you think about plot and character?</li>
        <li>What is one Ghost, Lie, or Need from your own life that you could use to inform a character's journey?</li>
      </ul>

      <hr class="my-8"/>

      <h2 class="font-display">8. Optional Challenge</h2>
      <p><strong>Reverse-Engineering Exercise:</strong> Choose a beloved protagonist from a novel or film. Write a one-page analysis identifying their Ghost, Lie, Want, and Need. Then, choose one pivotal scene from their story and explain how that scene specifically challenges their Lie and pushes them toward their Need.</p>

      <hr class="my-8"/>

      <h2 class="font-display">9. Key Takeaways &amp; Next Steps</h2>
      <p><strong>Essential Concepts:</strong></p>
      <ul>
        <li>A character's external Want drives the plot; their internal Need drives their transformation.</li>
        <li>A past Ghost (wound) creates a present Lie (flawed belief) that dictates the character's actions.</li>
        <li>The most effective stories use external conflict to test and reveal a character's internal conflict.</li>
      </ul>
      <p><strong>Preview:</strong> In Lesson 3, we will explore how to give this psychologically-sound character a compelling and unique <strong>Narrative Voice</strong>.</p>
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
