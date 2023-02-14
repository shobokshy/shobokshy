const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract({
    transpilePackages: ["@cayro/ui-core", "@cayro/ui-primitives", "@cayro/ui-style", "@cayro/ui-icons", "@cayro/ui-state", "@cayro/ui-interactions"],
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glsl)$/,
            use: ["raw-loader", "glslify-loader"],
        });

        return config;
    },
});
