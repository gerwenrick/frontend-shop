import { ActionReducerMap } from '@ngrx/store';
import {
  PRODUCT_FEATURE_KEY,
  productsReducer,
} from './products/products.reducer';
import { ProductRespons } from './products/types/product.type';

export type AppState = {
  [PRODUCT_FEATURE_KEY]: ProductRespons;
};

export const appReducer: ActionReducerMap<AppState> = {
  [PRODUCT_FEATURE_KEY]: productsReducer,
};
