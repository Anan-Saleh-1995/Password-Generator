import { createContext } from 'react';
import type { PasswordContextValue } from './PasswordProvider';

export const PasswordContext = createContext<PasswordContextValue | null>(null);
