'use client'
import userAuth from "./userAuth";
import { redirect } from "next/navigation";

const Protected = ({ children }) => {
  const isAuthenticated = userAuth();
  console.log(isAuthenticated);
  
  return isAuthenticated ? children : redirect("/");
};

export default Protected;
