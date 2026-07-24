"use client";

import { useCallback, useEffect, useState } from "react";

const DESKTOP_QUERY = "(min-width: 992px)";

function isDesktopViewport() {
  if (typeof window === "undefined") return true;
  return window.matchMedia(DESKTOP_QUERY).matches;
}

/**
 * Two-column FAQ accordion.
 * Desktop/laptop: one open item per column (left + right can both stay open).
 * Mobile (stacked): only one item open at a time across both columns.
 */
export function useFaqAccordion(itemCount: number) {
  const half = Math.ceil(itemCount / 2);
  const hasRight = itemCount > half;

  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(
    hasRight ? 0 : null,
  );

  useEffect(() => {
    if (!hasRight) return;

    const syncForViewport = () => {
      if (isDesktopViewport()) {
        setOpenLeft((prev) => (prev === null ? 0 : prev));
        setOpenRight((prev) => (prev === null ? 0 : prev));
        return;
      }

      // Mobile: keep a single open item in the stacked list.
      setOpenLeft((left) => (left !== null ? left : 0));
      setOpenRight(null);
    };

    syncForViewport();

    const media = window.matchMedia(DESKTOP_QUERY);
    media.addEventListener("change", syncForViewport);
    return () => media.removeEventListener("change", syncForViewport);
  }, [hasRight]);

  const isOpen = useCallback(
    (column: "left" | "right", localIndex: number) =>
      column === "left" ? openLeft === localIndex : openRight === localIndex,
    [openLeft, openRight],
  );

  const toggle = useCallback((column: "left" | "right", localIndex: number) => {
    const desktop = isDesktopViewport();

    if (column === "left") {
      setOpenLeft((prev) => (prev === localIndex ? null : localIndex));
      if (!desktop) setOpenRight(null);
      return;
    }

    setOpenRight((prev) => (prev === localIndex ? null : localIndex));
    if (!desktop) setOpenLeft(null);
  }, []);

  return { half, isOpen, toggle };
}
