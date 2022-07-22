// https://nextjs.org/docs/migrating/from-create-react-app#single-page-app-spa

import { Document } from '@document-generator/documents/Document';
import styled from 'styled-components';

function SinglePageApp() {
  return (
    <Root>
      <Document />
    </Root>
  );
}

const Root = styled.div`
  /* these styles simulate a A4 paper for the web app */
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
`;

export default SinglePageApp;
