import mockParsedItem from '../__data__/parsed-feed-item';
import convertFeed, { convertItem } from './convert-feed';

describe('convert-feed', () => {
  it('converts to feed', () => {
    expect.assertions(1);
    const result = convertFeed([mockParsedItem]);

    const expected = {
      copyright: null,
      description:
        'TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      favicon: 'https://www.redditstatic.com/icon.png/',
      generator: 'https://github.com/ruicosta042/rssconv-action',
      id: 'https://www.reddit.com/r/typescript',
      language: 'en',
      link: 'https://www.reddit.com/r/typescript',
      title: 'TypeScript',
      updated: new Date('2021-02-25T10:10:44.000Z'),
    };
    expect(result.options).toStrictEqual(expected);
  });

  it('converts an item', () => {
    expect.assertions(1);
    const result = convertItem(mockParsedItem);

    const expected = {
      date: new Date('2021-02-23T21:57:53.000Z'),
      description:
        '<table> <tr><td> <a href="https://www.reddit.com/r/typescript/comments/lqu8bi/announcing_typescript_42/"> <img src="https://b.thumbs.redditmedia.com/cUl7VNzotTfQ57dfbJQa7rcG6WdtZOzDdzH_NC1kv7Y.jpg" alt="Announcing TypeScript 4.2" title="Announcing TypeScript 4.2" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/DanielRosenwasser"> /u/DanielRosenwasser </a> <br/> <span><a href="https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/typescript/comments/lqu8bi/announcing_typescript_42/">[comments]</a></span> </td></tr></table>',
      link:
        'https://www.reddit.com/r/typescript/comments/lqu8bi/announcing_typescript_42/',
      title: 'Announcing TypeScript 4.2',
    };
    expect(result).toStrictEqual(expected);
  });
});
