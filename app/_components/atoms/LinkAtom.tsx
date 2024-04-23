import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode
  url: string
}

export default function LinkAtom({ children, url }: Props) {
  return (
    <Link className='link' href={url}>{children}</Link>
  )
}
