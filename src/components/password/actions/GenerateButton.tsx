import React from 'react';
import { usePasswordContext } from '@/context/password';
import { generatePassword } from '@/core/passwordGenerator';
import { UpdateIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

const GenerateButton = () => {
  const { setPassword, passwordSettings } = usePasswordContext();
  const handleGenerate = (): void => {
    const password = generatePassword(passwordSettings);
    setPassword(password);
  };
  return (
    <Button onClick={handleGenerate} variant="outline" size="icon" aria-label="Generate password">
      <UpdateIcon />
    </Button>
  );
};

export default GenerateButton;
