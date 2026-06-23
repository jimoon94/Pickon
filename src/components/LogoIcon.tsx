"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LogoIcon({ size = 24 }: { size?: number }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const frameColor = !mounted || resolvedTheme !== "dark" ? "#1e293b" : "#cbd5e1";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke={frameColor} strokeWidth="2" d="M8 4H6a2 2 0 0 0-2 2v2" />
      <path stroke={frameColor} strokeWidth="2" d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path stroke={frameColor} strokeWidth="2" d="M20 16v2a2 2 0 0 1-2 2h-2" />
      <path stroke={frameColor} strokeWidth="2" d="M8 20H6a2 2 0 0 1-2-2v-2" />
      <path
        d="M12 6c0 3.5-2.5 6-6 6 3.5 0 6 2.5 6 6 0-3.5 2.5-6 6-6-3.5 0-6-2.5-6-6Z"
        fill="#3b82f6"
        stroke="none"
      />
    </svg>
  );
}
