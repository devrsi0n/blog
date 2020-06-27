const moment = require('moment-timezone');
const path = require('path');
const fs = require('fs').promises;
// const glob = require('tiny-glob');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const realtivePath = '../content/postTimestamps.json';
const postTimestamps = require(realtivePath);

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

  const statPromises = [];
  for (const [file] of stagedFiles) {
    statPromises.push(fs.stat(file).then(stat => ({ stat, file })));
  }
  const statList = await Promise.all(statPromises);
  for (const { stat, file } of statList) {
    const updatedAt = moment.tz(stat.mtime, 'Asia/Shanghai').format();
    postTimestamps[file] = {
      updatedAt,
    };
  }

  const targetFilePath = path.resolve(__dirname, realtivePath);
  await fs.writeFile(targetFilePath, JSON.stringify(postTimestamps, null, 2));
  await exec(`git add ${targetFilePath}`);
})();
