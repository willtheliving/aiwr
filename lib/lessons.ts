export interface Lesson {
  slug: string;
  lessonNumber: number;
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

type LessonBlueprint = {
  lessonNumber: number;
  title: string;
  estimatedTime?: string;
  prerequisites?: string;
};

type SemesterBlueprint = {
  year: number;
  semester: number;
  lessons: LessonBlueprint[];
};

const PROGRAM_NAME = "The Writer's Apprenticeship: A Two-Year, Self-Paced MFA";
const DEFAULT_TIME = "3-4 hours";

const diyMfaBlueprint: SemesterBlueprint[] = [
  {
    year: 1,
    semester: 1,
    lessons: [
      {
        lessonNumber: 1,
        title: "Lesson 1: The Writer's Pact: Building a Sustainable Routine & Mastering Basic Craft",
        estimatedTime: "2-3 hours",
        prerequisites: "None",
      },
      {
        lessonNumber: 2,
        title: "Lesson 2: The Engine of Story: Goal, Motivation, and Conflict",
        prerequisites: "Lesson 1",
      },
      {
        lessonNumber: 3,
        title: "Lesson 3: Finding the Filter: Crafting a Powerful Narrative Voice",
      },
      {
        lessonNumber: 4,
        title: "Lesson 4: The Living World: Mastering Setting and Scene Construction",
      },
      {
        lessonNumber: 5,
        title: "Lesson 5: Weaving the Fabric: Transitions, Subplots, and Narrative Momentum",
      },
      {
        lessonNumber: 6,
        title: "Lesson 6: The Soul of the Story: Crafting Purposeful Dialogue and Subtext",
      },
      {
        lessonNumber: 7,
        title: "Lesson 7: The Blueprint of Story: Introduction to the Three-Act Structure",
      },
      {
        lessonNumber: 8,
        title: "Lesson 8: The Point of No Return: Mastering the First Act",
      },
      {
        lessonNumber: 9,
        title: "Lesson 9: The Long Middle: Rising Action and the Midpoint",
      },
      {
        lessonNumber: 10,
        title: "Lesson 10: The Art of Revision I: Macro-Edits and Re-Visioning",
        estimatedTime: "4-5 hours",
      },
      {
        lessonNumber: 11,
        title: "Lesson 11: The Art of Revision II: Micro-Edits and Line-Level Polish",
        estimatedTime: "4-5 hours",
      },
      {
        lessonNumber: 12,
        title: "Lesson 12: Semester 1 Portfolio: Assembling and Assessing Your Foundational Work",
        estimatedTime: "6-8 hours",
      },
    ],
  },
  {
    year: 1,
    semester: 2,
    lessons: [
      {
        lessonNumber: 13,
        title: "Lesson 13: Choosing Your Lane: Genre, Audience, and Reader Expectations",
      },
      {
        lessonNumber: 14,
        title: "Lesson 14: Genre Deep Dive I: Literary & Commercial Fiction",
      },
      {
        lessonNumber: 15,
        title: "Lesson 15: Genre Deep Dive II: Science Fiction, Fantasy & Speculative Fiction",
      },
      {
        lessonNumber: 16,
        title: "Lesson 16: Genre Deep Dive III: Mystery, Thriller & Horror",
      },
      {
        lessonNumber: 17,
        title: "Lesson 17: Advanced Pacing: Mastering Tension and Release",
      },
      {
        lessonNumber: 18,
        title: "Lesson 18: Manipulating Time: The Strategic Use of Flashback and Foreshadowing",
      },
      {
        lessonNumber: 19,
        title: "Lesson 19: The Power of the Image: Symbolism and Motif",
      },
      {
        lessonNumber: 20,
        title: "Lesson 20: From Scene to Chapter: Weaving Scenes into Larger Units",
      },
      {
        lessonNumber: 21,
        title: "Lesson 21: The Synopsis: Outlining Your Novel-Length Project",
        estimatedTime: "4-5 hours",
      },
      {
        lessonNumber: 22,
        title: "Lesson 22: Giving and Receiving Feedback: The Art of the Critique",
      },
      {
        lessonNumber: 23,
        title: "Lesson 23: Workshop I: Critiquing Your First 15 Pages",
        estimatedTime: "6-8 hours",
      },
      {
        lessonNumber: 24,
        title: "Lesson 24: Semester 2 Portfolio & Mid-Program Evaluation",
        estimatedTime: "6-8 hours",
      },
    ],
  },
  {
    year: 2,
    semester: 3,
    lessons: [
      {
        lessonNumber: 25,
        title: "Lesson 25: Beyond the Straight Line: An Introduction to Non-Linear Narratives",
      },
      {
        lessonNumber: 26,
        title: "Lesson 26: The Ensemble Cast: Managing Multiple Points of View",
      },
      {
        lessonNumber: 27,
        title: "Lesson 27: The Tragic Form: Understanding Freytag's Pyramid and Negative Arcs",
      },
      {
        lessonNumber: 28,
        title: "Lesson 28: The Hero's Journey: Deconstructing the Monomyth",
      },
      {
        lessonNumber: 29,
        title: "Lesson 29: Discovering Your Theme: From Premise to Controlling Idea",
      },
      {
        lessonNumber: 30,
        title: "Lesson 30: Weaving Theme into Plot: Thematic Resonance and Unity",
      },
      {
        lessonNumber: 31,
        title: "Lesson 31: The Publishing Landscape: Traditional, Independent, and Hybrid Paths",
      },
      {
        lessonNumber: 32,
        title: "Lesson 32: The Role of the Agent: Who They Are and What They Do",
      },
      {
        lessonNumber: 33,
        title: "Lesson 33: The Editor's Desk: Understanding the Acquisition Process",
      },
      {
        lessonNumber: 34,
        title: "Lesson 34: The Thesis Proposal: Creating Your Project Blueprint",
        estimatedTime: "5-6 hours",
      },
      {
        lessonNumber: 35,
        title: "Lesson 35: Research for Writers: World-Building and Factual Accuracy",
      },
      {
        lessonNumber: 36,
        title: "Lesson 36: Thesis Drafting I: Writing the First 50 Pages",
        estimatedTime: "6-8 hours",
      },
      {
        lessonNumber: 37,
        title: "Lesson 37: Thesis Drafting II: Overcoming the \"Muddled Middle\"",
        estimatedTime: "6-8 hours",
      },
      {
        lessonNumber: 38,
        title: "Lesson 38: Thesis Drafting III: Writing Toward the Climax",
        estimatedTime: "6-8 hours",
      },
      {
        lessonNumber: 39,
        title: "Lesson 39: Semester 3 Check-In: Evaluating Thesis Progress",
        estimatedTime: "4-6 hours",
      },
    ],
  },
  {
    year: 2,
    semester: 4,
    lessons: [
      {
        lessonNumber: 40,
        title: "Lesson 40: The \"Seek and Destroy\" Pass: Eliminating Clichés and Filler Words",
      },
      {
        lessonNumber: 41,
        title: "Lesson 41: The \"Read Aloud\" Pass: Polishing for Rhythm and Cadence",
      },
      {
        lessonNumber: 42,
        title: "Lesson 42: Working with a Critique Partner for a Full Manuscript Read",
      },
      {
        lessonNumber: 43,
        title: "Lesson 43: The Query Letter: A Masterclass in Pitching Your Book",
      },
      {
        lessonNumber: 44,
        title: "Lesson 44: The Synopsis and Author Bio: Crafting Your Submission Package",
      },
      {
        lessonNumber: 45,
        title: "Lesson 45: Building a Writer's Platform: Website, Social Media, and Newsletter Essentials",
      },
      {
        lessonNumber: 46,
        title: "Lesson 46: Navigating Rejection and Building Resilience",
      },
      {
        lessonNumber: 47,
        title: "Lesson 47: Understanding Publishing Contracts and Rights",
      },
      {
        lessonNumber: 48,
        title: "Lesson 48: Workshop II: Critiquing Your Final 50 Pages",
        estimatedTime: "6-8 hours",
      },
      {
        lessonNumber: 49,
        title: "Lesson 49: The Final Polish: From Full Manuscript Read to Proofreading",
        estimatedTime: "5-6 hours",
      },
      {
        lessonNumber: 50,
        title: "Lesson 50: Formatting Your Manuscript for Submission",
        estimatedTime: "4-5 hours",
      },
      {
        lessonNumber: 51,
        title: "Lesson 51: Creating Your Submission Strategy: Researching Agents and Presses",
      },
      {
        lessonNumber: 52,
        title: "Lesson 52: The First Ten Submissions: Sending Your Work Out",
      },
      {
        lessonNumber: 53,
        title: "Lesson 53: The Writing Life: Balancing Art, Commerce, and Mental Health",
      },
      {
        lessonNumber: 54,
        title: "Lesson 54: Finding Your Literary Community",
      },
      {
        lessonNumber: 55,
        title: "Lesson 55: From One Project to the Next: How to Keep Writing",
      },
      {
        lessonNumber: 56,
        title: "Lesson 56: Financial Planning for Writers: Diversifying Income Streams",
      },
      {
        lessonNumber: 57,
        title: "Lesson 57: The Art of the Public Reading",
      },
      {
        lessonNumber: 58,
        title: "Lesson 58: Teaching and Mentoring: Paying It Forward",
      },
      {
        lessonNumber: 59,
        title: "Lesson 59: Final Portfolio & Thesis Submission",
        estimatedTime: "6-8 hours",
      },
      {
        lessonNumber: 60,
        title: "Lesson 60: The Writer's Pact, Revisited: Your Path Forward",
      },
    ],
  },
];

const buildLessons = (): Lesson[] => {
  const entries: Lesson[] = [];

  diyMfaBlueprint.forEach(({ year, semester, lessons }) => {
    lessons.forEach((lesson, index) => {
      const { lessonNumber, title, estimatedTime, prerequisites } = lesson;
      const slug = `lesson-${lessonNumber}`;
      const isPublished = lessonNumber <= 6;

      entries.push({
        slug,
        lessonNumber,
        title,
        year,
        semester,
        week: lessonNumber,
        meta: {
          program: PROGRAM_NAME,
          position: `Year ${year}, Semester ${semester}, Week ${index + 1}`,
          time: estimatedTime ?? DEFAULT_TIME,
          prerequisites:
            prerequisites ?? (lessonNumber === 1 ? "None" : `Lessons 1–${lessonNumber - 1}`),
        },
        content: `${isPublished ? "Full" : "Placeholder"} lesson content ${
          isPublished ? "available" : "coming soon"
        } in /lessons/${slug}`,
      });
    });
  });

  return entries.sort((a, b) => a.lessonNumber - b.lessonNumber);
};

export const lessons = buildLessons();
