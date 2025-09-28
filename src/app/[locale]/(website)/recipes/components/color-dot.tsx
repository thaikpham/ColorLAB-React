"use client"
import { useSelectedRecipeStore } from "@/store/selectedRecipeStore";
import { RecipeDot } from "@/type/recipe.type";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";

interface ColorDotProps {
  hoveredPreset: RecipeDot | null;
  preset: RecipeDot;
  handleNodeHover: (preset: RecipeDot | null) => void;
}

const ColorDot = ({ preset, hoveredPreset, handleNodeHover }: ColorDotProps) => {
  const setSelectedRecipe = useSelectedRecipeStore(s => s.setSelectedRecipe);
  const selectedRecipe = useSelectedRecipeStore(s => s.selectedRecipe);
  const { push } = useRouter();

  const handleNodeClick = useCallback(
    () => {
      push(`/recipes/${preset.id}`);
      setTimeout(() => {
        setSelectedRecipe(preset);
      }, 500);
    }, [preset, push, setSelectedRecipe]);

  return (
    <>
      <g
        key={preset.id}
        transform={`translate(${preset.coords.x}, ${preset.coords.y})`}
        className="cursor-pointer"
        onClick={handleNodeClick}
        onMouseEnter={() => handleNodeHover(preset)}
        onMouseLeave={() => handleNodeHover(null)}
      >
        <circle
          r={10}
          fill={preset.personalityColor}
          filter="url(#soft-glow)"
          opacity={hoveredPreset?.id === preset.id ? 0.6 : 0.2}
          className="transition-all duration-300"
        />

        <circle
          r={10}
          fill={preset.personalityColor}
          strokeWidth="1"
          filter={hoveredPreset?.id === preset.id ? 'url(#hover-blur)' : 'none'}
          className={`transition-all duration-300 ${hoveredPreset?.id === preset.id ? 'scale-125' : 'scale-100'} ${preset.id === selectedRecipe?.id ? `stroke-primary-foreground stroke-3 animate-ping` : ''}`}
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
      <g
        transform={`translate(${preset.coords.x + 15}, ${preset.coords.y + 5})`}
        className={`${preset.id === hoveredPreset?.id ? "opacity-100 block" : "opacity-0 invisible"} transition-all duration-400`}
      >
        <rect
          x="0"
          y="-15"
          width={preset.name.length * 7 + 16}
          height="20"
          rx="4"
          className='fill-transparent border-border rounded-lg '
        />
        <text x="5" y="0" className="fill-primary text-xs font-bold">
          {preset.name}
        </text>
      </g>
    </>
  )
}

export default memo(ColorDot);
