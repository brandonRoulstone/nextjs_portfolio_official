/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['cdn-images.imagevenue.com'],
        remotePatterns: [{
        protocol: 'https',
        hostname: 'https://cdn-images.imagevenue.com',
        port: '3000',
        pathname: 'https://cdn-images.imagevenue.com',
        }],
        domains: ['cdn-images.imagevenue.com']
    }
};

export default nextConfig;
