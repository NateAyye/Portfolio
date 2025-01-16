/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      accent: 'hsl(var(--accent))',
      border: 'hsl(var(--border))',
    },
    extend: {
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  plugins: [],
};
