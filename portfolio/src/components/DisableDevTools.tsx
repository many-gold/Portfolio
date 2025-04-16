// components/DisableDevTools.tsx
"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: {
      [key: string]: any;
    };
  }
}

export default function DisableDevTools() {
  useEffect(() => {
    if (process.env.NEXT_DISABLE_DEVTOOLS === "1") {
      if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
        for (const [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
          // @ts-ignore
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value === "function" ? () => {} : null;
        }
      }
    }
  }, []);

  return null;
}
