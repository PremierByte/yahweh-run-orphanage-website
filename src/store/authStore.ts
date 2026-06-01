import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authService } from "@/services/authService";
import { User } from "@/types/user";
import { AuthResponse, LoginPayload, RegisterPayload } from "@/types/auth";

interface AuthState {
  user: User | null;
  access_token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;

  login: (data: LoginPayload) => Promise<AuthResponse>;
  register: (data: RegisterPayload) => Promise<AuthResponse>;
  logout: () => void;
  clearError: () => void;
  setInitialized: (val: boolean) => void;
  setUser: (user: User) => void;
  setSession: (data: { user: User; access_token: string }) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      access_token: null,
      isAuthenticated: false,
      isLoading: false,
      isInitialized: false,
      error: null,

      setInitialized: (val) => set({ isInitialized: val }),
      setUser: (user) => set({ user: user }),
      setSession: ({ user, access_token }) =>
        set({
          user,
          access_token,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        }),
      clearError: () => set({ error: null }),

      register: async (data) => {
        try {
          set({ isLoading: true, error: null });
          const res = await authService.register(data);
          set({
            user: res.user,
            access_token: res.access_token,
            isAuthenticated: true,
            isLoading: false,
          });
          return res;
        } catch (err: unknown) {
          const apiError = err as { response?: { data?: { message?: string } } };
          const message =
            apiError.response?.data?.message || "Registration failed";
          set({
            error: message,
            isLoading: false,
          });
          throw err;
        }
      },

      login: async (data) => {
        try {
          set({ isLoading: true, error: null });
          const res = await authService.login(data);
          set({
            user: res.user,
            access_token: res.access_token,
            isAuthenticated: true,
            isLoading: false,
          });
          return res;
        } catch (err: unknown) {
          const apiError = err as { response?: { data?: { message?: string } } };
          const message = apiError.response?.data?.message || "Login failed";
          set({
            error: message,
            isLoading: false,
          });
          throw err;
        }
      },

      logout: () => {
        set({
          user: null,
          access_token: null,
          isAuthenticated: false,
          error: null,
        });
      },
    }),
    {
      name: "auth-storage",
      // This is the "magic" part for cPanel/Next.js hydration
      onRehydrateStorage: (state) => {
        return () => {
          state?.setInitialized(true);
        };
      },
      partialize: (state) => ({
        user: state.user,
        access_token: state.access_token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
