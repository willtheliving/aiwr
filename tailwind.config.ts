import type { Config } from "tailwindcss";

/**
 * Tailwind CSS configuration.
 *
 * The `content` array tells Tailwind where to look for class names so
 * unused styles can be purged in production. You can modify the paths
 * if you add additional directories or file types.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#1E2A38',
        glow: '#7B70FF',
        mint: '#2BD9B2',
        coral: '#FF6977',
        canvas: '#FDFCFB',
        canvasDark: '#121417',
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-merriweather)', 'serif'],
        ui: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.5rem',
        '2xl': '1rem',
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(123,112,255,.6)',
      },
    },
  },
  plugins: [],
};

export default config;