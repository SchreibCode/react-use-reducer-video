module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            black: "#000000",
            primary: "#4de572",
            secondary: "#292a3e",
            "secondary-light": {
                900: "#eaeaec",
                800: "#d4d4d8",
                700: "#bfbfc5",
                600: "#a9aab2",
                500: "#94959f",
                400: "#7f7f8b",
                300: "#696a78",
                200: "#545565",
                100: "#3e3f51",
            },
            "secondary-dark": {
                900: "#040406",
                800: "#08080c",
                700: "#0c0d13",
                600: "#101119",
                500: "#15151f",
                400: "#191925",
                300: "#1d1d2b",
                200: "#212232",
                100: "#252638",
            },
            blue: "#4d74e5",
            red: "#e54dc0",
            yellow: "#e5be4d",
        },
        fontFamily: {
            sans: ["Open Sans", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
