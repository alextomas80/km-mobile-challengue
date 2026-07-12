import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ maxWidth: 600, margin: "64px auto", padding: 24, textAlign: "center" }}>
      <h1>Page not found</h1>
      <p>The content you are looking for does not exist or has been moved.</p>
      <Link href="/">Back to home</Link>
    </main>
  );
}
