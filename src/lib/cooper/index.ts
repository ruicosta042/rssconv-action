import FeedParser from 'feedparser';

import { getReadOnTheWebLink, getLinks } from './helpers';

export async function transform(
  items: FeedParser.Item[] = []
): Promise<FeedParser.Item[]> {
  const [lastIssue] = items;
  if (!lastIssue) return [];

  const { description } = lastIssue;
  const readOnTheWebLink = getReadOnTheWebLink(description);
  if (!readOnTheWebLink) return [];

  const links = await getLinks(readOnTheWebLink);
  return links.map(({ url, title }) => ({
    ...lastIssue,
    description: '',
    link: url,
    summary: '',
    title,
  }));
}
