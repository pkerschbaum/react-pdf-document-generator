import puppeteer from "puppeteer";
import fs from "fs/promises";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";

import { Document } from "@document-generator/documents/src/Document";

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const html = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Document)
  );
  await page.setContent(html);

  const pdf = await page.pdf();

  await page.close();
  await browser.close();

  return pdf;
}

async function run() {
  try {
    const pdf = await printPDF();
    await fs.writeFile(path.join(__dirname, "../", "out.pdf"), pdf);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

run();
