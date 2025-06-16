export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-3xl font-bold mb-4">401 - Not Authorized</h1>
      <p className="text-muted-foreground mb-4">
        You don&apos;t have permission to view this page.
      </p>
      <a href="/login" className="underline text-primary">
        Go to Login
      </a>
    </div>
  )
}
