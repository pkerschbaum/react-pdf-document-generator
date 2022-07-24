import { assertIsUnreachable } from '@pkerschbaum/ts-utils';

export const formatter = {
  number(
    num: number | undefined,
    options: {
      countOfDecimals?: number;
      withPositiveSign?: boolean;
      stripNegativeSign?: boolean;
      format?: 'currency' | 'percentage_int' | 'percentage_float';
    },
  ): string | undefined {
    if (num === undefined) {
      return undefined;
    }

    let result: string;

    let countOfDecimals;
    if (options.format !== undefined) {
      switch (options.format) {
        case 'currency': {
          countOfDecimals = 2;
          break;
        }
        case 'percentage_int': {
          countOfDecimals = 0;
          break;
        }
        case 'percentage_float': {
          countOfDecimals = 2;
          break;
        }
        default:
          assertIsUnreachable(options.format);
      }
    }
    if (options.countOfDecimals !== undefined) {
      countOfDecimals = options.countOfDecimals;
    }

    const localeString = Math.abs(num).toLocaleString('de-AT', {
      minimumFractionDigits: countOfDecimals,
      maximumFractionDigits: countOfDecimals,
      style: 'currency',
      currency: 'EUR',
    });
    // style 'currency' and currency 'EUR' must be given to "toLocaleString" in order to have
    // a dot (.) as thousands separator (for locale de-AT). But it also adds a € in front of the
    // number, we want that at the end. So we strip that off
    result = localeString.substring(2);

    if (options.format !== undefined) {
      switch (options.format) {
        case 'currency': {
          result = `€ ${result}`;
          break;
        }
        case 'percentage_int':
        case 'percentage_float': {
          result = `${result}%`;
          break;
        }
        default:
          assertIsUnreachable(options.format);
      }
    }

    if (options.withPositiveSign !== undefined && options.withPositiveSign) {
      result = num > 0 ? `+ ${result}` : num < 0 ? `– ${result}` : result;
    } else if (options.stripNegativeSign === undefined || !options.stripNegativeSign) {
      result = num < 0 ? `– ${result}` : result;
    }

    return result;
  },
};
