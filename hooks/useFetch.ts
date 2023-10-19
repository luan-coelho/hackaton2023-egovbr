import useSWR, { SWRResponse } from "swr";
import api from "@/services/api";

function useFetch<Data = any, Error = any>(url: string) {
  const { isLoading, data, error, mutate } = useSWR<Data, Error>(
    url,
    async url => {
      const response = await api.get<Data>(url);
      return response.data;
    },
    { revalidateIfStale: false, revalidateOnFocus: false, revalidateOnMount: true, revalidateOnReconnect: false },
  );
  return { isLoading, data, error, mutate } as SWRResponse<Data>;
}

export { useFetch };
