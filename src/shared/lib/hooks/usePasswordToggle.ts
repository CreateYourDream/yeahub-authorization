import { useState } from 'react';

export const usePasswordToggle = (defaultVisible = false) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };

  return {
    isVisible,
    toggle,
    inputType: isVisible ? 'text' : 'password',
  } as const;
};
