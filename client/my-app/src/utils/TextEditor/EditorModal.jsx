"use client";
import React, { useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import TextEditor from "./TextEditor";
import { Box, Modal, Typography } from "@mui/material";
const EditorModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <BsArrowsAngleExpand />
      </button>
      <Modal
        open={true}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow-lg p-4">
          
          <Typography sx={{ mt: 2 }}>
            <TextEditor />
          </Typography>
        </Box>
      </Modal>
    </div>
    // <>
    //   {/* Modal toggle button */}
    //   <button
    //     onClick={toggleModal}
    //     className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     type="button"
    //   >
    //     <BsArrowsAngleExpand />
    //   </button>

    //   {/* Modal */}
    //   {isOpen && (
    //     <div className="fixed inset-0 flex justify-center items-center z-[9999999] bg-black bg-opacity-70">
    //       <div className="relative w-full max-w-2xl max-h-full p-4">
    //         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-[80vh] overflow-y-auto">
    //           {/* Modal header */}
    //           <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
    //             <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
    //               Course Description
    //             </h3>
    //             <button
    //               onClick={toggleModal}
    //               className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
    //             >
    //               X<span className="sr-only"> Close modal</span>
    //             </button>
    //           </div>
    //           {/* Modal body */}
    //           <div className="p-2 md:p-5 space-y-2">
    //             <TextEditor />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
};

export default EditorModal;
