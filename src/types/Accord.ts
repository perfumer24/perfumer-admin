import { Database } from "@/types/database";

export interface AccordGetDTO
  extends Database["public"]["Tables"]["accord"]["Row"] {}
