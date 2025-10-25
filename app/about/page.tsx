import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight font-display md:text-5xl lg:text-6xl">My Story</h1>
          <p className="mt-4 text-lg md:text-xl font-display text-ink/80 dark:text-canvas/80">(And Why I Built This Place)</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-1">
            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              {/* Placeholder for a profile picture. You can replace this with an <Image> component later. */}
              <svg
                className="w-16 h-16 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>
          <div className="md:col-span-2 font-body text-lg leading-relaxed space-y-6 text-ink/90 dark:text-canvas/90">
            <p>
              Hello, I’m Will. Like many of you, my foundational passion is for writing. I studied it formally at USC, earning a B.A. in English with a
              concentration in Creative Writing. But my career took me in a different direction: I became a librarian, earning an MLIS from San Jose State
              and dedicating myself to the world of information science.
            </p>
            <p>
              When generative AI appeared, I was fascinated. I spent thousands of hours experimenting, not just as a writer, but as a librarian—learning the system,
              understanding its structure, and figuring out how to query it for the best possible results. I realized that the secret to using AI wasn’t just about
              the right prompt; it was about understanding how to have a structured, intentional conversation.
            </p>
            <blockquote className="border-l-4 border-glow pl-6 italic text-ink/80 dark:text-canvas/80">
              I built the AI Writers’ Retreat to be the resource I wished I had. It’s a place to merge the art of storytelling with the science of these new tools.
              My mission is to give other writers the frameworks and confidence to use AI to support their endeavors, not replace their voice.
            </blockquote>
            <p>
              The resources here are free, but if you’d like to support this project, you can{' '}
              <a
                href="https://coff.ee/aiwritersretreat"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-glow hover:underline focus-ring rounded-sm"
              >
                donate
              </a>{' '}
              to help keep things running. Your support, suggestions, and ideas are always welcome.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold font-display text-center mb-8">A Note on Transparency</h2>
          <div className="max-w-3xl mx-auto font-body space-y-4 text-ink/80 dark:text-canvas/80 text-base">
            <p>
              <strong className="text-ink dark:text-canvas">All opinions expressed on this website are my own.</strong> The resources, tools, and methods recommended here
              are based solely on their merit and their value to a writer’s process. This project is not currently sponsored by any entity, nor does it use
              affiliate links. Should that change in the future, any sponsored or affiliated content will be clearly and conspicuously marked.
            </p>
            <p>
              <strong className="text-ink dark:text-canvas">Furthermore, this is an independent, personal project.</strong> The views and information presented here do not represent
              those of my employer or any other professional affiliation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}