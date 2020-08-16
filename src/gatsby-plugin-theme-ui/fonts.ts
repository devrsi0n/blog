const chineseSanSerifFonts = [
  '"PingFang SC"',
  '"Hiragino Sans GB"',
  '"Microsoft YaHei"',
  '"Heiti SC"',
  '"WenQuanYi Micro Hei"',
];
const chineseSerifFonts = [
  '"Noto Serif CJK SC"',
  '"Source Han Serif SC"',
  '"Source Han Serif CN"',
  '"Songti SC"',
  '"SimSun"',
  '"STSong"',
  '"AR PL Sungti"',
];
// const serif = `"Merriweather", Georgia, ${chineseSerifFonts}, serif`;
const serif = `Georgia, ${chineseSerifFonts}, serif`;
const sansSerif = `"SF Pro Display", "-apple-system", "BlinkMacSystemFont", "San Francisco", "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI", "Arial", ${chineseSanSerifFonts.join(
  ' ,'
)}, sans-serif`;
export const monospace = `"Dank Mono", "Noto Sans Mono", "Menlo", "Roboto Mono", "Consolas", "Operator Mono", "Monaco", "source-code-pro", "Courier New", ${sansSerif}, monospace`;

export const fonts = {
  serif,
  sansSerif,

  body: sansSerif,
  heading: serif,
  monospace,
};
