"use client";
import { Button, FormControl, Input } from "@mui/material";
import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";

const CourseDataModule = () => {
  const [benefits, setBenefits] = useState([{ id: Date.now() }, { value: "" }]);
  const handleRemoveInput = (id) => {
    setBenefits(benefits.filter((benefit) => benefit.id !== id));
  };
  return (
    <>
      {/* <FormControl>
        <p className="mb-4 text-lg text-gray-700 dark:text-white">
          Benefits of this course
        </p>
        {benefits.map((input, index) => (
          <div key={input.id} className="flex items-center space-x-4 mb-4">
            <Input
              key={index}
              type="text"
              className="dark:text-white text-black w-full border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              value={input.value}
              minLength={5}
              maxLength={20}
              id="benefits"
              placeholder="Enter at least 20 characters"
              onChange={(e) => {
                const newBenefits = [...benefits];
                newBenefits[index].value = e.target.value;
                setBenefits(newBenefits);
              }}
            />
            <button
              onClick={() => handleRemoveInput(input.id)}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none"
            >
              <FiDelete />
            </button>
          </div>
        ))}
        <Button
          className="mt-2 text-black dark:text-white"
          onClick={handleAddInput}
          disabled={benefits.length >= 5}
          size="sm"
        >
          Add Benefit
        </Button>
      </FormControl> */}

      K K K
    </>
  );
};

export default CourseDataModule;
