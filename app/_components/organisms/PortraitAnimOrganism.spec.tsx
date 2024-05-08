import '@testing-library/jest-dom'
import { RenderResult, render } from '@testing-library/react'
import PortraitAnimOrganism from './PortraitAnimOrganism';

describe('PortraitAnimOrganism', () => {
  jest.mock('handleSpeak')
  let component: RenderResult;
  beforeEach(() => {
    component = render(<PortraitAnimOrganism />)
  })

})
