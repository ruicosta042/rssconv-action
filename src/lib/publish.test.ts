import publish from './publish';
import parse from './parse';
import convert from './convert';

import mockFeed1 from './__data__/feed-1.xml';
import mockFeed2 from './__data__/feed-2.xml';

jest.mock('fs', () => ({
  readFileSync: (filename: string) =>
    /feed-1/.test(filename) ? mockFeed1 : mockFeed2,
}));

describe('publish', () => {
  it('understands there are fresh items', async () => {
    expect.assertions(1);
    const mockFeed = await parse(mockFeed2 as string).then(convert);
    const result = await publish('feed-1')(mockFeed);

    if (!result) throw new Error('null feed');

    expect(result.items).toHaveLength(3);
  });

  it('understands there are no changes to the feed', async () => {
    expect.assertions(1);
    const mockFeed = await parse(mockFeed2 as string).then(convert);
    const result = await publish('feed-2')(mockFeed);

    expect(result).toBeNull();
  });
});
