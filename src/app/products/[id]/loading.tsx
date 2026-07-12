export default function ProductDetailLoading() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 32,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            aspectRatio: "1 / 1",
            borderRadius: 16,
            background: "#e5e7eb",
          }}
        />
      </div>
    </main>
  );
}
