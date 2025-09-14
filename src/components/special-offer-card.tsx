'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface SpecialOfferCardProps {
  deal: {
    title: string;
    discount: string;
    image: string;
    endDate: string;
    gradient: string;
  };
}

export function SpecialOfferCard({ deal }: SpecialOfferCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
    >
      <Card
        className="bg-background/50 border-border/50 h-full overflow-hidden backdrop-blur-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={deal.image || '/placeholder.svg'}
            alt={deal.title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-br ${deal.gradient} transition-opacity duration-300 ${isHovered ? 'opacity-60' : 'opacity-40'}`}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="p-6 text-center"
              animate={{
                scale: isHovered ? 1.1 : 1,
                y: isHovered ? -10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-3 text-2xl font-bold text-white drop-shadow-md">{deal.title}</h3>

              <motion.div
                animate={{
                  rotate: isHovered ? [0, -3, 3, 0] : 0,
                  scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 0.5,
                  repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                  repeatDelay: 2,
                }}
              >
                <Badge className="bg-white/90 px-4 py-2 text-lg font-bold text-black shadow-lg">
                  {deal.discount}
                </Badge>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">Ends {deal.endDate}</span>

            <Button
              size="sm"
              className={`transition-all duration-300 ${
                isHovered
                  ? 'from-primary to-primary/50 text-primary-foreground bg-gradient-to-r shadow-lg shadow-emerald-500/20'
                  : 'bg-muted-foreground text-muted'
              } `}
            >
              View Deals
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
