// import merge from 'lodash/merge';

import colors from './colors';
import tags from './tags';
import fonts from './fonts';

const breakpoints = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 735],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_large', 1440],
];

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
