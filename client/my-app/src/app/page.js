"use client";
import React, { useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="ELearning"
        description="This is a learning paltform"
        keywords="Programming, MERN, C#, Laravel, React JS"
      ></Heading>
      <Header open={open} activeItem={activeItem} setOpen={setOpen}></Header>
      <HeroSection/>
      
    </div>
  );
};

export default page;
