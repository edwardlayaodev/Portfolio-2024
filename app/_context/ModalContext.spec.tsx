import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ModalContext, ModalProvider } from './ModalContext'
import { ReactNode } from 'react'
import { act } from 'react-dom/test-utils'

describe('Modal Context', () => {
  let isOpen: boolean | undefined
  let openModal: ((content: ReactNode) => void) | undefined
  let closeModal: (() => void) | undefined
  let content: ReactNode | undefined

  beforeEach(() => {
    render(<ModalProvider>
      <ModalContext.Consumer>
        {(contextValue) => {
          isOpen = contextValue?.isOpen
          openModal = contextValue?.openModal
          closeModal = contextValue?.closeModal
          content = contextValue?.content
          return (<p>{contextValue?.isOpen}</p>);
        }}
      </ModalContext.Consumer>
    </ModalProvider>)


  })

  it('should have the default values onMount', () => {
    expect(isOpen).toBe(false)
    expect(content).toBeNull()
  })

  it('should update isOpen and Content when openModal is called', () => {
    act(() => {
      if (openModal) openModal(<div>test</div>)
    })
    expect(isOpen).toBe(true)
    expect(content).not.toBeNull()
  })

  it('should update isOpen and Content to default values when closeModal is called', () => {
    act(() => {
      if (closeModal) closeModal()
    })
    expect(isOpen).toBe(false)
    expect(content).toBeNull()
  })


})
