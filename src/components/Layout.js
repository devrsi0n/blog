import React from 'react';
import pt from 'prop-types';
import { rhythm } from '../utils/typography';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  static propTypes = {
    location: pt.object.isRequired,
    title: pt.string.isRequired,
    children: pt.node.isRequired,
    className: pt.string,
    style: pt.object,
  };

  static defaultProps = {
    className: '',
    style: {},
  };

  render() {
    const { location, title, children, className, style } = this.props;
    // eslint-disable-next-line no-undef
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;
    return (
      <div>
        <Header {...{ title }} />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: isRootPath ? rhythm(14) : rhythm(28),
            // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            ...style,
          }}
          {...{ className }}
        >
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
