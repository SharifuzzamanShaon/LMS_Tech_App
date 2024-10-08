import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../../firebase";
import { useSocialAuthMutation } from "../../../redux/features/auth/authApi";

const SocialAuthentication = ({setOpen}) => {
  const [socialAuth, { isSuccess, data, error }] = useSocialAuthMutation();
  useEffect(() => {
    if (isSuccess) {
      const msg = data.message || "Login Successful";
      toast.success(msg);
      setOpen(false);
    }
    if (error) {
      if ("data" in error) {
        toast.error(error.data.message);
      }
    }
  }, [isSuccess, error]);
  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      const newUserInfo = {
        name: response.user.email,
        email: response.user.email,
        photoURL: response.user.photoURL,
      };
      await socialAuth(newUserInfo);
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
      }
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <FcGoogle
          onClick={handleGoogleAuth}
          size={30}
          className="cursor-pointer mt-2"
        />
        <FaGithub size={30} className="cursor-pointer ml-2 mt-2 text-black" />
      </div>
    </>
  );
};

export default SocialAuthentication;
