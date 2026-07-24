"use client";

import { useCallback, useState } from "react";

/**
 * Single-open FAQ accordion across a two-column layout.
 * On mobile (stacked columns) only the first item starts open;
 * clicking another opens it and closes the previous.
 */
export function useFaqAccordion(itemCount: number) {
  const half = Math.ceil(itemCount / 2);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const globalIndex = useCallback(
    (column: "left" | "right", localIndex: number) =>
      column === "left" ? localIndex : half + localIndex,
    [half]
  );

  const isOpen = useCallback(
    (column: "left" | "right", localIndex: number) =>
      openIndex === globalIndex(column, localIndex),
    [globalIndex, openIndex]
  );

  const toggle = useCallback(
    (column: "left" | "right", localIndex: number) => {
      const next = globalIndex(column, localIndex);
      setOpenIndex((prev) => (prev === next ? null : next));
    },
    [globalIndex]
  );

  return { half, isOpen, toggle };
}
