const { ANALYZE } = process.env;

module.exports = {
  webpack: (config, { dev }) => {
    /* Enable only in Production */
    if (!dev) {
      // Preact
      console.log('> Using Preact instead of React');
      config.resolve.alias = {
        react: 'preact-compat/dist/preact-compat',
        'react-dom': 'preact-compat/dist/preact-compat',
      };
      if (ANALYZE) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true,
          }),
        );
      }
    }
    return config;
  },
};
