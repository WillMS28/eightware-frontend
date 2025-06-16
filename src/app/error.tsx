"use client";

import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="text-red-500">{error.message}</p>
          <Link href="/" className="underline text-primary mt-4">
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
