import { ActionReducerMap } from '@ngrx/store';
import {
  PRODUCT_FEATURE_KEY,
  productsReducer,
} from './products/products.reducer';
import { Product } from './products/types/product.type';

export type AppState = {
  [PRODUCT_FEATURE_KEY]: Product[];
};

export const appReducer: ActionReducerMap<AppState> = {
  [PRODUCT_FEATURE_KEY]: productsReducer,
};
