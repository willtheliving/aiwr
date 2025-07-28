/**
 * Next.js configuration.
 *
 * This file exports a configuration object that tells Next.js how to
 * behave at build and runtime. See https://nextjs.org/docs/api-reference/next.config.js/introduction
 * for more details.
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;