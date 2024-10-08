"use client";
import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginModule from "../components/AuthModule/LoginModule";
import SignUpModule from "../components/AuthModule/SignUpModule";
import VerificationModule from "../components/AuthModule/VerificationModule";

const CustomModal = ({ open, setOpen }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("login");
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow-lg p-4">
          <Typography
            className={"dark:text-white text-black"}
            variant="h6"
            component="h2"
          >
            {route === "login" && "Login Now"}
            {route === "signUp" && "Sign-Up"}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <div>
              {route === "login" && (
                <LoginModule
                  route={route}
                  setRoute={setRoute}
                  setOpen={setOpen}
                />
              )}
              {route === "signUp" && (
                <SignUpModule route={route} setRoute={setRoute} />
              )}
              {route === "verify" && (
                <VerificationModule route={route} setRoute={setRoute} />
              )}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
