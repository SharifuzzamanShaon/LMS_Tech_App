"use client";
import React, { useState } from "react";
import { TextField, Autocomplete, MenuItem, FormControl } from "@mui/material";
import { FiCheck } from "react-icons/fi";
const names = [
  "Programming",
  "JavaScript",
  "Node js",
  "C++",
  "Web Server",
  "GitHub",
  "Git",
  "Docker",
  "Frotend",
  "Backend",
];

export default function GetCourseTags({ tags, setTags }) {
  const [selectedNames, setSelectedNames] = useState([]);

  return (
    <>
      <FormControl
        fullWidth
        variant="outlined"
        className="dark:text-white text-black "
      >
        <Autocomplete
          sx={{ m: 1, width: 500 }}
          multiple
          className="dark:text-white text-black"
          options={names}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          value={tags}
          onChange={(event, newValue) => setTags(newValue)}
          renderInput={(params) => (
            <TextField
              className="dark:text-white text-black "
              {...params}
              variant="outlined"
              label="Course tags"
              placeholder="Course tags"
            />
          )}
          renderOption={(props, option, { selected }) => (
            <MenuItem
              className="dark:text-white text-black"
              {...props}
              key={option}
              value={option}
              sx={{ justifyContent: "space-between" }}
            >
              {option}
              {selected ? <FiCheck /> : null}
            </MenuItem>
          )}
        />
        {/* Display selected names
        <div>
          <h4>Selected Names:</h4>
          {selectedNames.length > 0 ? (
            selectedNames.map((name) => <p key={name}>{name}</p>)
          ) : (
            <p>No names selected</p>
          )}
        </div> */}
      </FormControl>
    </>
  );
}
