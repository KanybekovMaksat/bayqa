import { useState, ChangeEvent, useEffect } from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function PhoneInput({ value, onChange, disabled }: PhoneInputProps) {
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (value) {
      setDisplayValue(formatPhone(value));
    }
  }, [value]);

  const formatPhone = (input: string): string => {
    const digits = input.replace(/\D/g, '');

    // убираем +996 если пользователь вставил номер полностью
    const local = digits.startsWith('996') ? digits.slice(3) : digits;

    if (local.length === 0) return '+996';
    if (local.length <= 3) return `+996 ${local}`;
    if (local.length <= 6) return `+996 ${local.slice(0, 3)} ${local.slice(3)}`;
    return `+996 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6, 9)}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const digits = input.replace(/\D/g, '');

    const local = digits.startsWith('996') ? digits.slice(3) : digits;
    const limited = local.slice(0, 9);

    setDisplayValue(formatPhone(limited));
    onChange(limited.length ? `+996${limited}` : '');
  };

  return (
    <input
      type="tel"
      value={displayValue}
      onChange={handleChange}
      placeholder="+996 ___ ___ ___"
      disabled={disabled}
      maxLength={17}
      className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                 outline-none transition-all
                 disabled:bg-gray-100 disabled:cursor-not-allowed"
    />
  );
}
