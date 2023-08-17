export const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
