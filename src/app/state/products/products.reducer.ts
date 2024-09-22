import { createReducer, on } from '@ngrx/store';
import { getAllProductsSuccessAction } from './actions/products.actions';
import { Product } from './types/product.type';

export const PRODUCT_FEATURE_KEY = 'products';

export type ProductFeatureState = {
  shopName: string;
  shopKeeper: string;
  items: Product[];
};

export const initialProductsState: ProductFeatureState = {
  shopName: '',
  shopKeeper: '',
  items: [],
};

export const productsReducer = createReducer(
  initialProductsState,
  on(getAllProductsSuccessAction, (state, { products }) => ({
    ...state,
    items: products,
  })),
);
