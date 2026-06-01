import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
  ResetPasswordPayload,
} from "@/types/auth";
import axiosInstance from "../lib/axios/axiosInstance";
import { useAuthStore } from "@/store/authStore";

export const authService = {
  register: async (payload: RegisterPayload): Promise<AuthResponse> => {
    const res = await axiosInstance.post("/auth/register", payload);
    return res.data;
  },

  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const res = await axiosInstance.post("/auth/login", payload);
    return res.data;
  },

  logout: async () => {
    await axiosInstance.post("/auth/logout");
  },

  me: async () => {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  },

  forgotPassword: async (email: string): Promise<{ message: string }> => {
    const res = await axiosInstance.post("/forgot-password", { email });
    return res.data;
  },

  /**
   * Submits the new password using the token received from the email.
   * Matches Laravel Fortify /reset-password
   */
  resetPassword: async (
    payload: ResetPasswordPayload,
  ): Promise<{ message: string }> => {
    const res = await axiosInstance.post("/reset-password", payload);
    return res.data;
  },

  /**
   * Triggers a new verification email to be sent to the logged-in user.
   * Standard Laravel Fortify / Sanctum endpoint.
   */
  resendVerification: async (): Promise<{ message: string }> => {
    const res = await axiosInstance.post("/email/verification-notification");
    return res.data;
  },

  verifyEmail: async (
    id: string,
    hash: string,
    expires: string,
    signature: string,
  ) => {
    const { data } = await axiosInstance.get(`/verify-email/${id}/${hash}`, {
      params: { expires, signature },
    });

    if (data?.user || data?.data?.user) {
      useAuthStore.getState().setUser(data.user);
    }
    console.log(data);
    return data;
  },

  deleteAccount: async () => {
    const { data } = await axiosInstance.delete("/account/delete");
    return data;
  },
};
