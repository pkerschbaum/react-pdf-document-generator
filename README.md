# react-pdf-document-renderer <!-- omit in toc -->

- [Motivation](#motivation)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [How to run](#how-to-run)

Create PDF documents/reports using [React](https://github.com/facebook/react) and [styled-components](https://styled-components.com/).

## Motivation

HTML and CSS allow to build complex page layouts - so why don't use them to create documents and reports?  
Many people have used tools like [Jasper Reports](https://community.jaspersoft.com/) to build such documents and generate PDF files from them, but recent innovations in the web ecosystem like [Puppeteer](https://pptr.dev/) allow to do the same thing using the web technologies we all love ❤️

## Prerequisites

- **Node.js:** It is recommended to use [nvm](https://github.com/nvm-sh/nvm) and run `nvm use`, this will automatically switch to the Node.js version mentioned in the file [`.nvmrc`](./.nvmrc).  
   Alternatively you can install Node.js directly, please refer to `.nvmrc` of this project to determine the Node.js version to use.
- **pnpm:** This monorepo ("workspace") uses [`pnpm`](https://pnpm.io/) as package manager.  
  It is recommended to use `corepack` of Node.js, just run:

  ```sh
  corepack enable
  ```

  `pnpm` commands should now be available (and the `pnpm` version specified in `package.json#packageManager` will be automatically used).

- **Toolchain for native Node.js modules:** Run the installation instructions "A C/C++ compiler tool chain for your platform" of [microsoft/vscode/wiki/How-to-Contribute#prerequisites](https://github.com/microsoft/vscode/wiki/How-to-Contribute#prerequisites).

## Setup

```sh
git clone https://github.com/pkerschbaum/react-pdf-document-generator.git
cd react-pdf-document-generator
pnpm i
```

## How to run

1. **Run initial build of the workspace:**

   ```sh
   pnpm run build
   ```

2. **Start watchers:**

   ```sh
   pnpm run dev
   ```

   This starts a [Next.js](https://nextjs.org/) web app that renders the document in the browser. The web app will automatically refresh on every change, giving a tight feedback loop while editing the document.

3. **Generate PDF on demand:**

   ```sh
   cd ./packages/renderer-pdf
   pnpm run create:pdf
   ```

   This will regenerate [./packages/renderer-pdf/out/out.pdf](./packages/renderer-pdf/out/out.pdf) on file changes.

   > **Note:** This command will run Puppeteer.  
   > If you get an error like "error while loading shared libraries: libatk-1.0.so.0", make sure you have installed all dependencies on your system necessary to run Puppeteer/Chrome.  
   > One way to get all dependencies is to just install Chrome. For Ubuntu, execute this command in a temporary directory:  
   > `wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && sudo apt install ./google-chrome-stable_current_amd64.deb`  
   > See also this link for more information: <https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md>.

The document which is rendered is located here: [./packages/renderer-web/src/documents/Document.tsx](./packages/renderer-web/src/documents/Document.tsx).
