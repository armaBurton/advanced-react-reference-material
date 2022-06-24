import { Link } from 'react-router-dom';
import { useAuth } from '../../context/UserContext';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <h1>Welcome to the Acme Inc. Employee Directory!</h1>
      <p>
        As an employee of Acme Inc., you&apos;re required to 
        create a profile on our intranet in order to gain access 
        to... things.
      </p>
      <p>Create an account, then log in and fill out the requested details.</p>
      <p>Thank you for your participation.</p>
      {isLoggedIn ? (
        <Link to="/profile">View your profile</Link>
      ) : (
        <>
          <Link to="/register">Create Account</Link>
          {' or ' /* done using a "portal" to keep spacing intact */}
          <Link to="/login">Sign In</Link>
        </>
      )}
    </>
  );
}
