"use client";

import { useEffect, useRef } from "react";

interface AdProps {
  slot: string;
  format?: "auto" | "rectangle" | "leaderboard" | "banner";
  className?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

// Replace with your real publisher ID: ca-pub-XXXXXXXXXXXXXXXX
const ADSENSE_PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || "";

export default function Ad({ slot, format = "auto", className = "", label = "Advertisement" }: AdProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!ADSENSE_PUBLISHER_ID || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded
    }
  }, []);

  const sizeClasses: Record<string, string> = {
    leaderboard: "h-[90px] w-full",
    banner: "h-[60px] w-full",
    rectangle: "h-[250px] w-[300px]",
    auto: "w-full min-h-[100px]",
  };

  if (!ADSENSE_PUBLISHER_ID) {
    return (
      <div className={`ad-placeholder rounded-lg ${sizeClasses[format]} flex flex-col gap-1 ${className}`}>
        <span className="text-xs text-[var(--color-cinema-muted)]">{label}</span>
        <span className="text-[10px] text-[var(--color-cinema-border)]">
          Set NEXT_PUBLIC_ADSENSE_ID to enable ads
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="text-[10px] text-[var(--color-cinema-muted)] uppercase tracking-wider mb-1">{label}</p>
      <ins
        ref={adRef}
        className="adsbygoogle block"
        data-ad-client={ADSENSE_PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
