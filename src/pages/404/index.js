import React from 'react';
// import pt from 'prop-types';
import { Link, graphql } from 'gatsby';
// import get from 'lodash/get';

// import { LayoutConsumer } from '../../layout/Context';
// import { rhythm } from '../../utils/typography';
import './index.scss';

class NotFoundPage extends React.Component {
  // static propTypes = {
  //   location: pt.object.isRequired,
  // };

  render() {
    // const title = get(this, 'props.data.site.siteMetadata.title');

    return (
      <section
        style={
          {
            // maxWidth: rhythm(28),
          }
        }
        className="code-area"
      >
        <p style={{ color: '#777', fontStyle: 'italic' }}>
          {'// 404, 你来到了未知领域.'}
        </p>
        <br />
        <div>
          <span style={{ color: '#d65562' }}>if </span>(
          <span style={{ color: '#4ca8ef' }}>!</span>
          <span style={{ fontStyle: 'italic', color: '#bdbdbd' }}>found</span>)
          {' {'}
        </div>
        <br />
        <div>
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
        </div>
      </section>
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
