import '@testing-library/jest-dom'
import { RenderResult, render } from '@testing-library/react'
import TypewriterAtom from './TypewriterAtom';
describe('TextInput Component', () => {
  let component: RenderResult;
  const mockSpeak = jest.fn()
  beforeEach(() => {
    component = render(<TypewriterAtom text='hello' speakingHandler={mockSpeak} />)
  })

  it('calls speakingHandler', () => {
    expect(mockSpeak).toHaveBeenCalled()
  } 
)

})