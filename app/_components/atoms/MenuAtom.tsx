import { randKey } from '@/app/_helpers/random'
import React, { ReactNode } from 'react'

type Props = {
  menuItems: ReactNode[]
  orientation?: "horizontal" | "vertical"
}

export default function MenuAtom({ menuItems, orientation = "horizontal" }: Props) {
  return (
    <ul className={`menu ${orientation == 'horizontal' ? 'menu-horizontal gap-4' : 'menu-vertical gap-2'} bg-base-200 w-56 rounded-box`}>
      {menuItems.map((menuItem) => {
        return (
          <li key={randKey(5)}>{menuItem}</li>
        )
      })}
    </ul>
  )
}
