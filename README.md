# react-pdf-document-renderer

Create PDF documents/reports using [React](https://github.com/facebook/react) and [emotion](https://github.com/emotion-js/emotion).

## Prerequisites

- [Yarn](https://classic.yarnpkg.com/en/docs/install)

## Setup

```sh
git clone https://github.com/pkerschbaum/react-pdf-document-generator.git
cd react-pdf-document-generator
yarn
```

## Run

- `yarn run render-web`: starts a minimal web app that renders [./packages/documents/src/Document.tsx](./packages/documents/src/Document.tsx)
- `yarn run render-pdf`: generates [./packages/renderer-pdf/out/out.pdf](./packages/renderer-pdf/out/out.pdf) from [./packages/documents/src/Document.tsx](./packages/documents/src/Document.tsx) on every file change

## How it works

The web app is just a typical [CRA](https://create-react-app.dev/) app.  
[Puppeteer](https://pptr.dev/) is used to generate the PDF.
