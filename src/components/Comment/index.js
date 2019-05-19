import React, { useEffect, useState } from 'react';
import pt from 'prop-types';
import md5 from 'md5';
import Gitalk from 'gitalk/dist/gitalk-component';

import './gitalk.scss';

export default function Comment({ location }) {
  const [initGitalk, setInitGitalk] = useState(false);
  useEffect(() => {
    // Load gitalk only when component did mount, avoid gatsby build process
    setInitGitalk(true);
  }, []);
  const id = md5(location.pathname).slice(0, 5);
  const env = process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD';
  return (
    <div id="gitalk-container">
      {initGitalk && typeof window !== 'undefined' && document.title && Gitalk && (
        <Gitalk
          options={{
            // process.env.* cannot be destructured since they are only available at build time
            clientID: process.env.GH_CLIENT_ID,
            clientSecret: process.env.GH_CLIENT_SECRET,
            repo: 'blog',
            owner: 'devrsi0n',
            admin: ['devrsi0n'],
            // Ensure uniqueness and length less than 50
            id,
            title: document.title,
            labels: [env],
            // Facebook-like distraction free mode
            distractionFreeMode: false,
          }}
        />
      )}
    </div>
  );
}

Comment.propTypes = {
  location: pt.object.isRequired,
};
