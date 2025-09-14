'use client';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const GradientBackground = () => {
  const { resolvedTheme } = useTheme();

  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <AnimatePresence>
      {resolvedTheme === 'dark' ? (
        <motion.div
          key="dark"
          className="absolute inset-0 z-0"
          style={{
            background: '#020617',
            backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
            backgroundSize: '40px 40px, 40px 40px, 100% 100%',
          }}
          {...animationProps}
        />
      ) : (
        <motion.div
          key="light"
          className="absolute inset-0 z-0"
          style={{
            background: `
        radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
            linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
          }}
          {...animationProps}
        />
      )}
    </AnimatePresence>
  );
};

export default GradientBackground;
