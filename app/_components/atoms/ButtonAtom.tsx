'use client'
import React, { MouseEventHandler, ReactNode } from 'react'
import { ThemeColor } from '@/app/_types/ThemeColor'
import { ThemeSize } from '@/app/_types/ThemeSize'
type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
  twClass?: string
  type?: ThemeColor
  children: ReactNode
  size?: ThemeSize
}

export default function ButtonAtom({ onClick, twClass, type = 'primary', size = 'md', children }: Props) {
  const typeClasses: Record<ThemeColor, string> = {
    'neutral': 'btn-neutral',
    'primary': 'btn-primary',
    'secondary': 'btn-secondary',
    'info': 'btn-info',
    'success': 'btn-success',
    'warning': 'btn-warning',
    'error': 'btn-error',
    'link': 'btn-link',
    'outline': 'btn-outline'
  }

  const sizeClasses: Record<ThemeSize, string> = {
    'xs': 'btn-xs',
    'sm': 'btn-sm',
    'md': 'btn-md',
    'lg': 'btn-lg',
  }

  return (
    <button onClick={onClick} className={`btn ${sizeClasses[size]} ${typeClasses[type]} ${twClass}`}>{children}</button>
  )
}
