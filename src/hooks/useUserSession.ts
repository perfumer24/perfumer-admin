import useSupabase from "@/hooks/useSupabase";
import { useEffect, useState } from "react";

export const useUserSession = () => {
  const [session, setSession] = useState(null);
  const supabase = useSupabase();

  useEffect(() => {
    console.log("App 컴포넌트 useEffect");
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session", _event, session);
      setSession(session);
    });
  }, [supabase]);

  return session;
};
