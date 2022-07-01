/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'blob-one': "url('/blob-one.png')",
                'blob-two': "url('/blob-two.png')",
            }
        },
    },
    plugins: [],
}
