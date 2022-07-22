import * as styled from 'styled-components';

export const GlobalStyles = styled.createGlobalStyle`
  *:root {
    --spacing-xs: 16px;
    --spacing-sm: 32px;
    --spacing-md: 64px;
  }

  body {
    /* typical A4 padding */
    padding: 27mm 16mm 27mm 16mm;
  }

  @media not print {
    /* these styles simulate a A4 paper for the web app */
    *:root {
      background: #525659;
    }

    body {
      margin: auto;
      width: 21cm; /* width of A4 */
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
