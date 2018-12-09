import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from './Navbar';
import Footer from './Footer';

const Wrapper = styled.div`
  padding: 0 10vw;
`;

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="zh-CN" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <style>{'body {background-color: #f8f8f8;}'}</style>
        </Helmet>
        <Navbar />
        <Wrapper>
          {children}
          <Footer />
        </Wrapper>
      </div>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateWrapper;
