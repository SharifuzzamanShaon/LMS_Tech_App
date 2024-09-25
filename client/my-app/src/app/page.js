"use client";
import React, { useState } from "react";
import Heading from "./utils/Heading";
import HeroSection from "./components/HeroSection";
import userAuth from "./hooks/userAuth";
import { useSelector } from "react-redux";

const page = () => {
  const { user } = useSelector((state) => state.auth);
  const siteTitle = user ? `${user.username.split("").slice(0, 5).join("") + "..."}` : "LMS-App";
  return (
    <div>
      <Heading
        title={`${siteTitle} Profile`}
        description="This is a learning paltform"
        keywords="Programming, MERN, C#, Laravel, React JS"
      ></Heading>

      <HeroSection />
    </div>
  );
};

export default page;
