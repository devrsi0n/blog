/* eslint-disable no-param-reassign */
const moment = require('moment-timezone');

// const isProd = process.env.NODE_ENV === 'production';
// const version = process.env.BUILD_VERSION;
const assetPrefix = '';
const esModule = false;

module.exports = {
  webpack: (config, { isServer, defaultLoaders }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
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

    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|webp|jp2)$/,
      issuer: {
        // Next.js already handles url() in css/sass/scss files
        test: /\.\w+(?<!(s?c|sa)ss)$/i,
      },
      // exclude: /public/,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: 8192,
            fallback: require.resolve('file-loader'),
            publicPath: `${assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: esModule || false,
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
