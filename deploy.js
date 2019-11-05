// @ts-nocheck
/* eslint-disable no-console */
const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    repo: `https://${process.env.GH_TOKEN}@github.com/devrsi0n/devrsi0n.github.io.git`,
    branch: 'master',
    silent: true,
  },
  function(...args) {
    console.log('deploy');
    console.log(args);
  }
);
