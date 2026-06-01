"use client";

import { useEffect } from "react";
import initializeEcho from "@/lib/echo";

export const useEcho = () => {
  useEffect(() => {
    const echo = initializeEcho();

    return () => {
      // Cleanup if needed, though Echo usually persists
    };
  }, []);

  return initializeEcho();
};
