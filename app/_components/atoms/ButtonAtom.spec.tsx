import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonAtom from './ButtonAtom'

describe('Button Component', () => {
  const click = jest.fn()
  beforeEach(() => {
    render(<ButtonAtom onClick={click}>test</ButtonAtom>)
  })
  it('renders the children properly', () => {
    const txt = screen.getByText('test')
    expect(txt).toBeInTheDocument()
  })

  it('triggers onClick fn onClick', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(click).toHaveBeenCalled()
  })
})
