import { useState, useRef, useEffect, useCallback } from 'react';

interface Options {
  totalSections: number;
  disabled?: boolean;
  wheelThreshold?: number;
  lockMs?: number;
}

interface Return {
  currentIndex: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  goTo: (index: number) => void;
}

export function useFullPageScroll({
  totalSections,
  disabled = false,
  wheelThreshold = 40,
  lockMs = 450,
}: Options): Return {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const lockedRef = useRef(false);
  const currentRef = useRef(0);

  // Init refs array
  useEffect(() => {
    sectionRefs.current = Array.from({ length: totalSections }, () => null);
  }, [totalSections]);

  // Sync ref copy
  useEffect(() => {
    currentRef.current = currentIndex;
  }, [currentIndex]);

  // ── Defensive goTo ──
  const goTo = useCallback(
    (index: number) => {
      if (lockedRef.current) return;
      const clamped = Math.max(0, Math.min(index, totalSections - 1));
      if (clamped === currentRef.current) return;

      const container = containerRef.current;
      const target = sectionRefs.current[clamped];
      if (!container || !target) return;

      lockedRef.current = true;
      setCurrentIndex(clamped);

      container.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });

      setTimeout(() => {
        lockedRef.current = false;
      }, lockMs);
    },
    [totalSections, lockMs]
  );

  // ── Wheel handler — container only ──
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      // Never interfere when disabled (modal open)
      if (disabled) return;
      // Skip if lock is active
      if (lockedRef.current) return;
      // Ignore tiny scrolls
      if (Math.abs(e.deltaY) < wheelThreshold) return;

      const dir = e.deltaY > 0 ? 1 : -1;
      const nextIndex = currentRef.current + dir;

      // Boundary check — if out of bounds, do NOT prevent default
      if (nextIndex < 0 || nextIndex >= totalSections) return;

      // Verify target section exists
      const target = sectionRefs.current[nextIndex];
      if (!target) return;

      // All checks passed — take control
      e.preventDefault();
      goTo(nextIndex);
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, [disabled, wheelThreshold, totalSections, goTo]);

  return { currentIndex, containerRef, sectionRefs, goTo };
}
