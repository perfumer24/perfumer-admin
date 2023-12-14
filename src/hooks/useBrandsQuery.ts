import { useQuery } from "@tanstack/react-query";
import { Brand } from "@/types/database";
import { fetchBrands } from "@/queries/fetchBrands";
import useSupabase from "./useSupabase";

function useBrandsQuery() {
  const client = useSupabase();
  const queryKey = ["brand"];
  const queryFn: () => Promise<Brand[]> = async () => {
    return fetchBrands(client).then((result) => result.data);
  };

  return useQuery({ queryKey, queryFn });
}

export default useBrandsQuery;
