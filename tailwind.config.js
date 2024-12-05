// tailwind.config.js (ESM Syntax)
import withMT from "@material-tailwind/react/utils/withMT.js";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'indigo-950': '#1e1b4b',
      'blue-950': '#172554',
      'blue': '#62b1f0',
      'blue-primary': '#2596F2',
      'blue-secondary': '#1e3a8a',
      'blue-tertiary': '#172554',
      'blue-light': '#3b92f6',
      'blue-bg-light': '#9acdfc',
      'blue-opaque': '#d1ebff',
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [],
});
