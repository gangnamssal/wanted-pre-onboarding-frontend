import { useState } from 'react';

export default function useInput(initialData = ''): [string, (e: React.FocusEvent<HTMLInputElement>) => void] {
  const [input, setInput] = useState<string>(initialData);

  const getInputValue = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(() => inputValue);
  };

  return [input, getInputValue];
}
