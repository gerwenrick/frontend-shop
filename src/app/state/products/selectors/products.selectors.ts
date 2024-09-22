import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_FEATURE_KEY, ProductFeatureState } from '../products.reducer';

export const productsFeatureStateSelector =
  createFeatureSelector<ProductFeatureState>(PRODUCT_FEATURE_KEY);

export function allProductsSelector() {
  return createSelector(productsFeatureStateSelector, (state) => state.items);
}
