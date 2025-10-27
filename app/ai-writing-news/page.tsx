"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type Article = {
  title: string;
  url: string;
  date: string;
  author: string;
  summary: string;
  fullAbstract: string;
  keywords: string[];
  sourceOverride?: string;
};

type ArticleGroup = {
  id: string;
  label: string;
  articles: Article[];
};

const ARTICLE_GROUPS: ArticleGroup[] = [
  {
    id: "oct-2025",
    label: "October 2025",
    articles: [
      {
        title: "Writing with AI turns chaos into clarity",
        url: "https://www.asbmb.org/asbmb-today/opinions/100225/writing-with-ai-turns-chaos-into-clarity",
        date: "Oct 02, 2025",
        author: "Austin Shull",
        summary:
          "An associate professor explains how treating generative AI as a creative whiteboard can improve clarity and coherence without replacing human judgment.",
        fullAbstract:
          "The author, an associate professor who teaches scientific writing, argues that generative A.I. can improve clarity when used as a “creative whiteboard” rather than a shortcut. Framing the core challenge of science writing as shaping nonlinear discovery into clear narrative, he describes using A.I. to test structures, surface options and refine explanations while retaining human judgment over content and voice. An example from a grant draft on cellular stress responses illustrates how conversational prompting helped reveal connections and themes in existing literature, aiding coherence without replacing expertise. Citing Pat Conroy on the rigor of writing, William Zinsser on rewriting, and Melvin Kranzberg’s dictum about technology’s non-neutrality, he contends that the goal is to train scientists to use A.I. ethically and effectively to amplify curiosity and thinking, not to avoid them.",
        keywords: [
          "generative ai",
          "science communication",
          "writing process",
          "education",
          "research proposals",
        ],
        sourceOverride: "ASBMB Today",
      },
    ],
  },
  {
    id: "sep-2025",
    label: "September 2025",
    articles: [
      {
        title: "New fiction course allows writers to incorporate and “resist” AI influence",
        url: "https://ricethresher.org/article/new-fiction-course-allows-writers-to-incorporate-and-resist-ai-influence-20250910",
        date: "Sep 09, 2025",
        author: "Abigail Chiu",
        summary:
          "Rice University’s ENGL 306: AI Fictions course encourages students to experiment with and critique generative AI while tackling ambitious projects.",
        fullAbstract:
          "Rice University is offering “ENGL 306: AI Fictions,” a course taught by associate teaching professor Ian Schimmel that invites writers to both incorporate and resist generative A.I. in their creative process. Schimmel emphasizes critical engagement over speed, positioning classroom use as a way to see the technology’s limits through hands-on dialogue and experiments. The syllabus spans critiques of A.I. and an A.I.-generated poetry collection, while discussions address ethics, including training on copyrighted materials, environmental costs and recent legal actions. With A.I.’s help, students will attempt larger projects, such as outlining books and drafting opening chapters for NaNoWriMo, which closed in spring 2025 after controversy over statements about A.I. in writing. The course evolves as students write, acknowledging fears and uncertainties while encouraging attention, reflection and informed practice.",
        keywords: [
          "creative writing",
          "generative ai",
          "course design",
          "ethics",
          "nanowrimo",
        ],
        sourceOverride: "Rice Thresher",
      },
    ],
  },
  {
    id: "jul-2025",
    label: "July 2025",
    articles: [
      {
        title: "I Teach Creative Writing. This Is What A.I. Is Doing to Students.",
        url: "https://www.nytimes.com/2025/07/18/opinion/ai-chatgpt-school.html",
        date: "Jul 18, 2025",
        author: "Meghan O’Rourke",
        summary:
          "A creative writing professor reflects on how AI tools are reshaping academic work, student engagement, and the experience of teaching writing.",
        fullAbstract:
          "A creative writing professor recounts experimenting with chatbots and finding them inconsistent for literary tasks but highly effective for administrative work and everyday planning, even easing cognitive load from chronic illness and parenting. The systems’ flattering tone and capacity to mirror her voice proved disorienting, raising questions about authorship and agency. She notes rising student use for brainstorming, summarizing and drafting, amid universities’ promotional messaging and ethical concerns over training data and environmental costs. Citing a study linking L.L.M. reliance to “cognitive debt,” she argues that outsourcing composition can weaken engagement, memory and ownership. She proposes shifting assessment toward in-person writing, close reading, clear usage policies and deemphasizing take-home essays and letter grades. Ultimately, she warns that pervasive A.I. may erode attention and the satisfactions of genuine creative effort even as the tools rapidly improve.",
        keywords: [
          "generative ai",
          "higher education",
          "student writing",
          "academic integrity",
          "cognitive effects",
        ],
        sourceOverride: "The New York Times",
      },
    ],
  },
];

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

function articleMatches(article: Article, query: string) {
  if (!query) {
    return true;
  }

  const haystack = [
    article.title,
    article.summary,
    article.fullAbstract,
    article.author,
    ...article.keywords,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function getSourceName(article: Article) {
  if (article.sourceOverride) {
    return article.sourceOverride;
  }

  try {
    const hostname = new URL(article.url).hostname.replace(/^www\./, "");
    return hostname.split(".")[0]?.replace(/^./, (char) => char.toUpperCase()) ?? "Source";
  } catch (error) {
    return "Source";
  }
}

export default function AIWritingNewsPage() {
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredGroups = useMemo(() => {
    const normalized = normalizeQuery(query);

    if (!normalized) {
      return ARTICLE_GROUPS;
    }

    return ARTICLE_GROUPS.map((group) => ({
      ...group,
      articles: group.articles.filter((article) => articleMatches(article, normalized)),
    })).filter((group) => group.articles.length > 0);
  }, [query]);

  const hasResults = filteredGroups.length > 0;

  useEffect(() => {
    if (activeArticle) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [activeArticle]);

  return (
    <div className="relative bg-canvas text-ink dark:bg-canvasDark dark:text-canvas">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-72 transform border-r border-ink/10 bg-canvas/90 p-6 transition-transform duration-300 ease-in-out backdrop-blur-lg dark:border-canvas/10 dark:bg-canvasDark/90", 
            isSidebarOpen ? "translate-x-0" : "-translate-x-full", 
            "lg:translate-x-0"
          )}
          aria-label="Archive navigation"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-glow">AI Writing News</h2>
            <button
              type="button"
              className="rounded-md p-2 text-ink focus:outline-none focus:ring-2 focus:ring-glow dark:text-canvas lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              ×
            </button>
          </div>

          <div className="relative mt-8">
            <label htmlFor="news-search" className="sr-only">
              Search articles
            </label>
            <input
              id="news-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-lg border border-ink/15 bg-ink/5 px-4 py-2 text-sm text-ink placeholder:text-ink/50 focus:border-glow focus:outline-none focus:ring-2 focus:ring-glow dark:border-canvas/10 dark:bg-canvas/10 dark:text-canvas dark:placeholder:text-canvas/50"
            />
          </div>

          <nav className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 dark:text-canvas/60">
              Archives
            </h3>
            <ul className="mt-4 space-y-3 text-sm font-medium">
              {ARTICLE_GROUPS.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="block rounded-md px-2 py-1 text-ink/80 transition-colors hover:text-glow focus:outline-none focus:ring-2 focus:ring-glow dark:text-canvas/80"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {group.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Mobile menu button */}
        <button
          type="button"
          className="fixed left-4 top-28 z-20 rounded-md bg-canvas/90 px-3 py-2 text-sm font-semibold text-ink shadow-md focus:outline-none focus:ring-2 focus:ring-glow dark:bg-canvasDark/90 dark:text-canvas lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          Open Archive
        </button>

        <div className="flex w-full flex-col lg:pl-72">
          {/* Hero Section */}
          <section className="relative h-[320px] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Abstract mountain landscape"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/70" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
              <h1 className="text-4xl font-bold text-canvas md:text-5xl">AI & Writing in the News</h1>
              <p className="mt-4 max-w-2xl text-base text-canvas/80 md:text-lg">
                Stay current with curated reporting on how artificial intelligence is reshaping the craft, culture, and business of writing.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 md:px-10 lg:px-12">
            {!hasResults && (
              <div className="rounded-lg border border-ink/10 bg-ink/5 p-8 text-center dark:border-canvas/10 dark:bg-canvas/10">
                <h2 className="text-2xl font-semibold text-ink/80 dark:text-canvas/80">No articles found</h2>
                <p className="mt-2 text-base text-ink/60 dark:text-canvas/60">
                  Try adjusting your search terms to find another story.
                </p>
              </div>
            )}

            {filteredGroups.map((group) => (
              <section key={group.id} id={group.id} className="article-group mt-12 first:mt-0">
                <div className="border-b border-ink/10 pb-4 dark:border-canvas/10">
                  <h2 className="text-3xl font-bold text-ink dark:text-canvas">{group.label}</h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {group.articles.map((article) => (
                    <article
                      key={article.url}
                      className="flex h-full flex-col rounded-xl border border-ink/10 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-canvas/10 dark:bg-ink/40"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-coral">
                        {article.date}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold text-ink dark:text-canvas">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-glow"
                        >
                          {article.title}
                        </a>
                      </h3>
                      <p className="mt-2 text-sm font-medium text-ink/60 dark:text-canvas/70">By {article.author}</p>
                      <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-canvas/80">{article.summary}</p>

                      <div className="mt-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-canvas/60">
                          Subjects
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {article.keywords.map((keyword) => (
                            <span
                              key={keyword}
                              className="rounded-full bg-ink/10 px-2 py-1 text-xs font-medium text-ink/70 dark:bg-canvas/20 dark:text-canvas/70"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setActiveArticle(article)}
                          className="text-sm font-semibold text-glow transition-colors hover:text-mint focus:outline-none focus:ring-2 focus:ring-glow"
                        >
                          Read full abstract →
                        </button>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-ink/70 underline-offset-4 transition-colors hover:text-glow dark:text-canvas/70"
                        >
                          Visit source
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </section>
        </div>
      </div>

      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm dark:bg-canvasDark/80"
            onClick={() => setActiveArticle(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-ink/10 bg-canvas shadow-2xl dark:border-canvas/10 dark:bg-ink/90"
          >
            <div className="flex items-start justify-between border-b border-ink/10 bg-ink/5 p-6 dark:border-canvas/10 dark:bg-canvas/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-coral">{activeArticle.date}</p>
                <h2 className="mt-2 text-2xl font-bold text-ink dark:text-canvas">{activeArticle.title}</h2>
                <p className="mt-1 text-sm text-ink/60 dark:text-canvas/70">By {activeArticle.author}</p>
              </div>
              <button
                type="button"
                className="ml-4 rounded-md p-2 text-ink/60 transition hover:text-coral focus:outline-none focus:ring-2 focus:ring-glow dark:text-canvas/60"
                onClick={() => setActiveArticle(null)}
              >
                <span className="sr-only">Close modal</span>
                ×
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto px-6 py-6 text-sm leading-relaxed text-ink/80 dark:text-canvas/80">
              {activeArticle.fullAbstract}
            </div>
            <div className="flex flex-wrap items-center gap-3 border-t border-ink/10 bg-ink/5 px-6 py-4 text-sm font-medium dark:border-canvas/10 dark:bg-canvas/10">
              <span className="text-ink/70 dark:text-canvas/70">Source: {getSourceName(activeArticle)}</span>
              <a
                href={activeArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-glow transition-colors hover:text-mint"
              >
                Read at publisher →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
