var fs = require('fs');
var pipe = require('p-pipe');
var seriesWith = require('@tuplo/series-with');
var mkdirp = require('mkdirp');
var FeedParser = require('feedparser');
var fetch = require('node-fetch');
var UserAgent = require('user-agents');
var feed = require('feed');
var $ = require('cheerio');
var url$b = require('url');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var pipe__default = /*#__PURE__*/_interopDefaultLegacy(pipe);
var seriesWith__default = /*#__PURE__*/_interopDefaultLegacy(seriesWith);
var mkdirp__default = /*#__PURE__*/_interopDefaultLegacy(mkdirp);
var FeedParser__default = /*#__PURE__*/_interopDefaultLegacy(FeedParser);
var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);
var UserAgent__default = /*#__PURE__*/_interopDefaultLegacy(UserAgent);
var $__default = /*#__PURE__*/_interopDefaultLegacy($);

async function fetchFeed(url) {
  const items = [];
  const feedparser = new FeedParser__default['default']({});
  return new Promise(resolve => {
    function onReadable() {
      let item;

      while (item = this.read()) {
        items.push(item);
      }
    }

    function onEnd() {
      resolve(items);
    }

    const userAgent = new UserAgent__default['default']();
    const req = fetch__default['default'](url, {
      headers: {
        'user-agent': userAgent.toString()
      }
    });
    req.then(res => res.body.pipe(feedparser));
    feedparser.on('readable', onReadable);
    feedparser.on('end', onEnd);
  });
}

function convertItem(item) {
  const {
    date,
    description,
    link,
    title
  } = item;
  return {
    date: date || new Date(Date.now()),
    description,
    link,
    title
  };
}

function getFeedOptions(items) {
  if (items.length === 0) return {};
  const [firstItem] = items;
  const {
    meta
  } = firstItem;
  const {
    copyright,
    description,
    favicon,
    language,
    link,
    pubdate,
    title
  } = meta;
  return {
    copyright,
    description,
    favicon,
    generator: 'https://github.com/ruicosta042/rssconv-action',
    id: link,
    language: language || 'en',
    link,
    title,
    updated: pubdate || new Date(Date.now())
  };
}

function convertFeed(items = []) {
  const feed$1 = new feed.Feed(getFeedOptions(items));
  items.forEach(item => {
    feed$1.addItem(convertItem(item));
  });
  return feed$1;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function getLinks(description) {
  return $__default['default'].load(description).root().find('a').toArray().map(a => {
    const $a = $__default['default'](a);
    return {
      url: $a.attr('href') || '',
      title: $a.text()
    };
  }).map(link => _extends({}, link, {
    title: link.title.trim()
  })).filter(link => Boolean(link.url)).filter(link => Boolean(link.title)).filter(link => !/^Unsubscribe$/.test(link.title)).filter(link => !/^Read on the Web$/.test(link.title)).filter(link => !/Through Hired/.test(link.title)).filter(link => !/X-Team/.test(link.title)).filter(link => !/issue \d{2,3}/.test(link.title)).filter(link => !/Web Developer/i.test(link.title)).filter(link => !/React Developer/i.test(link.title)).filter(link => !/\(remote\)/i.test(link.title)).filter(link => !/read on the web/i.test(link.title));
}
function transform(items = []) {
  return items.flatMap(item => {
    const {
      description
    } = item;
    return getLinks(description).map(({
      url: itemUrl,
      title
    }) => _extends({}, item, {
      description: '',
      guid: itemUrl,
      link: itemUrl,
      permalink: itemUrl,
      'rss:guid': itemUrl,
      'rss:link': itemUrl,
      'rss:description': '',
      'rss:title': title,
      summary: '',
      title
    }));
  });
}

const file = 'cooper-frontend-focus';
const url = 'https://cprss.s3.amazonaws.com/frontendfoc.us.xml';
const transform$1 = transform;

var cooperFrontendFocus = {
  __proto__: null,
  file: file,
  url: url,
  transform: transform$1
};

const file$1 = 'cooper-javascript-weekly';
const url$1 = 'https://javascriptweekly.com/rss/';
const transform$2 = transform;

var cooperJavascriptWeekly = {
  __proto__: null,
  file: file$1,
  url: url$1,
  transform: transform$2
};

const file$2 = 'cooper-node-weekly';
const url$2 = 'https://nodeweekly.com/rss/';
const transform$3 = transform;

var cooperNodeWeekly = {
  __proto__: null,
  file: file$2,
  url: url$2,
  transform: transform$3
};

const file$3 = 'cooper-react-status';
const url$3 = 'https://react.statuscode.com/rss/';
const transform$4 = transform;

var cooperReactStatus = {
  __proto__: null,
  file: file$3,
  url: url$3,
  transform: transform$4
};

const file$4 = 'cooper-serverless-status';
const url$4 = 'https://cprss.s3.amazonaws.com/serverless.email.xml';
const transform$5 = transform;

var cooperServerlessStatus = {
  __proto__: null,
  file: file$4,
  url: url$4,
  transform: transform$5
};

const file$5 = 'harpers-magazine';
const url$5 = 'https://harpers.org/feed';
function transform$6(items = []) {
  return items;
}

var harpersMagazine = {
  __proto__: null,
  file: file$5,
  url: url$5,
  transform: transform$6
};

function getLinkShare(item) {
  const links = $__default['default'].load(item.description).root().find('a').toArray().map(a => $__default['default'](a).attr('href')).map(link => {
    try {
      const url = new url$b.URL(`${link}`);
      return url;
    } catch (error) {
      return new url$b.URL('https://foo.com');
    }
  }).filter(link => !/reddit\.com|redd\.it/.test(link.hostname)).filter(link => !/youtube\.com|youtu\.be/.test(link.hostname)).filter(link => !/pastebin\.com/.test(link.hostname)).filter(link => !/imgur\.com/.test(link.hostname)).filter(link => !/codepen\.io/.test(link.hostname)).filter(link => !/\.css$|\.png$|\.jpg$/.test(link.pathname)).map(link => link.toString());
  return links.find(Boolean);
}
function isLinkShare(item) {
  return Boolean(getLinkShare(item));
}
function transform$7(items) {
  return items.filter(isLinkShare).map(item => _extends({}, item, {
    description: '',
    link: getLinkShare(item)
  }));
}

const file$6 = 'reddit-css';
const url$6 = 'https://www.reddit.com/r/css.rss';
const transform$8 = transform$7;

var redditCss = {
  __proto__: null,
  file: file$6,
  url: url$6,
  transform: transform$8
};

const file$7 = 'reddit-javascript';
const url$7 = 'https://www.reddit.com/r/javascript.rss';
const transform$9 = transform$7;

var redditJavascript = {
  __proto__: null,
  file: file$7,
  url: url$7,
  transform: transform$9
};

const file$8 = 'reddit-node';
const url$8 = 'https://www.reddit.com/r/node.rss';
const transform$a = transform$7;

var redditNode = {
  __proto__: null,
  file: file$8,
  url: url$8,
  transform: transform$a
};

const file$9 = 'reddit-reactjs';
const url$9 = 'https://www.reddit.com/r/reactjs.rss';
const transform$b = transform$7;

var redditReactJs = {
  __proto__: null,
  file: file$9,
  url: url$9,
  transform: transform$b
};

const file$a = 'reddit-typescript';
const url$a = 'https://www.reddit.com/r/typescript.rss';
const transform$c = transform$7;

var redditTypescript = {
  __proto__: null,
  file: file$a,
  url: url$a,
  transform: transform$c
};

var feeds = [cooperFrontendFocus, cooperJavascriptWeekly, cooperNodeWeekly, cooperReactStatus, cooperServerlessStatus, harpersMagazine, redditCss, redditJavascript, redditNode, redditReactJs, redditTypescript];

(async function main() {
  mkdirp__default['default'].sync('feeds');
  await seriesWith__default['default'](feeds, async feed => {
    const process = pipe__default['default'](fetchFeed, feed.transform, convertFeed);
    const feedXml = (await process(feed.url)).rss2();
    fs__default['default'].writeFileSync(`feeds/${feed.file}.xml`, feedXml);
  });
})();
