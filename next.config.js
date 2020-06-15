const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      require('remark-frontmatter'),
      // require('remark-code-extra')({}),
    ],
  },
});

module.exports = withMDX({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
});
