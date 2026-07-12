import { getProducts } from "@/lib/api/products";
import { ProductListContainer } from "@/features/products/components/ProductListContainer";
import { PageContainer } from "@/components/layout/PageContainer";

export default async function HomePage() {
  const products = await getProducts({ limit: 20 });

  return (
    <PageContainer>
      <ProductListContainer initialProducts={products} />
    </PageContainer>
  );
}
