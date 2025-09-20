import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Flame, Zap, Award, Clock, Percent, Gamepad2, Tag, ChevronRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    return (
        <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-24 space-y-6">
                <div className="bg-card/35 border-border/50 rounded-xl border p-4 backdrop-blur-sm">
                    <h3 className="text-primary mb-3 flex items-center font-medium">
                        <Flame className="mr-2 h-4 w-4" />
                        DISCOVER
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-secondary group flex items-center transition-colors duration-300"
                            >
                                <Zap className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                <span>New & Noteworthy</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground group flex items-center transition-colors duration-300 hover:text-white"
                            >
                                <Award className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                <span>Top Sellers</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground group flex items-center transition-colors duration-300 hover:text-white"
                            >
                                <Clock className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                <span>Upcoming</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground group flex items-center transition-colors duration-300 hover:text-white"
                            >
                                <Percent className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                <span>Special Offers</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground group flex items-center transition-colors duration-300 hover:text-white"
                            >
                                <Gamepad2 className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                <span>VR Games</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="bg-card/35 border-border/50 rounded-xl border p-4 backdrop-blur-sm">
                    <h3 className="text-primary mb-3 flex items-center font-medium">
                        <Tag className="mr-2 h-4 w-4" />
                        CATEGORIES
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground group flex items-center justify-between transition-colors duration-300 hover:text-white"
                            >
                                <span>Action</span>
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground group flex items-center justify-between transition-colors duration-300 hover:text-white"
                            >
                                <span>Adventure</span>
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground group flex items-center justify-between transition-colors duration-300 hover:text-white"
                            >
                                <span>RPG</span>
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground group flex items-center justify-between transition-colors duration-300 hover:text-white"
                            >
                                <span>Strategy</span>
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground group flex items-center justify-between transition-colors duration-300 hover:text-white"
                            >
                                <span>Simulation</span>
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </li>
                        <li>
                            <Button
                                variant="link"
                                className="text-primary h-auto p-0 transition-colors duration-300"
                            >
                                View all categories
                            </Button>
                        </li>
                    </ul>
                </div>

                <div className="bg-card/35 border-border/50 rounded-xl border p-4 backdrop-blur-sm">
                    <h3 className="text-primary mb-3 flex items-center font-medium">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        TRENDING TAGS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Open World',
                            'RPG',
                            'Souls-like',
                            'FPS',
                            'Multiplayer',
                            'Roguelike',
                            'Survival',
                        ].map((tag, index) => (
                            <Badge
                                key={index}
                                className="bg-card-foreground/50 hover:bg-primary cursor-pointer transition-colors duration-300"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}