import { Link } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import ProfileForm from '../../components/Profile/ProfileForm';
// import Loading from '../../components/Loading/Loading';
import { useUser } from '../../context/UserContext';

export default function ViewProfile() {
  const { user, profile, isLoaded, create } = useUser();
  // const [loading, setLoading] = useState(true);
  if(!isLoaded) return null;

  const hasProfile = user && profile;

  const handleCreate = async (profile) => {
    await create(profile);
  };

  // if (loading) return <Loading />;

  return hasProfile 
    ? <ShowProfile profile={profile} /> 
    : <CreateProfile 
      email={user.email} 
      onCreate={handleCreate} 
    />;
}

function CreateProfile({ email, onCreate }) {
  return (
    <>
      <p>
        You haven&apos;t created a profile yet! Fill out the form below to get
        started
      </p>

      <ProfileForm
        formLabel="Create Profile"
        onSubmit={onCreate}
        email={email}
      />
    </>
  );
}

function ShowProfile({ profile }) {
  return (
    <>
      <Link to="/profile/edit">
        <button>Edit Profile</button>
      </Link>
      <Profile profile={profile} />
    </>
  );
}
