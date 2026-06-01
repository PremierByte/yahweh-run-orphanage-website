import { can } from "@/lib/rbac/can";
import { useAuthStore } from "@/store/authStore";
import { Permission } from "@/types/permission";

export function usePermission(permission: Permission) {
  const user = useAuthStore((s) => s.user);

  if (!user) return false;

  return can(user.role, permission);
}
