import { createContext, useContext, useState } from 'react';
import { getUser, signInUser } from '../services/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });

  const login = async (email, password) => {
    const authenticatedUser = await signInUser({ email, password });

    if (authenticatedUser) {
      // set the user in context and redirect to the page that they were
      // trying to get to
      setUser(authenticatedUser);
    }
  };

  const logout = () => {
    setUser({ email: null });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
