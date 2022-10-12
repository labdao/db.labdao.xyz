/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            fs: false, // the solution
        };
        return config;
    },
    images: {
        domains: ['storage.googleapis.com'],
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        baseUrl: "https://api.dbdao.xyz",
        PINATA_KEY: "ab6bb94af3b181eb8c99",
        PINATA_SECRET: "52a5a73ab43132c6b667a6ea04c7f23aaadcbe7296a9f3a2c451f013c057f55f",
        ALCHEMY_KEY: process.env.ALCHEMY_KEY,
        database_id: "63440a7743bcd3172a446f9a",
    },
};

module.exports = nextConfig;