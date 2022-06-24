import { Route, Switch } from 'react-router-dom';
import CharacterList from './views/Characters/List';
import Home from './views/Home/Home';
import styles from './App.css';

export default function App() {
  const headerColors = ['red', 'green', 'blue'];
  const randomColorIndex = Math.floor(Math.random() * headerColors.length);

  return (
    <>
      <main className={styles.container}>
        <header
          className={`${styles.header} ${
            styles[`header-${headerColors[randomColorIndex]}`]
          }`}
        >
          <h1>Characters of Rick &amp; Morty</h1>
        </header>
        <Switch>
          <Route path="/characters">
            <CharacterList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer className={styles.footer}>
          <p>&copy; 2022 Alchemy Code Lab</p>
        </footer>
      </main>
    </>
  );
}
