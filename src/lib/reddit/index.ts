import { URL } from 'url';
import FeedParser from 'feedparser';
import $ from 'cheerio';

export function getLinkShare(item: FeedParser.Item): string | undefined {
  const links = $.load(item.description)
    .root()
    .find('a')
    .toArray()
    .map((a) => $(a).attr('href'))
    .map((link) => {
      try {
        const url = new URL(`${link}`);
        return url;
      } catch (error) {
        return new URL('https://foo.com');
      }
    })
    .filter((link) => !/reddit\.com|redd\.it/.test(link.hostname))
    .filter((link) => !/youtube\.com|youtu\.be/.test(link.hostname))
    .filter((link) => !/pastebin\.com/.test(link.hostname))
    .filter((link) => !/imgur\.com/.test(link.hostname))
    .filter((link) => !/codepen\.io/.test(link.hostname))
    .filter((link) => !/\.css$|\.png$|\.jpg$/.test(link.pathname))
    .map((link) => link.toString());

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
