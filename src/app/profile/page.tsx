"use client";

import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useLogout";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const { data: user, isLoading, error } = useUser();
  const { logout } = useLogout();

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    router.push("/unauthorized");
    return null;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Welcome, {user?.email}</h1>
      <Button className="mt-4" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
