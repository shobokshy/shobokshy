const withTM = require("next-transpile-modules")(["@cayro/ui-core", "@cayro/ui-primitives", "@cayro/ui-icons"]);

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  img-src 'self';
  connect-src 'self';
  object-src 'self';
  media-src 'self';
  frame-src 'self';
  child-src 'self';
  base-uri 'self';
  script-src-elem 'self';
`;

module.exports = withTM({
	reactStrictMode: false,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(glsl)$/,
			use: ["raw-loader", "glslify-loader"],
		});

		return config;
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Content-Security-Policy",
						value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
					},
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
					{
						key: "Server",
						value: "Apache",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "Referrer-Policy",
						value: "same-origin",
					},
				],
			},
		];
	},
});
