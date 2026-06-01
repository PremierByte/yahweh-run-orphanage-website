"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LoadingOverlay } from "../portal/shared/LoadingOverlay";
import { useAuthStore } from "@/store/authStore";

interface GuardProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function AuthGuard({
  children,
  allowedRoles = ["customer"],
}: GuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, isInitialized } = useAuthStore();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Wait until the store has finished checking for the local token/session
    if (!isInitialized) return;

    // Not logged in? Boot them to login
    if (!isAuthenticated) {
      router.replace(`/login?redirect=${pathname}`);
      return;
    }

    // EMAIL VERIFICATION CHECK
    // If not verified AND not already on the verify-notice page, redirect them.
    const isVerificationPage = pathname === "/verify-notice";
    if (user && !user.email_verified_at && !isVerificationPage) {
      router.replace("/verify-notice");
      return;
    }

    // ROLE CHECK
    const userRole = user?.role || "";
    if (allowedRoles && !allowedRoles.includes(userRole)) {
      router.replace("/unauthorized");
      return;
    }

    // Everything checks out
    setAuthorized(true);
  }, [isAuthenticated, isInitialized, user, allowedRoles, router, pathname]);

  // Show a loading state while checking auth to prevent "flicker"
  if (!isInitialized || (!authorized && pathname !== "/verify-notice")) {
    return (
      <LoadingOverlay
        loading={!isInitialized}
        message="Authenticating session..."
      />
    );
  }

  return <>{children}</>;
}
