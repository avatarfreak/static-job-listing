const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        "fs-900": "var(--fs-900)",
        "fs-800": "var(--fs-800)",
        "fs-700": "var(--fs-700)",
        "fs-600": "var(--fs-600)",
        "fs-500": "var(--fs-500)",
      },
      fontFamily: {
        serif: "var(--ff-serif)",
      },
      colors: {
        "pri-clr-100": "var(--pri-clr-100)",
        "clr-100": "var(--clr-100)",
        "clr-110": "var(--clr-110)",
        "clr-120": "var(--clr-120)",
        "clr-130": "var(--clr-130)",
      },
      letterSpacing: {
        "t-0": "var(--t-0)",
      },
      backgroundImage: {
        mobile: `url(${prefix}/images/bg-header-mobile.svg)`,
        desktop: `url(${prefix}/images/bg-header-desktop.svg)`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
