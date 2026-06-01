import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import axiosInstance from "@/lib/axios/axiosInstance";

export const useAuthInit = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const token = useAuthStore((s) => s.access_token);

  useEffect(() => {
    if (!token) return;

    axiosInstance
      .get("/me")
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        useAuthStore.getState().logout();
      });
  }, [setUser, token]);
};
