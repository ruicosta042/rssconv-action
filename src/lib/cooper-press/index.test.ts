import mockParsedFeed from './__data__/parsed-feed';
import { getLinks, transform } from '.';

describe('javascript-weekly', () => {
  it('gets links from description', () => {
    expect.assertions(2);
    const [mockParsedItem] = mockParsedFeed;
    const result = getLinks(mockParsedItem.description);

    const expected = {
      url: 'https://javascriptweekly.com/link/103548/rss',
      title: 'Announcing Vite 2.0',
    };
    expect(result).toHaveLength(53);
    expect(result[0]).toStrictEqual(expected);
  });

  it('transforms feed', async () => {
    expect.assertions(2);
    const result = transform(mockParsedFeed);

    const expected = {
      title: 'Announcing Vite 2.0',
      description: '',
      summary: '',
      date: '2021-02-19T00:00:00.000Z',
      pubdate: '2021-02-19T00:00:00.000Z',
      pubDate: '2021-02-19T00:00:00.000Z',
      link: 'https://javascriptweekly.com/link/103548/rss',
      guid: 'https://javascriptweekly.com/link/103548/rss',
      author: null,
      comments: null,
      origlink: null,
      image: {},
      source: {},
      categories: [],
      enclosures: [],
      'rss:@': {},
      'rss:title': 'Announcing Vite 2.0',
      'rss:link': 'https://javascriptweekly.com/link/103548/rss',
      'rss:description': '',
      'rss:pubdate': { '@': {}, '#': 'Fri, 19 Feb 2021 00:00:00 +0000' },
      permalink: 'https://javascriptweekly.com/link/103548/rss',
      'rss:guid': 'https://javascriptweekly.com/link/103548/rss',
      meta: {
        '#ns': [],
        '@': [],
        '#xml': { version: '1.0', encoding: 'UTF-8' },
        '#type': 'rss',
        '#version': '2.0',
        title: 'JavaScript Weekly',
        description:
          'A newsletter of JavaScript articles, news and cool projects',
        date: null,
        pubdate: null,
        pubDate: null,
        link: 'https://javascriptweekly.com/',
        xmlurl: null,
        xmlUrl: null,
        author: null,
        language: null,
        favicon: null,
        copyright: null,
        generator: null,
        cloud: {},
        image: {},
        categories: [],
        'rss:@': {},
        'rss:title': { '@': {}, '#': 'JavaScript Weekly' },
        'rss:description': {
          '@': {},
          '#': 'A newsletter of JavaScript articles, news and cool projects',
        },
        'rss:link': { '@': {}, '#': 'https://javascriptweekly.com/' },
      },
    };
    expect(result).toHaveLength(194);
    expect(result[0]).toStrictEqual(expected);
  });
});
