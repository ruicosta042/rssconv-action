import FeedParser from 'feedparser';
import request from 'node-fetch';
import UserAgent from 'user-agents';

import parse from './parse';

async function fetch(url: string): Promise<FeedParser.Item[]> {
  const userAgent = new UserAgent();
  return request(url, {
    headers: {
      'user-agent': userAgent.toString(),
    },
  })
    .then((res) => res.text())
    .then(parse)
    .catch(() => []);
}

export default fetch;
