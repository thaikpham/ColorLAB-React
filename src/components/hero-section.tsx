import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TextEffect } from '@/components/ui/text-effect';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { HeroHeader } from './header';
import ContentSection from './content-1';
import FAQs from './faqs';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as const;

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <section>
        <div className="relative py-24">
          <div className="absolute inset-0 -z-10 size-full bg-transparent"></div>
          <div className="mx-auto max-w-5xl px-6">
            <div className="sm:mx-auto lg:mt-0 lg:mr-auto">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-primary mt-8 max-w-2xl text-5xl font-bold text-balance md:text-6xl lg:mt-16"
              >
                Find Your Signature Style
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="text-muted-foreground mt-8 max-w-2xl text-lg text-pretty"
              >
                Discover and create unique color recipes for your Sony Alpha camera, powered by AI.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex items-center gap-2"
              >
                <div
                  key={1}
                  className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                >
                  <Button asChild size="lg" className="rounded-xl px-5 text-base">
                    <Link href="/recipes">
                      <span className="text-nowrap">Explore</span>
                    </Link>
                  </Button>
                </div>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-11 rounded-xl bg-transparent px-5 text-base"
                >
                  <Link href="#">
                    <span className="text-muted-foreground text-nowrap">Request a demo</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative mt-8 -mr-56 overflow-hidden mask-b-from-55% px-2 sm:mt-12 sm:mr-0 md:mt-20">
              <div className="ring-background bg-background/50 relative mx-auto max-w-xl overflow-hidden rounded-2xl border p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 lg:h-[500] lg:max-w-5xl dark:inset-shadow-white/20">
                <Image
                  className="border-border/25 absolute z-[2] hidden aspect-[15/8] rounded-2xl border opacity-75 dark:block"
                  objectFit="cover"
                  src="/dark-banner.png"
                  alt="app screen"
                  fill
                />
                <Image
                  className="border-border/25 absolute z-[2] aspect-[15/8] rounded-2xl border opacity-75 dark:hidden"
                  objectFit="cover"
                  src="/banner.jpg"
                  alt="app screen"
                  fill
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      <ContentSection />

      <section className="bg-transparent pt-16 pb-16 md:pb-32">
        <div className="group relative m-auto max-w-5xl px-6">
          <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
            <Link href="/" className="block text-sm duration-150 hover:opacity-75">
              <span> Meet Our Customers</span>

              <ChevronRight className="ml-1 inline-block size-3" />
            </Link>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 group-hover:blur-xs sm:gap-x-16 sm:gap-y-14">
            <div className="flex">
              <Image
                className="mx-auto h-5 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                alt="Nvidia Logo"
                height="20"
                width="90"
              />
            </div>

            <div className="flex">
              <Image
                className="mx-auto h-4 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/column.svg"
                alt="Column Logo"
                height="16"
                width="90"
              />
            </div>
            <div className="flex">
              <Image
                className="mx-auto h-4 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/github.svg"
                alt="GitHub Logo"
                height="16"
                width="64"
              />
            </div>
            <div className="flex">
              <Image
                className="mx-auto h-5 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nike.svg"
                alt="Nike Logo"
                height="20"
                width="60"
              />
            </div>
            <div className="flex">
              <Image
                className="mx-auto h-5 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                alt="Lemon Squeezy Logo"
                height="20"
                width="120"
              />
            </div>
            <div className="flex">
              <Image
                className="mx-auto h-4 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/laravel.svg"
                alt="Laravel Logo"
                height="16"
                width="90"
              />
            </div>
            <div className="flex">
              <Image
                className="mx-auto h-7 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/lilly.svg"
                alt="Lilly Logo"
                height="28"
                width="80"
              />
            </div>

            <div className="flex">
              <Image
                className="mx-auto h-6 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/openai.svg"
                alt="OpenAI Logo"
                height="24"
                width="100"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQs />
    </>
  );
}
