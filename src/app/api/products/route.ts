import { NextRequest, NextResponse } from "next/server";

import { ApiError } from "@/lib/api/errors";
import { getProducts } from "@/lib/api/products";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const search = searchParams.get("search") ?? undefined;
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");

  try {
    const products = await getProducts({
      search,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
    });
    return NextResponse.json(products);
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(error.body ?? { error: "ApiError", message: error.message }, { status: error.status });
    }
    return NextResponse.json(
      { error: "InternalError", message: "Unexpected error fetching products" },
      { status: 500 },
    );
  }
}
