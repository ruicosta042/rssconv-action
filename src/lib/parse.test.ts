import parse from './parse';

import mockFeed from './__data__/feed-1.xml';

describe('parse', () => {
  it('parses the feed on a string', async () => {
    expect.assertions(2);
    const result = await parse(mockFeed as string);

    const expected = {
      title: 'Title #1',
      description: null,
      summary: null,
      date: null,
      pubdate: null,
      pubDate: null,
      link: 'https://feed.com/item-1',
      guid: 'https://feed.com/item-1',
      author: null,
      comments: null,
      origlink: null,
      image: {},
      source: {},
      categories: [],
      enclosures: [],
      'rss:@': {},
      'rss:link': { '@': {}, '#': 'https://feed.com/item-1' },
      'rss:title': { '#': 'Title #1', '@': {} },
      meta: {
        '#ns': [],
        '@': [],
        '#xml': { version: '1.0', encoding: 'UTF-8' },
        '#type': 'rss',
        '#version': '2.0',
        title: 'Feed 1',
        description: null,
        date: null,
        pubdate: null,
        pubDate: null,
        link: null,
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
        'rss:title': { '@': {}, '#': 'Feed 1' },
      },
    };
    expect(result).toHaveLength(3);
    expect(result[0]).toStrictEqual(expected);
  });
});
