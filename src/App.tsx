import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import AuthPage from "./pages/AuthPage";

export default function App() {
  // 로그인 여부에 따라 login vs Outlet
  const isLoggedIn = false;
  if (isLoggedIn)
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );

  return <AuthPage />;
}
