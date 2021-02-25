import FeedParser from 'feedparser';

export const file = 'harpers-magazine';

export const url = 'https://harpers.org/feed';

export function transform(items: FeedParser.Item[] = []): FeedParser.Item[] {
  return items;
}
