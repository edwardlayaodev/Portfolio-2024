import { ThemeSize } from '@/app/_types/ThemeSize'
import React from 'react'

type Props = {
  size?: ThemeSize
}

export default function SpinnerAtom({ size = "md" }: Props) {
  const sizeClasses: Record<ThemeSize, string> = {
    'xs': 'loading-xs',
    'sm': 'loading-sm',
    'md': 'loading-md',
    'lg': 'loading-lg',
  }
  return (
    <span role='spinbutton' className={`loading loading-spinner ${sizeClasses[size]}`} />
  )

}
