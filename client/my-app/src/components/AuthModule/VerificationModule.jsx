"use client";
import React, { useEffect, useRef, useState } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { style } from "../../utils/styled/style";
import { Button } from "@mui/material";
import { useActivationMutation } from "../../../redux/features/auth/authApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const VerificationModule = ({ route, setRoute }) => {
  const [varifyNumber, setVarifyNumber] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const [activation, { isError, isSuccess, data, error }] =
    useActivationMutation();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isSuccess) {
      toast.success("Account activation success");
      setRoute("login");
    }
    if (error) {
      if ("data" in error) {
        const errData = error;
        toast.error(errData.data.message);
      }
    }
  }, [isSuccess, error]);
  const inputRefs = [
    useRef < HTMLInputElement > null,
    useRef < HTMLInputElement > null,
    useRef < HTMLInputElement > null,
    useRef < HTMLInputElement > null,
  ];

  const handleInput = (index, value) => {
    setVarifyNumber({ ...varifyNumber, [index]: value });
    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };
  const handleSubmit = async () => {
    const activationCode = Object.values(varifyNumber).join("");
    const activationToken = token;
    await activation({ activationToken, activationCode });
  };
  return (
    <>
      <h2 className={style.title}>Verification Code</h2>
      <div className="w-full flex flex-col items-center justify-center mt-2">
        <div className="w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center mb-5">
          <VscWorkspaceTrusted size={40} />
        </div>
        <div className="w-[70%] 1100px:w-[70%] m-auto flex items-center justify-around mb-4">
          {Object.keys(varifyNumber).map((key, index) => {
            return (
              <input
                type="text"
                key={key}
                className="w-[55px] h-[55px] bg-transparent border-[3px] rounded-[10px] text-black items-center dark:text-white justify-center text-[16px] font-poppins outline-none text-center"
                placeholder=""
                // ref={inputRefs[index]}
                maxLength={1}
                onChange={(e) => handleInput(index, e.target.value)} // Correctly passed 'e'
              />
            );
          })}
        </div>
        <Button variant="outlined" type="submit" onClick={handleSubmit}>
          Verify
        </Button>
      </div>
    </>
  );
};

export default VerificationModule;
