import { useState, useRef, useEffect, useCallback } from 'react';

interface UseFullPageScrollOptions {
  /** Total number of sections */
  totalSections: number;
  /** Disable all navigation (modal open, etc.) */
  disabled?: boolean;
  /** Minimum wheel delta to trigger navigation (default 40) */
  wheelThreshold?: number;
  /** Minimum touch swipe distance in px (default 50) */
  touchThreshold?: number;
  /** Lock duration after each navigation in ms (default 800) */
  debounceMs?: number;
  /** Callback when section changes */
  onSectionChange?: (index: number) => void;
}

interface UseFullPageScrollReturn {
  currentIndex: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
}

export function useFullPageScroll({
  totalSections,
  disabled = false,
  wheelThreshold = 40,
  touchThreshold = 50,
  debounceMs = 800,
  onSectionChange,
}: UseFullPageScrollOptions): UseFullPageScrollReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const isScrollingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartY = useRef(0);
  const currentIndexRef = useRef(0);

  // Keep a ref copy for event handlers (avoid stale closures)
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Initialize section refs array
  useEffect(() => {
    sectionRefs.current = Array.from({ length: totalSections }, () => null);
  }, [totalSections]);

  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isScrollingRef.current) return;

      const clamped = Math.max(0, Math.min(index, totalSections - 1));
      if (clamped === currentIndexRef.current) return;

      const container = containerRef.current;
      const section = sectionRefs.current[clamped];
      if (!container || !section) return;

      // Clear any pending timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      isScrollingRef.current = true;
      setCurrentIndex(clamped);
      onSectionChange?.(clamped);

      container.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });

      timerRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        timerRef.current = null;
      }, debounceMs);
    },
    [totalSections, debounceMs, onSectionChange]
  );

  const goNext = useCallback(() => {
    if (currentIndexRef.current < totalSections - 1) {
      goTo(currentIndexRef.current + 1);
    }
  }, [totalSections, goTo]);

  const goPrev = useCallback(() => {
    if (currentIndexRef.current > 0) {
      goTo(currentIndexRef.current - 1);
    }
  }, [goTo]);

  // ── Wheel handler ──
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (disabled) return;
      if (Math.abs(e.deltaY) < wheelThreshold) return;

      // Check if the event target is inside a section with its own scroll
      const target = e.target as HTMLElement;
      const scrollable = target.closest('.fp-section-scroll') as HTMLElement | null;

      if (scrollable) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const atTop = scrollTop <= 1;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 2;

        // Still has room to scroll within section — let it scroll naturally
        if (e.deltaY > 0 && !atBottom) return;
        if (e.deltaY < 0 && !atTop) return;
      }

      e.preventDefault();
      if (e.deltaY > 0) {
        goNext();
      } else {
        goPrev();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [disabled, wheelThreshold, goNext, goPrev]);

  // ── Touch handler ──
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (disabled) return;
      if (isScrollingRef.current) return;

      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < touchThreshold) return;

      // Check if inside a scrollable section
      const target = e.target as HTMLElement;
      const scrollable = target.closest('.fp-section-scroll') as HTMLElement | null;

      if (scrollable) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const atTop = scrollTop <= 1;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 2;

        if (diff > 0 && !atBottom) return;
        if (diff < 0 && !atTop) return;
      }

      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [disabled, touchThreshold, goNext, goPrev]);

  // ── Keyboard handler ──
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;

      // Don't intercept when focus is in an input
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          goPrev();
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(totalSections - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [disabled, goNext, goPrev, goTo, totalSections]);

  return {
    currentIndex,
    containerRef,
    sectionRefs,
    goTo,
    goNext,
    goPrev,
  };
}
