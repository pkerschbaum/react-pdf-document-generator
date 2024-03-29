'use client';

import dayjs from 'dayjs';
import type React from 'react';
import { styled } from 'styled-components';

import { GlobalStyles } from '#pkg/documents/Document.global-style';
import { formatter } from '#pkg/formatter';

const invoiceData = {
  year: 2021,
  nr: 1,
  location: 'invoice-location',
  date: dayjs(),
  supplier: {
    name: 'supplier-name',
    street: 'supplier-street',
    zipCode: 'supplier-zipcode',
    city: 'supplier-city',
    uid: 'supplier-uid',
    iban: 'DE00 1111 0000 1111 0000 11',
    bic: 'NTSBDEB1XXX',
  },
  recipient: {
    name: 'recipient-name',
    street: 'recipient-street',
    zipCode: 'recipient-zipcode',
    city: 'recipient-city',
    uid: 'recipient-uid',
  },
  items: [
    {
      description: (
        <>
          <span>Full Stack Development</span>
          <br />
          <br />
          <span>Leistungszeitraum:</span>
          <br />
          <span>Jänner 2021</span>
        </>
      ),
      price: 10,
      amount: 120,
    },
  ],
};

export const Document: React.FC = () => {
  let nettoSum = 0;
  for (const item of invoiceData.items) {
    nettoSum += item.amount * item.price;
  }
  const ust = nettoSum * 0.2;
  const bruttoSum = nettoSum + ust;

  return (
    <>
      <GlobalStyles />

      <Header>
        <SupplierRegion>
          <span>{invoiceData.supplier.name}</span>
          <br />
          <span>{invoiceData.supplier.street}</span>
          <br />
          <span>
            {invoiceData.supplier.zipCode} {invoiceData.supplier.city}
          </span>
          <br />
          <span>UID: {invoiceData.supplier.uid}</span>
        </SupplierRegion>
      </Header>

      <Divider />

      <RecipientRegion>
        <span>{invoiceData.recipient.name}</span>
        <br />
        <span>{invoiceData.recipient.street}</span>
        <br />
        <span>
          {invoiceData.recipient.zipCode} {invoiceData.recipient.city}
        </span>
        <br />
        <span>UID: {invoiceData.recipient.uid}</span>
        <br />
      </RecipientRegion>

      <InvoiceHeading>
        <span>
          Rechnung Nr. {invoiceData.year}-{`${invoiceData.nr}`.padStart(2, '0')}
        </span>

        <span>
          {invoiceData.location}, am {dayjs().format('D. MMMM YYYY')}
        </span>
      </InvoiceHeading>

      <InvoiceRecordsContainer>
        <InvoiceRecordsTable>
          <thead>
            <InvoiceRecordsRow>
              <InvoiceRecordsTd as="th">Pos.</InvoiceRecordsTd>
              <InvoiceRecordsTd as="th">Beschreibung</InvoiceRecordsTd>
              <InvoiceRecordsTd as="th">Preis</InvoiceRecordsTd>
              <InvoiceRecordsTd as="th">Menge</InvoiceRecordsTd>
              <InvoiceRecordsTd as="th">Betrag</InvoiceRecordsTd>
            </InvoiceRecordsRow>
          </thead>

          <tbody>
            {invoiceData.items.map((item, idx) => (
              <InvoiceRecordsRow key={idx}>
                <InvoiceRecordsTd>{idx + 1}</InvoiceRecordsTd>
                <InvoiceRecordsTd>{item.description}</InvoiceRecordsTd>
                <InvoiceRecordsTd>
                  {formatter.number(item.price, {
                    format: 'currency',
                    countOfDecimals: 0,
                  })}
                </InvoiceRecordsTd>
                <InvoiceRecordsTd>
                  {formatter.number(item.amount, { countOfDecimals: 2 })}
                </InvoiceRecordsTd>
                <InvoiceRecordsTd>
                  {formatter.number(item.price * item.amount, {
                    format: 'currency',
                  })}
                </InvoiceRecordsTd>
              </InvoiceRecordsRow>
            ))}

            <InvoiceRecordsSubtotalsRow>
              <InvoiceRecordsTd colSpan={2} />
              <InvoiceRecordsTd colSpan={2}>Netto</InvoiceRecordsTd>
              <InvoiceRecordsTd colSpan={1}>
                {formatter.number(nettoSum, { format: 'currency' })}
              </InvoiceRecordsTd>
            </InvoiceRecordsSubtotalsRow>

            <InvoiceRecordsSubtotalsRow>
              <InvoiceRecordsTd colSpan={2} />
              <InvoiceRecordsTd colSpan={2}>20% USt.</InvoiceRecordsTd>
              <InvoiceRecordsTd colSpan={1}>
                {formatter.number(ust, { format: 'currency' })}
              </InvoiceRecordsTd>
            </InvoiceRecordsSubtotalsRow>

            <InvoiceRecordsTotalsRow>
              <InvoiceRecordsTd colSpan={2} />
              <InvoiceRecordsTd colSpan={2}>Endsumme inkl. USt.</InvoiceRecordsTd>
              <InvoiceRecordsTd colSpan={1}>
                {formatter.number(bruttoSum, { format: 'currency' })}
              </InvoiceRecordsTd>
            </InvoiceRecordsTotalsRow>
          </tbody>
        </InvoiceRecordsTable>

        <PaymentDetails>
          <span>IBAN: {invoiceData.supplier.iban}</span>
          <br />
          <span>BIC: {invoiceData.supplier.bic}</span>
          <br />
          <span>Zahlungsziel: 30 Tage nach Rechnungserhalt</span>
          <br />
        </PaymentDetails>

        <GreetingSection>
          <div>Mit freundlichen Grüßen,</div>

          <div>{invoiceData.supplier.name}</div>
        </GreetingSection>
      </InvoiceRecordsContainer>

      <SpacerXs />
      <Divider />

      <SpacerXs />
      <div>Anhang: Bestätigung des Kunden</div>
    </>
  );
};

const Divider = styled.hr`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const SpacerXs = styled.div`
  margin-top: var(--spacing-xs);
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: right;
`;

const SupplierRegion = styled.div`
  text-align: right;
`;

const RecipientRegion = styled.div`
  margin-top: var(--spacing-sm);
`;

const InvoiceHeading = styled.div`
  margin-top: var(--spacing-sm);
  display: flex;
  justify-content: space-between;

  & > *:nth-of-type(1) {
    font-weight: bold;
  }
`;

const InvoiceRecordsContainer = styled.div`
  margin-top: var(--spacing-xs);
`;

const InvoiceRecordsTable = styled.table`
  width: 100%;
`;

const InvoiceRecordsRow = styled.tr``;
const InvoiceRecordsSubtotalsRow = styled(InvoiceRecordsRow)``;
const InvoiceRecordsTotalsRow = styled(InvoiceRecordsRow)``;
const InvoiceRecordsTd = styled.td`
  ${InvoiceRecordsRow} > &:last-of-type {
    text-align: right;
  }

  ${InvoiceRecordsSubtotalsRow} > & {
    border: 0;
  }

  ${InvoiceRecordsSubtotalsRow} > &:nth-of-type(2),
  ${InvoiceRecordsSubtotalsRow} > &:nth-of-type(3) {
    text-align: right;
  }

  ${InvoiceRecordsTotalsRow} > &:nth-of-type(1) {
    border: 0;
  }
  ${InvoiceRecordsTotalsRow} > &:nth-of-type(2),
  ${InvoiceRecordsTotalsRow} > &:nth-of-type(3) {
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 1px;
    text-align: right;
  }
`;

const PaymentDetails = styled.div`
  margin-top: var(--spacing-xs);
`;

const GreetingSection = styled.div`
  & > div:nth-of-type(1) {
    margin-top: var(--spacing-sm);
  }
  & > div:nth-of-type(2) {
    margin-top: var(--spacing-sm);
  }
`;
