import { ChangeEvent, KeyboardEvent, useRef, useEffect } from 'react';

interface CodeInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  disabled?: boolean;
}

export function CodeInput({ value, onChange, disabled }: CodeInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (value.every(v => v === '')) {
      inputRefs.current[0]?.focus();
    }
  }, [value]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val.length > 1) {
      const digits = val.replace(/\D/g, '').split('').slice(0, 6);
      const newValue = [...value];
      digits.forEach((digit, i) => {
        if (i < 6) {
          newValue[i] = digit;
        }
      });
      onChange(newValue);

      const nextIndex = Math.min(digits.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    if (!/^\d*$/.test(val)) return;

    const newValue = [...value];
    newValue[index] = val;
    onChange(newValue);

    if (val && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const digits = pastedData.replace(/\D/g, '').split('').slice(0, 6);

    const newValue = [...value];
    digits.forEach((digit, i) => {
      if (i < 6) {
        newValue[i] = digit;
      }
    });
    onChange(newValue);

    const nextIndex = Math.min(digits.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="flex gap-2 justify-center">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          disabled={disabled}
          className="w-12 h-14 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
          maxLength={1}
        />
      ))}
    </div>
  );
}
