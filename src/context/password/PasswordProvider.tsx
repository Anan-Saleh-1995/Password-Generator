import React, { useMemo, useState } from 'react';
import type { PasswordSettings } from '../../types/password';
import { DEFAULT_PASSWORD_SETTINGS } from '../../core/constants';
import { PasswordContext } from '.';

export type PasswordContextValue = {
  password: string;
  passwordSettings: PasswordSettings;
  setPasswordSettings: React.Dispatch<React.SetStateAction<PasswordSettings>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  updatePasswordSettings: (passSetting: Partial<PasswordSettings>) => void;
};

export const PasswordProvider = ({ children }: React.PropsWithChildren) => {
  const [password, setPassword] = useState<string>('');
  const [passwordSettings, setPasswordSettings] = useState<PasswordSettings>(DEFAULT_PASSWORD_SETTINGS);

  const updatePasswordSettings = (passSetting: Partial<PasswordSettings>): void => {
    setPasswordSettings((prevPassSettings) => (
      {
        ...prevPassSettings,
        ...passSetting,
      }
    ));
  };

  const value = useMemo(
    () => ({
      password,
      passwordSettings,
      setPasswordSettings,
      setPassword,
      updatePasswordSettings,
    }),
    [password, passwordSettings]
  );

  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};
