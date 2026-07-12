"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif" }}>
        <main
          style={{
            maxWidth: 600,
            margin: "64px auto",
            padding: 24,
            textAlign: "center",
          }}
        >
          <p>An unexpected error has occurred in the application.</p>
          <button type="button" onClick={reset}>
            Retry
          </button>
        </main>
      </body>
    </html>
  );
}
