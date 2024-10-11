/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: "https", hostname: "dragonball-api.com"}],
    },
    async rewrites() {
        return [
            {
                source: "/fetch-page",
                destination: "/primeira-rota",
            },
            {
                source: "/axios-page",
                destination: "/segunda-rota",
            },
            {
                source: "/fetch-page",
                destination: "/terceira-rota",
            },
            {
                source: "/easterEgg",
                destination: "/easterEgg"
            },
            {
                source: "/",
                destination: "/home",
            }
        ];
    }
};

export default nextConfig;