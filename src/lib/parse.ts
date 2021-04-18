import FeedParser from 'feedparser';
import { Readable } from 'stream';

async function parse(feedString: string): Promise<FeedParser.Item[]> {
  const feedparser = new FeedParser({});
  const items: FeedParser.Item[] = [];

  return new Promise((resolve) => {
    function onReadable(this: FeedParser) {
      let item: FeedParser.Item;
      // eslint-disable-next-line no-cond-assign
      while ((item = this.read())) {
        items.push(item);
      }
    }

    function onEnd() {
      resolve(items);
    }

    const readable = Readable.from(feedString).pipe(feedparser);

    readable.on('readable', onReadable);
    readable.on('end', onEnd);
  });
}

export default parse;
