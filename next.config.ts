import type {NextConfig} from "next";

const withImages = require("next-images");

const nextConfig: NextConfig = {
    output: "standalone",
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "http",
                hostname: "192.168.1.102",
            },
            {
                protocol: "https",
                hostname: "didomran.ir",
            },
            {
                protocol: "http",
                hostname: "didomran.ir",
            },
            {
                protocol: "https",
                hostname: "didomran.com",
            },
            {
                protocol: "http",
                hostname: "didomran.com",
            },
            {
                protocol: "https",
                hostname: "abbasebadian.storage.c2.liara.space",
            },
            {
                protocol: "https",
                hostname: "didomran.storage.c2.liara.space",
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
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default withImages(nextConfig);
