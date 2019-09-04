const { ANALYZE } = process.env;
const { laravelSyllabus, listOfSubjects, reactSyllabus } = require('./utils/mock-data');

module.exports = {
  webpack: (config, { dev }) => {
    /* Enable only in Production */
    if (!dev) {
      // Preact
      // console.log('> Using Preact instead of React');
      // config.resolve.alias = {
      //   react: 'preact-compat/dist/preact-compat',
      //   'react-dom': 'preact-compat/dist/preact-compat',
      //   'react-emotion': 'preact-emotion',
      // };
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
    const routes = {
      '/': { page: '/' },
      '/events': { page: '/events' },
      '/learn': { page: '/learn' },
      '/space': { page: '/space' },
      '/join': { page: '/join' },
      '/feedback': { page: '/feedback' },
      '/terms': { page: '/terms' },
      '/privacy': { page: '/privacy' },
    };
    const getSubject = subjectId => {
      switch (subjectId) {
        case 'laravel':
          return laravelSyllabus;
        case 'reactjs':
          return reactSyllabus;
        default:
          return [];
      }
    };
    for (const subject of listOfSubjects) {
      for (const unit of getSubject(subject.subjectId)) {
        const { chapters } = unit;
        for (const chapter of chapters) {
          const chapterSlug = chapter.name.replace(/\s/gi, '-');
          const route = `/learn/${subject.subjectId}/${chapterSlug}`;
          routes[route] = {
            page: '/learn/subject',
            query: {
              subject: subject.subjectId,
              chapter: chapterSlug,
            },
          };
        }
      }
    }
    return routes;
  },
};
