module.exports = {
  mode: "jit",
  content: ["./src/**/*.tsx", "./src/index.html"],
  theme: {
    extend: {
      boxShadow: {
        lightGray: `0 0px 8px 4px hsl(206 10% 70% / 1)`,
        lightBlue: `0 0px 8px 4px hsl(201 69% 70% / 1)`,
      },
      fontSize: {
        xxs: `0.5rem`,
      },
    },
  },
  plugins: [],
};
