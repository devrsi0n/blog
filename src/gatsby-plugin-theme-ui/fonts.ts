import 'typeface-merriweather';

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

export default {
  serif: `"Merriweather", Georgia, ${chineseSerifFonts}, serif`,
  sansSerif: `"SF Pro Display", "-apple-system", "BlinkMacSystemFont", "San Francisco", "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI", "Arial", ${chineseSanSerifFonts.join(
    ' ,'
  )}, sans-serif`,
  monospace: `"Dank Mono", "Noto Sans Mono", "Menlo", "Roboto Mono", "Consolas", "Operator Mono", "Monaco", "source-code-pro", "Courier New", monospace`,
};
