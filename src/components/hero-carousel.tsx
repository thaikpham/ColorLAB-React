'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const heroGames = [
  {
    id: 1,
    title: 'Crusader Kings III',
    description:
      'The new core expansion brings a wealth of new features to the acclaimed medieval grand strategy game.',
    image: '/placeholder.svg?height=600&width=1400',
    tags: ['Strategy', 'RPG', 'Medieval', 'Grand Strategy'],
    price: 49.99,
    discountedPrice: 39.99,
    discount: 20,
  },
  {
    id: 2,
    title: 'Elden Ring',
    description:
      'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    image: '/placeholder.svg?height=600&width=1400',
    tags: ['Action RPG', 'Souls-like', 'Open World', 'Fantasy'],
    price: 59.99,
    discountedPrice: 59.99,
    discount: 0,
  },
  {
    id: 3,
    title: 'Starfield',
    description:
      "Embark on an epic journey through the stars in Bethesda Game Studios' first new universe in over 25 years.",
    image: '/placeholder.svg?height=600&width=1400',
    tags: ['RPG', 'Space', 'Open World', 'Sci-Fi'],
    price: 69.99,
    discountedPrice: 59.49,
    discount: 15,
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroGames.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroGames.length) % heroGames.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const currentGame = heroGames[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[21/9]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={currentGame.image || '/placeholder.svg'}
              alt={currentGame.title}
              fill
              className="object-cover"
              priority
            />
            <div className="from-background/90 via-muted/20 absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-6 md:p-10">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Badge className="from-foreground to-muted-foreground mb-3 bg-gradient-to-r tracking-wider uppercase">
                    Featured Game
                  </Badge>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-primary mb-2 text-3xl font-bold md:text-5xl"
                >
                  {currentGame.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-secondary-foreground mb-4 text-base md:text-lg"
                >
                  {currentGame.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mb-4 flex flex-wrap gap-2"
                >
                  {currentGame.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-card border-border text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Button className="from-primary to-secondary-foreground/60 shadow-shadow-color text-primary-foreground bg-gradient-to-r px-8 py-6 text-base shadow-lg transition-all duration-300 md:text-lg">
                    Buy Now
                  </Button>

                  <div className="flex items-center gap-2">
                    {currentGame.discount > 0 && (
                      <>
                        <span className="text-primary line-through">
                          ${currentGame.price.toFixed(2)}
                        </span>
                        <span className="text-secondary-foreground text-xl font-bold md:text-2xl">
                          ${currentGame.discountedPrice.toFixed(2)}
                        </span>
                        <Badge className="bg-primary text-primary-foreground bg-gradient-to-r">
                          -{currentGame.discount}%
                        </Badge>
                      </>
                    )}
                    {currentGame.discount === 0 && (
                      <span className="text-xl font-bold md:text-2xl">
                        ${currentGame.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 transform space-x-2">
        {heroGames.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-6' : 'bg-muted hover:bg-muted-foreground'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        onClick={prevSlide}
        className="bg-primary text-muted absolute top-1/2 left-4 z-10 -translate-y-1/2 transform rounded-full p-2 backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        onClick={nextSlide}
        className="bg-primary text-muted absolute top-1/2 right-4 z-10 -translate-y-1/2 transform rounded-full p-2 backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
