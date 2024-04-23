import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TextInputAtom from './TextInputAtom'
describe('TextInput Component', () => {
  beforeEach(() => {
    render(<TextInputAtom type='text' label='label' placeholder='placeholder' />)
  })

  it('renders the texts properly', () => {
    const label = screen.getByText('label')
    const placeholder = screen.getByPlaceholderText('placeholder')
    expect(label).toBeInTheDocument()
    expect(placeholder).toBeInTheDocument()
  })

})
