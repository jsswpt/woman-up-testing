import { useState, useCallback } from "react";

/**
 * @param state стартовый стейт
 * @param timeout задаётся таймаут выполнения
 * @returns isOpen, isInTransition, toggleAnimation
 */
export const useAnimation = (state: boolean, timeout: number) => {
  const [isOpen, setIsOpen] = useState(state);
  const [isInTransition, setIsInTransition] = useState(false);

  const toggleAnimation = useCallback((arg: boolean) => {
    setIsInTransition(true);
    const timeoutForisOpen = setTimeout(() => {
      setIsInTransition(false);
      setIsOpen(arg);
      clearTimeout(timeoutForisOpen);
    }, timeout);
  }, []);

  return { isOpen, isInTransition, toggleAnimation };
};
