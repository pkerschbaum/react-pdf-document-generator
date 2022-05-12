# react-pdf-document-renderer

Create PDF documents/reports using [React](https://github.com/facebook/react) and [emotion](https://github.com/emotion-js/emotion).

## Motivation

HTML and CSS allow to build complex page layouts - so why don't use them to create documents and reports?  
Many people have used tools like [Jasper Reports](https://community.jaspersoft.com/) to build such documents and generate PDF files from them, but recent innovations in the web ecosystem like [Puppeteer](https://pptr.dev/) allow to do the same thing using the web technologies we all love ❤️.

## Prerequisites

- Follow the "Prerequisites" installation guide of [microsoft/vscode/wiki/How-to-Contribute#prerequisites](https://github.com/microsoft/vscode/wiki/How-to-Contribute#prerequisites).
  - For the NodeJS version to use, please refer to the file [.nvmrc](./.nvmrc) of this project. This is the version of NodeJS the project should be developed with.  
    It is recommended to use [nvm](https://github.com/nvm-sh/nvm) and run `nvm use`, this will automatically switch to the NodeJS version mentioned in `.nvmrc`.
- This monorepo uses [`pnpm`](https://pnpm.io/) as package manager.  
  For installation instructions see [pnpm.io/installation](https://pnpm.io/installation); it should boil down to this command:

  ```sh
  npm i -g pnpm
  ```

- Fonts: Make sure that on the machine generating the PDF output, all fonts you want to use are installed. Otherwise, [Puppeteer](https://pptr.dev/) will apply a fallback font, resulting in a slightly different output compared to the output rendered in the web browser.

## Setup

```sh
git clone https://github.com/pkerschbaum/react-pdf-document-generator.git
cd react-pdf-document-generator
pnpm i
```

## How to run

1. `pnpm run render-web`: Starts a minimal web app that renders the document in the browser. The web app will automatically refresh on every change, giving a tight feedback loop while editing the document.
2. `pnpm run render-pdf`: This will generate [./packages/renderer-pdf/out/out.pdf](./packages/renderer-pdf/out/out.pdf).

The document which is rendered is located here: [./packages/documents/src/Document.tsx](./packages/documents/src/Document.tsx).
