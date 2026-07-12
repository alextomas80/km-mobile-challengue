import { Button } from "@/components/ui/Button";
import { Wrapper } from "./ProductListMessage.styles";

export function ProductListEmpty({ query }: { query: string }) {
  return (
    <Wrapper>
      <p>No phones found for &quot;{query}&quot;.</p>
    </Wrapper>
  );
}

export function ProductListError({ onRetry }: { onRetry: () => void }) {
  return (
    <Wrapper>
      <p>We could not load the phones. Please try again.</p>
      <Button type="button" onClick={onRetry}>
        Retry
      </Button>
    </Wrapper>
  );
}
