const useMotion = () => {
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: "none" as const },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: { duration: 0.25, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      y: -10,
      pointerEvents: "none" as const,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return { dropdownVariants, itemVariants, containerVariants };
};

export default useMotion;
