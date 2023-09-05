/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,jsx,ts,tsx,vue}', //
        './index.html',
    ],
    theme: {
        creens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            fontFamily: {
                sans: ['Lato', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
                serif: ['Josefin Slab', 'Noto Serif TC', ...defaultTheme.fontFamily.serif],
                display: ['Balsamiq Sans', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
