import React from 'react';
import pt from 'prop-types';
import { rhythm } from '../utils/typography';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Transition from './Transition';
import { ContextProviderComponent, LayoutConsumer } from './Context';

class Layout extends React.Component {
  static propTypes = {
    location: pt.object.isRequired,
    children: pt.node.isRequired,
  };

  render() {
    const { children, location } = this.props;
    return (
      <ContextProviderComponent>
        <Header />
        <Transition location={location}>
          <LayoutConsumer>
            {({ data }) => {
              return (
                <main
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: rhythm(28),
                    ...data.style,
                  }}
                  className={data.className}
                >
                  {children}
                </main>
              );
            }}
          </LayoutConsumer>
        </Transition>
        <Footer />
      </ContextProviderComponent>
    );
  }
}

export default Layout;
