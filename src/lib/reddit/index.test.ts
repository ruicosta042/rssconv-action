import mockParsedItem from './__data__/parsed-item';
import mockParsedItem2 from './__data__/parsed-item2';

import { getLinkShare } from '.';

describe('reddit', () => {
  it.each([
    [
      'with link',
      mockParsedItem,
      'https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/',
    ],
    ['without link', mockParsedItem2, undefined],
  ])("get an item's link: %s", (_, item, expected) => {
    expect.assertions(1);
    const result = getLinkShare(item);
    expect(result).toBe(expected);
  });
});
