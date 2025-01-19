import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.ghoorilearning.com',

            },
            {
                protocol: 'https',
                hostname: 'api.ghoorilearning.com',
            }
        ],
    },
    env: {
        API_URL: process.env.API_URL,
        DB_URL:process.env.DB_URL,
    },

};

export default nextConfig;
