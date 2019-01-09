// TODO: refactor emoji to picture
export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5);
  return `预计阅读需要 ${new Array(cups || 1)
    .fill('☕️')
    .join('')} ${minutes} 分钟`;
}

const LAST_POST = 'LAST_POST';
const defaultPos = { link: '/', scrollHeight: 0 };

export function getLastPost() {
  try {
    const pos = JSON.parse(window.localStorage.getItem(LAST_POST));
    if (!pos || !pos.link) {
      return defaultPos;
    }
    return pos;
  } catch (error) {
    return defaultPos;
  }
}

export function setLastPost({ link = '/', scrollHeight = 0 }) {
  if (typeof window !== `undefined`) {
    window.localStorage.setItem(
      LAST_POST,
      JSON.stringify({ link, scrollHeight })
    );
  }
}
