import { css } from '@emotion/react';

export const styles = {
  root: css`
    padding-top: 46px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 46px;

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
    margin-top: 8px;
    margin-bottom: 8px;
  `,

  spacingXs: css`
    margin-top: 16px;
  `,

  spacingMd: css`
    margin-top: 64px;
  `,
};
