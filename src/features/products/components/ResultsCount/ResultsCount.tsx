import { Text } from "./ResultsCount.styles";

export function ResultsCount({ count }: { count: number }) {
  const label = count === 1 ? "result" : "results";

  return (
    <Text role="status">
      {count} {label}
    </Text>
  );
}
