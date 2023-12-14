import { Client } from "@/core/supabase";

export function getBrands(client: Client) {
  return client.from("brand").select("*").throwOnError("Could not get brands");
}
