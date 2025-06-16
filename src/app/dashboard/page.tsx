"use client";

import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useLogout";
import { useUser } from "@/hooks/useUser";

export default function DashboardPage() {
  const { data: user, isLoading, error } = useUser();
  const { logout } = useLogout();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Not authorized</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Welcome, {user?.email}</h1>
      <Button className="mt-4" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
