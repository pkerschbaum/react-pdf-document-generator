import React from 'react';
import ReactDOM from 'react-dom';

import { Document } from '@document-generator/documents/src/Document';
import { styles } from './index.styles';

ReactDOM.render(
  <React.StrictMode>
    <div css={styles.root}>
      <Document />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
