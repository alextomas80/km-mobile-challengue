import { env } from "@/config/env";
import type { ApiErrorBody } from "@/types/api";
import { ApiError } from "./errors";

/**
 * Server-only fetch wrapper for the external phone store API.
 * Never import this from a Client Component — `env.apiKey` must not reach the browser bundle.
 */
export async function fetchJson<T>(
  path: string,
  searchParams?: Record<string, string | number | undefined>,
): Promise<T> {
  const url = new URL(path, env.apiBaseUrl);

  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    }
  }

  const response = await fetch(url, {
    headers: { "x-api-key": env.apiKey },
    cache: "no-store",
  });

  if (!response.ok) {
    let body: ApiErrorBody | undefined;
    try {
      body = (await response.json()) as ApiErrorBody;
    } catch {
      body = undefined;
    }
    throw new ApiError(response.status, body?.message ?? response.statusText, body);
  }

  return (await response.json()) as T;
}
