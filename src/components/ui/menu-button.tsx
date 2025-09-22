"use client"
import { useQuizPopupStore } from "@/store/quizPopupStore";
import { UserRound } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const MenuButton = () => {
  const [isClicked, setClicked] = useState(false);
  const setOpen = useQuizPopupStore(s => s.setOpen);
  const handleClick = useCallback(() => {
    setClicked(prev => !prev);
  }, [])
  const handleQuizClick = useCallback(() => {
    console.log('quiz click')
    setOpen(true)
  }, [])
  return (
    <div onClick={handleClick} className={`fixed bottom-10 right-10 bg-primary/10 border-border border-1 shadow-[0_0_10px_10px] shadow-primary/20 backdrop-blur-2xl rounded-2xl ${isClicked && 'scale-125'} ease-in-out transition-all duration-300 z-20 cursor-pointer`}>
      <div className="relative w-10 h-10 m-4">
        <Image
          src='/logo.png'
          alt='logo'
          fill
          className={`absolute bottom-0 right-0 left-0 top-0 ${isClicked && 'rotate-135'} transition-all ease-in-out duration-500 select-none`}
        />
        <div
          className={`group flex items-center justify-center absolute bottom-0 right-0 left-0 top-0 bg-gradient-to-br from-green-300 to-green-600 w-12 h-12
            ${isClicked ? 'translate-x-[-126px] translate-y-[30px] block opacity-100 scale-95' : 'invisible opacity-0 scale-0'}
            transition-all ease-in-out duration-100 rounded-full shadow-[0_0_2px_2px] shadow-green-400/75 hover:scale-110`}
        >
          <div className="relative transition-all ease-in-out duration-100">
            <UserRound size={20} color="#ffffff" />
            <span className="pointer-events-none text-sm bg-gradient-to-r from-green-300/75 via-75% to-green-600/75 text-white shadow-[0_0_2px_2px] shadow-green-400/75 px-2 w-28 rounded-md absolute scale-0 opacity-0 -translate-x-14 -translate-y-4 group-hover:-translate-x-31 group-hover:opacity-100 group-hover:scale-80 transition-all ease-in-out duration-100">Join the group</span>
          </div>
        </div>
        <div
          className={`group flex items-center justify-center absolute bottom-0 right-0 left-0 top-0 bg-gradient-to-br from-purple-300 to-purple-600 w-12 h-12
            ${isClicked ? 'translate-x-[-124px] translate-y-[-35px] block opacity-100 scale-95' : 'invisible opacity-0 scale-0'}
            transition-all ease-in-out duration-200 rounded-full shadow-[0_0_2px_2px] shadow-purple-400/75 hover:scale-110`}
        >
          <div className="relative transition-all ease-in-out duration-100">
            <UserRound size={20} color="#ffffff" />
            <span className="pointer-events-none text-sm bg-gradient-to-r from-purple-300/75 via-75% to-purple-600/75 text-white shadow-[0_0_2px_2px] shadow-purple-400/75 px-2 w-34 rounded-md absolute scale-0 opacity-0 -translate-x-14 -translate-y-5 group-hover:-translate-x-35 group-hover:opacity-100 group-hover:scale-80 transition-all ease-in-out duration-100">Contribute Recipe</span>
          </div>
        </div>
        <div
          className={`group flex items-center justify-center absolute bottom-0 right-0 left-0 top-0 bg-gradient-to-br from-yellow-300 to-yellow-600 w-12 h-12
            ${isClicked ? 'translate-x-[-91px] translate-y-[-91px] block opacity-100 scale-95' : 'invisible opacity-0 scale-0'}
            transition-all ease-in-out duration-300 rounded-full shadow-[0_0_2px_2px] shadow-yellow-400/75 hover:scale-110`}
        >
          <div className="relative transition-all ease-in-out duration-100">
            <UserRound size={20} color="#ffffff" />
            <span className="pointer-events-none text-sm bg-gradient-to-r from-yellow-300/75 via-75% to-yellow-600/75 text-white shadow-[0_0_2px_2px] shadow-yellow-400/75 px-2 w-38 rounded-md absolute scale-0 opacity-0 -translate-x-20 -translate-y-5 group-hover:-translate-x-39 group-hover:opacity-100 group-hover:scale-80 transition-all ease-in-out duration-100">Picture Profile Guide</span>
          </div>
        </div>
        <div
          className={`group flex items-center justify-center absolute bottom-0 right-0 left-0 top-0 bg-gradient-to-br from-red-300 to-red-600 w-12 h-12
            ${isClicked ? 'translate-x-[-35px] translate-y-[-124px] block opacity-100 scale-95' : 'invisible opacity-0 scale-0'}
            transition-all ease-in-out duration-400 rounded-full shadow-[0_0_2px_2px] shadow-red-400/75 hover:scale-110`}
          onClick={handleQuizClick}>
          <div className="relative transition-all ease-in-out duration-100">
            <UserRound size={20} color="#ffffff" />
            <span className="pointer-events-none text-sm bg-gradient-to-r from-red-300/75 via-75% to-red-600/75 text-white shadow-[0_0_2px_2px] shadow-red-400/75 px-2 w-28 rounded-md absolute scale-0 opacity-0 -translate-x-14 -translate-y-5 group-hover:-translate-x-30 group-hover:opacity-100 group-hover:scale-80 transition-all ease-in-out duration-100">Find My Color</span>
          </div>
        </div>
        <div
          className={`group flex items-center justify-center absolute bottom-0 right-0 left-0 top-0 bg-gradient-to-br from-blue-300 to-blue-600 w-12 h-12
            ${isClicked ? 'translate-x-[29px] translate-y-[-126px] block opacity-100 scale-95' : 'invisible opacity-0 scale-0'}
            transition-all ease-in-out duration-500 rounded-full shadow-[0_0_2px_2px] shadow-blue-400/75 hover:scale-110`}
        >
          <div className="relative transition-all ease-in-out duration-100">
            <UserRound size={20} color="#ffffff" />
            <span className="pointer-events-none text-sm bg-gradient-to-r from-blue-300/75 via-75% to-blue-600/75 text-white shadow-[0_0_2px_2px] shadow-blue-400/75 px-2 w-44 rounded-md absolute scale-0 opacity-0 -translate-x-25 -translate-y-5 group-hover:-translate-x-44 group-hover:opacity-100 group-hover:scale-80 transition-all ease-in-out duration-100">Contribute Demo Photo</span>
          </div>
        </div>
      </div >
    </div >
  )
}

export default MenuButton;
