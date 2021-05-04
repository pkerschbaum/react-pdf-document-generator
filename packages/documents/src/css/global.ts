import { css } from "@emotion/react";

export const globalCss = css`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial;
    font-size: 16px;
    white-space: pre;
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
    border: 1px solid black;
  }

  @page {
    size: A4;
  }
`;
