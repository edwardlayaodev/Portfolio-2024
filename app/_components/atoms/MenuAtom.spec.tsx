import '@testing-library/jest-dom'
import { RenderResult, render, screen } from '@testing-library/react'
import MenuAtom from './MenuAtom';
describe('Skeleton Component', () => {
  const items = ["a", "b", "c"]
  let component: RenderResult;
  beforeEach(() => {
    component = render(<MenuAtom menuItems={items} />)
  })

  it('renders all the menuItems', () => {
    items.forEach((item) => {
      const text = screen.getByText(item)
      expect(text).toBeInTheDocument()
    })

  })
})
