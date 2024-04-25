"use client"

import { ModalContext } from '@/app/_context/ModalContext'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import CardAtom from './CardAtom'

type Props = {
  children?: ReactNode
}

export default function ModalAtom({ children }: Props) {
  const ctx = useContext(ModalContext)
  return (
    <div className="fixed w-full bg-opacity-40 bg-neutral-500 min-h-screen flex flex-col justify-center items-center z-20">
      <CardAtom twClassBody='w-3/4' card={{ title: "Title", desc: "description" }}></CardAtom>

    </div>
  )

} 
