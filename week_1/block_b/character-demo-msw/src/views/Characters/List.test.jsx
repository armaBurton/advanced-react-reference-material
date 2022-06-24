import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import CharacterList from './List';

describe('CharacterList', () => {
  it('renders a list of characters to the screen that are filterable', async () => {
    // Rendered our component to the "screen"
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    // Find an element with the text of "loading" (case insensitive)
    screen.getByText(/loading/i);

    // Wait and see if an element with the text of "Michael Scott" (case sensitive) appears
    await screen.findByText('Michael Scott');

    // Find the filter input box
    const search = screen.getByPlaceholderText('Find a character');

    // Type the word "dwight" into our search input
    userEvent.type(search, 'dwight');

    // Check that only "Dwight Schrute" appears
    const result = await screen.findAllByRole('listitem');
    expect(result.length).toEqual(1);
    expect(result[0].textContent).toEqual('Dwight Schrute');
  });
});
