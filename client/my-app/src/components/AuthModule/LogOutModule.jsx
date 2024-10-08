"use client";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { userLoggedOut } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const LogoutModule = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLoggedOut());
    toast.success("You are logged out");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px] dark:bg-slate-900 text-slate-900 rounded-[8px] shadow-lg p-4">
          <div className=" dark:text-white text-center mb-5">
            Are you sure to logout?
          </div>
          <div className="flex items-center justify-center row-span-2">
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              className="ml-5"
              onClick={handleLogout}
              variant="outlined"
              color="error"
            >
              Yes
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LogoutModule;
