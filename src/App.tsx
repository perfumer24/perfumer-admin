import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import AuthPage from "./pages/AuthPage";
import useSupabase from "./hooks/useSupabase";

export default function App() {
  const [session, setSession] = useState(null);
  const supabase = useSupabase();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session", session);
      setSession(session);
    });
  }, [supabase]);

  if (session)
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );

  return <AuthPage />;
}
