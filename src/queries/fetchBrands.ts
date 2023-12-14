import { Client } from "@/core/supabase";
import { Brand } from "@/types";

export const fetchBrands = (client: Client) => {
  return client.from("brand").select("*").throwOnError("Could not get brands").returns<Brand[]>();
};
