const withImages = require('next-images');

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      require('remark-frontmatter'),
      // require('remark-code-extra')({}),
    ],
  },
});

module.exports = withMDX(
  withImages({
    esModule: true,
    inlineImageLimit: 8196,
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty',
        };
      }

      return config;
    },
  })
);
