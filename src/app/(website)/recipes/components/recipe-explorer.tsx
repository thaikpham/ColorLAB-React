import { CategoryCard } from '@/components/category-card';
import { HeroCarousel } from '@/components/hero-carousel'
import { GameCard } from '@/components/recipe-card';
import { SpecialOfferCard } from '@/components/special-offer-card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, ChevronDown, Clock, Flame, Gamepad2, Percent, Sparkles, Tag, Trophy, Zap } from 'lucide-react'
import Image from 'next/image';
import React from 'react'


const featuredGames = [
    {
        title: 'Elden Ring',
        price: 59.99,
        discount: 0,
        image: '/placeholder.svg?height=300&width=600',
        tags: ['Action RPG', 'Souls-like', 'Open World'],
        rating: 4.9,
        players: '87,432',
    },
    {
        title: "Baldur's Gate 3",
        price: 59.99,
        discount: 0,
        image: '/placeholder.svg?height=300&width=600',
        tags: ['RPG', 'Turn-Based', 'Fantasy'],
        rating: 4.8,
        players: '65,219',
    },
    {
        title: 'Cyberpunk 2077',
        price: 59.99,
        discount: 50,
        image: '/placeholder.svg?height=300&width=600',
        tags: ['RPG', 'Open World', 'Sci-Fi'],
        rating: 4.5,
        players: '42,876',
    },
    {
        title: 'Starfield',
        price: 69.99,
        discount: 15,
        image: '/placeholder.svg?height=300&width=600',
        tags: ['RPG', 'Space', 'Open World'],
        rating: 4.3,
        players: '56,789',
    },
]

const specialOffers =
    [
        {
            title: 'Electronic Arts Publisher Sale',
            discount: 'Up to 95% OFF',
            image: '/placeholder.svg?height=300&width=600',
            endDate: 'May 5',
            gradient: 'from-purple-500 to-blue-500',
        },
        {
            title: 'Spring in the Shire',
            discount: 'Up to 90% OFF',
            image: '/placeholder.svg?height=300&width=600',
            endDate: 'May 5',
            gradient: 'from-green-500 to-yellow-500',
        },
        {
            title: 'Subsistence',
            discount: '35% OFF',
            image: '/placeholder.svg?height=300&width=600',
            endDate: "Today's Deal",
            gradient: 'from-red-500 to-orange-500',
        },
    ];

const categories =
    [
        { name: 'Action', icon: <Zap className="h-8 w-8" />, color: 'from-red-500 to-orange-500' },
        {
            name: 'Adventure',
            icon: <Gamepad2 className="h-8 w-8" />,
            color: 'from-primary to-primary/50',
        },
        { name: 'RPG', icon: <Award className="h-8 w-8" />, color: 'from-purple-500 to-indigo-500' },
        {
            name: 'Strategy',
            icon: <ChevronDown className="h-8 w-8" />,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            name: 'Simulation',
            icon: <Tag className="h-8 w-8" />,
            color: 'from-amber-500 to-yellow-500',
        },
        { name: 'Sports', icon: <Trophy className="h-8 w-8" />, color: 'from-green-500 to-lime-500' },
    ];

const updatedGames = [
    {
        title: 'Apex Legends',
        update: 'Season 20',
        price: 0,
        image: '/placeholder.svg?height=300&width=600',
        tags: ['FPS', 'Battle Royale', 'Multiplayer'],
        rating: 4.6,
        players: '254,789',
    },
    {
        title: 'Destiny 2',
        update: 'The Final Shape',
        price: 29.99,
        image: '/placeholder.svg?height=300&width=600',
        tags: ['FPS', 'MMO', 'Sci-Fi'],
        rating: 4.4,
        players: '132,456',
    },
    {
        title: 'Path of Exile',
        update: 'Affliction League',
        price: 0,
        image: '/placeholder.svg?height=300&width=600',
        tags: ['ARPG', 'Free to Play', 'Multiplayer'],
        rating: 4.7,
        players: '87,321',
    },
    {
        title: 'Counter-Strike 2',
        update: 'Operation Wildfire',
        price: 0,
        image: '/placeholder.svg?height=300&width=600',
        tags: ['FPS', 'Competitive', 'Multiplayer'],
        rating: 4.8,
        players: '876,543',
    },
];

const liveStreams = [
    {
        title: 'Elden Ring - First Playthrough',
        streamer: 'GameMaster64',
        viewers: '12,456',
        image: '/placeholder.svg?height=300&width=600',
    },
    {
        title: 'CS2 - Competitive Matches',
        streamer: 'ProGamer123',
        viewers: '8,932',
        image: '/placeholder.svg?height=300&width=600',
    },
    {
        title: "Baldur's Gate 3 - Tactician Mode",
        streamer: 'RPGLover',
        viewers: '5,678',
        image: '/placeholder.svg?height=300&width=600',
    },
];

export default function RecipeExplorer() {
    return (
        <main className="flex-1">
            {/* Hero Carousel */}
            <section className="mb-10">
                <HeroCarousel />
            </section>

            {/* Featured & Recommended */}
            <section className="mb-10">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-primary flex items-center text-2xl font-bold">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Featured & Recommended
                    </h2>
                    <Button
                        variant="outline"
                        className="border-border bg-primary-foreground text-primary cursor-pointer transition-all duration-300"
                    >
                        View All
                    </Button>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {featuredGames.map((game, index) => (
                        <GameCard key={index} game={game} />
                    ))}
                </div>
            </section>

            {/* Special Offers */}
            <section className="mb-10">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="flex items-center text-2xl font-bold">
                        <Percent className="mr-2 h-5 w-5 text-emerald-400" />
                        Special Offers
                    </h2>
                    <Button
                        variant="outline"
                        className="border-border bg-primary-foreground text-primary transition-all duration-300"
                    >
                        View All
                    </Button>
                </div>
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="bg-primary/15 border-border/50 mb-6 rounded-lg border p-1 backdrop-blur-sm">
                        <TabsTrigger
                            value="all"
                            className="data-[state=active]:from-primary data-[state=active]:to-primary/50 data-[state=active]:text-primary-foreground rounded-md transition-all duration-300 data-[state=active]:bg-gradient-to-r"
                        >
                            All Deals
                        </TabsTrigger>
                        <TabsTrigger
                            value="weekend"
                            className="data-[state=active]:from-primary data-[state=active]:to-primary/50 data-[state=active]:text-primary-foreground rounded-md transition-all duration-300 data-[state=active]:bg-gradient-to-r"
                        >
                            Weekend Deals
                        </TabsTrigger>
                        <TabsTrigger
                            value="publisher"
                            className="data-[state=active]:from-primary data-[state=active]:to-primary/50 data-[state=active]:text-primary-foreground rounded-md transition-all duration-300 data-[state=active]:bg-gradient-to-r"
                        >
                            Publisher Sales
                        </TabsTrigger>
                        <TabsTrigger
                            value="seasonal"
                            className="data-[state=active]:from-primary data-[state=active]:to-primary/50 data-[state=active]:text-primary-foreground rounded-md transition-all duration-300 data-[state=active]:bg-gradient-to-r"
                        >
                            Seasonal
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-0">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {specialOffers.map((deal, index) => (
                                <SpecialOfferCard key={index} deal={deal} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="weekend" className="mt-0">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {/* Weekend deals content */}
                            <SpecialOfferCard
                                deal={{
                                    title: 'Spring in the Shire',
                                    discount: 'Up to 90% OFF',
                                    image: '/placeholder.svg?height=300&width=600',
                                    endDate: 'May 5',
                                    gradient: 'from-green-500 to-yellow-500',
                                }}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="publisher" className="mt-0">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {/* Publisher sales content */}
                            <SpecialOfferCard
                                deal={{
                                    title: 'Electronic Arts Publisher Sale',
                                    discount: 'Up to 95% OFF',
                                    image: '/placeholder.svg?height=300&width=600',
                                    endDate: 'May 5',
                                    gradient: 'from-purple-500 to-blue-500',
                                }}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="seasonal" className="mt-0">
                        {/* Seasonal content */}
                        <div className="border-border/50 rounded-xl border bg-card/30 p-8 text-center text-primary backdrop-blur-sm">
                            <Sparkles className="mx-auto mb-4 h-12 w-12 text-emerald-400 opacity-50" />
                            <p className="text-lg">No active seasonal sales at the moment.</p>
                            <p className="mt-2">Check back soon for our Summer Sale!</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>

            {/* Categories Browse */}
            <section className="mb-10">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="flex items-center text-2xl font-bold">
                        <Tag className="mr-2 h-5 w-5 text-emerald-400" />
                        Browse by Category
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </div>
            </section>

            {/* Recently Updated */}
            <section className="mb-10">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="flex items-center text-2xl font-bold">
                        <Clock className="mr-2 h-5 w-5 text-emerald-400" />
                        Recently Updated
                    </h2>
                    <Button
                        variant="outline"
                        className="border-zinc-700 transition-all duration-300 hover:border-emerald-500 hover:bg-zinc-800"
                    >
                        View All
                    </Button>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {updatedGames.map((game, index) => (
                        <GameCard key={index} game={game} />
                    ))}
                </div>
            </section>

            {/* Live Streams */}
            <section className="mb-10">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="flex items-center text-2xl font-bold">
                        <Flame className="mr-2 h-5 w-5 text-emerald-400" />
                        Live Streams
                    </h2>
                    <Button
                        variant="outline"
                        className="border-zinc-700 transition-all duration-300 hover:border-emerald-500 hover:bg-zinc-800"
                    >
                        View All
                    </Button>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {liveStreams.map((stream, index) => (
                        <div key={index} className="group relative">
                            <div className="bg-primary/25 border-border/50 group-hover:border-muted group-hover:shadow-shadow-color/10 overflow-hidden rounded-lg border backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg">
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={stream.image || '/placeholder.svg'}
                                        alt={stream.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-2 left-2 flex items-center gap-2">
                                        <Badge className="flex items-center gap-1 bg-red-600">
                                            <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                                            LIVE
                                        </Badge>
                                        <Badge className="bg-primary/80 backdrop-blur-sm">
                                            {stream.viewers} viewers
                                        </Badge>
                                    </div>
                                    <div className="from-primary/50 absolute inset-0 flex items-end bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Button className="bg-primary text-primary-foreground m-3 transition-colors duration-300">
                                            Watch Stream
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-1 font-semibold transition-colors duration-300 group-hover:text-emerald-400">
                                        {stream.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-6 w-6 border border-zinc-700">
                                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-xs">
                                                {stream.streamer.substring(0, 2).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm text-zinc-300">{stream.streamer}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}