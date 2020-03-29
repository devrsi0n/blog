import { useEffect } from 'react';

export default function useStatistics(location: Location) {
  useEffect(() => {
    (async () => {
      const pv = {
        url: location.href,
        title: document.title,
        browser: getBrowser(),
      };
      const rsp = await fetch('/api/graphql', {
        method: 'POST',
        body: JSON.stringify(pv, null, 2),
      });
      if (!rsp) {
        throw new Error('Request error');
      }
    })();
  }, [location]);
}

function getBrowser() {
  const ua = navigator.userAgent;
  let tem;
  let matchArr =
    ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
    [];
  if (/trident/i.test(matchArr[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return `IE ${tem[1] || ''}`;
  }
  if (matchArr[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) {
      return tem
        .slice(1)
        .join(' ')
        .replace('OPR', 'Opera');
    }
  }
  matchArr = matchArr[2]
    ? [matchArr[1], matchArr[2]]
    : [navigator.appName, navigator.appVersion, '-?'];
  tem = ua.match(/version\/(\d+)/i);
  if (tem != null) {
    matchArr.splice(1, 1, tem[1]);
  }
  return matchArr.join(' ');
}
