import { ThemeSize } from '@/app/_types/ThemeSize'
import Image from 'next/image'
import React from 'react'

type Props = {
  size?: ThemeSize
  img: string
  alt: string
}

type SizeObj = {
  twClass: string
  px: number
}

export default function AvatarAtom({ img, alt, size = "md" }: Props) {
  const sizeValue: Record<ThemeSize, SizeObj> = {
    'xs': { twClass: "w-8", px: 8 },
    'sm': { twClass: "w-16", px: 16 },
    'md': { twClass: "w-20", px: 20 },
    'lg': { twClass: "w-32", px: 32 },
  }


  return (
    <Image
      src={img}
      className={`${sizeValue[size].twClass}`}
      width={sizeValue[size].px}
      height={sizeValue[size].px}
      alt={alt}
    />
  )
}
