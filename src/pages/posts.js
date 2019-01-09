import React from 'react';
import { navigate } from 'gatsby';

import { getLastPost } from '../utils/helpers';

// Redirecting for Gitalk login
class Posts extends React.Component {
  render() {
    const { link } = getLastPost();
    navigate(link);
    return (
      <div>
        <p>Redirecting...</p>
      </div>
    );
  }
}

export default Posts;
