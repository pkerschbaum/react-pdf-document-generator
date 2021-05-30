import { css } from '@emotion/react';

export const styles = {
  root: css`
    font-family: Arial;
    font-size: 16px;

    /* typical A4 padding */
    padding: 27mm 16mm 27mm 16mm;

    display: flex;
    flex-direction: column;
    align-items: stretch;
  `,

  header: css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    text-align: right;
  `,

  supplierArea: css`
    text-align: right;
  `,

  divider: css`
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
  `,

  spacingXs: css`
    margin-top: 16px;
  `,

  spacingSm: css`
    margin-top: 32px;
  `,

  spacingMd: css`
    margin-top: 64px;
  `,
};
