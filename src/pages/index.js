import React from 'react';
// import pt from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';

import Bio from '../components/Bio';
import Card from '../components/Card';
// import { LayoutConsumer } from '../layout/Context';
import SEO from '../components/SEO';
import { formatReadingTime } from '../utils/helpers';
import { rhythm } from '../utils/typography';
import './index.scss';

class BlogIndex extends React.Component {
  // static propTypes = {
  //   location: pt.object.isRequired,
  // };

  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    // const siteDescription = get(
    //   this,
    //   'props.data.site.siteMetadata.description'
    // );
    const posts = get(this, 'props.data.allMarkdownRemark.edges', []);

    return (
      <main
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
        className="index"
      >
        <SEO />
        <Bio />
        {posts.map(({ node }) => {
          const { slug } = node.fields;
          const title = get(node, 'frontmatter.title') || slug;
          const cover = node.frontmatter.cover.childImageSharp.fluid;
          const postLink = node.fields.slug;
          return (
            <Card key={node.fields.slug}>
              <Link to={postLink}>
                <Img fluid={cover} alt="main image of blog" />
              </Link>
              <section className="index__post">
                <h3
                  className="index__post-title"
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  {slug.startsWith('/drafts/') && (
                    <div className="index__draft-logo">✍</div>
                  )}
                  <Link style={{ boxShadow: 'none' }} to={postLink}>
                    {title}
                  </Link>
                </h3>
                <small className="index__time-info">
                  {node.frontmatter.date}
                  {` • ${formatReadingTime(node.timeToRead)}`}
                </small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.spoiler,
                  }}
                />
              </section>
            </Card>
          );
        })}
      </main>
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
            cover {
              childImageSharp {
                fluid(quality: 75, background: "rgba(0,0,0,0.05)") {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
