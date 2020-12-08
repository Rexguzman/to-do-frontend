import { useState } from 'react';

export const useIsOpen = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
      };

      return {isOpen, handleClick};
};