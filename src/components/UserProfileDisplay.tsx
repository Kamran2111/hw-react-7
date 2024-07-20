import { useUserProfile } from "../context/UserProfileContext";

const UserProfileDisplay = () => {
  const { profile } = useUserProfile();

  return (
    <div>
      <p>Name {profile.name}</p>
      <p>Age {profile.age}</p>
      <p>Email {profile.email}</p>
    </div>
  );
};

export default UserProfileDisplay;
