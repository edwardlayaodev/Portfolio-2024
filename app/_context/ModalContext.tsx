"use client"

import { createContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode
}

interface IModalInterface {
  isOpen: boolean
  toggleModal: () => void
}

export const ModalContext = createContext<IModalInterface | undefined>(undefined);

export const ModalProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  )
}
