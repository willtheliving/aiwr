// app/page.tsx

import Image from "next/image";

// This is the main component for your homepage.
export default function HomePage() {
  return (
    <main>
      {/* START: Responsive Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[400px] text-white">
        {/* Background Image */}
        <Image
          // IMPORTANT: Update this path to your hero background image in the /public folder
          src="/path-to-your-starry-background.jpg"
          alt="A starry night sky."
          layout="fill"
          objectFit="cover"
          priority // Ensures the hero image loads quickly
          className="brightness-50" // Darkens the image so text is readable
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl font-display">
              Master the Craft of Storytelling
            </h1>
            <p className="mt-4 text-lg md:text-xl text-canvas/90 font-body">
              AI Writers Retreat is a community dedicated to helping you blend
              classic writing techniques with modern AI tools. Start your journey today.
            </p>
            <a
              href="/write"
              className="inline-block px-8 py-3 mt-8 text-base font-bold tracking-wide uppercase transition-transform duration-200 transform rounded-md shadow-lg font-ui bg-glow text-ink hover:scale-105 focus-ring"
            >
              Start Writing
            </a>
          </div>
        </div>
      </div>
      {/* END: Responsive Hero Section */}

      {/* You can add more sections for your homepage below */}
      <div className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Featured Content Will Go Here
          </h2>
        </div>
      </div>
    </main>
  );
}
