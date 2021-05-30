import type { Item } from 'feedparser';

import mockItems from './__data__/items.json';
import expectedIssueArticle from './__data__/expected-issue-article.json';
import { splitIssue, transform } from './index';

describe('css Layout News', () => {
  it('splits one issue', () => {
    expect.assertions(2);
    const result = splitIssue(mockItems[0] as unknown as Item);

    expect(result).toHaveLength(6);
    expect(result[0]).toStrictEqual(expectedIssueArticle);
  });

  it('converts each issue into a series of items', () => {
    expect.assertions(1);
    const result = transform(mockItems as unknown as Item[]);

    expect(result).toHaveLength(97);
  });
});
