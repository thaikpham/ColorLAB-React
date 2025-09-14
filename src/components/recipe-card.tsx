'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface GameCardProps {
  game: {
    title: string;
    price: number;
    discount?: number;
    image: string;
    tags: string[];
    rating: number;
    players: string;
  };
}

export function GameCard({ game }: GameCardProps) {
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
        className="bg-card/40 border-border/25 group relative h-full overflow-hidden backdrop-blur-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect on hover */}
        {/* <div */}
        {/*   className={`absolute inset-0 bg-gradient-to-r  opacity-0 transition-opacity duration-500 pointer-events-none ${isHovered ? "opacity-100" : ""}`} */}
        {/* /> */}

        {/* Border glow */}
        <div className={`absolute inset-0 rounded-lg transition-all duration-500`} />

        <div className="relative aspect-video overflow-hidden">
          <Image
            src={game.image || '/placeholder.svg'}
            alt={game.title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />

          {game.discount && game.discount > 0 && (
            <div className="absolute top-2 right-2 z-10">
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1,
                  rotate: isHovered ? [0, -5, 5, 0] : 0,
                }}
                transition={{
                  duration: 0.5,
                  repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                  repeatDelay: 2,
                }}
              >
                <Badge className="border-border bg-muted-foreground shadow-secondary-foreground/20 font-bold shadow-lg">
                  -{game.discount}%
                </Badge>
              </motion.div>
            </div>
          )}

          {/* Overlay on hover */}
          <div
            className={`from-primary/50 absolute inset-0 flex items-end justify-between bg-gradient-to-t to-transparent p-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <Button className="text-primary-foreground from-primary to-muted-foreground/80 shadow-primary-foreground/20 bg-gradient-to-r shadow-lg transition-all duration-300">
              View Game
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="border-zinc-700 bg-zinc-800/80 transition-all duration-300 hover:border-emerald-500 hover:bg-zinc-700"
            >
              <motion.div
                animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isHovered ? 'fill-rose-500 stroke-rose-500' : ''}
                  />
                </svg>
              </motion.div>
            </Button>
          </div>
        </div>

        <CardContent className="relative z-10 p-4">
          <h3
            className={`mb-1 font-semibold transition-colors duration-300 ${isHovered ? 'text-emerald-400' : ''}`}
          >
            {game.title}
          </h3>

          <div className="mb-2 flex flex-wrap gap-1">
            {game.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="outline"
                className={`border-border text-xs transition-all duration-300 ${isHovered ? 'border-border/50 bg-border/10' : ''}`}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {game.discount && game.discount > 0 ? (
                <>
                  <span className="text-sm text-zinc-500 line-through">
                    ${game.price.toFixed(2)}
                  </span>
                  <span className="font-bold">
                    ${(game.price * (1 - game.discount / 100)).toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="font-bold">${game.price.toFixed(2)}</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{game.rating}</span>
              </div>
              <div className="flex items-center text-xs text-zinc-400">
                <Users className="mr-1 h-3 w-3" />
                {game.players}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
