import $ from 'cheerio';
import fetch from 'node-fetch';
import UserAgent from 'user-agents';
import seriesWith from '@tuplo/series-with';

export function getReadOnTheWebLink(description: string): string | null {
  const link = $.load(description)
    .root()
    .find('a')
    .toArray()
    .find((a) => {
      const $a = $(a);
      const title = $a.text();
      return /^Read on the Web$/i.test(title);
    });

  return link ? ($(link).attr('href') as string) : null;
}

export async function resolveUrl(originalUrl: string): Promise<string> {
  const userAgent = new UserAgent();
  return fetch(originalUrl, {
    method: 'HEAD',
    headers: { 'user-agent': userAgent.toString() },
  })
    .then((res) => res.url)
    .catch(() => originalUrl);
}

type Link = {
  url: string;
  title: string;
};

export async function getLinks(readOnTheWebLink: string): Promise<Link[]> {
  const $page = await fetch(readOnTheWebLink)
    .then((res) => res.text())
    .then((page) => $.load(page).root());

  const mainLinks = $page
    .find('.el-item')
    .toArray()
    .filter((item) => {
      const $item = $(item);
      const hasSponsor = $item.find('.tag-sponsor').text().trim();
      return !hasSponsor;
    })
    .map((item) => {
      const $item = $(item);

      const mainLink = $item.find('.mainlink > a');
      const url = mainLink.attr('href')?.replace(/web$/, 'rss');
      const title = mainLink.text().replace(/\s\s*/g, ' ').trim();

      if (!url) return null;
      return { url, title };
    })
    .filter(Boolean) as Link[];

  const miniLinks = $page
    .find(':not(.el-subtable > tbody > tr > td) > .miniitem a')
    .toArray()
    .map((a) => {
      const $a = $(a);
      const url = $a.attr('href')?.replace(/web$/, 'rss');
      const title = $a.text().replace(/\s\s*/g, ' ').trim();

      if (!url) return null;
      return { url, title };
    })
    .filter(Boolean) as Link[];

  return seriesWith([...mainLinks, ...miniLinks], async (item) => ({
    ...item,
    url: await resolveUrl(item.url),
  }));
}
