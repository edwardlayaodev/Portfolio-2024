'use client'
import React from 'react'
import { ThemeSize } from '@/app/_types/ThemeSize'

type Props = {
  type: 'text' | 'email' | 'password'
  position?: 'horizontal' | 'vertical'
  twClassInput?: string
  twClassLabel?: string
  label: string
  placeholder?: string
  size?: ThemeSize
  value?: string
}

export default function TextInputAtom({ value, size = 'md', placeholder, position = 'horizontal', label, type, twClassInput }: Props) {

  const positionClass = position == 'horizontal' ? 'flex-row gap-4' : 'flex-col gap-2'

  const sizeClasses: Record<ThemeSize, string> = {
    'xs': 'input-xs',
    'sm': 'input-sm',
    'md': 'input-md',
    'lg': 'input-lg',
  }

  return (
    <div className={`flex ${positionClass}`}>
      <label className='input input-bordered flex items-center gap-2'>
        {label}
        <input value={value} className={`${twClassInput} ${sizeClasses[size]}`} type={type} placeholder={placeholder} />
      </label>
    </div>
  )
}
