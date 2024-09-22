import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_FEATURE_KEY, ProductFeatureState } from '../products.reducer';

export const productsFeatureStateSelector =
  createFeatureSelector<ProductFeatureState>(PRODUCT_FEATURE_KEY);

export function selectAllProducts() {
  return createSelector(productsFeatureStateSelector, (state) => state.items);
}

export function selectAllWishlistItems() {
  return createSelector(
    productsFeatureStateSelector,
    (state) => state.wishlistItems,
  );
}

export function isProductInWishlistSelector(productId: number) {
  return createSelector(productsFeatureStateSelector, (state) =>
    state.wishlistItems.includes(productId),
  );
}
