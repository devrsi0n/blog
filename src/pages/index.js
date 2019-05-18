import React from 'react';
import pt from 'prop-types';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { formatReadingTime } from '../utils/helpers';
import { rhythm } from '../utils/typography';
import './index.scss';

class BlogIndex extends React.Component {
  static propTypes = {
    location: pt.object.isRequired,
  };

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    // const siteDescription = get(
    //   this,
    //   'props.data.site.siteMetadata.description'
    // );
    const posts = get(this, 'props.data.allMarkdownRemark.edges', []);

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        className="index"
        style={{
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <SEO />
        <Bio />
        {posts.map(({ node }) => {
          const { slug } = node.fields;
          const title = get(node, 'frontmatter.title') || slug;
          const headPicture =
            node.frontmatter.headPicture.childImageSharp.resolutions;
          console.log(headPicture);
          return (
            <div key={node.fields.slug} className="index_post-wrap">
              <div
                style={{
                  backgroundImage: `url(${headPicture.src})`,
                  height: headPicture.height,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="index__post">
                <h3
                  className="index__post-title"
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  {slug.startsWith('/drafts/') && (
                    <div className="index-draft-logo">✍</div>
                  )}
                  <Link
                    style={{ boxShadow: 'none' }}
                    to={`${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small style={{ fontSize: '0.85rem' }}>
                  {node.frontmatter.date}
                  {` • ${formatReadingTime(node.timeToRead)}`}
                </small>
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
                />
              </div>
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(
              formatString: "YYYY MM DD"
              # locale: "zh-cn"
            )
            title
            spoiler
            headPicture {
              childImageSharp {
                resolutions(height: 150) {
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
