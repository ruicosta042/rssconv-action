import mockRssFeed from '../__data__/rss-typescript.xml';
import mockParsedItem from '../__data__/parsed-feed-item';
import fetch from './fetch';

jest.mock('node-fetch', () => ({
  __esModule: true,
  default: () =>
    Promise.resolve({
      text: () => mockRssFeed,
    }),
}));

describe('fetch-feed', () => {
  it('fetches feed and parses it', async () => {
    expect.assertions(2);
    const result = await fetch('https://reddit.com/r/typescript.rss');

    expect(result).toHaveLength(25);
    expect(result[6]).toStrictEqual(mockParsedItem);
  });
});
