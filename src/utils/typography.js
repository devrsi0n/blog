import Typography from 'typography';
import potteryTheme from 'typography-theme-pottery';

export const { sansSerifFontFamilies, serifFontFamilies } = potteryTheme;

potteryTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'a.anchor': {
    boxShadow: 'none',
  },
});

const typography = new Typography(potteryTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
