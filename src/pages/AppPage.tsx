import React, { useEffect, useState } from "react";
import AuthPage from "./AuthPage";
import useSupabase from "../hooks/useSupabase";
import PerfumePage from "./PerfumePage";

export default function App() {
  const [session, setSession] = useState(null);
  const supabase = useSupabase();
  console.log("실행");

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
        <PerfumePage />
      </>
    );

  return <AuthPage />;
}
