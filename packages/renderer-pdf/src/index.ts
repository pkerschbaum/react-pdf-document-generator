import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const pdf = await page.pdf({ format: 'a4' });

  await page.close();
  await browser.close();

  return pdf;
}

async function run() {
  try {
    const pdf = await printPDF();
    await fs.promises.writeFile(path.join(__dirname, '..', 'out', 'out.pdf'), pdf);
  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
}

void run();
