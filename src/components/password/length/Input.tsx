import React from 'react';
import { Input } from '@/components/ui/input';

type PasswordLengthInputProps = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  justCorrected?: boolean;
};

const PasswordLengthInput = ({
  value,
  onChange,
  onBlur,
  justCorrected = false,
}: PasswordLengthInputProps) => (
  <Input
    id="password-length"
    value={value}
    onChange={onChange}
    type="number"
    min={4}
    max={128}
    step={1}
    className={`transition-all duration-500 ${justCorrected ? 'ring-2 ring-yellow-400' : ''}`}
    onBlur={onBlur}
  />
);

export default PasswordLengthInput;
