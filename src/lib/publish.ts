import fs from 'fs';
import { Feed } from 'feed';

import parse from './parse';

function publish(file: string): (feed: Feed) => Promise<Feed | null> {
  let published: string;
  try {
    published = fs.readFileSync(`feeds/${file}.xml`, {
      encoding: 'utf-8',
    });
  } catch (e) {
    published = '';
  }

  return async (feed: Feed): Promise<Feed | null> => {
    const newLinks = feed.items.map((item) => item.link);
    const anyNewItems = published
      ? await parse(published)
          .then((oldItems) => oldItems.map((item) => item.link))
          .then((oldLinks) =>
            newLinks.some((newLink) => !oldLinks.includes(newLink))
          )
      : true;

    if (!anyNewItems) return null;

    return feed;
  };
}

export default publish;
