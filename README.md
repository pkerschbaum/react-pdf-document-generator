# react-pdf-document-renderer

Create PDF documents/reports using [React](https://github.com/facebook/react) and [emotion](https://github.com/emotion-js/emotion).

## Motivation

HTML and CSS allow to build complex page layouts - so why don't use them to create documents and reports?  
Many people have used tools like [Jasper Reports](https://community.jaspersoft.com/) to build such documents and generate PDF files from them, but recent innovations in the web ecosystem like [Puppeteer](https://pptr.dev/) allow to do the same thing using the web technologies we all love ❤️.

## How to run

1. `yarn run render-web`: Starts a minimal web app that renders the document in the browser. The web app will automatically refresh on every change, giving a tight feedback loop while editing the document.
2. `yarn run render-pdf`: This will generate [./packages/renderer-pdf/out/out.pdf](./packages/renderer-pdf/out/out.pdf).

The document which is rendered is located here: [./packages/documents/src/Document.tsx](./packages/documents/src/Document.tsx).

## Prerequisites

- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- Fonts: Make sure that on the machine generating the PDF output, all fonts you want to use are installed. Otherwise, [Puppeteer](https://pptr.dev/) will apply a fallback font, resulting in a slightly different output compared to the output rendered in the web browser.

## Setup

```sh
git clone https://github.com/pkerschbaum/react-pdf-document-generator.git
cd react-pdf-document-generator
yarn
```
