import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/config";
import { Database } from "@/types/database";

export type Client = ReturnType<typeof createClient<Database>> | undefined;

export function getSupabaseBrowserClient() {
  const client = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
  return client;
}
