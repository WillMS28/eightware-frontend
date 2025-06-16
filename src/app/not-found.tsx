import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-4">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="underline text-primary">
        Go to Home
      </Link>
    </div>
  );
}
