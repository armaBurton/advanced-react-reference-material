import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { getEntries } from '../../services/entries';

export default function Dashboard() {
  const { logout } = useUser();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchEntries = async () => {
    //   const results = await getEntries();
    //   setEntries(results);
    //   setLoading(false);
    // };
    // fetchEntries();

    // The above is the same as doing this:
    getEntries()
      .then(setEntries) // -> .then((whatever) => setEntries(whatever))
      .catch(console.error) // -> .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <p>You should only see this page if you're logged in</p>
      <button onClick={logout}>Sign out</button>
      {loading ? (
        <p>Loading entries...</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>{entry.content}</li>
          ))}
        </ul>
      )}
    </>
  );
}
