"use client"
import { UserRound } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const MenuButton = () => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = useCallback(() => {
    setClicked(prev => !prev);
  }, [])
  return (
    <div className={`fixed bottom-10 right-10 bg-card/50 rounded-2xl ${isClicked && 'scale-125'} ease-in-out transition-all duration-300 `}>
      <div className="relative w-10 h-10 m-4 z-10">
        <Image
          src='/logo.png'
          alt='logo'
          fill
          onClick={handleClick}
          className={`absolute bottom-0 right-0 left-0 top-0 ${isClicked && 'rotate-225'} transition-all ease-in-out duration-500 cursor-default `}
        />
        <div
          className={`flex items-center justify-center absolute bottom-0 right-0 left-0 top-0 bg-destructive w-12 h-12
            ${isClicked ? 'translate-x-[-126px] translate-y-[30px] block opacity-100 scale-100' : 'invisible opacity-0 scale-0'}
            transition-all ease-in-out duration-100 rounded-2xl hover:scale-110`}
        >

          <UserRound size={20} />
        </div>
        <div
          className={`flex items-center justify-center absolute bottom-0 right-0 left-0 top-0 bg-destructive w-12 h-12
            ${isClicked ? 'translate-x-[-124px] translate-y-[-35px] block opacity-100 scale-100' : 'invisible opacity-0 scale-0'}
            transition-all ease-in-out duration-200 rounded-2xl hover:scale-110`}
        >
          <UserRound size={20} />
        </div>
        <div
          className={`flex items-center justify-center absolute bottom-0 right-0 left-0 top-0 bg-destructive w-12 h-12
            ${isClicked ? 'translate-x-[-91px] translate-y-[-91px] block opacity-100 scale-100' : 'invisible opacity-0 scale-0'}
            transition-all ease-in-out duration-300 rounded-2xl hover:scale-110`}
        >
          <UserRound size={20} />
        </div>
        <div
          className={`flex items-center justify-center absolute bottom-0 right-0 left-0 top-0 bg-destructive w-12 h-12
            ${isClicked ? 'translate-x-[-35px] translate-y-[-124px] block opacity-100 scale-100' : 'invisible opacity-0 scale-0'}
            transition-all ease-in-out duration-400 rounded-2xl hover:scale-110`}
        >
          <UserRound size={20} />
        </div>
        <div
          className={`flex items-center justify-center absolute bottom-0 right-0 left-0 top-0 bg-destructive w-12 h-12
            ${isClicked ? 'translate-x-[29px] translate-y-[-126px] block opacity-100 scale-100' : 'invisible opacity-0 scale-0'}
            transition-all ease-in-out duration-500 rounded-2xl hover:scale-110`}
        >
          <UserRound size={20} />
        </div>
      </div >
    </div >
  )
}

export default MenuButton;
