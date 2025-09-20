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
  const { setSelectedRecipe, selectedRecipe } = useSelectedRecipeStore();
  const { push } = useRouter();

  const handleNodeClick = useCallback(
    () => {
      push(`/recipes/${preset.id}`);
      setTimeout(() => {
        setSelectedRecipe(preset);
      }, 500);
    }, [preset, push, setSelectedRecipe]);

  return (
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
        // stroke={preset?.id === preset.id ? '#000000' : 'transparent'}
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
  )
}

export default memo(ColorDot);
