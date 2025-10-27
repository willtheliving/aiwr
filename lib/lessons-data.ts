import type { Lesson } from './types';

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
  {
    slug: 'weaving-the-fabric',
    title: 'DIY MFA Lesson Five: Weaving the Fabric',
    module: "The Writer's Apprenticeship: A Two-Year, Self-Paced MFA",
    readingTime: 25,
    content: `
      <p class="text-sm italic">DIY MFA IN WRITING Lesson Five Weaving the Fabric: Transitions, Subplots, and Narrative Momentum</p>
      <p class="text-sm italic">Program: The Writer's Apprenticeship: A Two-Year, Self-Paced MFA</p>
      <p class="text-sm italic">Position: Year 1, Semester 1, Week 5</p>
      <p class="text-sm italic">Estimated Time Commitment: 3-4 hours</p>
      <p class="text-sm italic">Prerequisites: Lessons 1-4</p>

      <h2 class="font-display">1. Learning Objectives</h2>
      <p>By the end of this lesson, you will be able to:</p>
      <ul>
        <li>Identify and apply different types of narrative transitions to create a smooth and logical flow between scenes and paragraphs.</li>
        <li>Define the primary functions of a subplot, including how it can intensify conflict and reinforce theme.</li>
        <li>Analyze the relationship between the main plot and a subplot in a work of fiction.</li>
        <li>Write two distinct but connected scenes, using a clear transitional device and introducing a simple subplot.</li>
      </ul>

      <h2 class="font-display">2. Lecture</h2>
      <h3 class="font-display">The Art of the Unseen Stitch</h3>
      <p>If scenes, as we learned in Lesson 4, are the individual vertebrae of a story, then transitions are the connective tissue holding them together. A story can have brilliant characters and dramatic scenes, but if the links between those scenes are jarring, confusing, or nonexistent, the narrative will feel disjointed and the reader’s immersion will break. The art of storytelling lies not just in the power of your scenes, but in the elegance of your transitions—the unseen stitch work that turns pieces of fabric into a cohesive tapestry.</p>
      <p>At the same time, a story composed of a single, linear plot can feel thin. Real life is not a single thread; it’s a weave. Subplots—secondary storylines that run parallel to the main plot—add complexity, depth, and a sense of lived-in reality.</p>
      <p>Today, we’ll work on both: the art of the transition and the strategic use of the subplot. Together, they generate narrative momentum.</p>

      <h4 class="font-display">Part I: The Connective Tissue - Mastering Transitions</h4>
      <p>Transitions guide your reader from one moment to the next on both the micro level (between sentences/paragraphs) and the macro level (between scenes/chapters).</p>
      <ul>
        <li><strong>Word and Phrase Transitions.</strong> These are explicit signposts (e.g., <em>therefore, however, meanwhile; an hour later; back at the safehouse</em>). Use them to clarify time, causality, or location, but avoid overuse that can make prose feel mechanical.</li>
        <li><strong>The Head-to-Tail Echo.</strong> Link paragraphs or scenes by echoing a key word, image, or concept at the end of one section in the opening of the next. This creates a subtle chain of logic and rhythm.</li>
      </ul>
      <p><em>Example:</em><br>
      <em>…He stared at the eviction notice, the crisp paper a death warrant for the only home he’d ever known. All he could think about was the promise of a new life, glittering on the distant horizon.</em><br>
      <em>That distant horizon was exactly what worried Maria. From her vantage point on the hill, storm clouds gathered, a bruise of purple and grey that promised trouble.</em></p>
      <ul>
        <li><strong>Scene and Chapter Breaks.</strong> Asterisks or new chapter headings signal larger shifts in time, location, or POV. The sentences just before and after a break must orient the reader. Endings should leave the “story door open”: pose a question, intensify a threat, or set up a cliffhanger that compels the next page turn.</li>
      </ul>

      <h4 class="font-display">Part II: The Power of the Subplot - Adding Depth and Complexity</h4>
      <p>A subplot is a secondary storyline that intersects with the main plot. It should enhance—not eclipse—the central narrative. Think of subplots as amplifiers of pressure, theme, and character.</p>

      <h5 class="font-display">Functions of Subplots:</h5>
      <ol>
        <li><strong>Intensify Conflict / Raise Stakes.</strong> Subplots introduce obstacles that complicate the protagonist’s pursuit of the main goal (e.g., a detective’s blackmail threat complicates an ongoing investigation).</li>
        <li><strong>Enrich Characterization.</strong> Subplots expose values, flaws, loyalties, and capacities for change in both protagonists and key supporting characters.</li>
        <li><strong>Reinforce Theme.</strong> The most powerful subplots refract the central theme from another angle, creating resonance (e.g., a pacifist parent as a thematic counterpoint to a soldier protagonist).</li>
      </ol>

      <h5 class="font-display">Common Subplot Archetypes:</h5>
      <ul>
        <li><strong>Mirror Subplot.</strong> A secondary character faces a similar problem, illuminating possible outcomes or lessons.</li>
        <li><strong>Foil (Contrasting) Subplot.</strong> A similar dilemma, different choices—highlighting the protagonist’s path by contrast.</li>
        <li><strong>Romantic Subplot.</strong> Emotional stakes rise, vulnerabilities surface, and choices in love echo choices in the main plot.</li>
      </ul>

      <h4 class="font-display">Part III: The Engine of Momentum - Cause and Effect</h4>
      <p>Narrative momentum arises from scenes built on “Goal → Conflict → Disaster” (Lesson 4) and connected by clear cause-and-effect.</p>
      <ul>
        <li>The <strong>Disaster</strong> at the end of Scene A creates a new problem.</li>
        <li>That problem becomes the <strong>Goal</strong> of Scene B.</li>
      </ul>
      <p><strong>Example chain:</strong><br>
      <strong>Scene A (Disaster):</strong> The spy opens the safe—no microchip. A guard enters.<br>
      <strong>Effect → New Goal:</strong> Escape.<br>
      <strong>Scene B (Goal):</strong> Get out.<br>
      <strong>Conflict:</strong> The guard blocks the door.<br>
      <strong>Disaster:</strong> The spy knocks the guard out but is shot in the arm; an alarm blares.<br>
      <strong>Effect → New Goal:</strong> Reach the rendezvous before bleeding out or being captured.</p>
      <p>Subplots fold into this chain by adding complications that make each new goal harder.</p>

      <h2 class="font-display">3. Reading Assignment</h2>
      <p><strong>Primary Reading:</strong> F. Scott Fitzgerald’s <em>The Great Gatsby</em>, <strong>Chapters 4–6</strong>. (Builds on our reading from Lesson 2.)</p>
      <p><strong>Secondary Reading:</strong> Jane Friedman, <a class="underline" href="https://janefriedman.com/how-to-use-subplots/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">“How to Skillfully Use Subplots in Your Novel.”</a> Focus on her criteria for when to add a subplot, how to keep it subordinate to the main arc, and practical checkpoints for tying subplots to stakes and theme. If you want a backup resource, read a free guide of similar scope from a reputable writing-craft site.</p>
      <h4>Reading Questions:</h4>
      <ol>
        <li>In Chapters 4–6 of <em>Gatsby</em>, what is the <strong>main plot</strong>? Identify Gatsby’s <strong>primary goal</strong> that drives the action in this section.</li>
        <li>Identify at least <strong>one major subplot</strong> developed in these chapters (e.g., <strong>Nick and Jordan’s relationship</strong>; <strong>Gatsby’s ties to Wolfsheim and the rumors around his past</strong>). Explain how it intersects with the main plot.</li>
        <li>How does the subplot you identified <strong>reinforce central themes</strong> (e.g., wealth, reinvention, dishonesty, the pull of the past)? Provide a specific moment from Chapters 4–6.</li>
        <li>Examine the <strong>transition between Chapter 4 and Chapter 5</strong>. How does Fitzgerald end Chapter 4 (Jordan’s account and the plan for tea) to set up the <strong>immediate narrative momentum</strong> of Chapter 5 (the reunion in the rain)? What concrete cues orient you across the break?</li>
        <li>From the <strong>Friedman article</strong>, list <strong>two techniques</strong> for raising stakes via subplots. Then, using Chapters 4–6, show how <strong>Tom’s suspicions about Gatsby</strong> and the <strong>social pressure at the party in Chapter 6</strong> function as subplot-driven pressure on Gatsby’s main goal. <em>(Stay anchored to Chapters 4–6.)</em></li>
      </ol>
      <p><strong>Reading Journal Prompt:</strong> In ~300 words, analyze the subplot involving <strong>Nick and Jordan</strong>. Is it a <strong>Mirror</strong>, <strong>Foil</strong>, or <strong>Romantic</strong> subplot—or a blend? What does this secondary storyline reveal about Nick’s character and reliability as a narrator, and how does it color our view of Gatsby’s pursuit?</p>

      <h2 class="font-display">4. Writing Assignment</h2>
      <h4>Warm-up Exercise (10 minutes):</h4>
      <ol>
        <li>Write two separate, one-sentence paragraphs.</li>
        <li>Combine them with a single transitional phrase (<em>because, while, despite,</em> etc.).</li>
        <li>Now separate them again and connect with a <strong>Head-to-Tail Echo</strong> instead. Note how tone and pacing change.</li>
      </ol>

      <h4>Primary Exercise (1,200 words):</h4>
      <p>Write two scenes (~600 words each).</p>
      <ul>
        <li><strong>Scene A:</strong> Use the Goal–Conflict–Disaster model from Lesson 4 with your ongoing character. End with a <strong>clear disaster</strong> that creates a new problem.</li>
        <li><strong>Scene B:</strong> Takes place <strong>immediately after</strong> Scene A (new location/time okay). The <strong>Goal of Scene B</strong> must be a <strong>direct result</strong> of Scene A’s disaster.</li>
      </ul>
      <p><strong>Constraint 1:</strong> Connect Scene A and Scene B with a <strong>clear transitional device</strong> (e.g., a chapter break + strong head-to-tail echo, or a concise time/location phrase).</p>
      <p><strong>Constraint 2:</strong> In Scene B, <strong>introduce a simple subplot</strong> (e.g., a new character who complicates logistics, a call that reveals a secondary problem, or an internal memory foreshadowing unresolved history).</p>
      <p><strong>Revision Task:</strong> Re-read the seam between your scenes. Is the transition smooth and logical? Can you <strong>strengthen the echo</strong>? Does the subplot feel like an organic complication rather than a detour?</p>
      <p><strong>Reflection Component (200 words):</strong> Was it difficult to ensure Scene B’s goal directly emerged from Scene A’s disaster? How does your subplot complicate your protagonist’s capacity to confront the main conflict?</p>

      <h2 class="font-display">5. AI Integration Component</h2>
      <p><strong>AI Brainstorming Prompt (Subplot Generator):</strong><br>
      “My story’s main plot is about [e.g., a detective hunting a serial killer]. The story’s central theme is [e.g., ‘the fallibility of memory’]. Generate three potential subplots (a Mirror, a Foil, and a Romantic subplot) that complicate the main plot and reinforce this theme.”</p>
      <p><strong>AI Editing Exercise (Transition Smoother):</strong><br>
      “Here are the last paragraph of one scene and the first paragraph of the next scene. They feel disconnected. Suggest three different ways to rewrite the opening of the second paragraph to create a stronger <strong>head-to-tail echo</strong> from the first.”</p>
      <p><strong>AI Critique &amp; Ethical Considerations:</strong><br>
      AI is useful for variation and speed, but it cannot feel thematic resonance. When reviewing AI-generated subplot ideas, ask:</p>
      <ul>
        <li><strong>Character truth:</strong> Does this complication feel emotionally true to my character?</li>
        <li><strong>Causality:</strong> Does it arise from prior cause-and-effect, or is it a bolt from the blue?</li>
        <li><strong>Thematic fit:</strong> Does it refract the story’s central theme rather than distract from it?</li>
      </ul>
      <p>Choose only the ideas that deepen character, sharpen theme, and tighten the causal chain.</p>

      <h2 class="font-display">6. Community Component</h2>
      <p><strong>Peer Exchange:</strong> Share your two connected scenes with your accountability partner. Ask:</p>
      <ul>
        <li>Was the transition clear? Were you ever confused about time or location?</li>
        <li>What do you think the purpose of the subplot is, and how does it affect the main goal?</li>
        <li>Where did you feel momentum accelerate or stall?</li>
      </ul>

      <h2 class="font-display">7. Self-Assessment Tools</h2>
      <h4>Progress Checklist:</h4>
      <ul>
        <li>[ ] I have completed the primary and secondary readings.</li>
        <li>[ ] I have completed the reading journal prompt.</li>
        <li>[ ] I have written two connected scenes totaling ~1,200 words.</li>
        <li>[ ] I have applied the Goal–Conflict–Disaster model in Scene A.</li>
        <li>[ ] I have introduced a relevant subplot in Scene B.</li>
        <li>[ ] I have saved this work in my Semester 1 Portfolio.</li>
      </ul>
      <h4>Skills Rubric:</h4>
      <ul>
        <li><strong>Narrative Flow</strong> (Developing / Proficient / Advanced) — How smooth and logical is the transition between my scenes?</li>
        <li><strong>Subplot Integration</strong> (Developing / Proficient / Advanced) — Does my subplot connect to the main story and theme, or does it read as a diversion?</li>
      </ul>
      <p><strong>Portfolio Guidelines:</strong> Save your two connected scenes in your Semester 1 Portfolio. They mark your first deliberate attempt at weaving a multi-layered narrative.</p>

      <h2 class="font-display">8. Extension Activities (Optional)</h2>
      <ul>
        <li><strong>For Advanced Students:</strong> Outline the <strong>beginning–middle–end</strong> of your subplot and note where it <strong>converges</strong> with the main plot, ideally influencing the climax or forcing the decisive choice.</li>
        <li><strong>For Struggling Students:</strong> Draft only the <strong>last paragraph of Scene A (ending in disaster)</strong> and the <strong>first paragraph of Scene B (new goal)</strong>. Revise until the causal link is unmistakable.</li>
        <li><strong>Cross-Genre Exploration:</strong> Watch a half-hour sitcom episode. Identify the <strong>A-plot</strong> (main story) and the <strong>B-plot</strong> (primary subplot). Where do they intersect, and how does that intersection reframe the A-plot’s resolution?</li>
      </ul>

      <h2 class="font-display">9. Key Takeaways &amp; Next Steps</h2>
      <h4>Essential Concepts:</h4>
      <ul>
        <li>Smooth transitions are the invisible stitches that hold a story together.</li>
        <li>Subplots add depth, raise stakes, and echo the main theme.</li>
        <li>Momentum comes from a <strong>relentless causal chain</strong>: each disaster seeds the next goal.</li>
      </ul>
      <p><strong>Practical Applications:</strong> You now have tools for building not just single scenes but <strong>chapters</strong> with connective tissue and <strong>multi-layered narratives</strong> with purposeful subplots.</p>
      <p><strong>Preview:</strong> In Lesson 6, we’ll focus on the art of conversation—moving from external action to the subtleties of <strong>Purposeful Dialogue and Subtext</strong>.</p>
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
