export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5);
  return `预计阅读需要 ${new Array(cups || 1)
    .fill('☕️')
    .join('')} ${minutes} 分钟`;
}
