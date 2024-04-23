import '@testing-library/jest-dom'
import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import CheckboxAtom from './CheckboxAtom'

describe('Checkbox Component', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<CheckboxAtom label="test" />)
  })

  it('renders the label properly', () => {
    const label = screen.getByText('test')
    expect(label).toBeInTheDocument()
  })

  it('checks properly', () => {
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

})
