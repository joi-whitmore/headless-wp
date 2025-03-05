/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['joiwhitmore.com'],
    },
    eslint: {
        // We can disable eslint during builds if needed
        // ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;