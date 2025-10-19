import { usePasswordContext } from '@/context/password';
import { CopyButton, GenerateButton } from '@/components/password/actions';
import { PasswordLengthControl } from '@/components/password/length';
import { CharacterOptions } from '@/components/password/options';
import { Input } from '@/components/ui/input';


const PasswordGenerator = () => {
  const { password } = usePasswordContext();

  return (
    <div className="flex flex-col justify-center gap-5 w-full max-w-md">

      <div className="flex w-full gap-2">
        <div className="flex-1">
          <Input
            disabled
            value={password}
            aria-label="Generated password"
          />
        </div>
        <div className="flex gap-2">
          <GenerateButton />
          <CopyButton />
        </div>
      </div>

      <div className="flex w-full">
        <PasswordLengthControl />
      </div>

      <div className="w-full">
        <CharacterOptions />
      </div>

      {/* <div className="flex w-full">
        <AdvancedOptions />
      </div> */}
    </div>
  );
};

export default PasswordGenerator;
