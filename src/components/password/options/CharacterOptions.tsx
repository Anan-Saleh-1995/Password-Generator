import { usePasswordContext } from '@/context/password';
import { PASSWORD_SETTING_KEYS } from '@/core/constants';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const settingsNamesCheckBox = [{
  name: PASSWORD_SETTING_KEYS.USE_LOWER,
  label: 'a-z',
},
{
  name: PASSWORD_SETTING_KEYS.USE_UPPER,
  label: 'A-Z',
},
{
  name: PASSWORD_SETTING_KEYS.USE_NUMBERS,
  label: '0-9',
},
{
  name: PASSWORD_SETTING_KEYS.USE_SYMBOLS,
  label: '!@#$%^&*',
}];

const CharacterOptions = () => {
  const { passwordSettings, updatePasswordSettings } = usePasswordContext();
  return (
    <div className="flex flex-col w-full gap-5">
      <Label>Settings:</Label>
      <div className="flex flex-col gap-5">
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

export default CharacterOptions;
