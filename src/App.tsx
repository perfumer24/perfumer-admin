import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import AuthPage from "./AuthPage";

export default function App() {
  // 로그인 여부에 따라 login vs Outlet
  const isLoggedIn = true;
  if (isLoggedIn)
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );

  return <AuthPage />;
}
