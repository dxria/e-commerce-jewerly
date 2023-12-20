/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.e-pandora.ua',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
