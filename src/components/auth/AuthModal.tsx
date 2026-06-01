"use client";

import { useState } from "react";
import { X, Mail, Lock, User, ArrowRight, Github } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";
import { RegisterPayload } from "@/types/auth";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  onSuccess,
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuthStore();

  const [formData, setFormData] = useState<RegisterPayload>({
    name: "",
    email: "",
    role: "customer",
    password: "",
    password_confirmation: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "login") {
        await login(formData);
      } else {
        await register(formData);
        toast.success("Account created!");
      }
      onSuccess();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Auth failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 pt-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-neutral-900 tracking-tight">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-sm text-neutral-500 mt-2 font-medium">
              {mode === "login"
                ? "Login to access your saved addresses"
                : "Join us for a faster checkout experience"}
            </p>
          </div>

          {/* Social Login (Optional) */}
          <button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border border-neutral-100 rounded-2xl font-bold text-sm text-neutral-700 hover:bg-neutral-50 transition-all mb-6">
            <Github size={18} />
            Continue with Github
          </button>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-100"></div>
            </div>
            <span className="relative bg-white px-4 text-[10px] font-black text-neutral-300 uppercase tracking-widest">
              Or email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  size={18}
                />
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-neutral-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary border transition-all text-sm font-medium"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            )}

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                size={18}
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-neutral-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary border transition-all text-sm font-medium"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                size={18}
              />
              <input
                required
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-neutral-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary border transition-all text-sm font-medium"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-primary text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
            >
              {loading
                ? "Authenticating..."
                : mode === "login"
                  ? "Sign In"
                  : "Register"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          {/* Footer Toggle */}
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500 font-medium">
              {mode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
              <button
                onClick={() => setMode(mode === "login" ? "register" : "login")}
                className="ml-2 text-primary font-black hover:underline"
              >
                {mode === "login" ? "Sign Up" : "Log In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
