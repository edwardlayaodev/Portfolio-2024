import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import ModalAtom from './ModalAtom';
import { ModalContext } from '@/app/_context/ModalContext';

describe('Modal Component', () => {
  const MockCloseModal = jest.fn()
  it('should render the content when isOpen is true', () => {
    render(<ModalContext.Provider value={{ isOpen: true, content: <div>test</div>, openModal: () => { }, closeModal: () => { } }} >
      <ModalAtom />
    </ ModalContext.Provider>)
    const text = screen.getByText("test")
    expect(text).toBeInTheDocument()
  })

  it('should not render the content when isOpen is false', () => {
    render(<ModalContext.Provider value={{ isOpen: false, content: <div>test</div>, openModal: () => { }, closeModal: () => { } }} >
      <ModalAtom />
    </ ModalContext.Provider>)
    const text = screen.queryByText("test")
    expect(text).not.toBeInTheDocument()
  })

  it('should call closeModal() when the overlay is clicked', () => {
    const { container } = render(<ModalContext.Provider value={{ isOpen: true, content: <div>test</div>, openModal: () => { }, closeModal: MockCloseModal }} >
      <ModalAtom />
    </ ModalContext.Provider>)
    const overlay = container.querySelector(".overlay")
    if (overlay) fireEvent.click(overlay)
    expect(MockCloseModal).toHaveBeenCalled();
  })
})
