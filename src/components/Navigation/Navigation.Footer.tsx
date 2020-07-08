/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '@components/Section';
import SocialLinks from '@components/SocialLinks';

import mediaqueries from '@styles/media';
import { SiteAndMdxQuery } from '../../types/graphql';

const siteQuery = graphql`
  query siteAndMdx {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
              name
            }
          }
        }
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { frontmatter: { date: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`;

/* eslint-disable no-console */
console.log(`Build at ${process.env.GATSBY_BUILD_TIMESTAMP}`);

function Footer() {
  const results = useStaticQuery<SiteAndMdxQuery>(siteQuery);
  const { name, social } = results.allSite.edges[0].node.siteMetadata;
  const copyrightDate = (() => {
    const { edges } = results.allMdx;
    const years = [0, edges.length - 1].map(
      edge => edges[edge].node.frontmatter.date
    );
    return years[0] === years[1] ? `${years[0]}` : `${years[0]} – ${years[1]}`;
  })();
  return (
    <React.Fragment>
      <FooterGradient
        sx={{
          backgroundColor: 'gradient',
          transition: theme => theme.colorModeTransition,
        }}
      />
      <Section narrow>
        <HoritzontalRule
          sx={{
            borderBottomColor: 'horizontalRule',
          }}
        />
        <FooterContainer
          sx={{
            color: 'grey',
          }}
        >
          <FooterText>
            © {copyrightDate} {name}
          </FooterText>
          <div>
            <SocialLinks links={social} />
          </div>
        </FooterContainer>
      </Section>
    </React.Fragment>
  );
}

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid;

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const FooterText = styled.div`
  ${mediaqueries.tablet`
    margin-bottom: 80px;
  `}

  ${mediaqueries.phablet`
    margin: 120px auto 100px;
  `}
`;

const FooterGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
`;
