import React from 'react';

import { getLastPost } from '../utils/helpers';

// Redirecting for Gitalk login
class Posts extends React.Component {
  render() {
    let { link } = getLastPost();
    if (!link) link = '/';
    window.location.pathname = link;
    return (
      <div>
        <p>Redirecting...</p>
      </div>
    );
  }
}

export default Posts;
