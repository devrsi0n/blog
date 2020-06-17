const moment = require('moment-timezone');

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
};
