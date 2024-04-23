import '@testing-library/jest-dom'
import { RenderResult, render } from '@testing-library/react'
import TextInputAtom from './TextInputAtom'
describe('TextInput Component', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<TextInputAtom type='text' label='label' placeholder='placeholder' />)
  })

  it('renders the label and placeholder', () => {
    const label = component.getByText('label')
    const placeholder = component.getByPlaceholderText('placeholder')
    expect(label).toBeInTheDocument()
    expect(placeholder).toBeInTheDocument()
  })

})
