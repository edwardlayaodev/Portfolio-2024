
import '@testing-library/jest-dom'
import { RenderResult, render } from '@testing-library/react'
import LinkAtom from './LinkAtom';

describe('link Component', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<LinkAtom url='/test'>test</LinkAtom>)
  })

  it('renders the children', () => {
    const link = component.getByText("test")
    expect(link).toBeInTheDocument()
  })
})
