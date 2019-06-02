import React, { Fragment } from 'react';
import pt from 'prop-types';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Img from 'gatsby-image';

import Bio from '../components/Bio';
import { LayoutConsumer } from '../layout/Context';
import SEO from '../components/SEO';
import Card from '../components/Card';
import Comment from '../components/Comment';
import ALink from '../components/Link';
import Button from '../components/Button';
import { formatReadingTime, setLastPost } from '../utils/helpers';
import { scale } from '../utils/typography';
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

  constructor(props) {
    super(props);
    this.didInit = false;
  }

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
    const { title, spoiler, date, cover, reference } = post.frontmatter;

    return (
      <LayoutConsumer>
        {({ set }) => {
          if (!this.didInit) {
            set({
              title: siteTitle,
              className: 'blog-post',
              style: { maxWidth: '100vw' },
            });
            this.didInit = true;
          }
          return (
            <Fragment>
              <SEO
                title={title}
                description={spoiler}
                slug={post.fields.slug}
              />
              <section className="main-wrap">
                <aside className="sidebar" />
                <section className="main">
                  <article className="main-content">
                    <figure className="blog-post__headline">
                      <Img
                        fluid={cover.childImageSharp.fluid}
                        alt="Main picture of post"
                      />
                      <figcaption className="blog-post__title">
                        {title}
                      </figcaption>
                      <div className="blog-post__headline-mask" />
                    </figure>
                    {reference && (
                      <section className="blog-post__reference-wrap">
                        <p className="blog-post__reference">
                          题图来自&nbsp;
                          <span
                            dangerouslySetInnerHTML={{ __html: reference }}
                          />
                        </p>
                      </section>
                    )}
                    <section className="blog-post__content">
                      <p
                        style={{
                          ...scale(-1 / 5),
                        }}
                        className="blog-post__time-info"
                      >
                        {date}
                        {` • ${formatReadingTime(post.timeToRead)}`}
                      </p>
                      <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </section>
                    <section className="blog-post__content blog-post__footer">
                      <p className="blog-post__edit-on-gb">
                        <ALink href={editUrl} linkIcon>
                          在 GitHub 上编辑本文
                        </ALink>
                      </p>
                      <Bio />
                      <ul className="blog-post__nav">
                        <li>
                          {previous && (
                            <Button>
                              <Link
                                to={previous.fields.slug}
                                rel="prev"
                                style={{ boxShadow: 'none' }}
                              >
                                ← {previous.frontmatter.title}
                              </Link>
                            </Button>
                          )}
                        </li>
                        <li>
                          {next && (
                            <Button>
                              <Link
                                to={next.fields.slug}
                                rel="next"
                                style={{ boxShadow: 'none' }}
                              >
                                {next.frontmatter.title} →
                              </Link>
                            </Button>
                          )}
                        </li>
                      </ul>
                    </section>
                  </article>
                  <Card className="blog-post__content blog-post__comment">
                    <Comment location={location} />
                  </Card>
                </section>
                <aside className="toc">
                  <section
                    className="toc-list"
                    dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
                  />
                </aside>
              </section>
            </Fragment>
          );
        }}
      </LayoutConsumer>
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
        reference
        cover {
          childImageSharp {
            fluid(quality: 95, background: "rgba(0,0,0,0.05)") {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
