import React from 'react'

type Props = {
  twClass?: string
}

export default function SkeletonAtom({ twClass }: Props) {
  return (
    <div role="progressbar" className={`skeleton ${twClass}`} />
  )
}
