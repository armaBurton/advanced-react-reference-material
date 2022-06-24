import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './views/Characters/Detail';
import CharacterList from './views/Characters/List';

export default function App() {
  return (
    <Switch>
      <Route path="/characters/:id">
        <CharacterDetail />
      </Route>
      <Route path="/">
        <CharacterList />
      </Route>
    </Switch>
  );
}
