import { formatPrice } from "@/components/ui/formatPrice";
import { Wrapper, Label } from "./CartSummary.styles";

export function CartSummary({ total }: { total: number }) {
  return (
    <Wrapper>
      <Label>Total</Label>
      <span>{formatPrice(total)}</span>
    </Wrapper>
  );
}
