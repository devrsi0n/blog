import { useEffect } from 'react';
import { useColorMode } from 'theme-ui';

export default function useUtteranc(containerId: string) {
  const [colorMode] = useColorMode();
  const isDark = colorMode === 'dark';
  useEffect(() => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const script = document.createElement('script');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('repo', 'devrsi0n/blog');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'utteranc');
    script.setAttribute('theme', isDark ? 'github-dark' : 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');

    container.appendChild(script);
    return () => {
      try {
        container.removeChild(script);
      } catch (error) {
        // ignore, utteranc auto clean the script
      }
    };
  }, [containerId, isDark]);
}
