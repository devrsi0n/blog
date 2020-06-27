import { useEffect } from 'react';
import { query } from '../utils/query';
import { isNotProd } from '../utils/env';

export default function useStatistics() {
  useEffect(() => {
    if (isNotProd) {
      return;
    }

    (async () => {
      const rsp = await query('/api/stats/pv', {
        method: 'POST',
        data: {
          url: window.location.pathname,
          title: document.title,
        },
      });
      if (!rsp) {
        throw new Error('Request error');
      }
    })();
  }, []);
}
