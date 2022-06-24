import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function AuthButton({ className }) {
  const { isLoggedIn, signOut } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <button className={className} onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <Link to="/login" className={className}>
          <button>Sign In</button>
        </Link>
      )}
    </>
  );
}
