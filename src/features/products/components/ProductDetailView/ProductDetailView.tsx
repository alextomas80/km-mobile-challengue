"use client";

import Image from "next/image";

import type { ProductDetail } from "@/types/product";
import { useProductSelection } from "../../hooks/useProductSelection";
import { ColorSelector } from "../ColorSelector";
import { StorageSelector } from "../StorageSelector";
import { ProductSpecs } from "../ProductSpecs";
import { AddToCartButton } from "../AddToCartButton";
import { SimilarProducts } from "../SimilarProducts";
import { formatPrice } from "@/components/ui/formatPrice";
import {
  BasePrice,
  ColorSelectorWrapper,
  ImageWrapper,
  Info,
  Layout,
  Name,
  Subtitle,
} from "./ProductDetailView.styles";

export function ProductDetailView({ product }: { product: ProductDetail }) {
  const { selectedColor, selectedStorage, displayImageUrl, currentPrice, basePrice, canAddToCart, actions } =
    useProductSelection(product);

  return (
    <>
      <Layout>
        <ImageWrapper>
          {displayImageUrl && (
            <Image
              src={displayImageUrl}
              alt={`${product.brand} ${product.name}`}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 510px"
            />
          )}
        </ImageWrapper>

        <Info>
          <Name>{product.name}</Name>
          {selectedColor && selectedStorage ? (
            <BasePrice>{formatPrice(currentPrice)}</BasePrice>
          ) : (
            <BasePrice>From {formatPrice(basePrice)}</BasePrice>
          )}

          <Subtitle>Storage. How much space do you need?</Subtitle>
          <StorageSelector
            storageOptions={product.storageOptions}
            selectedCapacity={selectedStorage?.capacity}
            onSelect={actions.selectStorage}
          />

          <ColorSelectorWrapper>
            <Subtitle>Color. Pick your favourite.</Subtitle>
            <ColorSelector
              colorOptions={product.colorOptions}
              selectedColorName={selectedColor?.name}
              onSelect={actions.selectColor}
            />
          </ColorSelectorWrapper>

          <AddToCartButton
            product={product}
            selectedColor={selectedColor}
            selectedStorage={selectedStorage}
            currentPrice={currentPrice}
            canAddToCart={canAddToCart}
          />
        </Info>
      </Layout>

      <ProductSpecs brand={product.brand} name={product.name} description={product.description} specs={product.specs} />

      <SimilarProducts products={product.similarProducts} />
    </>
  );
}
