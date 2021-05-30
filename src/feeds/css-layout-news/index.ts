import cheerio from 'cheerio';

import type { Item } from 'feedparser';

export const file = 'css-layout-news';

export const url = 'https://csslayout.news/blog/rss/';

export function splitIssue(issue: Item): Item[] {
  const $ = cheerio.load(issue.description).root();

  return $.find('h3')
    .filter(':has(> a)')
    .toArray()
    .map((h3) => {
      const $h3 = cheerio(h3);
      const title = $h3.text();
      const link = $h3.find('a').attr('href');
      const summary = $h3.next().text();
      return { ...issue, description: summary, title, summary, link } as Item;
    });
}

export function transform(items: Item[] = []): Item[] {
  return items.flatMap(splitIssue);
}
