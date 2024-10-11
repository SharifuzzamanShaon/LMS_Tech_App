"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FiBook,
  FiChevronDown,
  FiClipboard,
  FiDollarSign,
  FiHome,
  FiLogOut,
  FiUsers,
} from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

import { BsArrowsAngleExpand } from "react-icons/bs";
import Link from "next/link";

const AdminLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const router = useRouter();
  const handleMenuClick = (path) => {
    router.push(path);
  };

  return (
    <div className={`min-h-screen flex`}>
      {/* Sidebar */}
      <div
        className={`bg-gray-200 dark:bg-gray-900 p-4 transition-all duration-300 ${
          isCollapsed ? "w-20" : "md:w-64 w-64"
        } h-screen sticky top-0`}
      >
        <div className="flex justify-between items-center border-b-4 border-gray-800 pb-4">
          <h1 className="dark:text-white text-black p-2 ">
            {!isCollapsed ? "Admin" : ""}
          </h1>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="dark:text-white text-black p-2 hover:bg-gray-700 hover:text-white rounded-lg"
          >
            {isCollapsed ? <BsArrowsAngleExpand /> : <RxCross1 />}
          </button>
        </div>
        <div className="flex flex-col mt-6 h-[100%]">
          <Link href="/admin-dashboard/dashboard">
            <span className="flex items-center mb-3 dark:text-white text-black p-2 hover:bg-gray-700 hover:text-white rounded-md transition duration-200">
              <FiHome
                className={`mr-2 ${isCollapsed ? "text-xl" : "text-2xl"}`}
              />
              {!isCollapsed && <span>Dashboard</span>}
            </span>
          </Link>
          {/* Courses with Dropdown */}
          <div className="relative">
            <span
              className="flex items-center justify-between mb-3 dark:text-white text-black p-2 hover:bg-gray-700 hover:text-white rounded-md transition duration-200 cursor-pointer"
            >
              <Link href={"/admin-dashboard/courses"}>
                <div className="flex items-center">
                  <FiBook onClick={() => setIsCoursesOpen(!isCoursesOpen)} // toggle dropdown
                    className={`mr-2 ${isCollapsed ? "text-xl" : "text-2xl"}`}
                  />
                  {!isCollapsed && <span>Courses</span>}
                </div>
              </Link>
              {/* Dropdown Icon */}
              {!isCollapsed && (
                <FiChevronDown onClick={() => setIsCoursesOpen(!isCoursesOpen)} // toggle dropdown
                  className={`transition-transform ${
                    isCoursesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </span>

            {/* Dropdown Menu */}
            {isCoursesOpen && (
              <div className="ml-8  mb-4 flex flex-col dark:text-white text-black">
                <Link href="/courses/create">
                  <span className="mb-4 p-2 hover:bg-gray-700 hover:text-white rounded-md transition duration-200">
                    Create Course
                  </span>
                </Link>
                <Link href="/courses/manage">
                  <span className="mb-4 p-2 hover:bg-gray-700 hover:text-white rounded-md transition duration-200">
                    Manage Courses
                  </span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/admin-dashboard/students">
            <span className="flex items-center mb-3 dark:text-white text-black p-2 hover:bg-gray-700 hover:text-white rounded-md transition duration-200">
              <FiUsers
                className={`mr-2 ${isCollapsed ? "text-xl" : "text-2xl"}`}
              />
              {!isCollapsed && <span>Students</span>}
            </span>
          </Link>
          <Link href="/admin-dashboard/payments">
            <span className="flex items-center mb-3 dark:text-white text-black p-2 hover:bg-gray-700 hover:text-white rounded-md transition duration-200">
              <FiDollarSign
                className={`mr-2 ${isCollapsed ? "text-xl" : "text-2xl"}`}
              />
              {!isCollapsed && <span>Payments</span>}
            </span>
          </Link>
          <Link href="/admin-dashboard/orders">
            <span className="flex items-center mb-3 dark:text-white text-black p-2 hover:bg-gray-700 hover:text-white rounded-md transition duration-200">
              <FiClipboard
                className={`mr-2 ${isCollapsed ? "text-xl" : "text-2xl"}`}
              />
              {!isCollapsed && <span>Orders</span>}
            </span>
          </Link>
          <span className="flex items-center mb-3 dark:text-white text-black p-2 hover:bg-gray-700 hover:text-white rounded-md transition duration-200">
            <FiLogOut
              className={`mr-2 ${isCollapsed ? "text-xl" : "text-2xl"}`}
            />
            {!isCollapsed && <span>Sign Out</span>}
          </span>
        </div>
      </div>
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
