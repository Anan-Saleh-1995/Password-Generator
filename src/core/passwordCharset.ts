import type { PasswordSettings } from '../types/password';
import {
  AMBIGUOUS,
  LOWER,
  NUMBERS,
  SYMBOLS,
  UPPER
} from './constants';

export function buildCharset(passwordSettings: PasswordSettings): string {
  let passwordCharChoice = '';
  if (passwordSettings.useLower) {
    passwordCharChoice += LOWER;
  }
  if (passwordSettings.useUpper) {
    passwordCharChoice += UPPER;
  }
  if (passwordSettings.useNumbers) {
    passwordCharChoice += NUMBERS;
  }
  if (passwordSettings.useSymbols) {
    passwordCharChoice += SYMBOLS;
  }
  if (passwordSettings.avoidAmbiguous) {
    passwordCharChoice = [...passwordCharChoice].filter((c) => !AMBIGUOUS.includes(c)).join('');
  }

  return passwordCharChoice;
}
