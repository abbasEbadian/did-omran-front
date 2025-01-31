import type { NextConfig } from "next";
const withImages = require("next-images");

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
        ],
    },
};

export default withImages(nextConfig);
