/* eslint-disable no-param-reassign */
const moment = require('moment-timezone');

const remarkSlug = require(`remark-slug`);

const contentAuthors = 'content/authors';
const contentPosts = 'content/posts';

const analyze = process.env.ANALYZE;
const isEnvDev = process.env.NODE_ENV === 'development';

const version = process.env.GATSBY_BUILD_VERSION;

process.env.GATSBY_BUILD_TIMESTAMP = moment
  .tz(new Date(), 'Asia/Shanghai')
  .format();

const local = true;
const contentful = false;

module.exports = {
  pathPrefix: '/',
  assetPrefix: `https://cdn.jsdelivr.net/gh/devrsi0n/devrsi0n.github.io@${version}`,
  siteMetadata: {
    title: `Devrsi0n's blog`,
    name: `devrsi0n`,
    siteUrl: `https://devrsi0n.com`,
    description: `I build software for humans`,
    hero: {
      heading: `I build software for humans.`,
      maxWidth: 652,
    },
    social: [
      {
        name: 'twitter',
        // url: `https://twitter.com/devrsi0n`,
        url: `https://bit.ly/2NcAZQZ`,
      },
      {
        url: `https://github.com/devrsi0n`,
      },
      {
        url: `https://weibo.com/qianmofeiyu`,
      },
    ],
    isLocal: local,
    repoUrl: 'https://github.com/devrsi0n/blog',
  },
  mapping: {
    'Mdx.frontmatter.author': `AuthorsYaml`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPosts,
        name: contentPosts,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentAuthors,
        name: contentAuthors,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          // `gatsby-remark-embed-video`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 10000,
              linkImagesToOriginal: false,
              quality: 85,
              withWebp: false,
              tracedSVG: true,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: 'gatsby-remark-check-links' },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
        ],
        remarkPlugins: [remarkSlug],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        displayName: isEnvDev,
      },
    },
    `gatsby-plugin-theme-ui`,
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: '', // add your MC list endpoint here; see plugin repo for instructions
    //   },
    // },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#6166DC`,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-108341680-2',
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$|\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          fix: true,
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    analyze && {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3001,
        production: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devrsi0n's blog`,
        short_name: `Devrsi0n`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        title: "Devrsi0n's blog feed",
        output: '/rss.xml',
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        setup: ({
          query: {
            site: { siteMetadata },
          },
          ...rest
        }) => {
          siteMetadata.feed_url = `${siteMetadata.siteUrl}/rss.xml`;
          siteMetadata.image_url = `${siteMetadata.siteUrl}/icons/icon-512x512.png`;
          const siteMetadataModified = siteMetadata;
          siteMetadataModified.feed_url = `${siteMetadata.siteUrl}/rss.xml`;
          siteMetadataModified.image_url = `${siteMetadata.siteUrl}/icons/icon-512x512.png`;

          return {
            ...siteMetadataModified,
            ...rest,
          };
        },
        feeds: [
          {
            title: "Devrsi0n's blog feed",
            output: '/rss.xml',
            serialize: ({ query: { site, allArticle, allContentfulPost } }) => {
              if (local && !contentful) {
                return allArticle.edges
                  .filter(edge => !edge.node.secret)
                  .map(edge => {
                    return {
                      ...edge.node,
                      description: edge.node.excerpt,
                      date: edge.node.date,
                      url: site.siteMetadata.siteUrl + edge.node.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.slug,
                      // custom_elements: [{ "content:encoded": edge.node.body }],
                      author: edge.node.author,
                    };
                  });
              }
              if (!local && contentful) {
                return allContentfulPost.edges
                  .filter(edge => !edge.node.secret)
                  .map(edge => {
                    return {
                      ...edge.node,
                      description: edge.node.excerpt,
                      date: edge.node.date,
                      url: site.siteMetadata.siteUrl + edge.node.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.slug,
                      // custom_elements: [{ "content:encoded": edge.node.body }],
                      author: edge.node.author,
                    };
                  });
              }
              const allArticlesData = { ...allArticle, ...allContentfulPost };
              return allArticlesData.edges
                .filter(edge => !edge.node.secret)
                .map(edge => {
                  return {
                    ...edge.node,
                    description: edge.node.excerpt,
                    date: edge.node.date,
                    url: site.siteMetadata.siteUrl + edge.node.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.slug,
                    // custom_elements: [{ "content:encoded": edge.node.body }],
                    author: edge.node.author,
                  };
                });
            },
            query:
              local && !contentful
                ? `
              {
                allArticle(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      author
                      secret
                    }
                  }
                }
              }
              `
                : !local && contentful
                ? `
              {
                allContentfulPost(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      author {
                        name
                      }
                      secret
                    }
                  }
                }
              }
              `
                : `
              {
                allArticle(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      author
                      secret
                    }
                  }
                }
                allContentfulPost(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      author {
                        name
                      }
                      secret
                    }
                  }
                }
              }
              `,
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
  ].filter(Boolean),
};
