import React from 'react';

import profilePic from '../assets/img/icons/default.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt="Devrsi0n"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ maxWidth: 310 }}>
          <a href="https://mobile.twitter.com/devrsi0n">Devrsi0n</a>
          &nbsp;的个人博客.
          <br />
          软件手艺人.
        </p>
      </div>
    );
  }
}

export default Bio;
