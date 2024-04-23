import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import TextInputAtom from './TextInputAtom'
describe('TextInput Component', () => {
  const click = jest.fn()
  beforeEach(() => {
    render(<TextInputAtom type='text' label='label' placeholder='test' />)
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
