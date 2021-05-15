import { css } from '@emotion/react';

export const styles = {
  // these styles simulate a A4 paper for the web app
  root: css`
    height: 100%;
    width: 100%;
    padding: 0.5cm 0;
    background: rgb(204, 204, 204);

    & > * {
      margin: auto;
      width: 21cm; /* width of A4 */
      background: white;
      box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
    }
  `,
};
