import { css } from '@emotion/react';

export const styles = {
  // these styles simulate a A4 paper for the web app
  root: css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;
    background: #525659;

    & > * {
      margin: auto;
      width: 21cm; /* width of A4 */
      background: white;
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
    }
  `,
};
