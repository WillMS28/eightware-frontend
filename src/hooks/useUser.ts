import { getSecureApi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface User {
  email: string;
}

export const useUser = () => {
  return useQuery<User>({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await getSecureApi().get("/me");
      return res.data;
    },
    retry: false,
  });
};
