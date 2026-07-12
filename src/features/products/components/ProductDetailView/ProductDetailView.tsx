"use client";

import Image from "next/image";

import { AddToCartButton } from "../AddToCartButton";
import {
  BasePrice,
  ColorSelectorWrapper,
  ImageWrapper,
  Info,
  Layout,
  Name,
  Subtitle,
} from "./ProductDetailView.styles";
import { ColorSelector } from "../ColorSelector";
import { formatPrice } from "@/components/ui/formatPrice";
import { ProductSpecs } from "../ProductSpecs";
import { SimilarProducts } from "../SimilarProducts";
import { StorageSelector } from "../StorageSelector";
import { useProductSelection } from "../../hooks/useProductSelection";
import type { ProductDetail } from "@/types/product";

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
