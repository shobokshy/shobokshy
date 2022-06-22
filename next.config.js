const withTM = require("next-transpile-modules")(["@cayro/ui-core", "@cayro/ui-primitives", "@cayro/ui-icons"]);

module.exports = withTM({
	reactStrictMode: false,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(glsl)$/,
			use: ["raw-loader", "glslify-loader"],
		});

		return config;
	},
});
