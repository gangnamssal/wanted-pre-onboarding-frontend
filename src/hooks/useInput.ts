import { useState } from 'react';

export default function useInput(): [string, (e: React.FocusEvent<HTMLInputElement>) => void] {
  const [input, setInput] = useState<string>('');

  const getInputValue = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(() => inputValue);
  };

  return [input, getInputValue];
}
