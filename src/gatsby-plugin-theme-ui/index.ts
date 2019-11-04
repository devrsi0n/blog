// import merge from 'lodash/merge';

import colors from './colors';
import tags from './tags';
import fonts from './fonts';

const breakpoints = [
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

export default {
  initialColorMode: 'light',
  colorModeTransition,
  colors,
  fonts,
  breakpoints,
  tags,
};
