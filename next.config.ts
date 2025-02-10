import type { NextConfig } from "next";
const withImages = require("next-images");

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "http",
                hostname: "192.168.1.100",
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.pdf$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            },
        });
        return config;
    },
};

export default withImages(nextConfig);
