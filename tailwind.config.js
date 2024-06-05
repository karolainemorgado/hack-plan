/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#000", // Fundo preto no modo escuro
          text: "#fff", // Letras brancas no modo escuro
          buttonBg: "#fff", // Fundo do botão branco no modo escuro
          buttonText: "#000", // Letras pretas no botão no modo escuro
        },
        light: {
          background: "#fff", // Fundo branco no modo claro
          text: "#000", // Letras pretas no modo claro
          buttonBg: "#000", // Fundo do botão preto no modo claro
          buttonText: "#fff", // Letras brancas no botão no modo claro
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
