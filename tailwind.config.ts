import type { Config } from "tailwindcss";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff69b4', // Pink
        secondary: '#1a1a1a', // Dark gray/black
        accent: '#ff1493', // Deep pink
        background: '#000000', // Pure black
        text: {
          primary: '#ffffff', // White
          secondary: '#ff69b4', // Pink
        }
      },
      fontFamily: {
        sans: ['var(--font-quicksand)', 'sans-serif'],
        heading: ['var(--font-chakra-petch)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
