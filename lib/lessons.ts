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
    slug: "lesson-1",
    title: "Lesson 1: The Writer's Pact",
    year: 1,
    semester: 1,
    week: 1,
    meta: {
      program: "The Writer's Apprenticeship: A Two-Year, Self-Paced MFA",
      position: "Year 1, Semester 1, Week 1",
      time: "2-3 hours",
      prerequisites: "None",
    },
    content: `
      1. Learning Objectives
      By the end of this lesson, you will be able to:
      <ul>
        <li>Articulate the difference between a writing hobby and a writing practice.</li>
        <li>Design a personalized and sustainable weekly writing schedule.</li>
        <li>Identify your primary obstacles to consistent writing and develop strategies to overcome them.</li>
        <li>Draft a personal "Writer's Pact" to serve as a mission statement for your writing journey.</li>
      </ul>
      <!-- Full lesson content -->
    `,
  },
  {
    slug: "lesson-2",
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
