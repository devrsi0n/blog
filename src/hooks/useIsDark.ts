import { useColorMode } from 'theme-ui';

export default function useIsDarkMode() {
  const [colorMode, setColorMode] = useColorMode();
  const isDark: boolean = colorMode === `dark`;
  return { isDark, setColorMode };
}
