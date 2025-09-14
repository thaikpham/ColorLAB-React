'use client';

import { RecipeData } from '@/type/recipe.type';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { AnimatedGroup } from './ui/animated-group';

interface ColorMapProps {
  recipes: RecipeData[]
}

export default function ColorMap({ recipes }: ColorMapProps) {
  const { push } = useRouter();
  const [selectedPreset, setSelectedPreset] = useState<string>("");
  const [hoveredPreset, setHoveredPreset] = useState<RecipeData | null>(null);

  const handleNodeClick = useCallback(
    (id: string) => {
      setSelectedPreset(id);
      push(`/recipes/${id}`);
    },
    [push],
  );

  const handleNodeHover = useCallback((preset: RecipeData | null) => {
    setHoveredPreset(preset);
  }, []);

  return (
    <AnimatedGroup>
      <div className="flex items-center w-full min-h-[calc(100vh-66px)]">
        <div className="relative bg-transparent flex-1 w-full">
          <h1 className='text-primary font-bold text-3xl text-center'>Choose Your Color</h1>
          <svg viewBox="0 0 896 626" className="mx-auto h-auto w-full max-w-5xl">
            <g transform="translate(30,40)">
              <rect x="0" y="0" width="836" height="536" fill="none" rx="8" />

              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" className='stroke-primary/35 dark:stroke-primary/0' strokeWidth="1" />
                </pattern>
                <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                </filter>
                <filter id="hover-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                  <feOffset in="blur" dx="0" dy="0" result="offset" />
                  <feMerge>
                    <feMergeNode in="offset" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect x="0" y="0" width="836" height="536" fill="url(#grid)" />

              <text className="fill-primary text-sm font-medium" x="418" y="20" textAnchor="middle">
                ↑ PUNCHY CONTRAST
              </text>
              <text
                className="fill-primary text-sm font-medium"
                x="418"
                y="525"
                textAnchor="middle"
              >
                ↓ SOFT CONTRAST
              </text>
              <text
                className="fill-primary text-sm font-medium"
                x="20"
                y="270"
                textAnchor="middle"
                transform="rotate(-90, 20, 270)"
              >
                ← COOL
              </text>
              <text
                className="fill-primary text-sm font-medium"
                x="816"
                y="270"
                textAnchor="middle"
                transform="rotate(90, 816, 270)"
              >
                WARM →
              </text>

              {recipes.map((preset) => (
                <g
                  key={preset.id}
                  transform={`translate(${preset.coords.x}, ${preset.coords.y})`}
                  className="cursor-pointer"
                  onClick={() => handleNodeClick(preset.id)}
                  onMouseEnter={() => handleNodeHover(preset)}
                  onMouseLeave={() => handleNodeHover(null)}
                >
                  <circle
                    r={preset.radius || 10}
                    fill={preset.personalityColor}
                    filter="url(#soft-glow)"
                    opacity={hoveredPreset?.id === preset.id ? 0.6 : 0.2}
                    className="transition-all duration-300"
                  />

                  <circle
                    r={preset.radius || 10}
                    fill={preset.personalityColor}
                    stroke={selectedPreset === preset.id ? '#1f2937' : 'transparent'}
                    strokeWidth="1"
                    filter={hoveredPreset?.id === preset.id ? 'url(#hover-blur)' : 'none'}
                    className={`transition-all duration-300 ${hoveredPreset?.id === preset.id ? 'scale-125' : 'scale-100'
                      }`}
                  />

                  {preset.trending && (
                    <polygon
                      className="z-20"
                      points="0,-8 2.4,-2.4 8,0 2.4,2.4 0,8 -2.4,2.4 -8,0 -2.4,-2.4"
                      fill="#FFC700"
                      stroke="#E6B800"
                      strokeWidth="0.5"
                      transform="translate(8, -8) scale(0.8)"
                    />
                  )}
                </g>
              ))}

              {hoveredPreset && (
                <g
                  transform={`translate(${hoveredPreset.coords.x + 15}, ${hoveredPreset.coords.y + 5})`}
                >
                  <rect
                    x="0"
                    y="-15"
                    width={hoveredPreset.name.length * 7 + 16}
                    height="20"
                    rx="4"
                    className='fill-transparent border-border rounded-lg '
                  />
                  <text x="5" y="0" className="fill-primary text-xs font-bold">
                    {hoveredPreset.name}
                  </text>
                </g>
              )}
            </g>
          </svg>
        </div>
      </div>
    </AnimatedGroup>
  );
}
