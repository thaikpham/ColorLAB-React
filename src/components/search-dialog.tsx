'use client';

import { useState } from 'react';
import { Search, X, Tag, Clock, Gamepad2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock search results
  const searchResults = {
    games: [
      {
        id: 1,
        title: 'Elden Ring',
        image: '/placeholder.svg?height=100&width=200',
        price: 59.99,
        tags: ['Action RPG', 'Open World'],
      },
      {
        id: 2,
        title: "Baldur's Gate 3",
        image: '/placeholder.svg?height=100&width=200',
        price: 59.99,
        tags: ['RPG', 'Fantasy'],
      },
      {
        id: 3,
        title: 'Cyberpunk 2077',
        image: '/placeholder.svg?height=100&width=200',
        price: 29.99,
        tags: ['RPG', 'Open World'],
      },
    ],
    categories: [
      { id: 1, name: 'Action RPG', count: 245 },
      { id: 2, name: 'Open World', count: 189 },
      { id: 3, name: 'Strategy', count: 156 },
    ],
    recent: [
      { id: 1, title: 'Starfield', image: '/placeholder.svg?height=100&width=200' },
      { id: 2, title: 'Counter-Strike 2', image: '/placeholder.svg?height=100&width=200' },
    ],
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="border-zinc-800 bg-zinc-900 sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="sr-only">Search</DialogTitle>
          <div className="relative">
            <Search className="absolute top-3 left-3 h-5 w-5 text-zinc-400" />
            <Input
              placeholder="Search games, publishers, genres..."
              className="border-zinc-700 bg-zinc-800 py-6 pr-10 pl-10 text-lg focus-visible:ring-emerald-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-zinc-400 hover:text-white"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>
        </DialogHeader>

        <Tabs defaultValue="all" className="mt-2">
          <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
            <TabsTrigger value="all">All Results</TabsTrigger>
            <TabsTrigger value="games">Games</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4 space-y-6">
            {/* Recent searches */}
            {!searchQuery && (
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-medium text-zinc-400">Recent Searches</h3>
                  <Button variant="link" className="h-auto p-0 text-emerald-400">
                    Clear
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {searchResults.recent.map((item) => (
                    <Link
                      key={item.id}
                      href="#"
                      className="flex items-center gap-3 rounded-md p-2 transition hover:bg-zinc-800"
                      onClick={() => setIsOpen(false)}
                    >
                      <Clock className="h-4 w-4 text-zinc-400" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Games */}
            {searchQuery && (
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-medium text-zinc-400">Games</h3>
                  <Button variant="link" className="h-auto p-0 text-emerald-400">
                    View All
                  </Button>
                </div>
                <div className="space-y-3">
                  {searchResults.games.map((game) => (
                    <Link
                      key={game.id}
                      href="#"
                      className="flex items-center gap-4 rounded-md p-2 transition hover:bg-zinc-800"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image
                        src={game.image || '/placeholder.svg'}
                        alt={game.title}
                        width={80}
                        height={40}
                        className="h-12 w-20 rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{game.title}</h4>
                        <div className="mt-1 flex items-center gap-2">
                          {game.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="border-zinc-700 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="font-bold">${game.price.toFixed(2)}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            {searchQuery && (
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-medium text-zinc-400">Categories</h3>
                  <Button variant="link" className="h-auto p-0 text-emerald-400">
                    View All
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {searchResults.categories.map((category) => (
                    <Link
                      key={category.id}
                      href="#"
                      className="flex items-center justify-between rounded-md p-2 transition hover:bg-zinc-800"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <Tag className="h-4 w-4 text-zinc-400" />
                        <span>{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-zinc-700">
                        {category.count}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="games" className="mt-4">
            {searchQuery ? (
              <div className="space-y-3">
                {searchResults.games.map((game) => (
                  <Link
                    key={game.id}
                    href="#"
                    className="flex items-center gap-4 rounded-md p-2 transition hover:bg-zinc-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={game.image || '/placeholder.svg'}
                      alt={game.title}
                      width={80}
                      height={40}
                      className="h-12 w-20 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{game.title}</h4>
                      <div className="mt-1 flex items-center gap-2">
                        {game.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="border-zinc-700 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="font-bold">${game.price.toFixed(2)}</div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-zinc-400">
                <Gamepad2 className="mb-4 h-12 w-12" />
                <p>Enter a search term to find games</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="categories" className="mt-4">
            {searchQuery ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {searchResults.categories.map((category) => (
                  <Link
                    key={category.id}
                    href="#"
                    className="flex items-center justify-between rounded-md p-3 transition hover:bg-zinc-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <Tag className="h-4 w-4 text-zinc-400" />
                      <span>{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="bg-zinc-700">
                      {category.count}
                    </Badge>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-zinc-400">
                <Tag className="mb-4 h-12 w-12" />
                <p>Enter a search term to find categories</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
