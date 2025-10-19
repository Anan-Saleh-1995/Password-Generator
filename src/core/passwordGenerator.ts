import { pickRandom, shuffle } from './randomUtils';
import { buildCharset } from './passwordCharset';
import type { PasswordSettings } from '../types/password';

export const generatePassword = (
  passwordSettings: PasswordSettings
): string => {
  const passwordChars = buildCharset(passwordSettings);
  const result: string[] = [];

  while (result.length < passwordSettings.length) {
    result.push(pickRandom(passwordChars));
  }

  shuffle(result);
  return result.join('');
};
