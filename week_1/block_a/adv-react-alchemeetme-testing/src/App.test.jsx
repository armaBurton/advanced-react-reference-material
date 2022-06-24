import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Should render the header', async () => {
    render(<App />)

    const image = screen.getByAltText('Alchemy Logo')
    const headerText = await screen.findByLabelText(/meet vonta!/i)
    const header = screen.getByRole('banner')

    expect(image).toBeInTheDocument()
    expect(headerText).toBeInTheDocument()
    expect(header).toHaveStyle({ background: '#333' })
  })
})
