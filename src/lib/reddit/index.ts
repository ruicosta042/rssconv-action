import FeedParser from 'feedparser';
import $ from 'cheerio';

export function getLinkShare(item: FeedParser.Item): string | undefined {
  const links = $.load(item.description)
    .root()
    .find('a')
    .toArray()
    .map((a) => $(a).attr('href'))
    .filter(Boolean)
    .filter((link) => !/^https:\/\/www\.reddit\.com/.test(link || ''))
    .filter((link) => !/\.png$|\.jpg$/.test(link || ''));

  return links.find(Boolean);
}

export function isLinkShare(item: FeedParser.Item): boolean {
  return Boolean(getLinkShare(item));
}

export function transform(items: FeedParser.Item[]): FeedParser.Item[] {
  return items.filter(isLinkShare).map((item) => ({
    ...item,
    description: '',
    link: getLinkShare(item) as string,
  }));
}
