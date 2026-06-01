"use client";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { authService } from "@/services/authService";
import { useAuthStore } from "@/store/authStore";
import { AuthResponse, LoginPayload, RegisterPayload } from "@/types/auth";

type ApiErrorBody = {
  message?: string;
  errors?: Record<string, string[]>;
};

export const getAuthErrorMessage = (error: unknown, fallback: string) => {
  const axiosError = error as AxiosError<ApiErrorBody>;
  const fieldErrors = axiosError.response?.data?.errors;

  if (fieldErrors) {
    const firstField = Object.keys(fieldErrors)[0];
    const firstMessage = firstField ? fieldErrors[firstField]?.[0] : null;

    if (firstMessage) return firstMessage;
  }

  return axiosError.response?.data?.message || fallback;
};

export function useLoginMutation() {
  const setSession = useAuthStore((state) => state.setSession);
  const clearError = useAuthStore((state) => state.clearError);

  return useMutation<AuthResponse, unknown, LoginPayload>({
    mutationFn: authService.login,
    onMutate: clearError,
    onSuccess: setSession,
  });
}

export function useRegisterMutation() {
  const setSession = useAuthStore((state) => state.setSession);
  const clearError = useAuthStore((state) => state.clearError);

  return useMutation<AuthResponse, unknown, RegisterPayload>({
    mutationFn: authService.register,
    onMutate: clearError,
    onSuccess: setSession,
  });
}
