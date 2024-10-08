import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
  <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
    <h1 className="text-lg font-medium">Page Title</h1>
    <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300">
      Action 1
    </button>
    <button className="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300">
      Action 2
    </button>
    <button className="relative ml-2 text-sm focus:outline-none group">
      <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
        <svg
          className="w-5 h-5 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
      <div className="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
        <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
          Menu Item 1
        </a>
        <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
          Menu Item 2
        </a>
        <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
          Menu Item 3
        </a>
      </div>
    </button>
  </div>

  <div className="flex-grow p-6 overflow-y-auto bg-gray-200 text-black dark:text-white dark:bg-slate-600">
    <div className="grid grid-cols-3 gap-6 h-full">
      <div className="h-full col-span-1 bg-white border border-gray-300 text-black dark:text-white">
        Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 
        Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 
        Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 Box 1 
      </div> 
      <div className="h-full col-span-1 bg-white border border-gray-300">
        Box 2 Box 2 Box 2 Box 2 Box 2 Box 2
      </div>
      <div className="h-full col-span-1 bg-white border border-gray-300"></div>
      <div className="h-full col-span-2 bg-white border border-gray-300 text-black dark:text-white">
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
      </div>
      <div className="h-full col-span-1 bg-white border border-gray-300 text-black dark:text-white">
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
      </div>
      <div className="h-full col-span-1 bg-white border border-gray-300"></div>
      <div className="h-full col-span-2 bg-white border border-gray-300 text-black dark:text-white">
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
        Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3 Box 3
      </div>
    </div>
  </div>
</div>

  );
};

export default page;
