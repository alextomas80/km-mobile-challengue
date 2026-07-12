import { PageContainer } from "@/components/layout/PageContainer";
import { ProductGridSkeleton } from "@/features/products/components/ProductGridSkeleton";
import { ToolbarSkeleton } from "@/features/products/components/ToolbarSkeleton";

export default function HomeLoading() {
  return (
    <PageContainer>
      <ToolbarSkeleton />
      <ProductGridSkeleton count={20} />
    </PageContainer>
  );
}
