import React, { ReactNode } from 'react'
import { ThemeSize } from '@/app/_types/ThemeSize'
type Props = {
  label: ReactNode
  twClassInput?: string
  value?: string
  size?: ThemeSize
}

export default function CheckboxAtom({ label, twClassInput, value, size = "md" }: Props) {
  const sizeClasses: Record<ThemeSize, string> = {
    'xs': 'checkbox-xs',
    'sm': 'checkbox-sm',
    'md': 'checkbox-md',
    'lg': 'checkbox-lg',
  }
  return (
    <label className='cursor-pointer label gap-2 max-w-12'>
      <span className='label-text'>{label}</span>
      <input type='checkbox' value={value} className={`${twClassInput} checkbox ${sizeClasses[size]}`} />
    </label>
  )
}
