"use client";
import React, { useEffect, useState } from "react";
import { style } from "../../utils/styled/style";
import FormControl from "@mui/material/FormControl";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import * as Yup from "yup";
import {
  Button,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import { BiHide, BiShow } from "react-icons/bi";
import { useRegisterMutation } from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
const Schema = Yup.object().shape({
  username: Yup.string().required("Need an unique username"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Please Enter your email"),
  password: Yup.string().required("Please Enter your password").min(6),
});
const SignUpModule = ({ route, setRoute }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [register, { isError, data, error, isSuccess }] = useRegisterMutation();
  useEffect(() => {
    if (isSuccess) {
      const msg = data?.message || "Registration Successful";
      toast.success(msg);
      setRoute("verify")
    }
    if (error) {
      if ("data" in error) {
        const errData = error;
        toast.error(errData.data.message);
      }
    }
  }, [isSuccess, error]);
  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema: Schema,
    onSubmit: async (signupInfo) => {
      await register(signupInfo);
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 max-w-md mx-auto font-Poppins"
      >
        <FormControl fullWidth variant="outlined">
          <InputLabel
            htmlFor="username"
            className={`${
              errors.username && touched.username && "text-red-600"
            }${style.title}`}
          >
            Username
          </InputLabel>
          <Input
            type="text"
            className={"dark:text-white text-black"}
            id="username"
            value={values.username}
            onChange={handleChange}
            aria-describedby="username-helper-text"
            required
          />
          <FormHelperText
            id="email-helper-text"
            className="dark:text-white text-black"
          >
            {errors.username && touched.username ? (
              <span className="text-red-600">{errors.username}</span>
            ) : (
              <span>Insert an Username</span>
            )}
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel
            htmlFor="email"
            className={`${
              errors.email && touched.email && "text-red-600"
            } dark:text-white text-black`}
          >
            Email address
          </InputLabel>
          <Input
            type="email"
            className={"dark:text-white text-black"}
            id="email"
            value={values.email}
            onChange={handleChange}
            aria-describedby="email-helper-text"
            required
          />
          <FormHelperText
            id="email-helper-text"
            className="dark:text-white text-black"
          >
            {errors.email && touched.email ? (
              <span className="text-red-600">{errors.email}</span>
            ) : (
              <span>Email address </span>
            )}
          </FormHelperText>
        </FormControl>
        <div>
          <FormControl fullWidth variant="outlined">
            <InputLabel
              htmlFor="password"
              className="dark:text-white text-black"
              place
            >
              Password
            </InputLabel>
            <Input
              type={`${showPassword ? "text" : "password"}`}
              className="dark:text-white text-black relative"
              id="password"
              value={values.password}
              onChange={handleChange}
              aria-describedby="password-helper-text"
              required
            />
            {showPassword ? (
              <BiShow
                size={22}
                className="absolute bottom-[42px] right-2 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <BiHide
                size={22}
                className="absolute bottom-[42px] right-2"
                onClick={() => setShowPassword(true)}
              />
            )}

            <FormHelperText
              id="password-helper-text"
              className="dark:text-white text-black"
            >
              {errors.password && touched.password ? (
                <span className="text-red-600">{errors.password}</span>
              ) : (
                <span>Mnimum 6 charecter</span>
              )}
            </FormHelperText>
          </FormControl>
        </div>
        <div className="w-full mt-5">
          <button type="submit" value="signup" className={`${style.button}`}>
            Sign-Up
          </button>
        </div>
        <div className="flex items-center justify-center">
            <FcGoogle  size={30} className="cursor-pointer mt-2"/>
            <FaGithub size={30} className="cursor-pointer ml-2 mt-2 text-black"/>
        </div>
        <p className="dark:text-white text-black">
          Already have account ?{" "}
          <span
            className="hyper cursor-pointer text-blue-800 dark:border-b-slate-100 border-b border-blue-800"
            onClick={() => setRoute("login")}
          >
            Login
          </span>
        </p>
      </form>
    </>
  );
};

export default SignUpModule;
