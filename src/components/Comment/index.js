import React, { PureComponent } from 'react';
import pt from 'prop-types';
import md5 from 'md5';
import Gitalk from 'gitalk';

import './gitalk.scss';

export default class Comment extends PureComponent {
  static propTypes = {
    location: pt.object.isRequired,
  };

  componentDidMount = () => {
    const isDev = process.env.NODE_ENV === 'development';
    const clientID = isDev ? 'a7afcc581cd18cca5ef2' : 'cc70cad9028465007126';
    const clientSecret = isDev
      ? '5f3e41eead6331f218cc15bac947fb7baad59161'
      : process.env.GATSBY_CLIENT_SECRET;

    const gitalk = new Gitalk({
      clientID,
      clientSecret,
      repo: 'blog',
      owner: 'devrsi0n',
      admin: ['devrsi0n'],
      // Ensure uniqueness and length less than 50
      id: md5(this.props.location.pathname),
      // Facebook-like distraction free mode
      distractionFreeMode: false,
    });

    gitalk.render('gitalk-container');
  };

  render() {
    return <div id="gitalk-container" />;
  }
}
