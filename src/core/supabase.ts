import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config";
import { Database } from "../types/database";

let client: ReturnType<typeof createClient<Database>> | undefined;

export function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }

  client = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
  return client;
}
