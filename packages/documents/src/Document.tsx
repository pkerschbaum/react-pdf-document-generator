import React from "react";
import moment from "moment";
import { css, Global } from "@emotion/react";

import "moment/locale/de-at";

import { resetCss } from "./css/reset";
import { globalCss } from "./css/global";
import { styles } from "./Document.styles";

const invoiceData = {
  year: 2021,
  nr: 1,
  location: "invoice-location",
  date: moment(),
  supplier: {
    name: "supplier-name",
    street: "supplier-street",
    zipCode: "supplier-zipcode",
    city: "supplier-city",
    uid: "supplier-uid",
    iban: "DE00 1111 0000 1111 0000 11",
    bic: "NTSBDEB1XXX",
  },
  recipient: {
    name: "recipient-name",
    street: "recipient-street",
    zipCode: "recipient-zipcode",
    city: "recipient-city",
    uid: "recipient-uid",
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
      <Global styles={[resetCss, globalCss]} />

      <div css={styles.root}>
        <div css={styles.header}>
          <div css={styles.supplierArea}>
            <span>{invoiceData.supplier.name}</span>
            <br />
            <span>{invoiceData.supplier.street}</span>
            <br />
            <span>
              {invoiceData.supplier.zipCode} {invoiceData.supplier.city}
            </span>
            <br />
            <span>UID: {invoiceData.supplier.uid}</span>
          </div>
        </div>

        <hr css={styles.divider} />

        <div css={styles.spacingMd}>
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
        </div>

        <div
          css={[
            styles.spacingMd,
            css`
              display: flex;
              justify-content: space-between;
            `,
          ]}
        >
          <span
            css={css`
              font-weight: bold;
            `}
          >
            Rechnung Nr. {invoiceData.year}-
            {`${invoiceData.nr}`.padStart(2, "0")}
          </span>

          <span>
            {invoiceData.location}, am {moment().format("D. MMMM YYYY")}
          </span>
        </div>

        <div css={styles.spacingXs}>
          <table
            css={css`
              width: 100%;
            `}
          >
            <thead>
              <tr>
                <th>Pos.</th>
                <th>Beschreibung</th>
                <th>Preis</th>
                <th>Menge</th>
                <th
                  css={css`
                    text-align: right;
                  `}
                >
                  Betrag
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.description}</td>
                  <td>
                    {formatter.number(item.price, {
                      format: "currency",
                      countOfDecimals: 0,
                    })}
                  </td>
                  <td>
                    {formatter.number(item.amount, { countOfDecimals: 2 })}
                  </td>
                  <td
                    css={css`
                      text-align: right;
                    `}
                  >
                    {formatter.number(item.price * item.amount, {
                      format: "currency",
                    })}
                  </td>
                </tr>
              ))}

              <tr>
                <td
                  colSpan={2}
                  css={css`
                    border: 0;
                  `}
                ></td>
                <td
                  colSpan={2}
                  css={css`
                    border: 0;
                    text-align: right;
                  `}
                >
                  Netto
                </td>
                <td
                  colSpan={1}
                  css={css`
                    border: 0;
                    text-align: right;
                  `}
                >
                  {formatter.number(nettoSum, { format: "currency" })}
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  css={css`
                    border: 0;
                  `}
                ></td>
                <td
                  colSpan={2}
                  css={css`
                    border: 0;
                    text-align: right;
                  `}
                >
                  20% USt.
                </td>
                <td
                  colSpan={1}
                  css={css`
                    border: 0;
                    text-align: right;
                  `}
                >
                  {formatter.number(ust, { format: "currency" })}
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  css={css`
                    border: 0;
                  `}
                ></td>
                <td
                  colSpan={2}
                  css={css`
                    border-bottom-width: 0;
                    border-left-width: 0;
                    border-right-width: 0;
                    border-top-width: 1px;
                    text-align: right;
                  `}
                >
                  Endsumme inkl. USt.
                </td>
                <td
                  colSpan={1}
                  css={css`
                    border-bottom-width: 0;
                    border-left-width: 0;
                    border-right-width: 0;
                    border-top-width: 1px;
                    text-align: right;
                  `}
                >
                  {formatter.number(bruttoSum, { format: "currency" })}
                </td>
              </tr>
            </tbody>
          </table>

          <div css={styles.spacingXs}>
            <span>IBAN: {invoiceData.supplier.iban}</span>
            <br />
            <span>BIC: {invoiceData.supplier.bic}</span>
            <br />
            <span>Zahlungsziel: 30 Tage nach Rechnungserhalt</span>
            <br />
          </div>

          <div css={styles.spacingMd}>
            <span>Mit freundlichen Grüßen,</span>
          </div>

          <div css={styles.spacingMd}>{invoiceData.supplier.name}</div>
        </div>

        <hr css={[styles.divider, styles.spacingXs]} />

        <div css={styles.spacingXs}>Anhang: Bestätigung des Kunden</div>
      </div>
    </>
  );
};

const formatter = {
  number(
    num: number | undefined,
    options: {
      countOfDecimals?: number;
      withPositiveSign?: boolean;
      stripNegativeSign?: boolean;
      format?: "currency" | "percentage_int";
    }
  ): string | undefined {
    if (num === undefined) {
      return undefined;
    }

    let result: string;

    let countOfDecimals;
    if (options.format !== undefined) {
      if (options.format === "currency") {
        countOfDecimals = 2;
      } else if (options.format === "percentage_int") {
        countOfDecimals = 0;
      } else if (options.format === "percentage_float") {
        countOfDecimals = 2;
      }
    }
    if (options.countOfDecimals !== undefined) {
      countOfDecimals = options.countOfDecimals;
    }

    const localeString = Math.abs(num).toLocaleString("de-AT", {
      minimumFractionDigits: countOfDecimals,
      maximumFractionDigits: countOfDecimals,
      style: "currency",
      currency: "EUR",
    });
    // style 'currency' and currency 'EUR' must be given to "toLocaleString" in order to have
    // a dot (.) as thousands separator (for locale de-AT). But it also adds a € in front of the
    // number, we want that at the end. So we strip that off
    result = localeString.substring(2);

    if (options.format !== undefined) {
      if (options.format === "currency") {
        result = "€ " + result;
      } else if (
        options.format === "percentage_int" ||
        options.format === "percentage_float"
      ) {
        result = result + "%";
      }
    }

    if (options.withPositiveSign !== undefined && options.withPositiveSign) {
      result = num > 0 ? `+ ${result}` : num < 0 ? `– ${result}` : result;
    } else if (
      options.stripNegativeSign === undefined ||
      !options.stripNegativeSign
    ) {
      result = num < 0 ? `– ${result}` : result;
    }

    return result;
  },
};
