/** @format */

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.mp3$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["file-loader"],
    });

    return config;
  },
};
