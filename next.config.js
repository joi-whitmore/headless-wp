/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'joiwhitmore.com',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
    eslint: {
        // We can disable eslint during builds if needed
        // ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;