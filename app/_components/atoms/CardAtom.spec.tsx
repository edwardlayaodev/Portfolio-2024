import '@testing-library/jest-dom'
import { RenderResult, render } from '@testing-library/react'
import CardAtom from './CardAtom';
describe('Card Component', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<CardAtom card={{ title: "title", desc: "desc", actions: [<button key={"1"}>OK</button>] }} />)
  })

  it('renders the title and description', () => {
    const title = component.getByText('title')
    const desc = component.getByText('desc')
    expect(title).toBeInTheDocument()
    expect(desc).toBeInTheDocument()
  })

})
