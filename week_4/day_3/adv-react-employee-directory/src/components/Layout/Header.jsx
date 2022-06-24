import { Link } from 'react-router-dom';
import { useUser, useAuth } from '../../hooks/user';
import { useSuggestionCount } from '../../hooks/suggestions';
import AuthButton from '../../components/AuthButton/AuthButton';

import styles from './Header.css';
import lilBookie from '../../assets/images/lil-bookie.png';

export default function Header() {
  const { user, profile, isLoaded } = useUser();
  const { isLoggedIn } = useAuth();
  const count = useSuggestionCount();

  if(isLoggedIn && !isLoaded) return null;

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.brand}>
          <img
            src={lilBookie}
            alt="lil' bookie, the Acme Inc. Employee Directory mascot"
          />
          <h2>Acme Employee Directory</h2>
        </Link>

        <Link to="/suggestions" className={styles.count}>
          {count} Suggestion{count !== 1 && 's'}
        </Link>

        <p className={styles.authStatus}>
          {isLoggedIn ? (
            <>
              <span className={styles.signedInAs}>Signed in as</span>
              <span> {profile?.name || user.email}</span>
            </>
          ) : (
            <span className={styles.notSignedIn}>Not Signed In</span>
          )}
          <AuthButton className={styles.authButton} />
        </p>
      </header>
    </>
  );
}
