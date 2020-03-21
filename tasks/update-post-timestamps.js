const path = require('path');
const fs = require('fs').promises;
const glob = require('tiny-glob');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

(async function() {
  const files = await glob('content/**/*.mdx');
  const result = {};
  for (const file of files) {
    /* eslint-disable no-await-in-loop */
    const { stdout: updatedAt } = await exec(
      `git log -1 --pretty=format:%cI -- ${file} | sort | tail -n 1`
    );
    result[file] = {
      updatedAt: updatedAt.trim(),
    };
  }

  const targetFilePath = path.resolve(
    __dirname,
    '../src/gatsby/node/postTimestamps.json'
  );
  await fs.writeFile(targetFilePath, JSON.stringify(result, null, 2));
  await exec('git add .');
  await exec('git commit --no-verify --amend --no-edit');
})();
