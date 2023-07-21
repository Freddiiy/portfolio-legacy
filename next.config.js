/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['da-DK', 'en-US'],
        defaultLocale: 'da-DK'
    },
    webpack: (config) => {
        config.resolve.fallback = {fs: false};
        return config;
    },
    images: {
        domains: [
            "media.licdn.com"
        ]
    },
}

module.exports = nextConfig
