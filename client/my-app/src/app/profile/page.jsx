import React from "react";
import Protected from "../hooks/useProtected";
import Profile from "../components/Profile/Profile";

const ProfilePage = () => {
  return (
    <div>
      <Protected>
        <Profile />
      </Protected>
    </div>
  );
};

export default ProfilePage;
