export default {
    darkMode: "class", // <--- important!
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: { extend: {
      transitionTimingFunction: {
        'snap': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    } },
    plugins: [],
  }
  