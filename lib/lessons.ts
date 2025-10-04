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
  {
    slug: "finding-your-voice",
    title: "Lesson 1: Finding Your Unique Voice",
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
      1. Learning Objectives
      By the end of this lesson, you will be able to:
      <ul>
        Design and commit to a sustainable weekly writing schedule.
        Differentiate between "showing" and "telling".
        Analyze the difference between active and passive voice.
        Produce a 1,000-word descriptive scene.
      </ul>

      2. Written Lecture
      The Myth of the Muse
      Let's begin by dismantling the most destructive myth in the creative arts: the myth of the muse...
      <!-- Full lesson content goes here -->
    `,
  },
  {
    slug: "the-engine-of-story",
    title: "Lesson 2: The Engine of Story: Goal, Motivation, and Conflict",
    year: 1,
    semester: 1,
    week: 2,
    meta: {
      program: "The Writer's Apprenticeship",
      position: "Year 1, Semester 1, Week 2",
      time: "3-4 hours",
      prerequisites: "Lesson 1",
    },
    content: "Content for this lesson is coming soon...",
  },
];
