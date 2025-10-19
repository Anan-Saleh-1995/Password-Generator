import { Slider } from '@/components/ui/slider';

type PasswordLengthSliderProps = {
  value: number;
  onChange: (value: number[]) => void;
};

const PasswordLengthSlider = ({ value, onChange }: PasswordLengthSliderProps) => (
  <Slider
    value={[value]}
    min={4}
    max={128}
    step={1}
    onValueChange={onChange}
  />
);

export default PasswordLengthSlider;
