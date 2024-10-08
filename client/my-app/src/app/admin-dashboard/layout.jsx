"use client";
import Header from "@/components/Header";
import { useState } from "react";
import AdminSidebar from "@/components/Admin-components/AdminSidebar";
import AdminDashboardHeader from "@/components/Admin-components/AdminDashboardHeader";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="h-screen ">
      <AdminDashboardHeader />
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
}
