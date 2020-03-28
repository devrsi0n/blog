const moment = require('moment-timezone');
const path = require('path');
const fs = require('fs').promises;
// const glob = require('tiny-glob');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const postTimestamps = require('../src/gatsby/node/postTimestamps.json');

/**
 * This function called at git staged
 */
(async function() {
  // Show staged files only
  const { stdout: gitDiff } = await exec('git diff --staged --name-only');
  const stagedFiles = gitDiff.matchAll(/content\/[\S]+\/[\S]+.mdx?/gm);
  if (stagedFiles.length === 0) {
    // MDX files are not modified
    return;
  }

  for (const [file] of stagedFiles) {
    /* eslint-disable no-await-in-loop */
    const stat = await fs.stat(file);
    const updatedAt = moment.tz(stat.mtime, 'Asia/Shanghai').format();
    postTimestamps[file] = {
      updatedAt,
    };
  }

  const targetFilePath = path.resolve(
    __dirname,
    '../src/gatsby/node/postTimestamps.json'
  );
  await fs.writeFile(targetFilePath, JSON.stringify(postTimestamps, null, 2));
})();
