"use client";
import React, { useRef, useState } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { style } from "../../utils/styled/style";

const VerificationModule = () => {
  const [invalidError, setInvalidError] = useState();
  const [varifyNumber, setVarifyNumber] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
  });
  const inputRef = [
    useRef < HTMLInputElement > null,
    useRef < HTMLInputElement > null,
    useRef < HTMLInputElement > null,
    useRef < HTMLInputElement > null,
  ];
  const handleInput = (index, value) => {
    setVarifyNumber({ ...varifyNumber, [index]: value });
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
                maxLength={1}
                onChange={(e) => handleInput(index, e.target.value)} // Correctly passed 'e'
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VerificationModule;
