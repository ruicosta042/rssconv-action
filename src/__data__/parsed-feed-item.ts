import FeedParser from 'feedparser';

const parsedItem = ({
  title: 'Announcing TypeScript 4.2',
  description:
    '<table> <tr><td> <a href="https://www.reddit.com/r/typescript/comments/lqu8bi/announcing_typescript_42/"> <img src="https://b.thumbs.redditmedia.com/cUl7VNzotTfQ57dfbJQa7rcG6WdtZOzDdzH_NC1kv7Y.jpg" alt="Announcing TypeScript 4.2" title="Announcing TypeScript 4.2" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/DanielRosenwasser"> /u/DanielRosenwasser </a> <br/> <span><a href="https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/typescript/comments/lqu8bi/announcing_typescript_42/">[comments]</a></span> </td></tr></table>',
  summary: null,
  date: new Date('2021-02-23T21:57:53.000Z'),
  pubdate: new Date('2021-02-23T21:57:53.000Z'),
  pubDate: new Date('2021-02-23T21:57:53.000Z'),
  link:
    'https://www.reddit.com/r/typescript/comments/lqu8bi/announcing_typescript_42/',
  guid: 't3_lqu8bi',
  author: '/u/DanielRosenwasser',
  comments: null,
  origlink: null,
  image: {
    url:
      'https://b.thumbs.redditmedia.com/cUl7VNzotTfQ57dfbJQa7rcG6WdtZOzDdzH_NC1kv7Y.jpg',
  },
  source: {},
  categories: ['typescript'],
  enclosures: [],
  'atom:@': {},
  'atom:author': {
    '@': {},
    name: { '@': {}, '#': '/u/DanielRosenwasser' },
    uri: { '@': {}, '#': 'https://www.reddit.com/user/DanielRosenwasser' },
  },
  'atom:category': { '@': { term: 'typescript', label: 'r/typescript' } },
  'atom:content': {
    '@': { type: 'html' },
    '#':
      '<table> <tr><td> <a href="https://www.reddit.com/r/typescript/comments/lqu8bi/announcing_typescript_42/"> <img src="https://b.thumbs.redditmedia.com/cUl7VNzotTfQ57dfbJQa7rcG6WdtZOzDdzH_NC1kv7Y.jpg" alt="Announcing TypeScript 4.2" title="Announcing TypeScript 4.2" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/DanielRosenwasser"> /u/DanielRosenwasser </a> <br/> <span><a href="https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/typescript/comments/lqu8bi/announcing_typescript_42/">[comments]</a></span> </td></tr></table>',
  },
  'atom:id': { '@': {}, '#': 't3_lqu8bi' },
  'media:thumbnail': {
    '@': {
      url:
        'https://b.thumbs.redditmedia.com/cUl7VNzotTfQ57dfbJQa7rcG6WdtZOzDdzH_NC1kv7Y.jpg',
    },
  },
  'atom:link': {
    '@': {
      href:
        'https://www.reddit.com/r/typescript/comments/lqu8bi/announcing_typescript_42/',
    },
  },
  'atom:updated': { '@': {}, '#': '2021-02-23T21:57:53+00:00' },
  'atom:title': { '@': {}, '#': 'Announcing TypeScript 4.2' },
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
    date: new Date('2021-02-25T10:10:44.000Z'),
    pubdate: new Date('2021-02-25T10:10:44.000Z'),
    pubDate: new Date('2021-02-25T10:10:44.000Z'),
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
