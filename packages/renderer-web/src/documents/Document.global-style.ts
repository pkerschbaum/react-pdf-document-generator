import { createGlobalStyle } from 'styled-components';

import { config, Margin, PaperFormat } from '@document-generator/config';

const PAGE_MARGIN: { [format in Margin]: string } = {
  [Margin.A4_STANDARD]: '27mm 16mm 27mm 16mm' /* typical A4 margin */,
  [Margin.A4_NARROW]: '12.7mm',
  [Margin.US_LETTER_STANDARD]: '0.5in' /* typical US_LETTER margin */,
};
const PAGE_WIDTH: { [format in PaperFormat]: string } = {
  [PaperFormat.A4]: '21cm' /* width of A4 */,
  [PaperFormat.US_LETTER]: '8.5in' /* width of US Letter */,
};

const activeMargin = PAGE_MARGIN[config.MARGIN];
const activePageWidth = PAGE_WIDTH[config.PAPER_FORMAT];

export const GlobalStyles = createGlobalStyle`
  *:root {
    --spacing-xs: 16px;
    --spacing-sm: 32px;
    --spacing-md: 64px;
  }

  @page {
    margin: ${activeMargin};
  }

  @media not print {
    /* these styles simulate a A4 paper for the web app */
    *:root {
      background: #525659;
    }

    body {
      margin-inline: auto;
      width: ${activePageWidth};
      padding: ${activeMargin};
      background: white;
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
    }
  }

  table {
    border-collapse: collapse;
  }

  th {
    text-align: inherit;
  }

  td,
  th {
    border: 1px solid black;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }

  hr {
    border-top: 1px solid black;
  }
`;
