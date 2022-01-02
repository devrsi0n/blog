/* eslint-disable no-console */
const fetch = require('node-fetch');
const semver = require('semver');
const ghPages = require('gh-pages');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const url = 'https://api.github.com/repos/devrsi0n/devrsi0n.github.io/tags';

(async function() {
  const data = await fetch(url).then(res => res.json());
  const versions = data.sort(function(v1, v2) {
    return semver.compare(v2.name, v1.name);
  });
  const latestTag = versions[0].name;
  const newTagVersion = semver.inc(
    latestTag,
    Math.random() > 0.9 ? 'minor' : 'patch'
  );
  console.log({ latestTag, newTagVersion });
  const newTag = `v${newTagVersion}`;

  try {
    await run('npx gh-pages-clean');
    await run('npx gatsby clean');
    await run('npx gatsby build --prefix-paths', {
      env: {
        ...process.env,
        GATSBY_BUILD_VERSION: newTagVersion,
      },
    });
  } catch (error) {
    console.error(error);
    process.exit(-1);
  }

  ghPages.publish(
    'public',
    {
      repo: `https://${process.env.GH_TOKEN}@github.com/devrsi0n/devrsi0n.github.io.git`,
      branch: 'master',
      message: 'chore: auto-generated commit',
      tag: newTag,
      silent: true,
    },
    function(...args) {
      console.log('GitHub deploy');
      console.log(args);
    }
  );
})();

async function run(command, options) {
  const clean = await exec(command, options);
  console.log(clean.stdout);
  console.error(clean.stderr);
}
