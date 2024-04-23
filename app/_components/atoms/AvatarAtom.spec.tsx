import '@testing-library/jest-dom'
import { RenderResult, render } from '@testing-library/react'
import AvatarAtom from './AvatarAtom';
describe('Avatar Component', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<AvatarAtom img='/vercel.svg' alt='vercel' />)
  })

  it('renders the Avatar', () => {
    const Avatar = component.getByAltText('vercel')
    expect(Avatar).toBeInTheDocument()
  })
})
