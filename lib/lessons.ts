// This file will hold the content for all your lessons.
// To add a new lesson, you just add a new object to this array.

export const lessons = [
  {
    id: 1,
    slug: '1',
    title: "Lesson 1: The Writer's Pact",
    meta: {
      program: "The Writer's Apprenticeship: A Two-Year, Self-Paced MFA",
      position: "Year 1, Semester 1, Week 1",
      time: "3-4 hours",
      prerequisites: "None",
    },
    // The content below is converted from your lesson-1.html file
    content: `
      <section>
        <h2 class="font-bold font-display text-2xl mb-4">1. Learning Objectives</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Design and commit to a sustainable weekly writing schedule based on your personal goals and intentions.</li>
          <li>Differentiate between "showing" (conveying information through sensory detail and action) and "telling" (conveying information through exposition and summary).</li>
          <li>Analyze the difference between active and passive voice and convert passive sentences into their more vigorous active forms.</li>
          <li>Produce a 1,000-word descriptive scene that utilizes concrete sensory details and the active voice to create an immersive experience for the reader.</li>
        </ul>
      </section>
      <section>
        <h2 class="font-bold font-display text-2xl mb-4">2. Written Lecture</h2>
        <div class="space-y-6">
          <h3 class="font-bold font-display text-xl">The Myth of the Muse and the Power of the Pact</h3>
          <p>Let us begin by dismantling the most destructive myth in the creative arts: the myth of the muse. This is the romantic notion of the writer as a passive vessel for divine inspiration, waiting patiently for a lightning bolt of genius to strike. When it does, the story pours out, fully formed and perfect.</p>
          <blockquote class="border-l-4 border-glow pl-6 italic text-ink/80 dark:text-canvas/80">The truth is that writing is a job. It is a blue-collar trade that requires you to show up, punch the clock, and put in the hours, whether you feel "inspired" or not. The writers whose work you admire did not produce it by waiting. They produced it through discipline, routine, and a workmanlike commitment to their craft.</blockquote>
        </div>
      </section>
      {/* ... The rest of the content from lesson-1.html would be converted and placed here ... */}
    `
  },
  {
    id: 2,
    slug: '2',
    title: "Lesson 2: The Engine of Story",
    meta: {
        program: "Your DIY MFA- AN AI-powered Curriculum",
        position: "Year 1, Module 1, Week 2",
        time: "3-4 hours",
        prerequisites: "Lesson One",
    },
    // The content below is converted from your lesson-2.html file
    content: `
        <section>
            <h2 class="font-bold font-display text-2xl mb-4">1. Learning Objectives</h2>
            <ul class="list-disc list-inside space-y-2">
                <li>Distinguish between a character's external "Want" and their internal "Need" as foundational tools in the writer's toolkit.</li>
                <li>Articulate how a character's "Ghost" (a past wound) creates the "Lie" they believe, which in turn drives their actions.</li>
                <li>Analyze the symbiotic relationship between internal conflict (a character's psychological struggle) and external conflict (the plot's obstacles).</li>
                <li>Create a one-page character profile that outlines a character's Ghost, Lie, Want, and Need, forming a coherent psychological engine.</li>
            </ul>
        </section>
        {/* ... The rest of the content from lesson-2.html would be converted and placed here ... */}
    `
  }
];
