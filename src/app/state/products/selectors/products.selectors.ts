import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PRODUCT_FEATURE_KEY, ProductFeatureState } from "../products.reducer";

export const productsFeatureStateSelector = createFeatureSelector<ProductFeatureState>(PRODUCT_FEATURE_KEY);

export function selectAllProducts() {
  return createSelector(productsFeatureStateSelector, (state) => state.items);
}

export function selectAllWishlistItems() {
  return createSelector(productsFeatureStateSelector, (state) => state.wishlistItems);
}

export function selectProductsByIds(productIds: number[]) {
  return createSelector(productsFeatureStateSelector, (state) =>
    state.items.filter((item) => productIds.includes(item.id))
  );
}

export function isProductInWishlistSelector(productId: number) {
  return createSelector(productsFeatureStateSelector, (state) => state.wishlistItems.includes(productId));
}

export function selectProductCurrentStockById(productId: number) {
  return createSelector(productsFeatureStateSelector, (state) => {
    const matchingProduct = state.items.find((item) => Number(item.id) === productId);

    if (!matchingProduct) return null;

    const currentProductStock: number = matchingProduct.stock - matchingProduct.wishQuantity;

    if (Math.sign(currentProductStock) === -1) return 0;

    return currentProductStock;
  });
}
