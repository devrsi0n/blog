import { useEffect } from 'react';
import { query } from '@utils/query';

export default function useStatistics(location: Location) {
  useEffect(() => {
    (async () => {
      const rsp = await query('/api/stats/pv', {
        // Ignore hashlink
        url: location.href.replace(location.hash, ''),
        title: document.title,
      });
      if (!rsp) {
        throw new Error('Request error');
      }
    })();
  }, [location.hash, location.href]);
}
