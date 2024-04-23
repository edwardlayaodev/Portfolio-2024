import '@testing-library/jest-dom'
import { RenderResult, render } from '@testing-library/react'
import DividerAtom from './DividerAtom';
describe('Divider Component', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<DividerAtom text='OR' />)
  })

  it('renders the Divider', () => {
    const divider = component.getByRole('separator')
    expect(divider).toBeInTheDocument()
  })

  it('renders the text', () => {
    const text = component.getByText('OR')
    expect(text).toBeInTheDocument()
  })


})
