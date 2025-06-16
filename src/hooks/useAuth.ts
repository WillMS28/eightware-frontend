"use client";

import { useMutation } from "@tanstack/react-query";
import { getPublicApi } from "@/services/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface AuthPayload {
  email: string;
  password: string;
}

interface SignupPayload extends AuthPayload {
  password_confirmation: string;
}

interface AuthResponse {
  email: string;
  token: string;
}

export const useAuth = () => {
  const router = useRouter();
  const api = getPublicApi();

  const loginMutation = useMutation({
    mutationFn: async (data: AuthPayload) => {
      const res = await api.post<AuthResponse>("/login", { user: data });
      localStorage.setItem(
        "token",
        res.headers.authorization?.split(" ")[1] || ""
      );
      return res.data;
    },
    onSuccess: () => {
      router.push("/profile"); // ou qualquer rota pós-login
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const signupMutation = useMutation({
    mutationFn: async (data: SignupPayload) => {
      const res = await api.post<AuthResponse>("/signup", { user: data });
      localStorage.setItem(
        "token",
        res.headers.authorization?.split(" ")[1] || ""
      );
      return res.data;
    },
    onSuccess: () => {
      router.push("/profile");
    },
  });

  return {
    login: loginMutation.mutate,
    signup: signupMutation.mutate,
    isLoading: loginMutation.isPending || signupMutation.isPending,
    isError: loginMutation.isError || signupMutation.isError,
  };
};
