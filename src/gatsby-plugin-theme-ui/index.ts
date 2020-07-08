import { colors } from './colors';
import { monospace, fonts } from './fonts';

export const breakpoints = [
  ['phone_small', 320] as const,
  ['phone', 376] as const,
  ['phablet', 540] as const,
  ['tablet', 1024] as const,
  ['desktop', 1070] as const,
  ['desktop_medium', 1280] as const,
  ['desktop_large', 1440] as const,
] as const;

const colorModeTransition =
  'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)';

const theme = {
  // ...deepTheme,

  // or dark
  // initialColorModeName: 'default',
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
    // https://developer.microsoft.com/en-us/fluentui#/styles/web/elevation
    // Card
    depth4:
      '0 1.6px 3.6px 0 var(--theme-ui-colors-shadow1, rgba(0,0,0,.132)), 0 0.3px 0.9px 0 var(--theme-ui-colors-shadow2, rgba(0,0,0,.108))',
    // dropdown, menu
    depth8:
      '0 3.2px 7.2px 0 var(--theme-ui-colors-shadow1, rgba(0,0,0,.132)), 0 0.6px 1.8px 0 var(--theme-ui-colors-shadow2, rgba(0,0,0,.108))',
    // Hover card, tooltip
    depth16:
      '0 6.4px 14.4px 0 var(--theme-ui-colors-shadow1, rgba(0,0,0,.132)), 0 1.2px 3.6px 0 var(--theme-ui-colors-shadow2, rgba(0,0,0,.108))',
    // Dialog, panel
    depth64:
      '0 25.6px 57.6px 0 var(--theme-ui-colors-shadow3, rgba(0,0,0,.22)), 0 4.8px 14.4px 0 var(--theme-ui-colors-shadow4, rgba(0,0,0,.18))',
  },

  // z-index
  // zIndices: [],

  // margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: breakpoints.map(b => `${b[1]}px`),
  // Styles for MDX
  styles: {},

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
