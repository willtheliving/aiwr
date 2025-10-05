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
    content: "Full lesson content available in /lessons/lesson-1",
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
    content: "Full lesson content available in /lessons/lesson-2",
  },
  {
    slug: "lesson-3",
    title: "Lesson 3: Finding the Filter: Crafting a Powerful Narrative Voice",
    year: 1,
    semester: 1,
    week: 3,
    meta: {
      program: "The Writer's Apprenticeship",
      position: "Year 1, Semester 1, Week 3",
      time: "3-4 hours",
      prerequisites: "Lesson 1 & Lesson 2",
    },
    content: "Full lesson content available in /lessons/lesson-3",
  },
  {
    slug: "lesson-4",
    title: "Lesson 4: Setting and Scene Construction",
    year: 1,
    semester: 1,
    week: 4,
    meta: {
      program: "The Writer's Apprenticeship",
      position: "Year 1, Semester 1, Week 4",
      time: "3-4 hours",
      prerequisites: "Lesson 1, 2, & 3",
    },
    content: "Full lesson content available in /lessons/lesson-4",
  },
  {
    slug: "lesson-5",
    title: "Lesson 5: Dialogue and Subtext",
    year: 1,
    semester: 1,
    week: 5,
    meta: {
      program: "The Writer's Apprenticeship",
      position: "Year 1, Semester 1, Week 5",
      time: "3-4 hours",
      prerequisites: "Lesson 1-4",
    },
    content: "Full lesson content available in /lessons/lesson-5",
  },
  {
    slug: "lesson-6",
    title: "Lesson 6: Plot Structure and Narrative Arc",
    year: 1,
    semester: 1,
    week: 6,
    meta: {
      program: "The Writer's Apprenticeship",
      position: "Year 1, Semester 1, Week 6",
      time: "3-4 hours",
      prerequisites: "Lesson 1-5",
    },
    content: "Full lesson content available in /lessons/lesson-6",
  },
];
