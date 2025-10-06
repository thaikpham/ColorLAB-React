'use client'
import Image from "next/image";
import { SyntheticEvent, useCallback, useState } from "react";

interface CarouselImageProps {
  href: string
}

const CarouselImage = ({ href }: CarouselImageProps) => {
  const [orientation, setOrientation] = useState<"portrait" | "landscape" | null>(null);

  const handleImageLoad = useCallback((event: SyntheticEvent<HTMLImageElement, Event>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setOrientation(naturalWidth > naturalHeight ? "landscape" : "portrait");
  }, [])
  return (
    <div className="relative overflow-hidden w-full h-full"
      style={{
        aspectRatio: orientation === 'portrait' ? '2/3' : '3/2'
      }}
    >
      <Image className="object-cover select-none" src={href || "/white-balance.png"} alt={""} fill onLoad={handleImageLoad} />
    </div>
  )
}

export default CarouselImage;
