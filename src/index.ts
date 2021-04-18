import fs from 'fs';
import pipe from 'p-pipe';
import seriesWith from '@tuplo/series-with';
import mkdirp from 'mkdirp';

import fetch from './lib/fetch';
import convert from './lib/convert';
import publish from './lib/publish';
import feeds from './feeds';

(async function main() {
  mkdirp.sync('feeds');
  await seriesWith(feeds, async (feed) => {
    const process = pipe(fetch, feed.transform, convert, publish(feed.file));
    const newFeed = await process(feed.url);
    if (!newFeed) return;
    const feedXml = newFeed.rss2();
    fs.writeFileSync(`feeds/${feed.file}.xml`, feedXml);
  });
})();
