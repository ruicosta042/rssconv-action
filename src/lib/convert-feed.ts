import { Feed } from 'feed';
import FeedParser from 'feedparser';
import type { Item, FeedOptions } from 'feed';

export function convertItem(item: FeedParser.Item): Item {
  const { date, description, link, title } = item;

  return {
    date: date || new Date(Date.now()),
    description,
    link,
    title,
  };
}

function getFeedOptions(items: FeedParser.Item[]): FeedOptions {
  if (items.length === 0) return {} as FeedOptions;

  const [firstItem] = items;

  const { meta } = firstItem;
  const {
    copyright,
    description,
    favicon,
    language,
    link,
    pubdate,
    title,
  } = meta;

  return {
    copyright,
    description,
    favicon,
    generator: 'https://github.com/ruicosta042/feedsboy',
    id: link,
    language: language || 'en',
    link,
    title,
    updated: pubdate || new Date(Date.now()),
  };
}

function convertFeed(items: FeedParser.Item[] = []): Feed {
  const feed = new Feed(getFeedOptions(items));

  items.forEach((item) => {
    feed.addItem(convertItem(item));
  });

  return feed;
}

export default convertFeed;
