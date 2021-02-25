import FeedParser from 'feedparser';
import fetch from 'node-fetch';
import UserAgent from 'user-agents';

async function fetchFeed(url: string): Promise<FeedParser.Item[]> {
  const items: FeedParser.Item[] = [];
  const feedparser = new FeedParser({});

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

    const userAgent = new UserAgent();
    const req = fetch(url, {
      headers: {
        'user-agent': userAgent.toString(),
      },
    });
    req.then((res) => res.body.pipe(feedparser));
    feedparser.on('readable', onReadable);
    feedparser.on('end', onEnd);
  });
}

export default fetchFeed;
