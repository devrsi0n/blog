import React from 'react';
import pt from 'prop-types';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../../components/Layout';
import './index.scss';

class NotFoundPage extends React.Component {
  static propTypes = {
    location: pt.object.isRequired,
  };

  render() {
    const title = get(this, 'props.data.site.siteMetadata.title');
    const layoutStyle = {
      marginLeft: null,
      marginRight: null,
      maxWidth: null,
      display: 'flex',
      justifyContent: 'center',
      marginTop: '5rem',
    };

    return (
      <Layout location={this.props.location} title={title} style={layoutStyle}>
        <div className="code-area">
          <span style={{ color: '#777', fontStyle: 'italic' }}>
            {'// 404, 你来到了未知领域.'}
          </span>
          <br />
          <span>
            <span style={{ color: '#d65562' }}>if </span>(
            <span style={{ color: '#4ca8ef' }}>!</span>
            <span style={{ fontStyle: 'italic', color: '#bdbdbd' }}>found</span>
            ){' {'}
          </span>
          <br />
          <span>
            <span style={{ paddingLeft: '15px', color: '#2796ec' }}>
              <i style={{ width: '10px', display: 'inline-block' }} />
              throw
            </span>
            <span>
              (<span style={{ color: '#a6a61f' }}>"(╯°□°)╯︵ ┻━┻"</span>);
            </span>
            <span style={{ display: 'block' }}>{'}'}</span>
            <br />
            <span style={{ color: '#777', fontStyle: 'italic' }}>
              {'//'} <Link to="/">回到首页!</Link>
            </span>
          </span>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
