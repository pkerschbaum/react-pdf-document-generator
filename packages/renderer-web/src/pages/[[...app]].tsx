// https://nextjs.org/docs/migrating/from-create-react-app#single-page-app-spa

import { Document } from '@document-generator/documents/Document';

import { styles } from '#/index.styles';

function SinglePageApp() {
  return (
    <div css={styles.root}>
      <Document />
    </div>
  );
}

export default SinglePageApp;
