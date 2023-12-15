import { Database } from "@/types/database";

export interface BrandGetDTO extends Database["public"]["Tables"]["brand"]["Row"] {}
