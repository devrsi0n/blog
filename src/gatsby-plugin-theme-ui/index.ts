// import deepTheme from '@theme-ui/preset-deep';
import prismPreset from '@theme-ui/prism/presets/theme-ui';
import { lighten, transparentize } from 'polished';

// TODO: refactor
import * as PrismColors from './prism-colors';

const accent = {
  light: '#6166DC',
  dark: '#E9DAAC',
};

const colors = {
  text: 'hsl(10, 20%, 20%)', // body color
  background: '#fefefe', // body background color
  primary: '#000', // primary button and link color
  secondary: '#73737D', // secondary color - can be used for hover states
  muted: 'hsl(10, 20%, 94%)', // a gray or subdued color for decorative purposes
  accent: accent.light, // a contrast color for emphasizing UI
  highlight: lighten(0.3, accent.light),
  purple: 'hsl(250, 60%, 30%)',
  gray: '#999',
  // Set the initial color mode to dark when @media (prefers-color-scheme: dark) matches
  useColorSchemeMediaQuery: true,

  prism: PrismColors.light,
  grey: '#73737D',
  hover: 'rgba(0, 0, 0, 0.07)',
  gradient: 'linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #D9DBE0 100%)',
  articleText: '#08080B',
  track: 'rgba(8, 8, 11, 0.3)',
  progress: '#000',
  card: '#fff',
  error: '#EE565B',
  success: '#46B17B',
  errorBackground: 'rgba(238, 86, 91, 0.1)',
  horizontalRule: 'rgba(8, 8, 11, 0.15)',
  inputBackground: 'rgba(0, 0, 0, 0.05)',
  modes: {
    dark: {
      text: 'hsl(10, 20%, 20%)',
      primary: '#fff',
      secondary: '#fff',
      accent: accent.dark,
      background: 'rgba(17, 18, 22, 0.95)',
      muted: 'hsl(10, 20%, 94%)',
      highlight: transparentize(0.85, lighten(0.1, accent.dark)),
      purple: 'hsl(250, 60%, 30%)',
      gray: '#666',

      prism: PrismColors.dark,
      grey: '#73737D',
      hover: 'rgba(255, 255, 255, 0.07)',
      gradient:
        'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)',
      articleText: '#fff',
      track: 'rgba(255, 255, 255, 0.3)',
      progress: '#fff',
      card: '#1D2128',
      error: '#EE565B',
      success: '#46B17B',
      errorBackground: 'rgba(238, 86, 91, 0.1)',
      horizontalRule: 'rgba(255, 255, 255, 0.15)',
      inputBackground: 'rgba(255, 255, 255, 0.07)',
    },
  },
};

const chineseSanSerifFonts = [
  '"PingFang SC"', // 苹方, <mac>
  '"Hiragino Sans GB"', // 冬青黑体, <mac>
  '"Microsoft YaHei"', // 微软雅黑, win
  '"Heiti SC"', // 黑体-简, win
  '"WenQuanYi Micro Hei"', // 文泉驿微米黑，<Linux>
];
const chineseSerifFonts = [
  '"Noto Serif CJK SC"',
  '"Source Han Serif SC"',
  '"Source Han Serif CN"', // 思源宋体
  '"Songti SC"', // 华文宋体, mac
  '"SimSun"', // 中易宋体, win
  '"STSong"', // 华文宋体
  '"AR PL Sungti"', // 文鼎简报宋, linux
];

// const serif = `"Merriweather", Georgia, ${chineseSerifFonts}, serif`;
const serif = `Georgia, ${chineseSerifFonts}, serif`;
const sansSerif = `"SF Pro Display", "-apple-system", "BlinkMacSystemFont", "San Francisco", "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI", "Arial", ${chineseSanSerifFonts.join(
  ' ,'
)}, sans-serif`;
const monospace = `"Dank Mono", "Noto Sans Mono", "Menlo", "Roboto Mono", "Consolas", "Operator Mono", "Monaco", "source-code-pro", "Courier New", ${sansSerif}, monospace`;

export const fonts = {
  serif,
  sansSerif,

  body: sansSerif,
  heading: serif,
  monospace,
};

export const breakpoints = [
  ['phone_small', 320] as const,
  ['phone', 376] as const,
  ['phablet', 540] as const,
  ['tablet', 735] as const,
  ['desktop', 1070],
  ['desktop_medium', 1280] as const,
  ['desktop_large', 1440] as const,
] as const;

const colorModeTransition =
  'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)';

const theme = {
  // ...deepTheme,

  initialColorMode: 'system',
  colorModeTransition,
  // color, background-color, border-color
  colors,
  // font-family
  fonts,
  // font-size, h6 ~ h1
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 32, 38, 52],
  // font-weight
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    display: 900,
  },
  // line-height
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  // letter-spacing
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  // width, height, min-width, max-width, min-height, max-height
  sizes: {
    // container widths
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
  // border, border-top, border-right, border-bottom, border-left
  // borders: [],

  // border-width
  // borderWidths: [],

  // border-style
  // borderStyles: [],

  // border-radius
  radii: {
    none: '0',
    sm: '2px',
    default: '4px',
    lg: '8px',
    xl: '16px',
  },

  // box-shadow, text-shadow
  shadows: {
    default: '0 .5rem 1rem rgba(0, 0, 0, .15)',
    sm: '0 .125rem .25rem rgba(0, 0, 0, .075)',
    lg: '0 1rem 3rem rgba(0, 0, 0, .175)',
  },

  // z-index
  // zIndices: [],

  // margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: breakpoints.map(b => `${b[1]}px`),
  // Styles for MDX
  styles: {
    // ...deepTheme.styles,
    pre: {
      ...prismPreset,
      inlineCode: {
        background: '',
      },
    },
  },

  // TODO: refactor
  tags: {
    pre: {
      variant: `prism`,
      fontFamily: monospace,
      tabSize: 4,
      hyphens: `none`,
      color: `white`,
      bg: `prism.background`,
      overflow: `auto`,
      borderRadius: 10,
      p: 3,
    },
    code: {
      fontFamily: monospace,
      fontSize: `inherit`,
    },
    inlineCode: {
      borderRadius: `0.3em`,
      color: `secondary`,
      bg: `rgba(233, 218, 172, 0.3)`,
      paddingTop: `0.15em`,
      paddingBottom: `0.05em`,
      paddingX: `0.2em`,
    },
  },
};

export default theme;

export type Theme = typeof theme;
