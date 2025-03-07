// tailwind.config.js

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
                },
                ash: {
                    50: '#4a5145',
                }
            },
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
                'stayclassy': ['Stay Classy', 'cursive'],
                'playfair': ['Playfair Display', 'serif'],
            },
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '960px', // Custom breakpoint at 960px
                'xl': '1280px',
                '2xl': '1536px',
            },
        },
    },
    plugins: [],
}