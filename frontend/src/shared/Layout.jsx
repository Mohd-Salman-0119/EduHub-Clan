import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import EduNavbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-row bg-secondary h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className="w-full overflow-scroll bg-secondary h-svh">
        <EduNavbar />
        {/* <DrawerContainer />  */}
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
