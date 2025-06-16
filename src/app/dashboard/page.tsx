"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSecureApi } from "@/services/api";

export default function DashboardPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const api = getSecureApi();
        const res = await api.get("/me");
        setEmail(res.data.email);
        setLoading(false);
      } catch (_err) {
        router.push("/login");
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {email}!</h1>
      <p>This is a protected page.</p>
    </main>
  );
}
