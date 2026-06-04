/**
 * Shared animation configuration for Framer Motion.
 * Framer Motion v12 requires typed easing tuples.
 */

import type { Transition } from 'framer-motion';

export const easeOutExpo: Transition['ease'] = [0.25, 0.1, 0.25, 1] as const;
export const easeInOut: Transition['ease'] = [0.4, 0, 0.2, 1] as const;

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const fadeSlideUpStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
};
