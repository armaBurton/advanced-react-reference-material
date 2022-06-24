import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
  it('renders a list of characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByText(/loading/i);

    const link = await screen.findByText('Morty Smith');
    userEvent.click(link);

    await screen.findByAltText('Image of Morty Smith');
  });
});
