
import '@testing-library/jest-dom'
import { RenderResult, render } from '@testing-library/react'
import SpinnerAtom from './SpinnerAtom';
describe('Spinner Component', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<SpinnerAtom />)
  })

  it('renders the spinner', () => {
    const spinner = component.getByRole('spinbutton')
    expect(spinner).toBeInTheDocument()
  })
})
