import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getUser } from '../services/users';
import { getProfile } from '../services/profiles';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  const [profile, setProfile] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      setIsLoaded(false);

      try {
        if(!user) return setProfile();

        const profile = await getProfile();
        setProfile(profile);
        toast(`Welcome back ${profile.name}`, {
          icon: '👋'
        });
      }
      catch(err) {
        setProfile(null);
      }
      finally {
        setIsLoaded(true);
      }
    };

    loadProfile();  
  }, [user]);

  const value = { user, setUser, profile, setProfile, isLoaded };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
