import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ApiError } from "@/lib/api/errors";
import { BackButton } from "@/components/ui/BackButton";
import { getProductById } from "@/lib/api/products";
import { PageDetailsContainer } from "@/components/layout/PageDetailsContainer";
import { ProductDetailView } from "@/features/products/components/ProductDetailView";
import type { ProductDetail } from "@/types/product";

async function fetchProductOrNotFound(id: string): Promise<ProductDetail> {
  try {
    return await getProductById(id);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }
    throw error;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  try {
    const product = await getProductById(id);
    return {
      title: `${product.brand} ${product.name} | Phone catalog`,
      description: product.description,
    };
  } catch {
    return {};
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await fetchProductOrNotFound(id);

  return (
    <>
      <PageDetailsContainer>
        <BackButton />
        <ProductDetailView product={product} />
      </PageDetailsContainer>
    </>
  );
}
