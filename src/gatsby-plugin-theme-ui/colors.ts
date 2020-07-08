import { lighten } from 'polished';
import * as PrismColors from './prism-colors';

const accent = {
  light: '#6166DC',
  dark: '#E9DAAC',
};
const background = {
  light: '#fefefe',
  dark: 'rgba(17, 18, 22, 0.95)',
};

export const colors = {
  // Set the initial color mode to dark when @media (prefers-color-scheme: dark) matches
  useColorSchemeMediaQuery: true,
  text: '#08080B',
  background: background.light,
  primary: '#000',
  secondary: '#73737D',
  muted: 'hsl(10, 20%, 94%)',
  accent: accent.light,
  lightAccent: lighten(0.3, accent.light),
  purple: 'hsl(250, 60%, 30%)',
  gray: '#999',
  blur: 'rgba(254, 254, 254, 0.4)',
  prism: PrismColors.light,
  codeLabel: '#08080B',
  grey: '#73737D',
  hover: 'rgba(0, 0, 0, 0.07)',
  gradient: 'linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #D9DBE0 100%)',
  track: 'rgba(8, 8, 11, 0.3)',
  progress: {
    complete: '#000',
    bg: '#B5B8B9',
  },
  card: '#fff',
  error: '#EE565B',
  success: '#46B17B',
  errorBackground: 'rgba(238, 86, 91, 0.1)',
  horizontalRule: 'rgba(8, 8, 11, 0.15)',
  inputBackground: 'rgba(0, 0, 0, 0.05)',
  shadow1: 'rgba(0,0,0,.132)',
  shadow2: 'rgba(0,0,0,.108)',
  shadow3: 'rgba(0,0,0,.22)',
  shadow4: 'rgba(0,0,0,.18)',

  like: 'rgb(224, 36, 94)',
  handclap: 'rgb(29, 161, 242)',
  share: 'rgb(23, 191, 99)',

  modes: {
    dark: {
      text: '#fff',
      primary: '#fff',
      secondary: '#fff',
      accent: accent.dark,
      background: background.dark,
      muted: 'hsl(10, 20%, 94%)',
      lightAccent: lighten(0.1, accent.dark),
      purple: 'hsl(250, 60%, 30%)',
      gray: '#666',
      blur: 'rgba(17, 18, 22, 0.5)',

      prism: PrismColors.dark,
      codeLabel: '#292c34',
      grey: '#73737D',
      hover: 'rgba(255, 255, 255, 0.07)',
      gradient:
        'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)',
      track: 'rgba(255, 255, 255, 0.3)',
      progress: {
        complete: '#fff',
        bg: '#73737D',
      },
      card: '#1D2128',
      error: '#EE565B',
      success: '#46B17B',
      errorBackground: 'rgba(238, 86, 91, 0.1)',
      horizontalRule: 'rgba(255, 255, 255, 0.15)',
      inputBackground: 'rgba(255, 255, 255, 0.07)',
      shadow1: 'rgba(255,255,255,.132)',
      shadow2: 'rgba(255,255,255,.108)',
      shadow3: 'rgba(255,255,255,.22)',
      shadow4: 'rgba(255,255,255,.18)',
    },
  },
};
