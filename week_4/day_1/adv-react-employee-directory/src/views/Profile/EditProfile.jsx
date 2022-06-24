import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import ProfileForm from '../../components/Profile/ProfileForm';
import { useUser } from '../../context/UserContext';


export default function EditProfile() {
  const history = useHistory();
  const { profile, update, isLoaded } = useUser();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if(!isLoaded) return null;

  const handleEdit = async (profile) => {
    try {
      setError('');
      setLoading(true);
      await update(profile);
      history.push('/profile');
    } catch (error) {
      setError('Oops, something went wrong. Please try again.');
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <ProfileForm
      formLabel="Edit Profile"
      name={profile?.name}
      email={profile?.email}
      birthday={profile?.birthday}
      bio={profile?.bio}
      error={error}
      onSubmit={handleEdit}
    />
  );
}
