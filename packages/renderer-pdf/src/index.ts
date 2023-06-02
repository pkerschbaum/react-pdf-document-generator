import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import puppeteer, { PDFOptions } from 'puppeteer';

import { config, PaperFormat } from '@document-generator/config';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PATHS = {
  PDF_OUTPUT: path.join(__dirname, '..', 'out', 'out.pdf'),
};

const PAPER_FORMAT: { [format in PaperFormat]: PDFOptions } = {
  [PaperFormat.A4]: {
    format: 'a4',
  },
  [PaperFormat.US_LETTER]: {
    format: 'letter',
  },
};

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

const pdf = await page.pdf({ printBackground: true, ...PAPER_FORMAT[config.PAPER_FORMAT] });

await page.close();
await browser.close();

await fs.promises.writeFile(PATHS.PDF_OUTPUT, pdf);
