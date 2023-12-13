import { useMemo } from "react";
import { getSupabaseBrowserClient } from "@/core/supabase";

function useSupabase() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabase;
