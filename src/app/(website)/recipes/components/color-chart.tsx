"use client"
import { RecipeDot } from "@/type/recipe.type";
import ColorDot from "./color-dot"
import { memo, useState } from "react"
import { useCallback } from "react"

interface ColorChartProps {
  recipes: RecipeDot[]
}
const ColorChart = ({ recipes }: ColorChartProps) => {
  console.log('recipes', recipes)
  const [hoveredPreset, setHoveredPreset] = useState<RecipeDot | null>(null);

  const handleNodeHover = useCallback((preset: RecipeDot | null) => {
    setHoveredPreset(preset);
  }, []);

  return (
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

        {recipes?.map((preset) => (
          <ColorDot
            key={preset.id}
            hoveredPreset={hoveredPreset}
            preset={preset}
            handleNodeHover={handleNodeHover} />
        ))}
      </g>
    </svg >
  )
}

export default memo(ColorChart);
