const { ANALYZE } = process.env;

// For now copy paste from utils mockdata later we will fetch these from API
// We cannot import from utils/mockData.js because this file is not transpiled so does not support es6 modules
const listOfSubjects = [
  {
    id: '2132',
    title: 'Laravel',
    domain: 'Web Development',
    url: '/learn/laravel',
    subjectId: 'laravel',
    icon: 'devicon-laravel-plain colored',
    learningCount: '20',
    learnGuideStatus: true,
  },
  {
    id: '213',
    title: 'ReactJS',
    domain: 'Web Development',
    url: '/learn/reactjs',
    subjectId: 'reactjs',
    icon: 'devicon-react-original colored',
    learningCount: '28',
    learnGuideStatus: false,
  },
  {
    id: '2131',
    title: 'Go',
    domain: 'Programming Language',
    url: '/learn/go',
    subjectId: 'go',
    icon: 'devicon-go-plain ',
    learningCount: '7',
    learnGuideStatus: false,
  },
  {
    id: '21fa3',
    title: 'Android',
    domain: 'Mobile Technology',
    url: '/learn/android',
    subjectId: 'android',
    icon: 'devicon-android-plain colored',
    learningCount: '9',
    learnGuideStatus: false,
  },
  {
    id: '21afasda3',
    title: 'Rails',
    domain: 'Backend Development',
    url: '/learn/rails',
    subjectId: 'rails',
    icon: 'devicon-rails-plain colored',
    learningCount: '14',
    learnGuideStatus: false,
  },
  {
    id: '21wqerwqe3',
    title: 'Python',
    domain: 'Programming Language',
    url: '/learn/python',
    subjectId: 'python',
    icon: 'devicon-python-plain colored',
    learningCount: '32',
    learnGuideStatus: false,
  },
  {
    id: '2bxcvbx13',
    title: 'iOS',
    domain: 'Mobile Technology',
    url: '/learn/ios',
    subjectId: 'ios',
    icon: 'devicon-swift-plain colored',
    learningCount: '45',
    learnGuideStatus: false,
  },
  {
    id: '2bxczzxcvbx13',
    title: 'Javascript',
    domain: 'Programming Language',
    url: '/learn/javascript',
    subjectId: 'javascript',
    icon: 'devicon-javascript-plain colored',
    learningCount: '31',
    learnGuideStatus: false,
  },
  {
    id: '2bxdfasczzxcvbx13',
    title: 'Angular',
    domain: 'Frontend Development',
    url: '/learn/angular',
    subjectId: 'angular',
    icon: 'devicon-angularjs-plain colored',
    learningCount: '3',
    learnGuideStatus: false,
  },
];

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
          }),
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
    };
    for (const subject of listOfSubjects) {
      routes[subject.url] = {
        page: '/learn/subject',
        query: { id: subject.subjectId },
      };
    }
    console.log(routes);
    return routes;
  },
};
