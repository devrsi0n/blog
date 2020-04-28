import { useEffect } from 'react';
import { query } from '@utils/query';
import { isNotProd } from '@utils/env';

export default function useStatistics(location: Location) {
  useEffect(() => {
    if (isNotProd) {
      return;
    }

    (async () => {
      const rsp = await query('/api/stats/pv', {
        method: 'POST',
        data: {
          url: location.pathname,
          title: document.title,
        },
      });
      if (!rsp) {
        throw new Error('Request error');
      }
    })();
  }, [location.pathname]);
}
