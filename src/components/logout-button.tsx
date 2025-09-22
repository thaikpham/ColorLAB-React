"use client"
import { logoutAction } from "@/app/(auth)/action";
import { useUserStore } from "@/store/user-store";
import { LogOut } from "lucide-react";
import { useActionState, useCallback } from "react";

const LogoutButton = () => {
  const clearUser = useUserStore(s => s.clearUser);
  const [_, action, pending] = useActionState(logoutAction, null)

  const handleLogout = useCallback(() => {
    clearUser();
    action();
  }, [action])

  return (
    <button
      onClick={handleLogout}
      type="button"
      className="w-full flex items-center justify-between p-2 rounded-lg transition-colors duration-200 bg-destructive hover:bg-destructive/75 cursor-pointer"
      disabled={pending}
    >
      <div className="flex items-center gap-2">
        <LogOut className="w-4 h-4" />
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Logout</span>
      </div>
    </button >
  )
}

export default LogoutButton;
