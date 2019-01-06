import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';
import { colorPrimary } from './theme-variable';

import 'typeface-montserrat';
import 'typeface-merriweather';

// <无衬线字体>
export const sansSerifFontFamily = [
  // 西文
  'Montserrat',

  // `"Helvetica Neue"`, // <mac/无衬线>, 优于 Helvetica
  // `Helvetica`, // <mac/无衬线>
  // 'Tahoma', // <win/无衬线>, 好于 Arial
  // 'Arial', // <win/无衬线>

  // 中文
  `"PingFang SC"`, // 苹方, <mac>
  `"Hiragino Sans GB"`, // 冬青黑体, <mac>
  `"Microsoft YaHei"`, // 微软雅黑, win
  '"Heiti SC"', // 黑体-简, win
  '"WenQuanYi Micro Hei"', // 文泉驿微米黑，<Linux>

  // fallback
  'sans-serif',
].join(', ');

export const serifFontFamily = [
  // 西文
  'Merriweather',
  'Georgia',

  // 中文
  `"Source Han Serif SC"`, // 思源宋体
  'STSong', // 华文宋体, mac
  'SimSun', // 中易宋体, win
  `"AR PL Sungti"`, // 文鼎简报宋, linux

  // fallback
  'serif',
].join(', ');

Wordpress2016.overrideThemeStyles = () => ({
  body: {
    fontFamily: sansSerifFontFamily,
  },
  'p,a,span,label,small': {
    fontFamily: serifFontFamily,
    'text-rendering': 'optimizeLegibility',
  },
  'h1,h2,h3,h4,h5,h6': {
    fontFamily: sansSerifFontFamily,
    'text-rendering': 'optimizeLegibility',
  },
  a: {
    color: colorPrimary,
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'a.anchor': {
    boxShadow: 'none',
  },
  'p code': {
    fontSize: '1.1rem',
  },
  'li code': {
    fontSize: '1rem',
  },
});

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
