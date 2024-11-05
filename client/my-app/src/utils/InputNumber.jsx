import { Button } from "@mui/material";
import React from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const InputNumber = ({ setTotalSection, totalSection }) => {
  return (
    <form className="max-w-xs mx-auto">
      <h3
     
        className=" mb-3 text-sm font-medium text-black dark:text-white"
      >
        Totoal Section:
      </h3>
      <div className="relative flex items-center">
        <Button
          type="button"
          id="decrement-button"
          data-input-counter-decrement="counter-input"
          onClick={() => setTotalSection(totalSection + 1)}
        >
          <IoMdAdd />
        </Button>
        <input
          type="text"
          id="counter-input"
          data-input-counter
          className="flex-shrink-0 text-black dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[0.5rem] text-center"
          placeholder=""
          value={totalSection}
          required
        />
        <Button
          type="button"
          id="increment-button"
          data-input-counter-increment="counter-input"
          onClick={() => setTotalSection(totalSection + 1)}
        >
          <IoMdRemove />
        </Button>
      </div>
    </form>
  );
};

export default InputNumber;
