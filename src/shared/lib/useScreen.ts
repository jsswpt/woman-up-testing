import React, { useState, useEffect, useMemo } from "react";
import { breakpoints } from "shared/api/internal/consts/breakpoints";

type ScreenTypes = "xs" | "sm" | "lg";

/**
 *
 * @returns Тип экрана - xs | sm | lg
 */
export const useScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const screen: ScreenTypes = useMemo(() => {
    if (width >= breakpoints["screen-xs"] && width < breakpoints["screen-sm"]) {
      return "xs";
    } else if (
      width >= breakpoints["screen-sm"] &&
      width < breakpoints["screen-lg"]
    ) {
      return "sm";
    } else {
      return "lg";
    }
  }, [width]);

  return screen;
};
