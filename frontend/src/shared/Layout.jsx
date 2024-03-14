import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import EduNavbar from "../components/Navbar";
import { useSelector } from "react-redux";

const Layout = () => {
  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="flex flex-row bg-secondary h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className="w-full overflow-scroll bg-secondary h-svh">
        <EduNavbar />
        {/* <DrawerContainer />  */}
        <div className="p-3">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
