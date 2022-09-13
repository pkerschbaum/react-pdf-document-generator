import { Option, program } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import puppeteer, { PDFOptions } from 'puppeteer';

const availableFormats = ['A4', 'US_LETTER'] as const;
type AvailableFormats = typeof availableFormats[number];

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PATHS = {
  PDF_OUTPUT: path.join(__dirname, '..', 'out', 'out.pdf'),
};

const PAPER_FORMAT: { [format in AvailableFormats]: PDFOptions } = {
  A4: {
    format: 'a4',
  },
  US_LETTER: {
    format: 'letter',
  },
};

program
  .addOption(
    new Option('--paper-format <format>', 'Paper format used by Puppeteer')
      .choices(availableFormats)
      .makeOptionMandatory(true),
  )
  .parse();
const options = program.opts<{ paperFormat: AvailableFormats }>();

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

const pdf = await page.pdf({ printBackground: true, ...PAPER_FORMAT[options.paperFormat] });

await page.close();
await browser.close();

await fs.promises.writeFile(PATHS.PDF_OUTPUT, pdf);
