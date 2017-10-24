const { ANALYZE } = process.env;

module.exports = {
  webpack: (config, { dev }) => {
    /* Enable only in Production */
    if (!dev) {
      if (ANALYZE) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true,
          })
        );
      }
    }
    return config;
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/events': { page: '/events' },
      '/learn': { page: '/learn' },
      '/space': { page: '/space' },
    };
  },
};
