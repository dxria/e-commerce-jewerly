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
            {
                protocol: 'https',
                hostname: 'as1.ftcdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: ' i.pinimg.com',
                port: '',
                pathname: '/**',
            }
           
        ],
    },
}

module.exports = nextConfig
