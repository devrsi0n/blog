const path = require('path');

const isEnvProd = process.env.NODE_ENV === 'production';

module.exports = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '../../components/'),
        '@icons': path.resolve(__dirname, '../../icons/'),
        '@styles': path.resolve(__dirname, '../../styles/'),
        '@utils': path.resolve(__dirname, '../../utils/'),
        '@types': path.resolve(__dirname, '../../types/'),
      },
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    // Remove sourcemap files in production
    ...(isEnvProd &&
      stage === `build-javascript` && {
        devtool: false,
      }),
  });
};
