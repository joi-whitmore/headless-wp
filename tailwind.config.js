/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                burgundy: {
                    DEFAULT: '#8b284a',
                    dark: '#771f3e',
                },
                sage: {
                    50: '#e8efe0',
                    100: '#B2C49B',
                    800: '#283C10'
                }
            },
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
                'stayclassy': ['Stay Classy', 'cursive'],
            },
        },
    },
    plugins: [],
}