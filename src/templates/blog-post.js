import React from 'react';
import pt from 'prop-types';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Comment from '../components/Comment';
import { formatReadingTime, setLastPost } from '../utils/helpers';
import { rhythm, scale } from '../utils/typography';
import { colorDark } from '../utils/theme-variable';
import './blog-post.scss';

const GITHUB_USERNAME = 'devrsi0n';
const GITHUB_REPO_NAME = 'blog';

class BlogPostTemplate extends React.Component {
  static propTypes = {
    data: pt.shape({
      markdownRemark: pt.object.isRequired,
    }).isRequired,
    pageContext: pt.object.isRequired,
    location: pt.object.isRequired,
  };

  componentWillUnmount() {
    setLastPost({
      link: this.props.location.pathname,
    });
  }

  render() {
    const { location } = this.props;
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { previous, next, slug } = this.props.pageContext;
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/contents/${slug.replace(
      /\/$/g,
      ''
    )}.md`;

    return (
      <Layout location={location} title={siteTitle} className="blog-post">
        <div className="content-wrap">
          <div className="sidebar" />
          <div className="content">
            <SEO
              title={post.frontmatter.title}
              description={post.frontmatter.spoiler}
              slug={post.fields.slug}
            />
            <h1>{post.frontmatter.title}</h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: 'block',
                marginBottom: rhythm(1),
                marginTop: rhythm(-0.5),
                fontSize: '0.85rem',
              }}
            >
              {post.frontmatter.date}
              {` • ${formatReadingTime(post.timeToRead)}`}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <p>
              <a href={editUrl} target="_blank" rel="noopener noreferrer">
                在 GitHub 上编辑本文
              </a>
            </p>
            <h3
              style={{
                marginTop: rhythm(0.25),
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: colorDark,
                }}
                to="/"
              >
                Devrsi0n
              </Link>
            </h3>
            <Bio />
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
            <Comment location={location} />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
            className="toc"
          />
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      tableOfContents
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY MM DD")
        spoiler
      }
      fields {
        slug
      }
    }
  }
`;
