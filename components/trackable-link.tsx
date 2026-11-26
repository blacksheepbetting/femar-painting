"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type EventWindow = Window & { dataLayer?: Array<Record<string, string>> };

export function trackMarketingEvent(event: string, location: string) {
  if (typeof window === "undefined") return;
  const win = window as EventWindow;
  (win.dataLayer ??= []).push({ event, link_location: location });
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventLocation: string;
};

export function TrackableLink({ eventName, eventLocation, onClick, ...props }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackMarketingEvent(eventName, eventLocation);
    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}
