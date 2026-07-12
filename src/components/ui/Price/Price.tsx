import { formatPrice } from "../formatPrice";
import { StyledPrice } from "./Price.styles";

export function Price({ amount, className }: { amount: number; className?: string }) {
  return <StyledPrice className={className}>{formatPrice(amount)}</StyledPrice>;
}
