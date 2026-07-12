import type { ProductDetail, ProductSpecs as ProductSpecsType } from "@/types/product";
import { Description, List, Row, Term, Title, Wrapper } from "./ProductSpecs.styles";

const SPEC_LABELS: Record<keyof ProductSpecsType, string> = {
  screen: "Screen",
  resolution: "Resolution",
  processor: "Processor",
  mainCamera: "Main Camera",
  selfieCamera: "Selfie Camera",
  battery: "Battery",
  os: "OS",
  screenRefreshRate: "Screen Refresh Rate",
};

type ProductSpecsProps = Pick<ProductDetail, "brand" | "name" | "description" | "specs">;

export function ProductSpecs({ brand, name, description, specs }: ProductSpecsProps) {
  return (
    <Wrapper>
      <Title>Specifications</Title>
      <List>
        <Row>
          <Term>Brand</Term>
          <Description>{brand}</Description>
        </Row>
        <Row>
          <Term>Name</Term>
          <Description>{name}</Description>
        </Row>
        <Row>
          <Term>Description</Term>
          <Description>{description}</Description>
        </Row>
        {(Object.keys(specs) as Array<keyof ProductSpecsType>).map((key) => (
          <Row key={key}>
            <Term>{SPEC_LABELS[key]}</Term>
            <Description>{specs[key]}</Description>
          </Row>
        ))}
      </List>
    </Wrapper>
  );
}
