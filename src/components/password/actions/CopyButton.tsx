import { CopyIcon } from '@radix-ui/react-icons';
import { usePasswordContext } from '@/context/password';
import { Button } from '@/components/ui/button';

const CopyButton = () => {
  const { password } = usePasswordContext();
  const copyPassword = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(password);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <Button
      onClick={() => copyPassword()}
      variant="outline"
      size="icon"
      aria-label="Copy password"
      disabled={!password}
    >
      <CopyIcon />
    </Button>
  );
};

export default CopyButton;
