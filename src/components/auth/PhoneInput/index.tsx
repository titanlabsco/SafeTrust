import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

interface Props {
  value: string;
  countryCode: string;
  onPhoneChange: (value: string) => void;
  onCountryCodeChange: (value: string) => void;
  id?: string;
  variant?: 'default' | 'underlined';
}

export const PhoneInput: React.FC<Props> = ({
  value,
  countryCode,
  onPhoneChange,
  onCountryCodeChange,
  id = 'phone',
  variant = 'default',
}) => {
  return (
    <div className="flex gap-2">
      <Select
        id={`${id}-country-code`}
        value={countryCode}
        onChange={(e) => onCountryCodeChange(e.target.value)}
        className="w-24"
        variant={variant}
      >
        <option value="+506">🇨🇷 +506</option>
      </Select>
      <Input
        id={id}
        type="tel"
        value={value}
        onChange={(e) => onPhoneChange(e.target.value)}
        className="flex-1"
        placeholder="74812445"
        variant={variant}
      />
    </div>
  );
};
