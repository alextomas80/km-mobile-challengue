const formatter = new Intl.NumberFormat("es-ES", {
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return `${formatter.format(amount)} EUR`;
}
