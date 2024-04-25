"use client"

import { ModalContext } from '@/app/_context/ModalContext'
import React, { useContext } from 'react'

export default function ModalAtom() {
  const ctx = useContext(ModalContext)

  function close(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLDivElement).classList.contains("overlay")) {
      ctx?.closeModal()
    }
  }

  return (
    (ctx?.isOpen &&
      <div onClick={close} className="overlay fixed w-full bg-opacity-40 bg-neutral-500 min-h-screen flex flex-col justify-center items-center z-50">
        {ctx?.content}
      </div>
    )
  )

} 
