import * as prism from './prism';

export default {
  prism: prism.light,

  primary: '#000',
  secondary: '#73737D',
  grey: '#73737D',
  background: 'rgba(230, 230, 230, 1.0)',
  accent: '#6166DC',
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
      prism: prism.dark,

      grey: '#73737D',
      primary: '#fff',
      secondary: '#fff',
      accent: '#E9DAAC',
      background: 'rgba(17, 18, 22, 0.95)',
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
