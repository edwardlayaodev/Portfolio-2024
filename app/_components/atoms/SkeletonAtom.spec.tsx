import '@testing-library/jest-dom'
import { RenderResult, render } from '@testing-library/react'
import SkeletonAtom from './SkeletonAtom';
describe('Skeleton Component', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<SkeletonAtom twClass='w-8 h-8' />)
  })

  it('renders the skeleton', () => {
    const skeleton = component.getByRole('progressbar')
    expect(skeleton).toBeInTheDocument()
  })
})
