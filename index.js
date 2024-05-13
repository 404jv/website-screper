import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';
import path from 'path';

const directory = path.join(process.cwd(), 'downloads');

await scrape({
  urls: ['https://formulanegocioonline.digital/'],
  directory: directory,
  plugins: [
    new PuppeteerPlugin({
      launchOptions: { headless: "new" }, /* optional */
      gotoOptions: { waitUntil: "networkidle0" }, /* optional */
      scrollToBottom: { timeout: 10000, viewportN: 10 }, /* optional */
      blockNavigation: true, /* optional */
    })
  ]
});
