// app/page.tsx

import Image from "next/image";
import Link from "next/link";
import { MapPin, User, BookOpen, Users } from "lucide-react";

// Data for the AI tools section. Each entry defines the icon, background
// colour, title, description and a link to launch the corresponding tool.
const aiTools = [
  {
    icon: <MapPin className="h-8 w-8 text-mint" />,
    bgColor: "bg-mint/20",
    title: "Location Scout",
    description:
      "Get rich, immersive 'Writer's Location Dossiers' for any place and time to make your settings feel authentic and alive.",
    href: "https://chatgpt.com/share/687d4aa0-90b8-8000-8b0e-39bc6e6e6d9c",
  },
  {
    icon: <User className="h-8 w-8 text-coral" />,
    bgColor: "bg-coral/20",
    title: "Character-Smith",
    description:
      "Forge deep, multidimensional characters. Build a 'Character Profile Canvas' with goals, flaws, backstories, and arcs to drive your drama.",
    href: "https://chatgpt.com/share/687d4ace-1810-8000-a569-b723f9ee97e9",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    bgColor: "bg-blue-500/20",
    title: "Writer's Group",
    description:
      "Get instant, constructive feedback. This AI simulates a supportive writers' group, offering critiques on pacing, character, and prose.",
    href: "https://chatgpt.com/g/g-6862f670d3a8819192c032cc5a8b3222-ai-writers-retreat-the-perfect-writers-group",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-glow" />,
    bgColor: "bg-glow/20",
    title: "StrunkSensei",
    description:
      "Master *The Elements of Style*. Learn timeless principles of punctuation, sentence structure, and word economy with an interactive AI guide.",
    href: "https://chatgpt.com/g/g-685dd59ed1e88191b2cb4ec3793ff05f-strunksensei",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - NOW FULLY RESPONSIVE */}
      <section className="relative w-full h-[70vh] min-h-[450px] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="A writer looking out a window with a mug, inspired."
          fill
          priority
          // The 'brightness-50' class darkens the image for text readability
          className="object-cover z-0 brightness-50"
        />
        <div className="relative z-20 container mx-auto flex flex-col items-center text-center px-4">
          <h1
            // Font sizes now scale more smoothly from mobile to desktop
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display"
          >
            Master the Craft. Command the Code.
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl font-body text-white/90 leading-relaxed">
            The future of writing belongs to those who blend timeless craft with
            powerful technology. Our primary focus is teaching you to leverage
            generative AI as a revolutionary creative partner. But we do it by
            grounding every lesson in the foundational principles of a Master of
            Fine Arts education—from building a compelling character arc to
            mastering narrative momentum. We are making the core of an MFA
            accessible, helping you build an unshakeable foundation before you
            launch your voice into the future.
          </p>
        </div>
      </section>

      {/* AI Tools Section (Original code restored) */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-display mb-4">
              Meet Your AI Writing Partners
            </h2>
            <p className="max-w-2xl mx-auto text-ink/80 dark:text-canvas/80 mb-12">
              Custom-built AI tools designed to assist, not replace, the
              creative writer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiTools.map((tool) => (
              <div
                key={tool.title}
                className="flex flex-col items-center text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg bg-canvas dark:bg-canvasDark"
              >
                <div
                  className={`p-4 ${tool.bgColor} rounded-full mb-4`}
                >
                  {tool.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-2">
                  {tool.title}
                </h3>
                <p className="font-body text-ink/80 dark:text-canvas/80 text-sm flex-grow">
                  {tool.description}
                </p>
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-glow text-ink font-bold font-ui py-2 px-6 rounded-lg text-sm hover:opacity-90 transition-opacity focus-ring"
                >
                  Launch Tool
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section (Original code restored) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-display mb-12">
            Explore the Retreat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-glow transition-colors hover:shadow-lg">
              <h3 className="font-display text-xl font-bold mb-2">
                Lessons &amp; DIY MFA
              </h3>
              <p className="font-body text-ink/80 dark:text-canvas/80">
                Learn to collaborate with AI through structured lessons and
                projects.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-glow transition-colors hover:shadow-lg">
              <h3 className="font-display text-xl font-bold mb-2">
                AI Tools &amp; Custom GPTs
              </h3>
              <p className="font-body text-ink/80 dark:text-canvas/80">
                Use our pre-trained AI writing partners or build your own
                custom muse.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-glow transition-colors hover:shadow-lg">
              <h3 className="font-display text-xl font-bold mb-2">
                Explore Genres
              </h3>
              <p className="font-body text-ink/80 dark:text-canvas/80">
                Find tools and community spaces tailored to your chosen
                craft.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
