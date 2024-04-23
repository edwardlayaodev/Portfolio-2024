import React from 'react'

type Props = {
  orientation?: 'horizontal' | 'vertical'
  text?: string
}

export default function DividerAtom({ orientation = "vertical", text }: Props) {
  const orientationClass = orientation == 'horizontal' ? 'divider-horizontal' : ''
  return (
    <div role='separator' className={`divider ${orientationClass}`}>{text}</div>
  )
}
