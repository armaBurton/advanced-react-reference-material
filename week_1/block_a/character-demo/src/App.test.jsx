import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('should navigate between list & detail views', async () => {
    render(
      <MemoryRouter initialEntries={['/characters']}>
        <App />
      </MemoryRouter>
    );

    // Check that we got a loading message for the character list:
    screen.getByText(/loading/i);

    // Find a character and click on them
    const link = await screen.findByText('Michael Scott');
    userEvent.click(link);

    // Check to see that we got a loading message for character detail:
    await screen.findByText('Loading character');

    // Check that character detail displays:
    await screen.findByText('Character: Michael Scott');
  });
});
