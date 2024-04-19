import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
  it('renders hello world on index page', () => {
    render(<Page />)

    const txt = screen.getByText('Hello World')

    expect(txt).toBeInTheDocument()
  })
})
