import { useState } from "react";
import { useUserProfile } from "../context/UserProfileContext";

const EditUserProfileForm: React.FC = () => {
  const { profile, updateUserProfile } = useUserProfile();
  const [name, setName] = useState<string>(profile.name);
  const [email, setEmail] = useState<string>(profile.email);
  const [age, setAge] = useState<string>(profile.age);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({ name, email, age });
    setName("");
    setEmail("");
    setAge("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default EditUserProfileForm;
