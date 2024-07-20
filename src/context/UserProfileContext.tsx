import React, { createContext, useState, useContext, ReactNode } from "react";
type UserProfile = {
  name: string;
  email: string;
  age: string;
};

type UserProfileContextType = {
  profile: UserProfile;
  updateUserProfile: (profile: UserProfile) => void;
};

const UserProfileContext = createContext<UserProfileContextType | undefined>(
  undefined
);

interface UserProfileProviderProps {
  children: ReactNode;
}

export const UserProfileProvider: React.FC<UserProfileProviderProps> = ({
  children,
}) => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    age: "",
  });

  const updateUserProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  return (
    <UserProfileContext.Provider value={{ profile, updateUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};
