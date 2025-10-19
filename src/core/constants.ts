import type { PasswordSettings } from '../types/password';

export const LOWER = 'abcdefghijklmnopqrstuvwxyz';
export const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const NUMBERS = '0123456789';
export const SYMBOLS = '!@#$%^&*()-_=+[]{};:,.<>/?`~';
export const AMBIGUOUS = 'O0oIl1|';

export const PASSWORD_SETTING_KEYS = {
  LENGTH: 'length',
  USE_LOWER: 'useLower',
  USE_UPPER: 'useUpper',
  USE_NUMBERS: 'useNumbers',
  USE_SYMBOLS: 'useSymbols',
  AVOID_AMBIGUOUS: 'avoidAmbiguous',
} as const;

export const DEFAULT_PASSWORD_SETTINGS: PasswordSettings = {
  length: 16,
  useLower: true,
  useUpper: true,
  useNumbers: true,
  useSymbols: true,
  avoidAmbiguous: false,
};
