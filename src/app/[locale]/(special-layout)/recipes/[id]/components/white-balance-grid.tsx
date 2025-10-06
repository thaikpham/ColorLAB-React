"use client"

import Image from "next/image";
import { useState } from "react";

export const WhiteBalanceGrid = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // -1 to 1 range

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * -2 + 1; // -1 to 1 (invert y)
    setPosition({ x, y });
  };

  return (
    <div className={`flex flex-col items-center`}>
      {/* Labels */}
      <div className="text-lg font-bold text-secondary">G</div>
      <div className="flex items-center">
        <div className="text-lg font-bold mr-2 text-secondary">B</div>
        {/* Grid */}
        <div
          className={`relative size-24 cursor-pointer rounded-md overflow-hidden`}
          onClick={handleClick}
        >
          <Image src={'/white-balance.png'} alt={""}
            fill
            className="top-0 bottom-0 right-0 left-0 absolute scale-[109%] select-none"
          />
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="border border-black/20" />
            ))}
          </div>
          {/* Center lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/40" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-black/40" />
          {/* Dot */}
          <div
            className="absolute w-4 h-4 bg-orange-500 border-2 border-white rounded-full shadow-md transition-all duration-200"
            style={{
              left: `calc(${(position.x + 1) * 50}% - 0.5rem)`,
              top: `calc(${(1 - position.y) * 50}% - 0.5rem)`,
            }}
          />
        </div>
        <div className="font-bold ml-2 text-secondary">A</div>
      </div>
      <div className="font-bold mt-2 text-secondary">M</div>
      {/* Debug info (optional) */}
      {/* <div className="mt-2 text-sm text-muted-foreground"> */}
      {/*   x: {position.x.toFixed(2)}, y: {position.y.toFixed(2)} */}
      {/* </div> */}
    </div>
  );
}

export default WhiteBalanceGrid;
