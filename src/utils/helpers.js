// TODO: refactor emoji to picture
export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5);
  return `预计阅读需要 ${new Array(cups || 1)
    .fill('☕️')
    .join('')} ${minutes} 分钟`;
}

const LAST_POST = 'LAST_POST';

export function getLastPost() {
  return JSON.parse(window.localStorage.getItem(LAST_POST));
}

export function setLastPost({ link = '/', scrollHeight = 0 }) {
  window.localStorage.setItem(
    LAST_POST,
    JSON.stringify({ link, scrollHeight })
  );
}
