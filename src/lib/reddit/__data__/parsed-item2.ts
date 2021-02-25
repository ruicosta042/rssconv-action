import FeedParser from 'feedparser';

const parsedItem = ({
  title: 'How to migrate React components that call other React components?',
  description:
    '<!-- SC_OFF --><div class="md"><p>Hello,</p> <p>I found this on migrating JavaScript to typescript. However, I noticed that in ReactJS, components could call other components inside the component definition. How would you do the migration to Typescript in such a scenario?</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/git_world"> /u/git_world </a> <br/> <span><a href="https://www.reddit.com/r/typescript/comments/ls1s8o/how_to_migrate_react_components_that_call_other/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/typescript/comments/ls1s8o/how_to_migrate_react_components_that_call_other/">[comments]</a></span>',
  summary: null,
  date: '2021-02-25T08:24:05.000Z',
  pubdate: '2021-02-25T08:24:05.000Z',
  pubDate: '2021-02-25T08:24:05.000Z',
  link:
    'https://www.reddit.com/r/typescript/comments/ls1s8o/how_to_migrate_react_components_that_call_other/',
  guid: 't3_ls1s8o',
  author: '/u/git_world',
  comments: null,
  origlink: null,
  image: {},
  source: {},
  categories: ['typescript'],
  enclosures: [],
  'atom:@': {},
  'atom:author': {
    '@': {},
    name: { '@': {}, '#': '/u/git_world' },
    uri: { '@': {}, '#': 'https://www.reddit.com/user/git_world' },
  },
  'atom:category': { '@': { term: 'typescript', label: 'r/typescript' } },
  'atom:content': {
    '@': { type: 'html' },
    '#':
      '<!-- SC_OFF --><div class="md"><p>Hello,</p> <p>I found <a href="https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/">this</a> on migrating JavaScript to typescript. However, I noticed that in ReactJS, components could call other components inside the component definition. How would you do the migration to Typescript in such a scenario?</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/git_world"> /u/git_world </a> <br/> <span><a href="https://www.reddit.com/r/typescript/comments/ls1s8o/how_to_migrate_react_components_that_call_other/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/typescript/comments/ls1s8o/how_to_migrate_react_components_that_call_other/">[comments]</a></span>',
  },
  'atom:id': { '@': {}, '#': 't3_ls1s8o' },
  'atom:link': {
    '@': {
      href:
        'https://www.reddit.com/r/typescript/comments/ls1s8o/how_to_migrate_react_components_that_call_other/',
    },
  },
  'atom:updated': { '@': {}, '#': '2021-02-25T08:24:05+00:00' },
  'atom:title': {
    '@': {},
    '#': 'How to migrate React components that call other React components?',
  },
  meta: {
    '#ns': [
      { xmlns: 'http://www.w3.org/2005/Atom' },
      { 'xmlns:media': 'http://search.yahoo.com/mrss/' },
    ],
    '@': [
      { xmlns: 'http://www.w3.org/2005/Atom' },
      { 'xmlns:media': 'http://search.yahoo.com/mrss/' },
    ],
    '#xml': { version: '1.0', encoding: 'UTF-8' },
    '#type': 'atom',
    '#version': '1.0',
    title: 'TypeScript',
    description:
      'TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    date: '2021-02-25T10:10:44.000Z',
    pubdate: '2021-02-25T10:10:44.000Z',
    pubDate: '2021-02-25T10:10:44.000Z',
    link: 'https://www.reddit.com/r/typescript',
    xmlurl: 'https://www.reddit.com/r/typescript.rss',
    xmlUrl: 'https://www.reddit.com/r/typescript.rss',
    author: null,
    language: null,
    favicon: 'https://www.redditstatic.com/icon.png/',
    copyright: null,
    generator: null,
    cloud: {},
    image: {},
    categories: ['typescript'],
    'atom:@': {
      xmlns: 'http://www.w3.org/2005/Atom',
      'xmlns:media': 'http://search.yahoo.com/mrss/',
    },
    'atom:category': { '@': { term: 'typescript', label: 'r/typescript' } },
    'atom:updated': { '@': {}, '#': '2021-02-25T10:10:44+00:00' },
    'atom:icon': { '@': {}, '#': 'https://www.redditstatic.com/icon.png/' },
    'atom:id': { '@': {}, '#': '/r/typescript.rss' },
    'atom:link': [
      {
        '@': {
          rel: 'self',
          href: 'https://www.reddit.com/r/typescript.rss',
          type: 'application/atom+xml',
        },
      },
      {
        '@': {
          rel: 'alternate',
          href: 'https://www.reddit.com/r/typescript',
          type: 'text/html',
        },
      },
    ],
    'atom:subtitle': {
      '@': {},
      '#':
        'TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    },
    'atom:title': { '@': {}, '#': 'TypeScript' },
  },
} as unknown) as FeedParser.Item;

export default parsedItem;
