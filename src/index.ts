import fs from 'fs';
import pipe from 'p-pipe';
import seriesWith from '@tuplo/series-with';

import fetchFeed from './lib/fetch-feed';
import convertFeed from './lib/convert-feed';

import feeds from './feeds';

(async function main() {
  await seriesWith(feeds, async (feed) => {
    const process = pipe(fetchFeed, feed.transform, convertFeed);
    const feedXml = (await process(feed.url)).rss2();
    fs.writeFileSync(`feeds/${feed.file}.xml`, feedXml);
  });
})();
