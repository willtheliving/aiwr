// Define the Lesson type interface
export interface Lesson {
  slug: string;
  title: string;
  module: string;
  readingTime: number;
  videoUrl?: string;
  content: string;
}

// This is our mock database of lessons.
// The named export here is NOT in a page file, so it's perfectly valid.
const lessons: Lesson[] = [
  {
    slug: 'finding-your-voice',
    title: 'Finding Your Unique Voice',
    module: 'DIY MFA: Core Skills',
    readingTime: 12,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example video
    content: `
      <p>Your writer's voice is the unique fingerprint you leave on your work. It's a combination of your syntax, diction, punctuation, character development, and dialogue. But most of all, it's the feeling a reader gets that you, and no one else, could have written this piece.</p>
      <p>In this lesson, we will explore several techniques to help you uncover and refine your voice:</p>
      <ul>
        <li><strong>Freewriting:</strong> The practice of writing continuously without regard for grammar or spelling.</li>
        <li><strong>Reading Aloud:</strong> Hearing your words can reveal awkward phrasing and unnatural dialogue.</li>
        <li><strong>Analyzing Authors You Admire:</strong> Deconstruct what makes their voice so compelling.</li>
      </ul>
      <h2 class="font-display">The Myth of the Single Voice</h2>
      <p>Many writers believe they must find one singular voice and stick to it. This is a misconception. Your voice can and should adapt to the genre, tone, and characters of the story you are telling. A hard-boiled detective novel will have a different voice than a whimsical children's book, even if written by the same author.</p>
    `,
  },
  {
    slug: 'ai-as-a-brainstorming-partner',
    title: 'AI as a Brainstorming Partner',
    module: 'Intro to AI',
    readingTime: 8,
    content: `
      <p>Generative AI can be an incredibly powerful tool for breaking through writer's block and exploring new creative avenues. It excels at generating a high volume of ideas quickly, leaving you to curate, refine, and build upon the most promising ones.</p>
      <h2 class="font-display">Effective Prompting Techniques</h2>
      <p>The key to successful AI brainstorming is the art of the prompt. Vague prompts yield generic results. Be specific. Here are some examples:</p>
      <ul>
        <li>Instead of "Give me some story ideas," try "Give me five story ideas about a retired librarian who discovers a magical secret in a library in rural Vermont."</li>
        <li>For character development, try: "Create a character profile for a cynical spaceship mechanic who is secretly a gifted poet. Include their fears, desires, and a defining childhood memory."</li>
        <li>To brainstorm plot points, use a prompt like: "My protagonist has just been framed for a crime they didn't commit. What are three unexpected ways they could try to clear their name?"</li>
      </ul>
    `,
  },
  {
    slug: 'the-engine-of-story',
    title: 'The Engine of Story: Goal, Motivation, and Conflict',
    module: "The Writer's Apprenticeship: A Two-Year, Self-Paced MFA",
    readingTime: 20,
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

      <hr class="my-8">

      <h2 class="font-display">2. Written Lecture</h2>
      <h3 class="font-display">Character Creates Plot</h3>
      <p>In our first lesson, we established the discipline of the writer. Now, we turn to the engine of all narrative: character. Many novice writers believe that plot—the sequence of events—is what makes a story. They spend weeks devising intricate twists and explosive action sequences. This is a mistake.</p>
      <p><strong>Plot does not create character. Character creates plot.</strong></p>
      <p>A compelling story is not a report of things that happen; it is a journey of transformation. Events are only meaningful in how they reveal, test, and change the people within them. A car chase is boring. A car chase where the driver is a cripplingly anxious man, forced to break every rule he has ever lived by to save his child in the back seat—that is a story. The external action is merely a crucible for the internal human drama.</p>
      <p>To build stories that resonate, we must first build characters with deep, coherent, and powerful motivations. Today, we will build that engine.</p>
      
      <h3 class="font-display">Part I: The Foundational Dichotomy - Want vs. Need</h3>
      <p>At the heart of every great character lies a fundamental internal conflict: the tension between what they want and what they need. This is the central dichotomy that fuels their journey.</p>
      <h4>The "Want" (The External Goal)</h4>
      <p>The Want is the character's tangible, conscious, external goal. It is the plot-driver, the objective they can articulate and actively pursue. The Want is what the character thinks will make them happy. It should be specific and measurable.</p>
      
      <h3 class="font-display">Part II: The Source of the Struggle - The Lie and the Ghost</h3>
      <p>What creates this chasm between the Want and the Need? The answer lies in the character's past.</p>
      <h4>The "Lie the Character Believes"</h4>
      <p>The Lie is a fundamental misconception about oneself or the world that the character has internalized. It is a flawed worldview that governs their actions and justifies their Want. This Lie is almost always born from a past trauma; it is the wrong lesson learned from a painful experience.</p>
      <h4>The "Ghost" or "Wound"</h4>
      <p>The Lie does not appear from nowhere. It is born from a specific, formative event in the character's past known as the Ghost or the Wound. This is the haunting memory, the root trauma that shaped their entire psychology. Elsa's Ghost is the childhood incident where she accidentally injured her sister Anna with her powers. This event taught her the Lie that she is a danger to those she loves.</p>
      <p>This creates a clear causal chain that serves as your character's psychological blueprint:</p>
      <p class="text-center font-bold">GHOST (Past Wound) → LIE (Flawed Belief) → WANT (External Goal) vs. NEED (Internal Truth)</p>
      
      <h3 class="font-display">Part III: The Crucible - Where Internal and External Conflict Meet</h3>
      <p>The secret to profound storytelling is to use the external conflict to force the internal conflict to the surface. The plot events you devise should not be random; they must be specifically engineered to challenge the character's Lie.</p>

      <hr class="my-8">

      <h2 class="font-display">3. Reading Assignment</h2>
      <p><strong>Primary Reading:</strong> F. Scott Fitzgerald's The Great Gatsby, Chapters 1-3.</p>
      <p><strong>Secondary Reading:</strong> The article "Creating Your Character's Inner Conflict: Want vs. Need" by K.M. Weiland on the website Helping Writers Become Authors.</p>
      <h4>Reading Questions:</h4>
      <ol>
        <li>Based on the first three chapters of Gatsby, what is Jay Gatsby's explicit, external Want?</li>
        <li>What do you suspect is Gatsby's deeper, internal Need? What truth about himself or the world must he learn?</li>
        <li>Nick Carraway is the narrator. What is his initial Want in moving to the East? How is it immediately complicated by his encounter with the world of Gatsby and the Buchanans?</li>
        <li>The "valley of ashes" is a powerful piece of external setting. How does it reflect the internal moral landscape of the characters?</li>
        <li>Based on the Weiland article, how does the conflict between Gatsby's Want and his Need create the central tension of the novel's opening chapters?</li>
      </ol>
      <p><strong>Reading Journal Prompt:</strong> In 300 words, create a preliminary "Lie" and "Ghost" for Jay Gatsby, using the terminology from the lecture and the secondary reading.</p>
      
      <hr class="my-8">

      <h2 class="font-display">4. Writing Assignment</h2>
      <h4>Primary Exercise (1 page):</h4>
      <p>Create a one-page character profile for a new fictional character. Using the framework from the lecture, you must define the following four elements in detail.</p>
      <div class="p-4 border rounded-xl bg-gray-50 dark:bg-gray-800">
        <h5 class="font-bold font-ui">Character Profile Template:</h5>
        <p><strong>The Ghost (The Wound):</strong> Describe the specific, formative event from your character's past that defines them. (1-2 paragraphs)</p>
        <p><strong>The Lie:</strong> State, in a single sentence, the flawed lesson or core misconception your character learned from their Ghost.</p>
        <p><strong>The Want (External Goal):</strong> Describe the tangible, specific, external goal your character is pursuing at the start of the story. (1 paragraph)</p>
        <p><strong>The Need (Internal Truth):</strong> State, in a single sentence, the truth your character must learn to become whole.</p>
      </div>

      <hr class="my-8">

      <h2 class="font-display">9. Key Takeaways & Next Steps</h2>
      <h4>Essential Concepts:</h4>
      <ul>
        <li>A character's external Want drives the plot; their internal Need drives their transformation.</li>
        <li>A past Ghost (wound) creates a present Lie (flawed belief) that dictates the character's actions.</li>
        <li>The most effective stories use external conflict to test and reveal a character's internal conflict.</li>
      </ul>
      <p><strong>Preview:</strong> In Lesson 3, we will explore how to give this psychologically-sound character a compelling and unique Narrative Voice.</p>
    `,
  },
];

// Function to get all lessons
export const getAllLessons = (): Lesson[] => {
  return lessons;
};

// Function to retrieve a single lesson by its slug
export const getLessonBySlug = (slug: string): Lesson | undefined => {
  return lessons.find((lesson) => lesson.slug === slug);
};
