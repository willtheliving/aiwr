// This file is the single source of truth for all lesson data.
// To add a new lesson, simply add a new object to this array.

export interface Lesson {
  slug: string;
  title: string;
  year: number;
  semester: number;
  week: number;
  meta: {
    program: string;
    position: string;
    time: string;
    prerequisites: string;
  };
  content: string;
}

export const lessons: Lesson[] = [
  // SEMESTER 1
  {
    slug: "writers-pact",
    title: "The Writer's Pact: Building a Sustainable Routine & Mastering Basic Craft",
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
      <section>
        <h2 class="text-2xl font-bold font-display mb-4">1. Learning Objectives</h2>
        <p class="mb-4">By the end of this lesson, you will be able to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Design and commit to a sustainable weekly writing schedule.</li>
          <li>Differentiate between "showing" (conveying information through sensory detail and action) and "telling" (conveying information through exposition and summary).</li>
          <li>Analyze the difference between active and passive voice and convert passive sentences to their more vigorous active forms.</li>
          <li>Produce a 1,000-word descriptive scene that utilizes concrete sensory details and the active voice to create an immersive experience for the reader.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold font-display mb-4">2. Written Lecture</h2>
        <h3 class="text-xl font-bold font-display mb-3">The Myth of the Muse</h3>
        <p class="mb-4">Let's begin by dismantling the most destructive myth in the creative arts: the myth of the muse. This is the romantic notion of the writer as a vessel for divine inspiration, waiting patiently for a lightning bolt of genius to strike. When it does, the story pours out, fully formed and perfect.</p>
        <p class="mb-4">This is a fantasy. Waiting for the muse is an excuse for not writing.</p>
        <p class="mb-4">The truth is that writing is a job. It is a blue-collar trade that requires you to show up, punch the clock, and put in the hours, whether you feel "inspired" or not. The writers whose work you admire did not produce it by waiting. They produced it through discipline, routine, and a workmanlike commitment to their craft. The magic you feel when reading a brilliant novel is not the product of a fleeting muse; it is the product of a thousand hours of messy, frustrating, and deliberate work. Our first task, therefore, is not to write a masterpiece. It is to build the framework within which masterpieces are made. It is to become a worker.</p>

        <h3 class="text-xl font-bold font-display mt-8 mb-3">Part I: Forging the Pact - Your Writing Routine</h3>
        <p class="mb-4">Before we discuss a single word of craft, we must build your workshop. A writing routine is not a cage; it is a laboratory. It is the controlled environment where you are free to experiment, fail, and ultimately, succeed. Consistency is vastly more productive than intensity. Writing for one hour every day is infinitely more valuable than writing for eight hours one day a month. Your commitment begins here, with a pact you make with yourself. This involves three components:</p>
        <ul class="list-disc list-inside space-y-4">
          <li><strong>Time and Place:</strong> Designate a specific, non-negotiable time and place for your writing. This could be 6 AM at the kitchen table before anyone else is awake, or 10 PM in a corner of your bedroom. The specific time and place matter less than their consistency. When you repeatedly show up to the same spot at the same time, you are training your brain. You are telling it, "This is where we work." The space itself becomes a creative trigger.</li>
          <li><strong>Measurable Goals:</strong> Your goal should be manageable and measurable. Many writers prefer a time-based goal (e.g., "I will write for one hour") over a word-count goal (e.g., "I will write 500 words"). A time-based goal measures the effort, which you can always control, rather than the output, which can fluctuate wildly. On some days, your hour will produce a thousand brilliant words. On others, it will produce two tortured sentences. Both are a victory, because you showed up. You honored the pact.</li>
          <li><strong>The Sanctity of the Act:</strong> Protect your writing time ruthlessly. Turn off your phone. Disconnect the internet unless you are actively researching. Inform the people in your life that this time is not to be interrupted. It is a meeting with your most important collaborator: your own creative mind. The world is full of distractions designed to keep you from doing the deep, focused work that writing requires. Your routine is your shield.</li>
        </ul>

        <h3 class="text-xl font-bold font-display mt-8 mb-3">Part II: The Cornerstone of Craft - Show, Don't Tell</h3>
        <p class="mb-4">Now that you have a place to work, we can begin to discuss the work itself. The single most important principle of narrative craft—the one that separates amateur prose from immersive fiction—is this: <strong>Show, don't tell.</strong></p>
        <p class="mb-4">"Telling" is stating a fact or an emotion directly. It is exposition.</p>
        <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md mb-4 italic">
            <p><strong>Telling:</strong> "It was cold."</p>
            <p><strong>Telling:</strong> "Susan was angry."</p>
            <p><strong>Telling:</strong> "The house was old and neglected."</p>
        </div>
        <p class="mb-4">"Showing" is the translation of these abstract statements into concrete, sensory experiences that the reader can see, hear, feel, taste, and smell. It is the creation of a scene.</p>
        <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md mb-4 italic">
            <p><strong>Showing:</strong> "Bill's breath plumed in the air, and the frozen metal of the car door seared his ungloved hand."</p>
            <p><strong>Showing:</strong> "Susan slammed the cabinet door so hard that a plate rattled on the shelf. She gripped the edge of the counter, her knuckles white."</p>
            <p><strong>Showing:</strong> "Paint peeled from the porch columns like sunburnt skin. A gust of wind moaned through a broken pane in the upstairs window, carrying with it the smell of dust and decay."</p>
        </div>
        <p class="mb-4">Why is showing so much more effective? Because it does not report an experience to the reader; it invites the reader to live inside the experience. When you "tell" the reader that Susan is angry, you are asking them to trust your summary. When you "show" her white-knuckled grip and the rattling plate, you allow the reader to deduce her anger for themselves. This act of participation creates a more powerful emotional connection and a more vivid mental picture. You are no longer the narrator; you are the camera. Your job is to aim it at the right details and let the reader interpret the story.</p>
        
        <h3 class="text-xl font-bold font-display mt-8 mb-3">Part III: The Engine of Prose - The Active Voice</h3>
        <p class="mb-4">If "Show, Don't Tell" is the philosophy, the active voice is the engine that drives it. As laid out in <em>The Elements of Style</em>, "The active voice is usually more direct and vigorous than the passive." Let's define the terms:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Active Voice:</strong> The subject of the sentence performs the action.<br><em>"The writer drafted the chapter."</em> (The subject, "writer," is doing the verb, "drafted.")</li>
            <li><strong>Passive Voice:</strong> The subject of the sentence receives the action.<br><em>"The chapter was drafted by the writer."</em> (The subject, "chapter," is receiving the action.)</li>
        </ul>
        <p class="mb-4">Notice the difference. The active sentence is concise and energetic. The passive sentence is wordy, indirect, and weak. This is because the passive voice often requires more words and buries the "doer" of the action at the end of the sentence, or omits it entirely ("The chapter was drafted").</p>
        <p class="mb-4">Here is a classic example from Strunk & White:</p>
        <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md mb-4 italic">
            <p><strong>Passive and weak:</strong> "My first visit to Boston will always be remembered by me."</p>
            <p><strong>Active and strong:</strong> "I shall always remember my first visit to Boston."</p>
        </div>
        <p class="mb-4">The habitual use of the active voice is a foundational discipline for creating forcible writing. It pushes you to use stronger verbs and to construct sentences that move with energy. As you edit your work, you must become a hunter of the passive voice. Look for the "to be" verbs (is, am, are, was, were) followed by a past participle (e.g., "was thrown," "is believed"). In almost every case, you can strengthen the sentence by recasting it in the active voice.</p>
         <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md mb-4 italic">
            <p><strong>Passive:</strong> "The ball was thrown by him."</p>
            <p><strong>Active:</strong> "He threw the ball."</p>
        </div>
        <p>By combining the principle of showing with the power of the active voice, you begin to build prose that is not just grammatically correct, but alive. You create a world of tangible details and clear actions, inviting your reader to step inside and experience it for themselves. This is the first and most crucial step in your apprenticeship.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold font-display mb-4">3. Reading Assignment</h2>
        <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Primary Reading:</strong> The short story "Hills Like White Elephants" by Ernest Hemingway. This story is in the public domain and widely available online.</li>
            <li><strong>Secondary Reading:</strong> <em>The Elements of Style</em> by William Strunk Jr. & E.B. White. Read Rule 14, "Use the active voice," and Rule 16, "Use definite, specific, concrete language."</li>
        </ul>
        <h3 class="text-lg font-bold font-display mb-3">Reading Questions:</h3>
        <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>In "Hills Like White Elephants," Hemingway never "tells" us what the man and woman are discussing. How does he "show" the tension and the nature of their conflict through their dialogue and actions?</li>
            <li>Identify three sentences in the story written in the active voice. How does this choice contribute to the story's direct, observational style?</li>
            <li>According to Strunk & White, why is concrete language more effective than abstract language?</li>
            <li>Find an example in Hemingway's story that perfectly illustrates Strunk's rule to use "definite, specific, concrete language."</li>
            <li>How does Hemingway describe the setting? Pick out two sensory details and explain how they contribute to the story's mood.</li>
        </ol>
        <h3 class="text-lg font-bold font-display mb-3">Reading Journal Prompt:</h3>
        <p>In 300 words, analyze the relationship between the active voice and the "Show, Don't Tell" principle in "Hills Like White Elephants." How do these two craft elements work together to create the story's powerful subtext?</p>
      </section>
      
      <section>
        <h2 class="text-2xl font-bold font-display mb-4">4. Writing Assignment</h2>
        <h3 class="text-lg font-bold font-display mb-3">Warm-up Exercise (10 minutes):</h3>
        <p class="mb-4">Choose a single object in your immediate vicinity (a coffee mug, a pen, a shoe). Write one paragraph describing it, focusing on engaging at least four of the five senses (sight, sound, touch, smell, taste). Do not state what the object is.</p>
        <h3 class="text-lg font-bold font-display mb-3">Primary Exercise (1,000 words):</h3>
        <p class="mb-4">Write a 1,000-word scene describing a character performing a simple, mundane task (e.g., washing the dishes, packing a suitcase, weeding a garden, waiting for a bus) while feeling a powerful, unstated emotion (e.g., dread, grief, intense excitement, simmering rage).</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Constraint 1:</strong> You are forbidden from naming the emotion. You must show it entirely through the character's actions, their observations of the setting, and their internal thoughts about the task at hand.</li>
            <li><strong>Constraint 2:</strong> Write the entire scene in the active voice.</li>
        </ul>
        <h3 class="text-lg font-bold font-display mb-3">Revision Task:</h3>
        <ol class="list-decimal list-inside space-y-2 mb-4">
            <li>After completing your draft, go back and identify any sentences in the passive voice. Rewrite them in the active voice.</li>
            <li>Find at least three places where you "told" the reader something (e.g., "it was a quiet room," "he felt nervous") and replace it with a concrete, sensory detail that "shows" it instead.</li>
        </ol>
        <h3 class="text-lg font-bold font-display mb-3">Reflection Component (200 words):</h3>
        <p>What was the most challenging part of this exercise? Was it avoiding the passive voice or showing the emotion without naming it? Which sensory detail in your final draft do you feel is most effective, and why?</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold font-display mb-4">5. AI Integration Component</h2>
        <h3 class="text-lg font-bold font-display mb-3">AI Brainstorming Prompt:</h3>
        <p class="mb-4">Use a large language model to help generate sensory details.</p>
        <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md mb-4 italic">
          <p><strong>Prompt:</strong> "I am writing a scene about a character who is secretly grieving while performing the task of cooking a meal. Generate a list of 20 concrete, sensory details (sights, sounds, smells, tastes, textures) that could show this internal grief without ever using words like 'sad,' 'grief,' or 'loss.'"</p>
        </div>
        <h3 class="text-lg font-bold font-display mb-3">AI Editing Exercise:</h3>
        <p class="mb-4">Use an AI as a passive-voice detector.</p>
        <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md mb-4 italic">
          <p><strong>Prompt:</strong> "Analyze the following text. Identify every sentence written in the passive voice and provide a more direct, active-voice alternative for each one." [Paste your draft below this prompt.]</p>
        </div>
        <h3 class="text-lg font-bold font-display mb-3">AI Critique & Ethical Considerations:</h3>
        <ul class="list-disc list-inside space-y-2">
            <li>Review the AI's suggestions. Are the sensory details it provided original, or are they clichés? Are the active-voice alternatives stronger?</li>
            <li><strong>Ethical Boundary:</strong> The AI is a tool for brainstorming and technical checks. It is not the author. Never use AI-generated sentences wholesale in your final draft. Your responsibility is to evaluate, select, and integrate ideas, then rewrite them in your own unique voice.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold font-display mb-4">6. Community Component</h2>
        <h3 class="text-lg font-bold font-display mb-3">Peer Exchange:</h3>
        <p>Find an accountability partner (this can be a friend, family member, or another writer in an online forum). Share your 1,000-word scene with them. Do not tell them what emotion you were trying to convey. Ask them one question: "After reading this, what do you believe the character is feeling, and what specific detail or action made you feel that?"</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold font-display mb-4">7. Self-Assessment Tools</h2>
        <h3 class="text-lg font-bold font-display mb-3">Progress Checklist:</h3>
        <ul class="list-disc list-inside space-y-2 mb-6">
            <li>[ ] I have designed a specific, weekly writing schedule and put it on my calendar.</li>
            <li>[ ] I have completed the primary and secondary readings.</li>
            <li>[ ] I have answered the reading questions in my journal.</li>
            <li>[ ] I have completed the warm-up exercise.</li>
            <li>[ ] I have written a first draft of the 1,000-word scene.</li>
            <li>[ ] I have performed the revision task, focusing on active voice and showing.</li>
            <li>[ ] I have written the reflection component.</li>
            <li>[ ] I have saved this scene as the first entry for my Semester 1 Portfolio. (We recommend using a tool like Scrivener to organize your portfolio files).</li>
        </ul>
        <h3 class="text-lg font-bold font-display mb-3">Skills Rubric:</h3>
        <ul class="list-none space-y-2">
            <li><strong>Showing vs. Telling:</strong> (Developing / Proficient / Advanced) - How well did I use sensory details to imply emotion?</li>
            <li><strong>Active Voice Usage:</strong> (Developing / Proficient / Advanced) - How successfully did I eliminate passive voice from my prose?</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold font-display mb-4">8. Extension Activities (Optional)</h2>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>For Advanced Students:</strong> Rewrite your 1,000-word scene, but this time, from the point of view of a second character who is observing the first. This new character does not know what the first character is feeling and can only interpret their external actions.</li>
            <li><strong>For Struggling Students:</strong> Reduce the scope of the main assignment. Write a single, 300-word paragraph describing a character entering a room. Focus only on "showing" the character's emotion through the one or two things they notice first.</li>
            <li><strong>Cross-Genre Exploration:</strong> How would the "Show, Don't Tell" rule apply differently in a memoir versus a fantasy novel? Write two short paragraphs describing the same event—one as non-fiction, one as fiction—to explore the differences.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold font-display mb-4">9. Key Takeaways & Next Steps</h2>
        <h3 class="text-lg font-bold font-display mb-3">Essential Concepts:</h3>
        <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Discipline, not inspiration, is the foundation of a writing life.</li>
            <li>Showing creates an immersive experience; telling creates distance.</li>
            <li>The active voice is the engine of strong, direct, and energetic prose.</li>
        </ul>
        <h3 class="text-lg font-bold font-display mb-3">Practical Applications:</h3>
        <p class="mb-4">The skills of showing and using the active voice are fundamental to every single piece of writing you will do in this program, from fiction to non-fiction to poetry.</p>
        <h3 class="text-lg font-bold font-display mb-3">Preview:</h3>
        <p>In Lesson 2, we will build on these fundamentals to explore the engine of all stories: Character Goal, Motivation, and Conflict. We will learn why a character must want something, and what happens when they can't get it.</p>
      </section>
    `,
  },
  {
    slug: "engine-of-story",
    title: "The Engine of Story: Goal, Motivation, and Conflict",
    year: 1,
    semester: 1,
    week: 2,
    meta: { program: "", position: "", time: "", prerequisites: "" },
    content: "Content for this lesson is coming soon...",
  },
  {
    slug: "finding-the-filter",
    title: "Finding the Filter: Crafting a Powerful Narrative Voice",
    year: 1,
    semester: 1,
    week: 3,
    meta: { program: "", position: "", time: "", prerequisites: "" },
    content: "Content for this lesson is coming soon...",
  },
  {
    slug: "living-world",
    title: "The Living World: Mastering Setting and Scene Construction",
    year: 1,
    semester: 1,
    week: 4,
    meta: { program: "", position: "", time: "", prerequisites: "" },
    content: "Content for this lesson is coming soon...",
  },
  // Add more lessons here...
];
