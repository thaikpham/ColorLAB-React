'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: {
    name: string;
    icon: React.ReactNode;
    color: string;
  };
}

export function CategoryCard({ category }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <Card
        className="bg-background/30 border-border/50 h-full overflow-hidden backdrop-blur-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href="#" className="relative block p-6 text-center">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${category.color} transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-0'}`}
          ></div>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <motion.div
              className={`rounded-full p-3 transition-all duration-300 ${
                isHovered ? `bg-gradient-to-br ${category.color}` : 'bg-background'
              }`}
              animate={{
                rotate: isHovered ? [0, 10, -10, 0] : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {category.icon}
            </motion.div>

            <motion.span
              className={`font-medium transition-colors duration-300 ${isHovered ? 'text-white' : ''}`}
              animate={{ y: isHovered ? [0, -2, 0] : 0 }}
              transition={{ duration: 0.3 }}
            >
              {category.name}
            </motion.span>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
}
