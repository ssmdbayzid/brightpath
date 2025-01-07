import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.ghoorilearning.com',
            },
        ],
    },
    env: {
        API_URL: "http://localhost:3000",
        DB_URL:"mongodb+srv://brightpath:vq1QeXOPbI3TuS1U@britghtpath.gfx67.mongodb.net/?retryWrites=true&w=majority&appName=BritghtPath"
    }
};

export default nextConfig;
