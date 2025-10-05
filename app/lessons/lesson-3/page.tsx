import type { Metadata } from 'next';
import { Bookmark, Clock, GraduationCap } from 'lucide-react';

// --- Metadata for this specific lesson is hard-coded ---
export const metadata: Metadata = {
  title: "Lesson 3: Finding the Filter | AI Writers Retreat",
  description: "Learn to craft a powerful narrative voice by understanding Point of View and the 'Filter Principle.'",
};

// --- This is the main Page Component (the required default export) ---
// All content for "Finding the Filter" is directly inside this component.
export default function FindingTheFilterLessonPage() {
  const lesson = {
    module: "The Writer's Apprenticeship: A Two-Year, Self-Paced MFA",
    title: "Lesson 3: Finding the Filter: Crafting a Powerful Narrative Voice",
    readingTime: 18,
    // The lesson's written content is stored here as an HTML string.
    content: `
      <p class="text-sm italic">Year 1, Semester 1, Week 3</p>
      <p class="text-sm italic">Estimated Time Commitment: 3-4 hours</p>
      <p class="text-sm italic">Prerequisites: Lesson 1 & Lesson 2</p>

      <h2 class="font-display">1. Learning Objectives</h2>
      <p>By the end of this lesson, you will be able to:</p>
      <ul>
        <li>Distinguish between authorial voice, narrative voice, and character voice.</li>
        <li>Analyze the strategic implications of different Points of View (First Person, Third Person Limited, Third Person Omniscient).</li>
        <li>Apply the "Filter Principle" to create a distinct narrative voice profile for a character based on their psychology.</li>
        <li>Write a 750-word scene that consistently maintains a specific character's narrative voice and point of view.</li>
      </ul>

      <hr class="my-8">

      <h2 class="font-display">2. Written Lecture</h2>
      <h3 class="font-display">The Writer's Fingerprint</h3>
      <p>Why can you recognize a Hemingway sentence before his name is ever mentioned? Why does the opening paragraph of a novel by William Faulkner feel utterly different from one by Jane Austen? The answer is voice.</p>
      <p>Voice is the most elemental and potent force in writing. It is the intangible quality that turns a sequence of words into a living, breathing consciousness on the page. It is the writer's unique fingerprint. But "voice" is not a single, mystical quality. It is the result of a series of deliberate, technical choices. For us to control it, we must first deconstruct it.</p>
      
      <h3 class="font-display">Part I: The Causal Chain of Voice</h3>
      <p>The terms voice, style, and tone are often used interchangeably, but they exist in a distinct causal relationship. Understanding this chain is the key to mastering authorial control.</p>
      <ul>
        <li><strong>Authorial Voice:</strong> This is the writer's unique and inherent linguistic DNA—their signature patterns of thought, syntax, and expression that are present across all their work. You don't choose this; you discover and refine it.</li>
        <li><strong>Style:</strong> This refers to the conscious and controllable choices a writer makes. Diction (word choice), syntax (sentence arrangement), and the use of literary devices all constitute style.</li>
        <li><strong>Narrative Voice:</strong> This is the specific persona or consciousness telling the story. By making stylistic choices, the author creates a narrative voice. This voice might be witty and detached, or anxious and intimate. It is the "who" that is speaking to the reader.</li>
        <li><strong>Tone:</strong> This is the emotional atmosphere or attitude the reader perceives as a result of the narrative voice's interaction with the subject matter.</li>
      </ul>

      <h3 class="font-display">Part II: The Camera and the Consciousness - Choosing Your Point of View (POV)</h3>
      <p>The most fundamental stylistic choice you will make is the Point of View. This is not merely a pronoun selection; it is a strategic decision that controls the flow of information and dictates the reader's proximity to the characters.</p>
      <ul>
        <li><strong>First Person ("I"):</strong> This POV offers the highest level of intimacy. The reader experiences the world directly through the narrator's thoughts and senses. Its primary strength is its immediacy; its primary weakness is that the narrator is inherently limited and potentially unreliable.</li>
        <li><strong>Third Person Limited ("He/She/They"):</strong> The narrative is filtered through the consciousness of a single character, but told using a third-person pronoun. The reader has access to that character's thoughts and feelings, but no one else's.</li>
        <li><strong>Third Person Omniscient ("He/She/They"):</strong> The narrator is "all-knowing." This voice can access the thoughts and feelings of any character at any time and can provide information that no single character knows. Its strength is its vast scope; its weakness is the risk of emotional distance.</li>
      </ul>

      <h3 class="font-display">Part III: The Filter Principle - Making Voice Tangible</h3>
      <p>To apply this, you must first create a Narrative Voice Profile for your POV character, based on their Ghost, Lie, Want, and Need. This profile consists of three elements:</p>
      <ol>
        <li><strong>Core Mood:</strong> Is the character generally cynical, optimistic, paranoid, naive?</li>
        <li><strong>Vocabulary:</strong> Do they use simple, direct language or complex, academic terms?</li>
        <li><strong>Sentence Structure:</strong> Do they think in long, flowing, reflective sentences or short, fragmented, anxious bursts?</li>
      </ol>
      <p>Let's see the Filter Principle in action. A generic description might be: "A car was parked across the street." Now, let's filter that through a character with a "paranoid" core mood.</p>
      <p><em>Filtered Description: "A dark sedan sat across the street, its stillness predatory, its tinted windows hiding unseen eyes."</em></p>
      <p>The car hasn't changed. The character's perception has changed everything. The filtered description doesn't just describe a car; it reveals the narrator's internal state of fear.</p>
      
      <hr class="my-8">

      <h2 class="font-display">3. Reading Assignment</h2>
      <p><strong>Primary Reading 1 (First Person):</strong> “The Yellow Wallpaper” by Charlotte Perkins Gilman — <a href="https://www.gutenberg.org/files/1952/1952-h/1952-h.htm" target="_blank" rel="noopener noreferrer">full text via Project Gutenberg</a>.</p>
      <p><strong>Primary Reading 2 (Third Person Limited):</strong> “The Story of an Hour” by Kate Chopin — <a href="https://archive.vcu.edu/english/engweb/webtexts/hour/" target="_blank" rel="noopener noreferrer">full text via VCU archive</a>.</p>
      <p><strong>Secondary Reading (Craft Article):</strong> “Narrative Voice Development: Crafting a Unique Style for Your Story” — <a href="https://spines.com/narrative-voice-development-crafting-a-unique-style/" target="_blank" rel="noopener noreferrer">via Spines</a>.</p>

      <h2 class="font-display">4. Writing Assignment</h2>
      <p><strong>Primary Exercise (750 words):</strong> Write a 750-word scene in which the character from your Lesson 2 profile enters a crowded, noisy room (e.g., a party, a bus station, a school cafeteria).</p>
      <p><strong>Constraint 1:</strong> Choose either First Person or Third Person Limited POV and maintain it consistently.</p>
      <p><strong>Constraint 2:</strong> Describe the room and the people in it only through the filter of your character's specific psychology (their Lie, Want, and Core Mood). Do not provide any objective, unfiltered description. The details they notice must reveal who they are.</p>
      
      <hr class="my-8">

      <h2 class="font-display">5. AI Integration Component</h2>
      <p><strong>AI Brainstorming Prompt (Voice Profile Generator):</strong></p>
      <p class="p-2 bg-gray-100 dark:bg-gray-800 rounded-md"><strong>Prompt:</strong> "My character's 'Lie' is that 'vulnerability is a fatal weakness.' Their core mood is cynical and guarded. Based on this profile, generate: 1) A list of 10 vocabulary words they would likely use to describe the world. 2) A list of 10 emotionally open words they would actively avoid. 3) A description of their likely sentence structure."</p>

      <hr class="my-8">
      
      <h2 class="font-display">6. Key Takeaways & Next Steps</h2>
      <h4>Essential Concepts:</h4>
      <ul>
        <li>Voice is the product of deliberate stylistic choices.</li>
        <li>Point of View is a strategic tool that controls the flow of information.</li>
        <li>All description should be filtered through the consciousness of the POV character.</li>
      </ul>
      <p><strong>Preview:</strong> In Lesson 4, we will take our character—who now has a psychological engine and a unique voice—and place them in a tangible world. We will explore the art of Setting and Scene Construction.</p>
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

          {/* A11Y: The main lesson content is rendered from the hard-coded HTML string. */}
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />

        </article>
      </div>
    </main>
  );
}
