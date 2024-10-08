import Image from "next/image";
import React from "react";
import UserProfileMenu from "./ProfileShortcut/UserProfileMenu";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 p-6">
          <Image
            src="/image/hero-img.png" // Replace with your image path
            alt="Course Image"
            width={500}
            height={500}
            className=""
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 p-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-Josefin text-black dark:text-white">
            Find Your Best Course
          </h1>
          <p className="mt-4 text-lg font-Poppins text-gray-700 dark:text-gray-300">
            Explore our extensive range of courses and discover the one that
            suits you best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
