"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
  title: string;
  icon?: React.ReactNode;
  position?: 'left' | 'right';
  handleClick?: () => void;
  path?: string;
  otherClasses?: string;
  className?: string;
}

const MagicButton = ({title, icon, position, handleClick, path, otherClasses, className}: Props) => {
  const router = useRouter()
  return (
    <button onClick={() => handleClick ? handleClick() : path ? router.push(path) : {}} className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none duration-300 ${className}`}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default MagicButton