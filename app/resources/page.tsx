import Image from "next/image";
import { List } from "lucide-react";

export const metadata = {
  title: "Recommended Resources | AI Writers Retreat",
  description:
    "A curated list of podcasts, books, tools, and resources for creative writers.",
};

type Resource = {
  id: string;
  title: string;
  href: string;
  type: string;
  description: string;
};

const recommendedResources: Resource[] = [
  {
    id: "list-aiwr-reading",
    title: "AIWR Reading List",
    href: "https://aiwritersretreat.com/reading-list",
    type: "Reading List",
    description:
      "Our curated list of essential books on writing, creativity, and the craft.",
  },
  {
    id: "podcast-wow",
    title: "Writers on Writing",
    href: "https://www.writers-on-writing.com/",
    type: "Podcast",
    description:
      "An insightful podcast featuring interviews with authors about their craft, process, and journey.",
  },
  {
    id: "tool-reedsy",
    title: "Reedsy",
    href: "https://reedsy.com/",
    type: "Tool",
    description:
      "A marketplace for publishing professionals (editors, designers) and writing tools.",
  },
  {
    id: "resource-lithub",
    title: "Literary Hub",
    href: "https://lithub.com/",
    type: "Website",
    description:
      "A central hub for literary news, essays, criticism, and excerpts.",
  },
  {
    id: "tool-scrivener",
    title: "Scrivener",
    href: "https://www.literatureandlatte.com/",
    type: "Tool",
    description:
      "A powerful writing app for authors, designed for long-form projects.",
  },
];

function ResourceCard({ title, href, type, description }: Resource) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-canvas p-6 shadow-sm transition hover:-translate-y-1 hover:border-glow/60 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-glow dark:border-canvas/15 dark:bg-canvasDark"
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-glow/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-glow">
        <List className="h-3.5 w-3.5" aria-hidden="true" />
        {type}
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold text-ink transition-colors group-hover:text-glow dark:text-canvas">
        {title}
      </h3>
      <p className="mt-2 font-body text-sm text-ink/70 dark:text-canvas/70">
        {description}
      </p>
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <div className="bg-gradient-to-b from-canvas to-canvas/60 dark:from-canvasDark dark:to-canvasDark/80">
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pt-20">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-canvas shadow-xl">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Mountain landscape under a starry sky"
              fill
              className="object-cover object-center opacity-70"
              priority
            />
          </div>
          <div className="relative z-10 flex flex-col gap-4 bg-gradient-to-r from-ink/90 via-ink/80 to-ink/60 p-10 sm:p-14">
            <span className="inline-flex w-fit items-center rounded-full bg-glow/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-glow">
              Curated by AIWR
            </span>
            <h1 className="text-3xl font-display font-bold tracking-tight sm:text-4xl md:text-5xl">
              Recommended Resources
            </h1>
            <p className="max-w-2xl font-body text-base text-canvas/80 sm:text-lg">
              Podcasts, books, and tools that elevate your writing practice and help you build momentum with AI.
            </p>
          </div>
        </div>

        <section className="mt-14">
          <header className="mb-8 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-canvas">
              Explore our go-to picks
            </h2>
            <p className="mt-2 font-body text-base text-ink/80 dark:text-canvas/80">
              These are the resources we reference most often during workshops and coaching sessions. Each one pairs well with our DIY MFA lessons.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedResources.map((resource) => (
              <li key={resource.id} className="h-full">
                <ResourceCard {...resource} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
