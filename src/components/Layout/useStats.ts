import { useEffect } from 'react';

export default function useStatistics(location: Location) {
  useEffect(() => {
    (async () => {
      const rsp = await query('/api/stats/pv', {
        url: location.href,
        title: document.title,
      });
      if (!rsp) {
        throw new Error('Request error');
      }
    })();
  }, [location.href]);
}

function query(url: string, data: object) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data, null, 2),
  });
}
