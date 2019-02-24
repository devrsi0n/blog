import React from 'react';
import pt from 'prop-types';
import { Link } from 'gatsby';
import { colorDark } from '../utils/theme-variable';

import { rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
  static propTypes = {
    location: pt.object.isRequired,
    title: pt.string.isRequired,
    children: pt.node.isRequired,
    className: pt.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { location, title, children, className } = this.props;
    // eslint-disable-next-line no-undef
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.0),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to="/"
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(-1),
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
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(34),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
        {...{ className }}
      >
        {header}
        {children}
      </div>
    );
  }
}

export default Layout;
