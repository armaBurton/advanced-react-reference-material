import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './context/UserContext';
import { SuggestionsProvider } from './context/SuggestionsContext';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import ViewProfile from './views/Profile/ViewProfile';
import EditProfile from './views/Profile/EditProfile';
import ViewSuggestions from './views/Suggestions/ViewSuggestions';
import ViewSuggestion from './views/Suggestions/ViewSuggestion';
import EditSuggestion from './views/Suggestions/EditSuggestion';
import AddSuggestion from './views/Suggestions/AddSuggestion';
import CopySuggestion from './views/Suggestions/CopySuggestion';
import Header from './components/Layout/Header';
import styles from './App.css';

export default function App() {
  return (
    <>
      <Toaster/>

      <UserProvider>
        <SuggestionsProvider>
          <Router>
            <Header />
            <main className={styles.main}>
              <Switch>
                <Route path="/login">
                  <Auth />
                </Route>
                <Route path="/register">
                  <Auth isSigningUp />
                </Route>
                <Route path="/confirm-email">
                  <ConfirmEmail />
                </Route>
                <PrivateRoute path="/profile/edit">
                  <EditProfile />
                </PrivateRoute>
                <PrivateRoute path="/profile">
                  <ViewProfile />
                </PrivateRoute>
                <PrivateRoute exact={true} path="/suggestions">
                  <ViewSuggestions />
                </PrivateRoute>
                <PrivateRoute exact={true} path="/suggestions/add">
                  <AddSuggestion />
                </PrivateRoute>
                <PrivateRoute exact={true} path="/suggestions/:id">
                  <ViewSuggestion />
                </PrivateRoute>
                <PrivateRoute exact={true} path="/suggestions/:id/edit">
                  <EditSuggestion />
                </PrivateRoute>
                <PrivateRoute exact={true} path="/suggestions/:id/copy">
                  <CopySuggestion />
                </PrivateRoute>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </main>
          </Router>
        </SuggestionsProvider>
      </UserProvider>
    </>
  );
}
