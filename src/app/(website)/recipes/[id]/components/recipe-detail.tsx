"use client"
import { HeroHeader } from "@/components/header";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecipeData } from "@/type/recipe.type";
import { ChevronRight, MemoryStickIcon as Memory, Heart, ShoppingCart, Share2, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo, useCallback, useMemo } from "react";
import { toast } from "sonner";

interface RecipeDetailComponentProps {
  recipe: RecipeData;
}

const currentLang = 'en';

const mainSettingsRecord: Record<string, string> = {
  "Black level": "Black Level",
  "Gamma": "Gamma",
  "Black Gamma": "Knee",
  "Knee": "Knee",
  "Color Mode": "Color Mode",
  "Saturation": "Saturation",
  "Color Phase": "Color Phase",
}

const RecipeDetailComponent = ({ recipe }: RecipeDetailComponentProps) => {
  const game = useMemo(() => {
    return {
      id: 'elden-ring',
      title: 'Elden Ring',
      description:
        'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
      longDescription:
        "Elden Ring, developed by FromSoftware Inc. and produced by BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG and FromSoftware's largest game to date, set in a sprawling realm steeped in a rich and bloody history crafted by Hidetaka Miyazaki – creator of the influential and critically acclaimed DARK SOULS video game series; and George R.R. Martin – author of The New York Times best-selling fantasy series, A Song of Ice and Fire. Mystery, adventure, and danger lurk around every corner in the largest FromSoftware game to-date.",
      price: 59.99,
      discount: 0,
      releaseDate: 'February 25, 2022',
      developer: 'FromSoftware Inc.',
      publisher: 'BANDAI NAMCO Entertainment',
      tags: [
        'Action RPG',
        'Souls-like',
        'Open World',
        'Fantasy',
        'Difficult',
        'Third Person',
        'Dark Fantasy',
        'Atmospheric',
      ],
      features: [
        'Single-player',
        'Online Co-op',
        'PvP',
        'Controller Support',
        'Steam Achievements',
        'Steam Cloud',
      ],
      rating: 4.8,
      reviews: {
        total: 1245789,
        positive: 1183500,
        recent: {
          total: 12458,
          positive: 11835,
        },
      },
      systemRequirements: {
        minimum: {
          os: 'Windows 10',
          processor: 'INTEL CORE I5-8400 or AMD RYZEN 3 3300X',
          memory: '12 GB RAM',
          graphics: 'NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB',
          storage: '60 GB available space',
        },
        recommended: {
          os: 'Windows 10/11',
          processor: 'INTEL CORE I7-8700K or AMD RYZEN 5 3600X',
          memory: '16 GB RAM',
          graphics: 'NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB',
          storage: '60 GB available space SSD',
        },
      },
      screenshots: [
        '/placeholder.svg?height=600&width=1200',
        '/placeholder.svg?height=600&width=1200',
        '/placeholder.svg?height=600&width=1200',
        '/placeholder.svg?height=600&width=1200',
        '/placeholder.svg?height=600&width=1200',
      ],
      headerImage: '/placeholder.svg?height=600&width=1400',
    }
  }, []);

  const positivePercentage = useMemo(
    () => Math.round((game.reviews.positive / game.reviews.total) * 100),
    [game],
  );
  const recentPositivePercentage = useMemo(
    () => Math.round((game.reviews.recent.positive / game.reviews.recent.total) * 100),
    [game],
  );

  const handleAddToCart = useCallback(() => {
    toast('Added To Cart', {
      description: 'Item has been added To Cart',
    });
  }, []);

  return (
    <>
      <HeroHeader />
      {/* Header with game title and breadcrumbs */}
      <AnimatedGroup>
        <div className="relative">
          <div className="absolute inset-0 bg-transparent">
            <Image
              src={game.headerImage || '/placeholder.svg'}
              alt={recipe.name}
              fill
              className="-z-10 object-cover opacity-40"
              priority
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 pt-24 pb-8">
            <div className="text-muted-foreground mb-4 flex items-center gap-2 text-sm">
              <Link href="/" className="transition hover:text-white">
                Store
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="#" className="transition hover:text-white">
                Games
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="#" className="transition hover:text-white">
                Action RPG
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary">{recipe.name}</span>
            </div>

            <h1 className="text-primary text-4xl font-bold md:text-5xl">{recipe.name}</h1>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left column - Game media and info */}
            <div className="lg:col-span-2">
              {/* Game trailer/screenshots carousel */}
              <div className="mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {game.screenshots.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <div className="relative overflow-hidden rounded-lg">
                          <Image
                            src={screenshot || '/placeholder.svg'}
                            alt={`${recipe.name} screenshot ${index + 1}`}
                            width={1200}
                            height={600}
                            className="aspect-video w-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>

              {/* Thumbnail gallery */}
              <div className="mb-8 grid grid-cols-5 gap-2">
                {game.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer overflow-hidden rounded-md transition hover:opacity-80"
                  >
                    <Image
                      src={screenshot || '/placeholder.svg'}
                      alt={`Thumbnail ${index + 1}`}
                      width={200}
                      height={100}
                      className="aspect-video w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Game description */}
              <div className="mb-8">
                <h2 className="text-primary mb-4 font-bold">About this recipe</h2>
                <p className="text-secondary-foreground mb-4">{recipe.description[currentLang]}</p>
              </div>

              {/* Reviews section */}
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold">Recipe Reviews</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="bg-card/75 rounded-lg p-4">
                    <h3 className="mb-2 font-semibold">All Reviews</h3>
                    <div className="mb-2 flex items-center gap-4">
                      <div className="text-primary text-3xl font-bold">{positivePercentage}%</div>
                      <div>
                        <div className="font-medium">Overwhelmingly Positive</div>
                        <div className="text-secondary text-sm">
                          {game.reviews.total.toLocaleString()} reviews
                        </div>
                      </div>
                    </div>
                    <Progress value={positivePercentage} className="h-2 bg-secondary" />
                  </div>
                  <div className="bg-card rounded-lg p-4">
                    <h3 className="mb-2 font-semibold">Recent Reviews</h3>
                    <div className="mb-2 flex items-center gap-4">
                      <div className="text-primary text-3xl font-bold">
                        {recentPositivePercentage}%
                      </div>
                      <div>
                        <div className="font-medium">Very Positive</div>
                        <div className="text-secondary text-sm">
                          {game.reviews.recent.total.toLocaleString()} reviews
                        </div>
                      </div>
                    </div>
                    <Progress value={recentPositivePercentage} className="h-2 bg-zinc-700" />
                  </div>
                </div>
              </div>

              {/* System requirements */}
              <div>
                <h2 className="mb-4 text-xl font-bold">Color Recipes</h2>
                <Tabs defaultValue="main" className="w-full">
                  <TabsList className="bg-card mb-4 grid w-full grid-cols-2">
                    <TabsTrigger className="cursor-pointer" value="main">
                      Main Settings
                    </TabsTrigger>
                    <TabsTrigger className="cursor-pointer" value="color-depth">
                      Recommended
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="main" className="mt-0">
                    <div className="grid grid-cols-3 bg-card space-y-4 rounded-lg p-2">
                      {
                        (Object.keys(recipe.colorDepth) as Array<keyof RecipeData['colorDepth']>).map((item, index) =>
                          <div key={index} className="flex justify-center items-center gap-3 py-2">
                            <Memory className="text-secondary my-0.5 h-6 w-6 shrink-0" />
                            <div>
                              <span className="font-medium">{item}</span>
                              <span className="text-secondary-foreground"> {recipe.colorDepth[item]} </span>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </TabsContent>
                  <TabsContent value="color-depth" className="mt-0">
                    <div className="grid grid-cols-3 bg-card space-y-4 rounded-lg p-2 pl-16">
                      {
                        (Object.keys(recipe.settings) as Array<keyof RecipeData['settings']>).map((item, index) =>
                          <div key={index} className="flex items-center gap-3 py-2">
                            <Memory className="text-secondary my-0.5 h-6 w-6 shrink-0" />
                            <div>
                              <span className="font-medium">{mainSettingsRecord[item]}</span>
                              <span className="text-secondary-foreground"> {recipe.settings[item]} </span>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Right column - Purchase info and metadata */}
            <div>
              {/* Game cover image */}
              <div className="mb-6">
                <Image
                  src={game.screenshots[0] || '/placeholder.svg'}
                  alt={recipe.name}
                  width={600}
                  height={300}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Purchase card */}
              <div className="bg-card mb-6 rounded-lg p-6">
                <h2 className="mb-4 text-xl font-bold">Buy {recipe.name}</h2>

                {game.discount > 0 ? (
                  <div className="mb-4 flex items-center gap-3">
                    <Badge className="bg-background text-primary">-{game.discount}%</Badge>
                    <div className="flex items-center gap-2">
                      <span className="text-primary line-through">${game.price.toFixed(2)}</span>
                      <span className="text-2xl font-bold">
                        ${(game.price * (1 - game.discount / 100)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 text-2xl font-bold">${game.price.toFixed(2)}</div>
                )}

                <div className="grid gap-3">
                  <Button className="bg-muted-foreground w-full" onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-border w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="border-border w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Game info card */}
              <div className="bg-card mb-6 rounded-lg p-6">
                <h3 className="mb-4 font-semibold">Game Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Developer:</span>
                    <Link href="#" className="text-primary hover:underline">
                      {game.developer}
                    </Link>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Publisher:</span>
                    <Link href="#" className="text-primary hover:underline">
                      {game.publisher}
                    </Link>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Release Date:</span>
                    <span>{game.releaseDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">User Rating:</span>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{game.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Players:</span>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      <span>Single-player, Multi-player</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-card rounded-lg p-6">
                <h3 className="mb-4 font-semibold">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-border cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedGroup >
    </>
  )
}

export default memo(RecipeDetailComponent);
