/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                shimmer: {
                    '100%': { transform: 'translateX(100%)' }
                }
            },
            animation: {
                shimmer: 'shimmer 2s infinite'
            }
        }
    },
    plugins: []
};

/**
 * Key frames are what are used to actually implement an animation, in this case,
 * we're saying move an element 100% to the right hand side
 * second animation says go and find the shimmer rule that we just set up, and play it over 1.5 seconds, repeat, infinite
 */
