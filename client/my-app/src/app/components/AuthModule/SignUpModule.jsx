"use client";
import React, { useState } from "react";
import { style } from "../../utils/styles/style";
import FormControl from "@mui/material/FormControl";
import { FaGoogle } from "react-icons/fa";
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
const Schema = Yup.object().shape({
  username: Yup.string().required("Need an unique username"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Please Enter your email"),
  password: Yup.string().required("Please Enter your password").min(6),
});
const SignUpModule = ({ route, setRoute }) => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Schema,
    onSubmit: async (...loginInfo) => {
      console.log(loginInfo);
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
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
            type="username"
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
            <span className="text-red-600">
              {errors.username && errors.username}
            </span>
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
            <span className="text-red-600">{errors.email && errors.email}</span>
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
              {errors.password ? (
                <span className="text-red-600">
                  {errors.password && errors.password}
                </span>
              ) : (
                <span>Mnimum 6 charecter</span>
              )}
            </FormHelperText>
          </FormControl>
        </div>
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained" color="primary" onClick={()=>setRoute("verify")}>
            Sign-Up
          </Button>
          <Button variant="contained" color="secondary">
            Google <FaGoogle />
          </Button>
        </Stack>
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
