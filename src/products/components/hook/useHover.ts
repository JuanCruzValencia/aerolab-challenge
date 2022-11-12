import { useState } from "react";

interface Hover {
  isHover: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const useHover = (): Hover => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return {
    isHover,
    handleMouseEnter,
    handleMouseLeave,
  };
};
