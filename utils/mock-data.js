export const listOfSubjects = [
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

export const indexPageLearns = [
  {
    link:
      'https://github.com/coderplex/learn/blob/master/web-dev/Frontend/Libraries%20%26%20Frameworks/Learn-React.md',
    title: 'ReactJS',
    subject: 'Frontend Web Development',
    image: '',
  },
  {
    link:
      'https://github.com/coderplex/learn/blob/master/web-dev/Backend/Learn-Laravel.md',
    title: 'Laravel',
    subject: 'Backend Web Development',
    image: '',
  },
  {
    link:
      'https://github.com/coderplex/learn/blob/master/programming-languages/Go/learn-go.md',
    title: 'Go',
    subject: 'Programming Language',
    image: '',
  },
  {
    link:
      'https://github.com/coderplex/learn/blob/master/computer-science/Learn-CS.md',
    title: 'Introduction to C.S',
    subject: 'Computer Science',
    image: '',
  },
  {
    link:
      'https://github.com/coderplex/learn/blob/master/Blockchain/blockchain-basics.md',
    title: 'Blockchain',
    subject: 'Decentralized Systems',
    image: '',
  },
  {
    link:
      'https://github.com/coderplex/learn/blob/master/mobile-dev/Android/learn-android.md',
    title: 'Android',
    subject: 'Mobile Development',
    image: '',
  },
];

export const listOfDomains = [
  'All',
  'Computer Science',
  'Programming Language',
  'Web Development',
  'Mobile Technology',
  'Data Science',
  'Artificial Intelligence',
  'BlockChain',
];

export const baseUrlLaravelGuides =
  'https://rawgit.com/pbteja1998/laravel-cdn/master/';

export const contentsOfLaravel = {
  logo: 'devicon-laravel-plain colored',
  overview: 'https://rawgit.com/coderplex/learn/cdn/cdn/laravel/overview.md',
  guides: [
    {
      chapter: 1,
      title: 'Prerequisites',
      url: '',
      units: [
        {
          chapter: 1,
          title: 'Prerequisites',
          url: baseUrlLaravelGuides + '1/1.md',
          units: [],
        },
      ],
    },
    {
      chapter: 2,
      title: 'Introduction to MVC Architecture',
      url: '',
      units: [
        {
          chapter: 1,
          title: 'Introduction to MVC Architecture',
          url: baseUrlLaravelGuides + '2/1.md',
          units: [],
        },
      ],
    },
    {
      chapter: 3,
      title: 'Core Laravel',
      url: '',
      units: [
        {
          chapter: 1,
          title: 'Installation',
          url: '',
          units: [
            {
              chapter: 1,
              title: 'Installation',
              url: baseUrlLaravelGuides + '3/1/1.md',
              units: [],
            },
          ],
        },
        {
          chapter: 2,
          title: 'MVC and Routes',
          url: '',
          units: [
            {
              chapter: 1,
              title: 'Basic Routing and Views',
              url: baseUrlLaravelGuides + '3/2/1.md',
              units: [],
            },
            {
              chapter: 2,
              title: 'Pass Data to Views',
              url: baseUrlLaravelGuides + '3/2/2.md',
              units: [],
            },
            {
              chapter: 3,
              title: 'Database Setup',
              url: baseUrlLaravelGuides + '3/2/3.md',
              units: [],
            },
            {
              chapter: 4,
              title: 'Working with Query Builder',
              url: baseUrlLaravelGuides + '3/2/4.md',
              units: [],
            },
            {
              chapter: 5,
              title: 'Eloquent',
              url: baseUrlLaravelGuides + '3/2/5.md',
              units: [],
            },
            {
              chapter: 6,
              title: 'Controllers',
              url: baseUrlLaravelGuides + '3/2/6.md',
              units: [],
            },
            {
              chapter: 7,
              title: 'Route Model Binding',
              url: baseUrlLaravelGuides + '3/2/7.md',
              units: [],
            },
          ],
        },
        {
          chapter: 3,
          title: 'FrontEnd',
          url: '',
          units: [
            {
              chapter: 1,
              title: 'Layouts and Structures',
              url: baseUrlLaravelGuides + '3/3/1.md',
              units: [],
            },
            {
              chapter: 2,
              title: 'Form Requests and CSRF',
              url: baseUrlLaravelGuides + '3/3/2.md',
              units: [],
            },
            {
              chapter: 3,
              title: 'Form Validation',
              url: baseUrlLaravelGuides + '3/3/3.md',
              units: [],
            },
            {
              chapter: 4,
              title: 'Rendering',
              url: baseUrlLaravelGuides + '3/3/4.md',
              units: [],
            },
            {
              chapter: 5,
              title: 'Laravel Mix',
              url: baseUrlLaravelGuides + '3/3/5.md',
              units: [],
            },
            {
              chapter: 6,
              title: 'Flash Messaging',
              url: baseUrlLaravelGuides + '3/3/6.md',
              units: [],
            },
          ],
        },
        {
          chapter: 4,
          title: 'Relationships',
          url: '',
          units: [
            {
              chapter: 1,
              title: 'Eloquent Relationships',
              url: baseUrlLaravelGuides + '3/4/1.md',
              units: [],
            },
            {
              chapter: 2,
              title: 'One to Many Relationship',
              url: baseUrlLaravelGuides + '3/4/2.md',
              units: [],
            },
            {
              chapter: 3,
              title: 'Pivot Tables',
              url: baseUrlLaravelGuides + '3/4/3.md',
              units: [],
            },
          ],
        },
        {
          chapter: 5,
          title: 'Authentication',
          url: '',
          units: [
            {
              chapter: 1,
              title: 'Scaffold Authentication',
              url: baseUrlLaravelGuides + '3/5/1.md',
              units: [],
            },
            {
              chapter: 2,
              title: 'Manual Authentication',
              url: baseUrlLaravelGuides + '3/5/2.md',
              units: [],
            },
          ],
        },
        {
          chapter: 6,
          title: 'Archives',
          url: '',
          units: [
            {
              chapter: 1,
              title: 'Add Archives',
              url: baseUrlLaravelGuides + '3/6/1.md',
              units: [],
            },
            {
              chapter: 2,
              title: 'View Composers',
              url: baseUrlLaravelGuides + '3/6/2.md',
              units: [],
            },
          ],
        },
      ],
    },
    {
      chapter: 4,
      title: 'Advanced Laravel',
      url: '',
      units: [
        {
          chapter: 1,
          title: 'Testing ans Seeding',
          url: baseUrlLaravelGuides + '4/1.md',
          units: [],
        },
      ],
    },
    {
      chapter: 5,
      title: 'Projects',
      url: '',
      units: [
        {
          chapter: 1,
          title: 'Projects',
          url: baseUrlLaravelGuides + '5/1.md',
          units: [],
        },
      ],
    },
  ],
  contributors: [
    {
      userName: 'P Bhanu Teja',
      userPage: 'https://github.com/pbteja1998',
      userImage: 'https://avatars0.githubusercontent.com/u/17903466?s=400&v=4',
      contributions: [
        {
          type: 'topic',
          count: '20',
        },
        {
          type: 'article',
          count: '30',
        },
        {
          type: 'video',
          count: '25',
        },
      ],
    },
    {
      userName: 'M Zubair Ahmed',
      userPage: 'https://github.com/M-ZubairAhmed',
      userImage:
        'https://avatars0.githubusercontent.com/u/17708702?s=400&u=032075b378bf6d82da48725b9ce5f31c7a6469fa&v=4',
      contributions: [
        {
          type: 'topic',
          count: '2',
        },
      ],
    },
    {
      userName: 'Vinay Puppal',
      userPage: 'https://www.vinaypuppal.com/',
      userImage:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/214440/profile/profile-512.jpg?2',
      contributions: [
        {
          type: 'topic',
          count: '4',
        },
        {
          type: 'article',
          count: '2',
        },
      ],
    },
  ],
};
