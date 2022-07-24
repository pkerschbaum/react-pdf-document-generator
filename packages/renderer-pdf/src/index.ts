import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const PATHS = {
  PDF_OUTPUT: path.join(__dirname, '..', 'out', 'out.pdf'),
};

async function printAndWritePDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const pdf = await page.pdf({ format: 'a4' });

  await page.close();
  await browser.close();

  await fs.promises.writeFile(PATHS.PDF_OUTPUT, pdf);
}

void printAndWritePDF();
