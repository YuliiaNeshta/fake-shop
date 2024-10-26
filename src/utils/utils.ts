import { useQueryClient } from "@tanstack/react-query";

export const useGetCachedQueryData = (key: string) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData([key]);
};
