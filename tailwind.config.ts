import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary /*✅*/: {
          50: "#fbf6f5",
          100: "#f6ecea",
          200: "#f0dcd8",
          300: "#e4c3bd",
          400: "#d3a096",
          500: "#ba7264",
          600: "#aa6558",
          700: "#8e5347",
          800: "#77463d",
          900: "#643f38",
          950: "#351e1a",
        },
        "custom-primary" /*✅*/: {
          50: "#fbf6f5",
          100: "#f6ecea",
          200: "#f0dcd8",
          300: "#e4c3bd",
          400: "#d3a096",
          500: "#ba7264",
          600: "#aa6558",
          700: "#8e5347",
          800: "#77463d",
          900: "#643f38",
          950: "#351e1a",
        },
      },
      fontFamily: {
        "red-hat-mono": ["Red Hat Mono", "monospace"],
      },
    },
  },
};
