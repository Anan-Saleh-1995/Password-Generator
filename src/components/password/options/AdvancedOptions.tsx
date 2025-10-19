import { usePasswordContext } from '@/context/password';
import { PASSWORD_SETTING_KEYS } from '@/core/constants';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const settingsNamesCheckBox = [{
  name: PASSWORD_SETTING_KEYS.AVOID_AMBIGUOUS,
  label: 'Avoid Amiguous characters',
}];

const AdvancedOptions = () => {
  const { passwordSettings, updatePasswordSettings } = usePasswordContext();
  return (
    <div className="flex w-full gap-5 flex-col">
      <Label>Advanced:</Label>
      <div className="flex justify-between w-100">
        {
          settingsNamesCheckBox.map(({ name, label }) => (
            <div key={name} className="flex items-center gap-5">
              <Checkbox
                id={name}
                checked={passwordSettings[name]}
                value={name}
                name={name}
                onCheckedChange={(checked: boolean | 'indeterminate') => updatePasswordSettings({ [name]: checked === true })}
              />
              <Label htmlFor={name}>{label}</Label>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AdvancedOptions;
