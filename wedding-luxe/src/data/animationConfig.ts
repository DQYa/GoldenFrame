/**
 * Shared animation configuration for Framer Motion.
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

export const pageReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const magazineReveal = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};
