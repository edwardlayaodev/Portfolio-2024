
import '@testing-library/jest-dom'
import { RenderResult, render } from '@testing-library/react'
import NavbarOrganism from './NavbarOrganism';

describe('navbar Component', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<NavbarOrganism />)
  })

  // it('renders the brand properly', () => {
  //   const brand = component.getByText("edwardlayao.dev")
  //   expect(brand).toBeInTheDocument()
  // })


  it('renders the links properly', () => {
    const contact = component.getAllByText("Contact")
    const project = component.getAllByText("Projects")
    expect(contact).toHaveLength(2)
    expect(project).toHaveLength(2)
  })
})
