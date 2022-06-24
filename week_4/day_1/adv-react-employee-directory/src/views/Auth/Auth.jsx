import { Redirect, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { useAuth } from '../../context/UserContext';

import styles from './Auth.css';

const PROFILE_PATH = '/profile';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { isLoggedIn, signUp, signIn } = useAuth();

  const signUpOptions = {
    action: signUp,
    redirectTo: '/confirm-email',
    header: 'Welcome!',
    label: 'Sign Up',
    message: <>Already have an account? <Link to="/login">Sign In</Link></>
  };

  const signInOptions = {
    action: signIn,
    redirectTo: PROFILE_PATH,
    header: 'Welcome back!',
    label: 'Sign In',
    message: <>Need an account? <Link to="/register">Sign Up</Link></>
  };

  const options = isSigningUp ? signUpOptions : signInOptions;

  const handleSubmit = async (email, password) => {
    await options.action(email, password);
    history.replace(options.redirectTo);
  };

  if (isLoggedIn) return <Redirect to={PROFILE_PATH} />;

  return (
    <section className={styles.auth}>
      <h2>{options.header}</h2>
      
      <br />
      
      <UserForm
        onSubmit={handleSubmit}
        label={options.label}
      />
      
      <p className={styles.subtext}>
        {options.message}
      </p>
      
    </section>
  );
}
