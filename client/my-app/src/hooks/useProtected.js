'use client'
import userAuth from "./userAuth";
import { redirect } from "next/navigation";

const Protected = ({ children }) => {
  const isAuthenticated = userAuth();
  
  return isAuthenticated ? children : redirect("/");
};

export default Protected;
