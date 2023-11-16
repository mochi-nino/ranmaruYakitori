/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      animation: {
        toLeft: "toLeft 1s ease-in-out infinite",
        toRight: "toRight 1s ease-in-out infinite",
      },
      keyframes: {
        toLeft: {
          "0%,100%": { left: "1.25rem" },
          "50%": { left: "0.75rem" },
        },
        toRight: {
          "0%,100%": { right: "1.25rem" },
          "50%": { right: "0.75rem" },
        },
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         left: {
//           "0%,100%": { left: "1.25rem" },
//           "50%": { left: "1rem" },
//         },
//       },
//       animation: {
//         left: "left 1s ease-in-out infinite",
//       },
//     },
//   },
// };
