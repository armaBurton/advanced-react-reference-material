import fetch from 'cross-fetch';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  characterApiData,
  charactersApiData,
} from './tests/fixtures/characterData';

global.fetch = fetch;

const server = setupServer(
  rest.get('https://www.officeapi.dev/api/characters/', (req, res, ctx) =>
    res(ctx.json(charactersApiData))
  ),
  rest.get('https://www.officeapi.dev/api/characters/:id', (req, res, ctx) => {
    const { id } = req.params;
    console.log('ID from mocked request:', id);
    return res(ctx.json(characterApiData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
