import { Database } from "@/types/database";

export interface PerfumePriceGetDTO
  extends Database["public"]["Tables"]["perfume_price"]["Row"] {}
