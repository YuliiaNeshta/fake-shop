import { useQueryClient } from "@tanstack/react-query";
import { Product } from "../types/productTypes.ts";
import { useProductStore } from "../store/store.ts";

export const useGetCachedQueryData = (key: string) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData([key]);
};
