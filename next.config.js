const moment = require('moment-timezone');

const isProd = process.env.NODE_ENV === 'production';
const version = process.env.BUILD_VERSION;

module.exports = {
  webpack: (config, { isServer, defaultLoaders }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.node = {
        fs: 'empty',
      };
    }

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [
              require('remark-frontmatter'),
              // require('remark-code-extra')({}),
            ],
          },
        },
      ],
    });

    return config;
  },
  env: {
    BUILD_TIMESTAMP: moment.tz(new Date(), 'Asia/Shanghai').format(),
  },
  // assetPrefix: isProd
  //   ? `https://cdn.jsdelivr.net/gh/devrsi0n/devrsi0n.github.io@${version}`
  //   : '',
  typescript: {
    // TODO: Disable this option
    ignoreBuildErrors: true,
  },
};
