/**
 * Debounce with count
 * @param fn
 * @param time millisecond
 */
export default function debounce(fn: Function, time = 100) {
  let timeout: ReturnType<typeof setTimeout>;
  const paramMap = {};

  return function(...args: any[]) {
    const debounced = () => {
      const params = Object.entries(paramMap).map(([key, value]) => [
        JSON.parse(key),
        value,
      ]);
      fn.call(this, params);
    };
    const key = JSON.stringify(args);
    if (typeof paramMap[key] === 'number') {
      paramMap[key] += 1;
    } else {
      paramMap[key] = 1;
    }
    clearTimeout(timeout);
    timeout = setTimeout(debounced, time);
  };
}
