import mockPageOnWeb from './__data__/page.html';
import { getLinks } from './helpers';

jest.mock('node-fetch', () => ({
  __esModule: true,
  default: () =>
    Promise.resolve({
      text: () => mockPageOnWeb,
    }),
}));

describe('javascript-weekly', () => {
  it('gets links from read-on-the-web page', async () => {
    expect.assertions(2);
    const result = await getLinks(
      'https://javascriptweekly.com/link/106546/web'
    ).then((links) => links.map((link) => link.title));

    const expected = [
      'Comparing the New Generation of Build Tools',
      'Slow and Steady: Converting Sentry’s Entire Frontend to TypeScript',
      '15 DevTool Secrets for JavaScript Developers',
      'A Thorough Guide to Working with Strings in Modern JavaScript',
      "Hyperapp – Is It a Lightweight 'React Killer'?",
      'A Simple Start to ES Modules in Node.js',
      'An Introduction to the switch(true) Pattern',
      'How to Send Tweets with a JavaScript GitHub Action',
      'A Real World CSS vs. CSS-in-JS Performance Comparison',
      'Building a Video Streaming App with Nuxt.js, Node and Express',
      'Building an ASCII Game Engine That Runs in the Browser',
      'Deno 1.9 Released',
      'Announcing react-pdf v2.0',
      "party.js: A Way to 'Brighten Up' Your Site with Visual Effects",
      'Algolia Search API Client for JavaScript',
      'jest-puppeteer 5.0: Run Your Tests using Jest and Puppeteer',
      'Going “Meta GSAP”: The Quest for “Perfect” Infinite Scrolling',
      'Tricking TypeScript Into Typing Untyped JavaScript Modules',
      'JS Classes Are Not “Just Syntactic Sugar”',
    ];
    expect(result).toHaveLength(19);
    expect(result).toStrictEqual(expected);
  });
});
