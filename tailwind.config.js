/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'blob-one': "url('/blob-one.png')",
                'blob-two': "url('/blob-two.png')",
            },
            animation: {
                blob: "blob 8s ease infinite",
                blob2: "blob2 6s ease infinite",
                skillsSlider: "skillsSlider 6s linear infinite"
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "scale(1) translate(0px, 0px)",
                    },
                    "33%": {
                        transform: "scale(1.3) translate(50px, -70px)",
                    },
                    "66%": {
                        transform: "scale(0.8) translate(-30px, 40px)",
                    },
                    "100%": {
                        transform: "scale(1) translate(0px, 0px)",
                    },

                },
                blob2: {
                    "0%": {
                        transform: "scale(1) translate(0px, 0px)",
                    },
                    "33%": {
                        transform: "scale(1.3) translate(50px, -20px)",
                    },
                    "66%": {
                        transform: "scale(0.8) translate(30px, -40px)",
                    },
                    "100%": {
                        transform: "scale(1) translate(0px, 0px)",
                    },
                },
                skillsSlider: {
                    "0%": {
                        transform: "translateX(0)"
                    },
                    "100%": {
                        transform: "translateX(-100%)"
                    }
                }
            }
        },
    },
    plugins: [],
}
