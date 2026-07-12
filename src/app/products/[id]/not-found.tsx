import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main style={{ maxWidth: 600, margin: "64px auto", padding: 24, textAlign: "center" }}>
      <h1>Phone not found</h1>
      <p>The phone you are looking for does not exist or has been removed from the catalog.</p>
      <Link href="/">Back to catalog</Link>
    </main>
  );
}
