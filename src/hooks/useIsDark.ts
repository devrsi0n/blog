import { useColorMode } from 'theme-ui';

export default function useIsDarkMode() {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  return [isDark, setColorMode];
}
