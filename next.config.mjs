const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? '/andy-miao-gu.github.io/' : '',
    basePath: isProd ? '/andy-miao-gu.github.io' : '',
    images: {
        unoptimized: true,
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };
        return config;
    },
};

export default nextConfig;