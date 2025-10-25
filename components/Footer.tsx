import Link from "next/link";
import Image from "next/image";
import { Mail, Coffee } from "lucide-react";

// Social media links can be managed here
const socialLinks = [
  { href: "https://x.com/aiwriterretreat", src: "/X.png", alt: "X logo", label: "X" },
  { href: "http://tiktok.com/@aiwritersretreat", src: "/tiktok.png", alt: "TikTok logo", label: "TikTok" },
  { href: "http://www.instagram.com/aiwritersretreat", src: "/Instagram.png", alt: "Instagram logo", label: "Instagram" },
  { href: "#", src: "/facebook.png", alt: "Facebook logo", label: "Facebook" }, // Update href when available
];

export default function Footer() {
  // Obfuscates the email to make it harder for spam bots to scrape
  const emailUser = "message";
  const emailDomain = "aiwritersretreat.com";
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8 items-center md:items-start text-center md:text-left">
          {/* Column 1: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href={`mailto:${emailUser}@${emailDomain}`}
              className="inline-flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 text-ink dark:text-canvas font-bold font-ui py-2 px-4 rounded-lg text-sm hover:opacity-90 transition-opacity focus-ring"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Column 2: Follow Us */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-bold font-display text-sm uppercase tracking-wider text-ink/60 dark:text-canvas/60">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity focus-ring rounded-full"
                >
                  {/* Ensure these images are in your /public folder */}
                  <Image src={social.src} alt={social.alt} width={24} height={24} className="dark:invert" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Donate */}
          <div className="flex flex-col items-center md:items-end">
            <a
              href="https://coff.ee/aiwritersretreat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-glow text-ink font-bold font-ui py-2 px-4 rounded-lg text-sm hover:opacity-90 transition-opacity focus-ring"
            >
              <Coffee className="h-5 w-5" />
              <span>Buy Me a Coffee</span>
            </a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-ink/60 dark:text-canvas/60">
          <p>&copy; {new Date().getFullYear()} AI Writers’ Retreat. All Rights Reserved.</p>
          <p className="mt-1">This is an independent project. The content and tools on this site are for your personal learning and use.</p>
        </div>
      </div>
    </footer>
  );
}