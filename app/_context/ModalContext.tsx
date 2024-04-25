"use client"

import React, { createContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode
}

interface IModal {
  isOpen: boolean
  openModal: (content: ReactNode) => void
  closeModal: () => void
  content: ReactNode
}

export const ModalContext = createContext<IModal | undefined>(undefined);

export const ModalProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactNode | null>(null)

  function openModal(modalContent: ReactNode) {
    setContent(modalContent)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
    setContent(null)
  }

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
