import { useQuery } from "@tanstack/react-query";
import { fetchBrands } from "@/queries/fetchBrands";
import useSupabase from "./useSupabase";
import { BrandGetDTO } from "@/types";

function useBrandsQuery() {
  const client = useSupabase();
  const queryKey = ["brand"];
  const queryFn: () => Promise<BrandGetDTO[]> = async () => {
    return fetchBrands(client).then((result) => result.data);
  };

  return useQuery({ queryKey, queryFn });
}

export default useBrandsQuery;
