'use client'
import React, { useState } from "react";
import Protected from "../../hooks/useProtected";
import Profile from "../../components/Profile/Profile";
import Header from "@/components/Header";
const ProfilePage = () => {
  
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="h-screen">
      <Protected>
        <Header open={open} activeItem={activeItem} setOpen={setOpen}></Header>
        <Profile />
      </Protected>
    </div>
  );
};

export default ProfilePage;
