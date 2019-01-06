import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://github.com/devrsi0n"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://weibo.com/qianmofeiyu"
          target="_blank"
          rel="noopener noreferrer"
        >
          weibo
        </a>{' '}
        &bull;{' '}
        <a
          href="https://mobile.twitter.com/devrsi0n"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </footer>
    );
  }
}

export default Footer;
