/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'inter-tight': ['Inter Tight', 'sans-serif'],
    },
    extend: {
      minHeight: {
        calc: "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [],
};
