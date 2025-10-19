import { useState, type ChangeEvent } from 'react';
import { usePasswordContext } from '@/context/password';
import { PASSWORD_SETTING_KEYS } from '@/core/constants';
import { Label } from '@/components/ui/label';
import PasswordLengthInput from '@/components/password/length/Input';
import PasswordLengthSlider from '@/components/password/length/Slider';

const PasswordLengthControl = () => {
  const [justCorrected, setJustCorrected] = useState(false);
  const { passwordSettings, updatePasswordSettings } = usePasswordContext();

  const handleLengthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const num = Math.round(Number(e.target.value));
    if (!isNaN(num)) {
      updatePasswordSettings({ [PASSWORD_SETTING_KEYS.LENGTH]: num });
    }
  };

  const handleSliderLengthChange = (value: number[]) => {
    updatePasswordSettings({ [PASSWORD_SETTING_KEYS.LENGTH]: value[0] });
  };

  const onBlur = () => {
    const clamped = Math.max(4, Math.min(128, passwordSettings.length));
    updatePasswordSettings({ [PASSWORD_SETTING_KEYS.LENGTH]: clamped });
    if (clamped !== passwordSettings.length) {
      setJustCorrected(true);
      setTimeout(() => setJustCorrected(false), 1000);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <Label htmlFor="password-length">Length</Label>
      <div className="flex flex-col gap-5">
        <div>
          <PasswordLengthInput
            value={passwordSettings.length}
            onChange={handleLengthChange}
            onBlur={onBlur}
            justCorrected={justCorrected}
          />
          <p className="text-muted-foreground text-sm">Length: 4–128 characters.</p>
        </div>
        <PasswordLengthSlider
          value={Math.max(4, Math.min(128, passwordSettings.length))}
          onChange={handleSliderLengthChange}
        />
      </div>
    </div>
  );
};

export default PasswordLengthControl;
