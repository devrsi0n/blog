import React, { PureComponent } from 'react';
import pt from 'prop-types';
import md5 from 'md5';
import Gitalk from 'gitalk/dist/gitalk-component';

import './gitalk.scss';

export default class Comment extends PureComponent {
  static propTypes = {
    location: pt.object.isRequired,
  };

  render() {
    const clientID = 'cc70cad9028465007126';
    const clientSecret = '2faa230cc447c47d00cc46d9b1dc6984355ad068';
    return (
      <div id="gitalk-container">
        {typeof window !== 'undefined' && Gitalk && (
          <Gitalk
            options={{
              clientID,
              clientSecret,
              repo: 'blog',
              owner: 'devrsi0n',
              admin: ['devrsi0n'],
              // Ensure uniqueness and length less than 50
              id: md5(this.props.location.pathname),
              // Facebook-like distraction free mode
              distractionFreeMode: false,
            }}
          />
        )}
      </div>
    );
  }
}
