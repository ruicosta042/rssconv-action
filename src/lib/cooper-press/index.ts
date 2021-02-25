import FeedParser from 'feedparser';
import $ from 'cheerio';

type Link = {
  url: string;
  title: string;
};

export function getLinks(description: string): Link[] {
  return $.load(description)
    .root()
    .find('a')
    .toArray()
    .map((a) => {
      const $a = $(a);
      return {
        url: $a.attr('href') || '',
        title: $a.text(),
      };
    })
    .map((link) => ({ ...link, title: link.title.trim() }))
    .filter((link) => Boolean(link.url))
    .filter((link) => Boolean(link.title))
    .filter((link) => !/^Unsubscribe$/.test(link.title))
    .filter((link) => !/^Read on the Web$/.test(link.title))
    .filter((link) => !/Through Hired/.test(link.title))
    .filter((link) => !/X-Team/.test(link.title))
    .filter((link) => !/issue \d{2,3}/.test(link.title))
    .filter((link) => !/Web Developer/i.test(link.title))
    .filter((link) => !/React Developer/i.test(link.title));
}

export function transform(items: FeedParser.Item[] = []): FeedParser.Item[] {
  return items.flatMap((item) => {
    const { description } = item;

    return getLinks(description).map(({ url: itemUrl, title }) => ({
      ...item,
      description: '',
      guid: itemUrl,
      link: itemUrl,
      permalink: itemUrl,
      'rss:guid': itemUrl,
      'rss:link': itemUrl,
      'rss:description': '',
      'rss:title': title,
      summary: '',
      title,
    }));
  });
}
