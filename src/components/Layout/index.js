import React from 'react';
import pt from 'prop-types';
import { rhythm } from '../../utils/typography';
import Header from '../Header';
import Footer from '../Footer';

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
    const { title, children, className, style } = this.props;
    return (
      <div>
        <Header {...{ title }} />
        <main
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(28),
            ...style,
          }}
          {...{ className }}
        >
          {children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
