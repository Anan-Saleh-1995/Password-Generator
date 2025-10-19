import { useContext } from 'react';
import type { PasswordContextValue } from './PasswordProvider';
import { PasswordContext } from '.';

export const usePasswordContext = (): PasswordContextValue => {
  const passwordContext = useContext(PasswordContext);
  if (!passwordContext) {
    throw new Error('usePasswordContext must be used within PasswordProvider');
  }
  return passwordContext;
};
